import { useState } from "react";
import { useIdeas } from "../hooks/useIdeas";
import { IdeaCard } from "./IdeaCard";
import { EmptyState } from "./EmptyState";
import { getTagCounts } from "../lib/utils";
import {
  STAGES,
  MARKETS,
  type Idea,
  type TrafficLight as TL,
} from "../types";

type SortKey = "title" | "addedDate" | "primaryMarket" | "scorecard";

export function IdeaCatalog({
  onSelectIdea,
}: {
  onSelectIdea: (idea: Idea) => void;
}) {
  const { ideas, filtered, filters, setFilter } = useIdeas();
  const [sortBy, setSortBy] = useState<SortKey>("title");
  const [trafficFilter, setTrafficFilter] = useState<TL | null>(null);

  const topTags = getTagCounts(ideas).slice(0, 20);

  let results = filtered;
  if (trafficFilter) {
    results = results.filter((i) => i.primaryMarketFit === trafficFilter);
  }

  const sorted = [...results].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "addedDate") return a.addedDate.localeCompare(b.addedDate);
    if (sortBy === "scorecard")
      return (b.scorecard?.composite ?? 0) - (a.scorecard?.composite ?? 0);
    return a.primaryMarket.localeCompare(b.primaryMarket);
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Idea Catalog</h1>

      <div className="flex flex-wrap items-center gap-3">
        <input
          type="text"
          placeholder="Search ideas..."
          value={filters.search}
          onChange={(e) => setFilter("search", e.target.value || null)}
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <select
          value={filters.market ?? ""}
          onChange={(e) => setFilter("market", e.target.value || null)}
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
        >
          <option value="">All Markets</option>
          {MARKETS.map((m) => (
            <option key={m.key} value={m.key}>
              {m.label}
            </option>
          ))}
        </select>
        <select
          value={filters.stage ?? ""}
          onChange={(e) => setFilter("stage", e.target.value || null)}
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
        >
          <option value="">All Stages</option>
          {STAGES.map((s) => (
            <option key={s.key} value={s.key}>
              {s.label}
            </option>
          ))}
        </select>
        <select
          value={trafficFilter ?? ""}
          onChange={(e) =>
            setTrafficFilter((e.target.value || null) as TL | null)
          }
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
        >
          <option value="">All Signals</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as SortKey)}
          className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
        >
          <option value="title">Sort: A-Z</option>
          <option value="addedDate">Sort: Date Added</option>
          <option value="primaryMarket">Sort: Market</option>
          <option value="scorecard">Sort: Score ↓</option>
        </select>
        <span className="text-xs text-slate-400">{sorted.length} ideas</span>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {topTags.map((t) => (
          <button
            key={t.tag}
            onClick={() => setFilter("tags", t.tag)}
            className={`rounded-full px-2.5 py-0.5 text-xs transition-colors ${
              filters.tags.includes(t.tag)
                ? "bg-blue-600 text-white"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {t.tag}
            <span className="ml-1 text-[10px] opacity-50">{t.count}</span>
          </button>
        ))}
      </div>

      {sorted.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {sorted.map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              onClick={() => onSelectIdea(idea)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
