import type { SyncStatus } from "../hooks/useVentures";

const STATUS_STYLES: Record<SyncStatus, { bg: string; text: string; dot: string; label: string }> = {
  idle: { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-400", label: "Idle" },
  loading: { bg: "bg-blue-50", text: "text-blue-700", dot: "bg-blue-400 animate-pulse", label: "Syncing…" },
  synced: { bg: "bg-emerald-50", text: "text-emerald-700", dot: "bg-emerald-500", label: "Synced from git" },
  error: { bg: "bg-rose-50", text: "text-rose-700", dot: "bg-rose-500", label: "Sync error" },
  disabled: { bg: "bg-slate-100", text: "text-slate-600", dot: "bg-slate-400", label: "Local only (no /api/ventures)" },
};

function relativeTime(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.round(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.round(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.round(m / 60);
  return `${h}h ago`;
}

export function SyncBadge({
  status,
  error,
  lastFetched,
  onRefresh,
}: {
  status: SyncStatus;
  error: string | null;
  lastFetched: string | null;
  onRefresh: () => void;
}) {
  const s = STATUS_STYLES[status];
  return (
    <div className="inline-flex items-center gap-2">
      <span
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium ${s.bg} ${s.text}`}
        title={error ?? (lastFetched ? `Last fetched ${lastFetched}` : undefined)}
      >
        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
        {s.label}
        {status === "synced" && lastFetched && (
          <span className="ml-1 text-slate-500">· {relativeTime(lastFetched)}</span>
        )}
      </span>
      {(status === "synced" || status === "error") && (
        <button
          type="button"
          onClick={onRefresh}
          className="text-[11px] text-blue-600 hover:text-blue-700"
        >
          Refresh
        </button>
      )}
    </div>
  );
}
