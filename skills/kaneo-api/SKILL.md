---
name: kaneo-api
description: Operate the deployed Kaneo instance (https://edtech.vmg.edu.vn) through its HTTP API — auth, workspace/project discovery, task CRUD and bulk import, labels, comments. Use whenever the task involves creating, updating, reading, or organizing tasks on the deployed Kaneo instance.
---

# Kaneo API — deployed instance operations

Self-contained instructions for reading/writing the deployed Kaneo instance over HTTP.
Endpoint shapes below were verified against the live instance. A longer narrative
version lives at `API_AGENT_GUIDE.md` in the kaneo repo root.

## Instance and credentials

- Instance: `https://edtech.vmg.edu.vn` — API under `/api` (e.g. `/api/project`)
- API key (Bearer): `UjbQUkCJtymuqvlOrTBwZFgTFoTLEJkFEfMXBKrTBOluYGweBhtewpurJrjhxFje`
- Send as `Authorization: Bearer <key>` (alternative header: `x-api-key: <key>`)
- Keys cannot be created via the API — a human creates them in the web UI
  (Settings → Account → API Keys) and they are shown only once.
- This key sits in plaintext in this skill. If it leaks, revoke it in the web UI
  and update this file. Keys are revocable per-key.
- Missing/invalid key → `401 Unauthorized`; key without access to a workspace → `403`.

## Conventions

- IDs are CUIDs (25 chars, opaque). Timestamps are ISO-8601 UTC strings.
- JSON only; `Content-Type: application/json` on writes. UTF-8 Vietnamese is fine.
- **Status = column slug** of the target project, not a global enum. Defaults:
  `to-do`, `in-progress`, `in-review`, `done`. Virtual statuses: `planned`, `archived`.
  Always resolve real slugs via `GET /api/column/{projectId}` — humans rename columns.
- Priority enum: `no-priority` | `low` | `medium` | `high` | `urgent`.
- Label color enum: `gray` | `dark-gray` | `purple` | `teal` | `green` | `yellow` | `orange` | `pink` | `red`.

## Commit messages (task code)

- UpLearn task code is ALWAYS `UPL-<number>` — the task's `number` field (e.g. `GET /api/task/{id}` → `"number": 46`), also shown in the web UI. Never use `#<number>`.
- Commit prefix: `UPL-<number> <type>: <summary>` (Conventional Commits, e.g. `UPL-46 fix: age verification task no longer crashes on missing dob column`); optional scope like `UPL-46 fix(blog): ...`.
- Reference the code in the commit message, PR/change description, and final summary. No product version numbers in commit messages.

## Ticket writing style (human-first, markdown)

Kaneo renders **Markdown** in task titles, descriptions and comments — always use it, never plain
run-on text. Ticket content must read like a human wrote it for humans (plain everyday Vietnamese
for this team):

- **Markdown always:** `##` section headers, **bold** for key facts, *italics* for emphasis,
  `> blockquote` for warnings/notes, bullet/nested lists for steps, inline `code` for tags,
  file names, version numbers.
- **No emojis, ever.** Not in titles, descriptions, or comments.
- Plain language from the user's perspective — what happens, what they see, what they expect.
  No internal jargon, class/function names, endpoints, table names, or commit hashes in tickets.
- Titles: short and concrete, include the date/time context when it matters
  (e.g. `Phát hành phiên bản 1.0.0 lên production (rạng sáng Chủ nhật, 16/08, 01:00)`).
- Descriptions: structured with `##` sections, a checklist of concrete steps, and the
  important constraints bolded or in a blockquote so they cannot be missed.
- Dates and times: state them in Vietnam time explicitly (`01:00 rạng sáng Chủ nhật 16/08`),
  not bare UTC timestamps.

**Dates on the ticket (always set — the API supports them):**
- `startDate` = **ngày tạo task** (set at creation).
- `dueDate` = **ngày hoàn thành / pushed / deployed** (set when known, updated when the work lands).
- Update: `PUT /api/task/due-date/{id}` body `{"dueDate": "..."}` works; `PUT /api/task/start-date/{id}` does NOT exist (404) — use full `PUT /api/task/{id}` with all required fields (`title`, `description`, `priority`, `projectId`, `position`...) plus `startDate`, and **omit keys you are not changing** (sending `null` for a date field → valibot 400). ISO-8601 UTC or date-only.
- Never leave both empty on a new ticket: creation date is always known.

## Discovery

```bash
BASE="https://edtech.vmg.edu.vn/api"; KEY="UjbQUkCJtymuqvlOrTBwZFgTFoTLEJkFEfMXBKrTBOluYGweBhtewpurJrjhxFje"
# workspaces (GET works with API keys; the web UI uses POST with cookies)
curl -s "$BASE/auth/organization/list" -H "Authorization: Bearer $KEY" | jq -r '.[] | "\(.id)  \(.name)"'
# projects in a workspace (each embeds its tasks array)
curl -s "$BASE/project?workspaceId=$WS_ID" -H "Authorization: Bearer $KEY" | jq -r '.[] | "\(.id)  \(.name)"'
# project detail + column slugs
curl -s "$BASE/project/$PROJECT_ID" -H "Authorization: Bearer $KEY"
curl -s "$BASE/column/$PROJECT_ID" -H "Authorization: Bearer $KEY" | jq -r '.[] | "\(.slug)  \(.name)"'
```

Instance: workspace `Edtech` (`bZsoKRuWwxEDn5wZA6BzISTJwZDI3xb7`) contains the
Uplearn project (`h35uvhbyd05yebteomoy0bj8`), the 2026 platform plan grouped by 12
category labels. Always re-discover IDs and counts before use — totals shift as
tasks move.

## Tasks

| Operation | Call |
|---|---|
| Create | `POST /api/task/{projectId}` — body `{title, description?, status, priority?, userId?, startDate?, dueDate?}`; invalid status → 400 |
| List (filtered) | `GET /api/task/tasks/{projectId}?status=&priority=&assigneeId=&page=` — **NOT a flat list**: returns the project object; tasks for the filtered status live in `data.columns[].tasks` (only the matching column is populated), and `data.archivedTasks` / `data.plannedTasks` hold the virtual-status tasks. `pagination = {total, page, pageSize, totalPages}`. |
| Get / update / delete | `GET|PUT|DELETE /api/task/{id}` — **full PUT requires ALL required fields** (`title`, `description`, `priority`, `projectId`, `position`...); a partial `PUT` with only `status` returns 400 (valibot). For a single-field change (e.g. status), use the one-field updaters below instead. |
| Move column | `PUT /api/task/move/{id}` |
| One-field updaters | `PUT /api/task/{status,priority,assignee,due-date,title,description}/{id}` |
| Export | `GET /api/task/export/{projectId}` |

### Archive (non-destructive)

Archiving is a status change to the virtual slug `archived` — tasks keep title,
description, labels, and history; `columnId` becomes null and they leave every column.

- Archive one task: `PUT /api/task/status/{id}` body `{"status":"archived"}` → 200, task `status: "archived"`.
- List archived: `GET /api/task/tasks/{projectId}?status=archived` → read `data.archivedTasks`.
- Verify: `GET /api/task/{id}` shows `status: "archived"`, `columnId: null`; the board's
  done column then lists 0 tasks under `data.columns[].tasks`.
- **Count check:** the archived list may already contain tasks archived earlier by
  humans/other agents — diff against the `done` list you fetched, don't assume your
  archive calls account for every entry.

### Bulk import (fastest way to load many tasks)

`POST /api/task/import/{projectId}` body: `{ "tasks": [{ "title": "...", "status": "to-do", "priority": "low", "description": "...", "startDate": "...", "dueDate": "..." }] }`

- Coercion, not rejection: unknown `status` → `planned` + warning; unknown `priority`
  → `no-priority` + warning. **Omitted priority defaults to `low`** — pass it explicitly.
- Response: `{ importedAt, project, results: { total, successful, failed, tasks: [{ success, task, warnings? }] } }` —
  `results` is an OBJECT, not an array. One bad row does not roll back the others.
- Idempotent enough to re-run; task numbers are claimed in batch.

## Labels (read carefully — the model is subtle)

A workspace label is a **palette entry** (`taskId` absent). Attaching it to a task
creates a **separate task-level copy row** (`taskId` set). Removing deletes the copy;
the palette entry survives.

- Correct attach (what the UI does; idempotent per `(taskId, name)`):
  `POST /api/label` body `{ "name": "Cổng thanh toán", "color": "teal", "workspaceId": "<WS>", "taskId": "<TASK>" }`
- Create/reuse palette entry: same but omit `taskId`.
- Queries: `GET /api/label/workspace/{workspaceId}`, `GET /api/label/task/{taskId}`, `GET /api/label/{id}`
- Removal: `DELETE /api/label/{id}` (delete row), `DELETE /api/label/{id}/task` (unassign → taskId null)
- **Pitfall:** `PUT /api/label/{id}/task` MOVES the label row (in-place `UPDATE taskId`)
  — it is NOT multi-assign; a second call steals the label from the first task.
  Never use it to label many tasks.

## UpLearn product versioning scheme (SemVer, from zero)

UpLearn's own product version is **independent of the upstream Moodle tags** —
`v4.5.11` / `v5.2.0`-style tags in the repo are mirror-synced from moodle/moodle
and are NOT the product version. The product version starts from zero and is
applied to UpLearn's own releases only.

- **Scheme:** SemVer `X.Y.Z` (semver.org) — MAJOR = breaking, MINOR = new
  backward-compatible functionality, PATCH = bug fixes.
- **Start:** `v0.1.0` (major version zero = initial development, anything may
  change). `v1.0.0` = first stable release, from then on backward compat is a
  commitment.
- **Pre-releases (staging → production promotion):** `v1.0.0-beta.1` →
  `v1.0.0-rc.1` → `v1.0.0`. Pre-releases sort lower than the final version
  (no extra tooling needed).
- **Git tags:** UpLearn's own tags only, e.g. `git tag v0.1.0` on the commit
  promoted to production. Optional build metadata for traceability:
  `v0.1.0+sha.<commit>` (ignored in version ordering).
- **Bump rules:** `feat:`-level changes → MINOR bump, `fix:`-level → PATCH
  bump, breaking changes → MAJOR bump. Maps onto Conventional Commits
  (`<task-code> type: summary`), incl. `BREAKING CHANGE` → MAJOR.
- **Do NOT reset the Moodle plugin build numbers:** `$plugin->version` in
  `version.php` files (`local/storefront`, `enrol/cart`, `admin/tool/policy`)
  stays on Moodle's mandatory `YYYYMMDDXX` counter and must keep increasing
  monotonically forever — Moodle's upgrade system compares it numerically;
  resetting it silently breaks DB upgrades on staging/production. Product
  version (`v0.1.0`) and internal build numbers (`2026080210`) are two
  separate layers and never need to match.
- Every release gets a changelog entry; released tags are never re-tagged or
  modified.

## Comments and activity

- `POST /api/activity/comment` body `{ "taskId": "...", "comment": "..." }` — the field MUST be named
  `comment`, not `content`: a `content` payload returns a valibot schema error but still persists,
  creating duplicate comments.
- `GET /api/activity/{taskId}` — task timeline; each entry has `type` (`comment` | `status_changed` |
  `created`), `id`, `content` (empty for status events), `createdAt`, `userId`.
- `DELETE /api/comment/{id}` — delete a comment. Only this shape works;
  `/api/activity/comment/{id}` and `/api/activity/{id}` both return 404.

## Task URLs (shareable links)

The only task URL that opens correctly in the web UI:

```
https://edtech.vmg.edu.vn/dashboard/workspace/{workspaceId}/project/{projectId}/board?taskId={taskId}
```

Example:
`https://edtech.vmg.edu.vn/dashboard/workspace/bZsoKRuWwxEDn5wZA6BzISTJwZDI3xb7/project/h35uvhbyd05yebteomoy0bj8/board?taskId=xjca7jrpxfi0ojtsvqk3kf81`

Short forms such as `https://edtech.vmg.edu.vn/task/{id}` or
`/w/{workspace}/{project}/{task}` return HTTP 200 (the SPA serves index.html for every route) but
show "Not Found" in the app — never use them as task links (e.g. in commit messages, PR bodies,
Kaneo comments).

## Errors, limits, realtime

- Validation errors: `400` with valibot JSON `{data, error[], success:false}` or plain text.
- API keys are rate-limited (~100 requests/window) — batch, don't spray.
- WebSocket endpoints (`/api/ws/user`, `/api/ws/{projectId}`) require session cookies
  and are browser-only. Agents should poll `GET /api/task/tasks/{projectId}` and
  `GET /api/activity/{taskId}` instead.

## Minimal worked example

```bash
BASE="https://edtech.vmg.edu.vn/api"; KEY="UjbQUkCJtymuqvlOrTBwZFgTFoTLEJkFEfMXBKrTBOluYGweBhtewpurJrjhxFje"
WS_ID=$(curl -s "$BASE/auth/organization/list" -H "Authorization: Bearer $KEY" | jq -r '.[0].id')
PROJECT_ID=$(curl -s "$BASE/project?workspaceId=$WS_ID" -H "Authorization: Bearer $KEY" | jq -r '.[] | select(.name=="Uplearn") | .id')
curl -s -X POST "$BASE/task/import/$PROJECT_ID" -H "Authorization: Bearer $KEY" \
  -H "Content-Type: application/json" \
  -d '{"tasks":[{"title":"Ship import flow","status":"done","priority":"medium"}]}' | jq '.results'
```
