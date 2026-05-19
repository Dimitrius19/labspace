import { useEffect, useMemo, useRef } from "react";
import { MARKETS } from "../types";
import type {
  Assertion,
  AssertionStatus,
  FailureLikelihood,
  FailureMode,
  KillTest,
  ProbabilityBands as ProbabilityBandsT,
  RedTeamFinding,
  RedTeamVerdict,
} from "../types";
import { tlifeAssets } from "../data/tlifeAssets";
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
        <span className="ml-2 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-slate-400">
          legacy
        </span>
      </h3>
      <ScorecardRadar scorecard={scored} />
    </div>
  );
}

// ---------- Methodology v2 rendering ----------

const ASSERTION_BADGE: Record<AssertionStatus, { bg: string; text: string; label: string }> = {
  confirmed: { bg: "bg-emerald-50", text: "text-emerald-700", label: "confirmed" },
  estimated: { bg: "bg-amber-50", text: "text-amber-700", label: "estimate" },
  "user-stated": { bg: "bg-blue-50", text: "text-blue-700", label: "user-stated" },
  unverified: { bg: "bg-slate-100", text: "text-slate-600", label: "unverified" },
  refuted: { bg: "bg-rose-50", text: "text-rose-700", label: "refuted" },
};

const LIKELIHOOD_BADGE: Record<FailureLikelihood, { bg: string; text: string }> = {
  high: { bg: "bg-rose-50", text: "text-rose-700" },
  medium: { bg: "bg-amber-50", text: "text-amber-700" },
  low: { bg: "bg-slate-100", text: "text-slate-600" },
};

function ProbabilityBar({ label, value, tone }: { label: string; value: number; tone: "good" | "bad" }) {
  const pct = Math.round(value * 100);
  const barClass = tone === "good" ? "bg-emerald-500" : "bg-rose-500";
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-[11px] font-medium text-slate-600">{label}</span>
        <span className={`text-xs font-bold ${tone === "good" ? "text-emerald-700" : "text-rose-700"}`}>
          {pct}%
        </span>
      </div>
      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div className={`h-full ${barClass}`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

function ProbabilityBandsSection({ bands }: { bands: ProbabilityBandsT }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-700">
        Probability Bands
        <span className="ml-2 rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-violet-600">
          v2
        </span>
      </h3>
      <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3">
        <ProbabilityBar label="≥ €1M ARR by month 18" value={bands.reaches1mArrBy18mo} tone="good" />
        <ProbabilityBar label="≥ €10M ARR by month 36" value={bands.reaches10mArrBy36mo} tone="good" />
        <ProbabilityBar label="Total failure / kill by month 36" value={bands.totalFailureBy36mo} tone="bad" />
        <p className="mt-2 border-t border-slate-200 pt-2 text-[11px] italic leading-relaxed text-slate-500">
          {bands.basisOfEstimate}
        </p>
      </div>
    </div>
  );
}

function KillTestCard({ test }: { test: KillTest }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
      <div className="mb-1 flex items-start justify-between gap-2">
        <p className="text-xs italic leading-snug text-slate-700">"{test.hypothesis}"</p>
        <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600">
          €{(test.costEur / 1000).toFixed(1)}K · {test.durationWeeks}w
        </span>
      </div>
      <p className="mb-2 text-[11px] text-slate-600">{test.experiment}</p>
      <div className="grid grid-cols-1 gap-1 text-[11px]">
        <div className="flex gap-1.5">
          <span className="shrink-0 text-rose-600">✗ Kill:</span>
          <span className="text-slate-600">{test.killSignal}</span>
        </div>
        <div className="flex gap-1.5">
          <span className="shrink-0 text-emerald-600">✓ Go:</span>
          <span className="text-slate-600">{test.validateSignal}</span>
        </div>
      </div>
    </div>
  );
}

