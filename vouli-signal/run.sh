#!/usr/bin/env bash
# One-command local run. Tries the live scrape; falls back to sample data.
#   ./run.sh           live (needs optional deps) -> digest
#   ./run.sh --demo    fully offline, zero deps/keys
set -euo pipefail
cd "$(dirname "$0")"

if [[ "${1:-}" != "--demo" ]]; then
  pip install -q curl_cffi selectolax pypdf anthropic 2>/dev/null || \
    echo "[run] optional deps unavailable — pipeline will use sample data"
fi

python3 -m vouli_signal.pipeline all "${1:-}"
echo
echo "==== out/digest.md ===="
cat out/digest.md
