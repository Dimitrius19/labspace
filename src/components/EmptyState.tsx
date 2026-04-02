import { useIdeas } from "../hooks/useIdeas";

export function EmptyState() {
  const { clearFilters, filters } = useIdeas();
  const hasFilters =
    filters.stage || filters.market || filters.tags.length > 0 || filters.search;

  return (
    <div className="py-8 text-center">
      <p className="text-sm text-slate-400">
        {hasFilters ? "No ideas match the current filters." : "No ideas yet."}
      </p>
      {hasFilters && (
        <button
          onClick={clearFilters}
          className="mt-2 text-xs text-blue-500 hover:text-blue-600"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
