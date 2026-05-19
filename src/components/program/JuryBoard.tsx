import { useMemo, useState } from "react";
import { useProgram, juryWeightedScore, type JuryVote } from "../../hooks/useProgram";
import { ideas } from "../../data/ideas";

const VOTE_DIMS: { key: keyof Pick<JuryVote, "pathToLaunch" | "technical" | "commercial" | "audience">; label: string; weight: number }[] = [
  { key: "pathToLaunch", label: "Path-to-launch fit", weight: 2 },
  { key: "technical", label: "Technical execution", weight: 1 },
  { key: "commercial", label: "Commercial insight", weight: 1 },
  { key: "audience", label: "Audience choice", weight: 1 },
];

export function JuryBoard() {
  const { overrides, addJuryVote, updateJuryVote, removeJuryVote, setTeamStatus } = useProgram();
  const teams = overrides.teams ?? [];
  const eligibleTeams = teams.filter((t) => t.status === "demo-day-qualified" || t.status === "studio-offered");

  const [openTeamId, setOpenTeamId] = useState<string | null>(null);
  const [judgeName, setJudgeName] = useState("");
  const [draftVote, setDraftVote] = useState<Omit<JuryVote, "id">>({
    judgeName: "",
    pathToLaunch: 3,
    technical: 3,
    commercial: 3,
    audience: 3,
    notes: "",
  });

  const ranked = useMemo(() => {
    return eligibleTeams
      .map((team) => {
        const votes = overrides.juryVotes?.[team.id] ?? [];
        const avg = votes.length === 0 ? 0 : votes.reduce((s, v) => s + juryWeightedScore(v), 0) / votes.length;
        return { team, votes, avg };
      })
      .sort((a, b) => b.avg - a.avg);
  }, [eligibleTeams, overrides.juryVotes]);

  const submitVote = (teamId: string) => {
    if (!judgeName.trim()) return;
    addJuryVote(teamId, {
      ...draftVote,
      judgeName: judgeName.trim(),
    });
    setDraftVote({
      judgeName: "",
      pathToLaunch: 3,
      technical: 3,
      commercial: 3,
      audience: 3,
      notes: "",
    });
  };

  if (eligibleTeams.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-12 text-center text-sm text-slate-400">
        <div className="font-medium text-slate-600">No teams qualified for Demo Day yet.</div>
        <div className="mt-1 text-[11px]">
          On the Teams tab, mark a team's status as <span className="rounded bg-amber-100 px-1.5 py-0.5 font-medium text-amber-800">DEMO DAY</span> to add it to the jury ballot.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Scoring rubric</div>
        <div className="mt-2 grid grid-cols-1 gap-2 md:grid-cols-4">
          {VOTE_DIMS.map((d) => (
            <div key={d.key} className="rounded-md border border-slate-100 bg-slate-50/50 px-3 py-2">
              <div className="text-xs font-medium text-slate-700">{d.label}</div>
              <div className="text-[10px] text-slate-500">weight × {d.weight}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[11px] text-slate-500">
          Each judge votes 0–5 per dimension. Weighted average is shown per team (out of 5, path-to-launch counts double).
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4">
        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-500">Your name (for new votes)</div>
        <input
          value={judgeName}
          onChange={(e) => setJudgeName(e.target.value)}
          placeholder="e.g. Dimitri, ACEin Director, ThinkBiz Lead…"
          className="mt-1 w-full max-w-md rounded border border-slate-200 px-2 py-1.5 text-sm"
        />
        <div className="mt-1 text-[10px] text-slate-400">Persists for the session; new votes use this name.</div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">Leaderboard ({ranked.length} teams)</h2>
        <div className="space-y-3">
          {ranked.map(({ team, votes, avg }, idx) => {
            const brief = team.briefId ? ideas.find((i) => i.id === team.briefId) : null;
            const expanded = openTeamId === team.id;
            const studioOfferable = idx < 5;
            return (
              <div key={team.id} className={`rounded-xl border bg-white ${idx < 3 ? "border-violet-300" : "border-slate-200"}`}>
                <div className="flex items-center gap-4 px-5 py-3">
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${idx === 0 ? "bg-amber-100 text-amber-700" : idx < 3 ? "bg-violet-100 text-violet-700" : "bg-slate-100 text-slate-500"}`}>
                    #{idx + 1}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-sm font-bold text-slate-900">{team.name}</h3>
                      {brief && <span className="text-xs text-slate-500">· {brief.title}</span>}
                      {team.status === "studio-offered" && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-700">
                          studio offer extended
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[11px] text-slate-500">
                      {votes.length} {votes.length === 1 ? "vote" : "votes"} · {team.memberIds.length} members
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-3">
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${avg >= 4 ? "text-emerald-700" : avg >= 3 ? "text-amber-700" : "text-slate-600"}`}>
                        {votes.length === 0 ? "—" : avg.toFixed(2)}
                      </div>
                      <div className="text-[10px] text-slate-400">avg / 5</div>
                    </div>
                    {studioOfferable && team.status !== "studio-offered" && votes.length > 0 && (
                      <button
                        onClick={() => setTeamStatus(team.id, "studio-offered")}
                        className="rounded-full bg-emerald-600 px-3 py-1.5 text-[11px] font-semibold text-white hover:bg-emerald-700"
                      >
                        Extend studio offer
                      </button>
                    )}
                    <button
                      onClick={() => setOpenTeamId(expanded ? null : team.id)}
                      className="rounded border border-slate-200 px-2 py-1 text-[11px] text-slate-700 hover:bg-slate-50"
                    >
                      {expanded ? "Hide" : `${votes.length === 0 ? "Add vote" : "Votes"}`}
                    </button>
                  </div>
                </div>

                {expanded && (
                  <div className="border-t border-slate-100 bg-slate-50/40 px-5 py-4">
                    <div className="space-y-2">
                      {votes.map((v) => (
                        <VoteRow
                          key={v.id}
                          vote={v}
                          onUpdate={(patch) => updateJuryVote(team.id, v.id, patch)}
                          onRemove={() => removeJuryVote(team.id, v.id)}
                        />
                      ))}
                      {votes.length === 0 && <div className="text-xs text-slate-400">No votes yet — be the first.</div>}
                    </div>

                    <div className="mt-4 rounded-md border border-slate-200 bg-white p-3">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Cast a new vote</div>
                      <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {VOTE_DIMS.map((dim) => (
                          <div key={dim.key} className="flex items-center justify-between">
                            <div className="text-xs font-medium text-slate-700">
                              {dim.label} <span className="text-[10px] text-slate-400">×{dim.weight}</span>
                            </div>
                            <div className="flex gap-0.5">
                              {[0, 1, 2, 3, 4, 5].map((n) => (
                                <button
                                  key={n}
                                  onClick={() => setDraftVote((d) => ({ ...d, [dim.key]: n }))}
                                  className={`h-6 w-6 rounded text-[11px] font-semibold transition-colors ${
                                    draftVote[dim.key] === n ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                                  }`}
                                >
                                  {n}
                                </button>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <textarea
                        value={draftVote.notes ?? ""}
                        onChange={(e) => setDraftVote((d) => ({ ...d, notes: e.target.value }))}
                        rows={2}
                        placeholder="Notes (optional)"
                        className="mt-3 w-full rounded border border-slate-200 px-2 py-1.5 text-xs"
                      />
                      <div className="mt-2 flex items-center justify-between">
                        <div className="text-[11px] text-slate-500">
                          Weighted: <span className="font-bold text-slate-900">{juryWeightedScore(draftVote as JuryVote).toFixed(2)}</span> / 5
                        </div>
                        <button
                          onClick={() => submitVote(team.id)}
                          disabled={!judgeName.trim()}
                          className="rounded bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 disabled:opacity-50"
                        >
                          Submit vote
                        </button>
                      </div>
                      {!judgeName.trim() && (
                        <div className="mt-1 text-right text-[10px] text-amber-600">Add your name above first.</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function VoteRow({ vote, onUpdate, onRemove }: { vote: JuryVote; onUpdate: (patch: Partial<JuryVote>) => void; onRemove: () => void }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white px-3 py-2">
      <div className="flex items-baseline justify-between gap-2">
        <div className="text-xs font-medium text-slate-900">{vote.judgeName}</div>
        <div className="flex items-baseline gap-3">
          <span className="text-[11px] text-slate-500">
            weighted <span className="font-bold text-slate-900">{juryWeightedScore(vote).toFixed(2)}</span>
          </span>
          <button
            onClick={onRemove}
            className="rounded p-0.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600"
            aria-label="Remove vote"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="mt-1 grid grid-cols-2 gap-2 text-[11px] md:grid-cols-4">
        {VOTE_DIMS.map((dim) => (
          <div key={dim.key} className="flex items-center gap-1">
            <span className="text-slate-500">{dim.label.split(" ")[0]}:</span>
            <input
              type="number"
              min={0}
              max={5}
              value={vote[dim.key]}
              onChange={(e) => onUpdate({ [dim.key]: Math.max(0, Math.min(5, parseInt(e.target.value || "0", 10))) })}
              className="w-10 rounded border border-slate-200 px-1 py-0.5 text-xs"
            />
          </div>
        ))}
      </div>
      {vote.notes && <div className="mt-1 text-[11px] text-slate-500">{vote.notes}</div>}
    </div>
  );
}
