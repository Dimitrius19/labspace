# Labspace deployment

Labspace is a Vite SPA with one Vercel Edge Function (`/api/ventures`) that reads a manifest from each venture repo.

## Architecture

```
Each venture repo
  .claude/venture.yaml      <- single source of truth (edited by human or Claude Code)
  .claude/CLAUDE.md         <- tells agents to update venture.yaml when asked "what's next"
         |
         v
Vercel Edge Function  /api/ventures
  uses GITHUB_TOKEN to fetch the manifest + latest commit from each repo
  caches response 60s on the Vercel CDN
         |
         v
Labspace SPA          <- renders cards, detail modal, progress, sync badge
                        reads from /api/ventures; falls back to hardcoded seed
                        when the endpoint is unavailable
```

Labspace writes **nothing** to GitHub. To update a venture you either:

1. Edit `.claude/venture.yaml` directly in its repo, or
2. Ask Claude Code on that repo — the agent commits the update following `.claude/CLAUDE.md`.

Labspace picks up changes on the next page load (or clicking Refresh). Webhook-driven instant updates are a future phase.

## First-time setup on Vercel

### 1. Create a fine-grained GitHub PAT

https://github.com/settings/personal-access-tokens/new

- **Resource owner**: your user (Dimitrius19)
- **Repository access**: Only select repositories → pick `Pragma-talent`, `Relocation-Platform`, `Tryfon-fleet`
- **Permissions**:
  - Contents: **Read-only**
  - Metadata: **Read-only** (granted by default)
- Copy the token (starts with `github_pat_...`)

### 2. Import labspace to Vercel

- https://vercel.com/new → Import `Dimitrius19/labspace`
- Framework preset: **Vite** (auto-detected)
- Build command: `npm run build` (default)
- Output directory: `dist` (default)

### 3. Set the environment variable

In Vercel project → Settings → Environment Variables:

| Name           | Value                | Environments              |
| -------------- | -------------------- | ------------------------- |
| `GITHUB_TOKEN` | `github_pat_...`     | Production, Preview, Dev  |

### 4. Deploy

Push to `main` → Vercel auto-builds. `/api/ventures` is live at `https://<your-project>.vercel.app/api/ventures`.

## Local development

The edge function runs locally via `vercel dev`:

```bash
npm install -g vercel
vercel login
vercel link                    # once, pick the labspace project
vercel env pull .env.local     # pulls GITHUB_TOKEN for local dev
vercel dev                     # starts Vite + /api routes on http://localhost:3000
```

Pure `npm run dev` (without the token) still works — labspace shows "Local only" in the sync badge and falls back to hardcoded seed data.

## Adding a new venture

1. Add the repo to the `REPOS` array in `api/ventures.ts`.
2. Grant the PAT read access to the new repo in GitHub.
3. Add a seed entry to `src/data/ventures.ts` with matching `id`.
4. Create `.claude/venture.yaml` and `.claude/CLAUDE.md` in the new repo.
5. Redeploy.

## Manifest schema

See `src/types/index.ts` → `Venture` interface. A minimal example:

```yaml
id: tryfon-fleet
stage: building            # ideation | building | private-beta | public-beta | launched | scaling
health: on-track           # on-track | at-risk | blocked
launchTarget: 2026-09-01
nextAction: Ship telematics ingest v1 and onboard first pilot fleet.
updatedAt: 2026-04-24T14:30:00Z
updatedBy: claude          # or human
tasks:
  - id: tf-e2
    title: "Telematics ingest (MQTT -> Postgres/TimescaleDB)"
    category: engineering  # product | engineering | design | legal | go-to-market | operations | finance
    priority: p0           # p0 | p1 | p2
    done: false
milestones:
  - id: m2
    title: Telematics ingest pipeline v1
    targetDate: 2026-04-01
    done: false
```

Any field absent from the manifest falls back to the hardcoded seed in `src/data/ventures.ts`, so partial manifests are fine.
