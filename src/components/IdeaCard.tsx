import type { Idea } from "../types";
import { TrafficLight } from "./TrafficLight";
import { StageBadge } from "./StageSelector";
import { CapitalBadgeCompact } from "./CapitalBadge";
import { ScorecardCompact } from "./ScorecardRadar";
import { MARKETS } from "../types";

function marketLabel(key: string): string {
  return MARKETS.find((m) => m.key === key)?.label ?? key;
}

export function IdeaCard({
  idea,
  onClick,
}: {
  idea: Idea;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full rounded-lg border border-slate-200 bg-white p-4 text-left shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
            {idea.ycCategory}
          </span>
          {idea.scorecard && (
            <ScorecardCompact composite={idea.scorecard.composite} />
          )}
          {idea.capitalIntensity && (
            <CapitalBadgeCompact level={idea.capitalIntensity.level} />
          )}
        </div>
        <StageBadge stage={idea.stage} />
      </div>

      <h3 className="mb-1 text-sm font-semibold text-slate-900">
        {idea.title}
      </h3>
      <p className="mb-3 line-clamp-2 text-xs text-slate-500">
        {idea.oneLiner}
      </p>

      <div className="mb-3 space-y-1">
        <TrafficLight
          value={idea.primaryMarketFit}
          label={`${marketLabel(idea.primaryMarket)} (primary)`}
        />
        <div className="flex flex-wrap gap-1">
          {idea.expansionMarkets.map((em) => (
            <TrafficLight
              key={em.market}
              value={em.fit}
              label={marketLabel(em.market)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-1">
        {idea.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500"
          >
            {tag}
          </span>
        ))}
        {idea.tags.length > 3 && (
          <span className="text-[10px] text-slate-400">
            +{idea.tags.length - 3}
          </span>
        )}
      </div>
    </button>
  );
}
