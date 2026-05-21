import { useEffect } from "react";
import { useGovIdeas } from "../hooks/useGovIdeas";
import { MemoPackPanel } from "./MemoPackPanel";
import { QualificationPanel } from "./QualificationPanel";
import { gammaUrlFor } from "../data/gammaPresentations";
import { financialUrlFor, financialDownloadFilename } from "../lib/financials";
import {
  GOV_RUBRIC_DIMENSIONS,
  MINISTRIES,
  PITCH_READY_LABEL,
  VERDICT_COLORS,
  type PitchReady,
  type Verdict,
} from "../types";

export function GovIdeaDetail({ ideaId, onClose }: { ideaId: string; onClose: () => void }) {
  const { ideas, setVerdict, setPitchReady, resetIdea, overrides } = useGovIdeas();
  const idea = ideas.find((i) => i.id === ideaId);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!idea) return null;

  const ministry = MINISTRIES.find((m) => m.key === idea.ministry);
  const c = VERDICT_COLORS[idea.verdict];
  const isOverridden = !!overrides[idea.id];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-900/50 p-4 backdrop-blur-sm md:p-8" onClick={onClose}>
      <div className="relative w-full max-w-4xl rounded-xl bg-white shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <header className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-xl border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-medium uppercase tracking-wide text-slate-500">{ministry?.label ?? idea.ministry}</span>
              <span className="text-xs text-slate-400">·</span>
              <span className="text-[10px] text-slate-500">{ministry?.greek}</span>
            </div>
            <h2 className="mt-1 text-xl font-bold text-slate-900">{idea.title}</h2>
            <p className="mt-1 text-sm text-slate-600">{idea.oneLiner}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <div className="space-y-6 px-6 py-5">
          {/* Verdict bar */}
          <div className="flex flex-wrap items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
            <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${c.bg} ${c.text}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
              {c.label}
            </span>
            <span className="rounded-md bg-white px-2 py-1 text-xs text-slate-600 border border-slate-200">composite {idea.rubric.composite.toFixed(2)}</span>
            <span className="rounded-md bg-white px-2 py-1 text-xs text-slate-600 border border-slate-200">{PITCH_READY_LABEL[idea.pitchReady]}</span>
            <div className="ml-auto flex flex-wrap items-center gap-1.5 text-xs">
              <span className="text-slate-500">Set verdict:</span>
              {(["promote", "park", "kill"] as Verdict[]).map((v) => {
                const cv = VERDICT_COLORS[v];
                const active = idea.verdict === v;
                return (
                  <button
                    key={v}
                    onClick={() => setVerdict(idea.id, v)}
                    className={`flex items-center gap-1 rounded-md px-2 py-1 ${active ? `${cv.bg} ${cv.text} ring-1 ring-current` : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${cv.dot}`} />
                    {cv.label}
                  </button>
                );
              })}
              <span className="ml-2 text-slate-500">Stage:</span>
              {(["concept", "memo", "demo", "pilot"] as PitchReady[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPitchReady(idea.id, p)}
                  className={`rounded-md px-2 py-1 ${idea.pitchReady === p ? "bg-slate-800 text-white" : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-100"}`}
                >
                  {PITCH_READY_LABEL[p]}
                </button>
              ))}
              {isOverridden && (
                <button onClick={() => resetIdea(idea.id)} className="ml-1 rounded-md px-2 py-1 text-slate-500 hover:text-slate-700">
                  reset
                </button>
              )}
            </div>
          </div>

          {/* Qualification — hostile second-pass verdict, with axes + blockers + 30-day action */}
          <QualificationPanel ideaId={idea.id} />

          {/* Memo pack — business plan, pitch deck, GTM (lazy-loaded markdown) */}
          <MemoPackPanel ideaId={idea.id} />

          {/* Investor artefacts — Gamma deck + financial model downloads */}
          {(() => {
            const gammaUrl = gammaUrlFor(idea.id);
            const xlsxUrl = financialUrlFor(idea.id);
            if (!gammaUrl && !xlsxUrl) return null;
            return (
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {gammaUrl && (
                  <a
                    href={gammaUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group flex items-center justify-between gap-3 rounded-lg border border-violet-200 bg-gradient-to-r from-violet-50 via-fuchsia-50 to-violet-50 px-4 py-3 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-600 text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Pitch deck</div>
                        <div className="text-[11px] text-slate-600">Gamma · Founder theme · opens in new tab</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">Open ↗</span>
                  </a>
                )}
                {xlsxUrl && (
                  <a
                    href={xlsxUrl}
                    download={financialDownloadFilename(idea.id)}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-emerald-200 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 px-4 py-3 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6h6v6M9 11V5h6v6m-9 6h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Financial model</div>
                        <div className="text-[11px] text-slate-600">5-yr Excel · 6 sheets · live formulas</div>
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white">.xlsx ↓</span>
                  </a>
                )}
              </div>
            );
          })()}

          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-2">
              <Section title="The problem">
                <p className="text-sm leading-relaxed text-slate-700">{idea.problem}</p>
              </Section>

              <Section title="What the agent does on Tuesday morning">
                <ol className="space-y-1.5 text-sm text-slate-700">
                  {idea.agentLoop.map((step, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-mono text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </Section>

              <Section title="User inside the ministry">
                <p className="text-sm leading-relaxed text-slate-700">{idea.userInsideMinistry}</p>
              </Section>

              <Section title="Blue ocean angle">
                <p className="text-sm leading-relaxed text-slate-700">{idea.blueOceanAngle}</p>
              </Section>

              <Section title="Greek context">
                <p className="text-sm leading-relaxed text-slate-700">{idea.greekContext}</p>
              </Section>

              <Section title="International precedents">
                <ul className="space-y-2 text-sm">
                  {idea.intlPrecedents.map((p, i) => (
                    <li key={i} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="text-xs font-semibold text-slate-900">{p.country}</span>
                        <span className="text-xs text-slate-500">·</span>
                        <span className="text-xs text-slate-700">{p.program}</span>
                        {p.year && (<><span className="text-xs text-slate-400">·</span><span className="text-xs text-slate-500">{p.year}</span></>)}
                      </div>
                      {p.ministry && <div className="mt-0.5 text-xs text-slate-500">{p.ministry}</div>}
                      {p.outcome && <div className="mt-1 text-xs text-slate-600">{p.outcome}</div>}
                      {p.url && <a href={p.url} target="_blank" rel="noreferrer noopener" className="mt-1 inline-block text-xs text-blue-600 hover:text-blue-800 hover:underline">{p.url}</a>}
                    </li>
                  ))}
                </ul>
              </Section>

              <Section title="Red team">
                <ul className="space-y-2 text-sm">
                  {idea.redTeam.map((r, i) => {
                    const sev = r.severity === "kill" ? "bg-rose-100 text-rose-800" : r.severity === "wound" ? "bg-amber-100 text-amber-800" : "bg-emerald-100 text-emerald-800";
                    return (
                      <li key={i} className="rounded-md border border-slate-200 bg-white px-3 py-2">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${sev}`}>{r.severity}</span>
                          <span className="text-xs text-slate-600">{r.axis}</span>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-slate-700">{r.note}</p>
                      </li>
                    );
                  })}
                </ul>
              </Section>

              <Section title="Buyer simulator">
                <div className="space-y-2">
                  <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2">
                    <div className="text-[10px] font-medium uppercase tracking-wide text-rose-700">First objection</div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700">{idea.buyerObjection}</p>
                  </div>
                  <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2">
                    <div className="text-[10px] font-medium uppercase tracking-wide text-emerald-700">Forward-to-minister hook</div>
                    <p className="mt-1 text-xs leading-relaxed text-slate-700">{idea.buyerHook}</p>
                  </div>
                </div>
              </Section>

              <Section title="Verdict rationale">
                <p className="text-sm leading-relaxed text-slate-700">{idea.verdictRationale}</p>
              </Section>
            </div>

            <aside className="space-y-5">
              <Section title="Rubric">
                <ul className="space-y-1.5">
                  {GOV_RUBRIC_DIMENSIONS.map((dim) => {
                    const val = idea.rubric[dim.key];
                    return (
                      <li key={dim.key} className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-slate-600">{dim.label}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-slate-900">{val}/5</span>
                          <div className="h-1.5 w-16 overflow-hidden rounded bg-slate-200">
                            <div className="h-full bg-slate-700" style={{ width: `${(val / 5) * 100}%` }} />
                          </div>
                        </div>
                      </li>
                    );
                  })}
                  <li className="mt-2 flex items-center justify-between gap-2 border-t border-slate-200 pt-2 text-xs">
                    <span className="font-medium text-slate-900">Composite</span>
                    <span className="font-mono font-semibold text-slate-900">{idea.rubric.composite.toFixed(2)}</span>
                  </li>
                </ul>
              </Section>

              <Section title="Champion">
                <p className="text-xs leading-relaxed text-slate-700">{idea.championProfile}</p>
              </Section>

              <Section title="Pilot budget">
                <p className="text-xs leading-relaxed text-slate-700">{idea.estimatedPilotBudget}</p>
              </Section>

              <Section title="Founder profile">
                <p className="text-xs leading-relaxed text-slate-700">{idea.founderProfile}</p>
              </Section>

              <Section title="Tags">
                <div className="flex flex-wrap gap-1.5">
                  {idea.tags.map((t) => (
                    <span key={t} className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-700">{t}</span>
                  ))}
                </div>
              </Section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</h3>
      {children}
    </section>
  );
}
