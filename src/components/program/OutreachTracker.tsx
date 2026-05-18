import { useState } from "react";
import { useProgram, type OutreachStatus, type ContactStatus } from "../../hooks/useProgram";

const OUTREACH_STATUS_OPTIONS: { key: OutreachStatus; label: string; chip: string; dot: string }[] = [
  { key: "not-started", label: "Not started", chip: "bg-slate-100 text-slate-600", dot: "bg-slate-300" },
  { key: "intro-sent", label: "Intro sent", chip: "bg-blue-50 text-blue-700", dot: "bg-blue-500" },
  { key: "in-talks", label: "In talks", chip: "bg-amber-50 text-amber-700", dot: "bg-amber-500" },
  { key: "signed", label: "Signed", chip: "bg-emerald-50 text-emerald-700", dot: "bg-emerald-500" },
];

const CONTACT_STATUS_OPTIONS: { key: ContactStatus; label: string; chip: string }[] = [
  { key: "to-contact", label: "to contact", chip: "bg-slate-100 text-slate-600" },
  { key: "intro-sent", label: "intro sent", chip: "bg-blue-50 text-blue-700" },
  { key: "in-talks", label: "in talks", chip: "bg-amber-50 text-amber-700" },
  { key: "confirmed", label: "confirmed", chip: "bg-emerald-50 text-emerald-700" },
];

export function OutreachTracker() {
  const { program, overrides, setOutreachStatus, addContact, updateContact, removeContact, addLogEntry, removeLogEntry } = useProgram();

  const totals = OUTREACH_STATUS_OPTIONS.map((opt) => ({
    ...opt,
    count: program.talentPools.filter((p) => (overrides.outreach[p.institutionId]?.status ?? "not-started") === opt.key).length,
  }));

  return (
    <div className="space-y-6">
      {/* Status summary */}
      <div className="grid grid-cols-4 gap-3">
        {totals.map((t) => (
          <div key={t.key} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
              <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{t.label}</span>
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900">{t.count}</div>
            <div className="text-[11px] text-slate-500">of {program.talentPools.length}</div>
          </div>
        ))}
      </div>

      {/* Per-institution cards */}
      <div className="space-y-4">
        {program.talentPools.map((pool) => {
          const state = overrides.outreach[pool.institutionId] ?? { status: "not-started" as OutreachStatus, contacts: [], log: [] };
          return (
            <InstitutionCard
              key={pool.institutionId}
              poolId={pool.institutionId}
              shortName={pool.shortName}
              fullName={pool.fullName}
              primaryHub={pool.primaryHub}
              status={state.status}
              contacts={state.contacts}
              log={state.log}
              onStatusChange={(s) => setOutreachStatus(pool.institutionId, s)}
              onAddContact={(c) => addContact(pool.institutionId, c)}
              onUpdateContact={(id, patch) => updateContact(pool.institutionId, id, patch)}
              onRemoveContact={(id) => removeContact(pool.institutionId, id)}
              onAddLog={(note) => addLogEntry(pool.institutionId, note)}
              onRemoveLog={(id) => removeLogEntry(pool.institutionId, id)}
            />
          );
        })}
      </div>
    </div>
  );
}

interface InstitutionCardProps {
  poolId: string;
  shortName: string;
  fullName: string;
  primaryHub: string;
  status: OutreachStatus;
  contacts: { id: string; name: string; role: string; email?: string; status: ContactStatus }[];
  log: { id: string; date: string; note: string }[];
  onStatusChange: (s: OutreachStatus) => void;
  onAddContact: (c: { name: string; role: string; email?: string; status: ContactStatus }) => void;
  onUpdateContact: (id: string, patch: Partial<{ name: string; role: string; email: string; status: ContactStatus }>) => void;
  onRemoveContact: (id: string) => void;
  onAddLog: (note: string) => void;
  onRemoveLog: (id: string) => void;
}

