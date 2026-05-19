import { useEffect, useState } from "react";
import { useProgram, applicantComposite, type ApplicantStage, type ApplicantRole, type ApplicantScore } from "../../hooks/useProgram";

const SCORE_DIMS: { key: keyof ApplicantScore; label: string; help: string }[] = [
  { key: "technical", label: "Technical / domain depth", help: "CV signal, breadth, depth of relevant work" },
  { key: "motivation", label: "Motivation quality", help: "200-word answer quality, fit to thesis area" },
  { key: "commitment", label: "Time commitment realism", help: "8-12 hrs/week feasibility given other load" },
  { key: "diversity", label: "Diversity contribution", help: "Uni mix, role mix, gender mix, background variety" },
];

const STAGES: { key: ApplicantStage; label: string }[] = [
  { key: "applied", label: "Applied" },
  { key: "screened", label: "Screened" },
  { key: "accepted", label: "Accepted" },
  { key: "team-formed", label: "Team formed" },
  { key: "midpoint", label: "Midpoint" },
  { key: "demo-day", label: "Demo Day" },
];

const ROLES: ApplicantRole[] = ["hacker", "hustler", "designer", "domain"];

export function ApplicantDetailModal({ applicantId, onClose }: { applicantId: string; onClose: () => void }) {
  const { overrides, setApplicantStage, setApplicantNote, setApplicantScore, removeApplicant } = useProgram();
  const applicant = overrides.applicants.find((a) => a.id === applicantId);
  const teamWithMember = (overrides.teams ?? []).find((t) => t.memberIds.includes(applicantId));
  const score = overrides.applicantScores?.[applicantId];
  const [draft, setDraft] = useState<string>("");

  useEffect(() => {
    setDraft(overrides.applicantNotes[applicantId] ?? "");
  }, [applicantId, overrides.applicantNotes]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  if (!applicant) return null;

  const saveNote = () => {
    setApplicantNote(applicantId, draft);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/60 p-6 backdrop-blur-sm" onClick={onClose}>
      <div
        className="relative mt-12 flex max-h-[calc(100vh-6rem)] w-full max-w-xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-slate-900">{applicant.name}</h2>
            <p className="mt-0.5 text-sm text-slate-500">{applicant.institution}</p>
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

        <div className="flex-1 space-y-6 overflow-y-auto px-6 py-5">
          <section>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Role</div>
            <div className="mt-1 flex gap-1">
              {ROLES.map((r) => (
                <span
                  key={r}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider ${
                    applicant.role === r ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {r}
                </span>
              ))}
            </div>
          </section>

          <section>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Funnel stage</div>
            <div className="mt-2 flex flex-wrap gap-1">
              {STAGES.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setApplicantStage(applicant.id, s.key)}
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                    applicant.stage === s.key
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
            {teamWithMember && (
              <div className="mt-2 text-[11px] text-violet-700">Assigned to team: <span className="font-medium">{teamWithMember.name}</span></div>
            )}
          </section>

          <section>
            <div className="flex items-baseline justify-between">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Scoring rubric</div>
              {score && (
                <div className="text-[11px] text-slate-500">
                  Composite: <span className="font-bold text-slate-900">{applicantComposite(score).toFixed(2)}</span> / 5
                </div>
              )}
            </div>
            <div className="mt-2 space-y-2">
              {SCORE_DIMS.map((dim) => {
                const val = score?.[dim.key] ?? 0;
                return (
                  <div key={dim.key} className="flex items-center gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-medium text-slate-700">{dim.label}</div>
                      <div className="text-[10px] text-slate-400">{dim.help}</div>
                    </div>
                    <div className="flex flex-shrink-0 gap-0.5">
                      {[0, 1, 2, 3, 4, 5].map((n) => (
                        <button
                          key={n}
                          onClick={() => setApplicantScore(applicantId, { [dim.key]: n })}
                          className={`h-6 w-6 rounded text-[11px] font-semibold transition-colors ${
                            val === n
                              ? "bg-slate-900 text-white"
                              : val >= n && n > 0
                              ? "bg-violet-100 text-violet-700"
                              : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                          }`}
                          aria-label={`Set ${dim.label} to ${n}`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section>
            <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Notes</div>
            <p className="mt-0.5 text-[11px] text-slate-400">
              Interview observations, references, follow-ups.
            </p>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onBlur={saveNote}
              rows={8}
              placeholder="Strong portfolio. Interviewed Nov 12 — exceptional Go background, no React but very willing to learn. Referred by ThinkBiz NTUA chair."
              className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 font-mono text-xs"
            />
            <div className="mt-1 flex items-center justify-between text-[10px] text-slate-400">
              <span>Auto-saves on blur · also click "Save" to flush now.</span>
              <button
                onClick={saveNote}
                className="rounded bg-slate-900 px-2 py-1 text-[11px] font-medium text-white hover:bg-slate-800"
              >
                Save
              </button>
            </div>
          </section>
        </div>

        <footer className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-3">
          <button
            onClick={() => {
              if (window.confirm(`Remove ${applicant.name} from the funnel?`)) {
                removeApplicant(applicant.id);
                onClose();
              }
            }}
            className="text-xs text-rose-600 hover:text-rose-700"
          >
            Remove applicant
          </button>
          <button onClick={onClose} className="rounded bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800">
            Done
          </button>
        </footer>
      </div>
    </div>
  );
}
