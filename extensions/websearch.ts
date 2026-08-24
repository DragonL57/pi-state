/**
 * Web Search tool powered by the Exa Search API.
 *
 * Registers a `websearch` tool callable by the LLM.
 *
 * API key resolution order:
 *   1. `EXA_API_KEY` environment variable
 *   2. `exa.apiKey` in ~/.pi/agent/settings.json (or project .pi/settings.json)
 *
 * API docs: https://exa.ai/docs/llms.txt
 */

import { Type } from "@earendil-works/pi-ai";
import { defineTool, getAgentDir, type ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const EXA_ENDPOINT = "https://api.exa.ai/search";

const SEARCH_TYPES = ["auto", "fast", "instant", "deep-lite", "deep", "deep-reasoning"] as const;
const CATEGORIES = ["company", "people", "publication", "news", "personal site", "financial report"] as const;
const CONTENT_MODES = ["highlights", "text", "summary", "none"] as const;

function readApiKey(): string | undefined {
	const fromEnv = process.env.EXA_API_KEY;
	if (fromEnv && fromEnv.trim()) return fromEnv.trim();
	const paths = [
		join(getAgentDir(), "settings.json"),
		join(process.cwd(), ".pi", "settings.json"),
	];
	for (const path of paths) {
		try {
			if (!existsSync(path)) continue;
			const raw = JSON.parse(readFileSync(path, "utf-8")) as Record<string, unknown>;
			const exa = raw["exa"];
			if (exa && typeof exa === "object" && !Array.isArray(exa)) {
				const key = (exa as Record<string, unknown>).apiKey;
				if (typeof key === "string" && key.trim()) return key.trim();
			}
		} catch {
			// unreadable settings — try next path
		}
	}
	return undefined;
}

async function exaSearch(params: {
	query: string;
	type?: string;
	numResults?: number;
	category?: string;
	includeDomains?: string[];
	excludeDomains?: string[];
	startPublishedDate?: string;
	endPublishedDate?: string;
	moderation?: boolean;
	userLocation?: string;
	contents?: string;
	maxCharacters?: number;
	maxAgeHours?: number;
}, apiKey: string, signal?: AbortSignal): Promise<unknown> {
	const body: Record<string, unknown> = {
		query: params.query,
		type: params.type ?? "auto",
		numResults: params.numResults ?? 10,
	};
	if (params.category) body.category = params.category;
	if (params.includeDomains?.length) body.includeDomains = params.includeDomains;
	if (params.excludeDomains?.length) body.excludeDomains = params.excludeDomains;
	if (params.startPublishedDate) body.startPublishedDate = params.startPublishedDate;
	if (params.endPublishedDate) body.endPublishedDate = params.endPublishedDate;
	if (params.moderation) body.moderation = true;
	if (params.userLocation) body.userLocation = params.userLocation;

	const contents: Record<string, unknown> = {};
	switch (params.contents ?? "highlights") {
		case "highlights":
			contents.highlights = true;
			break;
		case "text":
			contents.text = params.maxCharacters ? { maxCharacters: params.maxCharacters } : true;
			break;
		case "summary":
			contents.summary = true;
			break;
		case "none":
			break;
	}
	if (Object.keys(contents).length > 0) {
		if (typeof params.maxAgeHours === "number") contents.maxAgeHours = params.maxAgeHours;
		body.contents = contents;
	}

	const res = await fetch(EXA_ENDPOINT, {
		method: "POST",
		signal,
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${apiKey}`,
		},
		body: JSON.stringify(body),
	});

	let data: unknown;
	try {
		data = await res.json();
	} catch {
		data = undefined;
	}

	if (!res.ok) {
		const message =
			data && typeof data === "object" && "error" in data
				? String((data as { error: unknown }).error)
				: `HTTP ${res.status}`;
		throw new Error(`Exa search failed (${res.status}): ${message}`);
	}
	return data;
}

function formatResults(data: unknown): string {
	if (!data || typeof data !== "object") return "No results returned.";

	const record = data as Record<string, unknown>;
	const results = Array.isArray(record.results) ? (record.results as Record<string, unknown>[]) : [];
	if (results.length === 0) {
		const output = record.output;
		if (output && typeof output === "object" && "content" in output) {
			const content = (output as { content: unknown }).content;
			return `No page results, but synthesized output:\n\n${String(content)}`;
		}
		return "No results found.";
	}

	const lines: string[] = [];
	results.forEach((result, i) => {
		const title = typeof result.title === "string" ? result.title : "(untitled)";
		const url = typeof result.url === "string" ? result.url : "";
		const published = typeof result.publishedDate === "string" ? result.publishedDate : undefined;
		const author = typeof result.author === "string" ? result.author : undefined;
		lines.push(`### ${i + 1}. ${title}`);
		lines.push(`URL: ${url}`);
		if (published) lines.push(`Published: ${published}`);
		if (author) lines.push(`Author: ${author}`);
		const highlights = Array.isArray(result.highlights) ? result.highlights.filter((h): h is string => typeof h === "string") : [];
		if (highlights.length > 0) {
			lines.push("Highlights:");
			for (const h of highlights) lines.push(`- ${h}`);
		}
		if (typeof result.summary === "string" && result.summary) {
			lines.push(`Summary: ${result.summary}`);
		}
		if (typeof result.text === "string" && result.text) {
			const maxText = 6000;
			const text = result.text.length > maxText ? `${result.text.slice(0, maxText)}\n…[truncated]` : result.text;
			lines.push(`Text:\n${text}`);
		}
		lines.push("");
	});

	const output = record.output;
	if (output && typeof output === "object" && "content" in output) {
		lines.push(`## Synthesized output\n${String((output as { content: unknown }).content)}`);
	}
	if (record.costDollars && typeof record.costDollars === "object" && "total" in record.costDollars) {
		lines.push(`\n(cost: $${String((record.costDollars as { total: unknown }).total)})`);
	}
	return lines.join("\n").trim();
}

const websearchTool = defineTool({
	name: "websearch",
	label: "Web Search (Exa)",
	description:
		"Search the web using the Exa search engine. Returns ranked results with titles, URLs, and content. " +
		"Supports semantic natural-language queries, domain filters, date ranges, categories (news, company, people, publication, …), " +
		"and content modes. Default content mode is 'highlights' (compact excerpts, recommended for agents). " +
		"Use contents='text' with maxCharacters for full-page reading, contents='summary' for LLM summaries, " +
		"and maxAgeHours=0 to force fresh (live-crawled) content for time-sensitive queries. " +
		"Search types: 'auto' (default, balanced), 'fast'/'instant' (low latency), 'deep-lite'/'deep'/'deep-reasoning' (multi-step synthesis, slower).",
	parameters: Type.Object({
		query: Type.String({ description: "Natural language search query. Supports long, semantically rich descriptions." }),
		type: Type.Optional(Type.Union(
			SEARCH_TYPES.map((t) => Type.Literal(t)),
			{ description: "Search method. Default: auto." },
		)),
		numResults: Type.Optional(Type.Integer({ minimum: 1, maximum: 100, description: "Number of results (default 10)." })),
		category: Type.Optional(Type.Union(
			CATEGORIES.map((c) => Type.Literal(c)),
			{ description: "Focus on a specific content category." },
		)),
		includeDomains: Type.Optional(Type.Array(Type.String(), {
			description: "Only return results from these domains (e.g. reuters.com, *.substack.com).",
		})),
		excludeDomains: Type.Optional(Type.Array(Type.String(), {
			description: "Exclude results from these domains. Not supported with category 'company'/'people'.",
		})),
		startPublishedDate: Type.Optional(Type.String({
			description: "ISO 8601 date (e.g. 2025-01-01). Only return links published after this date.",
		})),
		endPublishedDate: Type.Optional(Type.String({
			description: "ISO 8601 date. Only return links published before this date.",
		})),
		moderation: Type.Optional(Type.Boolean({ description: "Filter unsafe content from results." })),
		userLocation: Type.Optional(Type.String({
			description: "Two-letter ISO country code (e.g. 'US') to localize results.",
		})),
		contents: Type.Optional(Type.Union(
			CONTENT_MODES.map((m) => Type.Literal(m)),
			{ description: "Content mode: 'highlights' (default, excerpts), 'text' (full page, use maxCharacters), 'summary' (LLM summary), 'none' (URLs only)." },
		)),
		maxCharacters: Type.Optional(Type.Integer({
			description: "Character cap for full page text (used with contents='text').",
		})),
		maxAgeHours: Type.Optional(Type.Integer({
			description: "Max age of cached content in hours. 0 forces live crawling (fresher, slower). -1 never live-crawls.",
		})),
	}),

	async execute(_toolCallId, params, signal, _onUpdate, _ctx) {
		const apiKey = readApiKey();
		if (!apiKey) {
			return {
				content: [{
					type: "text",
					text: "No Exa API key configured. Set the EXA_API_KEY environment variable or add `\"exa\": {\"apiKey\": \"...\"}` to settings.json (get one at https://dashboard.exa.ai/api-keys).",
				}],
				details: {},
			};
		}

		try {
			const data = await exaSearch(params, apiKey, signal);
			return {
				content: [{ type: "text", text: formatResults(data) }],
				details: {},
			};
		} catch (err) {
			return {
				content: [{
					type: "text",
					text: `Web search failed: ${err instanceof Error ? err.message : String(err)}`,
				}],
				details: {},
			};
		}
	},
});

export default function (pi: ExtensionAPI) {
	pi.registerTool(websearchTool);
}
