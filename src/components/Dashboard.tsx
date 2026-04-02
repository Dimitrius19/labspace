import {
  BarChart,
  Bar,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useIdeas } from "../hooks/useIdeas";
import { STAGES, MARKETS } from "../types";
import { getTopIdeas, getTagCounts } from "../lib/utils";
import { StatCard } from "./StatsRow";
import { IdeaCard } from "./IdeaCard";
import { DonutChart } from "./DonutChart";
import type { Idea } from "../types";

const MARKET_COLORS: Record<string, string> = {
  "greece-cyprus": "#3b82f6",
  balkans: "#8b5cf6",
  europe: "#06b6d4",
  "middle-east": "#f59e0b",
};

const CAPITAL_COLORS: Record<string, string> = {
  low: "#10b981",
  medium: "#f59e0b",
  high: "#ef4444",
};

const STAGE_DOT: Record<string, string> = {
  slate: "bg-slate-400",
  blue: "bg-blue-400",
  amber: "bg-amber-400",
  violet: "bg-violet-400",
  emerald: "bg-emerald-400",
};

export function Dashboard({
  onSelectIdea,
}: {
  onSelectIdea: (idea: Idea) => void;
}) {
  const { ideas } = useIdeas();

  const geoData = MARKETS.map((m) => ({
    label: m.label,
    value: ideas.filter((i) => i.primaryMarket === m.key).length,
    color: MARKET_COLORS[m.key],
  }));

  const capitalData = [
    { label: "Low", value: ideas.filter((i) => i.capitalIntensity?.level === "low").length, color: CAPITAL_COLORS.low },
    { label: "Medium", value: ideas.filter((i) => i.capitalIntensity?.level === "medium").length, color: CAPITAL_COLORS.medium },
    { label: "High", value: ideas.filter((i) => i.capitalIntensity?.level === "high").length, color: CAPITAL_COLORS.high },
  ];

  const topTags = getTagCounts(ideas).slice(0, 8);
  const topIdeas = getTopIdeas(ideas, 6);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>

      {/* Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Total Ideas" value={ideas.length} accent="text-blue-600" />
        <StatCard
          label="Green Primary Markets"
          value={ideas.filter((i) => i.primaryMarketFit === "green").length}
          accent="text-emerald-600"
        />
        <StatCard
          label="Low Capital Ideas"
          value={ideas.filter((i) => i.capitalIntensity?.level === "low").length}
          accent="text-emerald-600"
        />
      </div>

      {/* Stage pills */}
      <div className="flex gap-3">
        {STAGES.map((s) => {
          const count = ideas.filter((i) => i.stage === s.key).length;
          return (
            <div
              key={s.key}
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 shadow-sm"
            >
              <span className={`h-2 w-2 rounded-full ${STAGE_DOT[s.color]}`} />
              <span className="text-xs font-medium text-slate-600">{s.label}</span>
              <span className="text-sm font-bold text-slate-900">{count}</span>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 self-start text-sm font-semibold text-slate-700">
            By Market
          </h3>
          <DonutChart data={geoData} />
        </div>

        <div className="flex flex-col items-center rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 self-start text-sm font-semibold text-slate-700">
            Capital Intensity
          </h3>
          <DonutChart data={capitalData} />
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold text-slate-700">
            Top Tags
          </h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart
              data={topTags}
              layout="vertical"
              margin={{ left: 0, right: 8 }}
            >
              <YAxis
                type="category"
                dataKey="tag"
                width={110}
                tick={{ fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={14} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Ideas */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-slate-700">
          Top Ideas (most green lights)
        </h3>
        <div className="grid grid-cols-3 gap-4">
          {topIdeas.map((idea) => (
            <IdeaCard
              key={idea.id}
              idea={idea}
              onClick={() => onSelectIdea(idea)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
