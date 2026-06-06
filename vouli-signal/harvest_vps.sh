#!/usr/bin/env bash
# Turnkey harvest from a Greek-IP vantage (GR-region VPS, or any box with
# VOULI_PROXY pointed at a GR residential proxy / scraping API).
#
# Usage, from a fresh Ubuntu box in a Greek region:
#   git clone <repo> && cd labspace/vouli-signal
#   ./harvest_vps.sh 2021-01-01            # harvest since date -> analyse -> digest
#   VOULI_PROXY=http://user:pass@gr:port ./harvest_vps.sh 2021-01-01   # via proxy
#
# Set ANTHROPIC_API_KEY to enable LLM classification (else heuristic).
set -euo pipefail
cd "$(dirname "$0")"

SINCE="${1:-2021-01-01}"

echo "[vps] installing deps"
python3 -m pip install -q --upgrade pip
python3 -m pip install -q -r requirements.txt

# Preflight: confirm this vantage can actually reach the geo-blocked host.
echo "[vps] preflight: can we reach www.hellenicparliament.gr ?"
python3 - <<'PY'
import sys
from vouli_signal import config
from vouli_signal.fetch import fetch
html = fetch(config.PLENARY_LISTING.format(page=1), use_cache=False)
if not html or "Access Denied" in html:
    sys.exit("[vps] BLOCKED from this IP. Run from a Greek IP or set VOULI_PROXY "
             "to a GR residential proxy / scraping API, then retry.")
print("[vps] reachable — proceeding")
PY

echo "[vps] harvesting plenary transcripts since ${SINCE}"
python3 -m vouli_signal.pipeline harvest --pages 200 --since "${SINCE}"

echo "[vps] analysing corpus -> demand-signal digest"
python3 -m vouli_signal.pipeline analyse-corpus

echo "[vps] done. See out/digest.md and data/plenary/index.json"
