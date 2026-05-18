import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { programs as staticPrograms, type Program, type ProgramPhaseStatus } from "../data/programs";
import { useLocalStorage } from "./useLocalStorage";

export type OutreachStatus = "not-started" | "intro-sent" | "in-talks" | "signed";
export type ContactStatus = "to-contact" | "intro-sent" | "in-talks" | "confirmed";
export type ApplicantStage =
  | "applied"
  | "screened"
  | "accepted"
  | "team-formed"
  | "midpoint"
  | "demo-day";
export type ApplicantRole = "hacker" | "hustler" | "designer" | "domain";

export interface OutreachContact {
  id: string;
  name: string;
  role: string;
  email?: string;
  status: ContactStatus;
}

export interface OutreachLogEntry {
  id: string;
  date: string;
  note: string;
}

export interface OutreachState {
  status: OutreachStatus;
  contacts: OutreachContact[];
  log: OutreachLogEntry[];
}

export interface Applicant {
  id: string;
  name: string;
  institution: string;
  role: ApplicantRole;
  stage: ApplicantStage;
  notes?: string;
}

export type MentorKind = "advisor" | "sme";

export interface Mentor {
  id: string;
  name: string;
  kind: MentorKind;
  specialty: string;
  capacity: number;
  email?: string;
}

export type TeamStatus =
  | "forming"
  | "building"
  | "killed"
  | "demo-day-qualified"
  | "studio-offered";

export interface Team {
  id: string;
  name: string;
  briefId: string | null;
  memberIds: string[];
  mentorIds: string[];
  status: TeamStatus;
  notes?: string;
}

export interface ProgramOverrides {
  taskDone: Record<string, boolean>;
  milestoneDone: Record<string, boolean>;
  phaseStatus: Record<string, ProgramPhaseStatus>;
  decisionsLocked: Record<string, boolean>;
  outreach: Record<string, OutreachState>;
  selectedBriefIds: string[];
  applicants: Applicant[];
  mentors: Mentor[];
  teams: Team[];
  updatedAt: string;
}

const DEFAULT_OVERRIDES: ProgramOverrides = {
  taskDone: {},
  milestoneDone: {},
  phaseStatus: {},
  decisionsLocked: {},
  outreach: {},
  selectedBriefIds: [],
  applicants: [],
  mentors: [],
  teams: [],
  updatedAt: "",
};

function ensureDefaults(raw: Partial<ProgramOverrides>): ProgramOverrides {
  return {
    taskDone: raw.taskDone ?? {},
    milestoneDone: raw.milestoneDone ?? {},
    phaseStatus: raw.phaseStatus ?? {},
    decisionsLocked: raw.decisionsLocked ?? {},
    outreach: raw.outreach ?? {},
    selectedBriefIds: raw.selectedBriefIds ?? [],
    applicants: raw.applicants ?? [],
    mentors: raw.mentors ?? [],
    teams: raw.teams ?? [],
    updatedAt: raw.updatedAt ?? "",
  };
}

function applyOverrides(seed: Program, ov: ProgramOverrides): Program {
  return {
    ...seed,
    phases: seed.phases.map((p) => ({
      ...p,
      status: ov.phaseStatus[p.id] ?? p.status,
    })),
    tasks: seed.tasks.map((t) => ({
      ...t,
      done: ov.taskDone[t.id] ?? t.done,
    })),
    milestones: seed.milestones.map((m) => ({
      ...m,
      done: ov.milestoneDone[m.id] ?? m.done,
    })),
  };
}

