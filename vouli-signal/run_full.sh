#!/usr/bin/env bash
# Full-tier, end-to-end run from a Greek-IP vantage (GR VPS, or any box with
# VOULI_PROXY -> GR residential proxy / scraping API). Harvests ~5y of plenary
# transcripts, runs the transformer ML tier, and refreshes the dashboard.
#
#   ./run_full.sh 2021-01-01
#   VOULI_PROXY=http://user:pass@gr:port ./run_full.sh 2021-01-01
#
# Env:
#   VOULI_EMBED_MODEL  transformer encoder (default multilingual-e5-large)
#   ANTHROPIC_API_KEY  enables Claude classification + RAG synthesis
set -euo pipefail
cd "$(dirname "$0")"

SINCE="${1:-2021-01-01}"
export VOULI_EMBED_MODEL="${VOULI_EMBED_MODEL:-intfloat/multilingual-e5-large}"

echo "[full] installing core + ML deps"
python3 -m pip install -q --upgrade pip
python3 -m pip install -q -r requirements.txt -r requirements-ml.txt
echo "[full] installing transformer tier (sentence-transformers, bertopic)"
python3 -m pip install -q sentence-transformers bertopic || \
  { echo "[full] transformer tier unavailable -> falling back to TF-IDF lite"; \
    unset VOULI_EMBED_MODEL; }

echo "[full] preflight: can we reach www.hellenicparliament.gr ?"
python3 - <<'PY'
import sys
from vouli_signal import config
from vouli_signal.fetch import fetch
html = fetch(config.PLENARY_LISTING.format(page=1), use_cache=False)
if not html or "Access Denied" in html:
    sys.exit("[full] BLOCKED from this IP. Run from a Greek IP or set VOULI_PROXY.")
print("[full] reachable — proceeding")
PY

echo "[full] 1/4 harvest plenary transcripts since ${SINCE}"
python3 -m vouli_signal.pipeline harvest --pages 300 --since "${SINCE}"

echo "[full] 2/4 live questions + signal digest"
python3 -m vouli_signal.pipeline all || true

echo "[full] 3/4 classify+score the harvested corpus"
python3 -m vouli_signal.pipeline analyse-corpus

echo "[full] 4/4 ML: topics + distilled classifier + co-voting graph"
python3 -m vouli_signal.ml.cli build

echo "[full] done. dashboard/data refreshed; serve dashboard/ to view."
