import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { ventures as staticVentures } from "../data/ventures";
import { useLocalStorage } from "./useLocalStorage";
import type {
  Venture,
  VentureStage,
  Health,
  VentureOverrides,
} from "../types";

interface UseVenturesReturn {
  ventures: Venture[];
  getVenture: (id: string) => Venture | undefined;
  toggleTask: (ventureId: string, taskId: string) => void;
  toggleMilestone: (ventureId: string, milestoneId: string) => void;
  updateStage: (ventureId: string, stage: VentureStage) => void;
  updateHealth: (ventureId: string, health: Health) => void;
  updateLaunchTarget: (ventureId: string, date: string) => void;
  updateNextAction: (ventureId: string, action: string) => void;
  updateNotes: (ventureId: string, notes: string) => void;
  resetVenture: (ventureId: string) => void;
}

const VenturesContext = createContext<UseVenturesReturn | null>(null);

function applyOverrides(venture: Venture, override: VentureOverrides[string] | undefined): Venture {
  if (!override) return venture;
  return {
    ...venture,
    stage: override.stage ?? venture.stage,
    health: override.health ?? venture.health,
    launchTarget: override.launchTarget ?? venture.launchTarget,
    nextAction: override.nextAction ?? venture.nextAction,
    notes: override.notes ?? venture.notes,
    tasks: venture.tasks.map((t) => ({
      ...t,
      done: override.taskDone?.[t.id] ?? t.done,
    })),
    milestones: venture.milestones.map((m) => ({
      ...m,
      done: override.milestoneDone?.[m.id] ?? m.done,
    })),
  };
}

export function VenturesProvider({ children }: { children: ReactNode }) {
  const [overrides, setOverrides] = useLocalStorage<VentureOverrides>(
    "labspace-ventures",
    {}
  );

  const ventures = useMemo<Venture[]>(
    () => staticVentures.map((v) => applyOverrides(v, overrides[v.id])),
    [overrides]
  );

  const stamp = () => new Date().toISOString();

  const toggleTask = useCallback(
    (ventureId: string, taskId: string) => {
      setOverrides((prev) => {
        const v = staticVentures.find((x) => x.id === ventureId);
        const currentOverride = prev[ventureId] ?? {};
        const defaultDone = v?.tasks.find((t) => t.id === taskId)?.done ?? false;
        const current = currentOverride.taskDone?.[taskId] ?? defaultDone;
        return {
          ...prev,
          [ventureId]: {
            ...currentOverride,
            taskDone: { ...currentOverride.taskDone, [taskId]: !current },
            updatedAt: stamp(),
          },
        };
      });
    },
    [setOverrides]
  );

  const toggleMilestone = useCallback(
    (ventureId: string, milestoneId: string) => {
      setOverrides((prev) => {
        const v = staticVentures.find((x) => x.id === ventureId);
        const currentOverride = prev[ventureId] ?? {};
        const defaultDone =
          v?.milestones.find((m) => m.id === milestoneId)?.done ?? false;
        const current = currentOverride.milestoneDone?.[milestoneId] ?? defaultDone;
        return {
          ...prev,
          [ventureId]: {
            ...currentOverride,
            milestoneDone: {
              ...currentOverride.milestoneDone,
              [milestoneId]: !current,
            },
            updatedAt: stamp(),
          },
        };
      });
    },
    [setOverrides]
  );

  const updateField = useCallback(
    <K extends keyof VentureOverrides[string]>(
      ventureId: string,
      key: K,
      value: VentureOverrides[string][K]
    ) => {
      setOverrides((prev) => ({
        ...prev,
        [ventureId]: {
          ...prev[ventureId],
          [key]: value,
          updatedAt: stamp(),
        },
      }));
    },
    [setOverrides]
  );

  const updateStage = useCallback(
    (id: string, stage: VentureStage) => updateField(id, "stage", stage),
    [updateField]
  );
  const updateHealth = useCallback(
    (id: string, health: Health) => updateField(id, "health", health),
    [updateField]
  );
  const updateLaunchTarget = useCallback(
    (id: string, date: string) => updateField(id, "launchTarget", date),
    [updateField]
  );
  const updateNextAction = useCallback(
    (id: string, action: string) => updateField(id, "nextAction", action),
    [updateField]
  );
  const updateNotes = useCallback(
    (id: string, notes: string) => updateField(id, "notes", notes),
    [updateField]
  );

  const resetVenture = useCallback(
    (id: string) => {
      setOverrides((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    },
    [setOverrides]
  );

  const getVenture = useCallback(
    (id: string) => ventures.find((v) => v.id === id),
    [ventures]
  );

  const value: UseVenturesReturn = {
    ventures,
    getVenture,
    toggleTask,
    toggleMilestone,
    updateStage,
    updateHealth,
    updateLaunchTarget,
    updateNextAction,
    updateNotes,
    resetVenture,
  };

  return (
    <VenturesContext.Provider value={value}>{children}</VenturesContext.Provider>
  );
}

export function useVentures(): UseVenturesReturn {
  const ctx = useContext(VenturesContext);
  if (!ctx) throw new Error("useVentures must be used within VenturesProvider");
  return ctx;
}
