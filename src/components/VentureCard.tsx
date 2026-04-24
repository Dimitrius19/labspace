import type { Venture } from "../types";
import { HEALTH_COLORS, VENTURE_STAGES } from "../types";
import {
  taskProgress,
  milestoneProgress,
  blockingTasks,
  daysUntil,
  formatDate,
  nextMilestone,
} from "../lib/ventureUtils";
import { ProgressRing } from "./ProgressRing";

const ACCENT_RING: Record<string, string> = {
  blue: "#3b82f6",
  cyan: "#06b6d4",
  amber: "#f59e0b",
  violet: "#8b5cf6",
  emerald: "#10b981",
};

const ACCENT_BAR: Record<string, string> = {
  blue: "bg-blue-500",
  cyan: "bg-cyan-500",
  amber: "bg-amber-500",
  violet: "bg-violet-500",
  emerald: "bg-emerald-500",
};

export function VentureCard({
  venture,
  onClick,
}: {
  venture: Venture;
  onClick: () => void;
}) {
  const tp = taskProgress(venture);
  const mp = milestoneProgress(venture);
  const blockers = blockingTasks(venture);
  const days = daysUntil(venture.launchTarget);
  const nm = nextMilestone(venture);
  const stage = VENTURE_STAGES.find((s) => s.key === venture.stage);
  const health = HEALTH_COLORS[venture.health];
  const ringColor = ACCENT_RING[venture.accent] ?? "#3b82f6";

  return (
    <button
      onClick={onClick}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className={`h-1.5 w-full ${ACCENT_BAR[venture.accent] ?? "bg-blue-500"}`} />

      <div className="flex flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-lg font-bold text-slate-900">{venture.name}</h3>
              <span className={`inline-flex items-center gap-1 rounded-full ${health.bg} px-2 py-0.5 text-[10px] font-medium ${health.text}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${health.dot}`} />
                {health.label}
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">{venture.tagline}</p>
          </div>
          <ProgressRing pct={tp.pct} size={64} color={ringColor} label="launch" />
        </div>

        <div className="grid grid-cols-3 gap-2 rounded-lg bg-slate-50 p-3">
          <div>
            <div className="text-[10px] uppercase tracking-wide text-slate-500">Stage</div>
            <div className="mt-0.5 text-xs font-semibold text-slate-900">
              {stage?.label ?? venture.stage}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-slate-500">Launch</div>
            <div className="mt-0.5 text-xs font-semibold text-slate-900">
              {formatDate(venture.launchTarget)}
            </div>
            <div className={`text-[10px] ${days < 0 ? "text-rose-600" : days < 60 ? "text-amber-600" : "text-slate-500"}`}>
              {days < 0 ? `${Math.abs(days)}d overdue` : `in ${days}d`}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wide text-slate-500">Blockers</div>
            <div className={`mt-0.5 text-xs font-semibold ${blockers.length > 0 ? "text-rose-600" : "text-emerald-600"}`}>
              {blockers.length} P0
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div>
            <div className="mb-1 flex items-center justify-between text-[11px] text-slate-500">
              <span>Tasks</span>
              <span>{tp.done} / {tp.total}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full ${ACCENT_BAR[venture.accent] ?? "bg-blue-500"}`}
                style={{ width: `${tp.pct}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-[11px] text-slate-500">
              <span>Milestones</span>
              <span>{mp.done} / {mp.total}</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-slate-400"
                style={{ width: `${mp.pct}%` }}
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 p-3">
          <div className="text-[10px] uppercase tracking-wide text-slate-500">Next action</div>
          <div className="mt-1 text-xs font-medium text-slate-800">{venture.nextAction}</div>
          {nm && (
            <div className="mt-2 border-t border-slate-100 pt-2 text-[11px] text-slate-500">
              Next milestone: <span className="font-medium text-slate-700">{nm.title}</span> · {formatDate(nm.targetDate)}
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
