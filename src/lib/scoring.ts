import type { Idea, Scorecard } from "../types";
import { SCORECARD_DIMENSIONS } from "../types";

export type ScoreSource = "computed" | "manual";

export interface ScoredDimension {
  key: keyof Omit<Scorecard, "composite">;
  label: string;
  weight: number;
  score: number;
  source: ScoreSource;
  reasoning: string;
}

export interface ComputedScorecard {
  dimensions: ScoredDimension[];
  composite: number;
  computedCount: number;
  totalCount: number;
}

// ── Dimension Computers ─────────────────────────────────────────────
// Each returns { score, reasoning } or null if it can't compute.

function computeCompetitiveGap(idea: Idea): { score: number; reasoning: string } | null {
  if (!idea.competitiveIntensity) return null;

  const baseScore: Record<string, number> = { open: 5, moderate: 3, crowded: 1 };
  let score = baseScore[idea.competitiveIntensity] ?? 3;

  // Adjust for competitor count — fewer is better
  const compCount = idea.competitors?.length ?? 0;
  if (compCount <= 1) score = Math.min(5, score + 0.5);
  else if (compCount >= 4) score = Math.max(1, score - 0.5);

  // Adjust for competitor types — incumbents are more threatening
  if (idea.competitors?.length) {
    const incumbentRatio =
      idea.competitors.filter((c) => c.type === "incumbent").length /
      idea.competitors.length;
    if (incumbentRatio >= 0.5) score = Math.max(1, score - 0.5);
  }

  score = Math.round(score * 2) / 2; // Round to nearest 0.5
  score = Math.min(5, Math.max(1, score));

  const parts: string[] = [`${idea.competitiveIntensity} market`];
  if (compCount > 0) parts.push(`${compCount} tracked competitor${compCount > 1 ? "s" : ""}`);
  const incumbents = idea.competitors?.filter((c) => c.type === "incumbent").length ?? 0;
  if (incumbents > 0) parts.push(`${incumbents} incumbent${incumbents > 1 ? "s" : ""}`);

  return { score, reasoning: parts.join(" · ") };
}

function computeCapitalFit(idea: Idea): { score: number; reasoning: string } | null {
  if (!idea.capitalIntensity?.level) return null;

  const scoreMap: Record<string, number> = { low: 5, medium: 3, high: 1 };
  const score = scoreMap[idea.capitalIntensity.level] ?? 3;

  const parts: string[] = [
    `${idea.capitalIntensity.level} capital intensity`,
  ];
  if (idea.capitalIntensity.estimatedSeedCapital) {
    parts.push(idea.capitalIntensity.estimatedSeedCapital);
  }
  if (idea.capitalIntensity.capexRatio) {
    parts.push(idea.capitalIntensity.capexRatio);
  }

  return { score, reasoning: parts.join(" · ") };
}

function computeTlifeEdge(idea: Idea): { score: number; reasoning: string } | null {
  // Derive from geographic fit — more green lights = stronger local edge
  const primaryScoreMap: Record<string, number> = { green: 3, yellow: 2, red: 1 };
  let score = primaryScoreMap[idea.primaryMarketFit] ?? 2;

  const greenExpansions = idea.expansionMarkets?.filter((em) => em.fit === "green").length ?? 0;
  const yellowExpansions = idea.expansionMarkets?.filter((em) => em.fit === "yellow").length ?? 0;

  // Each green expansion adds 0.7, each yellow adds 0.3
  score += greenExpansions * 0.7 + yellowExpansions * 0.3;
  score = Math.min(5, Math.max(1, Math.round(score * 2) / 2));

  const totalMarkets = 1 + (idea.expansionMarkets?.length ?? 0);
  const greenTotal = (idea.primaryMarketFit === "green" ? 1 : 0) + greenExpansions;

  return {
    score,
    reasoning: `${greenTotal}/${totalMarkets} green market${greenTotal !== 1 ? "s" : ""} · primary: ${idea.primaryMarketFit}`,
  };
}

// ── Dimension computers registry ────────────────────────────────────

const COMPUTERS: Partial<
  Record<
    keyof Omit<Scorecard, "composite">,
    (idea: Idea) => { score: number; reasoning: string } | null
  >
> = {
  competitiveGap: computeCompetitiveGap,
  capitalFit: computeCapitalFit,
  tlifeEdge: computeTlifeEdge,
};

// Manual reasoning for dimensions we can't yet compute
const MANUAL_REASON: Record<string, string> = {
  marketSize: "AI estimate — needs TAM/SAM data",
  regulatoryRisk: "AI estimate — needs regulatory assessment",
  founderAvailability: "AI estimate — needs founder profiles",
};

// ── Main Scorer ─────────────────────────────────────────────────────

export function computeScorecard(idea: Idea): ComputedScorecard {
  let computedCount = 0;

  const dimensions: ScoredDimension[] = SCORECARD_DIMENSIONS.map((dim) => {
    const computer = COMPUTERS[dim.key];
    const computed = computer ? computer(idea) : null;

    if (computed) {
      computedCount++;
      return {
        key: dim.key,
        label: dim.label,
        weight: dim.weight,
        score: computed.score,
        source: "computed" as const,
        reasoning: computed.reasoning,
      };
    }

    // Fall back to static score from data
    const staticScore = idea.scorecard?.[dim.key] ?? 3;
    return {
      key: dim.key,
      label: dim.label,
      weight: dim.weight,
      score: staticScore,
      source: "manual" as const,
      reasoning: MANUAL_REASON[dim.key] ?? "AI estimate",
    };
  });

  const composite = dimensions.reduce((sum, d) => sum + d.score * d.weight, 0);

  return {
    dimensions,
    composite: Math.round(composite * 100) / 100,
    computedCount,
    totalCount: dimensions.length,
  };
}
