import { lazy, Suspense, useState } from "react";
import { useProgram } from "../hooks/useProgram";
import type { ProgramPhaseStatus, ProgramTaskCategory, ProgramPriority } from "../data/programs";
import { formatDate, formatDaysUntil } from "../lib/ventureUtils";
import { programToIcs, downloadIcs } from "../lib/programIcs";

const OutreachTracker = lazy(() => import("./program/OutreachTracker").then((m) => ({ default: m.OutreachTracker })));
const BriefLibrary = lazy(() => import("./program/BriefLibrary").then((m) => ({ default: m.BriefLibrary })));
const ApplicantFunnel = lazy(() => import("./program/ApplicantFunnel").then((m) => ({ default: m.ApplicantFunnel })));
const MentorsRoster = lazy(() => import("./program/MentorsRoster").then((m) => ({ default: m.MentorsRoster })));
const TeamsBoard = lazy(() => import("./program/TeamsBoard").then((m) => ({ default: m.TeamsBoard })));
const JuryBoard = lazy(() => import("./program/JuryBoard").then((m) => ({ default: m.JuryBoard })));

type SubTab = "overview" | "outreach" | "briefs" | "funnel" | "mentors" | "teams" | "jury";

const PHASE_STATUS_STYLE: Record<ProgramPhaseStatus, { dot: string; chip: string }> = {
  upcoming: { dot: "bg-slate-300", chip: "bg-slate-100 text-slate-600" },
  active: { dot: "bg-emerald-500", chip: "bg-emerald-50 text-emerald-700" },
  complete: { dot: "bg-blue-500", chip: "bg-blue-50 text-blue-700" },
};

const PHASE_STATUS_OPTIONS: ProgramPhaseStatus[] = ["upcoming", "active", "complete"];

const CATEGORY_LABEL: Record<ProgramTaskCategory, string> = {
  product: "Product",
  engineering: "Engineering",
  design: "Design",
  legal: "Legal & Compliance",
  "go-to-market": "Go-to-Market",
  operations: "Operations",
  finance: "Finance",
};

const PRIORITY_STYLE: Record<ProgramPriority, string> = {
  p0: "bg-rose-50 text-rose-700",
  p1: "bg-amber-50 text-amber-700",
  p2: "bg-slate-100 text-slate-600",
};

export function TLifeOpenView() {
  const [tab, setTab] = useState<SubTab>("overview");
  const { program, overrides } = useProgram();

  const briefsSelected = overrides.selectedBriefIds.length;
  const applicantsTracked = overrides.applicants.length;
  const institutionsSigned = Object.values(overrides.outreach).filter((o) => o.status === "signed").length;
  const mentorsTracked = (overrides.mentors ?? []).length;
  const teamsTracked = (overrides.teams ?? []).length;
  const juryEligible = (overrides.teams ?? []).filter((t) => t.status === "demo-day-qualified" || t.status === "studio-offered").length;

  return (
    <div className="flex h-full flex-col">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-6xl px-8 pt-6">
          <div className="flex items-baseline gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-0.5 text-[11px] font-medium text-violet-700">
              Program
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              On track
            </span>
            <span className="text-[11px] text-slate-500">Stage: {program.stage}</span>
          </div>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">{program.name}</h1>
          <p className="mt-1 max-w-3xl text-sm text-slate-600">{program.tagline}</p>
          <nav className="mt-4 flex flex-wrap gap-1">
            <TabBtn label="Overview" active={tab === "overview"} onClick={() => setTab("overview")} />
            <TabBtn label="Outreach" badge={institutionsSigned > 0 ? `${institutionsSigned}/4` : undefined} active={tab === "outreach"} onClick={() => setTab("outreach")} />
            <TabBtn label="Briefs" badge={briefsSelected > 0 ? String(briefsSelected) : undefined} active={tab === "briefs"} onClick={() => setTab("briefs")} />
            <TabBtn label="Funnel" badge={applicantsTracked > 0 ? String(applicantsTracked) : undefined} active={tab === "funnel"} onClick={() => setTab("funnel")} />
            <TabBtn label="Mentors" badge={mentorsTracked > 0 ? String(mentorsTracked) : undefined} active={tab === "mentors"} onClick={() => setTab("mentors")} />
            <TabBtn label="Teams" badge={teamsTracked > 0 ? String(teamsTracked) : undefined} active={tab === "teams"} onClick={() => setTab("teams")} />
            <TabBtn label="Jury" badge={juryEligible > 0 ? String(juryEligible) : undefined} active={tab === "jury"} onClick={() => setTab("jury")} />
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-6xl flex-1 px-8 py-6">
        {tab === "overview" && <OverviewTab />}
        {tab === "outreach" && (
          <Suspense fallback={<TabFallback />}>
            <OutreachTracker />
          </Suspense>
        )}
        {tab === "briefs" && (
          <Suspense fallback={<TabFallback />}>
            <BriefLibrary />
          </Suspense>
        )}
        {tab === "funnel" && (
          <Suspense fallback={<TabFallback />}>
            <ApplicantFunnel />
          </Suspense>
        )}
        {tab === "mentors" && (
          <Suspense fallback={<TabFallback />}>
            <MentorsRoster />
          </Suspense>
        )}
        {tab === "teams" && (
          <Suspense fallback={<TabFallback />}>
            <TeamsBoard />
          </Suspense>
        )}
        {tab === "jury" && (
          <Suspense fallback={<TabFallback />}>
            <JuryBoard />
          </Suspense>
        )}
      </div>
    </div>
  );
}

