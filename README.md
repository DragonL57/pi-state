# Pi state

Private, Git-backed configuration shared across Pi installations.

Managed with [@moejay/pi-state-sync](https://github.com/moejay/pi-state-sync).

## What belongs here

- Pi settings and model definitions
- Extensions, skills, prompts, and themes, for the hosts that have them
- Context and system prompt files

Host-local credentials, trust decisions, sessions, and package caches are intentionally ignored. Generated runtime state is tracked: the MCP caches and onboarding flags, `pi-web-session-index.json`, the model catalogs, and `pi-permissions.jsonc`.

## Set up a new host

Install the extension, start Pi, then import this existing repository:

```bash
pi install npm:@moejay/pi-state-sync
pi
```

Inside Pi:

```text
/pistate configure existing https://github.com/DragonL57/pi-state.git
```

The import replaces portable Pi configuration from the repository while preserving host-local auth, sessions, package caches, and generated data. Replaced portable files are backed up beside the agent directory.

Manual fallback:

```bash
mv ~/.pi/agent ~/.pi/agent.backup 2>/dev/null || true
git clone https://github.com/DragonL57/pi-state.git ~/.pi/agent
pi
```

Authenticate providers separately on every host:

```text
/login
```

GitHub CLI must be authenticated on each host as well, because the extension pushes through `gh`:

```text
gh auth login
```

When a push fails on an invalid token, run `gh auth refresh -h github.com`.

Set `EXA_API_KEY` in the shell profile on each host (e.g. `export EXA_API_KEY="..."`). It is read directly from the environment by the websearch extension and is never committed.

## Daily workflow

Before work on another host:

```text
/pistate pull
```

After changing Pi configuration:

```text
/pistate status
/pistate snapshot chore: update Pi state
/pistate push
```

## Safety

Review staged changes before the first push. This repository must remain private because configuration and instructions can still contain sensitive operational details.
