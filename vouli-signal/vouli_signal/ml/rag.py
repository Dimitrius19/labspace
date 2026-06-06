"""Semantic search + RAG over the corpus.

lite : cosine retrieval over TF-IDF vectors, returns cited snippets.
full : same retrieval over transformer embeddings + Claude synthesis
       (ANTHROPIC_API_KEY) for a grounded natural-language answer.
"""
from __future__ import annotations

import os

import numpy as np

from . import corpus as corpus_mod
from . import embed as embed_mod

_MODEL = os.environ.get("VOULI_MODEL", "claude-haiku-4-5-20251001")


def _index():
    docs = corpus_mod.load_documents()
    emb = embed_mod.Embedder()
    X = emb.fit_transform([d["text"] for d in docs])
    # row-normalise for cosine via dot product
    norms = np.linalg.norm(X, axis=1, keepdims=True)
    X = X / np.clip(norms, 1e-9, None)
    return docs, emb, X


def search(query: str, k: int = 5) -> list[dict]:
    docs, emb, X = _index()
    q = emb.transform([query])[0]
    q = q / max(np.linalg.norm(q), 1e-9)
    sims = X @ q
    top = np.argsort(sims)[::-1][:k]
    return [{"score": round(float(sims[i]), 3), **docs[i]} for i in top]


def answer(query: str, k: int = 6) -> str:
    hits = search(query, k)
    context = "\n\n".join(
        f"[{i+1}] ({h['meta'].get('party','')}, {h['meta'].get('date','')}) {h['text'][:400]}"
        for i, h in enumerate(hits))
    if not os.environ.get("ANTHROPIC_API_KEY"):
        return "Retrieval-only (set ANTHROPIC_API_KEY for synthesis):\n\n" + context
    try:
        import anthropic
        client = anthropic.Anthropic()
        msg = client.messages.create(
            model=_MODEL, max_tokens=600,
            messages=[{"role": "user", "content":
                       f"Answer the question from the Greek parliamentary excerpts. "
                       f"Cite [n]. Be concise.\n\nQ: {query}\n\nExcerpts:\n{context}"}])
        return msg.content[0].text
    except Exception as e:
        return f"(LLM synthesis failed: {e})\n\n{context}"
