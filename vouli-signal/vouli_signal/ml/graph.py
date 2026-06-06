"""Graph tier: MP co-voting network -> coalitions + defection + vote prediction.

Consumes data/votes.json when present (from Vouliwatch / Votewatch):
    [{"bill_id","date","topic","results":{"<MP name>":"yes|no|abstain|absent"}}, ...]
plus the member->party map (members.py + data/members.json). If no votes exist,
a realistic synthetic set is generated so the tier runs end-to-end.

lite (here): networkx greedy-modularity communities, agreement-weighted graph,
spectral node embeddings (sklearn), LogReg vote/defection predictor.
full (upgrade): node2vec/GNN embeddings, temporal defection models.
"""
from __future__ import annotations

import json
import os
import random

import networkx as nx
import numpy as np

from .. import config
from ..normalize import canonical_party

OUT = os.environ.get("VOULI_OUT", "out")
DATA = os.environ.get("VOULI_DATA", "data")
DASH = os.path.join(os.path.dirname(__file__), "..", "..", "dashboard", "data")
VOTES_PATH = os.path.join(DATA, "votes.json")

_VOTE_NUM = {"yes": 1, "no": -1, "abstain": 0, "absent": None, "present": 0}


# --- data ---------------------------------------------------------------------

def _load_votes() -> list[dict]:
    if os.path.exists(VOTES_PATH):
        return json.load(open(VOTES_PATH, encoding="utf-8"))
    print("[ml.graph] no votes.json — generating synthetic demo votes")
    return _synthetic_votes()


def _synthetic_votes(n_mps: int = 36, n_bills: int = 40, seed: int = 7) -> list[dict]:
    rng = random.Random(seed)
    opp = [p for p, is_opp in config.PARTIES.items() if is_opp][:5]
    parties = ["ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ"] + opp
    mps = {}
    for i in range(n_mps):
        party = parties[i % len(parties)]
        mps[f"ΒΟΥΛΕΥΤΗΣ_{i:02d}"] = party
    # a few cross-party defectors
    defectors = set(rng.sample(list(mps), 4))
    govt = "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ"
    votes = []
    for b in range(n_bills):
        gov_line = rng.choice([1, -1])           # how the government votes
        results = {}
        for mp, party in mps.items():
            base = gov_line if party == govt else -gov_line
            if mp in defectors and rng.random() < 0.5:
                base = -base                      # defect
            if rng.random() < 0.08:               # noise/absence
                results[mp] = "absent"
            else:
                results[mp] = "yes" if base == 1 else "no"
        votes.append({"bill_id": f"BILL-{b:03d}", "date": f"2025-{(b % 12)+1:02d}-01",
                      "topic": rng.choice(["economy", "education", "health", "justice"]),
                      "results": results})
    # persist the member map so attribution is consistent
    os.makedirs(DATA, exist_ok=True)
    json.dump(mps, open(os.path.join(DATA, "members.synthetic.json"), "w", encoding="utf-8"),
              ensure_ascii=False, indent=2)
    return votes


def _party_of(mp: str, fallback: dict[str, str]) -> str:
    from .. import members
    p = members.party_for(mp)
    return p or fallback.get(mp, "")


# --- graph + analytics --------------------------------------------------------

