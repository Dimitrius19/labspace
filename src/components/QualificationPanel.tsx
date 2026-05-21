import { qualificationFor, QUALIFICATION_AXES, QUALIFICATION_COLORS } from "../lib/qualifications";

export function QualificationBadge({ ideaId }: { ideaId: string }) {
  const q = qualificationFor(ideaId);
  if (!q) return null;
  const c = QUALIFICATION_COLORS[q.qualification];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.bg} ${c.text} ring-1 ${c.ring}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
      {c.label} · {q.compositeNew.toFixed(2)}
    </span>
  );
}

export function QualificationPanel({ ideaId }: { ideaId: string }) {
  const q = qualificationFor(ideaId);
  if (!q) {
    return (
      <section className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3">
        <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Qualification</div>
        <p className="mt-1 text-xs text-slate-500">
          This idea has not been put through the hostile qualification second-pass yet.
        </p>
      </section>
    );
  }

  const c = QUALIFICATION_COLORS[q.qualification];

  return (
    <section className={`rounded-lg border bg-white ring-1 ${c.ring}`}>
      <header className={`flex flex-wrap items-center gap-3 border-b border-slate-200 px-4 py-2.5 ${c.bg}`}>
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold ${c.text}`}>
          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
          {c.label}
        </span>
        <span className="text-xs font-medium text-slate-700">
          New composite {q.compositeNew.toFixed(2)} · was {q.originalComposite.toFixed(2)}
        </span>
        <span className="ml-auto text-[10px] uppercase tracking-wide text-slate-500">Hostile second-pass</span>
      </header>

      <div className="space-y-3 px-4 py-3">
        <p className="text-sm text-slate-800">{q.headline}</p>

        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 md:grid-cols-3">
          {QUALIFICATION_AXES.map((axis) => {
            const v = q.axes[axis.key];
            return (
              <div key={axis.key} className="flex items-center gap-2 text-xs">
                <span className="flex-1 text-slate-600" title={axis.tooltip}>{axis.label}</span>
                <span className="font-mono text-slate-900">{v}/5</span>
                <div className="h-1.5 w-12 overflow-hidden rounded bg-slate-200">
                  <div className={`h-full ${v >= 4 ? "bg-emerald-500" : v >= 3 ? "bg-amber-500" : "bg-rose-500"}`} style={{ width: `${(v / 5) * 100}%` }} />
                </div>
              </div>
            );
          })}
        </div>

        {q.blockers.length > 0 && (
          <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
            <div className="text-[10px] font-medium uppercase tracking-wide text-slate-500">Blockers</div>
            <ul className="mt-1 space-y-1 text-xs text-slate-700">
              {q.blockers.map((b, i) => <li key={i} className="flex gap-1.5"><span className="text-slate-400">·</span><span>{b}</span></li>)}
            </ul>
          </div>
        )}

        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2">
          <div className="text-[10px] font-medium uppercase tracking-wide text-emerald-700">Next 30 days</div>
          <p className="mt-0.5 text-xs leading-relaxed text-slate-700">{q.next30days}</p>
        </div>

        {q.evidenceLinks.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            <span className="text-slate-500">Evidence:</span>
            {q.evidenceLinks.map((url, i) => (
              <a key={i} href={url} target="_blank" rel="noreferrer noopener" className="rounded-md bg-blue-50 px-1.5 py-0.5 text-blue-700 hover:bg-blue-100">
                source {i + 1}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
