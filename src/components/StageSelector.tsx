import { STAGES, type Stage } from "../types";

const stageColorMap: Record<Stage, string> = {
  discovered: "bg-slate-400",
  exploring: "bg-blue-400",
  evaluating: "bg-amber-400",
  committed: "bg-violet-400",
  prototyping: "bg-emerald-400",
};

export function StageBadge({ stage }: { stage: Stage }) {
  const label = STAGES.find((s) => s.key === stage)?.label ?? stage;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${stageColorMap[stage]}`}
    >
      {label}
    </span>
  );
}

export function StageSelector({
  value,
  onChange,
}: {
  value: Stage;
  onChange: (stage: Stage) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Stage)}
      className="rounded-md border border-slate-200 bg-white px-2 py-1 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    >
      {STAGES.map((s) => (
        <option key={s.key} value={s.key}>
          {s.label}
        </option>
      ))}
    </select>
  );
}
