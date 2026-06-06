"""End-to-end orchestrator + CLI.

    python -m vouli_signal.pipeline all            # live scrape -> digest (falls back to demo)
    python -m vouli_signal.pipeline all --demo     # offline, deterministic, zero deps/keys
    python -m vouli_signal.pipeline download        # bulk ParlaMint-GR corpus
    python -m vouli_signal.pipeline scrape --save-html
"""
from __future__ import annotations

import argparse
import os

from . import classify, digest, scrape, signal
from .models import write_json
from .sample_data import SAMPLE_QUESTIONS

OUT = os.environ.get("VOULI_OUT", "out")


def _emit(grievances, signals, md):
    os.makedirs(OUT, exist_ok=True)
    write_json(os.path.join(OUT, "grievances.json"), grievances)
    write_json(os.path.join(OUT, "signals.json"), signals)
    with open(os.path.join(OUT, "digest.md"), "w", encoding="utf-8") as fh:
        fh.write(md)
    print(f"[vouli] wrote {len(grievances)} grievances, {len(signals)} signals -> {OUT}/")
    print(f"[vouli] digest: {OUT}/digest.md")


def run_all(demo: bool = False, save_html: bool = False) -> None:
    questions = []
    if not demo:
        try:
            questions = scrape.scrape_questions(save_html=save_html)
            print(f"[vouli] scraped {len(questions)} live questions")
        except Exception as e:                      # never let the job die
            print(f"[vouli] scrape failed ({e}); falling back to sample data")
    if not questions:
        if not demo:
            print("[vouli] no live questions (Akamai/empty); using sample data")
        questions = SAMPLE_QUESTIONS

    grievances = classify.classify_all(questions)
    signals = signal.build_signals(grievances)
    md = digest.render(signals)
    _emit(grievances, signals, md)


def main() -> None:
    ap = argparse.ArgumentParser(prog="vouli_signal.pipeline")
    sub = ap.add_subparsers(dest="cmd", required=True)

    p_all = sub.add_parser("all", help="scrape -> classify -> score -> digest")
    p_all.add_argument("--demo", action="store_true", help="offline sample data")
    p_all.add_argument("--save-html", action="store_true")

    sub.add_parser("download", help="bulk-download ParlaMint-GR corpus")

    p_scrape = sub.add_parser("scrape", help="scrape live questions only")
    p_scrape.add_argument("--save-html", action="store_true")

    args = ap.parse_args()
    if args.cmd == "all":
        run_all(demo=args.demo, save_html=args.save_html)
    elif args.cmd == "download":
        from .download_parlamint import download, extract
        extract(download())
    elif args.cmd == "scrape":
        qs = scrape.scrape_questions(save_html=args.save_html)
        os.makedirs(OUT, exist_ok=True)
        write_json(os.path.join(OUT, "questions.json"), qs)
        print(f"[vouli] {len(qs)} questions -> {OUT}/questions.json")


if __name__ == "__main__":
    main()
