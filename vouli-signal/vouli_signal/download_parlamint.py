"""Bulk-download the ParlaMint-GR corpus (CC BY 4.0) — the historical spine.

No scraping, no Akamai: a single handle resolves to a .tgz of TEI-XML +
plain-text + CoNLL-U with speaker/party metadata already annotated.
"""
from __future__ import annotations

import os
import subprocess

from . import config

DATA_DIR = os.environ.get("VOULI_DATA", "data")


def download(dest: str | None = None) -> str:
    dest = dest or DATA_DIR
    os.makedirs(dest, exist_ok=True)
    out = os.path.join(dest, "ParlaMint-GR.tgz")
    if os.path.exists(out) and os.path.getsize(out) > 0:
        print(f"[parlamint] already present: {out}")
        return out
    print(f"[parlamint] downloading {config.PARLAMINT_GR_URL} -> {out}")
    # wget handles the hdl.handle.net redirect chain to CLARIN.SI cleanly.
    subprocess.run(["wget", "-c", "-O", out, config.PARLAMINT_GR_URL], check=True)
    return out


def extract(tgz: str, dest: str | None = None) -> str:
    dest = dest or DATA_DIR
    print(f"[parlamint] extracting {tgz}")
    subprocess.run(["tar", "xzf", tgz, "-C", dest], check=True)
    return dest


if __name__ == "__main__":
    extract(download())
