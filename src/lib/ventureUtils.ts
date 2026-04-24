import type { Venture, TaskCategory, LaunchTask } from "../types";
import { TASK_CATEGORIES } from "../types";

export function taskProgress(venture: Venture): { done: number; total: number; pct: number } {
  const total = venture.tasks.length;
  const done = venture.tasks.filter((t) => t.done).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

export function milestoneProgress(venture: Venture): { done: number; total: number; pct: number } {
  const total = venture.milestones.length;
  const done = venture.milestones.filter((m) => m.done).length;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  return { done, total, pct };
}

export function blockingTasks(venture: Venture): LaunchTask[] {
  return venture.tasks.filter((t) => !t.done && t.priority === "p0");
}

export function tasksByCategory(
  venture: Venture
): { category: TaskCategory; label: string; icon: string; tasks: LaunchTask[]; done: number; total: number }[] {
  return TASK_CATEGORIES.map((c) => {
    const tasks = venture.tasks.filter((t) => t.category === c.key);
    const done = tasks.filter((t) => t.done).length;
    return { category: c.key, label: c.label, icon: c.icon, tasks, done, total: tasks.length };
  }).filter((group) => group.total > 0);
}

export function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + "T00:00:00").getTime();
  const now = Date.now();
  return Math.round((target - now) / (1000 * 60 * 60 * 24));
}

export function formatDaysUntil(dateStr: string): string {
  const d = daysUntil(dateStr);
  if (d === 0) return "today";
  if (d === 1) return "tomorrow";
  if (d === -1) return "1d overdue";
  if (d < 0) return `${Math.abs(d)}d overdue`;
  return `in ${d}d`;
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function nextMilestone(venture: Venture) {
  return [...venture.milestones]
    .filter((m) => !m.done)
    .sort((a, b) => a.targetDate.localeCompare(b.targetDate))[0];
}
