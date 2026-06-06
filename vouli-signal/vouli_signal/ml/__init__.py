"""ML layer for vouli-signal.

Two tiers, same API:
  * lite  (default, runs anywhere): scikit-learn TF-IDF + KMeans + LogisticRegression
           + cosine retrieval. No GPU, no model downloads.
  * full  (lazy upgrade on real infra): sentence-transformers (multilingual-e5 /
           GreekBERT / Meltemi) embeddings, BERTopic clustering, Claude RAG.

Heavy deps are imported lazily so the lite tier works with only numpy+sklearn.
"""
