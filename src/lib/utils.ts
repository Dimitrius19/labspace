import type { Idea } from "../types";

export function countGreenLights(idea: Idea): number {
  let count = idea.primaryMarketFit === "green" ? 1 : 0;
  for (const em of idea.expansionMarkets) {
    if (em.fit === "green") count++;
  }
  return count;
}

export function getTopIdeas(ideas: Idea[], limit = 5): Idea[] {
  return [...ideas]
    .sort((a, b) => {
      const diff = countGreenLights(b) - countGreenLights(a);
      if (diff !== 0) return diff;
      return a.title.localeCompare(b.title);
    })
    .slice(0, limit);
}

export function getAllTags(ideas: Idea[]): string[] {
  const tagSet = new Set<string>();
  for (const idea of ideas) {
    for (const tag of idea.tags) tagSet.add(tag);
  }
  return Array.from(tagSet).sort();
}

export function getTagCounts(ideas: Idea[]): { tag: string; count: number }[] {
  const counts: Record<string, number> = {};
  for (const idea of ideas) {
    for (const tag of idea.tags) {
      counts[tag] = (counts[tag] || 0) + 1;
    }
  }
  return Object.entries(counts)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
