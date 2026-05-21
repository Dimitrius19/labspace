// Gamma presentations for the full Qualified PASS shortlist (37 decks total).
// Each entry maps a GovIdea id to the Gamma URL.
// The URL initially points at /generations/{id} while building; once Gamma finishes
// rendering, the same URL redirects to the final /docs/... slug.
// All 37 decks regenerated 2026-05-21 from refreshed memo packs (Founder theme, 16x9).

export const gammaPresentations: Record<string, string> = {
  // Original 12 (refreshed 2026-05-21 with 2025-26 structural reframes)
  "tourism-ama-cross-check-agent": "https://gamma.app/generations/rg8CRMTY4rySYmmyGjM9B",
  "digital-gov-citizen-concierge": "https://gamma.app/generations/qZWLs3XATGxZfGlNhzZ1A",
  "archaeology-permit-triage-ephorate": "https://gamma.app/generations/WKG9DXjqYgpzJ9iIqsEvc",
  "energy-res-permit-crosschecker": "https://gamma.app/generations/mQoQyvYx2di3nMilOvCMH",
  "rrf-milestone-tracker": "https://gamma.app/generations/tevNGGJgGxpG8wy05aCv8",
  "espa-screening-copilot": "https://gamma.app/generations/I4bQPuV5GLJwg7USelh3v",
  "efka-pension-calc-copilot": "https://gamma.app/generations/99tfBywgOLEURGpq1KI2G",
  "aade-elenxis-auditor-copilot": "https://gamma.app/generations/MdV8mxWZ2zHueTUfgmcwX",
  "mfa-eastmed-osint-monitor": "https://gamma.app/generations/GusBWEZfUVNsi19UNE8bh",
  "maritime-barren-line-subsidy-optimiser": "https://gamma.app/generations/WISLdRbUntHhv8Hz4A0II",
  "migration-coi-drafting-copilot": "https://gamma.app/generations/LcQbBiHJnPevd8sqHN21c",
  "digital-gov-llm-eval-redteam": "https://gamma.app/generations/BQM1jGqSZJc4fcrVv7pho",

  // PASS shortlist expansion (25 new decks, generated 2026-05-21 after hostile second-pass qualification)
  "social-opeka-benefit-claim-copilot": "https://gamma.app/generations/vB9eGWicWhWpiHIWOTZmS",
  "civil-protection-post-incident-drafting": "https://gamma.app/generations/GqUhao90w1uPFtTwqRZXJ",
  "infrastructure-contractor-progress-monitor": "https://gamma.app/generations/BZf3o6LJjCdYvurr55z5Y",
  "interior-kede-shared-services-stack": "https://gamma.app/generations/aFpMWbuwPlvWDMrc8fN8O",
  "civil-protection-field-officer-dictation": "https://gamma.app/generations/SgTP2nmL5iHsJEe7Nynqj",
  "aade-transfer-pricing-review-agent": "https://gamma.app/generations/I5FIR7xsX0YA7uZYoMoeD",
  "transport-driving-test-scheduler": "https://gamma.app/generations/xlNJ02YG7xnpfXn0MVnHk",
  "justice-echr-monitor-agent": "https://gamma.app/generations/92nY1C7ggBULWx1Zfq32A",
  "agri-efet-inspection-prioritisation": "https://gamma.app/generations/YP1pdcGhTz6rRELPQxe6R",
  "health-patient-correspondence": "https://gamma.app/generations/CuAEXdmjiZ3V6c8Tv7BLs",
  "transport-kteo-anomaly-agent": "https://gamma.app/generations/USpuWFnDMlZjC3bBY0h7g",
  "maritime-fueleu-psc-assistant": "https://gamma.app/generations/nmRAqpnJDHGUuBZu2l4MG",
  "migration-press-qa-draft": "https://gamma.app/generations/6RDQuI1pDiurfF4eWDVoX",
  "digital-gov-civil-servant-process-assistant": "https://gamma.app/generations/UG5FJEyTJmCcGUiGCc1aA",
  "health-pre-authorisation-drafter": "https://gamma.app/generations/xFZ4lyZaWeD8ieRQTVJM1",
  "mfa-sister-cities-diplomacy": "https://gamma.app/generations/XV4wmjmyDukE4IPzZD3cw",
  "migration-residence-permit-triage": "https://gamma.app/generations/HXqQlbCvRyX3FFH9zL9eG",
  "defence-procurement-clause-checker": "https://gamma.app/generations/sRRexvw69CmoOrfSb4Bh2",
  "agri-elga-claims-triage": "https://gamma.app/generations/ICtCvjfB6RWKMRLwiN89C",
  "environment-eia-drafting-agent": "https://gamma.app/generations/MONEDY5IOunbPOHtmwueF",
  "health-chronic-prescription-review": "https://gamma.app/generations/ggzF0nnIoKLjmcVOWJeBP",
  "pmo-council-of-ministers-prep": "https://gamma.app/generations/ZglhzOOGEb8I1qtWnNbr7",
  "education-school-inspection-drafting": "https://gamma.app/generations/cSXWf1xFgLX5AoyZZm03e",
  "sepe-inspection-prioritiser": "https://gamma.app/generations/NRpsfaO9Vq2NBBRAyZkLN",
  "efka-appeal-response-drafter": "https://gamma.app/generations/XmgiS0glOKXp4lxQ769ZW",
};

export function gammaUrlFor(ideaId: string): string | null {
  return gammaPresentations[ideaId] ?? null;
}
