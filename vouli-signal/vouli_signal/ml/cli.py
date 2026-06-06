"""ML CLI.

    python -m vouli_signal.ml.cli build           # topics + distilled classifier
    python -m vouli_signal.ml.cli topics [--k N]
    python -m vouli_signal.ml.cli train [--target ab|ministry]
    python -m vouli_signal.ml.cli query "ποιοι μιλούν για ακρίβεια;"

Lite tier (numpy+sklearn) runs anywhere. For the full tier set:
    VOULI_EMBED_MODEL=intfloat/multilingual-e5-large   (or GreekBERT / Meltemi)
    ANTHROPIC_API_KEY=...                               (RAG synthesis)
"""
from __future__ import annotations

import argparse


def main() -> None:
    ap = argparse.ArgumentParser(prog="vouli_signal.ml.cli")
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("build")
    pt = sub.add_parser("topics"); pt.add_argument("--k", type=int, default=0)
    tr = sub.add_parser("train"); tr.add_argument("--target", default="ab")
    pq = sub.add_parser("query"); pq.add_argument("q"); pq.add_argument("--k", type=int, default=6)

    args = ap.parse_args()
    if args.cmd == "build":
        from . import topics, distill
        topics.discover()
        distill.train("ab")
    elif args.cmd == "topics":
        from . import topics
        for t in topics.discover(n_topics=args.k):
            print(f"  [{t['size']:>3}] {t['label']}  ({t['dominant_ministry']}/{t['dominant_party']})")
    elif args.cmd == "train":
        from . import distill
        distill.train(args.target)
    elif args.cmd == "query":
        from . import rag
        print(rag.answer(args.q, k=args.k))


if __name__ == "__main__":
    main()
