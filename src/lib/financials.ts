// Static financial-model .xlsx downloads.
// Files live in /public/financials/{ideaId}.xlsx — Vite serves them directly
// at /financials/{ideaId}.xlsx, no bundling.
// The set below is the registry of ideaIds that have a model on disk; keep in
// sync when adding/removing files in public/financials/.

const HAS_MODEL: ReadonlySet<string> = new Set([
  // Original 12
  "tourism-ama-cross-check-agent",
  "digital-gov-citizen-concierge",
  "archaeology-permit-triage-ephorate",
  "energy-res-permit-crosschecker",
  "rrf-milestone-tracker",
  "espa-screening-copilot",
  "efka-pension-calc-copilot",
  "aade-elenxis-auditor-copilot",
  "mfa-eastmed-osint-monitor",
  "maritime-barren-line-subsidy-optimiser",
  "migration-coi-drafting-copilot",
  "digital-gov-llm-eval-redteam",
  // PASS shortlist expansion
  "social-opeka-benefit-claim-copilot",
  "civil-protection-post-incident-drafting",
  "infrastructure-contractor-progress-monitor",
  "interior-kede-shared-services-stack",
  "civil-protection-field-officer-dictation",
  "aade-transfer-pricing-review-agent",
  "transport-driving-test-scheduler",
  "justice-echr-monitor-agent",
  "agri-efet-inspection-prioritisation",
  "health-patient-correspondence",
  "transport-kteo-anomaly-agent",
  "maritime-fueleu-psc-assistant",
  "migration-press-qa-draft",
  "digital-gov-civil-servant-process-assistant",
  "health-pre-authorisation-drafter",
  "mfa-sister-cities-diplomacy",
  "migration-residence-permit-triage",
  "defence-procurement-clause-checker",
  "agri-elga-claims-triage",
  "environment-eia-drafting-agent",
  "health-chronic-prescription-review",
  "pmo-council-of-ministers-prep",
  "education-school-inspection-drafting",
  "sepe-inspection-prioritiser",
  "efka-appeal-response-drafter",
]);

export function financialUrlFor(ideaId: string): string | null {
  return HAS_MODEL.has(ideaId) ? `/financials/${ideaId}.xlsx` : null;
}

export function hasFinancialModel(ideaId: string): boolean {
  return HAS_MODEL.has(ideaId);
}

export function financialDownloadFilename(ideaId: string): string {
  return `${ideaId}-financial-model.xlsx`;
}
