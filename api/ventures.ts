import * as yaml from "js-yaml";

export const config = { runtime: "edge" };

type Repo = { id: string; owner: string; repo: string };

const REPOS: Repo[] = [
  { id: "pragma-talent", owner: "Dimitrius19", repo: "Pragma-talent" },
  { id: "relocation-platform", owner: "Dimitrius19", repo: "Relocation-Platform" },
  { id: "tryfon-fleet", owner: "Dimitrius19", repo: "Tryfon-fleet" },
];

const MANIFEST_PATH = ".claude/venture.yaml";

async function gh(path: string, token: string) {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
      "User-Agent": "labspace-edge",
    },
  });
  return res;
}

async function getManifest(r: Repo, token: string) {
  const res = await gh(
    `/repos/${r.owner}/${r.repo}/contents/${encodeURIComponent(MANIFEST_PATH)}`,
    token
  );
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`manifest ${r.repo}: ${res.status}`);
  const data = (await res.json()) as { content: string; encoding: string };
  if (data.encoding !== "base64") return null;
  const text = atob(data.content.replace(/\n/g, ""));
  return yaml.load(text);
}

async function getLatestCommit(r: Repo, token: string) {
  const res = await gh(`/repos/${r.owner}/${r.repo}/commits?per_page=1`, token);
  if (!res.ok) return null;
  const [commit] = (await res.json()) as Array<{
    sha: string;
    html_url: string;
    commit: { message: string; author: { date: string; name: string } };
  }>;
  if (!commit) return null;
  return {
    sha: commit.sha,
    message: commit.commit.message.split("\n")[0],
    author: commit.commit.author.name,
    date: commit.commit.author.date,
    url: commit.html_url,
  };
}

export default async function handler() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return new Response(
      JSON.stringify({ error: "GITHUB_TOKEN not configured" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const results = await Promise.all(
    REPOS.map(async (r) => {
      try {
        const [manifest, latestCommit] = await Promise.all([
          getManifest(r, token),
          getLatestCommit(r, token),
        ]);
        return {
          id: r.id,
          owner: r.owner,
          repo: r.repo,
          manifest,
          latestCommit,
          error: null,
        };
      } catch (e) {
        return {
          id: r.id,
          owner: r.owner,
          repo: r.repo,
          manifest: null,
          latestCommit: null,
          error: (e as Error).message,
        };
      }
    })
  );

  return new Response(
    JSON.stringify({ ventures: results, fetchedAt: new Date().toISOString() }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=60, stale-while-revalidate=300",
      },
    }
  );
}
