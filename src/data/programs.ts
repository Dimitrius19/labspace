// T-Life Capital programs — strategic initiatives that are NOT ventures.
// Currently only T-Life Open 2026 (the Autumn 2026 founder-hunt competition).

export type ProgramStage = "scoping" | "foundation" | "partnerships" | "recruitment" | "live" | "wrap";
export type ProgramPhaseStatus = "upcoming" | "active" | "complete";
export type ProgramTaskCategory =
  | "product"
  | "engineering"
  | "design"
  | "legal"
  | "go-to-market"
  | "operations"
  | "finance";
export type ProgramPriority = "p0" | "p1" | "p2";

export interface ProgramPhase {
  id: string;
  number: number;
  title: string;
  window: string;
  owner: string;
  summary: string;
  status: ProgramPhaseStatus;
}

export interface ProgramMilestone {
  id: string;
  phaseId: string;
  title: string;
  targetDate: string; // YYYY-MM-DD
  done: boolean;
}

export interface ProgramTask {
  id: string;
  phaseId: string;
  category: ProgramTaskCategory;
  priority: ProgramPriority;
  title: string;
  done: boolean;
}

export interface TalentPool {
  institutionId: string;
  shortName: string;
  fullName: string;
  geography: string;
  departments: string[];
  entryPoints: { name: string; role: string }[];
  primaryHub: string;
}

export interface ProgramKPI {
  label: string;
  target: string;
  current: string;
  unit: string;
}

export interface OpenDecision {
  id: string;
  topic: string;
  recommendation: string;
  ownerNeeded: string;
}

export interface Program {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stage: ProgramStage;
  kickoffDate: string;
  demoDayDate: string;
  cohortKickoffDate: string;
  budget: { event: string; cohortCapital: string };
  team: { name: string; role: string }[];
  nextAction: string;
  risks: string[];
  kpis: ProgramKPI[];
  phases: ProgramPhase[];
  milestones: ProgramMilestone[];
  tasks: ProgramTask[];
  talentPools: TalentPool[];
  openDecisions: OpenDecision[];
  notes: string;
}

