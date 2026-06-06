"""Embeddings with a lite (TF-IDF) default and a transformer upgrade path.

lite : sklearn TfidfVectorizer over accent-folded Greek text — no downloads.
full : sentence-transformers (set VOULI_EMBED_MODEL, e.g.
       'intfloat/multilingual-e5-large', 'nlpaueb/bert-base-greek-uncased-v1',
       or a Meltemi-based encoder) — lazy-imported, GPU-friendly.
"""
from __future__ import annotations

import os

import numpy as np

from ..normalize import fold

MODEL = os.environ.get("VOULI_EMBED_MODEL", "")   # set -> use transformer tier


class Embedder:
    def __init__(self):
        self.kind = "transformer" if MODEL else "tfidf"
        self._tf = None
        self._st = None

    def fit_transform(self, texts: list[str]) -> np.ndarray:
        if self.kind == "transformer":
            return self._encode(texts)
        from sklearn.feature_extraction.text import TfidfVectorizer
        self._tf = TfidfVectorizer(
            preprocessor=fold, token_pattern=r"(?u)\b\w\w+\b",
            ngram_range=(1, 2), min_df=1, max_features=50_000,
        )
        return self._tf.fit_transform(texts).toarray().astype(np.float32)

    def transform(self, texts: list[str]) -> np.ndarray:
        if self.kind == "transformer":
            return self._encode(texts)
        return self._tf.transform(texts).toarray().astype(np.float32)

    def feature_names(self):
        return self._tf.get_feature_names_out() if self._tf is not None else None

    def _encode(self, texts):
        from sentence_transformers import SentenceTransformer
        if self._st is None:
            self._st = SentenceTransformer(MODEL)
        return np.asarray(self._st.encode(texts, normalize_embeddings=True,
                                          show_progress_bar=False), dtype=np.float32)


def save(path: str, ids: list[str], vecs: np.ndarray) -> None:
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    np.savez_compressed(path, ids=np.array(ids, dtype=object), vecs=vecs)


def load(path: str):
    z = np.load(path, allow_pickle=True)
    return list(z["ids"]), z["vecs"]
