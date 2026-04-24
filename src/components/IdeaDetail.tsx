import { useEffect, useMemo, useRef } from "react";
import { MARKETS } from "../types";
import { TrafficLight } from "./TrafficLight";
import { StageSelector } from "./StageSelector";
import { CapitalBadge } from "./CapitalBadge";
import { ScorecardRadar } from "./ScorecardRadar";
import { useIdeas } from "../hooks/useIdeas";
import { computeScorecard } from "../lib/scoring";

function marketLabel(key: string): string {
  return MARKETS.find((m) => m.key === key)?.label ?? key;
}

const YC_RFS_MAP: Record<string, { thesis: string; link: string }> = {
  "Cursor for Product Managers": {
    thesis: "AI tools for product discovery and decision-making — systems that synthesize customer data and recommend what to build next.",
    link: "https://www.ycombinator.com/rfs#cursor-for-product-managers",
  },
  "AI-Native Hedge Funds": {
    thesis: "Investment firms built from scratch on AI agents — swarms analyzing financial documents and executing trades for new alpha.",
    link: "https://www.ycombinator.com/rfs#ai-native-hedge-funds",
  },
  "AI-Native Agencies": {
    thesis: "Service businesses using AI to deliver client work at software-like margins — scaling without proportional headcount.",
    link: "https://www.ycombinator.com/rfs#ai-native-agencies",
  },
  "Stablecoin Financial Services": {
    thesis: "Products bridging DeFi and TradFi compliance — yield-bearing accounts, cross-border payments via stablecoins.",
    link: "https://www.ycombinator.com/rfs#stablecoin-financial-services",
  },
  "AI for Government": {
    thesis: "Software automating government form processing and administrative workflows at scale.",
    link: "https://www.ycombinator.com/rfs#ai-for-government",
  },
  "Modern Metal Mills": {
    thesis: "Software-driven manufacturing with real-time scheduling, production planning, and integrated energy management.",
    link: "https://www.ycombinator.com/rfs#modern-metal-mills",
  },
  "AI Guidance for Physical Work": {
    thesis: "Real-time multimodal AI coaching for field workers — seeing what they see, guiding step-by-step.",
    link: "https://www.ycombinator.com/rfs#ai-guidance-for-physical-work",
  },
  "Large Spatial Models": {
    thesis: "Foundation models treating geometry and physical structure as core primitives for real-world design.",
    link: "https://www.ycombinator.com/rfs#large-spatial-models",
  },
  "Infra for Government Fraud Hunters": {
    thesis: "Tools automating document parsing, corporate structure tracing, and evidence organization for fraud investigations.",
    link: "https://www.ycombinator.com/rfs#infra-for-government-fraud-hunters",
  },
  "Make LLMs Easy to Train": {
    thesis: "Developer infra simplifying LLM training — better APIs, dataset management, ML-focused dev environments.",
    link: "https://www.ycombinator.com/rfs#make-llms-easy-to-train",
  },
};

function ScorecardSection({ idea }: { idea: import("../types").Idea }) {
  const scored = useMemo(() => computeScorecard(idea), [idea]);
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold text-slate-700">
        Go / No-Go Scorecard
      </h3>
      <ScorecardRadar scorecard={scored} />
    </div>
  );
}

