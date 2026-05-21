import { useMemo, useState } from "react";
import { allQualifications, qualificationStats, QUALIFICATION_COLORS, type IdeaQualification } from "../lib/qualifications";
import { governmentIdeas } from "../data/governmentIdeas";
import { gammaUrlFor } from "../data/gammaPresentations";
import { hasMemoPack } from "../lib/artifacts";
import { financialUrlFor, financialDownloadFilename } from "../lib/financials";
import { MINISTRIES, type GovIdea, type MinistryKey } from "../types";

type Filter = "pass" | "all" | "actionable"; // pass-only | everything | pass+conditional

export function QualifiedShortlist({ onSelectIdea }: { onSelectIdea: (idea: GovIdea) => void }) {
  const [filter, setFilter] = useState<Filter>("pass");
  const [open, setOpen] = useState(true);

  const stats = qualificationStats();
  const ministries = allQualifications();
  const ideaById = useMemo(() => new Map(governmentIdeas.map((i) => [i.id, i])), []);

  if (ministries.length === 0) {
    return null;
  }

  const rows = useMemo(() => {
    const out: { ministryKey: MinistryKey; ministryLabel: string; ministryGreek: string; q: IdeaQualification; idea: GovIdea | undefined }[] = [];
    for (const m of ministries) {
      const meta = MINISTRIES.find((x) => x.key === (m.ministry as MinistryKey));
      for (const q of m.ideas) {
        if (filter === "pass" && q.qualification !== "pass") continue;
        if (filter === "actionable" && q.qualification === "fail") continue;
        out.push({
          ministryKey: m.ministry as MinistryKey,
          ministryLabel: meta?.label ?? m.ministry,
          ministryGreek: meta?.greek ?? "",
          q,
          idea: ideaById.get(q.ideaId),
        });
      }
    }
    return out.sort((a, b) => b.q.compositeNew - a.q.compositeNew);
  }, [ministries, ideaById, filter]);

  return (
    <section className="rounded-xl border border-emerald-300 bg-gradient-to-br from-emerald-50 via-white to-emerald-50 shadow-sm">
      <header className="flex flex-wrap items-center gap-3 border-b border-emerald-200 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">★</span>
          <div>
            <h2 className="text-base font-semibold text-slate-900">Qualified Shortlist</h2>
            <p className="text-[11px] text-slate-600">
              Hostile second-pass survivors — {stats.pass} pass · {stats.conditional} conditional · {stats.fail} fail across {stats.ministries}/21 ministries
            </p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          {(["pass", "actionable", "all"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-md px-2 py-1 text-[11px] font-medium ${filter === f ? "bg-emerald-600 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"}`}
            >
              {f === "pass" ? "Pass only" : f === "actionable" ? "Pass + Conditional" : "All qualified"}
            </button>
          ))}
          <button onClick={() => setOpen((o) => !o)} className="ml-2 rounded-md px-2 py-1 text-[11px] text-emerald-700 hover:text-emerald-900">
            {open ? "Hide ▴" : "Show ▾"}
          </button>
        </div>
      </header>

      {open && (
        <div className="px-3 py-3">
          <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-[10px] uppercase tracking-wider text-slate-500">
                <tr>
                  <th className="px-3 py-2 text-left font-medium">Rank</th>
                  <th className="px-3 py-2 text-left font-medium">Idea</th>
                  <th className="px-3 py-2 text-left font-medium">Ministry</th>
                  <th className="px-3 py-2 text-left font-medium">Verdict</th>
                  <th className="px-3 py-2 text-right font-medium">New</th>
                  <th className="px-3 py-2 text-right font-medium">Was</th>
                  <th className="px-3 py-2 text-center font-medium">Pack</th>
                  <th className="px-3 py-2 text-center font-medium">Deck</th>
                  <th className="px-3 py-2 text-center font-medium">Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r, i) => {
                  const c = QUALIFICATION_COLORS[r.q.qualification];
                  const memo = hasMemoPack(r.q.ideaId);
                  const gamma = gammaUrlFor(r.q.ideaId);
                  const xlsx = financialUrlFor(r.q.ideaId);
                  return (
                    <tr key={r.q.ideaId} className="hover:bg-slate-50">
                      <td className="px-3 py-2 align-top font-mono text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</td>
                      <td className="px-3 py-2 align-top">
                        <button
                          onClick={() => r.idea && onSelectIdea(r.idea)}
                          className="text-left text-sm font-medium text-slate-900 hover:text-violet-700 hover:underline"
                          title={r.q.headline}
                        >
                          {r.idea?.title ?? r.q.ideaId}
                        </button>
                        <div className="mt-0.5 line-clamp-1 text-[11px] text-slate-500">{r.q.headline}</div>
                      </td>
                      <td className="px-3 py-2 align-top text-[11px] text-slate-600">
                        <div>{r.ministryLabel}</div>
                        <div className="text-slate-400">{r.ministryGreek}</div>
                      </td>
                      <td className="px-3 py-2 align-top">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.bg} ${c.text}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                          {c.label.replace("Qualified · ", "")}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-right align-top font-mono text-sm font-semibold text-slate-900">{r.q.compositeNew.toFixed(2)}</td>
                      <td className="px-3 py-2 text-right align-top font-mono text-xs text-slate-400">{r.q.originalComposite.toFixed(2)}</td>
                      <td className="px-3 py-2 text-center align-top">
                        {memo ? <span title="Memo pack ready" className="text-emerald-600">●</span> : <span className="text-slate-300">○</span>}
                      </td>
                      <td className="px-3 py-2 text-center align-top">
                        {gamma ? (
                          <a href={gamma} target="_blank" rel="noreferrer noopener" title="Open Gamma deck" className="text-violet-600 hover:text-violet-800">●</a>
                        ) : (
                          <span className="text-slate-300">○</span>
                        )}
                      </td>
                      <td className="px-3 py-2 text-center align-top">
                        {xlsx ? (
                          <a href={xlsx} download={financialDownloadFilename(r.q.ideaId)} title="Download Excel financial model" className="text-emerald-600 hover:text-emerald-800">●</a>
                        ) : (
                          <span className="text-slate-300">○</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-3 px-1 text-[10px] text-slate-500">
            <span className="text-emerald-600">● Memo pack</span>
            <span className="text-violet-600">● Gamma deck</span>
            <span className="text-emerald-700">● Financial model (.xlsx)</span>
            <span>Click any idea to open the full memo + qualification panel</span>
          </div>
        </div>
      )}
    </section>
  );
}
