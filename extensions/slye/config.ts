import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

export const CONFIG_FILENAME = "slye.json";

export type ModelReference = {
  provider: string;
  id: string;
};

/**
 * Optional rewriting overrides stored in `slye.json`. All are optional, so the
 * original SLYE behavior is unchanged until a value is set.
 *
 * - `systemPrompt`: replaces the built-in rewrite instructions. A string is
 *   used verbatim; an array of strings is joined with newlines.
 * - `minProseCharacters`: response is rewritten only when its prose (outside
 *   fenced code) is at least this long. Default 200.
 * - `maxContextCharacters`: cap on earlier-conversation context sent to the
 *   rewrite model. Default 8000.
 */
export type RewriteOverrides = {
  systemPrompt?: string[] | string;
  minProseCharacters?: number;
  maxContextCharacters?: number;
};

export type SlyeConfig =
  | {
      enabled: false;
      model?: ModelReference;
      overrides?: RewriteOverrides;
    }
  | {
      enabled: true;
      model: ModelReference;
      overrides?: RewriteOverrides;
    };

const CONFIG_KEYS = ["enabled", "model", "systemPrompt", "minProseCharacters", "maxContextCharacters"];

export type ConfigReadResult =
  | { kind: "missing"; path: string }
  | { kind: "valid"; path: string; config: SlyeConfig }
  | { kind: "invalid"; path: string };

export type EffectiveConfig =
  | { kind: "unconfigured" }
  | { kind: "invalid"; path: string }
  | { kind: "valid"; path: string; scope: "global" | "project"; config: SlyeConfig };

export function parseConfig(value: unknown): SlyeConfig | undefined {
  if (!isPlainObject(value)) {
    return undefined;
  }

  const keys = Object.keys(value);
  if (keys.some((key) => !CONFIG_KEYS.includes(key))) {
    return undefined;
  }

  if (typeof value.enabled !== "boolean") {
    return undefined;
  }

  const model = value.model === undefined ? undefined : parseModelReference(value.model);
  if (value.model !== undefined && model === undefined) {
    return undefined;
  }

  const overrides = parseOverrides(value);
  if (overrides === undefined) {
    return undefined;
  }

  if (value.enabled) {
    return model === undefined ? undefined : { enabled: true, model, overrides };
  }

  return { enabled: false, model, overrides };
}

function parseOverrides(value: Record<string, unknown>): RewriteOverrides | undefined {
  const out: RewriteOverrides = {};

  if (value.systemPrompt !== undefined) {
    if (typeof value.systemPrompt === "string" && value.systemPrompt.trim() !== "") {
      out.systemPrompt = value.systemPrompt;
    } else if (
      Array.isArray(value.systemPrompt) &&
      value.systemPrompt.length > 0 &&
      value.systemPrompt.every((line) => typeof line === "string" && line.trim() !== "")
    ) {
      out.systemPrompt = value.systemPrompt;
    } else {
      return undefined;
    }
  }

  const minProse = positiveInteger(value.minProseCharacters);
  if (value.minProseCharacters !== undefined && minProse === undefined) {
    return undefined;
  }
  if (minProse !== undefined) {
    out.minProseCharacters = minProse;
  }

  const maxContext = positiveInteger(value.maxContextCharacters);
  if (value.maxContextCharacters !== undefined && maxContext === undefined) {
    return undefined;
  }
  if (maxContext !== undefined) {
    out.maxContextCharacters = maxContext;
  }

  return out;
}

function positiveInteger(value: unknown): number | undefined {
  return typeof value === "number" && Number.isInteger(value) && value > 0 ? value : undefined;
}

/** Join configured system-prompt lines into one string, or the fallback when unset. */
export function resolveSystemPrompt(overrides: RewriteOverrides | undefined, fallback: string): string {
  const configured = overrides?.systemPrompt;
  if (configured === undefined) {
    return fallback;
  }
  return Array.isArray(configured) ? configured.join("\n") : configured;
}

/** Carry overrides from an existing config onto a new base so /slye on|off|model never drops them. */
export function withPreservedOverrides(existing: SlyeConfig | undefined, next: SlyeConfig): SlyeConfig {
  const overrides = existing?.overrides;
  if (overrides === undefined || Object.keys(overrides).length === 0) {
    return next;
  }
  return { ...next, overrides };
}

export async function readConfig(path: string): Promise<ConfigReadResult> {
  let text: string;
  try {
    text = await readFile(path, "utf8");
  } catch (error) {
    if (isMissingFile(error)) {
      return { kind: "missing", path };
    }
    return { kind: "invalid", path };
  }

  try {
    const config = parseConfig(JSON.parse(text) as unknown);
    return config === undefined ? { kind: "invalid", path } : { kind: "valid", path, config };
  } catch {
    return { kind: "invalid", path };
  }
}

export async function loadEffectiveConfig(
  globalPath: string,
  projectPath: string,
  projectTrusted: boolean,
): Promise<EffectiveConfig> {
  if (projectTrusted) {
    const projectConfig = await readConfig(projectPath);
    if (projectConfig.kind === "invalid") {
      return projectConfig;
    }
    if (projectConfig.kind === "valid") {
      return { ...projectConfig, scope: "project" };
    }
  }

  const globalConfig = await readConfig(globalPath);
  if (globalConfig.kind === "invalid") {
    return globalConfig;
  }
  if (globalConfig.kind === "valid") {
    return { ...globalConfig, scope: "global" };
  }

  return { kind: "unconfigured" };
}

export async function writeConfigAtomically(path: string, config: SlyeConfig): Promise<void> {
  const temporaryPath = `${path}.${randomUUID()}.tmp`;
  const contents = `${JSON.stringify(config, null, 2)}\n`;

  try {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(temporaryPath, contents, { encoding: "utf8", flag: "wx" });
    await rename(temporaryPath, path);
  } catch (error) {
    await rm(temporaryPath, { force: true }).catch(() => undefined);
    throw error;
  }
}

function parseModelReference(value: unknown): ModelReference | undefined {
  if (!isPlainObject(value)) {
    return undefined;
  }

  const keys = Object.keys(value);
  if (keys.length !== 2 || keys.some((key) => key !== "provider" && key !== "id")) {
    return undefined;
  }

  if (typeof value.provider !== "string" || value.provider.trim() === "") {
    return undefined;
  }
  if (typeof value.id !== "string" || value.id.trim() === "") {
    return undefined;
  }

  return { provider: value.provider, id: value.id };
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isMissingFile(error: unknown): boolean {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT";
}
