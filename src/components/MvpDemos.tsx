import { useState } from "react";
import { CitizenConcierge } from "./mvp/CitizenConcierge";

type DemoKey = "citizen-concierge";

const DEMOS: { key: DemoKey; title: string; ideaId: string; ministry: string; tagline: string; status: "live" | "scaffold" }[] = [
  {
    key: "citizen-concierge",
    title: "gov.gr Citizen Concierge",
    ideaId: "digital-gov-citizen-concierge",
    ministry: "Digital Governance",
    tagline: "Greek-language compound-procedure agent on top of mitos.gov.gr.",
    status: "live",
  },
];

export function MvpDemos() {
  const [active, setActive] = useState<DemoKey | null>(null);

  if (active === "citizen-concierge") {
    return (
      <div className="space-y-3">
        <button onClick={() => setActive(null)} className="text-xs text-slate-500 hover:text-slate-700">
          ← Back to demos
        </button>
        <CitizenConcierge />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">MVP Demos</h1>
        <p className="mt-1 max-w-3xl text-sm text-slate-500">
          Working prototypes of the highest-leverage promotes — the kind of thing you walk into a minister's meeting with on a tablet. Each demo links back to the underlying idea in the Public Sector view, where you can read the full memo pack.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {DEMOS.map((d) => (
          <button
            key={d.key}
            onClick={() => setActive(d.key)}
            className="group flex h-full flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 text-left transition-all hover:border-violet-400 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-violet-700">
                {d.status === "live" ? "▶ Live demo" : "Scaffold"}
              </span>
              <span className="text-[10px] text-slate-400">{d.ministry}</span>
            </div>
            <h2 className="text-lg font-semibold text-slate-900 group-hover:text-violet-700">{d.title}</h2>
            <p className="text-sm text-slate-600">{d.tagline}</p>
            <div className="mt-auto flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-mono">{d.ideaId}</span>
              <span className="text-violet-600 group-hover:underline">Open demo →</span>
            </div>
          </button>
        ))}

        <div className="flex h-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 text-center">
          <div className="text-xs font-medium uppercase tracking-wider text-slate-500">Next up</div>
          <p className="mt-2 text-sm text-slate-600">
            ELENXIS Auditor Copilot · AMA Tourism Compliance · Ephorate Permit Triage · EFKA Pension Copilot
          </p>
          <p className="mt-2 text-[11px] text-slate-400">Each one becomes a working demo on the next pass.</p>
        </div>
      </div>
    </div>
  );
}
