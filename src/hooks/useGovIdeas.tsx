import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { governmentIdeas as seed } from "../data/governmentIdeas";
import type { GovIdea, GovOverrides, MinistryKey, PitchReady, Verdict } from "../types";

type GovFilterState = {
  ministry: MinistryKey | null;
  verdict: Verdict | null;
  search: string;
};

type Ctx = {
  ideas: GovIdea[];
  filtered: GovIdea[];
  filters: GovFilterState;
  setFilter: <K extends keyof GovFilterState>(key: K, value: GovFilterState[K]) => void;
  clearFilters: () => void;
  overrides: GovOverrides;
  setVerdict: (id: string, verdict: Verdict) => void;
  setPitchReady: (id: string, pitchReady: PitchReady) => void;
  resetIdea: (id: string) => void;
};

const GovIdeasContext = createContext<Ctx | null>(null);

function applyOverride(idea: GovIdea, ov?: GovOverrides[string]): GovIdea {
  if (!ov) return idea;
  return {
    ...idea,
    verdict: ov.verdict ?? idea.verdict,
    pitchReady: ov.pitchReady ?? idea.pitchReady,
  };
}

export function GovIdeasProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useLocalStorage<GovOverrides>("govIdeaOverrides", {});
  const [filters, setFilters] = useState<GovFilterState>({ ministry: null, verdict: null, search: "" });

  const ideas = useMemo(() => seed.map((i) => applyOverride(i, overrides[i.id])), [overrides]);

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase();
    return ideas.filter((i) => {
      if (filters.ministry && i.ministry !== filters.ministry) return false;
      if (filters.verdict && i.verdict !== filters.verdict) return false;
      if (q) {
        const blob = [i.title, i.oneLiner, i.problem, i.tags.join(" "), i.userInsideMinistry].join(" ").toLowerCase();
        if (!blob.includes(q)) return false;
      }
      return true;
    });
  }, [ideas, filters]);

  const setFilter = useCallback(<K extends keyof GovFilterState>(key: K, value: GovFilterState[K]) => {
    setFilters((f) => ({ ...f, [key]: value }));
  }, []);

  const clearFilters = useCallback(() => setFilters({ ministry: null, verdict: null, search: "" }), []);

  const setVerdict = useCallback((id: string, verdict: Verdict) => {
    setOverrides((prev) => ({ ...prev, [id]: { ...prev[id], verdict, updatedAt: new Date().toISOString() } }));
  }, [setOverrides]);

  const setPitchReady = useCallback((id: string, pitchReady: PitchReady) => {
    setOverrides((prev) => ({ ...prev, [id]: { ...prev[id], pitchReady, updatedAt: new Date().toISOString() } }));
  }, [setOverrides]);

  const resetIdea = useCallback((id: string) => {
    setOverrides((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  }, [setOverrides]);

  const value: Ctx = { ideas, filtered, filters, setFilter, clearFilters, overrides, setVerdict, setPitchReady, resetIdea };
  return <GovIdeasContext.Provider value={value}>{children}</GovIdeasContext.Provider>;
}

export function useGovIdeas() {
  const ctx = useContext(GovIdeasContext);
  if (!ctx) throw new Error("useGovIdeas must be used inside GovIdeasProvider");
  return ctx;
}
