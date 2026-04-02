import { useState } from "react";
import { useIdeas } from "../hooks/useIdeas";
import { IdeaCard } from "./IdeaCard";
import { EmptyState } from "./EmptyState";
import type { Idea } from "../types";

const YC_CATEGORIES = [
  "Cursor for Product Managers",
  "AI-Native Hedge Funds",
  "AI-Native Agencies",
  "Stablecoin Financial Services",
  "AI for Government",
  "Modern Metal Mills",
  "AI Guidance for Physical Work",
  "Large Spatial Models",
  "Infra for Government Fraud Hunters",
  "Make LLMs Easy to Train",
];

export function ByCategoryView({
  onSelectIdea,
}: {
  onSelectIdea: (idea: Idea) => void;
}) {
  const { ideas } = useIdeas();
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(YC_CATEGORIES)
  );

  function toggleCategory(cat: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">By YC Category</h1>

      <div className="space-y-3">
        {YC_CATEGORIES.map((cat) => {
          const catIdeas = ideas.filter((i) => i.ycCategory === cat);
          const isOpen = openCategories.has(cat);

          return (
            <div
              key={cat}
              className="rounded-lg border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => toggleCategory(cat)}
                className="flex w-full items-center justify-between px-4 py-3 text-left"
              >
                <span className="text-sm font-semibold text-slate-700">
                  {cat}
                </span>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
                    {catIdeas.length}
                  </span>
                  <svg
                    className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {isOpen && (
                <div className="border-t border-slate-100 p-4">
                  {catIdeas.length === 0 ? (
                    <EmptyState />
                  ) : (
                    <div className="grid grid-cols-3 gap-3">
                      {catIdeas.map((idea) => (
                        <IdeaCard
                          key={idea.id}
                          idea={idea}
                          onClick={() => onSelectIdea(idea)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
