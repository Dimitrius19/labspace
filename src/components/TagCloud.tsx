import { useIdeas } from "../hooks/useIdeas";
import { getTagCounts } from "../lib/utils";

export function TagCloud() {
  const { ideas, filters, setFilter } = useIdeas();
  const tags = getTagCounts(ideas).slice(0, 15);

  return (
    <div className="border-t border-slate-700 px-3 py-4">
      <div className="mb-2 px-3 text-xs font-medium uppercase tracking-wider text-slate-500">
        Tags
      </div>
      <div className="flex flex-wrap gap-1 px-3">
        {tags.map((t) => (
          <button
            key={t.tag}
            onClick={() => setFilter("tags", t.tag)}
            className={`rounded-full px-2 py-0.5 text-xs transition-colors ${
              filters.tags.includes(t.tag)
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            {t.tag}
          </button>
        ))}
      </div>
    </div>
  );
}