export function IdeaDetail({
  ideaId,
  onClose,
}: {
  ideaId: string;
  onClose: () => void;
}) {
  const { getIdea, updateStage, updateNotes } = useIdeas();
  const idea = getIdea(ideaId);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!idea) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Intentionally no onClick — spec requires no click-outside dismissal */}
      <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

      <div
        ref={panelRef}
        className="relative ml-auto w-[480px] overflow-y-auto border-l border-slate-200 bg-white shadow-xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white p-6">
          <div className="flex-1 pr-4">
            <h2 className="text-lg font-bold text-slate-900">{idea.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{idea.oneLiner}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6 p-6">
          {/* Stage + Meta */}
          <div className="flex items-center gap-4">
            <StageSelector
              value={idea.stage}
              onChange={(stage) => updateStage(idea.id, stage)}
            />
            <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-500">
              {idea.ycCategory}
            </span>
            <span className="text-xs text-slate-400">{idea.ycBatchDate}</span>
          </div>

          {/* YC RFS Correlation */}
          {YC_RFS_MAP[idea.ycCategory] && (
            <div className="rounded-lg border border-blue-100 bg-blue-50/50 p-4">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  YC Request for Startups
                </span>
                <a
                  href={YC_RFS_MAP[idea.ycCategory].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-blue-400 hover:text-blue-600"
                >
                  ↗ View on YC
                </a>
              </div>
              <p className="mb-2 text-xs font-medium text-slate-700">
                {idea.ycCategory}
              </p>
              <p className="text-xs leading-relaxed text-slate-600">
                {YC_RFS_MAP[idea.ycCategory].thesis}
              </p>
              {idea.ycRfsCorrelation && (
                <div className="mt-2 border-t border-blue-100 pt-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-500">
                    How this idea maps
                  </span>
                  <p className="mt-0.5 text-xs leading-relaxed text-slate-700">
                    {idea.ycRfsCorrelation}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* PMF Narrative */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              Product-Market Fit Analysis
            </h3>
            <div className="space-y-2 text-sm leading-relaxed text-slate-600">
              {idea.description.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Primary Market */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              Primary Market (Beachhead)
            </h3>
            <TrafficLight
              value={idea.primaryMarketFit}
              label={marketLabel(idea.primaryMarket)}
              size="md"
            />
            <p className="mt-2 text-sm text-slate-600">
              {idea.primaryMarketRationale}
            </p>
          </div>

          {/* Expansion Markets */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              Expansion Potential
            </h3>
            <div className="space-y-2">
              {idea.expansionMarkets.map((em) => (
                <div key={em.market} className="flex items-start gap-2">
                  <TrafficLight value={em.fit} label={marketLabel(em.market)} />
                  <span className="text-xs text-slate-500">{em.note}</span>
                </div>
              ))}
            </div>
          </div>

          {/* T-Life Angle */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              T-Life Angle
            </h3>
            <p className="text-sm text-slate-600">{idea.tlifeAngle}</p>
          </div>

          {/* Why Now */}
          {idea.whyNow && (
            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-700">
                Why Now
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {idea.whyNow}
              </p>
            </div>
          )}

          {/* Road to Moat */}
          {idea.roadToMoat && idea.roadToMoat.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-slate-700">
                Road to Moat
              </h3>
              <div className="relative space-y-3 pl-4">
                <div className="absolute left-[7px] top-1 h-[calc(100%-8px)] w-px bg-slate-200" />
                {idea.roadToMoat.map((m, i) => (
                  <div key={i} className="relative flex gap-3">
                    <div className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-blue-400 bg-white" />
                    <div className="ml-2">
                      <span className="text-xs font-semibold text-blue-600">
                        {m.timeframe}
                      </span>
                      <p className="text-xs text-slate-600">{m.milestone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Capital Intensity */}
          {idea.capitalIntensity && (
            <div>
              <h3 className="mb-2 text-sm font-semibold text-slate-700">
                Capital Intensity
              </h3>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <div className="mb-2 flex items-center justify-between">
                  <CapitalBadge level={idea.capitalIntensity.level} />
                  <span className="text-xs font-medium text-slate-700">
                    {idea.capitalIntensity.estimatedSeedCapital}
                  </span>
                </div>
                <div className="mb-1 text-xs text-slate-500">
                  {idea.capitalIntensity.capexRatio}
                </div>
                <p className="text-xs text-slate-600">
                  {idea.capitalIntensity.note}
                </p>
              </div>
            </div>
          )}

          {/* Go/No-Go Scorecard */}
          {idea.scorecard && (
            <ScorecardSection idea={idea} />
          )}

          {/* Competitive Landscape */}
          {idea.competitors && idea.competitors.length > 0 && (
            <div>
              <div className="mb-2 flex items-center gap-2">
                <h3 className="text-sm font-semibold text-slate-700">
                  Competitive Landscape
                </h3>
                {idea.competitiveIntensity && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                      idea.competitiveIntensity === "open"
                        ? "bg-emerald-50 text-emerald-700"
                        : idea.competitiveIntensity === "moderate"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-rose-50 text-rose-700"
                    }`}
                  >
                    {idea.competitiveIntensity}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                {idea.competitors.map((c, i) => (
                  <div
                    key={i}
                    className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-700">
                        {c.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`rounded px-1.5 py-0.5 text-[9px] font-medium ${
                            c.type === "startup"
                              ? "bg-blue-50 text-blue-600"
                              : c.type === "incumbent"
                                ? "bg-slate-200 text-slate-600"
                                : "bg-violet-50 text-violet-600"
                          }`}
                        >
                          {c.type}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {c.geography}
                        </span>
                      </div>
                    </div>
                    <p className="mt-0.5 text-[11px] text-slate-500">{c.note}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">Tags</h3>
            <div className="flex flex-wrap gap-1.5">
              {idea.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              Team Notes
            </h3>
            <textarea
              value={idea.notes}
              onChange={(e) => updateNotes(idea.id, e.target.value)}
              placeholder="Add notes about this idea..."
              className="w-full rounded-md border border-slate-200 p-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              rows={4}
            />
          </div>

          <p className="text-xs text-slate-400">Added: {idea.addedDate}</p>
        </div>
      </div>
    </div>
  );
}