function KillTestsSection({ tests }: { tests: KillTest[] }) {
  const totalCost = tests.reduce((a, t) => a + t.costEur, 0);
  const maxDuration = tests.reduce((a, t) => Math.max(a, t.durationWeeks), 0);
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-700">
        Kill Tests
        <span className="ml-2 rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-violet-600">
          v2
        </span>
        <span className="ml-2 text-[10px] font-normal text-slate-400">
          €{(totalCost / 1000).toFixed(1)}K total · {maxDuration}w max
        </span>
      </h3>
      <div className="space-y-2">
        {tests.map((t) => (
          <KillTestCard key={t.id} test={t} />
        ))}
      </div>
    </div>
  );
}

function PreMortemSection({ modes }: { modes: FailureMode[] }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-700">
        Pre-Mortem
        <span className="ml-2 rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-violet-600">
          v2
        </span>
      </h3>
      <div className="space-y-2">
        {modes.map((m, i) => {
          const badge = LIKELIHOOD_BADGE[m.likelihood];
          return (
            <div key={i} className="rounded-md border border-slate-200 bg-white px-3 py-2">
              <div className="flex items-start justify-between gap-2">
                <p className="text-xs leading-snug text-slate-700">{m.cause}</p>
                <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${badge.bg} ${badge.text}`}>
                  {m.likelihood}
                </span>
              </div>
              <p className="mt-1 text-[11px] italic text-slate-500">Early signal: {m.earlySignal}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AssertionsSection({ assertions }: { assertions: Assertion[] }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-700">
        Assertions
        <span className="ml-2 rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-violet-600">
          v2
        </span>
        <span className="ml-2 text-[10px] font-normal text-slate-400">{assertions.length} claims</span>
      </h3>
      <div className="space-y-1.5">
        {assertions.map((a) => {
          const badge = ASSERTION_BADGE[a.status];
          const isUrl = a.source.startsWith("http");
          return (
            <div key={a.id} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
              <div className="flex items-start justify-between gap-2">
                <p className="text-[11px] leading-snug text-slate-700">{a.claim}</p>
                <span className={`shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${badge.bg} ${badge.text}`}>
                  {badge.label}
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between gap-2 text-[10px]">
                {isUrl ? (
                  <a
                    href={a.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-blue-500 hover:text-blue-700"
                  >
                    ↗ {a.source.replace(/^https?:\/\//, "").slice(0, 60)}
                  </a>
                ) : (
                  <span className="truncate font-mono text-slate-400">{a.source}</span>
                )}
                <span className="shrink-0 text-slate-400">{a.lastChecked}</span>
              </div>
              {a.note && (
                <p className="mt-1 text-[10px] italic text-slate-500">{a.note}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const VERDICT_BADGE: Record<RedTeamVerdict, { bg: string; text: string; label: string }> = {
  pass: { bg: "bg-rose-100", text: "text-rose-800", label: "PASS" },
  revise: { bg: "bg-amber-100", text: "text-amber-800", label: "REVISE" },
  "proceed-with-caveats": { bg: "bg-blue-100", text: "text-blue-800", label: "PROCEED WITH CAVEATS" },
  proceed: { bg: "bg-emerald-100", text: "text-emerald-800", label: "PROCEED" },
};

function RedTeamFindingCard({ finding }: { finding: RedTeamFinding }) {
  const badge = VERDICT_BADGE[finding.verdict];
  return (
    <div className="rounded-lg border-2 border-rose-200 bg-rose-50/40 p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badge.bg} ${badge.text}`}>
          {badge.label}
        </span>
        <span className="text-[10px] text-slate-400">Red-team review · {finding.date}</span>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700">Deal-killer</p>
          <p className="mt-0.5 text-[11px] leading-snug text-slate-700">{finding.dealKiller}</p>
        </div>

        {finding.unitEconomicsConcern && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700">Unit economics</p>
            <p className="mt-0.5 text-[11px] leading-snug text-slate-700">{finding.unitEconomicsConcern}</p>
          </div>
        )}

        {finding.loadBearingAssumption && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
              Load-bearing assumption (not in `assertions`)
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-slate-700">{finding.loadBearingAssumption}</p>
          </div>
        )}

        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-rose-700">
            Pattern-match failures
          </p>
          <ul className="mt-1 space-y-1">
            {finding.patternMatches.map((pm, i) => (
              <li key={i} className="text-[11px] leading-snug text-slate-700">
                <span className="mr-1 text-rose-400">•</span>
                {pm}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded border border-blue-200 bg-blue-50 p-2">
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
            Alternative thesis
          </p>
          <p className="mt-0.5 text-[11px] leading-snug text-slate-700">{finding.alternativeThesis}</p>
        </div>
      </div>
    </div>
  );
}

function RedTeamSection({ findings }: { findings: RedTeamFinding[] }) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-700">
        Red-Team Findings
        <span className="ml-2 rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-violet-600">
          v2
        </span>
      </h3>
      <div className="space-y-2">
        {findings.map((f, i) => (
          <RedTeamFindingCard key={i} finding={f} />
        ))}
      </div>
    </div>
  );
}

function TLifeAssetRefsSection({ refs }: { refs: string[] }) {
  const resolved = refs
    .map((id) => tlifeAssets.find((a) => a.id === id))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));
  if (resolved.length === 0) return null;
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold text-slate-700">
        T-Life Assets Referenced
        <span className="ml-2 rounded bg-violet-50 px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-violet-600">
          v2
        </span>
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {resolved.map((a) => (
          <span
            key={a.id}
            title={a.description}
            className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs text-indigo-700"
          >
            {a.shortName ?? a.name}
          </span>
        ))}
      </div>
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
        data-memo-content
        className="relative ml-auto w-[480px] overflow-y-auto border-l border-slate-200 bg-white shadow-xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white p-6">
          <div className="flex-1 pr-4">
            <h2 className="text-lg font-bold text-slate-900">{idea.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{idea.oneLiner}</p>
          </div>
          <div className="flex items-center gap-1" data-memo-hide>
            <button
              onClick={() => window.print()}
              title="Print memo (Cmd/Ctrl-P also works)"
              className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-6 p-6">
          {/* Stage + Meta */}
          <div className="flex items-center gap-4">
            <div data-memo-hide>
              <StageSelector
                value={idea.stage}
                onChange={(stage) => updateStage(idea.id, stage)}
              />
            </div>
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

          {/* ---------- Methodology v2 ---------- */}
          {idea.probabilityBands && (
            <ProbabilityBandsSection bands={idea.probabilityBands} />
          )}

          {idea.redTeamFindings && idea.redTeamFindings.length > 0 && (
            <RedTeamSection findings={idea.redTeamFindings} />
          )}

          {idea.killTests && idea.killTests.length > 0 && (
            <KillTestsSection tests={idea.killTests} />
          )}

          {idea.preMortem && idea.preMortem.length > 0 && (
            <PreMortemSection modes={idea.preMortem} />
          )}

          {idea.assertions && idea.assertions.length > 0 && (
            <AssertionsSection assertions={idea.assertions} />
          )}

          {idea.tlifeAssetRefs && idea.tlifeAssetRefs.length > 0 && (
            <TLifeAssetRefsSection refs={idea.tlifeAssetRefs} />
          )}

          {/* Go/No-Go Scorecard — legacy, hidden in memo print */}
          {idea.scorecard && (
            <div data-memo-hide>
              <ScorecardSection idea={idea} />
            </div>
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

          {/* Notes — interactive textarea; in print, show the notes as a read-only block instead */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-slate-700">
              {idea.notes ? "Decision Log & Notes" : "Team Notes"}
            </h3>
            <div data-memo-hide>
              <textarea
                value={idea.notes}
                onChange={(e) => updateNotes(idea.id, e.target.value)}
                placeholder="Add notes about this idea..."
                className="w-full rounded-md border border-slate-200 p-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                rows={4}
              />
            </div>
            {idea.notes && (
              <div className="hidden whitespace-pre-wrap rounded-md border border-slate-200 p-3 text-xs leading-relaxed text-slate-700 print:block">
                {idea.notes}
              </div>
            )}
          </div>

          <p className="text-xs text-slate-400">Added: {idea.addedDate}</p>
        </div>
      </div>
    </div>
  );
}
