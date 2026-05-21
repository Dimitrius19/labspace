// Lazy-load memo-pack markdown artifacts via Vite's import.meta.glob.
// Files at src/data/govtech/artifacts/<ideaId>.md are picked up automatically.

const modules = import.meta.glob("/src/data/govtech/artifacts/*.md", {
  query: "?raw",
  import: "default",
}) as Record<string, () => Promise<string>>;

function idFromPath(path: string): string {
  const m = /\/([^/]+)\.md$/.exec(path);
  return m ? m[1] : "";
}

export function hasMemoPack(ideaId: string): boolean {
  return Object.keys(modules).some((p) => idFromPath(p) === ideaId);
}

export async function loadMemoPack(ideaId: string): Promise<string | null> {
  const entry = Object.entries(modules).find(([p]) => idFromPath(p) === ideaId);
  if (!entry) return null;
  const [, loader] = entry;
  try {
    return await loader();
  } catch {
    return null;
  }
}

export function availableMemoPackIds(): string[] {
  return Object.keys(modules).map(idFromPath).filter(Boolean);
}
