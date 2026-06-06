"""Unsupervised topic discovery over the embedded corpus.

lite : KMeans over TF-IDF, clusters labelled by their top discriminative terms.
full : BERTopic (set VOULI_EMBED_MODEL) — lazy, far better topics + drift.

Writes topics.json (also copied to dashboard/data/) with cluster size, label,
top terms, dominant ministry/party, and example doc ids.
"""
from __future__ import annotations

import json
import os
from collections import Counter

import numpy as np

from . import corpus as corpus_mod
from . import embed as embed_mod

OUT = os.environ.get("VOULI_OUT", "out")
DASH = os.path.join(os.path.dirname(__file__), "..", "..", "dashboard", "data")


def discover(n_topics: int = 0, max_docs: int = 0) -> list[dict]:
    docs = corpus_mod.load_documents(max_docs)
    if len(docs) < 3:
        print("[ml.topics] too few documents to cluster")
        return []
    texts = [d["text"] for d in docs]

    emb = embed_mod.Embedder()
    X = emb.fit_transform(texts)

    if os.environ.get("VOULI_EMBED_MODEL"):
        topics = _bertopic(texts, docs)
        if topics:
            _write(topics)
            return topics

    # lite: KMeans + top-term labels
    from sklearn.cluster import KMeans
    k = n_topics or max(2, min(8, len(docs) // 3))
    km = KMeans(n_clusters=k, n_init=10, random_state=0).fit(X)
    labels = km.labels_
    names = emb.feature_names()
    topics = []
    for c in range(k):
        idx = np.where(labels == c)[0]
        if len(idx) == 0:
            continue
        terms = _top_terms(X[idx], names) if names is not None else []
        mins = Counter(docs[i]["meta"].get("ministry", "") for i in idx if docs[i]["meta"].get("ministry"))
        parties = Counter(docs[i]["meta"].get("party", "") for i in idx if docs[i]["meta"].get("party"))
        topics.append({
            "topic_id": int(c), "size": int(len(idx)),
            "label": ", ".join(terms[:4]) or f"topic-{c}",
            "top_terms": terms,
            "dominant_ministry": mins.most_common(1)[0][0] if mins else "",
            "dominant_party": parties.most_common(1)[0][0] if parties else "",
            "example_ids": [docs[i]["id"] for i in idx[:5]],
        })
    topics.sort(key=lambda t: t["size"], reverse=True)
    _write(topics)
    return topics


def _top_terms(submatrix, names, n: int = 8):
    mean = np.asarray(submatrix).mean(axis=0)
    top = np.argsort(mean)[::-1][:n]
    return [str(names[i]) for i in top if mean[i] > 0]


def _bertopic(texts, docs):
    try:
        from bertopic import BERTopic
        from sentence_transformers import SentenceTransformer
        model = SentenceTransformer(os.environ["VOULI_EMBED_MODEL"])
        bt = BERTopic(embedding_model=model, language="multilingual")
        labels, _ = bt.fit_transform(texts)
        info = bt.get_topic_info()
        out = []
        for _, row in info.iterrows():
            tid = int(row["Topic"])
            if tid == -1:
                continue
            terms = [w for w, _ in bt.get_topic(tid)][:8]
            out.append({"topic_id": tid, "size": int(row["Count"]),
                        "label": row["Name"], "top_terms": terms,
                        "dominant_ministry": "", "dominant_party": "",
                        "example_ids": [docs[i]["id"] for i, l in enumerate(labels) if l == tid][:5]})
        return out
    except Exception as e:
        print(f"[ml.topics] BERTopic unavailable ({e}); using lite KMeans")
        return []


def _write(topics):
    for d in (OUT, DASH):
        os.makedirs(d, exist_ok=True)
        json.dump(topics, open(os.path.join(d, "topics.json"), "w", encoding="utf-8"),
                  ensure_ascii=False, indent=2)
    print(f"[ml.topics] {len(topics)} topics -> {OUT}/topics.json + dashboard/data/")
