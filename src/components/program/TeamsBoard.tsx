import { useState, useMemo } from "react";
import { useProgram, type TeamStatus, type Team, type Applicant, type Mentor } from "../../hooks/useProgram";
import { ideas } from "../../data/ideas";

const TEAM_STATUS_STYLE: Record<TeamStatus, { label: string; chip: string }> = {
  forming: { label: "Forming", chip: "bg-slate-100 text-slate-600" },
  building: { label: "Building", chip: "bg-blue-50 text-blue-700" },
  killed: { label: "Killed", chip: "bg-rose-50 text-rose-700" },
  "demo-day-qualified": { label: "Demo Day", chip: "bg-amber-50 text-amber-700" },
  "studio-offered": { label: "Studio offer", chip: "bg-emerald-50 text-emerald-700" },
};

const TARGET_TEAMS = 20;
const MIN_TEAM_SIZE = 3;
const MAX_TEAM_SIZE = 5;

export function TeamsBoard() {
  const {
    overrides,
    addTeam,
    updateTeam,
    removeTeam,
    setTeamStatus,
    assignMember,
    unassignMember,
    assignMentorToTeam,
    unassignMentorFromTeam,
  } = useProgram();

  const teams = overrides.teams ?? [];
  const mentors = overrides.mentors ?? [];

  const acceptedApplicants = useMemo(
    () =>
      overrides.applicants.filter((a) =>
        ["accepted", "team-formed", "midpoint", "demo-day"].includes(a.stage)
      ),
    [overrides.applicants]
  );

  const selectedBriefIdeas = useMemo(
    () => ideas.filter((i) => overrides.selectedBriefIds.includes(i.id)),
    [overrides.selectedBriefIds]
  );

  const assignedApplicantIds = useMemo(
    () => new Set(teams.flatMap((t) => t.memberIds)),
    [teams]
  );

  const unassignedApplicants = acceptedApplicants.filter((a) => !assignedApplicantIds.has(a.id));

  const [showAdd, setShowAdd] = useState(false);
  const [draft, setDraft] = useState({ name: "", briefId: "" });

  const submit = () => {
    if (!draft.name.trim()) return;
    addTeam({ name: draft.name.trim(), briefId: draft.briefId || null });
    setDraft({ name: "", briefId: "" });
    setShowAdd(false);
  };

  const counts = {
    forming: teams.filter((t) => t.status === "forming").length,
    building: teams.filter((t) => t.status === "building").length,
    demoDay: teams.filter((t) => t.status === "demo-day-qualified").length,
    studioOffer: teams.filter((t) => t.status === "studio-offered").length,
  };

  return (
    <div className="space-y-6">
      <section className="grid grid-cols-2 gap-3 md:grid-cols-5">
        <Stat label="Teams" value={`${teams.length}/${TARGET_TEAMS}`} sub="target" />
        <Stat label="Forming" value={String(counts.forming)} sub="not yet kicked off" />
        <Stat label="Building" value={String(counts.building)} sub="in 6-week sprint" />
        <Stat label="Demo Day" value={String(counts.demoDay)} sub="qualified to pitch" />
        <Stat label="Studio offers" value={String(counts.studioOffer)} sub="term sheets" />
      </section>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-xs text-slate-500">
          {acceptedApplicants.length} accepted applicants · {unassignedApplicants.length} unassigned · {selectedBriefIdeas.length} briefs available
        </div>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="rounded-md bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800"
          disabled={selectedBriefIdeas.length === 0 && !showAdd}
          title={selectedBriefIdeas.length === 0 ? "Select briefs first" : ""}
        >
          {showAdd ? "Cancel" : "+ Form team"}
        </button>
      </div>

      {showAdd && (
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_2fr_auto]">
            <input
              value={draft.name}
              onChange={(e) => setDraft({ ...draft, name: e.target.value })}
              placeholder="Team name (e.g. Hera AI)"
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            />
            <select
              value={draft.briefId}
              onChange={(e) => setDraft({ ...draft, briefId: e.target.value })}
              className="rounded border border-slate-200 px-2 py-1.5 text-sm"
            >
              <option value="">— No brief yet (open submission / TBD) —</option>
              {selectedBriefIdeas.map((i) => (
                <option key={i.id} value={i.id}>{i.title} · {i.ycCategory}</option>
              ))}
            </select>
            <button
              onClick={submit}
              className="rounded bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Create
            </button>
          </div>
        </div>
      )}

      {teams.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center text-sm text-slate-400">
          No teams yet. After kickoff, form teams of 3–5 mixing hackers, hustlers, designers and domain experts.
        </div>
      ) : (
        <div className="space-y-3">
          {teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              acceptedApplicants={acceptedApplicants}
              unassignedApplicants={unassignedApplicants}
              mentors={mentors}
              brief={team.briefId ? ideas.find((i) => i.id === team.briefId) ?? null : null}
              availableBriefs={selectedBriefIdeas}
              onUpdate={(patch) => updateTeam(team.id, patch)}
              onRemove={() => removeTeam(team.id)}
              onStatus={(s) => setTeamStatus(team.id, s)}
              onAddMember={(aid) => assignMember(team.id, aid)}
              onRemoveMember={(aid) => unassignMember(team.id, aid)}
              onAddMentor={(mid) => assignMentorToTeam(team.id, mid)}
              onRemoveMentor={(mid) => unassignMentorFromTeam(team.id, mid)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function rankMentorsForBrief(
  mentors: Mentor[],
  brief: { id: string; title: string; ycCategory: string } | null
): { mentor: Mentor; matchScore: number }[] {
  if (!brief) return mentors.map((m) => ({ mentor: m, matchScore: 0 }));
  const ideaFull = ideas.find((i) => i.id === brief.id);
  const haystack = [
    brief.title.toLowerCase(),
    brief.ycCategory.toLowerCase(),
    ...(ideaFull?.tags ?? []).map((t) => t.toLowerCase()),
  ];
  const score = (mentor: Mentor): number => {
    const tokens = mentor.specialty.toLowerCase().split(/[\s/,&·-]+/).filter(Boolean);
    let s = 0;
    for (const tok of tokens) {
      if (tok.length < 3) continue;
      for (const h of haystack) {
        if (h.includes(tok)) s += 1;
      }
    }
    return s;
  };
  return mentors
    .map((m) => ({ mentor: m, matchScore: score(m) }))
    .sort((a, b) => b.matchScore - a.matchScore);
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">{label}</div>
      <div className="mt-1 text-2xl font-bold text-slate-900">{value}</div>
      <div className="text-[11px] text-slate-500">{sub}</div>
    </div>
  );
}

interface TeamCardProps {
  team: Team;
  acceptedApplicants: Applicant[];
  unassignedApplicants: Applicant[];
  mentors: Mentor[];
  brief: { id: string; title: string; ycCategory: string; oneLiner: string } | null;
  availableBriefs: { id: string; title: string; ycCategory: string }[];
  onUpdate: (patch: Partial<Team>) => void;
  onRemove: () => void;
  onStatus: (s: TeamStatus) => void;
  onAddMember: (aid: string) => void;
  onRemoveMember: (aid: string) => void;
  onAddMentor: (mid: string) => void;
  onRemoveMentor: (mid: string) => void;
}

function TeamCard(props: TeamCardProps) {
  const { team, mentors, brief, availableBriefs } = props;
  const teamMembers = team.memberIds
    .map((id) => props.acceptedApplicants.find((a) => a.id === id))
    .filter((a): a is Applicant => !!a);
  const teamMentors = team.mentorIds
    .map((id) => mentors.find((m) => m.id === id))
    .filter((m): m is Mentor => !!m);

  const sizeOk = teamMembers.length >= MIN_TEAM_SIZE && teamMembers.length <= MAX_TEAM_SIZE;
  const sizeWarn = teamMembers.length > MAX_TEAM_SIZE;
  const roles = new Set(teamMembers.map((m) => m.role));
  const balanced = roles.has("hacker") && roles.has("hustler");

  const style = TEAM_STATUS_STYLE[team.status];

  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-100 px-5 py-3">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-2">
            <h3 className="text-base font-bold text-slate-900">{team.name}</h3>
            <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${style.chip}`}>
              {style.label}
            </span>
            <span className={`text-[11px] font-medium ${sizeWarn ? "text-rose-600" : sizeOk ? "text-emerald-600" : "text-amber-600"}`}>
              {teamMembers.length} / {MIN_TEAM_SIZE}–{MAX_TEAM_SIZE} members{balanced ? " · balanced" : teamMembers.length > 0 ? " · needs balance" : ""}
            </span>
          </div>
          {brief ? (
            <div className="mt-0.5 text-xs text-slate-600">
              Brief: <span className="font-medium text-violet-700">{brief.title}</span> · {brief.ycCategory}
            </div>
          ) : (
            <div className="mt-0.5 text-xs text-slate-400 italic">No brief assigned yet (open submission / TBD)</div>
          )}
        </div>
        <div className="flex flex-shrink-0 gap-1">
          {(Object.keys(TEAM_STATUS_STYLE) as TeamStatus[]).map((s) => (
            <button
              key={s}
              onClick={() => props.onStatus(s)}
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider transition-colors ${
                team.status === s ? TEAM_STATUS_STYLE[s].chip + " ring-1 ring-current/20" : "bg-slate-50 text-slate-400 hover:bg-slate-100"
              }`}
            >
              {TEAM_STATUS_STYLE[s].label}
            </button>
          ))}
          <button
            onClick={props.onRemove}
            className="rounded p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
            aria-label="Remove team"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 px-5 py-4 md:grid-cols-2">
        <div>
          <div className="mb-2 flex items-baseline justify-between">
            <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Members</div>
            {team.briefId !== "" && availableBriefs.length > 0 && (
              <select
                value={team.briefId ?? ""}
                onChange={(e) => props.onUpdate({ briefId: e.target.value || null })}
                className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px]"
              >
                <option value="">— no brief —</option>
                {availableBriefs.map((b) => (
                  <option key={b.id} value={b.id}>{b.title}</option>
                ))}
              </select>
            )}
          </div>
          <div className="space-y-1">
            {teamMembers.length === 0 && (
              <div className="text-xs text-slate-400">No members yet.</div>
            )}
            {teamMembers.map((m) => (
              <div key={m.id} className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-2 py-1 text-xs">
                <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold uppercase text-slate-600">
                  {m.role[0]}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-slate-900">{m.name}</div>
                  <div className="text-[10px] text-slate-500">{m.institution} · {m.role}</div>
                </div>
                <button
                  onClick={() => props.onRemoveMember(m.id)}
                  className="rounded p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                  aria-label="Remove member"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {props.unassignedApplicants.length > 0 && (
            <select
              value=""
              onChange={(e) => {
                if (e.target.value) props.onAddMember(e.target.value);
              }}
              className="mt-2 w-full rounded border border-slate-200 px-2 py-1 text-xs"
            >
              <option value="">+ Add member from accepted applicants…</option>
              {props.unassignedApplicants.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name} ({a.institution} · {a.role})
                </option>
              ))}
            </select>
          )}
        </div>

        <div>
          <div className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-500">Mentors</div>
          <div className="space-y-1">
            {teamMentors.length === 0 && (
              <div className="text-xs text-slate-400">No mentors assigned.</div>
            )}
            {teamMentors.map((m) => (
              <div key={m.id} className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50/50 px-2 py-1 text-xs">
                <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-medium uppercase ${m.kind === "advisor" ? "bg-violet-100 text-violet-700" : "bg-amber-100 text-amber-700"}`}>
                  {m.kind === "advisor" ? "A" : "S"}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="font-medium text-slate-900">{m.name}</div>
                  <div className="text-[10px] text-slate-500">{m.specialty}</div>
                </div>
                <button
                  onClick={() => props.onRemoveMentor(m.id)}
                  className="rounded p-1 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
                  aria-label="Remove mentor"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {mentors.length > 0 && (
            <select
              value=""
              onChange={(e) => {
                if (e.target.value) props.onAddMentor(e.target.value);
              }}
              className="mt-2 w-full rounded border border-slate-200 px-2 py-1 text-xs"
            >
              <option value="">+ Assign mentor… (sorted by specialty match)</option>
              {rankMentorsForBrief(
                mentors.filter((m) => !team.mentorIds.includes(m.id)),
                brief
              ).map(({ mentor: m, matchScore }) => (
                <option key={m.id} value={m.id}>
                  {matchScore > 0 ? "★ " : ""}
                  {m.name} ({m.kind === "advisor" ? "Advisor" : "SME"} · {m.specialty})
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
}
