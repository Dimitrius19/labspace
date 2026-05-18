import type { Program } from "../data/programs";

function pad(n: number): string {
  return n < 10 ? `0${n}` : String(n);
}

function toIcsDate(dateStr: string): string {
  // Treat date as full-day event in local time
  const [y, m, d] = dateStr.split("-").map((s) => parseInt(s, 10));
  return `${y}${pad(m)}${pad(d)}`;
}

function escape(text: string): string {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export function programToIcs(program: Program): string {
  const now = new Date().toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z";
  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//T-Life Capital//Labspace Program//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    `X-WR-CALNAME:${escape(program.name)}`,
    `X-WR-CALDESC:${escape(program.tagline)}`,
  ];

  for (const phase of program.phases) {
    // Phases are usually a window — best-effort: parse "Month D - Month D, YYYY"
    // Fall back to a single-day event using the cohortKickoffDate if parse fails.
    // We'll use phase title + window in the description and treat as anchored events
    // on the first parsable date in the window string.
    const m = phase.window.match(/([A-Za-z]+\s\d+(?:,\s*\d{4})?)/);
    const baseDate = m ? new Date(`${m[1]}${m[1].includes(",") ? "" : ", 2026"}`) : null;
    if (!baseDate || isNaN(baseDate.getTime())) continue;
    const y = baseDate.getFullYear();
    const mm = pad(baseDate.getMonth() + 1);
    const dd = pad(baseDate.getDate());
    lines.push(
      "BEGIN:VEVENT",
      `UID:tlife-open-phase-${phase.id}@tlife.capital`,
      `DTSTAMP:${now}`,
      `DTSTART;VALUE=DATE:${y}${mm}${dd}`,
      `SUMMARY:${escape(`Phase ${phase.number} — ${phase.title}`)}`,
      `DESCRIPTION:${escape(`${phase.summary}\n\nOwner: ${phase.owner}\nWindow: ${phase.window}`)}`,
      "CATEGORIES:T-Life Open Program",
      "END:VEVENT"
    );
  }

  for (const milestone of program.milestones) {
    const d = toIcsDate(milestone.targetDate);
    lines.push(
      "BEGIN:VEVENT",
      `UID:tlife-open-milestone-${milestone.id}@tlife.capital`,
      `DTSTAMP:${now}`,
      `DTSTART;VALUE=DATE:${d}`,
      `SUMMARY:${escape(milestone.title)}`,
      `DESCRIPTION:${escape(`Milestone for ${program.name}.`)}`,
      "CATEGORIES:T-Life Open Milestone",
      "END:VEVENT"
    );
  }

  // Big-ticket dates
  for (const [label, dateStr] of [
    ["Kickoff", program.kickoffDate],
    ["Demo Day", program.demoDayDate],
    ["Studio cohort starts", program.cohortKickoffDate],
  ] as const) {
    const d = toIcsDate(dateStr);
    lines.push(
      "BEGIN:VEVENT",
      `UID:tlife-open-${label.toLowerCase().replace(/\s+/g, "-")}@tlife.capital`,
      `DTSTAMP:${now}`,
      `DTSTART;VALUE=DATE:${d}`,
      `SUMMARY:${escape(`${program.name} — ${label}`)}`,
      "END:VEVENT"
    );
  }

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

export function downloadIcs(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
