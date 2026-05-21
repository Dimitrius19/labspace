import { useEffect, useState } from "react";
import { hasMemoPack, loadMemoPack } from "../lib/artifacts";
import { Markdown } from "../lib/markdown";

export function MemoPackPanel({ ideaId }: { ideaId: string }) {
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const available = hasMemoPack(ideaId);

  useEffect(() => {
    if (!open || !available || content !== null) return;
    setLoading(true);
    loadMemoPack(ideaId).then((md) => {
      setContent(md);
      setLoading(false);
    });
  }, [open, available, ideaId, content]);

  if (!available) {
    return (
      <section className="rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3">
        <div className="text-xs font-medium uppercase tracking-wide text-slate-500">Memo pack</div>
        <p className="mt-1 text-xs text-slate-500">
          Business plan, pitch deck and GTM plan not yet generated for this idea. Re-run the artifact-generation pipeline to draft them.
        </p>
      </section>
    );
  }

  return (
    <section className="rounded-lg border border-slate-200 bg-white">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-t-lg border-b border-slate-200 bg-emerald-50 px-4 py-2.5 text-left hover:bg-emerald-100"
      >
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-emerald-200 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
            Memo pack
          </span>
          <span className="text-sm font-medium text-emerald-900">Business plan · Pitch deck · GTM plan</span>
        </div>
        <span className="text-xs text-emerald-700">{open ? "Hide ▴" : "Show ▾"}</span>
      </button>

      {open && (
        <div className="px-5 py-4">
          {loading && <div className="py-4 text-center text-xs text-slate-500">Loading memo pack…</div>}
          {!loading && content && (
            <article className="prose prose-sm max-w-none">
              <Markdown source={content} />
            </article>
          )}
          {!loading && !content && (
            <div className="py-4 text-center text-xs text-rose-500">Failed to load memo pack.</div>
          )}
        </div>
      )}
    </section>
  );
}
