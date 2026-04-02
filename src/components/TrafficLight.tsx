import type { TrafficLight as TL } from "../types";

const colorMap: Record<TL, { bg: string; dot: string }> = {
  green: { bg: "bg-emerald-50", dot: "bg-emerald-500" },
  yellow: { bg: "bg-amber-50", dot: "bg-amber-500" },
  red: { bg: "bg-rose-50", dot: "bg-rose-500" },
};

export function TrafficLight({
  value,
  label,
  size = "sm",
}: {
  value: TL;
  label?: string;
  size?: "sm" | "md";
}) {
  const c = colorMap[value];
  const dotSize = size === "sm" ? "h-2.5 w-2.5" : "h-3.5 w-3.5";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${c.bg} text-slate-700`}
    >
      <span className={`${dotSize} rounded-full ${c.dot}`} />
      {label}
    </span>
  );
}