export const programs: Program[] = [
  {
    id: "tlife-open-2026",
    slug: "tlife-open-2026",
    name: "T-Life Open 2026",
    tagline: "Autumn 2026 founder hunt across EKPA, NTUA, AUEB, Demokritos — 20 teams, 3–5 studio offers.",
    description:
      "A 7-week student & researcher startup competition drawing the strongest tech and business talent from Greece's four leading institutions. Hybrid format — T-Life Capital curates 15–20 venture briefs from its pipeline; teams pick, refine, and pitch (with ~4–6 slots reserved for open submissions). Top 3–5 teams enter the T-Life Studio for a 12-week co-build with €100–250k cheques, shared operations, and partner-level co-founder support.",
    stage: "scoping",
    kickoffDate: "2026-10-10",
    demoDayDate: "2026-11-28",
    cohortKickoffDate: "2027-01-05",
    budget: { event: "≈€60k", cohortCapital: "€500k–€1M" },
    team: [
      { name: "Dimitri", role: "Program Lead / Jury Chair" },
      { name: "TBD", role: "Marketing & Recruitment Lead" },
      { name: "TBD", role: "Event Operations Lead" },
    ],
    nextAction: "Phase 0: lock event brand and curate 15–20 venture briefs from T-Life pipeline by Jun 30.",
    risks: [
      "Institutional buy-in across all 4 hubs (ACEin / ThinkBiz / MOKE / Demokritos) by Aug 15",
      "Application volume — need ≥150 to fill an 80-student cohort",
      "Mentor capacity — 15–20 senior mentors required for 6-week build sprint",
      "Studio cohort capital — €500k–€1M commitment required by mid-Dec",
      "Studio offer acceptance — top teams may prefer independent fundraising",
    ],
    kpis: [
      { label: "Applications", target: "≥200", current: "0", unit: "applicants" },
      { label: "Accepted", target: "~80", current: "0", unit: "students" },
      { label: "Teams at Demo Day", target: "≥15", current: "0", unit: "teams" },
      { label: "Studio offers", target: "3–5", current: "0", unit: "term sheets" },
    ],
    phases: [
      {
        id: "p0",
        number: 0,
        title: "Foundation",
        window: "May 18 – Jun 30, 2026",
        owner: "T-Life core",
        summary: "Brand, venture briefs, jury, legal templates, sponsorship.",
        status: "active",
      },
      {
        id: "p1",
        number: 1,
        title: "Partnerships",
        window: "Jul 1 – Aug 15, 2026",
        owner: "T-Life + uni liaisons",
        summary: "MoUs with ACEin, ThinkBiz, MOKE EKPA, Demokritos Hub. Venues locked.",
        status: "upcoming",
      },
      {
        id: "p2",
        number: 2,
        title: "Recruitment",
        window: "Aug 15 – Sep 30",
        owner: "Marketing lead",
        summary: "Application portal, campus outreach, info sessions. Target ≥200 apps.",
        status: "upcoming",
      },
      {
        id: "p3",
        number: 3,
        title: "Selection",
        window: "Sep 30 – Oct 7",
        owner: "T-Life + 2 judges",
        summary: "Score applicants, accept ~80 with balanced role mix.",
        status: "upcoming",
      },
      {
        id: "p4",
        number: 4,
        title: "Kickoff & matchmaking",
        window: "Oct 10 (Saturday)",
        owner: "Event ops",
        summary: "Brief showcase, team formation, idea allocation. Single-day event at SNFCC.",
        status: "upcoming",
      },
      {
        id: "p5",
        number: 5,
        title: "Build sprint (6 weeks)",
        window: "Oct 11 – Nov 21",
        owner: "Mentors + teams",
        summary: "Weekly mentor 1:1s, alt-Saturday studio days, midpoint review on Oct 31.",
        status: "upcoming",
      },
      {
        id: "p6",
        number: 6,
        title: "Demo Day",
        window: "Nov 28 (Saturday)",
        owner: "T-Life + jury",
        summary: "12 finalists pitch at SNFCC. Top 3–5 receive studio offers on the spot.",
        status: "upcoming",
      },
      {
        id: "p7",
        number: 7,
        title: "Studio onboarding",
        window: "Dec 1 – Dec 15",
        owner: "T-Life core",
        summary: "Term sheets signed within 7 days. IP assignment, entity setup.",
        status: "upcoming",
      },
      {
        id: "p8",
        number: 8,
        title: "Studio cohort (12 weeks)",
        window: "Jan – Mar 2027",
        owner: "T-Life studio",
        summary: "Co-build phase: cash, shared ops, follow-on investor day at week 12.",
        status: "upcoming",
      },
    ],
    milestones: [
      { id: "m0", phaseId: "p0", title: "Brand + ≥15 briefs published privately to advisors", targetDate: "2026-06-30", done: false },
      { id: "m1", phaseId: "p1", title: "4 institutional MoUs signed", targetDate: "2026-08-15", done: false },
      { id: "m2", phaseId: "p2", title: "Applications open", targetDate: "2026-08-15", done: false },
      { id: "m3", phaseId: "p2", title: "Applications closed — ≥150 received", targetDate: "2026-09-30", done: false },
      { id: "m4", phaseId: "p3", title: "~80 students accepted, role mix balanced", targetDate: "2026-10-07", done: false },
      { id: "m5", phaseId: "p4", title: "Kickoff + matchmaking event (SNFCC)", targetDate: "2026-10-10", done: false },
      { id: "m6", phaseId: "p5", title: "Midpoint review — ≥15 teams still active", targetDate: "2026-10-31", done: false },
      { id: "m7", phaseId: "p6", title: "Demo Day (SNFCC) — 12 finalists pitch", targetDate: "2026-11-28", done: false },
      { id: "m8", phaseId: "p7", title: "≥3 studio term sheets signed", targetDate: "2026-12-15", done: false },
      { id: "m9", phaseId: "p8", title: "Studio cohort kickoff", targetDate: "2027-01-05", done: false },
    ],
    tasks: [
      { id: "to-p1", phaseId: "p0", category: "product", priority: "p0", done: false, title: "Lock event name + brand identity" },
      { id: "to-p2", phaseId: "p0", category: "product", priority: "p0", done: false, title: "Curate 15–20 venture briefs from T-Life pipeline" },
      { id: "to-p3", phaseId: "p0", category: "product", priority: "p0", done: false, title: "Define open-submission thesis areas (4 themes)" },
      { id: "to-p4", phaseId: "p2", category: "product", priority: "p1", done: false, title: "Build applicant form (Tally / Typeform)" },
      { id: "to-p5", phaseId: "p4", category: "product", priority: "p1", done: false, title: "Spec team-formation + idea-allocation tool" },

      { id: "to-e1", phaseId: "p0", category: "engineering", priority: "p1", done: false, title: "Landing page on labspace.tlife.capital/open" },
      { id: "to-e2", phaseId: "p0", category: "engineering", priority: "p1", done: false, title: "Public /competition route in Labspace SPA" },
      { id: "to-e3", phaseId: "p4", category: "engineering", priority: "p2", done: false, title: "Applicant → brief-preference matching tool" },

      { id: "to-d1", phaseId: "p0", category: "design", priority: "p1", done: false, title: "Logo + brand system + landing page design" },
      { id: "to-d2", phaseId: "p5", category: "design", priority: "p1", done: false, title: "Pitch-deck template for student teams" },
      { id: "to-d3", phaseId: "p6", category: "design", priority: "p2", done: false, title: "Demo Day stage + program design" },

      { id: "to-l1", phaseId: "p0", category: "legal", priority: "p0", done: false, title: "Participant agreement (work-product, GDPR, conduct)" },
      { id: "to-l2", phaseId: "p0", category: "legal", priority: "p0", done: false, title: "Studio term-sheet template (SAFE + IP assignment)" },
      { id: "to-l3", phaseId: "p0", category: "legal", priority: "p0", done: false, title: "Right-of-first-refusal clause for T-Life pipeline briefs" },
      { id: "to-l4", phaseId: "p1", category: "legal", priority: "p1", done: false, title: "MoU template for institutional partners" },

      { id: "to-g1", phaseId: "p1", category: "go-to-market", priority: "p0", done: false, title: "Sign MoU with ACEin (AUEB)" },
      { id: "to-g2", phaseId: "p1", category: "go-to-market", priority: "p0", done: false, title: "Sign MoU with ThinkBiz (NTUA)" },
      { id: "to-g3", phaseId: "p1", category: "go-to-market", priority: "p0", done: false, title: "Sign MoU with MOKE EKPA" },
      { id: "to-g4", phaseId: "p1", category: "go-to-market", priority: "p0", done: false, title: "Sign MoU with Demokritos Innovation Hub" },
      { id: "to-g5", phaseId: "p1", category: "go-to-market", priority: "p1", done: false, title: "Confirm 2 faculty referrers per target department" },
      { id: "to-g6", phaseId: "p2", category: "go-to-market", priority: "p1", done: false, title: "Launch marketing: posters, LinkedIn ads, partner mailers" },
      { id: "to-g7", phaseId: "p2", category: "go-to-market", priority: "p1", done: false, title: "Run 4 campus info sessions (Sep 2026)" },
      { id: "to-g8", phaseId: "p6", category: "go-to-market", priority: "p2", done: false, title: "Press outreach for Demo Day" },

      { id: "to-o1", phaseId: "p1", category: "operations", priority: "p0", done: false, title: "Lock kickoff venue (SNFCC or Innovathens)" },
      { id: "to-o2", phaseId: "p1", category: "operations", priority: "p0", done: false, title: "Lock Demo Day venue (SNFCC)" },
      { id: "to-o3", phaseId: "p1", category: "operations", priority: "p0", done: false, title: "Recruit 15+ mentors (T-Life partners + sector SMEs)" },
      { id: "to-o4", phaseId: "p0", category: "operations", priority: "p1", done: false, title: "Confirm jury (8–10 members)" },
      { id: "to-o5", phaseId: "p3", category: "operations", priority: "p1", done: false, title: "Stand up Discord workspace + onboarding kit" },
      { id: "to-o6", phaseId: "p5", category: "operations", priority: "p1", done: false, title: "Lock 3 mid-sprint Saturday studio days at ACEin" },
      { id: "to-o7", phaseId: "p6", category: "operations", priority: "p2", done: false, title: "Book production + photography crew" },

      { id: "to-f1", phaseId: "p0", category: "finance", priority: "p0", done: false, title: "Approve ~€60k event budget" },
      { id: "to-f2", phaseId: "p7", category: "finance", priority: "p0", done: false, title: "Commit €500k–€1M studio cohort capital" },
      { id: "to-f3", phaseId: "p0", category: "finance", priority: "p1", done: false, title: "Secure cloud-credit sponsorships (Vercel, Anthropic, AWS, Supabase)" },
      { id: "to-f4", phaseId: "p7", category: "finance", priority: "p2", done: false, title: "Cost-per-studio-ready-team tracker" },
    ],
    talentPools: [
      {
        institutionId: "ekpa",
        shortName: "EKPA",
        fullName: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών (NKUA)",
        geography: "Athens",
        departments: [
          "Dept. of Informatics & Telecommunications (DIT)",
          "Dept. of Business Administration",
          "School of Medicine",
          "Dept. of Pharmacy",
          "Dept. of Mathematics / Statistics",
        ],
        entryPoints: [
          { name: "MOKE EKPA", role: "Innovation & entrepreneurship unit — institutional partner" },
          { name: "Γραφείο Διασύνδεσης", role: "Career office — mailing lists, posters" },
          { name: "ARCHIMEDES NKUA", role: "Student innovation hub" },
        ],
        primaryHub: "MOKE EKPA",
      },
      {
        institutionId: "ntua",
        shortName: "NTUA",
        fullName: "Εθνικό Μετσόβιο Πολυτεχνείο (Metsovio)",
        geography: "Athens",
        departments: [
          "School of Electrical & Computer Engineering (ECE)",
          "School of Chemical Engineering",
          "School of Mechanical Engineering",
          "School of Naval Architecture",
        ],
        entryPoints: [
          { name: "ThinkBiz NTUA", role: "Flagship student entrepreneurship club — top partner" },
          { name: "IEEE NTUA Student Branch", role: "ECE talent reach" },
          { name: "EPISEU NTUA", role: "Career office" },
          { name: "ECESCON", role: "ECE student conference network" },
        ],
        primaryHub: "ThinkBiz NTUA",
      },
      {
        institutionId: "aueb",
        shortName: "AUEB",
        fullName: "Οικονομικό Πανεπιστήμιο Αθηνών (ASOEE)",
        geography: "Athens",
        departments: [
          "Dept. of Management Science & Technology (DMST)",
          "Dept. of Informatics",
          "Dept. of Marketing & Communication",
          "Athens MBA program",
        ],
        entryPoints: [
          { name: "ACEin", role: "AUEB Center for Entrepreneurship & Innovation — institutional partner" },
          { name: "DMST Student Society", role: "Tech-forward business students" },
          { name: "Marketing Club AUEB", role: "Hustler / GTM talent" },
        ],
        primaryHub: "ACEin",
      },
      {
        institutionId: "demokritos",
        shortName: "Demokritos",
        fullName: "NCSR Demokritos",
        geography: "Agia Paraskevi, Athens",
        departments: [
          "Institute of Informatics & Telecommunications (IIT)",
          "Institute of Nanoscience & Nanotechnology (INN)",
          "Institute of Biosciences & Applications (IBA)",
        ],
        entryPoints: [
          { name: "Demokritos Innovation Hub", role: "Technology transfer office — institutional partner" },
          { name: "Athena Research Center", role: "Adjunct AI/ML lists (overlap with IIT)" },
          { name: "Lighthouse Demokritos", role: "Innovation programs" },
        ],
        primaryHub: "Demokritos Innovation Hub",
      },
    ],
    openDecisions: [
      { id: "od1", topic: "Event name & brand identity", recommendation: "Working titles: 'T-Life Open 2026', 'Athens Venture Lab', 'Labspace Open'", ownerNeeded: "Dimitri + design partner" },
      { id: "od2", topic: "Budget ceiling", recommendation: "Confirm ~€60k event budget or trim", ownerNeeded: "Dimitri" },
      { id: "od3", topic: "Language", recommendation: "English-only (matches AI-native thesis + international VC observers)", ownerNeeded: "Dimitri" },
      { id: "od4", topic: "Open-submission IP terms", recommendation: "Teams own IP; T-Life right-of-first-refusal on next round", ownerNeeded: "Legal" },
      { id: "od5", topic: "Faculty seat", recommendation: "T-Life partner takes guest-lecturer slot at AUEB DMST or NTUA ECE in Fall semester", ownerNeeded: "Dimitri" },
      { id: "od6", topic: "Co-organizer", recommendation: "Solo-brand vs partner with Endeavor Greece / Reload Greece", ownerNeeded: "Dimitri" },
      { id: "od7", topic: "Studio cohort sizing", recommendation: "Willing to fund 5 if 5 qualify, or hard cap at 3?", ownerNeeded: "Dimitri" },
    ],
    notes: "Strategic talent-acquisition program for T-Life Studio. Full operating plan: ~/.claude/plans/help-me-organise-a-humble-widget.md.",
  },
];
