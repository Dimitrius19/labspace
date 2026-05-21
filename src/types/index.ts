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

// ---------- Methodology v2: structured assertions, kill tests, pre-mortem ----------
// Optional on existing entries; required on new high-conviction theses.

export type AssertionStatus =
  | "confirmed"
  | "estimated"
  | "user-stated"
  | "unverified"
  | "refuted";

export interface Assertion {
  id: string;
  claim: string;
  source: string; // URL, "[USER-STATED]", "[ESTIMATE]", "[REFUTED]", "[UNVERIFIED]"
  status: AssertionStatus;
  lastChecked: string; // YYYY-MM-DD
  note?: string;
}

export interface KillTest {
  id: string;
  hypothesis: string;        // "X is true"
  experiment: string;        // "Do Y for N weeks"
  costEur: number;
  durationWeeks: number;
  killSignal: string;        // observable outcome that kills the idea
  validateSignal: string;    // observable outcome that proceeds the idea
}

export type FailureLikelihood = "high" | "medium" | "low";

export interface FailureMode {
  cause: string;
  likelihood: FailureLikelihood;
  earlySignal: string;       // what you'd watch for in the first 90 days
}

export interface ProbabilityBands {
  reaches1mArrBy18mo: number;      // 0-1
  reaches10mArrBy36mo: number;     // 0-1
  totalFailureBy36mo: number;      // 0-1; can co-exist with low values above (not partitioning)
  basisOfEstimate: string;         // 1-3 sentences anchoring the numbers to base rates
}

export type Industry =
  | "pharma-life-sciences"
  | "maritime"
  | "agetech"
  | "construction-home"
  | "consumer"
  | "fintech"
  | "workforce-saas"
  | "govtech-identity"
  | "retail-circular"
  | "auto";

export const INDUSTRIES: { key: Industry; label: string }[] = [
  { key: "pharma-life-sciences", label: "Pharma & Life Sciences" },
  { key: "maritime", label: "Maritime & Shipping" },
  { key: "agetech", label: "Agetech & Senior Care" },
  { key: "construction-home", label: "Construction & Home Services" },
  { key: "consumer", label: "Consumer (Family, Pet, Social)" },
  { key: "fintech", label: "Fintech & SMB Software" },
  { key: "workforce-saas", label: "Workforce & Productivity SaaS" },
  { key: "govtech-identity", label: "GovTech, Compliance & Identity" },
  { key: "retail-circular", label: "Retail & Circular Economy" },
  { key: "auto", label: "Auto" },
];

export type RedTeamVerdict = "pass" | "revise" | "proceed-with-caveats" | "proceed";

export interface RedTeamFinding {
  date: string;                         // YYYY-MM-DD
  verdict: RedTeamVerdict;
  dealKiller: string;                   // the single strongest argument to kill
  patternMatches: string[];             // 2-4 named precedents from adjacent failures
  unitEconomicsConcern?: string;        // 1-3 sentences on margin/CAC/cap-table reality
  loadBearingAssumption?: string;       // the assumption NOT in `assertions` that has to hold
  alternativeThesis: string;            // a stronger reframe of the same opportunity
}

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
  // Methodology v2 fields (optional during transition):
  assertions?: Assertion[];
  killTests?: KillTest[];
  preMortem?: FailureMode[];
  probabilityBands?: ProbabilityBands;
  tlifeAssetRefs?: string[]; // ids from tlifeAssets.ts
  redTeamFindings?: RedTeamFinding[];
  industry?: Industry;
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

export type ViewKey =
  | "ventures"
  | "dashboard"
  | "funnel"
  | "catalog"
  | "geography"
  | "category"
  | "govtech"
  | "mvp";

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

// ---------- Government / Public Sector ideas ----------

export type MinistryKey =
  | "digital-governance"
  | "finance-aade"
  | "interior"
  | "justice"
  | "national-defence"
  | "foreign-affairs"
  | "migration-asylum"
  | "citizen-protection"
  | "climate-civil-protection"
  | "health"
  | "education"
  | "labour-social-security"
  | "development"
  | "environment-energy"
  | "infrastructure-transport"
  | "maritime-insular"
  | "rural-development"
  | "tourism"
  | "culture"
  | "social-cohesion-family"
  | "state-cross-cutting";

export type PitchReady = "concept" | "memo" | "demo" | "pilot";
export type Verdict = "promote" | "park" | "kill";
export type AgenticFit = "high" | "medium" | "low";

export interface IntlPrecedent {
  country: string;
  program: string;
  ministry?: string;
  year?: string;
  outcome?: string;
  url?: string;
}

export interface RedTeamFinding {
  axis:
    | "incumbent-overlap"
    | "political-third-rail"
    | "regulatory-blocker"
    | "technical-infeasibility"
    | "founder-fit"
    | "language-moat";
  severity: "kill" | "wound" | "clear";
  note: string;
}

export interface GovRubric {
  agenticFit: number;        // 1-5
  blueOcean: number;         // 1-5
  timeToPilot: number;       // 1-5 (5 = fast)
  politicalTailwind: number; // 1-5
  capitalEfficiency: number; // 1-5
  greekLanguageMoat: number; // 1-5
  composite: number;
}

