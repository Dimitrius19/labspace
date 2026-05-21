import { useMemo } from "react";
import { useGovIdeas } from "../hooks/useGovIdeas";
import { QualificationBadge } from "./QualificationPanel";
import { QualifiedShortlist } from "./QualifiedShortlist";
import { qualificationStats } from "../lib/qualifications";
import { MINISTRIES, VERDICT_COLORS, PITCH_READY_LABEL, type GovIdea, type MinistryKey, type Verdict } from "../types";

const VERDICTS: Verdict[] = ["promote", "park", "kill"];

export function MinistryMatrix({ onSelectIdea }: { onSelectIdea: (idea: GovIdea) => void }) {
  const { ideas, filtered, filters, setFilter, clearFilters } = useGovIdeas();

  const stats = useMemo(() => {
    const counts: Record<Verdict, number> = { promote: 0, park: 0, kill: 0 };
    ideas.forEach((i) => { counts[i.verdict] += 1; });
    return counts;
  }, [ideas]);

  const ministriesWithIdeas = useMemo(() => {
    const present = new Set(ideas.map((i) => i.ministry));
    return MINISTRIES.filter((m) => present.has(m.key));
  }, [ideas]);

  const byMinistry = useMemo(() => {
    const map = new Map<MinistryKey, GovIdea[]>();
    filtered.forEach((i) => {
      const arr = map.get(i.ministry) ?? [];
      arr.push(i);
      map.set(i.ministry, arr);
    });
    return map;
  }, [filtered]);

  const totalPromotes = filtered.filter((i) => i.verdict === "promote").length;
  const totalIdeas = filtered.length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Public Sector — Agentic Ventures</h1>
          <p className="mt-1 max-w-3xl text-sm text-slate-500">
            Per-ministry pipeline: each idea has been scouted, red-teamed, buyer-simulated and scored against the rubric. Click any card for the full memo and citations. Kill / park / promote can be overridden — your decisions are saved locally.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Stat label="Ministries covered" value={ministriesWithIdeas.length} />
          <Stat label="Ideas" value={totalIdeas} />
          <Stat label="Promote" value={totalPromotes} accent="text-emerald-600" />
          <Stat label="Kill" value={filtered.filter((i) => i.verdict === "kill").length} accent="text-rose-600" />
          {(() => {
            const qs = qualificationStats();
            if (qs.ministries === 0) return null;
            return (
              <div className="rounded-lg border border-violet-300 bg-violet-50 px-3 py-2">
                <div className="text-[10px] uppercase tracking-wide text-violet-700">Qualified ({qs.ministries}/21 ministries)</div>
                <div className="mt-0.5 flex items-baseline gap-2 text-[11px]">
                  <span className="font-semibold text-emerald-700">{qs.pass} pass</span>
                  <span className="text-amber-700">{qs.conditional} cond.</span>
                  <span className="text-rose-700">{qs.fail} fail</span>
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      <QualifiedShortlist onSelectIdea={onSelectIdea} />

      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
        <input
          type="text"
          placeholder="Search ideas, problems, tags…"
          value={filters.search}
          onChange={(e) => setFilter("search", e.target.value)}
          className="flex-1 min-w-[200px] rounded-md border border-slate-300 bg-white px-3 py-1.5 text-sm placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
        />
        <div className="flex items-center gap-1.5">
          <span className="text-xs uppercase tracking-wide text-slate-500">Verdict</span>
          <button
            onClick={() => setFilter("verdict", null)}
            className={`rounded-md px-2.5 py-1 text-xs ${filters.verdict === null ? "bg-slate-800 text-white" : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`}
          >
            All ({ideas.length})
          </button>
          {VERDICTS.map((v) => {
            const c = VERDICT_COLORS[v];
            const count = ideas.filter((i) => i.verdict === v).length;
            const active = filters.verdict === v;
            return (
              <button
                key={v}
                onClick={() => setFilter("verdict", active ? null : v)}
                className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs ${active ? "bg-slate-800 text-white" : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                {c.label} ({count})
              </button>
            );
          })}
        </div>
        {(filters.search || filters.verdict || filters.ministry) && (
          <button onClick={clearFilters} className="rounded-md px-2.5 py-1 text-xs text-blue-600 hover:text-blue-700">
            Clear
          </button>
        )}
        <div className="ml-auto text-xs text-slate-500">{stats.promote} promote · {stats.park} park · {stats.kill} kill</div>
      </div>

      <div className="space-y-6">
        {ministriesWithIdeas.map((m) => {
          const list = byMinistry.get(m.key);
          if (!list || list.length === 0) return null;
          return (
            <section key={m.key} className="space-y-3">
              <header className="flex items-baseline justify-between gap-3 border-b border-slate-200 pb-1.5">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">{m.label}</h2>
                  <p className="text-xs text-slate-500">{m.greek}</p>
                </div>
                <div className="text-xs text-slate-500">{list.length} {list.length === 1 ? "idea" : "ideas"}</div>
              </header>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {list.map((idea) => (
                  <IdeaCardCompact key={idea.id} idea={idea} onClick={() => onSelectIdea(idea)} />
                ))}
              </div>
            </section>
          );
        })}
        {ministriesWithIdeas.length === 0 && (
          <div className="rounded-lg border border-dashed border-slate-300 px-6 py-12 text-center text-sm text-slate-500">
            No ideas match the current filter.
          </div>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: number | string; accent?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`text-lg font-semibold ${accent ?? "text-slate-900"}`}>{value}</div>
    </div>
  );
}

function IdeaCardCompact({ idea, onClick }: { idea: GovIdea; onClick: () => void }) {
  const c = VERDICT_COLORS[idea.verdict];
  const composite = idea.rubric.composite.toFixed(2);
  return (
    <button
      onClick={onClick}
      className="group flex h-full flex-col gap-2 rounded-lg border border-slate-200 bg-white p-4 text-left transition-colors hover:border-slate-400 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="line-clamp-2 text-sm font-semibold text-slate-900 group-hover:text-slate-700">{idea.title}</h3>
        <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${c.bg} ${c.text}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
          {c.label}
        </span>
      </div>
      <p className="line-clamp-3 text-xs text-slate-600">{idea.oneLiner}</p>
      <div className="flex flex-wrap items-center gap-1.5">
        <QualificationBadge ideaId={idea.id} />
      </div>
      <div className="mt-auto flex flex-wrap items-center gap-2 pt-1 text-[10px]">
        <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-slate-600">composite {composite}</span>
        <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-slate-600">{PITCH_READY_LABEL[idea.pitchReady]}</span>
        {idea.tags.slice(0, 2).map((t) => (
          <span key={t} className="rounded-md bg-blue-50 px-1.5 py-0.5 text-blue-700">{t}</span>
        ))}
      </div>
    </button>
  );
}
