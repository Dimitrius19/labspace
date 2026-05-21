#!/usr/bin/env node
/**
 * Minimal red-team reviewer. No Managed Agents, no vault, no MCP, no GitHub PAT.
 *
 * Setup (one-time, ~30 seconds):
 *   npm install --no-save @anthropic-ai/sdk
 *
 * Run:
 *   export ANTHROPIC_API_KEY=sk-ant-...
 *   npx tsx agents/simple-red-team.ts pawmetric-pet-health
 *
 * Output: writes the finding to agents/findings/<idea-id>.json. You then
 * paste it into the idea's redTeamFindings[] manually, or ask Claude Code
 * to merge it for you.
 *
 * This is the no-frills version. Use this instead of run-red-team.ts (the
 * Managed Agents version) unless you specifically need scheduled runs,
 * webhooks, or remote triggering.
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const IDEAS_TS_PATH = join(REPO_ROOT, "src/data/ideas.ts");
const FINDINGS_DIR = join(__dirname, "findings");

const ideaId = process.argv[2];
if (!ideaId) {
  console.error("Usage: npx tsx agents/simple-red-team.ts <idea-id>");
  console.error("Example: npx tsx agents/simple-red-team.ts pawmetric-pet-health");
  process.exit(1);
}

if (!process.env.ANTHROPIC_API_KEY) {
  console.error("Missing ANTHROPIC_API_KEY. Export it first:");
  console.error("  export ANTHROPIC_API_KEY=sk-ant-...");
  process.exit(1);
}

// Read ideas.ts and find the target entry. ideas.ts is a TypeScript file with
// a single `export const ideas: Idea[] = [...]` array — parse via regex extract
// then JSON.parse the body.
const ideasSource = readFileSync(IDEAS_TS_PATH, "utf-8");
const arrayMatch = ideasSource.match(
  /export const ideas: Idea\[\] = (\[[\s\S]*\]);\s*$/,
);
if (!arrayMatch) {
  console.error(`Could not find ideas array in ${IDEAS_TS_PATH}`);
  process.exit(1);
}

interface Idea {
  id: string;
  title: string;
  [k: string]: unknown;
}
const ideas: Idea[] = JSON.parse(arrayMatch[1]);
const target = ideas.find((i) => i.id === ideaId);
if (!target) {
  console.error(`No idea with id "${ideaId}" found.`);
  console.error("Available ideas:");
  for (const i of ideas) console.error(`  ${i.id}  (${i.title})`);
  process.exit(1);
}

// Find 1-2 existing redTeamFindings on other ideas for tone calibration
const exemplars = ideas
  .filter((i) => Array.isArray((i as any).redTeamFindings) && (i as any).redTeamFindings.length > 0)
  .slice(0, 2)
  .map((i) => ({
    title: i.title,
    findings: (i as any).redTeamFindings,
  }));

const SYSTEM_PROMPT = `You are a senior venture capitalist running adversarial review on a thesis. Your job is to KILL the deal — find the strongest reason to pass. Be honest — if the thesis holds up, say so.

Process:
1. Read the target idea entry. Note its current assertions, killTests, preMortem, probabilityBands.
2. Use web search to find recent failures (last 24 months) in the adjacent market — specific named companies that died or stalled in this exact space. You need 2-4 named precedents with documented failure modes.
3. Identify the LOAD-BEARING assumption that is NOT in the idea's assertions[]. This is the thing the entire thesis depends on but hasn't been called out and is therefore unvalidated.
4. Build the deal-killer: the single strongest argument to pass. Not fact-check level — argument level.
5. Optionally identify a unit-economics concern (numbers don't work) and an alternative thesis (a structurally different reframe — not "same idea but smaller TAM"; a genuinely different shape).
6. Emit verdict: pass | revise | proceed-with-caveats | proceed.

Output ONLY a JSON object matching RedTeamFinding. No prose before or after. Under 500 words total. Be terse and decisive.`;

const userMessage = `Target idea (full entry):

\`\`\`json
${JSON.stringify(target, null, 2)}
\`\`\`

${
  exemplars.length > 0
    ? `Examples of redTeamFindings on other catalog ideas (for tone/depth calibration):

${exemplars
  .map(
    (e) => `**${e.title}**:
\`\`\`json
${JSON.stringify(e.findings, null, 2)}
\`\`\``,
  )
  .join("\n\n")}`
    : ""
}

Now produce the RedTeamFinding for "${target.title}" (id: ${target.id}). Use today's date: ${new Date().toISOString().slice(0, 10)}.`;

const RED_TEAM_FINDING_SCHEMA = {
  type: "object",
  properties: {
    date: { type: "string", description: "YYYY-MM-DD" },
    verdict: {
      type: "string",
      enum: ["pass", "revise", "proceed-with-caveats", "proceed"],
    },
    dealKiller: { type: "string" },
    patternMatches: {
      type: "array",
      items: { type: "string" },
      minItems: 2,
      maxItems: 5,
    },
    unitEconomicsConcern: { type: "string" },
    loadBearingAssumption: { type: "string" },
    alternativeThesis: { type: "string" },
  },
  required: [
    "date",
    "verdict",
    "dealKiller",
    "patternMatches",
    "alternativeThesis",
  ],
  additionalProperties: false,
} as const;

const client = new Anthropic();

console.log(`Red-teaming: ${target.title} (${target.id})...`);
console.log("(thinking + web search; ~2-4 minutes)\n");

const response = await client.messages.create({
  model: "claude-opus-4-7",
  max_tokens: 16000,
  thinking: { type: "adaptive" },
  output_config: {
    effort: "high",
    format: { type: "json_schema", schema: RED_TEAM_FINDING_SCHEMA },
  },
  tools: [{ type: "web_search_20260209", name: "web_search" }],
  system: SYSTEM_PROMPT,
  messages: [{ role: "user", content: userMessage }],
});

// Extract the JSON content from the response
const textBlock = response.content.find((b) => b.type === "text");
if (!textBlock || textBlock.type !== "text") {
  console.error("No text content in response");
  console.error(JSON.stringify(response.content, null, 2));
  process.exit(1);
}

const finding = JSON.parse(textBlock.text);

// Write to findings/<id>.json
if (!existsSync(FINDINGS_DIR)) mkdirSync(FINDINGS_DIR, { recursive: true });
const outPath = join(FINDINGS_DIR, `${ideaId}.json`);
writeFileSync(outPath, JSON.stringify(finding, null, 2) + "\n");

console.log("\n--- RedTeamFinding ---");
console.log(JSON.stringify(finding, null, 2));
console.log(`\nWrote to: ${outPath}`);
console.log("\nNext: paste this into the idea's redTeamFindings[] in src/data/ideas.ts,");
console.log("or ask Claude Code to merge it for you (it's already in the repo).");
console.log(
  `\nUsage: in=${response.usage.input_tokens} out=${response.usage.output_tokens} cached=${response.usage.cache_read_input_tokens ?? 0}`,
);