export const GOV_RUBRIC_DIMENSIONS: { key: keyof Omit<GovRubric, "composite">; label: string; weight: number }[] = [
  { key: "agenticFit", label: "Agentic fit", weight: 0.25 },
  { key: "blueOcean", label: "Blue ocean", weight: 0.20 },
  { key: "timeToPilot", label: "Time to pilot", weight: 0.15 },
  { key: "politicalTailwind", label: "Political tailwind", weight: 0.15 },
  { key: "capitalEfficiency", label: "Capital efficiency", weight: 0.10 },
  { key: "greekLanguageMoat", label: "Greek-language moat", weight: 0.15 },
];

export interface GovIdea {
  id: string;
  ministry: MinistryKey;
  title: string;
  oneLiner: string;
  problem: string;
  agentLoop: string[];            // ordered steps the agent performs on Tuesday morning
  userInsideMinistry: string;     // who actually uses it (e.g. "ΣτΕ rapporteur clerk")
  blueOceanAngle: string;
  greekContext: string;           // why Greece specifically, what the Greek twist is
  intlPrecedents: IntlPrecedent[];
  redTeam: RedTeamFinding[];
  buyerObjection: string;         // simulated GS-level pushback
  buyerHook: string;              // what would make them forward it to the minister
  rubric: GovRubric;
  verdict: Verdict;
  verdictRationale: string;
  pitchReady: PitchReady;
  championProfile: string;
  estimatedPilotBudget: string;   // tier or range
  founderProfile: string;         // who should run this
  tags: string[];
  addedDate: string;              // YYYY-MM-DD
}

export interface GovOverrides {
  [govIdeaId: string]: {
    verdict?: Verdict;
    pitchReady?: PitchReady;
    notes?: string;
    updatedAt?: string;
  };
}

export const MINISTRIES: { key: MinistryKey; label: string; shortLabel: string; greek: string; accent: string }[] = [
  { key: "digital-governance", label: "Digital Governance", shortLabel: "Digital Gov", greek: "Ψηφιακής Διακυβέρνησης", accent: "violet" },
  { key: "finance-aade", label: "Finance / AADE", shortLabel: "Finance", greek: "Οικονομικών / ΑΑΔΕ", accent: "emerald" },
  { key: "interior", label: "Interior", shortLabel: "Interior", greek: "Εσωτερικών", accent: "blue" },
  { key: "justice", label: "Justice", shortLabel: "Justice", greek: "Δικαιοσύνης", accent: "amber" },
  { key: "national-defence", label: "National Defence", shortLabel: "Defence", greek: "Εθνικής Άμυνας", accent: "slate" },
  { key: "foreign-affairs", label: "Foreign Affairs", shortLabel: "MFA", greek: "Εξωτερικών", accent: "sky" },
  { key: "migration-asylum", label: "Migration & Asylum", shortLabel: "Migration", greek: "Μετανάστευσης & Ασύλου", accent: "rose" },
  { key: "citizen-protection", label: "Citizen Protection", shortLabel: "Police", greek: "Προστασίας του Πολίτη", accent: "indigo" },
  { key: "climate-civil-protection", label: "Climate Crisis & Civil Protection", shortLabel: "Civil Protection", greek: "Κλιματικής Κρίσης & Πολιτικής Προστασίας", accent: "red" },
  { key: "health", label: "Health", shortLabel: "Health", greek: "Υγείας", accent: "teal" },
  { key: "education", label: "Education", shortLabel: "Education", greek: "Παιδείας", accent: "yellow" },
  { key: "labour-social-security", label: "Labour & Social Security", shortLabel: "Labour", greek: "Εργασίας & Κοιν. Ασφάλισης", accent: "orange" },
  { key: "development", label: "Development", shortLabel: "Development", greek: "Ανάπτυξης", accent: "lime" },
  { key: "environment-energy", label: "Environment & Energy", shortLabel: "Energy", greek: "Περιβάλλοντος & Ενέργειας", accent: "green" },
  { key: "infrastructure-transport", label: "Infrastructure & Transport", shortLabel: "Transport", greek: "Υποδομών & Μεταφορών", accent: "cyan" },
  { key: "maritime-insular", label: "Maritime & Insular Policy", shortLabel: "Maritime", greek: "Ναυτιλίας & Νησιωτικής Πολιτικής", accent: "sky" },
  { key: "rural-development", label: "Rural Development & Food", shortLabel: "Rural Dev", greek: "Αγροτικής Ανάπτυξης", accent: "lime" },
  { key: "tourism", label: "Tourism", shortLabel: "Tourism", greek: "Τουρισμού", accent: "fuchsia" },
  { key: "culture", label: "Culture", shortLabel: "Culture", greek: "Πολιτισμού", accent: "purple" },
  { key: "social-cohesion-family", label: "Social Cohesion & Family", shortLabel: "Family", greek: "Κοιν. Συνοχής & Οικογένειας", accent: "pink" },
  { key: "state-cross-cutting", label: "State / Cross-cutting", shortLabel: "State", greek: "Επικρατείας", accent: "zinc" },
];

export const VERDICT_COLORS: Record<Verdict, { dot: string; text: string; bg: string; label: string }> = {
  promote: { dot: "bg-emerald-500", text: "text-emerald-700", bg: "bg-emerald-50", label: "Promote" },
  park:    { dot: "bg-amber-500",   text: "text-amber-700",   bg: "bg-amber-50",   label: "Park" },
  kill:    { dot: "bg-rose-500",    text: "text-rose-700",    bg: "bg-rose-50",    label: "Kill" },
};

export const PITCH_READY_LABEL: Record<PitchReady, string> = {
  concept: "Concept",
  memo: "Memo-ready",
  demo: "Demo-ready",
  pilot: "Pilot in flight",
};
