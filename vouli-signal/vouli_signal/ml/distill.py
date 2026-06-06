"""Distil expensive labels into a cheap, fast classifier.

The grievances already carry A/B labels (from the heuristic or, better, from
Claude). We train a LogisticRegression over embeddings to reproduce them, so the
full corpus can be classified for ~free. Same pattern generalises to ministry /
stance / urgency heads. On real infra, point VOULI_EMBED_MODEL at e5/GreekBERT
and the same code distils transformer features.
"""
from __future__ import annotations

import json
import os

import numpy as np

from . import corpus as corpus_mod
from . import embed as embed_mod

OUT = os.environ.get("VOULI_OUT", "out")
MODEL_PATH = os.path.join(OUT, "ab_classifier.npz")


def train(target: str = "ab") -> dict:
    docs = [d for d in corpus_mod.load_documents() if d["meta"].get(target)]
    if len(docs) < 6:
        print(f"[ml.distill] need >=6 labelled docs for '{target}', got {len(docs)}")
        return {}
    texts = [d["text"] for d in docs]
    y = np.array([d["meta"][target] for d in docs])

    emb = embed_mod.Embedder()
    X = emb.fit_transform(texts)

    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import cross_val_score
    clf = LogisticRegression(max_iter=1000, class_weight="balanced")

    report = {"target": target, "n": len(docs), "classes": sorted(set(y.tolist()))}
    if len(set(y)) > 1:
        cv = min(5, int(np.bincount(np.unique(y, return_inverse=True)[1]).min()))
        if cv >= 2:
            scores = cross_val_score(clf, X, y, cv=cv)
            report["cv_accuracy"] = round(float(scores.mean()), 3)
        clf.fit(X, y)
        # persist a compact, dependency-free model (lite/tfidf tier)
        if emb.kind == "tfidf":
            np.savez_compressed(
                MODEL_PATH, classes=clf.classes_, coef=clf.coef_,
                intercept=clf.intercept_, vocab=np.array(emb.feature_names(), dtype=object))
            report["saved"] = MODEL_PATH
    json.dump(report, open(os.path.join(OUT, "distill_report.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=2)
    print(f"[ml.distill] {report}")
    return report
