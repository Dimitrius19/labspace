// Lazy-load per-ministry qualification JSON files via Vite glob.
// Each file: src/data/govtech/qualifications/<ministryKey>.json

export type QualificationVerdict = "pass" | "conditional" | "fail";

export type QualificationAxes = {
  buyerReachability: number;
  precedentFreshness: number;
  founderMarketFit: number;
  pilotProcurability: number;
  lockInRisk: number;
  studioFit: number;
};

export type IdeaQualification = {
  ideaId: string;
  originalComposite: number;
  originalVerdict: "promote" | "park" | "kill";
  qualification: QualificationVerdict;
  headline: string;
  axes: QualificationAxes;
  compositeNew: number;
  blockers: string[];
  next30days: string;
  evidenceLinks: string[];
};

export type MinistryQualification = {
  ministry: string;
  qualifiedAt: string;
  ideas: IdeaQualification[];
};

const modules = import.meta.glob("/src/data/govtech/qualifications/*.json", {
  eager: true,
  import: "default",
}) as Record<string, MinistryQualification>;

function ministryFromPath(path: string): string {
  const m = /\/([^/]+)\.json$/.exec(path);
  return m ? m[1] : "";
}

const byMinistry: Record<string, MinistryQualification> = {};
const byIdeaId: Record<string, IdeaQualification & { ministry: string }> = {};

for (const [path, data] of Object.entries(modules)) {
  const ministry = data?.ministry ?? ministryFromPath(path);
  if (!data) continue;
  byMinistry[ministry] = data;
  for (const idea of data.ideas) {
    byIdeaId[idea.ideaId] = { ...idea, ministry };
  }
}

export function qualificationFor(ideaId: string): (IdeaQualification & { ministry: string }) | null {
  return byIdeaId[ideaId] ?? null;
}

export function qualificationsForMinistry(ministry: string): MinistryQualification | null {
  return byMinistry[ministry] ?? null;
}

export function allQualifications(): MinistryQualification[] {
  return Object.values(byMinistry);
}

export function qualificationStats(): { ministries: number; ideas: number; pass: number; conditional: number; fail: number } {
  const stats = { ministries: 0, ideas: 0, pass: 0, conditional: 0, fail: 0 };
  for (const m of Object.values(byMinistry)) {
    stats.ministries += 1;
    for (const idea of m.ideas) {
      stats.ideas += 1;
      stats[idea.qualification] += 1;
    }
  }
  return stats;
}

export const QUALIFICATION_COLORS: Record<QualificationVerdict, { bg: string; text: string; dot: string; ring: string; label: string }> = {
  pass: { bg: "bg-emerald-100", text: "text-emerald-800", dot: "bg-emerald-500", ring: "ring-emerald-300", label: "Qualified · PASS" },
  conditional: { bg: "bg-amber-100", text: "text-amber-800", dot: "bg-amber-500", ring: "ring-amber-300", label: "Conditional" },
  fail: { bg: "bg-rose-100", text: "text-rose-800", dot: "bg-rose-500", ring: "ring-rose-300", label: "Disqualified" },
};

export const QUALIFICATION_AXES: { key: keyof QualificationAxes; label: string; tooltip: string }[] = [
  { key: "buyerReachability", label: "Buyer reachability", tooltip: "Named champion + meeting in <60 days" },
  { key: "precedentFreshness", label: "Precedent freshness", tooltip: "Verified intl deployment still operational 2025-2026" },
  { key: "founderMarketFit", label: "Founder-market fit", tooltip: "Athens-recruitable in 90 days" },
  { key: "pilotProcurability", label: "Pilot procurability", tooltip: "Realistic contract vehicle at budget tier" },
  { key: "lockInRisk", label: "Lock-in / continuity", tooltip: "Survives a government change" },
  { key: "studioFit", label: "Studio fit", tooltip: "Matches T-Life's Athens venture-studio thesis" },
];
