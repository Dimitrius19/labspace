import { useEffect, useState } from "react";
import { ideas } from "../data/ideas";
import { programs } from "../data/programs";
import { formatDate, formatDaysUntil } from "../lib/ventureUtils";

const STORAGE_KEY = "labspace-tlife-open-2026";

function loadSelectedBriefIds(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as { selectedBriefIds?: string[] };
    return parsed.selectedBriefIds ?? [];
  } catch {
    return [];
  }
}

export function BriefDetailPublic({ briefId }: { briefId: string }) {
  const program = programs[0];
  const idea = ideas.find((i) => i.id === briefId);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    setSelectedIds(loadSelectedBriefIds());
  }, []);

  const isCurated = selectedIds.includes(briefId);
  const applicationsOpen = new Date() >= new Date("2026-08-15T00:00:00");

  if (!idea) {
    return (
      <div className="min-h-screen bg-slate-50">
        <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-violet-700">T-Life Capital</div>
              <div className="text-base font-bold text-slate-900">T-Life Open '26</div>
            </div>
            <a href="/competition" className="text-xs text-slate-500 hover:text-slate-900">← All briefs</a>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Brief not found</h1>
          <p className="mt-2 text-sm text-slate-600">The brief you're looking for doesn't exist (or hasn't been published yet).</p>
          <a href="/competition" className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white">Back to all briefs</a>
        </div>
      </div>
    );
  }

  if (!isCurated) {
    // Show a soft-block: the brief exists in our ideas pool but isn't curated for T-Life Open 2026
    return (
      <div className="min-h-screen bg-slate-50">
        <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <div>
              <div className="text-[10px] font-medium uppercase tracking-widest text-violet-700">T-Life Capital</div>
              <div className="text-base font-bold text-slate-900">T-Life Open '26</div>
            </div>
            <a href="/competition" className="text-xs text-slate-500 hover:text-slate-900">← All briefs</a>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Not yet published</h1>
          <p className="mt-2 max-w-xl mx-auto text-sm text-slate-600">
            This venture concept is in T-Life Capital's pipeline but hasn't been curated into the {program.name} brief set yet. The full brief library will be published by July 1, 2026.
          </p>
          <a href="/competition" className="mt-6 inline-block rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white">Back to all briefs</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-violet-700">T-Life Capital</div>
            <div className="text-base font-bold text-slate-900">T-Life Open '26</div>
          </div>
          <a href="/competition" className="text-xs text-slate-500 hover:text-slate-900">← All briefs</a>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-[10px] font-medium uppercase tracking-widest text-violet-600">{idea.ycCategory}</div>
        <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">{idea.title}</h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">{idea.oneLiner}</p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {idea.tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] text-slate-700">{t}</span>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Description</h2>
          <div className="prose prose-slate prose-sm max-w-none whitespace-pre-wrap text-slate-700">{idea.description}</div>
        </section>

        <section className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Block title="Why now">{idea.whyNow}</Block>
          <Block title="T-Life angle">{idea.tlifeAngle}</Block>
          <Block title="Primary market rationale">{idea.primaryMarketRationale}</Block>
          <Block title="YC RFS correlation">{idea.ycRfsCorrelation}</Block>
        </section>

        <section className="mt-10">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">Road to moat</h2>
          <ol className="space-y-3">
            {idea.roadToMoat.map((step, i) => (
              <li key={i} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="text-[10px] font-medium uppercase tracking-widest text-violet-600">{step.timeframe}</div>
                <div className="mt-1 text-sm text-slate-700">{step.milestone}</div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          <Stat label="Primary market" value={idea.primaryMarket.replace("-", " / ")} />
          <Stat label="Seed capital" value={idea.capitalIntensity.estimatedSeedCapital} />
          <Stat label="Competitive intensity" value={idea.competitiveIntensity} />
          <Stat label="T-Life score" value={idea.scorecard.composite.toFixed(1)} />
        </section>

        <section className="mt-10 rounded-3xl bg-slate-900 p-8 text-white md:p-10">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-300">Want to build this?</h2>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">Pick this brief at T-Life Open kickoff on {formatDate(program.kickoffDate)}.</h3>
          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            One team will be allocated this brief at the matchmaking event. If you propose your own variant or open-submission, you can also reference it as inspiration. Top 3–5 teams from Demo Day join the T-Life Studio with a {program.budget.cohortCapital} cheque per venture.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            {applicationsOpen ? (
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                Apply now →
              </button>
            ) : (
              <button disabled className="cursor-not-allowed rounded-full bg-slate-700 px-6 py-3 text-sm font-semibold text-white">
                Applications open Aug 15, 2026
              </button>
            )}
            <a href="/competition" className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold hover:border-slate-400">
              See all briefs
            </a>
          </div>
          <div className="mt-4 text-[11px] text-slate-400">
            Kickoff {formatDaysUntil(program.kickoffDate)} · Demo Day {formatDaysUntil(program.demoDayDate)}
          </div>
        </section>
      </article>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <div className="text-xs text-slate-500">© T-Life Capital · Athens</div>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="/" className="hover:text-slate-900">Internal dashboard</a>
            <a href="/competition" className="hover:text-slate-900">All briefs</a>
            <a href="mailto:open@tlife.capital" className="hover:text-slate-900">open@tlife.capital</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="text-[10px] font-semibold uppercase tracking-widest text-violet-600">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-700">{children}</div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-[10px] font-medium uppercase tracking-widest text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold capitalize text-slate-900">{value}</div>
    </div>
  );
}
