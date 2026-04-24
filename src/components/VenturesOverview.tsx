import { useVentures } from "../hooks/useVentures";
import { VentureCard } from "./VentureCard";
import { VentureDetail } from "./VentureDetail";
import { useState } from "react";
import { taskProgress, blockingTasks, daysUntil, formatDate } from "../lib/ventureUtils";
import { HEALTH_COLORS } from "../types";

export function VenturesOverview() {
  const { ventures } = useVentures();
  const [openId, setOpenId] = useState<string | null>(null);

  const totalTasks = ventures.reduce((n, v) => n + v.tasks.length, 0);
  const doneTasks = ventures.reduce((n, v) => n + v.tasks.filter((t) => t.done).length, 0);
  const overallPct = totalTasks === 0 ? 0 : Math.round((doneTasks / totalTasks) * 100);
  const totalBlockers = ventures.reduce((n, v) => n + blockingTasks(v).length, 0);

  const upcomingMilestones = ventures
    .flatMap((v) =>
      v.milestones
        .filter((m) => !m.done)
        .map((m) => ({ ...m, venture: v.name, accent: v.accent, ventureId: v.id }))
    )
    .sort((a, b) => a.targetDate.localeCompare(b.targetDate))
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Active Ventures</h1>
          <p className="mt-1 text-sm text-slate-500">
            Launch-readiness tracker for the three AI-enabled businesses in build.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <SummaryStat label="Ventures" value={ventures.length} />
          <SummaryStat label="Overall progress" value={`${overallPct}%`} accent="text-blue-600" />
          <SummaryStat label="P0 blockers" value={totalBlockers} accent={totalBlockers > 0 ? "text-rose-600" : "text-emerald-600"} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {ventures.map((v) => (
          <VentureCard key={v.id} venture={v} onClick={() => setOpenId(v.id)} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-2">
          <h3 className="mb-3 text-sm font-semibold text-slate-700">Upcoming milestones</h3>
          {upcomingMilestones.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">No upcoming milestones — nice.</div>
          ) : (
            <ul className="divide-y divide-slate-100">
              {upcomingMilestones.map((m) => {
                const d = daysUntil(m.targetDate);
                return (
                  <li key={m.id + m.ventureId} className="flex items-center justify-between py-2.5">
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-slate-800">{m.title}</div>
                      <div className="text-[11px] text-slate-500">{m.venture}</div>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <div className="text-xs text-slate-600">{formatDate(m.targetDate)}</div>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${d < 0 ? "bg-rose-50 text-rose-700" : d < 30 ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-600"}`}>
                        {d < 0 ? `${Math.abs(d)}d late` : d === 0 ? "today" : `${d}d`}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="mb-3 text-sm font-semibold text-slate-700">Portfolio health</h3>
          <ul className="space-y-3">
            {ventures.map((v) => {
              const { pct } = taskProgress(v);
              const h = HEALTH_COLORS[v.health];
              return (
                <li key={v.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${h.dot}`} />
                    <span className="text-sm text-slate-700">{v.name}</span>
                  </div>
                  <span className="text-xs font-semibold text-slate-900">{pct}%</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {openId && <VentureDetail ventureId={openId} onClose={() => setOpenId(null)} />}
    </div>
  );
}

function SummaryStat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string | number;
  accent?: string;
}) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-right shadow-sm">
      <div className="text-[10px] uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`text-lg font-bold ${accent ?? "text-slate-900"}`}>{value}</div>
    </div>
  );
}
