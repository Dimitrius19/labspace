# Red-Team Reviewer — Managed Agent

Productizes the red-team-review pattern we used 5+ times interactively in
Claude Code. Given an idea ID from the labspace catalog, the agent reads the
entry, runs adversarial review, opens a PR appending a structured
`RedTeamFinding` to the idea's `redTeamFindings[]` array.

This is **not** a replacement for interactive Claude Code work — it's the
productized version of one specific pattern that's now stable enough to run
unattended.

## Files

| File | Purpose |
|---|---|
| `red-team-reviewer.agent.yaml` | Agent definition: model, system prompt, tools, MCP servers |
| `red-team-reviewer.environment.yaml` | Cloud environment with unrestricted networking |
| `setup.sh` | One-time CLI commands to create agent + environment |
| `run-red-team.ts` | Runtime script — start a session, stream events, exit on idle |

## One-time setup (~10 min)

### 1. Install the Anthropic CLI

```sh
brew install anthropics/tap/ant
xattr -d com.apple.quarantine "$(brew --prefix)/bin/ant"   # macOS only
```

(See https://github.com/anthropics/anthropic-cli for Linux / Windows.)

### 2. Export your API key

```sh
export ANTHROPIC_API_KEY=sk-ant-...
```

### 3. Create the agent + environment

```sh
cd agents
./setup.sh
```

This writes `agents/.env` with `RED_TEAM_AGENT_ID` and `RED_TEAM_ENV_ID`.

### 4. Set up the GitHub MCP vault (browser, one-time)

The agent uses GitHub MCP for PR creation. MCP credentials live in a
**vault** that the API auto-refreshes; setup requires Console:

1. Go to **Anthropic Console → Vaults → Create vault** ("Labspace GitHub" is
   fine for a name).
2. Inside the vault, **Add credential** → type "MCP OAuth" → MCP server URL
   `https://api.githubcopilot.com/mcp/` → walk through GitHub's OAuth flow.
3. Copy the vault ID (`vlt_...`) into `agents/.env`:

   ```
   RED_TEAM_VAULT_ID=vlt_abc123...
   ```

### 5. Add a GitHub PAT for the repo clone

Different mechanism from the MCP vault: this token is what mounts the repo
into the session container at `/workspace`. Fine-grained PAT scoped to
`Dimitrius19/labspace` with `Contents: Read and write`.

```
GITHUB_TOKEN=ghp_...
```

Add it to `agents/.env`.

### 6. Install runtime dep

```sh
npm install --no-save @anthropic-ai/sdk
```

(Or add to `devDependencies` in `package.json` if you want it tracked.)

## Run

```sh
npx tsx agents/run-red-team.ts <idea-id>
```

Example:

```sh
npx tsx agents/run-red-team.ts pawmetric-pet-health
```

The agent will:

1. Read `pawmetric-pet-health` from `src/data/ideas.ts`.
2. Search the web for recent failures in pet-tech wearables.
3. Identify the load-bearing assumption not in the entry's `assertions[]`.
4. Build a deal-killer argument with 2-4 pattern-match precedents.
5. Edit `src/data/ideas.ts` to append a new `RedTeamFinding` to the idea's
   `redTeamFindings[]` array.
6. Commit to `red-team/pawmetric-pet-health-<date>`.
7. Open a PR against `claude/ai-certification-research-6jmds`.

Live watch URL is printed to stdout when the session starts.

## Update the agent

After editing either YAML file:

```sh
./setup.sh --update
```

This bumps the agent (or environment) version. New sessions automatically pin
to the latest version unless you pin explicitly. Already-running sessions
keep their old version.

## Cost / latency notes

- Per run: ~$0.50-2.00 (Opus 4.7 with adaptive thinking on a 1-2K-token
  catalog read + web search + multi-turn PR creation)
- Typical wall time: 3-6 minutes
- The agent uses `agent_toolset_20260401` (bash + read + edit + grep +
  web_search + web_fetch) plus the GitHub MCP server.

## Limitations / known issues

- The agent can't run TypeScript type-checking inside the sandbox by default
  — if it edits `ideas.ts` and breaks the schema, the PR build will fail and
  you'll see it in CI. (Type-checking inside the session would require
  `npm install` to complete in the sandbox; doable but adds ~60s per run.
  Trade-off: keep it lean and rely on PR CI as the safety net.)
- If two red-team runs target the same idea concurrently, the second will
  hit a git push conflict. Run sequentially per idea, or extend the script
  to detect existing `red-team/<id>-<date>` branches first.
- The agent does NOT self-merge — every output is gated through a PR for
  human review. This is deliberate.
