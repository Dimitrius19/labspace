import { useState } from "react";
import { useProgram, type ApplicantStage, type ApplicantRole, type Applicant } from "../../hooks/useProgram";
import { ApplicantDetailModal } from "./ApplicantDetailModal";

const STAGES: { key: ApplicantStage; label: string; accent: string }[] = [
  { key: "applied", label: "Applied", accent: "border-t-slate-400" },
  { key: "screened", label: "Screened", accent: "border-t-blue-500" },
  { key: "accepted", label: "Accepted", accent: "border-t-violet-500" },
  { key: "team-formed", label: "Team formed", accent: "border-t-amber-500" },
  { key: "midpoint", label: "Midpoint", accent: "border-t-orange-500" },
  { key: "demo-day", label: "Demo Day", accent: "border-t-emerald-500" },
];

const ROLES: { key: ApplicantRole; label: string; chip: string }[] = [
  { key: "hacker", label: "Hacker", chip: "bg-blue-50 text-blue-700" },
  { key: "hustler", label: "Hustler", chip: "bg-emerald-50 text-emerald-700" },
  { key: "designer", label: "Designer", chip: "bg-rose-50 text-rose-700" },
  { key: "domain", label: "Domain", chip: "bg-violet-50 text-violet-700" },
];

const TARGETS: Record<ApplicantStage, number> = {
  applied: 200,
  screened: 200,
  accepted: 80,
  "team-formed": 80,
  midpoint: 60,
  "demo-day": 60,
};

