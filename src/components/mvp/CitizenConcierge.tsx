import { useEffect, useMemo, useRef, useState } from "react";
import { journeys, matchJourney, type Journey } from "../../data/citizenConciergeJourneys";

type AgentStep = {
  id: string;
  label: string;
  detail?: string;
  status: "pending" | "running" | "done";
};

function buildAgentTrace(j: Journey): AgentStep[] {
  return [
    { id: "intent", label: "Αναγνώριση πρόθεσης", detail: j.resolvedIntent, status: "pending" },
    { id: "mitos", label: "Αναζήτηση στο mitos.gov.gr", detail: `Εντοπίστηκαν ${j.steps.length} σχετικές διαδικασίες σε ${j.ministryGraph.length} φορείς`, status: "pending" },
    { id: "wallet", label: "Άντληση από Wallet.gov.gr", detail: `Προ-συμπλήρωση: ${j.walletPrefills.join(", ")}`, status: "pending" },
    { id: "graph", label: "Σύνθεση δια-υπουργικού γράφου", detail: j.ministryGraph.join(" → "), status: "pending" },
    { id: "plan", label: "Παραγωγή σχεδίου εκτέλεσης", detail: `${j.steps.length} βήματα · ${j.estimatedTotalDays}`, status: "pending" },
    { id: "checklist", label: "Δημιουργία προσωπικής λίστας με προθεσμίες", status: "pending" },
  ];
}

export function CitizenConcierge() {
  const [query, setQuery] = useState("");
  const [journey, setJourney] = useState<Journey | null>(null);
  const [trace, setTrace] = useState<AgentStep[]>([]);
  const [showOutput, setShowOutput] = useState(false);
  const [unmatched, setUnmatched] = useState(false);
  const cancelRef = useRef<number[]>([]);

  const exampleQueries = useMemo(() => journeys.map((j) => j.exampleQuery), []);

  useEffect(() => () => { cancelRef.current.forEach(window.clearTimeout); }, []);

  function reset() {
    cancelRef.current.forEach(window.clearTimeout);
    cancelRef.current = [];
    setJourney(null);
    setTrace([]);
    setShowOutput(false);
    setUnmatched(false);
  }

  function runAgent(q: string) {
    reset();
    setQuery(q);
    const j = matchJourney(q);
    if (!j) { setUnmatched(true); return; }
    setJourney(j);
    const initial = buildAgentTrace(j);
    setTrace(initial);

    // animate each step running → done
    let delay = 350;
    initial.forEach((_step, idx) => {
      const t1 = window.setTimeout(() => {
        setTrace((prev) => prev.map((s, i) => (i === idx ? { ...s, status: "running" } : s)));
      }, delay);
      cancelRef.current.push(t1);
      delay += 650 + Math.random() * 400;
      const t2 = window.setTimeout(() => {
        setTrace((prev) => prev.map((s, i) => (i === idx ? { ...s, status: "done" } : s)));
      }, delay);
      cancelRef.current.push(t2);
      delay += 200;
    });
    const tFinal = window.setTimeout(() => setShowOutput(true), delay + 400);
    cancelRef.current.push(tFinal);
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 px-6 py-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-violet-700">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-violet-500" />
          Live MVP · gov.gr Citizen Concierge
        </div>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Πες μου τι θέλεις να κάνεις</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-600">
          Γράψε στα Ελληνικά αυτό που θες να πετύχεις με το κράτος. Ο agent θα διασχίσει το mitos.gov.gr, θα τραβήξει ό,τι ήδη έχεις στο
          Wallet.gov.gr, και θα σου επιστρέψει ένα σχέδιο εκτέλεσης με προθεσμίες ανά φορέα.
        </p>

        <div className="mt-5 space-y-2">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="π.χ. Πάω να ανοίξω επιχείρηση που πουλά κρασί στην Πάρο"
            className="h-20 w-full resize-none rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:border-violet-500 focus:outline-none"
          />
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => runAgent(query)}
              disabled={!query.trim() || trace.length > 0}
              className="rounded-md bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              Εκτέλεση agent →
            </button>
            {trace.length > 0 && (
              <button onClick={reset} className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                Καθαρισμός
              </button>
            )}
            <div className="ml-auto text-[10px] text-slate-500">Demo · χωρίς πραγματική σύνδεση σε gov.gr</div>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <span className="text-[10px] uppercase tracking-wider text-slate-500">Παραδείγματα:</span>
          {exampleQueries.map((ex) => (
            <button
              key={ex}
              onClick={() => runAgent(ex)}
              className="rounded-md bg-white px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-200 hover:bg-violet-50 hover:text-violet-700"
            >
              {ex}
            </button>
          ))}
        </div>
      </div>

      {unmatched && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Δεν εντοπίστηκε αντιστοίχιση σε προ-φορτωμένο journey στο demo. Δοκίμασε ένα από τα παραδείγματα — αυτό είναι MVP με 3 hardcoded διαδρομές.
        </div>
      )}

      {trace.length > 0 && (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="rounded-lg border border-slate-200 bg-white p-4 lg:col-span-1">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Agent loop</h3>
            <ol className="space-y-2.5">
              {trace.map((step) => (
                <li key={step.id} className="flex gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px]"
                    style={{
                      backgroundColor: step.status === "done" ? "#10b981" : step.status === "running" ? "#a78bfa" : "#e2e8f0",
                      color: step.status === "pending" ? "#64748b" : "white",
                    }}>
                    {step.status === "done" ? "✓" : step.status === "running" ? "…" : "○"}
                  </span>
                  <div className="flex-1">
                    <div className={`text-sm font-medium ${step.status === "pending" ? "text-slate-400" : "text-slate-900"}`}>
                      {step.label}
                    </div>
                    {step.detail && step.status !== "pending" && (
                      <div className="mt-0.5 text-[11px] text-slate-500">{step.detail}</div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {showOutput && journey && (
            <section className="space-y-4 lg:col-span-2">
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                <div className="text-xs font-medium uppercase tracking-wide text-emerald-700">Σχέδιο εκτέλεσης</div>
                <p className="mt-1 text-sm text-emerald-900">{journey.resolvedIntent}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-emerald-700">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5">⏱ {journey.estimatedTotalDays}</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5">🏛 {journey.ministryGraph.length} φορείς</span>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5">📋 {journey.steps.length} βήματα</span>
                </div>
              </div>

              <ol className="space-y-2.5">
                {journey.steps.map((s, i) => (
                  <li key={i} className="rounded-md border border-slate-200 bg-white p-3">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs text-slate-400">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 text-sm font-medium text-slate-900">{s.procedure}</span>
                      <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">{s.estDays}</span>
                    </div>
                    <div className="mt-1 text-[11px] text-slate-500">{s.agency}</div>
                    {s.documents.length > 0 && (
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        {s.documents.map((d) => (
                          <span key={d} className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] text-blue-700">📄 {d}</span>
                        ))}
                      </div>
                    )}
                    {s.note && <div className="mt-1.5 text-[11px] italic text-amber-700">⚠ {s.note}</div>}
                  </li>
                ))}
              </ol>

              <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600">
                <span className="font-semibold text-slate-700">Προ-συμπλήρωση από Wallet.gov.gr:</span>{" "}
                {journey.walletPrefills.join(" · ")}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
