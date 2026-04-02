import { STAGES, type Stage, type Idea } from "../types";
import { useIdeas } from "../hooks/useIdeas";
import { IdeaCard } from "./IdeaCard";
import { EmptyState } from "./EmptyState";

const columnColors: Record<Stage, string> = {
  discovered: "border-slate-400",
  exploring: "border-blue-400",
  evaluating: "border-amber-400",
  committed: "border-violet-400",
  prototyping: "border-emerald-400",
};

export function FunnelBoard({
  onSelectIdea,
}: {
  onSelectIdea: (idea: Idea) => void;
}) {
  const { filtered } = useIdeas();

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">Funnel Board</h1>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGES.map((stage) => {
          const stageIdeas = filtered.filter((i) => i.stage === stage.key);
          return (
            <div
              key={stage.key}
              className={`min-w-[260px] flex-1 rounded-lg border-t-2 ${columnColors[stage.key]} bg-slate-100/50 p-3`}
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold text-slate-700">
                  {stage.label}
                </h3>
                <span className="rounded-full bg-slate-200 px-2 py-0.5 text-xs text-slate-600">
                  {stageIdeas.length}
                </span>
              </div>
              <div className="space-y-3">
                {stageIdeas.length === 0 ? (
                  <EmptyState />
                ) : (
                  stageIdeas.map((idea) => (
                    <IdeaCard
                      key={idea.id}
                      idea={idea}
                      onClick={() => onSelectIdea(idea)}
                    />
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
