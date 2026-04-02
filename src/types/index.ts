export type MarketKey = "greece-cyprus" | "balkans" | "europe" | "middle-east";
export type TrafficLight = "green" | "yellow" | "red";
export type Stage = "discovered" | "exploring" | "evaluating" | "committed" | "prototyping";

export interface ExpansionMarket {
  market: MarketKey;
  fit: TrafficLight;
  note: string;
}

export type CapitalLevel = "low" | "medium" | "high";

export interface MoatMilestone {
  timeframe: string;
  milestone: string;
}

export interface CapitalIntensity {
  level: CapitalLevel;
  estimatedSeedCapital: string;
  capexRatio: string;
  note: string;
}

export type CompetitiveIntensity = "open" | "moderate" | "crowded";

export interface Competitor {
  name: string;
  type: "startup" | "incumbent" | "adjacent";
  geography: string;
  note: string;
}

export interface Scorecard {
  marketSize: number;       // 1-5
  tlifeEdge: number;        // 1-5
  competitiveGap: number;   // 1-5
  capitalFit: number;       // 1-5
  regulatoryRisk: number;   // 1-5 (5 = low risk)
  founderAvailability: number; // 1-5
  composite: number;        // weighted average
}

export const SCORECARD_DIMENSIONS: { key: keyof Omit<Scorecard, "composite">; label: string; weight: number }[] = [
  { key: "marketSize", label: "Market Size", weight: 0.25 },
  { key: "tlifeEdge", label: "T-Life Edge", weight: 0.20 },
  { key: "competitiveGap", label: "Competitive Gap", weight: 0.20 },
  { key: "capitalFit", label: "Capital Fit", weight: 0.15 },
  { key: "regulatoryRisk", label: "Regulatory Risk", weight: 0.10 },
  { key: "founderAvailability", label: "Founder Availability", weight: 0.10 },
];

export interface Idea {
  id: string;
  title: string;
  ycCategory: string;
  ycBatchDate: string;
  oneLiner: string;
  description: string;
  primaryMarket: MarketKey;
  primaryMarketFit: TrafficLight;
  primaryMarketRationale: string;
  expansionMarkets: ExpansionMarket[];
  stage: Stage;
  tlifeAngle: string;
  ycRfsCorrelation: string;
  whyNow: string;
  roadToMoat: MoatMilestone[];
  capitalIntensity: CapitalIntensity;
  competitors: Competitor[];
  competitiveIntensity: CompetitiveIntensity;
  scorecard: Scorecard;
  tags: string[];
  addedDate: string;
  notes: string;
}

export interface LocalOverrides {
  [ideaId: string]: {
    stage?: Stage;
    notes?: string;
    updatedAt?: string;
  };
}

export interface FilterState {
  stage: Stage | null;
  market: MarketKey | null;
  tags: string[];
  search: string;
}

export type ViewKey = "dashboard" | "funnel" | "catalog" | "geography" | "category";

export const STAGES: { key: Stage; label: string; color: string }[] = [
  { key: "discovered", label: "Discovered", color: "slate" },
  { key: "exploring", label: "Exploring", color: "blue" },
  { key: "evaluating", label: "Evaluating", color: "amber" },
  { key: "committed", label: "Committed", color: "violet" },
  { key: "prototyping", label: "Prototyping", color: "emerald" },
];

export const MARKETS: { key: MarketKey; label: string }[] = [
  { key: "greece-cyprus", label: "Greece / Cyprus" },
  { key: "balkans", label: "Balkans" },
  { key: "europe", label: "Europe" },
  { key: "middle-east", label: "Middle East" },
];
