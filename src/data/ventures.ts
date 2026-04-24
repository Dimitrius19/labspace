import type { Venture } from "../types";

export const ventures: Venture[] = [
  {
    id: "pragma-talent",
    slug: "pragma-talent",
    name: "Pragma Talent",
    tagline: "AI-native talent platform — sourcing, screening & matching at startup speed.",
    description:
      "Pragma Talent uses LLM agents to source, qualify, and match candidates for roles that would otherwise take weeks of recruiter time. The platform combines a candidate graph with autonomous agents that run outreach and structured screening on behalf of hiring teams.",
    repoUrl: "https://github.com/Dimitrius19/Pragma-talent",
    stage: "building",
    health: "on-track",
    launchTarget: "2026-07-15",
    kickoffDate: "2025-11-01",
    techStack: ["Next.js", "TypeScript", "Supabase", "OpenAI / Anthropic", "n8n"],
    team: [
      { name: "Dimitri", role: "Founder / Product" },
      { name: "TBD", role: "Technical Co-founder" },
    ],
    nextAction: "Ship v0.3 screening agent and run against 20 live reqs.",
    risks: [
      "LLM hallucination on candidate qualifications",
      "Recruiter incumbents bundling AI into existing ATS",
      "Hiring budgets in Greece/EU compressing in 2026",
    ],
    accent: "blue",
    notes: "",
    milestones: [
      { id: "m1", title: "Candidate graph v1 ingested (50k profiles)", targetDate: "2026-01-15", done: true },
      { id: "m2", title: "Screening agent MVP (voice + written)", targetDate: "2026-03-01", done: true },
      { id: "m3", title: "First 3 design-partner contracts signed", targetDate: "2026-04-30", done: false },
      { id: "m4", title: "Closed beta with 10 hiring teams", targetDate: "2026-06-01", done: false },
      { id: "m5", title: "Public launch on Product Hunt", targetDate: "2026-07-15", done: false },
    ],
    tasks: [
      { id: "pt-p1", category: "product", priority: "p0", done: true, title: "Define target ICP (EU seed/Series-A tech)" },
      { id: "pt-p2", category: "product", priority: "p0", done: true, title: "Ship candidate search MVP" },
      { id: "pt-p3", category: "product", priority: "p0", done: false, title: "Outreach agent with reply handling" },
      { id: "pt-p4", category: "product", priority: "p1", done: false, title: "Recruiter dashboard + pipeline view" },
      { id: "pt-p5", category: "product", priority: "p1", done: false, title: "Structured scorecards per role" },

      { id: "pt-e1", category: "engineering", priority: "p0", done: true, title: "Supabase schema + auth" },
      { id: "pt-e2", category: "engineering", priority: "p0", done: true, title: "LLM orchestration layer (agents SDK)" },
      { id: "pt-e3", category: "engineering", priority: "p0", done: false, title: "Rate limits + cost monitoring per tenant" },
      { id: "pt-e4", category: "engineering", priority: "p1", done: false, title: "Audit log for every AI action" },
      { id: "pt-e5", category: "engineering", priority: "p1", done: false, title: "E2E test suite + CI" },

      { id: "pt-d1", category: "design", priority: "p1", done: true, title: "Brand system + landing page v1" },
      { id: "pt-d2", category: "design", priority: "p1", done: false, title: "Dashboard UX review with 5 recruiters" },

      { id: "pt-l1", category: "legal", priority: "p0", done: false, title: "GDPR DPA + candidate consent flow" },
      { id: "pt-l2", category: "legal", priority: "p0", done: false, title: "Terms of service & privacy policy" },
      { id: "pt-l3", category: "legal", priority: "p1", done: false, title: "EU AI Act compliance review" },
      { id: "pt-l4", category: "legal", priority: "p1", done: false, title: "Greek entity + IP assignment" },

      { id: "pt-g1", category: "go-to-market", priority: "p0", done: false, title: "Sign 3 design-partner contracts" },
      { id: "pt-g2", category: "go-to-market", priority: "p0", done: false, title: "Pricing model validated (seat vs hire-based)" },
      { id: "pt-g3", category: "go-to-market", priority: "p1", done: false, title: "Product Hunt launch assets" },
      { id: "pt-g4", category: "go-to-market", priority: "p1", done: false, title: "Content engine: 10 posts on AI hiring" },
      { id: "pt-g5", category: "go-to-market", priority: "p2", done: false, title: "Partnership with Athens Startup Weekend" },

      { id: "pt-o1", category: "operations", priority: "p1", done: false, title: "Support SLA + helpdesk (Intercom/Plain)" },
      { id: "pt-o2", category: "operations", priority: "p2", done: false, title: "Onboarding playbook" },

      { id: "pt-f1", category: "finance", priority: "p0", done: false, title: "Stripe billing live" },
      { id: "pt-f2", category: "finance", priority: "p1", done: false, title: "Unit economics model (CAC/LTV)" },
    ],
  },
  {
    id: "relocation-platform",
    slug: "relocation-platform",
    name: "Aegean Gateway",
    tagline: "AI relocation concierge — property, residency & lifestyle for moving to Greece.",
    description:
      "Aegean Gateway aggregates property listings, residency pathways (Golden Visa, Digital Nomad), and relocation services into one AI-guided flow. Users describe their situation in natural language; the platform returns a ranked shortlist of properties, a residency plan, and handoffs to vetted local partners.",
    repoUrl: "https://github.com/Dimitrius19/Relocation-Platform",
    stage: "private-beta",
    health: "at-risk",
    launchTarget: "2026-06-01",
    kickoffDate: "2025-09-01",
    techStack: ["Next.js", "Supabase", "Sentry", "Vercel", "n8n", "OpenAI"],
    team: [
      { name: "Dimitri", role: "Founder / Product" },
      { name: "TBD", role: "Operations Lead (Athens)" },
    ],
    nextAction: "Close 2 real-estate partner agreements and resolve listings feed reliability.",
    risks: [
      "Property listing freshness — feeds go stale within hours",
      "Commission split with local brokers not yet standardized",
      "Golden Visa rules changing mid-2026",
    ],
    accent: "cyan",
    notes: "",
    milestones: [
      { id: "m1", title: "Property aggregator feed (5 sources) live", targetDate: "2026-01-30", done: true },
      { id: "m2", title: "AI concierge flow (v1)", targetDate: "2026-03-15", done: true },
      { id: "m3", title: "5 real-estate partner agreements signed", targetDate: "2026-04-15", done: false },
      { id: "m4", title: "First 10 paid relocation packages booked", targetDate: "2026-05-15", done: false },
      { id: "m5", title: "Public launch + PR push", targetDate: "2026-06-01", done: false },
    ],
    tasks: [
      { id: "rp-p1", category: "product", priority: "p0", done: true, title: "Property aggregator (5 source feeds)" },
      { id: "rp-p2", category: "product", priority: "p0", done: true, title: "AI concierge chat flow v1" },
      { id: "rp-p3", category: "product", priority: "p0", done: false, title: "Residency pathway calculator" },
      { id: "rp-p4", category: "product", priority: "p0", done: false, title: "Shortlist + saved search + email alerts" },
      { id: "rp-p5", category: "product", priority: "p1", done: false, title: "Virtual tour / video call booking" },
      { id: "rp-p6", category: "product", priority: "p1", done: false, title: "Partner handoff flow (agent → human)" },

      { id: "rp-e1", category: "engineering", priority: "p0", done: true, title: "Listings feed scraper + dedup" },
      { id: "rp-e2", category: "engineering", priority: "p0", done: false, title: "Feed reliability — auto-retry + freshness SLO" },
      { id: "rp-e3", category: "engineering", priority: "p0", done: true, title: "Sentry error tracking" },
      { id: "rp-e4", category: "engineering", priority: "p1", done: false, title: "Image pipeline (resize, watermark, CDN)" },
      { id: "rp-e5", category: "engineering", priority: "p1", done: false, title: "i18n: EN / EL / AR / HE" },

      { id: "rp-d1", category: "design", priority: "p0", done: true, title: "Landing page + brand" },
      { id: "rp-d2", category: "design", priority: "p1", done: false, title: "Mobile-first refactor of search results" },

      { id: "rp-l1", category: "legal", priority: "p0", done: false, title: "Real-estate intermediary license (Greece)" },
      { id: "rp-l2", category: "legal", priority: "p0", done: false, title: "GDPR + cookie consent" },
      { id: "rp-l3", category: "legal", priority: "p0", done: false, title: "Partner commission agreement template" },
      { id: "rp-l4", category: "legal", priority: "p1", done: false, title: "Listing content licensing review" },

      { id: "rp-g1", category: "go-to-market", priority: "p0", done: false, title: "Sign 5 real-estate partners" },
      { id: "rp-g2", category: "go-to-market", priority: "p0", done: false, title: "Sign 2 immigration law firms" },
      { id: "rp-g3", category: "go-to-market", priority: "p1", done: false, title: "SEO: 20 location landing pages" },
      { id: "rp-g4", category: "go-to-market", priority: "p1", done: false, title: "Paid acquisition experiments (Meta, Google)" },
      { id: "rp-g5", category: "go-to-market", priority: "p2", done: false, title: "Press kit + PR outreach list" },

      { id: "rp-o1", category: "operations", priority: "p0", done: false, title: "Athens operations lead hired" },
      { id: "rp-o2", category: "operations", priority: "p1", done: false, title: "Customer support coverage (EL/EN)" },

      { id: "rp-f1", category: "finance", priority: "p0", done: false, title: "Commission escrow + payout flow" },
      { id: "rp-f2", category: "finance", priority: "p1", done: false, title: "Unit economics per relocation package" },
    ],
  },
  {
    id: "tryfon-fleet",
    slug: "tryfon-fleet",
    name: "Tryfon Fleet",
    tagline: "AI fleet operations — route, maintain & manage commercial vehicles end-to-end.",
    description:
      "Tryfon Fleet gives small and mid-sized fleet operators an AI copilot for dispatch, predictive maintenance, fuel optimization, and driver performance. A monorepo of connected apps (web, mobile driver, telematics ingest) with an LLM ops layer that turns raw telematics into actionable decisions.",
    repoUrl: "https://github.com/Dimitrius19/Tryfon-fleet",
    stage: "building",
    health: "on-track",
    launchTarget: "2026-09-01",
    kickoffDate: "2025-12-15",
    techStack: ["Monorepo (Turborepo)", "Next.js", "Docker", "Vercel", "Postgres", "MQTT"],
    team: [
      { name: "Dimitri", role: "Founder / Product" },
      { name: "TBD", role: "Embedded / Telematics Eng" },
    ],
    nextAction: "Ship telematics ingest v1 and onboard first pilot fleet (10 vehicles).",
    risks: [
      "Telematics hardware partnerships — need 1 reliable OEM",
      "Regulatory: tachograph data handling in EU",
      "Long sales cycle for SMB fleets (3–6 months)",
    ],
    accent: "amber",
    notes: "",
    milestones: [
      { id: "m1", title: "Monorepo + CI scaffolding", targetDate: "2026-01-15", done: true },
      { id: "m2", title: "Telematics ingest pipeline v1", targetDate: "2026-04-01", done: false },
      { id: "m3", title: "First pilot fleet (10 vehicles, 1 operator)", targetDate: "2026-05-15", done: false },
      { id: "m4", title: "Dispatch + maintenance copilot beta", targetDate: "2026-07-01", done: false },
      { id: "m5", title: "General availability launch", targetDate: "2026-09-01", done: false },
    ],
    tasks: [
      { id: "tf-p1", category: "product", priority: "p0", done: true, title: "Monorepo app structure defined" },
      { id: "tf-p2", category: "product", priority: "p0", done: false, title: "Dispatcher web app MVP" },
      { id: "tf-p3", category: "product", priority: "p0", done: false, title: "Driver mobile app MVP (iOS + Android)" },
      { id: "tf-p4", category: "product", priority: "p0", done: false, title: "Predictive maintenance copilot" },
      { id: "tf-p5", category: "product", priority: "p1", done: false, title: "Fuel & route optimization" },
      { id: "tf-p6", category: "product", priority: "p1", done: false, title: "Driver scorecard + coaching" },

      { id: "tf-e1", category: "engineering", priority: "p0", done: true, title: "Docker + Vercel deploy pipeline" },
      { id: "tf-e2", category: "engineering", priority: "p0", done: false, title: "Telematics ingest (MQTT → Postgres/TimescaleDB)" },
      { id: "tf-e3", category: "engineering", priority: "p0", done: false, title: "Event processing + alerting engine" },
      { id: "tf-e4", category: "engineering", priority: "p1", done: false, title: "Offline-first sync for driver app" },
      { id: "tf-e5", category: "engineering", priority: "p1", done: false, title: "Integration: 2 telematics OEMs" },

      { id: "tf-d1", category: "design", priority: "p1", done: false, title: "Dispatcher dashboard design" },
      { id: "tf-d2", category: "design", priority: "p1", done: false, title: "Driver app UX (gloves + outdoor legibility)" },

      { id: "tf-l1", category: "legal", priority: "p0", done: false, title: "Driver data processing agreement (GDPR)" },
      { id: "tf-l2", category: "legal", priority: "p0", done: false, title: "Tachograph / EU 165/2014 review" },
      { id: "tf-l3", category: "legal", priority: "p1", done: false, title: "Insurance partnership MOU" },

      { id: "tf-g1", category: "go-to-market", priority: "p0", done: false, title: "Sign 1 pilot fleet operator" },
      { id: "tf-g2", category: "go-to-market", priority: "p0", done: false, title: "ICP defined (20–200 vehicles, EU SMB)" },
      { id: "tf-g3", category: "go-to-market", priority: "p1", done: false, title: "Pricing: per-vehicle vs per-seat" },
      { id: "tf-g4", category: "go-to-market", priority: "p1", done: false, title: "Trade show presence (Fleet Europe)" },

      { id: "tf-o1", category: "operations", priority: "p1", done: false, title: "Installation playbook for OBD/telematics" },
      { id: "tf-o2", category: "operations", priority: "p1", done: false, title: "On-call rotation for production alerts" },

      { id: "tf-f1", category: "finance", priority: "p1", done: false, title: "Subscription billing (Stripe) wired" },
      { id: "tf-f2", category: "finance", priority: "p1", done: false, title: "Hardware cost model (owned vs financed)" },
    ],
  },
];
