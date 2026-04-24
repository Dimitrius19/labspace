import { useEffect, useState, type ReactNode } from "react";
import { useVentures } from "../hooks/useVentures";
import type { LaunchTask, VentureStage, Health } from "../types";
import {
  VENTURE_STAGES,
  HEALTH_COLORS,
  TASK_CATEGORIES,
} from "../types";
import {
  taskProgress,
  milestoneProgress,
  tasksByCategory,
  daysUntil,
  formatDate,
  formatDaysUntil,
} from "../lib/ventureUtils";
import { ProgressRing } from "./ProgressRing";

type Tab = "overview" | "checklist" | "milestones" | "notes";

const ACCENT_RING: Record<string, string> = {
  blue: "#3b82f6",
  cyan: "#06b6d4",
  amber: "#f59e0b",
  violet: "#8b5cf6",
  emerald: "#10b981",
};

const PRIORITY_STYLES: Record<LaunchTask["priority"], string> = {
  p0: "bg-rose-50 text-rose-700",
  p1: "bg-amber-50 text-amber-700",
  p2: "bg-slate-100 text-slate-600",
};

export function VentureDetail({
  ventureId,
  onClose,
}: {
  ventureId: string;
  onClose: () => void;
}) {
  const {
    getVenture,
    toggleTask,
    toggleMilestone,
    updateStage,
    updateHealth,
    updateLaunchTarget,
    updateNextAction,
    updateNotes,
    resetVenture,
  } = useVentures();
  const venture = getVenture(ventureId);
  const [tab, setTab] = useState<Tab>("overview");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!venture) return null;

  const tp = taskProgress(venture);
  const mp = milestoneProgress(venture);
  const categories = tasksByCategory(venture);
  const ringColor = ACCENT_RING[venture.accent] ?? "#3b82f6";
  const health = HEALTH_COLORS[venture.health];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/60 p-6 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative mt-8 flex max-h-[calc(100vh-4rem)] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div className="flex items-start gap-4">
            <ProgressRing pct={tp.pct} size={72} color={ringColor} label="launch" />
            <div className="min-w-0">
              <h2 className="text-xl font-bold text-slate-900">{venture.name}</h2>
              <p className="mt-1 text-sm text-slate-500">{venture.tagline}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <a
                  href={venture.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 hover:bg-slate-200"
                >
                  repo ↗
                </a>
                <span className={`inline-flex items-center gap-1 rounded-full ${health.bg} px-2.5 py-0.5 text-[11px] font-medium ${health.text}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${health.dot}`} />
                  {health.label}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] text-slate-600">
                  kicked off {formatDate(venture.kickoffDate)}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <nav className="flex gap-1 border-b border-slate-200 px-6">
          {(
            [
              ["overview", "Overview"],
              ["checklist", `Launch checklist (${tp.done}/${tp.total})`],
              ["milestones", `Milestones (${mp.done}/${mp.total})`],
              ["notes", "Notes"],
            ] as [Tab, string][]
          ).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`relative px-3 py-2.5 text-sm transition-colors ${
                tab === key
                  ? "font-medium text-slate-900"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {label}
              {tab === key && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-slate-900" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex-1 overflow-y-auto p-6">
          {tab === "overview" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <Field label="Stage">
                  <select
                    value={venture.stage}
                    onChange={(e) => updateStage(venture.id, e.target.value as VentureStage)}
                    className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    {VENTURE_STAGES.map((s) => (
                      <option key={s.key} value={s.key}>{s.label}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Health">
                  <select
                    value={venture.health}
                    onChange={(e) => updateHealth(venture.id, e.target.value as Health)}
                    className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  >
                    <option value="on-track">On track</option>
                    <option value="at-risk">At risk</option>
                    <option value="blocked">Blocked</option>
                  </select>
                </Field>
                <Field label={`Launch target (${formatDaysUntil(venture.launchTarget)})`}>
                  <input
                    type="date"
                    value={venture.launchTarget}
                    onChange={(e) => updateLaunchTarget(venture.id, e.target.value)}
                    className="w-full rounded-md border border-slate-200 px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </Field>
              </div>

              <Field label="Next action">
                <input
                  type="text"
                  value={venture.nextAction}
                  onChange={(e) => updateNextAction(venture.id, e.target.value)}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </Field>

              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">About</h4>
                <p className="text-sm leading-relaxed text-slate-700">{venture.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Tech stack</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {venture.techStack.map((t) => (
                      <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Team</h4>
                  <ul className="space-y-1 text-sm">
                    {venture.team.map((m) => (
                      <li key={m.name + m.role} className="flex items-center justify-between">
                        <span className="text-slate-700">{m.name}</span>
                        <span className="text-xs text-slate-500">{m.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">Top risks</h4>
                <ul className="list-disc space-y-1 pl-5 text-sm text-slate-700">
                  {venture.risks.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  if (confirm("Reset all local edits for this venture?")) resetVenture(venture.id);
                }}
                className="text-xs text-slate-400 hover:text-rose-600"
              >
                Reset local edits
              </button>
            </div>
          )}

          {tab === "checklist" && (
            <div className="space-y-6">
              {categories.map((group) => {
                const catMeta = TASK_CATEGORIES.find((c) => c.key === group.category);
                return (
                  <section key={group.category}>
                    <div className="mb-2 flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-slate-800">{catMeta?.label}</h4>
                      <span className="text-[11px] text-slate-500">
                        {group.done} / {group.total}
                      </span>
                    </div>
                    <ul className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
                      {group.tasks.map((t) => (
                        <li key={t.id}>
                          <button
                            type="button"
                            onClick={() => toggleTask(venture.id, t.id)}
                            className="flex w-full items-start gap-3 px-3 py-2.5 text-left transition-colors hover:bg-slate-50"
                          >
                            <input
                              type="checkbox"
                              checked={t.done}
                              readOnly
                              tabIndex={-1}
                              className="pointer-events-none mt-1 h-4 w-4 rounded border-slate-300 text-blue-600"
                            />
                            <div className="flex-1">
                              <div className={`text-sm ${t.done ? "text-slate-400 line-through" : "text-slate-800"}`}>
                                {t.title}
                              </div>
                            </div>
                            <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${PRIORITY_STYLES[t.priority]}`}>
                              {t.priority}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          )}

          {tab === "milestones" && (
            <div className="space-y-3">
              {venture.milestones.map((m) => {
                const d = daysUntil(m.targetDate);
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggleMilestone(venture.id, m.id)}
                    className={`flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left transition-colors hover:bg-slate-50 ${
                      m.done ? "border-emerald-200 bg-emerald-50/40" : "border-slate-200 bg-white"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={m.done}
                      readOnly
                      tabIndex={-1}
                      className="pointer-events-none mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600"
                    />
                    <div className="flex-1">
                      <div className={`text-sm font-medium ${m.done ? "text-slate-500 line-through" : "text-slate-900"}`}>
                        {m.title}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        target: {formatDate(m.targetDate)}
                        {!m.done && (
                          <span className={`ml-2 ${d < 0 ? "text-rose-600" : d < 30 ? "text-amber-600" : "text-slate-500"}`}>
                            {formatDaysUntil(m.targetDate)}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {tab === "notes" && (
            <div>
              <textarea
                value={venture.notes}
                onChange={(e) => updateNotes(venture.id, e.target.value)}
                placeholder="Private notes — strategy, meeting recaps, open questions…"
                className="h-[320px] w-full resize-none rounded-lg border border-slate-200 p-4 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
              <p className="mt-2 text-[11px] text-slate-400">Saved locally in your browser.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-medium uppercase tracking-wide text-slate-500">{label}</span>
      {children}
    </label>
  );
}