interface UseProgramReturn {
  program: Program;
  overrides: ProgramOverrides;
  toggleTask: (taskId: string) => void;
  toggleMilestone: (milestoneId: string) => void;
  setPhaseStatus: (phaseId: string, status: ProgramPhaseStatus) => void;
  toggleDecision: (decisionId: string) => void;
  // outreach
  setOutreachStatus: (institutionId: string, status: OutreachStatus) => void;
  addContact: (institutionId: string, contact: Omit<OutreachContact, "id">) => void;
  updateContact: (institutionId: string, contactId: string, patch: Partial<OutreachContact>) => void;
  removeContact: (institutionId: string, contactId: string) => void;
  addLogEntry: (institutionId: string, note: string) => void;
  removeLogEntry: (institutionId: string, logId: string) => void;
  // briefs
  toggleBrief: (ideaId: string) => void;
  // applicants
  addApplicant: (applicant: Omit<Applicant, "id">) => void;
  addApplicantsBulk: (applicants: Omit<Applicant, "id">[]) => void;
  setApplicantStage: (applicantId: string, stage: ApplicantStage) => void;
  removeApplicant: (applicantId: string) => void;
  // mentors
  addMentor: (m: Omit<Mentor, "id">) => void;
  updateMentor: (id: string, patch: Partial<Omit<Mentor, "id">>) => void;
  removeMentor: (id: string) => void;
  // teams
  addTeam: (team: Omit<Team, "id" | "status" | "memberIds" | "mentorIds">) => void;
  updateTeam: (id: string, patch: Partial<Omit<Team, "id">>) => void;
  removeTeam: (id: string) => void;
  setTeamStatus: (id: string, status: TeamStatus) => void;
  assignMember: (teamId: string, applicantId: string) => void;
  unassignMember: (teamId: string, applicantId: string) => void;
  assignMentorToTeam: (teamId: string, mentorId: string) => void;
  unassignMentorFromTeam: (teamId: string, mentorId: string) => void;
  reset: () => void;
}

const ProgramContext = createContext<UseProgramReturn | null>(null);

const STORAGE_KEY = "labspace-tlife-open-2026";

function genId(prefix: string) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