function InstitutionCard(props: InstitutionCardProps) {
  const [newContact, setNewContact] = useState({ name: "", role: "", email: "" });
  const [logDraft, setLogDraft] = useState("");

  const submitContact = () => {
    if (!newContact.name.trim()) return;
    props.onAddContact({
      name: newContact.name.trim(),
      role: newContact.role.trim() || "Contact",
      email: newContact.email.trim() || undefined,
      status: "to-contact",
    });
    setNewContact({ name: "", role: "", email: "" });
  };

  const submitLog = () => {
    if (!logDraft.trim()) return;
    props.onAddLog(logDraft.trim());
    setLogDraft("");
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <div className="flex items-baseline justify-between gap-2 border-b border-slate-100 px-5 py-4">
        <div>
          <h3 className="text-base font-bold text-slate-900">{props.shortName}</h3>
          <div className="text-[11px] text-slate-500">{props.fullName} · primary hub: <span className="font-medium text-violet-700">{props.primaryHub}</span></div>
        </div>
        <div className="flex gap-1">
          {OUTREACH_STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => props.onStatusChange(opt.key)}
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors ${
                props.status === opt.key ? opt.chip + " ring-1 ring-current/20" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 py-4 md:grid-cols-2">
        <div>
          <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-500">Contacts</div>
          <div className="space-y-1.5">
            {props.contacts.length === 0 && (
              <div className="text-xs text-slate-400">No contacts yet.</div>
            )}
            {props.contacts.map((c) => (
              <div key={c.id} className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-2 py-1.5 text-xs">
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-slate-900">{c.name}</div>
                  <div className="text-[11px] text-slate-500">{c.role}{c.email ? ` · ${c.email}` : ""}</div>
                </div>
                <select
                  value={c.status}
                  onChange={(e) => props.onUpdateContact(c.id, { status: e.target.value as ContactStatus })}
                  className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[10px]"
                >
                  {CONTACT_STATUS_OPTIONS.map((opt) => (
                    <option key={opt.key} value={opt.key}>{opt.label}</option>
                  ))}
                </select>
                <button
                  onClick={() => props.onRemoveContact(c.id)}
                  className="rounded p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                  aria-label="Remove contact"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-1.5">
            <input
              value={newContact.name}
              onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              placeholder="Name"
              className="w-24 rounded border border-slate-200 px-2 py-1 text-xs"
            />
            <input
              value={newContact.role}
              onChange={(e) => setNewContact({ ...newContact, role: e.target.value })}
              placeholder="Role"
              className="w-24 rounded border border-slate-200 px-2 py-1 text-xs"
            />
            <input
              value={newContact.email}
              onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
              placeholder="email (opt.)"
              className="flex-1 rounded border border-slate-200 px-2 py-1 text-xs"
            />
            <button
              onClick={submitContact}
              className="rounded bg-slate-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-slate-800"
            >
              + Add
            </button>
          </div>
        </div>

        <div>
          <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-500">Outreach log</div>
          <div className="max-h-44 space-y-1.5 overflow-y-auto">
            {props.log.length === 0 && (
              <div className="text-xs text-slate-400">No entries yet.</div>
            )}
            {props.log.map((entry) => (
              <div key={entry.id} className="flex items-start gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-2 py-1.5 text-xs">
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] text-slate-400">{new Date(entry.date).toLocaleDateString()}</div>
                  <div className="text-slate-700">{entry.note}</div>
                </div>
                <button
                  onClick={() => props.onRemoveLog(entry.id)}
                  className="rounded p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                  aria-label="Remove log entry"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          <div className="mt-3 flex gap-1.5">
            <input
              value={logDraft}
              onChange={(e) => setLogDraft(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submitLog()}
              placeholder="e.g. emailed ACEin director re: MoU"
              className="flex-1 rounded border border-slate-200 px-2 py-1 text-xs"
            />
            <button
              onClick={submitLog}
              className="rounded bg-slate-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-slate-800"
            >
              + Log
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
