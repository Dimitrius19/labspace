import { useEffect, useMemo, useState } from "react";
import { programs } from "../data/programs";
import { ideas } from "../data/ideas";
import { formatDate, formatDaysUntil } from "../lib/ventureUtils";

const STORAGE_KEY = "labspace-tlife-open-2026";

interface StoredOverrides {
  selectedBriefIds?: string[];
}

function loadSelectedBriefIds(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as StoredOverrides;
    return parsed.selectedBriefIds ?? [];
  } catch {
    return [];
  }
}

export function CompetitionLanding() {
  const program = programs[0];
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  useEffect(() => {
    setSelectedIds(loadSelectedBriefIds());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setSelectedIds(loadSelectedBriefIds());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const briefs = useMemo(() => ideas.filter((i) => selectedIds.includes(i.id)), [selectedIds]);

  const applicationsOpen = new Date() >= new Date("2026-08-15T00:00:00");

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Top nav */}
      <header className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-widest text-violet-700">T-Life Capital</div>
            <div className="text-base font-bold text-slate-900">T-Life Open '26</div>
          </div>
          <a
            href="/"
            className="text-xs text-slate-500 hover:text-slate-900"
          >
            ← Internal dashboard
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 text-center">
        <span className="inline-block rounded-full bg-violet-100 px-3 py-1 text-xs font-medium uppercase tracking-widest text-violet-700">
          Autumn 2026 · Athens
        </span>
        <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-6xl">
          Build the next wave of <span className="text-violet-600">Greek AI ventures.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
          A 7-week founder competition for students and researchers from EKPA, NTUA, AUEB, and NCSR Demokritos.
          Pick a curated venture brief from T-Life Capital's pipeline (or pitch your own) and build with senior
          mentors. The top 3–5 teams enter the <span className="font-semibold text-slate-900">T-Life Studio</span> with
          a €100–250k cheque and co-founder support.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {applicationsOpen ? (
            <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800">
              Apply now →
            </button>
          ) : (
            <button disabled className="cursor-not-allowed rounded-full bg-slate-300 px-6 py-3 text-sm font-semibold text-white">
              Applications open Aug 15, 2026
            </button>
          )}
          <a
            href="#briefs"
            className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:border-slate-400"
          >
            Browse {briefs.length || ""} brief{briefs.length === 1 ? "" : "s"} ↓
          </a>
        </div>
      </section>

      {/* Key facts strip */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Fact label="Kickoff" value={formatDate(program.kickoffDate)} sub={formatDaysUntil(program.kickoffDate)} />
          <Fact label="Demo Day" value={formatDate(program.demoDayDate)} sub={formatDaysUntil(program.demoDayDate)} />
          <Fact label="Studio cheque" value="€100–250k" sub="for the top 3–5 teams" />
          <Fact label="Equity" value="12–18%" sub="post-money first round" />
        </div>
      </section>

      {/* Talent pools */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Who can apply</h2>
        <p className="mb-6 max-w-2xl text-base text-slate-600">
          Students and researchers from Greece's four leading institutions. Teams of 3–5 mixing technical, commercial, design and domain expertise.
        </p>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {program.talentPools.map((pool) => (
            <div key={pool.institutionId} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-base font-bold text-slate-900">{pool.shortName}</div>
              <div className="mt-0.5 text-[11px] text-slate-500">{pool.fullName.split("(")[0].trim()}</div>
              <ul className="mt-3 space-y-0.5">
                {pool.departments.slice(0, 3).map((d) => (
                  <li key={d} className="text-[11px] text-slate-700">· {d.replace(/Dept\. of |School of |Institute of /, "")}</li>
                ))}
                {pool.departments.length > 3 && (
                  <li className="text-[10px] text-slate-400">+{pool.departments.length - 3} more</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">How it works</h2>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {[
            { n: 1, t: "Apply", d: "5-minute form. Self-tag as hacker, hustler, designer, or domain expert. Pick top thesis areas." },
            { n: 2, t: "Match", d: "Kickoff day at SNFCC: speed-matching for teams, then pick a curated brief or propose your own." },
            { n: 3, t: "Build", d: "6-week sprint with T-Life mentors. Cloud credits, office hours, midpoint review, Demo Day." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="text-3xl font-bold text-violet-600">0{s.n}</div>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{s.t}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brief gallery */}
      <section id="briefs" className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Venture briefs</h2>
        <p className="mb-6 max-w-2xl text-base text-slate-600">
          {briefs.length === 0 ? (
            <>The full brief library will be published <span className="font-medium text-slate-900">by July 1, 2026</span>. Curated venture opportunities backed by T-Life Capital's pipeline analysis.</>
          ) : (
            <>{briefs.length} curated venture opportunities. Teams pick one (or propose their own within thesis areas).</>
          )}
        </p>
        {briefs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center text-slate-400">
            Coming soon — check back closer to July 2026.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {briefs.map((idea) => (
              <article key={idea.id} className="rounded-2xl border border-slate-200 bg-white p-5">
                <div className="text-[10px] font-medium uppercase tracking-widest text-violet-600">{idea.ycCategory}</div>
                <h3 className="mt-1 text-base font-bold text-slate-900">{idea.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{idea.oneLiner}</p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {idea.tags.slice(0, 3).map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600">{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Path to launch */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-3xl bg-slate-900 p-8 text-white md:p-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-violet-300">Path to launch</h2>
          <h3 className="mt-2 text-2xl font-bold md:text-3xl">Win the competition → join the T-Life Studio.</h3>
          <p className="mt-3 max-w-2xl text-sm text-slate-300 md:text-base">
            The top 3–5 teams get a Studio Co-build offer at Demo Day: a €100–250k cheque, 12-week Athens-based incubation,
            pooled legal/finance/HR/growth, and a senior T-Life partner working alongside as co-founder.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-violet-300">Cohort starts</div>
              <div className="mt-1 font-semibold">{formatDate(program.cohortKickoffDate)}</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-violet-300">Duration</div>
              <div className="mt-1 font-semibold">12 weeks</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-violet-300">Equity</div>
              <div className="mt-1 font-semibold">12–18% post-money</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-violet-300">Location</div>
              <div className="mt-1 font-semibold">Athens</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <div className="text-xs text-slate-500">
            © T-Life Capital · Athens · {new Date().getFullYear()}
          </div>
          <div className="flex gap-4 text-xs text-slate-500">
            <a href="/" className="hover:text-slate-900">Internal dashboard</a>
            <a href="mailto:open@tlife.capital" className="hover:text-slate-900">open@tlife.capital</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Fact({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-[10px] font-medium uppercase tracking-widest text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
      <div className="text-[11px] text-slate-500">{sub}</div>
    </div>
  );
}
