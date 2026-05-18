import { useMemo, useState } from "react";
import { useProgram } from "../../hooks/useProgram";
import { ideas } from "../../data/ideas";
import { MARKETS } from "../../types";

const TARGET_MIN = 15;
const TARGET_MAX = 20;
const OPEN_SLOT_TARGET_MIN = 4;
const OPEN_SLOT_TARGET_MAX = 6;

export function BriefLibrary() {
  const { overrides, toggleBrief } = useProgram();
  const [search, setSearch] = useState("");
  const [marketFilter, setMarketFilter] = useState<string>("");
  const [onlySelected, setOnlySelected] = useState(false);

  const allTags = useMemo(() => {
    const set = new Set<string>();
    ideas.forEach((i) => i.tags.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);
  const [tagFilter, setTagFilter] = useState("");

  const filtered = useMemo(() => {
    return ideas.filter((idea) => {
      if (onlySelected && !overrides.selectedBriefIds.includes(idea.id)) return false;
      if (marketFilter && idea.primaryMarket !== marketFilter) return false;
      if (tagFilter && !idea.tags.includes(tagFilter)) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !idea.title.toLowerCase().includes(q) &&
          !idea.oneLiner.toLowerCase().includes(q) &&
          !idea.tags.some((t) => t.toLowerCase().includes(q))
        ) {
          return false;
        }
      }
      return true;
    });
  }, [search, marketFilter, tagFilter, onlySelected, overrides.selectedBriefIds]);

  const selectedCount = overrides.selectedBriefIds.length;
  const reservedForOpen = OPEN_SLOT_TARGET_MAX; // up to 6 slots reserved for open submissions
  const briefTargetMin = TARGET_MIN - OPEN_SLOT_TARGET_MIN; // ~11
  const briefTargetMax = TARGET_MAX - OPEN_SLOT_TARGET_MIN; // ~16

  const status =
    selectedCount === 0
      ? { label: "No briefs selected", color: "text-slate-500", bar: "bg-slate-200" }
      : selectedCount < briefTargetMin
      ? { label: `Need ${briefTargetMin - selectedCount} more to hit min`, color: "text-amber-700", bar: "bg-amber-500" }
      : selectedCount <= briefTargetMax
      ? { label: "Within target band", color: "text-emerald-700", bar: "bg-emerald-500" }
      : { label: `${selectedCount - briefTargetMax} over band — consider trimming`, color: "text-rose-700", bar: "bg-rose-500" };

  const pct = Math.min(100, Math.round((selectedCount / TARGET_MAX) * 100));

  return (
    <div className="space-y-6">
      {/* Target meter */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-baseline justify-between gap-2">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Brief curation</div>
            <div className="mt-0.5 text-base font-semibold text-slate-900">
              {selectedCount} selected · target {briefTargetMin}–{briefTargetMax} curated + {OPEN_SLOT_TARGET_MIN}–{reservedForOpen} open-submission slots
            </div>
          </div>
          <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className={`h-full ${status.bar} transition-all`} style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-2 flex justify-between text-[10px] text-slate-400">
          <span>0</span>
          <span>{briefTargetMin}</span>
          <span>{briefTargetMax}</span>
          <span>{TARGET_MAX}</span>
        </div>
      </section>

      {/* Filters */}
      <section className="flex flex-wrap items-center gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search briefs…"
          className="flex-1 min-w-[200px] rounded-md border border-slate-200 px-3 py-1.5 text-sm"
        />
        <select
          value={marketFilter}
          onChange={(e) => setMarketFilter(e.target.value)}
          className="rounded-md border border-slate-200 px-2 py-1.5 text-sm"
        >
          <option value="">All markets</option>
          {MARKETS.map((m) => (
            <option key={m.key} value={m.key}>{m.label}</option>
          ))}
        </select>
        <select
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="rounded-md border border-slate-200 px-2 py-1.5 text-sm"
        >
          <option value="">All tags</option>
          {allTags.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <label className="flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm">
          <input
            type="checkbox"
            checked={onlySelected}
            onChange={(e) => setOnlySelected(e.target.checked)}
            className="h-3.5 w-3.5"
          />
          <span>Only selected</span>
        </label>
        <span className="text-xs text-slate-500">{filtered.length} shown</span>
      </section>

      {/* Brief list */}
      <section className="space-y-2">
        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-sm text-slate-400">
            No briefs match the current filters.
          </div>
        )}
        {filtered.map((idea) => {
          const isSelected = overrides.selectedBriefIds.includes(idea.id);
          return (
            <button
              key={idea.id}
              onClick={() => toggleBrief(idea.id)}
              className={`flex w-full items-start gap-3 rounded-xl border bg-white p-4 text-left transition-all ${
                isSelected
                  ? "border-violet-400 ring-2 ring-violet-100"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${isSelected ? "border-violet-500 bg-violet-500" : "border-slate-300 bg-white"}`}>
                {isSelected && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-sm font-bold text-slate-900">{idea.title}</h3>
                  <span className="text-[11px] text-slate-500">{idea.ycCategory}</span>
                  {isSelected && (
                    <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-violet-700">
                      brief
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-slate-600">{idea.oneLiner}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {idea.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden flex-shrink-0 text-right md:block">
                <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">Score</div>
                <div className="text-lg font-bold text-slate-900">{idea.scorecard.composite.toFixed(1)}</div>
              </div>
            </button>
          );
        })}
      </section>
    </div>
  );
}
