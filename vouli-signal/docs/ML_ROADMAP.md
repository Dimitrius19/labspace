# ML roadmap — from text to learned intelligence

How to extract and efficiently machine-learn the full Vouli corpus. Tiers map to
`vouli_signal/ml/` (lite = runs anywhere; full = GPU upgrade via `VOULI_EMBED_MODEL`).

## Stage 0 — Consolidate the data layer
Unify plenary + committee proceedings + written/urgent questions + votes
(Vouliwatch) + member registry + bills→laws→**ΦΕΚ** + asset declarations.
Store: **Parquet + DuckDB** (tabular/features), **pgvector/Qdrant** (embeddings),
a **graph** (MP–bill–vote–cosponsor). One canonical `turn` table is the spine.

## Stage 1 — Structure & clean at scale
Speaker attribution + **entity resolution** (name variants, declensions,
transliteration, party-over-time, role-at-time) — the reliability unlock.
Turn/agenda segmentation, interjection stripping, dedup, OCR repair (pre-1990 only).

## Stage 2 — Representations  → `ml/embed.py`
Embed once, reuse everywhere. lite = TF-IDF; full = GreekBERT
(`nlpaueb/bert-base-greek-uncased-v1`) / multilingual-e5 / Meltemi sentence
embeddings → vector index.

## Stage 3 — Labels without hand-labelling  → `ml/distill.py`
1. **Weak supervision** — turn the keyword markers into labeling functions (Snorkel-style).
2. **LLM-as-annotator → distillation** — label a sample with Claude, distil into a
   cheap fine-tuned model that runs the full corpus for ~free *(implemented: LogReg head)*.
3. **Active learning + a small human gold set** for evaluation.

## Stage 4 — Model ladder
| Tier | Task | Method |
|---|---|---|
| 1 | multi-label: ministry/topic, stance, A/B, urgency | fine-tuned GreekBERT, distilled |
| 1 | NER + linking: persons, laws/ΦΕΚ, money, programmes | spaCy-el / GreekBERT-NER → KB |
| 2 | structured grievance extraction | LLM → schema-validate |
| 2 | topic discovery & drift | **BERTopic** + change-point *(lite: KMeans in `ml/topics.py`)* |
| 3 | ideology/stance scaling | Wordfish / embedding ideal-points |
| 3 | graph ML: coalitions, influence, vote/defection | node2vec + GNN |
| 4 | trend forecasting: topic heat, attack-risk | time-series on signal velocity |
| 4 | RAG over the corpus | retrieval + Claude *(`ml/rag.py`)* |

## Stage 5 — Eval, governance, serving
Gold set + per-task P/R; **back-test** against known events (ΕΛΙΔΕΚ "new ΟΠΕΚΕΠΕ");
drift monitoring; model cards. **GDPR:** named persons' political opinions are
Art. 9 special-category data — rely on Art. 85 journalistic/academic exemptions,
keep analytic (not decisioning); decisioning → EU AI Act. Serve via model
registry → feature store → dashboard.

## Do these four first (high ROI)
**embeddings → BERTopic clustering → LLM-distilled classifiers → RAG search.**
Turns the dashboard from ranked keyword hits into semantic, trend-aware,
queryable intelligence. Graph + predictive next.
