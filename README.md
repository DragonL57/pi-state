# Pi state

Private, Git-backed configuration shared across Pi installations.

Managed with [@moejay/pi-state-sync](https://github.com/moejay/pi-state-sync).

## What belongs here

- Pi settings and model definitions
- Extensions, skills, prompts, and themes
- Context and system prompt files

Host-local credentials (including `EXA_API_KEY`), trust decisions, sessions, package caches, and generated files are intentionally ignored.

## Set up a new host

Install the extension, start Pi, then import this existing repository:

```bash
pi install npm:@moejay/pi-state-sync
pi
```

Inside Pi:

```text
/pistate configure existing git@github.com:DragonL57/pi-state.git
```

The import replaces portable Pi configuration from the repository while preserving host-local auth, sessions, package caches, and generated data. Replaced portable files are backed up beside the agent directory.

Manual fallback:

```bash
mv ~/.pi/agent ~/.pi/agent.backup 2>/dev/null || true
git clone git@github.com:DragonL57/pi-state.git ~/.pi/agent
pi
```

Authenticate providers separately on every host:

```text
/login
```

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
