# vouli-signal

Turn Greek parliamentary activity into **govtech demand signals**: ingest
parliamentary-control questions + plenary minutes, classify each opposition
attack as *AI-addressable throughput* (A) vs *pure political* (B), score it, and
map it onto the existing T-Life govtech catalogue (`src/data/govtech/ministries`).

It institutionalises the manual "Parliament as demand signal" sourcing pass:
each opposition attack is the government telling you, on the record, which
"we fixed it" win it wants — i.e. your warm wedge.

## Quick start

```bash
cd vouli-signal
./run.sh --demo          # offline, zero deps/keys — deterministic smoke test
./run.sh                 # live scrape (installs optional deps), falls back to sample
```

Outputs land in `out/`:
- `digest.md` — ranked, human-readable demand signals
- `signals.json` — scored signals (per ministry × topic)
- `grievances.json` — every classified question

## Harvest 5 years of plenary transcripts at scale

```bash
python -m vouli_signal.pipeline harvest --since 2021-01-01   # ~2022→ born-digital
python -m vouli_signal.pipeline analyse-corpus               # classify+score attack turns
```

`plenary.py` implements the structure proven by the **greparl** crawler:
listing `…/Synedriaseis-Olomeleias?pageNo=N` → `<tr class="odd|even">` rows
(date · period · session · sitting) → `<a href>` document links containing
`/UserFiles/`. Files are **static** (and `.txt` is often available → no OCR),
downloaded directly in preference order **txt > docx > doc > pdf**. Resumable
(skips files already on disk; appends to `data/plenary/index.json`).

`extract.py` converts each transcript (txt/docx/pdf/doc) to text, segments
speaker turns, and feeds attack-shaped opposition turns into the same
classify → score → digest path. (ParlaMint-GR covers 2015–Feb 2022; this
harvest covers the missing ~2022→present.)

### ⚠️ The one operational gotcha — egress IP
`www.hellenicparliament.gr` (where the transcripts live) **geo/ASN-blocks
datacenter & non-Greek IPs at the Akamai edge** — an instant `403 Access Denied`,
*not* a fingerprint or JS challenge (verified: `curl_cffi` Chrome-JA3 still 403;
a neutral Akamai site and `library.parliament.gr` both return 200 from the same
host). So fingerprint tricks don't help — the request must **egress from a Greek
or residential IP**. Pick one:

| Vantage | What to do |
|---|---|
| Your machine / a Greek-region VPS | works directly, no config |
| Greek residential proxy | `export VOULI_PROXY=http://user:pass@gr-proxy:port` |
| Scraping API (Zyte / Bright Data / ScraperAPI, `geo=GR`, residential) | point `VOULI_PROXY` at its proxy endpoint |

The fetch layer routes through `VOULI_PROXY`/`HTTPS_PROXY` transparently, so the
harvest logic is identical from any vantage. ~5 years ≈ a few thousand files;
rate-limited, resumable, run it once then incrementally.

## ML layer (`vouli_signal/ml/`)

Moves the engine from keyword heuristics to learned representations. Two tiers,
same API — the **lite** tier (numpy + scikit-learn) runs anywhere; the **full**
tier (transformers + BERTopic + Claude) is a lazy upgrade for GPU infra.

```bash
pip install -r requirements-ml.txt           # lite: numpy + scikit-learn
python -m vouli_signal.ml.cli build           # topic discovery + distilled A/B classifier
python -m vouli_signal.ml.cli topics          # KMeans/BERTopic clusters + labels
python -m vouli_signal.ml.cli train --target ab   # distil LLM/heuristic labels -> LogReg
python -m vouli_signal.ml.cli query "ποιοι μιλούν για ακρίβεια;"   # semantic search / RAG
```

| Component | lite (here) | full (upgrade) |
|---|---|---|
| `embed.py` | TF-IDF (accent-folded) | `VOULI_EMBED_MODEL=intfloat/multilingual-e5-large` · GreekBERT · Meltemi |
| `topics.py` | KMeans + top-term labels | BERTopic + drift |
| `distill.py` | LogReg over features, CV-scored, saved | same, over transformer features |
| `rag.py` | cosine retrieval + citations | + Claude synthesis (`ANTHROPIC_API_KEY`) |
| `graph.py` | networkx co-voting graph → coalitions, defection, vote prediction | node2vec / GNN, temporal models |

`ml.cli graph` builds an MP co-voting network from `data/votes.json` (Vouliwatch
format; a realistic synthetic set is generated if absent): greedy-modularity
**coalitions**, per-MP **defection scores**, and a LogReg **vote predictor** —
written to `graph.json` and shown in the dashboard. On the demo votes it cleanly
separates the government bloc from the opposition and predicts votes at ~0.94.

## Real data sources (`vouli_signal/sources/`)

**Vouliwatch adapter** — pulls real structured data from the public Vouliwatch
JSON API (reachable, not Akamai-blocked; `robots.txt` permits it):

```bash
python -m vouli_signal.sources.vouliwatch all   # -> data/members.json + data/votings.json
```

- **`members.json`** — the real **330-MP → party roster** (`/api/current_members`,
  resolving `@political_party_member`). This is authoritative and overrides the
  curated seed in `members.py`, so plenary-turn party attribution becomes real
  (verified: Ανδρουλάκης→ΠΑΣΟΚ-ΚΙΝΑΛ, Κωνσταντοπούλου→ΠΛΕΥΣΗ ΕΛΕΥΘΕΡΙΑΣ).
