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
