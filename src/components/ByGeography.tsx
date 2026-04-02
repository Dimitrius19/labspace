import { useState } from "react";
import { MARKETS, type MarketKey, type Idea } from "../types";
import { useIdeas } from "../hooks/useIdeas";
import { IdeaCard } from "./IdeaCard";
import { EmptyState } from "./EmptyState";

export function ByGeography({
  onSelectIdea,
}: {
  onSelectIdea: (idea: Idea) => void;
}) {
  const { ideas } = useIdeas();
  const [activeTab, setActiveTab] = useState<MarketKey>("greece-cyprus");

  const marketIdeas = ideas.filter(
    (i) =>
      i.primaryMarket === activeTab ||
      i.expansionMarkets.some(
        (em) => em.market === activeTab && em.fit === "green"
      )
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">By Geography</h1>

      <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
        {MARKETS.map((m) => {
          const count = ideas.filter(
            (i) =>
              i.primaryMarket === m.key ||
              i.expansionMarkets.some(
                (em) => em.market === m.key && em.fit === "green"
              )
          ).length;

          return (
            <button
              key={m.key}
              onClick={() => setActiveTab(m.key)}
              className={`flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === m.key
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {m.label}
              <span className="ml-1.5 text-xs text-slate-400">{count}</span>
            </button>
          );
        })}
      </div>

      {marketIdeas.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {marketIdeas.map((idea) => (
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
