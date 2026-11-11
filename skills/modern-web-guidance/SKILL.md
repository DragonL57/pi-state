---
name: modern-web-guidance
description: Google Chrome's Modern Web Guidance, 209 markdown guides on the web platform. Use when writing or reviewing web UI structure and client-side capability: which HTML element or CSS/JS API to use, dialogs and popovers, menus, tabs, cards, tables, forms and validation, dark mode and color-scheme, container queries, anchor positioning, view transitions, scroll-driven animation, accessibility mechanics, Core Web Vitals, security and sanitization, passkeys, PWA, WebAssembly, WebMCP. Does not own visual design judgment or look and feel, apple-design owns that.
---

# Modern Web Guidance

Google Chrome's guideline corpus: what the web platform provides today, which API to reach for, what the Baseline availability is, and which gotchas the guide exists to prevent. Maintained upstream at https://github.com/GoogleChrome/modern-web-guidance (Apache-2.0).

The corpus is 209 guides under `guides/<discipline>/<id>.md`, where `<id>` is the file stem. `INDEX.md` lists every id with its title, grouped by discipline.

## Boundary with apple-design

- **This skill** answers structure and capability: semantics, which element, which API, fallbacks, browser support, accessibility mechanics.
- **apple-design** answers look and feel: visual hierarchy, layout composition, spacing, color, typography, motion, and HIG conformance. Load it for those, never this one.

## Corpus is local, not in git

`guides/` and `INDEX.md` are gitignored; pi-state carries only this file and `sync.sh`. Two cases:

- `bash ~/.pi/agent/skills/modern-web-guidance/sync.sh` installs the pinned corpus (network once, about 700 KB download). Run `--check` to verify, `--latest` to move to upstream main and print the sha to pin.
- When `guides/` is missing, say so and run the sync before answering from memory.

## Workflow

1. Read `INDEX.md` (or `ls guides/*/` when the index is absent) and pick candidate ids by title.
2. Narrow with a literal search when the titles are ambiguous, for example `grep -ril "popover" guides/`.
3. Read the matching guide in full with the read tool: `guides/ui-components/dialog.md`. Guides are short to medium (2 to 50 KB) and their value is in the specifics.
4. Apply the guide, then check the code against its own gotchas section before you report.
5. Cite the id you applied when the guide changed the implementation.

Guide bodies cross-reference each other as `npx -y modern-web-guidance@latest retrieve "<id>"`. Ignore that command: translate the id to `guides/<discipline>/<id>.md` and read the file.

## Rules

- The guide outranks model memory on platform capability. Web APIs and Baseline status move faster than training data; when the two disagree, follow the guide and say which id you followed.
- Prefer native platform behaviour before a library, a polyfill, or a framework surface. That is the premise of the corpus.
- Keep fallbacks small and case-specific. The corpus asks for under 50 LOC or a conditionally loaded polyfill, not a bundled shim.
- Experimental APIs are gated upstream: Origin Trial and volatile single-engine features stay locked until a project opts in through `.mwgrc` (`allowOriginTrials`, `allowVolatileFeatures`). Do not adopt one because a guide mentions it; ask first.
- Do not invent a guide id. If nothing matches after rephrasing once, answer without the corpus and say it is not covered.

## Out of scope

Backend, data, infrastructure, CI, and build tooling. Visual and UX judgment. Architecture of a system: the corpus covers platform capability, not system design.
