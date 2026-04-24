import { STAGES, type ViewKey } from "../types";
import { useIdeas } from "../hooks/useIdeas";
import { useVentures } from "../hooks/useVentures";
import { TagCloud } from "./TagCloud";
import { HEALTH_COLORS } from "../types";
import { taskProgress } from "../lib/ventureUtils";

const NAV_ITEMS: { key: ViewKey; label: string; icon: string }[] = [
  { key: "ventures", label: "Ventures", icon: "rocket" },
  { key: "dashboard", label: "Idea Dashboard", icon: "chart" },
  { key: "funnel", label: "Funnel Board", icon: "funnel" },
  { key: "catalog", label: "Idea Catalog", icon: "grid" },
  { key: "geography", label: "By Geography", icon: "globe" },
  { key: "category", label: "By YC Category", icon: "tag" },
];

function NavIcon({ type }: { type: string }) {
  const cls = "h-4 w-4";
  switch (type) {
    case "rocket":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l4 4m6-14a7 7 0 017 7c0 5-7 11-7 11S8 17 8 12a7 7 0 017-7zm0 5a2 2 0 100 4 2 2 0 000-4z" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13h4v8H3zM10 9h4v12h-4zM17 5h4v16h-4z" />
        </svg>
      );
    case "funnel":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h18l-7 8v5l-4 2V12L3 4z" />
        </svg>
      );
    case "grid":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5h5v5H4zM15 5h5v5h-5zM4 15h5v5H4zM15 15h5v5h-5z" />
        </svg>
      );
    case "globe":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3a15 15 0 014 9 15 15 0 01-4 9 15 15 0 01-4-9 15 15 0 014-9z" />
        </svg>
      );
    case "tag":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5a1.99 1.99 0 011.41.59l7 7a2 2 0 010 2.82l-5 5a2 2 0 01-2.82 0l-7-7A2 2 0 015 10V5a2 2 0 012-2z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Sidebar({
  activeView,
  onViewChange,
}: {
  activeView: ViewKey;
  onViewChange: (view: ViewKey) => void;
}) {
  const { ideas, filters, setFilter, clearFilters } = useIdeas();
  const { ventures } = useVentures();

  const stageCounts = STAGES.map((s) => ({
    ...s,
    count: ideas.filter((i) => i.stage === s.key).length,
  }));

  return (
    <aside className="flex h-screen w-60 flex-col border-r border-slate-700 bg-slate-900">
      <div className="border-b border-slate-700 px-5 py-5">
        <div className="text-xs font-medium uppercase tracking-wider text-slate-500">
          T-Life Capital
        </div>
        <div className="mt-1 text-lg font-bold text-white">Venture Studio</div>
        <div className="text-[10px] font-normal tracking-wide text-slate-500">Workbench</div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.key}
            onClick={() => onViewChange(item.key)}
            className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
              activeView === item.key
                ? "bg-slate-800 font-medium text-white"
                : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
            }`}
          >
            <NavIcon type={item.icon} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="border-t border-slate-700 px-3 py-4">
        <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">
          Active Ventures
        </div>
        {ventures.map((v) => {
          const { pct } = taskProgress(v);
          const h = HEALTH_COLORS[v.health];
          return (
            <button
              key={v.id}
              onClick={() => onViewChange("ventures")}
              className="flex w-full items-center justify-between rounded-md px-3 py-1.5 text-left text-sm text-slate-400 transition-colors hover:text-slate-200"
            >
              <span className="flex items-center gap-2 truncate">
                <span className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${h.dot}`} />
                <span className="truncate">{v.name}</span>
              </span>
              <span className="text-[10px] text-slate-500">{pct}%</span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-slate-700 px-3 py-4">
        <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">
          Idea Stages
        </div>
        {stageCounts.map((s) => (
          <button
            key={s.key}
            onClick={() =>
              setFilter("stage", filters.stage === s.key ? null : s.key)
            }
            className={`flex w-full items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors ${
              filters.stage === s.key
                ? "bg-slate-800 text-white"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <span>{s.label}</span>
            <span className="text-xs text-slate-500">{s.count}</span>
          </button>
        ))}
        {filters.stage && (
          <button
            onClick={clearFilters}
            className="mt-2 w-full rounded-md px-3 py-1 text-xs text-blue-400 hover:text-blue-300"
          >
            Clear filters
          </button>
        )}
      </div>

      <TagCloud />
    </aside>
  );
}