export function ProgramProvider({ children }: { children: ReactNode }) {
  const [rawOverrides, setRawOverrides] = useLocalStorage<ProgramOverrides>(STORAGE_KEY, DEFAULT_OVERRIDES);
  const overrides = ensureDefaults(rawOverrides);
  const setOverrides = setRawOverrides;
  const seed = staticPrograms[0];

  const program = useMemo(() => applyOverrides(seed, overrides), [seed, overrides]);

  const stamp = () => new Date().toISOString();

  const toggleTask = useCallback(
    (taskId: string) => {
      setOverrides((prev) => {
        const defaultDone = seed.tasks.find((t) => t.id === taskId)?.done ?? false;
        const current = prev.taskDone[taskId] ?? defaultDone;
        return {
          ...prev,
          taskDone: { ...prev.taskDone, [taskId]: !current },
          updatedAt: stamp(),
        };
      });
    },
    [seed, setOverrides]
  );

  const toggleMilestone = useCallback(
    (milestoneId: string) => {
      setOverrides((prev) => {
        const defaultDone = seed.milestones.find((m) => m.id === milestoneId)?.done ?? false;
        const current = prev.milestoneDone[milestoneId] ?? defaultDone;
        return {
          ...prev,
          milestoneDone: { ...prev.milestoneDone, [milestoneId]: !current },
          updatedAt: stamp(),
        };
      });
    },
    [seed, setOverrides]
  );

  const setPhaseStatus = useCallback(
    (phaseId: string, status: ProgramPhaseStatus) => {
      setOverrides((prev) => ({
        ...prev,
        phaseStatus: { ...prev.phaseStatus, [phaseId]: status },
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const toggleDecision = useCallback(
    (decisionId: string) => {
      setOverrides((prev) => ({
        ...prev,
        decisionsLocked: { ...prev.decisionsLocked, [decisionId]: !prev.decisionsLocked[decisionId] },
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const setOutreachStatus = useCallback(
    (institutionId: string, status: OutreachStatus) => {
      setOverrides((prev) => {
        const current = prev.outreach[institutionId] ?? { status: "not-started", contacts: [], log: [] };
        return {
          ...prev,
          outreach: { ...prev.outreach, [institutionId]: { ...current, status } },
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const addContact = useCallback(
    (institutionId: string, contact: Omit<OutreachContact, "id">) => {
      setOverrides((prev) => {
        const current = prev.outreach[institutionId] ?? { status: "not-started" as OutreachStatus, contacts: [], log: [] };
        const newContact: OutreachContact = { ...contact, id: genId("c") };
        return {
          ...prev,
          outreach: {
            ...prev.outreach,
            [institutionId]: { ...current, contacts: [...current.contacts, newContact] },
          },
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const updateContact = useCallback(
    (institutionId: string, contactId: string, patch: Partial<OutreachContact>) => {
      setOverrides((prev) => {
        const current = prev.outreach[institutionId];
        if (!current) return prev;
        return {
          ...prev,
          outreach: {
            ...prev.outreach,
            [institutionId]: {
              ...current,
              contacts: current.contacts.map((c) => (c.id === contactId ? { ...c, ...patch } : c)),
            },
          },
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const removeContact = useCallback(
    (institutionId: string, contactId: string) => {
      setOverrides((prev) => {
        const current = prev.outreach[institutionId];
        if (!current) return prev;
        return {
          ...prev,
          outreach: {
            ...prev.outreach,
            [institutionId]: { ...current, contacts: current.contacts.filter((c) => c.id !== contactId) },
          },
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const addLogEntry = useCallback(
    (institutionId: string, note: string) => {
      setOverrides((prev) => {
        const current = prev.outreach[institutionId] ?? { status: "not-started" as OutreachStatus, contacts: [], log: [] };
        const entry: OutreachLogEntry = { id: genId("l"), date: new Date().toISOString(), note };
        return {
          ...prev,
          outreach: {
            ...prev.outreach,
            [institutionId]: { ...current, log: [entry, ...current.log] },
          },
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const removeLogEntry = useCallback(
    (institutionId: string, logId: string) => {
      setOverrides((prev) => {
        const current = prev.outreach[institutionId];
        if (!current) return prev;
        return {
          ...prev,
          outreach: {
            ...prev.outreach,
            [institutionId]: { ...current, log: current.log.filter((l) => l.id !== logId) },
          },
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const toggleBrief = useCallback(
    (ideaId: string) => {
      setOverrides((prev) => {
        const has = prev.selectedBriefIds.includes(ideaId);
        return {
          ...prev,
          selectedBriefIds: has
            ? prev.selectedBriefIds.filter((id) => id !== ideaId)
            : [...prev.selectedBriefIds, ideaId],
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const addApplicant = useCallback(
    (applicant: Omit<Applicant, "id">) => {
      setOverrides((prev) => {
        const newApp: Applicant = { ...applicant, id: genId("a") };
        return {
          ...prev,
          applicants: [...prev.applicants, newApp],
          updatedAt: stamp(),
        };
      });
    },
    [setOverrides]
  );

  const setApplicantStage = useCallback(
    (applicantId: string, stage: ApplicantStage) => {
      setOverrides((prev) => ({
        ...prev,
        applicants: prev.applicants.map((a) => (a.id === applicantId ? { ...a, stage } : a)),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const removeApplicant = useCallback(
    (applicantId: string) => {
      setOverrides((prev) => ({
        ...prev,
        applicants: prev.applicants.filter((a) => a.id !== applicantId),
        teams: (prev.teams ?? []).map((t) => ({
          ...t,
          memberIds: t.memberIds.filter((m) => m !== applicantId),
        })),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const addApplicantsBulk = useCallback(
    (apps: Omit<Applicant, "id">[]) => {
      if (apps.length === 0) return;
      setOverrides((prev) => ({
        ...prev,
        applicants: [
          ...prev.applicants,
          ...apps.map((a) => ({ ...a, id: genId("a") })),
        ],
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const addMentor = useCallback(
    (m: Omit<Mentor, "id">) => {
      setOverrides((prev) => ({
        ...prev,
        mentors: [...(prev.mentors ?? []), { ...m, id: genId("m") }],
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const updateMentor = useCallback(
    (id: string, patch: Partial<Omit<Mentor, "id">>) => {
      setOverrides((prev) => ({
        ...prev,
        mentors: (prev.mentors ?? []).map((m) => (m.id === id ? { ...m, ...patch } : m)),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const removeMentor = useCallback(
    (id: string) => {
      setOverrides((prev) => ({
        ...prev,
        mentors: (prev.mentors ?? []).filter((m) => m.id !== id),
        teams: (prev.teams ?? []).map((t) => ({
          ...t,
          mentorIds: t.mentorIds.filter((mid) => mid !== id),
        })),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const addTeam = useCallback(
    (team: Omit<Team, "id" | "status" | "memberIds" | "mentorIds">) => {
      setOverrides((prev) => ({
        ...prev,
        teams: [
          ...(prev.teams ?? []),
          { ...team, id: genId("t"), status: "forming" as TeamStatus, memberIds: [], mentorIds: [] },
        ],
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const updateTeam = useCallback(
    (id: string, patch: Partial<Omit<Team, "id">>) => {
      setOverrides((prev) => ({
        ...prev,
        teams: (prev.teams ?? []).map((t) => (t.id === id ? { ...t, ...patch } : t)),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const removeTeam = useCallback(
    (id: string) => {
      setOverrides((prev) => ({
        ...prev,
        teams: (prev.teams ?? []).filter((t) => t.id !== id),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const setTeamStatus = useCallback(
    (id: string, status: TeamStatus) => {
      setOverrides((prev) => ({
        ...prev,
        teams: (prev.teams ?? []).map((t) => (t.id === id ? { ...t, status } : t)),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const assignMember = useCallback(
    (teamId: string, applicantId: string) => {
      setOverrides((prev) => ({
        ...prev,
        // Move applicant out of any other team they're in, then add to this team
        teams: (prev.teams ?? []).map((t) => {
          if (t.id === teamId) {
            return t.memberIds.includes(applicantId)
              ? t
              : { ...t, memberIds: [...t.memberIds, applicantId] };
          }
          return { ...t, memberIds: t.memberIds.filter((m) => m !== applicantId) };
        }),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const unassignMember = useCallback(
    (teamId: string, applicantId: string) => {
      setOverrides((prev) => ({
        ...prev,
        teams: (prev.teams ?? []).map((t) =>
          t.id === teamId ? { ...t, memberIds: t.memberIds.filter((m) => m !== applicantId) } : t
        ),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const assignMentorToTeam = useCallback(
    (teamId: string, mentorId: string) => {
      setOverrides((prev) => ({
        ...prev,
        teams: (prev.teams ?? []).map((t) =>
          t.id === teamId && !t.mentorIds.includes(mentorId)
            ? { ...t, mentorIds: [...t.mentorIds, mentorId] }
            : t
        ),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const unassignMentorFromTeam = useCallback(
    (teamId: string, mentorId: string) => {
      setOverrides((prev) => ({
        ...prev,
        teams: (prev.teams ?? []).map((t) =>
          t.id === teamId ? { ...t, mentorIds: t.mentorIds.filter((m) => m !== mentorId) } : t
        ),
        updatedAt: stamp(),
      }));
    },
    [setOverrides]
  );

  const reset = useCallback(() => {
    setOverrides(DEFAULT_OVERRIDES);
  }, [setOverrides]);

  const value: UseProgramReturn = {
    program,
    overrides,
    toggleTask,
    toggleMilestone,
    setPhaseStatus,
    toggleDecision,
    setOutreachStatus,
    addContact,
    updateContact,
    removeContact,
    addLogEntry,
    removeLogEntry,
    toggleBrief,
    addApplicant,
    addApplicantsBulk,
    setApplicantStage,
    removeApplicant,
    addMentor,
    updateMentor,
    removeMentor,
    addTeam,
    updateTeam,
    removeTeam,
    setTeamStatus,
    assignMember,
    unassignMember,
    assignMentorToTeam,
    unassignMentorFromTeam,
    reset,
  };

  return <ProgramContext.Provider value={value}>{children}</ProgramContext.Provider>;
}

export function useProgram(): UseProgramReturn {
  const ctx = useContext(ProgramContext);
  if (!ctx) throw new Error("useProgram must be used within ProgramProvider");
  return ctx;
}