- **`votings.json`** — voting metadata (title, outcome, topic, date, slug),
  **1000 votings incl. 275 named roll-calls**, for topic/temporal analysis.

Per-MP roll-call *breakdowns* are not exposed by the public API, so `graph.py`
keeps its synthetic vote fallback until a Vouliwatch data partnership or the
official ονομαστικές-ψηφοφορίες feed (hellenicparliament.gr, GR-IP) supplies them.
Prefer **partnering** with Vouliwatch over scraping; the adapter only reads the
public JSON API, politely.

## Run the real thing (Greek-IP vantage)

```bash
./run_full.sh 2021-01-01          # harvest 5y + full ML + dashboard, end-to-end
# or containerised, identical anywhere:
docker build -t vouli-signal . && docker run --rm \
  -e VOULI_PROXY=$VOULI_PROXY -e VOULI_EMBED_MODEL=intfloat/multilingual-e5-large \
  -v "$PWD/data:/app/data" -v "$PWD/dashboard/data:/app/dashboard/data" \
  vouli-signal ./run_full.sh 2021-01-01
```

`run_full.sh` installs the full + ML tiers, preflight-checks reachability,
harvests ~5 years, classifies/scores the corpus, and runs topics + distillation
+ graph. The **`vouli-harvest`** GitHub Action does this monthly from CI once you
set the repo secret `VOULI_PROXY` (a GR residential proxy / scraping API — CI
runners are datacenter IPs the parliament host geo-blocks).

`topics.discover()` writes `topics.json` into `out/` and `dashboard/data/`, and the
dashboard renders the discovered topics. The **distillation** pattern is the cost
move: label a sample with Claude once, train a cheap model, classify the whole
corpus for ~free. See `docs/ML_ROADMAP.md` for the full data→model→serving plan.

## Dashboard

A dedicated, zero-build analytics dashboard lives in `dashboard/` and reads the
pipeline's JSON output (it's refreshed automatically by `pipeline all` and the
weekly Action). KPI cards, a ranked/filterable demand-signal table, ministry-heat
and party-activity bars, the A/B split, controls-theme highlights, and a
grievance drill-down drawer.

```bash
python -m vouli_signal.pipeline all --demo     # writes dashboard/data/*.json
cd dashboard && python -m http.server 8099     # then open http://localhost:8099
```

It's a static site (HTML/CSS/vanilla JS) — deploy `dashboard/` to GitHub Pages,
Netlify, S3, anywhere. A demo snapshot is committed so it renders immediately.

## How it works

```
ParlaMint-GR bulk  ─┐
greparl bulk       ─┼─►  raw cache ─► normalise/segment ─► classify (A/B + ministry) ─► score ─► digest
nightly tail scrape─┘     (disk)      (speaker→party→min.)   (Claude or heuristic)     (index)
```

1. **History — no scraping.** `pipeline download` pulls **ParlaMint-GR**
   (CC BY 4.0): TEI-XML + plain-text + CoNLL-U with speaker/party metadata
   already annotated. Reuse [ParlaMint](https://github.com/clarin-eric/ParlaMint)
   and [greparl](https://github.com/Dritsa-Konstantina/greparl) build scripts for
   everything up to their cutoff.
2. **Live tail — Akamai-aware scrape.** `hellenicparliament.gr` is behind Akamai,
   which fingerprints TLS/HTTP2 (a fake User-Agent on plain `requests`/`curl`
   returns 403). `fetch.py` therefore uses **`curl_cffi`** (impersonates Chrome's
   JA3) and falls back to **Playwright** (a real browser; also handles JS and
   ASP.NET `__VIEWSTATE` postbacks). Everything is cached to disk.
3. **Classify.** `classify.py` uses **Claude** when `ANTHROPIC_API_KEY` is set,
   else a transparent keyword heuristic — same schema either way.
4. **Score.** `signal.py` ranks by: AI-addressable × cross-party convergence ×
   frequency × OPEKEPE-controls tailwind × existing-thesis × recency.
5. **Digest.** `digest.py` renders the ranked markdown brief.

## Automation (no manual work)

`.github/workflows/vouli-signal.yml` runs weekly + on demand, executes the
pipeline (live, falling back to sample), and commits the refreshed digest.
Set repo secret `ANTHROPIC_API_KEY` to enable LLM classification (optional).

## Tuning the live scraper

The bulletin/minutes DOM sits behind the WAF, so selectors in `scrape.py` are
best-effort. Once you have a working fetch:

```bash
python -m vouli_signal.pipeline scrape --save-html   # dumps out/_last_bulletin.html
```

Inspect the real markup (and any XHR/JSON the search calls — capture it via the
Playwright `page.on("response", …)` hook) and tighten the parser. The pipeline
degrades to sample data if a scrape yields nothing, so it never breaks.

## Legal / ethical

Parliamentary proceedings are public record. Keep the footprint light: the
design bulk-downloads history and scrapes only the live tail (a dozen polite
requests/day, rate-limited). For votes/MP metadata, prefer partnering with
[Vouliwatch](https://vouliwatch.gr) over scraping their front-end.
