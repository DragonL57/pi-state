# Pi state

Private, Git-backed configuration shared across Pi installations.

Managed with [@moejay/pi-state-sync](https://github.com/moejay/pi-state-sync).

## What belongs here

- Pi settings and model definitions
- Extensions, skills, prompts, and themes
- Context and system prompt files

Secrets are **never** committed. Each host keeps its own API keys in
`settings.json` or its environment. See "Secrets" below.
Host-local credentials, trust decisions, sessions, package caches, and
generated files are intentionally ignored.

## Set up a new host
```bash
pi install npm:@moejay/pi-state-sync
pi
```

Inside Pi:

```text
/pistate configure existing https://github.com/DragonL57/pi-state.git
```

Use the `https://` URL, not the `git@github.com:` form. The SSH form needs an
SSH key on the host; HTTPS reuses your existing Git credentials.

The import replaces portable Pi configuration from the repository while
preserving host-local auth, sessions, package caches, and generated data.
Replaced portable files are backed up beside the agent directory.

Manual fallback:

```bash
mv ~/.pi/agent ~/.pi/agent.backup 2>/dev/null || true
git clone https://github.com/DragonL57/pi-state.git ~/.pi/agent
pi
```

### GitHub CLI

`/pistate` resolves repository slugs through `gh`. If `gh` reports
`Bad credentials (HTTP 401)` even though `gh auth status` succeeds, the token
is in a keyring the Pi child process cannot read. Store it in the environment
instead:

```bash
gh auth token   # verify a token exists
```

Then set `GH_TOKEN` for your user account and restart Pi.

### Providers

Authenticate providers separately on every host:

```text
/login
```

## Secrets

API keys are host-local and never committed. Set each one on every host.

**Option 1: environment variable (recommended on Windows and Linux).**
Export the variable before starting Pi. For example, `EXA_API_KEY`:

```bash
# Linux / macOS
export EXA_API_KEY="your-key"

# Windows PowerShell
$env:EXA_API_KEY = "your-key"
```

**Option 2: `settings.json` (host-local value).**
`settings.json` is synced, so use this only if you accept a literal key in a
private repository. Replace the reference with the value:

```json
{ "exa": { "apiKey": "your-key" } }
```

A `"$EXA_API_KEY"` value is read literally unless the variable is set in the
environment first. Set the variable or use the literal.

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
