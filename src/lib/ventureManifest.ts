import type {
  Venture,
  VentureStage,
  Health,
  LaunchTask,
  VentureMilestone,
} from "../types";

export interface LatestCommit {
  sha: string;
  message: string;
  author: string;
  date: string;
  url: string;
}

export interface VentureSyncEntry {
  id: string;
  owner: string;
  repo: string;
  manifest: Partial<Venture> | null;
  latestCommit: LatestCommit | null;
  error: string | null;
}

export interface VentureSyncResponse {
  ventures: VentureSyncEntry[];
  fetchedAt: string;
}

export function mergeManifest(seed: Venture, manifest: Partial<Venture> | null): Venture {
  if (!manifest) return seed;
  return {
    ...seed,
    ...manifest,
    stage: (manifest.stage as VentureStage) ?? seed.stage,
    health: (manifest.health as Health) ?? seed.health,
    tasks: mergeById<LaunchTask>(seed.tasks, manifest.tasks),
    milestones: mergeById<VentureMilestone>(seed.milestones, manifest.milestones),
    techStack: manifest.techStack ?? seed.techStack,
    team: manifest.team ?? seed.team,
    risks: manifest.risks ?? seed.risks,
  };
}

function mergeById<T extends { id: string }>(seedItems: T[], manifestItems: T[] | undefined): T[] {
  if (!manifestItems || manifestItems.length === 0) return seedItems;
  const seedMap = new Map(seedItems.map((item) => [item.id, item]));
  const result: T[] = [];
  const seen = new Set<string>();
  for (const m of manifestItems) {
    const base = seedMap.get(m.id);
    result.push(base ? { ...base, ...m } : m);
    seen.add(m.id);
  }
  for (const s of seedItems) {
    if (!seen.has(s.id)) result.push(s);
  }
  return result;
}
