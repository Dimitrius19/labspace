import type { CapitalLevel } from "../types";

const levelConfig: Record<CapitalLevel, { bg: string; text: string; label: string }> = {
  low: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Low Capital" },
  medium: { bg: "bg-amber-50", text: "text-amber-700", label: "Medium Capital" },
  high: { bg: "bg-rose-50", text: "text-rose-700", label: "High Capital" },
};

const barConfig: Record<CapitalLevel, number> = {
  low: 1,
  medium: 2,
  high: 3,
};

export function CapitalBadge({ level }: { level: CapitalLevel }) {
  const c = levelConfig[level];
  const bars = barConfig[level];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${c.bg} ${c.text}`}
    >
      <span className="flex gap-0.5">
        {[1, 2, 3].map((i) => (
          <span
            key={i}
            className={`h-2.5 w-1 rounded-full ${
              i <= bars ? "bg-current opacity-80" : "bg-current opacity-20"
            }`}
          />
        ))}
      </span>
      {c.label}
    </span>
  );
}

export function CapitalBadgeCompact({ level }: { level: CapitalLevel }) {
  const bars = barConfig[level];
  const color =
    level === "low"
      ? "text-emerald-500"
      : level === "medium"
        ? "text-amber-500"
        : "text-rose-500";

  return (
    <span className={`inline-flex items-center gap-0.5 ${color}`} title={`${level} capital intensity`}>
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-2 w-0.5 rounded-full ${
            i <= bars ? "bg-current" : "bg-current opacity-20"
          }`}
        />
      ))}
    </span>
  );
}
