import type { ComputedScorecard } from "../lib/scoring";

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function ScorecardRadar({ scorecard }: { scorecard: ComputedScorecard }) {
  const size = 180;
  const cx = size / 2;
  const cy = size / 2;
  const maxR = 65;
  const dims = scorecard.dimensions;
  const angleStep = 360 / dims.length;

  const points = dims.map((d, i) => {
    const val = d.score / 5;
    const r = val * maxR;
    return polarToCartesian(cx, cy, r, i * angleStep);
  });
  const polygon = points.map((p) => `${p.x},${p.y}`).join(" ");

  const rings = [1, 2, 3, 4, 5];

  return (
    <div className="space-y-3">
      {/* Header with computation ratio */}
      <div className="flex items-center gap-2">
        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600">
          {scorecard.computedCount}/{scorecard.totalCount} computed
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
          {scorecard.totalCount - scorecard.computedCount} AI estimate
        </span>
      </div>

      <div className="flex items-start gap-4">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Grid rings */}
          {rings.map((ring) => {
            const r = (ring / 5) * maxR;
            const ringPoints = dims
              .map((_, i) => polarToCartesian(cx, cy, r, i * angleStep))
              .map((p) => `${p.x},${p.y}`)
              .join(" ");
            return (
              <polygon
                key={ring}
                points={ringPoints}
                fill="none"
                stroke="#e2e8f0"
                strokeWidth={0.5}
              />
            );
          })}

          {/* Axis lines */}
          {dims.map((_, i) => {
            const end = polarToCartesian(cx, cy, maxR, i * angleStep);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={end.x}
                y2={end.y}
                stroke="#e2e8f0"
                strokeWidth={0.5}
              />
            );
          })}

          {/* Score polygon */}
          <polygon
            points={polygon}
            fill="rgba(59, 130, 246, 0.15)"
            stroke="#3b82f6"
            strokeWidth={1.5}
          />

          {/* Score dots — blue for computed, gray dashed ring for manual */}
          {points.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r={3}
                fill={dims[i].source === "computed" ? "#3b82f6" : "#94a3b8"}
              />
              {dims[i].source === "manual" && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={5}
                  fill="none"
                  stroke="#94a3b8"
                  strokeWidth={0.5}
                  strokeDasharray="2 1"
                />
              )}
            </g>
          ))}

          {/* Labels */}
          {dims.map((d, i) => {
            const labelR = maxR + 16;
            const pos = polarToCartesian(cx, cy, labelR, i * angleStep);
            return (
              <text
                key={d.key}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`text-[8px] ${d.source === "computed" ? "fill-slate-600" : "fill-slate-400"}`}
              >
                {d.label.split(" ").map((word, wi) => (
                  <tspan key={wi} x={pos.x} dy={wi === 0 ? 0 : 10}>
                    {word}
                  </tspan>
                ))}
              </text>
            );
          })}
        </svg>

        {/* Score breakdown with reasoning */}
        <div className="space-y-2 pt-1">
          {dims.map((d) => (
            <div key={d.key}>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className={`h-1.5 w-3 rounded-sm ${
                        n <= d.score
                          ? d.source === "computed"
                            ? "bg-blue-500"
                            : "bg-slate-400"
                          : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[10px] text-slate-600">{d.label}</span>
                {d.source === "computed" && (
                  <span className="text-[8px] text-blue-500">●</span>
                )}
              </div>
              <p className="ml-[70px] text-[9px] leading-tight text-slate-400">
                {d.reasoning}
              </p>
            </div>
          ))}
          <div className="mt-2 border-t border-slate-200 pt-2">
            <span className="text-xs font-bold text-slate-900">
              {scorecard.composite.toFixed(2)}
            </span>
            <span className="ml-1 text-[10px] text-slate-400">/ 5.0 composite</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ScorecardCompact({ composite }: { composite: number }) {
  const color =
    composite >= 3.5
      ? "text-emerald-600 bg-emerald-50"
      : composite >= 2.5
        ? "text-amber-600 bg-amber-50"
        : "text-rose-600 bg-rose-50";

  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${color}`}>
      {composite.toFixed(1)}
    </span>
  );
}
