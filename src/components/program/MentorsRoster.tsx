import { useState } from "react";
import { useProgram, type MentorKind, type Mentor } from "../../hooks/useProgram";

const KIND_STYLE: Record<MentorKind, { label: string; chip: string }> = {
  advisor: { label: "Advisor", chip: "bg-violet-50 text-violet-700" },
  sme: { label: "SME", chip: "bg-amber-50 text-amber-700" },
};

const TARGET_MENTORS = 15;

export function MentorsRoster() {
  const { overrides, addMentor, updateMentor, removeMentor } = useProgram();
  const mentors = overrides.mentors ?? [];
  const [showAdd, setShowAdd] = useState(false);
  const [draft, setDraft] = useState<{ name: string; kind: MentorKind; specialty: string; capacity: number; email: string }>({
    name: "",
    kind: "advisor",
    specialty: "",
    capacity: 2,
    email: "",
  });

  const submit = () => {
    if (!draft.name.trim()) return;
    addMentor({
      name: draft.name.trim(),
      kind: draft.kind,
      specialty: draft.specialty.trim() || "General",
      capacity: Math.max(1, Math.min(5, draft.capacity)),
      email: draft.email.trim() || undefined,
    });
    setDraft({ name: "", kind: draft.kind, specialty: "", capacity: 2, email: "" });
    setShowAdd(false);
  };

  const advisors = mentors.filter((m) => m.kind === "advisor").length;
  const smes = mentors.filter((m) => m.kind === "sme").length;
  const totalCapacity = mentors.reduce((sum, m) => sum + m.capacity, 0);
  const assignedCount = (overrides.teams ?? []).reduce((sum, t) => sum + t.mentorIds.length, 0);

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Mentors" value={String(mentors.length)} target={`target ≥ ${TARGET_MENTORS}`} />
        <Stat label="Advisors" value={String(advisors)} target="senior, T-Life partner level" />
        <Stat label="SMEs" value={String(smes)} target="domain experts" />
        <Stat label="Capacity used" value={`${assignedCount}/${totalCapacity}`} target="team slots filled" />
      </section>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-slate-500">
          Each mentor commits to <span className="font-medium text-slate-700">1 hr/week per team</span> for the 6-week build sprint.
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
        >
          {showAdd ? "Cancel" : "+ Add mentor"}
        </button>
      </div>

      {showAdd && (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-5">
            <input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              placeholder="Full name"
              className="rounded border border-slate-200 px-2 py-1.5 text-sm md:col-span-2"
            />
            <select
              value={draft.kind}
              onChange={(e) => setDraft({ ...draft, kind: e.target.value as MentorKind })}
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            >
              <option value="advisor">Advisor</option>
              <option value="sme">SME</option>
            </select>
            <input
              value={draft.specialty}
              onChange={(e) => setDraft({ ...draft, specialty: e.target.value })}
              placeholder="Specialty"
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            />
            <input
              type="number"
              min={1}
              max={5}
              value={draft.capacity}
              onChange={(e) => setDraft({ ...draft, capacity: parseInt(e.target.value || "1", 10) })}
              placeholder="Capacity"
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            />
            <input
              value={draft.email}
              onChange={(e) => setDraft({ ...draft, email: e.target.value })}
              placeholder="email (optional)"
              className="rounded border border-slate-200 px-2 py-1.5 text-sm md:col-span-4"
            />
            <button
              onClick={submit}
              className="rounded bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Add
            </button>
          </div>
        </div>
      )}

      {mentors.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center text-sm text-slate-400">
          No mentors yet. Add T-Life partners (advisors) and industry experts (SMEs).
        </div>
      ) : (
        <div className="space-y-2">
          {mentors.map((m) => (
            <MentorRow
              key={m.id}
              mentor={m}
              assigned={(overrides.teams ?? []).filter((t) => t.mentorIds.includes(m.id)).length}
              onUpdate={(patch) => updateMentor(m.id, patch)}
              onRemove={() => removeMentor(m.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Stat({ label, value, target }: { label: string; value: string; target: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-[11px] text-slate-500">{target}</div>
    </div>
  );
}

function MentorRow({
  mentor,
  assigned,
  onUpdate,
  onRemove,
}: {
  mentor: Mentor;
  assigned: number;
  onUpdate: (patch: Partial<Omit<Mentor, "id">>) => void;
  onRemove: () => void;
}) {
  const style = KIND_STYLE[mentor.kind];
  const overloaded = assigned > mentor.capacity;
  const pct = Math.min(100, Math.round((assigned / Math.max(1, mentor.capacity)) * 100));

  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <div className="font-semibold text-slate-900">{mentor.name}</div>
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${style.chip}`}>
            {style.label}
          </span>
          <span className="text-xs text-slate-500">{mentor.specialty}</span>
        </div>
        {mentor.email && (
          <div className="mt-0.5 text-[11px] text-slate-500">{mentor.email}</div>
        )}
      </div>
      <div className="w-32 flex-shrink-0">
        <div className="flex items-baseline justify-between text-[11px]">
          <span className={overloaded ? "font-medium text-rose-700" : "text-slate-500"}>
            {assigned}/{mentor.capacity} teams
          </span>
        </div>
        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className={`h-full ${overloaded ? "bg-rose-500" : "bg-emerald-500"} transition-all`} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <select
        value={mentor.kind}
        onChange={(e) => onUpdate({ kind: e.target.value as MentorKind })}
        className="rounded border border-slate-200 px-2 py-1 text-xs"
      >
        <option value="advisor">Advisor</option>
        <option value="sme">SME</option>
      </select>
      <input
        type="number"
        min={1}
        max={5}
        value={mentor.capacity}
        onChange={(e) => onUpdate({ capacity: Math.max(1, Math.min(5, parseInt(e.target.value || "1", 10))) })}
        className="w-14 rounded border border-slate-200 px-2 py-1 text-xs"
      />
      <button
        onClick={onRemove}
        className="rounded p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
        aria-label="Remove mentor"
      >
        ✕
      </button>
    </div>
  );
}