function TabBtn({ label, badge, active, onClick }: { label: string; badge?: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`relative -mb-px flex items-center gap-1.5 border-b-2 px-3 py-2 text-sm transition-colors ${
        active
          ? "border-slate-900 font-semibold text-slate-900"
          : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700"
      }`}
    >
      {label}
      {badge && (
        <span className={`rounded-full px-1.5 py-0.5 text-[10px] font-medium ${active ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"}`}>
          {badge}
        </span>
      )}
    </button>
  );
}

function TabFallback() {
  return <div className="flex h-40 items-center justify-center text-sm text-slate-400">Loading…</div>;
}

function OverviewTab() {
  const { program, overrides, toggleTask, toggleMilestone, setPhaseStatus, toggleDecision, clearActivity, reset } = useProgram();

  const tasksByCategory = (Object.keys(CATEGORY_LABEL) as ProgramTaskCategory[])
    .map((cat) => ({ category: cat, tasks: program.tasks.filter((t) => t.category === cat) }))
    .filter((g) => g.tasks.length > 0);

  const p0Open = program.tasks.filter((t) => t.priority === "p0" && !t.done).length;
  const milestonesDone = program.milestones.filter((m) => m.done).length;
  const tasksDone = program.tasks.filter((t) => t.done).length;
  const totalTasks = program.tasks.length;
  const taskPct = totalTasks === 0 ? 0 : Math.round((tasksDone / totalTasks) * 100);

  // Live KPI calculations from state
  const liveCounts: Record<string, number> = {
    Applications: overrides.applicants.length,
    Accepted: overrides.applicants.filter((a) =>
      ["accepted", "team-formed", "midpoint", "demo-day"].includes(a.stage)
    ).length,
    "Teams at Demo Day": (overrides.teams ?? []).filter(
      (t) => t.status === "demo-day-qualified" || t.status === "studio-offered"
    ).length,
    "Studio offers": (overrides.teams ?? []).filter((t) => t.status === "studio-offered").length,
  };

  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-sm leading-relaxed text-slate-500">{program.description}</p>

      {/* Hero KPIs — now/target live */}
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {program.kpis.map((kpi) => {
          const live = liveCounts[kpi.label] ?? 0;
          return (
            <div key={kpi.label} className="rounded-xl border border-slate-200 bg-white p-4">
              <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{kpi.label}</div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className={`text-2xl font-bold ${live > 0 ? "text-slate-900" : "text-slate-400"}`}>{live}</span>
                <span className="text-xs text-slate-400">/ {kpi.target}</span>
              </div>
              <div className="text-[11px] text-slate-500">{kpi.unit}</div>
            </div>
          );
        })}
      </section>

      {/* Key dates strip + .ics export */}
      <section className="space-y-2">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <DateCard label="Kickoff" date={program.kickoffDate} accent="violet" />
          <DateCard label="Demo Day" date={program.demoDayDate} accent="rose" />
          <DateCard label="Studio cohort" date={program.cohortKickoffDate} accent="emerald" />
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              const ics = programToIcs(program);
              downloadIcs(`${program.slug}.ics`, ics);
            }}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300 hover:bg-slate-50"
            title="Download all phases + milestones as a calendar file"
          >
            📅 Export to calendar (.ics)
          </button>
        </div>
      </section>

      {/* Progress meter */}
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-baseline justify-between gap-2">
          <div>
            <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Operational progress</div>
            <div className="mt-0.5 text-base font-semibold text-slate-900">{tasksDone}/{totalTasks} tasks · {milestonesDone}/{program.milestones.length} milestones</div>
          </div>
          <span className="text-sm font-medium text-slate-700">{taskPct}%</span>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full bg-emerald-500 transition-all" style={{ width: `${taskPct}%` }} />
        </div>
      </section>

      {/* Next action callout */}
      <section className="rounded-xl border border-amber-200 bg-amber-50 p-4">
        <div className="text-[11px] font-medium uppercase tracking-wider text-amber-800">Next action</div>
        <p className="mt-1 text-sm text-amber-900">{program.nextAction}</p>
        <div className="mt-2 text-[11px] text-amber-700">
          {p0Open} P0 task{p0Open === 1 ? "" : "s"} open · {milestonesDone}/{program.milestones.length} milestones complete
        </div>
      </section>

      {/* Phase advancement nudge */}
      {(() => {
        const activePhases = program.phases.filter((p) => p.status === "active");
        const readyPhases = activePhases.filter((phase) => {
          const phaseTasks = program.tasks.filter((t) => t.phaseId === phase.id);
          const phaseMilestones = program.milestones.filter((m) => m.phaseId === phase.id);
          const tasksAllDone = phaseTasks.length > 0 && phaseTasks.every((t) => t.done);
          const milestonesAllDone = phaseMilestones.length === 0 || phaseMilestones.every((m) => m.done);
          return tasksAllDone && milestonesAllDone;
        });
        if (readyPhases.length === 0) return null;
        return (
          <section className="rounded-xl border border-emerald-300 bg-emerald-50 p-4">
            <div className="text-[11px] font-medium uppercase tracking-wider text-emerald-800">Ready to advance</div>
            {readyPhases.map((phase) => (
              <div key={phase.id} className="mt-2 flex items-center justify-between gap-3">
                <div className="text-sm text-emerald-900">
                  Phase {phase.number} <span className="font-semibold">{phase.title}</span> — all tasks and milestones complete.
                </div>
                <button
                  onClick={() => setPhaseStatus(phase.id, "complete")}
                  className="rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white hover:bg-emerald-700"
                >
                  Mark complete →
                </button>
              </div>
            ))}
          </section>
        );
      })()}

      {/* Phases — clickable status */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Phases</h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {program.phases.map((phase, idx) => {
            const style = PHASE_STATUS_STYLE[phase.status];
            return (
              <div
                key={phase.id}
                className={`flex items-start gap-4 px-5 py-4 ${idx !== program.phases.length - 1 ? "border-b border-slate-100" : ""}`}
              >
                <span className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${style.dot} text-xs font-bold text-white`}>
                  {phase.number}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-sm font-semibold text-slate-900">{phase.title}</h3>
                    <span className="text-[11px] text-slate-500">· {phase.window}</span>
                    <span className="text-[11px] text-slate-400">· owner: {phase.owner}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600">{phase.summary}</p>
                </div>
                <div className="flex flex-shrink-0 gap-1">
                  {PHASE_STATUS_OPTIONS.map((opt) => {
                    const active = phase.status === opt;
                    const s = PHASE_STATUS_STYLE[opt];
                    return (
                      <button
                        key={opt}
                        onClick={() => setPhaseStatus(phase.id, opt)}
                        className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider transition-colors ${
                          active ? s.chip + " ring-1 ring-current/20" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Talent pools */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Talent pools (Autumn 2026)</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {program.talentPools.map((pool) => (
            <div key={pool.institutionId} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900">{pool.shortName}</h3>
                <span className="text-[11px] text-slate-400">{pool.geography}</span>
              </div>
              <div className="mt-0.5 text-[11px] text-slate-500">{pool.fullName}</div>

              <div className="mt-3">
                <div className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Departments</div>
                <ul className="mt-1 space-y-0.5">
                  {pool.departments.map((dept) => (
                    <li key={dept} className="text-xs text-slate-700">· {dept}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-3">
                <div className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Entry points</div>
                <ul className="mt-1 space-y-1">
                  {pool.entryPoints.map((ep) => (
                    <li key={ep.name} className="text-xs">
                      <span className={`font-medium ${ep.name === pool.primaryHub ? "text-violet-700" : "text-slate-900"}`}>{ep.name}</span>
                      {ep.name === pool.primaryHub && (
                        <span className="ml-1.5 rounded-full bg-violet-100 px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider text-violet-700">
                          primary hub
                        </span>
                      )}
                      <span className="ml-1 text-slate-500">— {ep.role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones — interactive */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Milestones</h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {program.milestones.map((m, idx) => (
            <button
              key={m.id}
              onClick={() => toggleMilestone(m.id)}
              className={`flex w-full items-center gap-4 px-5 py-3 text-left transition-colors hover:bg-slate-50 ${idx !== program.milestones.length - 1 ? "border-b border-slate-100" : ""}`}
            >
              <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 ${m.done ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white"}`}>
                {m.done && (
                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <div className="min-w-0 flex-1">
                <div className={`text-sm font-medium ${m.done ? "text-slate-400 line-through" : "text-slate-900"}`}>{m.title}</div>
                <div className="text-[11px] text-slate-500">
                  Phase {program.phases.find((p) => p.id === m.phaseId)?.number} · {formatDate(m.targetDate)} ·{" "}
                  <span className="text-slate-400">{formatDaysUntil(m.targetDate)}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Tasks by category — interactive */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Tasks ({program.tasks.filter((t) => !t.done).length} open / {program.tasks.length} total)
        </h2>
        <div className="space-y-4">
          {tasksByCategory.map(({ category, tasks }) => {
            const openCount = tasks.filter((t) => !t.done).length;
            return (
              <div key={category} className="rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
                  <h3 className="text-sm font-semibold text-slate-900">{CATEGORY_LABEL[category]}</h3>
                  <span className="text-[11px] text-slate-500">{openCount} open / {tasks.length} total</span>
                </div>
                <ul>
                  {tasks.map((t, idx) => (
                    <li
                      key={t.id}
                      className={`flex items-center gap-3 px-5 py-2 ${idx !== tasks.length - 1 ? "border-b border-slate-50" : ""}`}
                    >
                      <button
                        onClick={() => toggleTask(t.id)}
                        className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border ${t.done ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white hover:border-slate-500"}`}
                        aria-label={t.done ? "Mark incomplete" : "Mark complete"}
                      >
                        {t.done && (
                          <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                      <span className={`text-xs font-medium uppercase tracking-wider ${PRIORITY_STYLE[t.priority]} rounded px-1.5 py-0.5`}>
                        {t.priority}
                      </span>
                      <span className={`flex-1 text-sm ${t.done ? "text-slate-400 line-through" : "text-slate-700"}`}>{t.title}</span>
                      <span className="text-[10px] text-slate-400">Phase {program.phases.find((p) => p.id === t.phaseId)?.number}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Risks */}
      <section className="rounded-xl border border-rose-200 bg-rose-50/40 p-5">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-rose-800">Risks</h2>
        <ul className="space-y-1.5">
          {program.risks.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-rose-900">
              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-rose-400" />
              {r}
            </li>
          ))}
        </ul>
      </section>

      {/* Open decisions — interactive lock */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Open decisions</h2>
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          {program.openDecisions.map((d, idx) => {
            const locked = overrides.decisionsLocked[d.id];
            return (
              <div
                key={d.id}
                className={`flex items-start gap-3 px-5 py-4 ${idx !== program.openDecisions.length - 1 ? "border-b border-slate-100" : ""} ${locked ? "bg-emerald-50/30" : ""}`}
              >
                <button
                  onClick={() => toggleDecision(d.id)}
                  className={`mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border ${locked ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white hover:border-slate-500"}`}
                  aria-label={locked ? "Unlock decision" : "Lock decision"}
                >
                  {locked && (
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <div className="min-w-0 flex-1">
                  <div className={`text-sm font-semibold ${locked ? "text-emerald-900" : "text-slate-900"}`}>{d.topic}</div>
                  <div className="mt-0.5 text-xs text-slate-600">→ {d.recommendation}</div>
                  <div className="mt-1 text-[11px] text-slate-400">Owner: {d.ownerNeeded}</div>
                </div>
                {locked && (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700">
                    locked
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Activity feed */}
      {(overrides.activity?.length ?? 0) > 0 && (
        <section>
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Recent activity</h2>
            <button onClick={clearActivity} className="text-[11px] text-slate-400 hover:text-slate-700">
              Clear
            </button>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            {(overrides.activity ?? []).slice(0, 20).map((entry, idx) => (
              <div
                key={entry.id}
                className={`flex items-baseline gap-3 px-5 py-2 ${idx !== Math.min(19, (overrides.activity?.length ?? 1) - 1) ? "border-b border-slate-50" : ""}`}
              >
                <span className="w-16 flex-shrink-0 text-[10px] text-slate-400">
                  {timeAgo(entry.at)}
                </span>
                <span className="text-xs text-slate-700">{entry.summary}</span>
                <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500">{entry.kind}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer: budget + team + reset */}
      <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Budget</div>
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-600">Event spend</span>
              <span className="font-semibold text-slate-900">{program.budget.event}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Studio cohort capital</span>
              <span className="font-semibold text-slate-900">{program.budget.cohortCapital}</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Team</div>
          <ul className="mt-2 space-y-1 text-sm">
            {program.team.map((m) => (
              <li key={m.role} className="flex justify-between">
                <span className="text-slate-600">{m.role}</span>
                <span className={`font-medium ${m.name === "TBD" ? "text-amber-600" : "text-slate-900"}`}>{m.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] text-slate-400">
        <span>Local changes persist in your browser only.</span>
        <button
          onClick={() => {
            if (window.confirm("Reset all program progress (tasks, milestones, outreach, briefs, applicants)?")) {
              reset();
            }
          }}
          className="rounded px-2 py-1 hover:bg-slate-100 hover:text-slate-700"
        >
          Reset overrides
        </button>
      </div>
    </div>
  );
}

function timeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const s = Math.round(diffMs / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.round(h / 24);
  return `${d}d ago`;
}

function DateCard({ label, date, accent }: { label: string; date: string; accent: "violet" | "rose" | "emerald" }) {
  const ringClass = {
    violet: "border-l-violet-500",
    rose: "border-l-rose-500",
    emerald: "border-l-emerald-500",
  }[accent];
  return (
    <div className={`rounded-xl border border-slate-200 border-l-4 ${ringClass} bg-white p-4`}>
      <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-900">{formatDate(date)}</div>
      <div className="text-[11px] text-slate-500">{formatDaysUntil(date)}</div>
    </div>
  );
}
