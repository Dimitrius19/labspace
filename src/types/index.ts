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

export type ViewKey = "ventures" | "dashboard" | "funnel" | "catalog" | "geography" | "category";

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

// ---------- Ventures (active businesses) ----------

export type VentureStage =
  | "ideation"
  | "building"
  | "private-beta"
  | "public-beta"
  | "launched"
  | "scaling";

export type TaskCategory =
  | "product"
  | "engineering"
  | "design"
  | "legal"
  | "go-to-market"
  | "operations"
  | "finance";

export type Health = "on-track" | "at-risk" | "blocked";

export interface LaunchTask {
  id: string;
  title: string;
  category: TaskCategory;
  done: boolean;
  priority: "p0" | "p1" | "p2";
  notes?: string;
}

export interface VentureMilestone {
  id: string;
  title: string;
  targetDate: string; // YYYY-MM-DD
  done: boolean;
  note?: string;
}

export interface Venture {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
  stage: VentureStage;
  health: Health;
  launchTarget: string; // YYYY-MM-DD
  kickoffDate: string;
  techStack: string[];
  team: { name: string; role: string }[];
  nextAction: string;
  risks: string[];
  tasks: LaunchTask[];
  milestones: VentureMilestone[];
  accent: string; // tailwind color prefix, e.g. "blue"
  notes: string;
}

export interface VentureOverrides {
  [ventureId: string]: {
    stage?: VentureStage;
    health?: Health;
    launchTarget?: string;
    nextAction?: string;
    notes?: string;
    taskDone?: Record<string, boolean>;
    milestoneDone?: Record<string, boolean>;
    updatedAt?: string;
  };
}

export const VENTURE_STAGES: { key: VentureStage; label: string; color: string }[] = [
  { key: "ideation", label: "Ideation", color: "slate" },
  { key: "building", label: "Building", color: "blue" },
  { key: "private-beta", label: "Private Beta", color: "violet" },
  { key: "public-beta", label: "Public Beta", color: "amber" },
  { key: "launched", label: "Launched", color: "emerald" },
  { key: "scaling", label: "Scaling", color: "teal" },
];

export const TASK_CATEGORIES: { key: TaskCategory; label: string; icon: string }[] = [
  { key: "product", label: "Product", icon: "box" },
  { key: "engineering", label: "Engineering", icon: "code" },
  { key: "design", label: "Design", icon: "palette" },
  { key: "legal", label: "Legal & Compliance", icon: "shield" },
  { key: "go-to-market", label: "Go-to-Market", icon: "megaphone" },
  { key: "operations", label: "Operations", icon: "gear" },
  { key: "finance", label: "Finance", icon: "dollar" },
];

export const HEALTH_COLORS: Record<Health, { bg: string; text: string; dot: string; label: string }> = {
  "on-track": { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", label: "On track" },
  "at-risk": { bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-500", label: "At risk" },
  blocked: { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500", label: "Blocked" },
};
