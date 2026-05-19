// Email + Slack templates generated for institution outreach.
// All merge fields are explicit — caller passes the values.

export interface TemplateContext {
  programName: string;
  institutionShortName: string;
  institutionFullName: string;
  primaryHub: string;
  facultyName?: string;
  cohortKickoffDate: string;
  demoDayDate: string;
  applicationsOpen: string;
  studioCheque: string;
  senderName: string;
  senderTitle: string;
}

export type TemplateKind = "mou-intro" | "faculty-warm-intro" | "info-session" | "slack-club-blast";

export interface Template {
  kind: TemplateKind;
  label: string;
  subject?: string;
  body: string;
  hint: string;
}

export function generateTemplates(ctx: TemplateContext): Template[] {
  const fac = ctx.facultyName ?? "—";
  return [
    {
      kind: "mou-intro",
      label: "MoU introduction email",
      subject: `Partnership invitation — ${ctx.programName} (${ctx.institutionShortName})`,
      hint: "Send to the head of the primary innovation hub.",
      body: [
        `Dear ${fac},`,
        ``,
        `I'm ${ctx.senderName}, ${ctx.senderTitle} at T-Life Capital. We're a venture studio building a portfolio of AI-native businesses out of Athens (current portfolio includes Pragma Talent, Aegean Gateway, Tryfon Fleet).`,
        ``,
        `This autumn we're running ${ctx.programName} — a 7-week founder competition drawing students and researchers from Greece's four leading institutions: EKPA, NTUA, AUEB, and NCSR Demokritos. Top 3–5 teams enter the T-Life Studio with a ${ctx.studioCheque} cheque and co-founder support.`,
        ``,
        `We'd like ${ctx.primaryHub} to be our partner hub at ${ctx.institutionShortName}. In exchange for help promoting the call to your community (one mailing to your list, posters on campus, one info session in September), we'd offer:`,
        ``,
        `  • Joint branding on the program website and Demo Day stage`,
        `  • One reserved seat on the jury (Nov 28)`,
        `  • Free Demo Day attendance for your team and your faculty`,
        `  • A first look at the Studio cohort for any startup-curious researchers`,
        ``,
        `Could we set up a 30-minute call in the next two weeks to walk through the program and the MoU? Applications open ${ctx.applicationsOpen} so we'd like to lock partners by mid-August.`,
        ``,
        `Best,`,
        `${ctx.senderName}`,
        `${ctx.senderTitle}, T-Life Capital`,
      ].join("\n"),
    },
    {
      kind: "faculty-warm-intro",
      label: "Faculty referrer warm intro",
      subject: `Quick favor — ${ctx.programName} call at ${ctx.institutionShortName}`,
      hint: "Send to a faculty member who can refer students from their department.",
      body: [
        `Hi ${fac},`,
        ``,
        `I'm reaching out because ${ctx.institutionShortName} is one of four institutions we're inviting to ${ctx.programName} — a founder competition where the top 3–5 student/researcher teams get a ${ctx.studioCheque} cheque and full studio support from T-Life Capital.`,
        ``,
        `If you know 5–10 strong final-year or postgrad students who'd be a fit (technical, commercial, design, or domain backgrounds), it would mean a lot if you could forward our call when it opens on ${ctx.applicationsOpen}.`,
        ``,
        `Demo Day is ${ctx.demoDayDate} in Athens. Studio cohort starts ${ctx.cohortKickoffDate}.`,
        ``,
        `Happy to share more — or come present to your class if useful.`,
        ``,
        `Best,`,
        `${ctx.senderName}`,
      ].join("\n"),
    },
    {
      kind: "info-session",
      label: "Info session invite to club leads",
      subject: `Hosting an info session at ${ctx.institutionShortName} (Sept) — ${ctx.programName}`,
      hint: "Send to the club president or innovation society lead.",
      body: [
        `Hi team,`,
        ``,
        `T-Life Capital is running ${ctx.programName} this autumn and we'd love to do a 30-minute info session for your members in the last week of September.`,
        ``,
        `Quick pitch:`,
        `  • 7-week founder competition`,
        `  • Pick from 15–20 curated venture briefs (or pitch your own)`,
        `  • Top 3–5 teams join the T-Life Studio with a ${ctx.studioCheque} cheque + Athens-based co-build`,
        `  • Applications open ${ctx.applicationsOpen}, Demo Day ${ctx.demoDayDate}`,
        ``,
        `Could you suggest 1–2 dates that work for your members? Happy to host on campus or co-host with your team.`,
        ``,
        `${ctx.senderName}`,
      ].join("\n"),
    },
    {
      kind: "slack-club-blast",
      label: "Slack / Discord blast (short)",
      hint: "Drop in the partner club's general channel when applications open.",
      body: [
        `🚀 *${ctx.programName} applications are open!*`,
        ``,
        `T-Life Capital is running a 7-week founder competition for ${ctx.institutionShortName}, NTUA, EKPA, AUEB and Demokritos students/researchers. Pick a curated venture brief (or pitch your own), build with senior mentors, and the top 3–5 teams join the T-Life Studio with a ${ctx.studioCheque} cheque.`,
        ``,
        `Demo Day: ${ctx.demoDayDate}. Studio cohort: ${ctx.cohortKickoffDate}.`,
        ``,
        `Apply / read more: tlife.capital/open`,
      ].join("\n"),
    },
  ];
}