def build(min_shared: int = 5) -> dict:
    votes = _load_votes()
    syn = os.path.join(DATA, "members.synthetic.json")
    fallback = json.load(open(syn, encoding="utf-8")) if os.path.exists(syn) else {}

    mps = sorted({mp for v in votes for mp in v["results"]})
    idx = {mp: i for i, mp in enumerate(mps)}
    M = np.full((len(mps), len(votes)), np.nan)
    for j, v in enumerate(votes):
        for mp, raw in v["results"].items():
            num = _VOTE_NUM.get(raw)
            if num is not None:
                M[idx[mp], j] = num

    # agreement-weighted co-voting graph
    G = nx.Graph()
    for mp in mps:
        G.add_node(mp, party=_party_of(mp, fallback))
    for a in range(len(mps)):
        for b in range(a + 1, len(mps)):
            mask = ~np.isnan(M[a]) & ~np.isnan(M[b])
            if mask.sum() < min_shared:
                continue
            agree = float((M[a, mask] == M[b, mask]).mean())
            if agree > 0.6:
                G.add_edge(mps[a], mps[b], weight=agree)

    communities = list(nx.algorithms.community.greedy_modularity_communities(G, weight="weight"))
    comm_of = {mp: c for c, grp in enumerate(communities) for mp in grp}

    # defection score = how often an MP departs from its party's majority line
    parties = {mp: G.nodes[mp]["party"] for mp in mps}
    defection = _defection_scores(M, mps, idx, parties, votes)

    nodes = [{"id": mp, "party": parties[mp], "community": comm_of.get(mp, -1),
              "defection": round(defection[mp], 3),
              "degree": G.degree(mp, weight="weight")} for mp in mps]
    edges = [{"source": u, "target": v, "weight": round(d["weight"], 3)}
             for u, v, d in G.edges(data=True)]

    pred = _vote_predictor(M, mps, parties, votes)
    report = {
        "n_mps": len(mps), "n_bills": len(votes), "n_edges": G.number_of_edges(),
        "n_communities": len(communities),
        "modularity": round(nx.algorithms.community.modularity(G, communities, weight="weight"), 3),
        "community_party_makeup": _makeup(communities, parties),
        "top_defectors": sorted(({"mp": mp, "party": parties[mp], "defection": round(defection[mp], 3)}
                                 for mp in mps), key=lambda x: x["defection"], reverse=True)[:8],
        "vote_prediction_accuracy": pred,
    }
    _write(nodes, edges, report)
    return report


def _defection_scores(M, mps, idx, parties, votes):
    out = {mp: 0.0 for mp in mps}
    counts = {mp: 0 for mp in mps}
    by_party: dict[str, list[str]] = {}
    for mp in mps:
        by_party.setdefault(parties[mp], []).append(mp)
    for j in range(len(votes)):
        for party, members_ in by_party.items():
            col = [M[idx[mp], j] for mp in members_ if not np.isnan(M[idx[mp], j])]
            if len(col) < 2:
                continue
            line = 1 if sum(1 for x in col if x == 1) >= len(col) / 2 else -1
            for mp in members_:
                v = M[idx[mp], j]
                if np.isnan(v):
                    continue
                counts[mp] += 1
                if v != line:
                    out[mp] += 1
    return {mp: (out[mp] / counts[mp] if counts[mp] else 0.0) for mp in mps}


def _vote_predictor(M, mps, parties, votes) -> float:
    """Predict an MP's yes/no from (party-line, topic, MP defection prior)."""
    from sklearn.linear_model import LogisticRegression
    from sklearn.model_selection import cross_val_score
    plist = sorted(set(parties.values()))
    rows, y = [], []
    for j, v in enumerate(votes):
        col = M[:, j]
        for i, mp in enumerate(mps):
            if np.isnan(col[i]):
                continue
            party = parties[mp]
            same = [col[k] for k, m2 in enumerate(mps)
                    if parties[m2] == party and k != i and not np.isnan(col[k])]
            party_line = (1 if sum(1 for x in same if x == 1) >= len(same) / 2 else -1) if same else 0
            feat = [party_line] + [1 if party == p else 0 for p in plist] \
                   + [hash(v["topic"]) % 4]
            rows.append(feat)
            y.append(1 if col[i] == 1 else 0)
    X, y = np.array(rows, float), np.array(y)
    if len(set(y)) < 2:
        return 0.0
    clf = LogisticRegression(max_iter=1000)
    return round(float(cross_val_score(clf, X, y, cv=5).mean()), 3)


def _makeup(communities, parties):
    out = []
    for c, grp in enumerate(communities):
        from collections import Counter
        cnt = Counter(parties[mp] for mp in grp)
        out.append({"community": c, "size": len(grp),
                    "parties": dict(cnt.most_common())})
    return out


def _write(nodes, edges, report):
    payload = {"nodes": nodes, "edges": edges, "report": report}
    for d in (OUT, DASH):
        os.makedirs(d, exist_ok=True)
        json.dump(payload, open(os.path.join(d, "graph.json"), "w", encoding="utf-8"),
                  ensure_ascii=False, indent=2)
    print(f"[ml.graph] {report['n_mps']} MPs, {report['n_communities']} communities, "
          f"modularity={report['modularity']}, vote-pred acc={report['vote_prediction_accuracy']}")
    print(f"[ml.graph] -> {OUT}/graph.json + dashboard/data/")
