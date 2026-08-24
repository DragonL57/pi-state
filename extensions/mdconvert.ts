/**
 * mdconvert tool: convert any supported file to Markdown via Microsoft MarkItDown.
 *
 * Wraps the ~/.local/bin/mdconvert CLI (venv: ~/.venvs/markitdown-venv).
 * Supported: PDF, DOCX, PPTX, XLSX/XLS, images (EXIF), audio (transcription),
 * HTML, CSV, JSON, XML, EPUB, ipynb, msg, ZIP, plain text, http(s) URLs, YouTube.
 *
 * Behavior:
 *  - Local file: writes <stem>.md next to the source (same-named .md is skipped
 *    unless force, same-batch stem collisions get -2/-3 suffixes), then returns
 *    the content inline when small, or the path + head excerpt when large.
 *  - Directory: batch-converts binary formats, returns the list of written paths.
 *  - URL: writes a safe <host>-<slug>.md in the working directory.
 *
 * Inline limit exists so huge documents don't bloat context: use the read tool
 * with offset/limit on the returned path for large files.
 */

import { Type } from "@earendil-works/pi-ai";
import {
	defineTool,
	withFileMutationQueue,
	type ExtensionAPI,
} from "@earendil-works/pi-coding-agent";
import { statSync, readFileSync } from "node:fs";
import { resolve, dirname, extname, basename, join } from "node:path";

const MDCONVERT = "/home/thelong/.local/bin/mdconvert";

/** Return content inline when at or below this many characters. */
const INLINE_LIMIT = 40_000;
/** Head excerpt length for large results. */
const EXCERPT_LIMIT = 2_000;

const URL_SCHEMES = ["http://", "https://", "file://", "data:"];

function isUrl(source: string): boolean {
	return URL_SCHEMES.some((s) => source.startsWith(s));
}

/** Strip a leading @ (some models prepend it to path args). */
function normalizeSource(source: string, cwd: string): string {
	let s = source;
	if (s.startsWith("@")) s = s.slice(1);
	if (isUrl(s)) return s;
	return resolve(cwd, s);
}

/** Expected default output path for a local file: <stem>.md next to source. */
function defaultOutputPath(source: string): string {
	return join(dirname(source), basename(source, extname(source)) + ".md");
}

