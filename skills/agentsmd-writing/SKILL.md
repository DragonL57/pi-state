---
name: agentsmd-writing
description: Write and review AGENTS.md context files for coding agents, grounded in the 2026 empirical literature on context-file effectiveness. Use whenever creating, editing, or evaluating repository context files — or deciding whether one is worth writing at all.
---

# Writing AGENTS.md — evidence-based rules

Grounding (2026 preprints, arXiv): 2607.27250 (Khatri), 2604.11088 (Guardrails Beat Guidance), 2602.11988 (Gloaguen et al.), 2601.20404 (Lulla et al.), 2605.10039 (McMillan). Spec context: AGENTS.md is stewarded by the Agentic AI Foundation (Linux Foundation) and read by 30+ agents (morphllm.com/agents-md-guide, 2026). When asked to justify a rule, cite the study behind it.

## What the evidence says (one line each)

- Rules beat no rules: +7–14pp correctness over 5,000+ runs (2604.11088). But content is mostly irrelevant — random rules ≈ curated rules (context-priming effect).
- Polarity is the one content property that matters: every individually *beneficial* rule is a negative constraint ("do not X"); every individually *harmful* one is a positive directive ("follow code style") (2604.11088).
- Injection strategy and file structure do not matter: none / always-on / selective ≈ equal (2607.27250); size / position / architecture / conflicting files ≈ equal (2605.10039).
- Instructions are well followed; repository overviews are not helpful. Context files pay off only for non-standard, repo-private practice (2602.11988).
- Presence of a file: ~20% less wall-clock time, ~16–20% fewer output tokens, +20%+ inference cost (2601.20404, 2602.11988).
- Good AGENTS.md: 28.6% faster, 16.6% fewer tokens (Princeton study, small PRs). Auto-generated files hurt: 2% lower success, 23% higher cost, because they duplicate repo content. Human-written, non-redundant files win (+4%).

## What to write (priority order)

### 1. Negative constraints — the bulk of the file

"do not X", one failure mode each, verifiable. Start from the repo's real failure modes, not imagined ones:

- "Do not refactor unrelated code." (the single most impactful rule measured in 2604.11088)
- "Do not modify tests to make them pass."
- "Do not change public API signatures or the behavior of existing functions."
- "Do not add dependencies."
- "Do not leave dead code, debug prints, or TODO scaffolding."
- "Do not commit secrets, credentials, or generated files."

### 2. Repo-private facts the agent cannot infer — the only positive directives that earn their place

- Exact build/test/lint/type-check commands, with the stake attached ("CI fails on X").
- Non-standard conventions and project-specific tooling.
- Costs with consequences ("full suite takes >20 min — run targeted tests"): the one content-driven effect measured in 2607.27250.
- Local gotchas that cost real time if discovered wrong.

### Include vs exclude (GitHub analysis of 2,500 repos + morphllm guide)

- Include: non-obvious commands with flags, rules that differ from defaults, architecture constraints, explicit boundaries, project-specific gotchas.
- Exclude: commands already in package.json, standard language conventions, full API docs, obvious practices, anything duplicated from the README.

### 3. Nothing else

## What to never write

- Theory, philosophy, or book distillations (Clean Code / SOLID essays, "why" without an imperative). The model carries generic norms in its weights; restating them costs tokens every turn and never converts a near-miss to a pass (2607.27250).
- Generic positive prescriptions: "follow code style", "keep functions small", "write clean code" — the harmful polarity class (2604.11088).
- Repository overviews and architecture narratives (2602.11988: followed but not helpful).
- Heavy optional requirements and hypotheticals ("when X, consider Y").
- Anything the agent can read in the code itself. If it can be inferred, cut it.
- Content duplicated from the README or package manifests: redundancy measurably reduces performance (23% cost increase in the follow-up study).
## Integrate tools into the flow, do not catalog them

Style rule (user preference, not an evidence claim): when a tool or action belongs to a workflow, write it at the point in the flow where it fires. "At this place use this, at that place use that."

- Name the tool inline at its trigger point: "Before answering a code question: `search_code` the codebase." "When verifying a claim: `grep` the symbols."
- A lifecycle sequence reads as steps, each step naming its tool. A tool catalog reads as a wall of names the agent must map back to situations.
- Keep a routing table only for tools with no natural flow position (cross-cutting: todo, bash, skills). Workflow tools belong in the flow.
- Guardrails stay negative constraints; they are rules, not tool lists.

## Keep it minimal

- Shorter beats comprehensive: cost scales with size (+20%+), adherence decays in long sessions (2605.10039), minimal files beat exhaustive ones (2602.11988).
- Bullets, one rule per line. No prose sections.
- Do not spend time on file structure or organization — it measures as a null. Spend that time deleting lines.
- AGENTS.md content beyond 32 KiB is silently truncated by some agents; even within the limit, shorter files perform better.

## SKILL.md is a separate standard

- Progressive disclosure: only name + description load at session start; the body loads when a task matches. The description is the load trigger, truncated at 1,536 chars in listings.
- There is no `paths` field in SKILL.md; path globs belong in tool-specific rule files, not SKILL.md.

## Workflow

1. Inspect the repo first: read existing context files and codebase conventions. When editing an existing file, preserve its repo-private facts while applying the polarity cleanup.
2. Draft negative constraints first, from observed failure modes.
3. Add only un-inferrable positive facts. Test each line: can the agent read this from the code? → cut it.
4. Trim to the shortest file that keeps the guardrails.
5. If starting from a generator or an auto-generated draft, treat it as a draft: aggressively edit and trim. Auto-generated files duplicate repo content and measurably hurt (2% lower success, 23% higher cost).
6. Set expectations honestly in any review: single-digit pp correctness at best; real efficiency wins (~20% time/tokens); the file changes how the agent works, rarely whether it passes. Failures are skill gaps — no context file fixes a skill gap (2607.27250).

## Acceptance checklist

- [ ] Every "do" is a repo-private fact (command, convention, cost) — none are generic prescriptions.
- [ ] Every "do not" targets a real failure mode, not a strawman.
- [ ] File is short enough to read in one pass.
- [ ] No theory, overview prose, or book distillations.
- [ ] No rule the agent could infer from the codebase.
- [ ] Every workflow tool is written at its trigger point in the flow, not in a separate catalog.
- [ ] No line duplicates content the agent can read in the repo, README, or package manifests.
