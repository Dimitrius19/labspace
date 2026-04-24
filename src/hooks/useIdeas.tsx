import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { useLocalStorage } from "./useLocalStorage";
import type {
  Idea,
  Stage,
  FilterState,
  LocalOverrides,
} from "../types";

interface UseIdeasReturn {
  ideas: Idea[];
  filtered: Idea[];
  filters: FilterState;
  setFilter: (key: keyof FilterState, value: string | null) => void;
  clearFilters: () => void;
  updateStage: (id: string, stage: Stage) => void;
  updateNotes: (id: string, notes: string) => void;
  getIdea: (id: string) => Idea | undefined;
}

const IdeasContext = createContext<UseIdeasReturn | null>(null);

export function IdeasProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useLocalStorage<LocalOverrides>(
    "labspace-overrides",
    {}
  );
  const [filters, setFilters] = useState<FilterState>({
    stage: null,
    market: null,
    tags: [],
    search: "",
  });
  const [staticIdeas, setStaticIdeas] = useState<Idea[]>([]);

  useEffect(() => {
    let cancelled = false;
    import("../data/ideas").then((mod) => {
      if (!cancelled) setStaticIdeas(mod.ideas);
    });
    return () => { cancelled = true; };
  }, []);

  const ideas = useMemo<Idea[]>(
    () =>
      staticIdeas.map((idea) => {
        const override = overrides[idea.id];
        if (!override) return idea;
        return {
          ...idea,
          stage: override.stage ?? idea.stage,
          notes: override.notes ?? idea.notes,
        };
      }),
    [staticIdeas, overrides]
  );

  const filtered = useMemo(() => {
    let result = ideas;

    if (filters.stage) {
      result = result.filter((i) => i.stage === filters.stage);
    }
    if (filters.market) {
      result = result.filter((i) => i.primaryMarket === filters.market);
    }
    if (filters.tags.length > 0) {
      result = result.filter((i) =>
        filters.tags.every((t) => i.tags.includes(t))
      );
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.oneLiner.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    return result;
  }, [ideas, filters]);

  // Toggle semantics for tags: passing a tag toggles it in/out of the filter
  const setFilter = useCallback(
    (key: keyof FilterState, value: string | null) => {
      setFilters((prev) => {
        if (key === "tags") {
          if (!value) return { ...prev, tags: [] };
          const tags = prev.tags.includes(value)
            ? prev.tags.filter((t) => t !== value)
            : [...prev.tags, value];
          return { ...prev, tags };
        }
        return { ...prev, [key]: value };
      });
    },
    []
  );

  const clearFilters = useCallback(() => {
    setFilters({ stage: null, market: null, tags: [], search: "" });
  }, []);

  const updateStage = useCallback(
    (id: string, stage: Stage) => {
      setOverrides((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          stage,
          updatedAt: new Date().toISOString(),
        },
      }));
    },
    [setOverrides]
  );

  const updateNotes = useCallback(
    (id: string, notes: string) => {
      setOverrides((prev) => ({
        ...prev,
        [id]: {
          ...prev[id],
          notes,
          updatedAt: new Date().toISOString(),
        },
      }));
    },
    [setOverrides]
  );

  const getIdea = useCallback(
    (id: string) => ideas.find((i) => i.id === id),
    [ideas]
  );

  const value: UseIdeasReturn = {
    ideas,
    filtered,
    filters,
    setFilter,
    clearFilters,
    updateStage,
    updateNotes,
    getIdea,
  };

  return (
    <IdeasContext.Provider value={value}>{children}</IdeasContext.Provider>
  );
}

export function useIdeas(): UseIdeasReturn {
  const ctx = useContext(IdeasContext);
  if (!ctx) throw new Error("useIdeas must be used within IdeasProvider");
  return ctx;
}
