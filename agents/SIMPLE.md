# Simple Red-Team — the no-frills version

If you don't need scheduled runs, webhooks, or remote triggering, **use this instead of `run-red-team.ts`**. No Managed Agents, no vaults, no MCP, no GitHub PAT. One env var, one command.

## Setup (one time, ~30 seconds)

```bash
cd ~/repos/labspace
npm install --no-save @anthropic-ai/sdk
```

## Run

```bash
export ANTHROPIC_API_KEY=sk-ant-YOUR_KEY
npx tsx agents/simple-red-team.ts pawmetric-pet-health
```

That's it. ~2-4 minutes. Output: pretty-prints the finding to your terminal AND saves it to `agents/findings/pawmetric-pet-health.json`.

## What it does

1. Reads `src/data/ideas.ts` from your local checkout
2. Finds the target idea by ID
3. Pulls 1-2 existing redTeamFindings from other catalog entries as tone exemplars
4. Calls Claude Opus 4.7 with adaptive thinking + web search + structured outputs (guarantees valid JSON)
5. Writes the result to `agents/findings/<idea-id>.json`

## What it doesn't do

- Doesn't edit `ideas.ts` or open a PR. You take the JSON and either paste it into the entry yourself, or ask Claude Code in your terminal to merge it (it's already in the repo).
- Doesn't run on a schedule or via webhook. You run it manually.
- Doesn't run unattended on a server. It's a local script.

## Why two versions?

- **simple-red-team.ts (this file)** — fastest path, single API key, zero account setup. Right choice 90% of the time.
- **run-red-team.ts** (the Managed Agents version) — overkill for one-off runs. Right choice when you want scheduled runs, webhook triggers, or to hand the agent to a teammate who shouldn't have your API key.

## List the idea IDs

If you forget what's in the catalog:

```bash
grep '"id":' src/data/ideas.ts | head -40
```

Pick one and feed it to the script.

## Output schema

The JSON file matches the `RedTeamFinding` type from `src/types/index.ts`:

```typescript
interface RedTeamFinding {
  date: string;                    // YYYY-MM-DD
  verdict: "pass" | "revise" | "proceed-with-caveats" | "proceed";
  dealKiller: string;
  patternMatches: string[];        // 2-5 named precedents
  unitEconomicsConcern?: string;
  loadBearingAssumption?: string;
  alternativeThesis: string;
}
```

Append it to the idea's `redTeamFindings[]` array.
