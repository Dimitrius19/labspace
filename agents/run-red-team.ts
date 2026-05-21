#!/usr/bin/env node
/**
 * Run the Red-Team Reviewer agent against an idea in the labspace catalog.
 *
 * Usage:
 *   npx tsx agents/run-red-team.ts <idea-id>
 *
 * Required env vars (load from agents/.env or your shell):
 *   ANTHROPIC_API_KEY     — your Anthropic API key
 *   RED_TEAM_AGENT_ID     — written by setup.sh
 *   RED_TEAM_ENV_ID       — written by setup.sh
 *   RED_TEAM_VAULT_ID     — vault containing the GitHub MCP OAuth credential
 *   GITHUB_TOKEN          — fine-grained PAT with Contents:read+write on the labspace repo
 *
 * Output:
 *   The agent streams its reasoning to stdout, then opens a PR against
 *   claude/ai-certification-research-6jmds with the new RedTeamFinding
 *   appended to the target idea's redTeamFindings[] array.
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// Load .env if it exists (no dotenv dep — small inline reader)
const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, ".env");
try {
  const envFile = readFileSync(envPath, "utf-8");
  for (const line of envFile.split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
} catch {
  /* .env optional — env vars may come from shell */
}

const ideaId = process.argv[2];
if (!ideaId) {
  console.error("Usage: npx tsx agents/run-red-team.ts <idea-id>");
  console.error("Example: npx tsx agents/run-red-team.ts pawmetric-pet-health");
  process.exit(1);
}

const required = [
  "ANTHROPIC_API_KEY",
  "RED_TEAM_AGENT_ID",
  "RED_TEAM_ENV_ID",
  "RED_TEAM_VAULT_ID",
  "GITHUB_TOKEN",
] as const;
const missing = required.filter((k) => !process.env[k]);
if (missing.length > 0) {
  console.error(`Missing env vars: ${missing.join(", ")}`);
  console.error("Run agents/setup.sh first, then complete vault + token setup (see README).");
  process.exit(1);
}

const REPO_URL = "https://github.com/Dimitrius19/labspace";
const BASE_BRANCH = "claude/ai-certification-research-6jmds";

const client = new Anthropic();

// 1. Create a session that mounts the labspace repo and attaches the vault
const session = await client.beta.sessions.create({
  agent: process.env.RED_TEAM_AGENT_ID!,
  environment_id: process.env.RED_TEAM_ENV_ID!,
  vault_ids: [process.env.RED_TEAM_VAULT_ID!],
  title: `Red-team: ${ideaId}`,
  resources: [
    {
      type: "github_repository",
      url: REPO_URL,
      authorization_token: process.env.GITHUB_TOKEN!,
      mount_path: "/workspace",
      checkout: { type: "branch", name: BASE_BRANCH },
    },
  ],
});

console.log(`Session ${session.id}`);
console.log(`Watch: https://platform.claude.com/workspaces/default/sessions/${session.id}`);
console.log("---");

// 2. Stream-first, then send the kickoff message
const stream = await client.beta.sessions.events.stream(session.id);
await client.beta.sessions.events.send(session.id, {
  events: [
    {
      type: "user.message",
      content: [
        {
          type: "text",
          text:
            `Red-team the idea with id "${ideaId}".\n\n` +
            `1. Read its entry in /workspace/src/data/ideas.ts.\n` +
            `2. Follow the process in your system prompt.\n` +
            `3. Edit /workspace/src/data/ideas.ts to append a new RedTeamFinding ` +
            `to its redTeamFindings[] array (today's date in YYYY-MM-DD format).\n` +
            `4. Commit to a new branch named red-team/${ideaId}-<YYYY-MM-DD>.\n` +
            `5. Open a PR against the ${BASE_BRANCH} branch on the labspace repo.\n\n` +
            `When you are done, print the PR URL.`,
        },
      ],
    },
  ],
});

// 3. Drain the stream until idle (terminal) or terminated
for await (const event of stream) {
  switch (event.type) {
    case "agent.message":
      for (const block of event.content) {
        if (block.type === "text") process.stdout.write(block.text);
      }
      break;
    case "agent.tool_use":
    case "agent.mcp_tool_use":
      // Quiet inline progress so the user sees activity without flooding stdout
      process.stderr.write(".");
      break;
    case "session.status_terminated":
      console.log("\n---\nSession terminated.");
      process.exit(1);
    case "session.status_idle":
      if (event.stop_reason.type === "requires_action") continue;
      console.log("\n---\nDone.");
      process.exit(0);
  }
}