/** Sanitize a URL into a local filename, mirroring the CLI's url_output_path. */
function urlOutputPath(url: string): string {
	const host = (new URL(url).hostname || "url").replace(/\./g, "-");
	const pathname = new URL(url).pathname;
	const tail = pathname.replace(/^\/+/, "").replace(/\//g, "-") || "index";
	const base = tail.replace(/[^A-Za-z0-9._-]/g, "-").slice(0, 120).replace(/^-+|-+$/g, "");
	return (host + "-" + (base || "url")) + ".md";
}

const mdconvertTool = defineTool({
	name: "mdconvert",
	label: "MarkItDown Convert",
	description:
		"Convert a file, URL, or directory to Markdown using Microsoft MarkItDown, so its content can be read. " +
		"Handles PDF, DOCX, PPTX, XLSX/XLS, images (EXIF metadata), audio (transcription), HTML, CSV, JSON, XML, EPUB, ipynb, Outlook msg, ZIP, and plain text. " +
		"Local files are written as <stem>.md next to the source and returned inline when small (under 40k chars); large results return the path plus a head excerpt, so follow up with the read tool (offset/limit) on that path. " +
		"Directories batch-convert and return the list of written paths.",
	promptSnippet: "Convert non-text files (PDF, DOCX, XLSX, PPTX, EPUB, audio, images) to Markdown",
	promptGuidelines: [
		"Use mdconvert to convert files the read tool cannot handle (PDF, DOCX, XLSX, PPTX, EPUB, ipynb, msg, audio, ZIP, image metadata) into Markdown before reading them.",
		"Use mdconvert on a directory to batch-convert all non-text files inside it.",
		"When mdconvert returns only a path and excerpt (large file), read that .md file with the read tool using offset/limit instead of inlining it.",
		"Use mdconvert with force=true to regenerate an existing .md output that may be stale.",
	],
	parameters: Type.Object({
		source: Type.String({
			description:
				"File path, directory, or http(s):// URL to convert to Markdown. Local paths resolve against the working directory.",
		}),
		force: Type.Optional(
			Type.Boolean({
				description:
					"Regenerate the .md output even if it already exists. Default false (existing outputs are kept and reported).",
			})
		),
		output: Type.Optional(
			Type.String({
				description: "Explicit output .md path (single source only). Resolves against the working directory.",
			})
		),
	}),

	async execute(_toolCallId, params, signal, onUpdate, ctx) {
		const source = normalizeSource(params.source, ctx.cwd);
		const outAbs = params.output ? resolve(ctx.cwd, params.output) : undefined;

		// Resolve the expected default output path up front so the mutation queue
		// (parallel tool-call safety) is keyed on the file we will touch.
		const expectedOut = outAbs ?? (isUrl(source) ? join(ctx.cwd, urlOutputPath(source)) : defaultOutputPath(source));

		try {
			return await withFileMutationQueue(expectedOut, async () => {
				const isDir = !isUrl(source) && isDirectory(source);
				const args = [source, ...(params.force ? ["-f"] : []), ...(outAbs ? ["-o", outAbs] : [])];

				onUpdate?.({ content: [{ type: "text", text: `Converting ${source} ...` }] });

				const result = await piExec(args, ctx.cwd, signal);
				const stderr = result.stderr.trim();
				if (result.code !== 0) {
					const message = stderr.split("\n").pop() || `exit code ${result.code}`;
					throw new Error(`mdconvert failed on ${source}: ${message}`);
				}

				// Directory batch: return the list of written files.
				if (isDir) {
					const written = result.stdout.split("\n").filter((l) => l.trim() && !l.trim().startsWith("skip:"));
					const skipped = stderr.split("\n").filter((l) => l.includes("skip:"));
					return {
						content: [{
							type: "text",
							text:
								`Converted ${written.length} file(s) from ${source}:\n` +
								written.map((p) => `- ${p}`).join("\n") +
								(skipped.length ? `\n\nSkipped (already exist, use force=true to regenerate):\n${skipped.join("\n")}` : ""),
						}],
						details: { written, skipped },
					};
				}

				// Single source: figure out which file to read back.
				let readPath = expectedOut;
				if (result.stdout.trim()) {
					const first = result.stdout.trim().split("\n")[0];
					if (!first.startsWith("skip:")) readPath = resolve(ctx.cwd, first);
				}

				const text = readFileSync(readPath, "utf8");
				const reused = stderr.includes("skip:");
				const note = reused
					? "\n\nNote: the .md output already existed and was kept. Content may be stale; pass force=true to regenerate."
					: "";

				if (text.length <= INLINE_LIMIT) {
					return {
						content: [{ type: "text", text: text + note }],
						details: { path: readPath, chars: text.length, reused },
					};
				}

				const excerpt = text.slice(0, EXCERPT_LIMIT);
				return {
					content: [{
						type: "text",
						text:
							`Converted ${readPath} (${text.length.toLocaleString()} chars). Content is too large to inline; ` +
							`read the file with the read tool using offset/limit.\n\nHead excerpt:\n\n${excerpt}\n\n…` +
							note,
					}],
					details: { path: readPath, chars: text.length, reused },
				};
			});
		} catch (err) {
			return {
				content: [{
					type: "text",
					text: `mdconvert failed: ${err instanceof Error ? err.message : String(err)}`,
				}],
				details: {},
			};
		}
	},
});

function isDirectory(p: string): boolean {
	try {
		return statSync(p).isDirectory();
	} catch {
		return false;
	}
}

// Wrapper around pi.exec (captured from the extension closure below).
let piExec: (args: string[], cwd: string, signal?: AbortSignal) => Promise<{
	stdout: string;
	stderr: string;
	code: number;
	killed: boolean;
}>;

export default function (pi: ExtensionAPI) {
	piExec = (args, cwd, signal) =>
		pi.exec(MDCONVERT, args, { signal, cwd, timeout: 600_000 });
	pi.registerTool(mdconvertTool);
}