export function ApplicantFunnel() {
  const { overrides, addApplicant, addApplicantsBulk, setApplicantStage, removeApplicant } = useProgram();
  const [showAdd, setShowAdd] = useState(false);
  const [showImport, setShowImport] = useState(false);
  const [csvText, setCsvText] = useState("");
  const [importMsg, setImportMsg] = useState<string | null>(null);
  const [openApplicantId, setOpenApplicantId] = useState<string | null>(null);
  const [draft, setDraft] = useState<{ name: string; institution: string; role: ApplicantRole }>({
    name: "",
    institution: "EKPA",
    role: "hacker",
  });

  const runImport = () => {
    const lines = csvText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) {
      setImportMsg("No rows found.");
      return;
    }
    const startsWithHeader = /^name\s*,/i.test(lines[0]);
    const rows = startsWithHeader ? lines.slice(1) : lines;
    const parsed: { name: string; institution: string; role: ApplicantRole; stage: "applied" }[] = [];
    const validRoles: ApplicantRole[] = ["hacker", "hustler", "designer", "domain"];
    const skipped: number[] = [];
    rows.forEach((row, idx) => {
      const cols = row.split(",").map((c) => c.trim());
      const [name, institution = "Other", roleRaw = "hacker"] = cols;
      if (!name) {
        skipped.push(idx + (startsWithHeader ? 2 : 1));
        return;
      }
      const role = (validRoles.includes(roleRaw.toLowerCase() as ApplicantRole)
        ? roleRaw.toLowerCase()
        : "hacker") as ApplicantRole;
      parsed.push({ name, institution, role, stage: "applied" });
    });
    addApplicantsBulk(parsed);
    setCsvText("");
    setImportMsg(
      `Imported ${parsed.length}${skipped.length > 0 ? ` · skipped ${skipped.length} blank` : ""}.`
    );
  };

  const submit = () => {
    if (!draft.name.trim()) return;
    addApplicant({
      name: draft.name.trim(),
      institution: draft.institution,
      role: draft.role,
      stage: "applied",
    });
    setDraft({ name: "", institution: draft.institution, role: draft.role });
    setShowAdd(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="text-sm text-slate-600">{overrides.applicants.length} applicants tracked</div>
          <div className="text-[11px] text-slate-400">Targets: 200 applied → 80 accepted → 60 demo-day finalists</div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShowImport(!showImport);
              setShowAdd(false);
              setImportMsg(null);
            }}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50"
          >
            {showImport ? "Cancel import" : "Bulk import CSV"}
          </button>
          <button
            onClick={() => {
              setShowAdd(!showAdd);
              setShowImport(false);
            }}
            className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
          >
            {showAdd ? "Cancel" : "+ Add applicant"}
          </button>
        </div>
      </div>

      {showImport && (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="mb-2 text-[11px] text-slate-500">
            Paste rows as <code className="rounded bg-slate-100 px-1">name,institution,role</code>. Role = hacker / hustler / designer / domain (defaults to hacker). Header row optional.
          </div>
          <textarea
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
            placeholder="Maria Papadaki,EKPA,hacker&#10;Yannis Karras,NTUA,hustler&#10;Eleni Voulgari,AUEB,designer"
            rows={6}
            className="w-full rounded border border-slate-200 px-2 py-1.5 font-mono text-xs"
          />
          <div className="mt-2 flex items-center gap-2">
            <button
              onClick={runImport}
              className="rounded bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
            >
              Import
            </button>
            {importMsg && <span className="text-[11px] text-emerald-700">{importMsg}</span>}
          </div>
        </div>
      )}

      {showAdd && (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
            <input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              placeholder="Full name"
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            />
            <select
              value={draft.institution}
              onChange={(e) => setDraft({ ...draft, institution: e.target.value })}
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            >
              <option>EKPA</option>
              <option>NTUA</option>
              <option>AUEB</option>
              <option>Demokritos</option>
              <option>Other</option>
            </select>
            <select
              value={draft.role}
              onChange={(e) => setDraft({ ...draft, role: e.target.value as ApplicantRole })}
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            >
              {ROLES.map((r) => (
                <option key={r.key} value={r.key}>{r.label}</option>
              ))}
            </select>
            <button
              onClick={submit}
              className="rounded bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Add to Applied
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
        {STAGES.map((stage) => {
          const stageApplicants = overrides.applicants.filter((a) => a.stage === stage.key);
          const target = TARGETS[stage.key];
          const pct = Math.min(100, Math.round((stageApplicants.length / target) * 100));
          return (
            <div
              key={stage.key}
              className={`flex min-h-[300px] flex-col rounded-xl border border-slate-200 border-t-4 bg-slate-50/40 ${stage.accent}`}
            >
              <div className="border-b border-slate-100 px-3 py-2">
                <div className="flex items-baseline justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-700">{stage.label}</div>
                  <div className="text-xs font-medium text-slate-900">
                    {stageApplicants.length}
                    <span className="text-[10px] text-slate-400"> / {target}</span>
                  </div>
                </div>
                <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full bg-slate-400 transition-all" style={{ width: `${pct}%` }} />
                </div>
              </div>
              <div className="flex-1 space-y-1.5 overflow-y-auto p-2">
                {stageApplicants.length === 0 && (
                  <div className="py-6 text-center text-[10px] text-slate-400">Empty</div>
                )}
                {stageApplicants.map((a) => (
                  <ApplicantCard
                    key={a.id}
                    applicant={a}
                    hasNote={!!overrides.applicantNotes[a.id]}
                    onAdvance={() => {
                      const idx = STAGES.findIndex((s) => s.key === a.stage);
                      if (idx < STAGES.length - 1) {
                        setApplicantStage(a.id, STAGES[idx + 1].key);
                      }
                    }}
                    onRetreat={() => {
                      const idx = STAGES.findIndex((s) => s.key === a.stage);
                      if (idx > 0) {
                        setApplicantStage(a.id, STAGES[idx - 1].key);
                      }
                    }}
                    onRemove={() => removeApplicant(a.id)}
                    onOpen={() => setOpenApplicantId(a.id)}
                    canAdvance={STAGES.findIndex((s) => s.key === a.stage) < STAGES.length - 1}
                    canRetreat={STAGES.findIndex((s) => s.key === a.stage) > 0}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
      {openApplicantId && (
        <ApplicantDetailModal applicantId={openApplicantId} onClose={() => setOpenApplicantId(null)} />
      )}
    </div>
  );
}

function ApplicantCard({
  applicant,
  hasNote,
  onAdvance,
  onRetreat,
  onRemove,
  onOpen,
  canAdvance,
  canRetreat,
}: {
  applicant: Applicant;
  hasNote: boolean;
  onAdvance: () => void;
  onRetreat: () => void;
  onRemove: () => void;
  onOpen: () => void;
  canAdvance: boolean;
  canRetreat: boolean;
}) {
  const role = ROLES.find((r) => r.key === applicant.role)!;
  return (
    <div className="rounded-md border border-slate-200 bg-white px-2 py-1.5 shadow-sm">
      <button onClick={onOpen} className="block w-full text-left">
        <div className="flex items-start justify-between gap-1">
          <div className="min-w-0">
            <div className="truncate text-xs font-medium text-slate-900">
              {applicant.name}
              {hasNote && <span className="ml-1 text-violet-500" title="Has notes">●</span>}
            </div>
            <div className="text-[10px] text-slate-500">{applicant.institution}</div>
          </div>
          <span className={`flex-shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wider ${role.chip}`}>
            {role.label[0]}
          </span>
        </div>
      </button>
      <div className="mt-1.5 flex items-center justify-between text-[10px]">
        <div className="flex gap-1">
          <button
            onClick={onRetreat}
            disabled={!canRetreat}
            className="rounded px-1.5 py-0.5 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
            aria-label="Move back"
          >
            ◀
          </button>
          <button
            onClick={onAdvance}
            disabled={!canAdvance}
            className="rounded px-1.5 py-0.5 text-slate-500 hover:bg-slate-100 disabled:opacity-30"
            aria-label="Advance"
          >
            ▶
          </button>
        </div>
        <button
          onClick={onRemove}
          className="rounded px-1.5 py-0.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
          aria-label="Remove applicant"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
