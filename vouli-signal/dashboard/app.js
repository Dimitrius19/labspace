/* Βουλή Signal dashboard — zero-build, reads the pipeline's JSON output. */
"use strict";

const PARTY_COLORS = {
  "ΠΑΣΟΚ": "#16a34a", "ΠΑΣΟΚ - ΚΙΝΑΛ": "#16a34a", "ΣΥΡΙΖΑ": "#e0457b",
  "ΝΕΑ ΑΡΙΣΤΕΡΑ": "#b14ae0", "ΚΚΕ": "#e0473a", "ΕΛΛΗΝΙΚΗ ΛΥΣΗ": "#2f6fe0",
  "ΠΛΕΥΣΗ ΕΛΕΥΘΕΡΙΑΣ": "#e08e2f", "ΝΕΑ ΔΗΜΟΚΡΑΤΙΑ": "#4f7cff", "": "#7a869a",
};

const state = { signals: [], grievances: [], sortKey: "score", sortDir: -1 };
const $ = (s) => document.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };

async function loadJSON(paths) {
  for (const p of paths) {
    try { const r = await fetch(p, { cache: "no-store" }); if (r.ok) return await r.json(); }
    catch (_) {}
  }
  return null;
}

async function boot() {
  const signals = await loadJSON(["data/signals.json", "../out/signals.json"]);
  const grievances = await loadJSON(["data/grievances.json", "../out/grievances.json"]);
  if (!signals) {
    const e = $("#error"); e.classList.remove("hidden");
    e.textContent = "No data found. Run `python -m vouli_signal.pipeline all` then serve this folder (e.g. `python -m http.server` inside dashboard/).";
    return;
  }
  state.signals = signals;
  state.grievances = grievances || [];
  state.topics = (await loadJSON(["data/topics.json", "../out/topics.json"])) || [];
  state.graph = (await loadJSON(["data/graph.json", "../out/graph.json"])) || null;
  initFilters();
  render();
  renderTopics();
  renderGraph();
  renderNetwork();
  const latest = signals.map(s => s.latest_date).filter(Boolean).sort().pop() || "—";
  $("#updated").textContent = "latest " + latest;
  const llm = state.grievances.some(g => g.classifier === "llm");
  $("#classifier").textContent = llm ? "classifier: Claude" : "classifier: heuristic";
}

function initFilters() {
  const mins = [...new Set(state.signals.map(s => s.ministry_name).filter(Boolean))].sort();
  const parties = [...new Set(state.signals.flatMap(s => s.parties).filter(Boolean))].sort();
  for (const m of mins) $("#fMinistry").appendChild(el("option", null, m)).value = m;
  for (const p of parties) $("#fParty").appendChild(el("option", null, p)).value = p;
  ["search", "fMinistry", "fParty", "fAB", "fControls"].forEach(id =>
    $("#" + id).addEventListener("input", render));
  document.querySelectorAll("#signals th[data-k]").forEach(th =>
    th.addEventListener("click", () => {
      const k = th.dataset.k;
      state.sortDir = state.sortKey === k ? -state.sortDir : -1;
      state.sortKey = k; render();
    }));
  $("#closeDrawer").addEventListener("click", () => $("#drawer").classList.add("hidden"));
}

function filtered() {
  const q = $("#search").value.toLowerCase();
  const fm = $("#fMinistry").value, fp = $("#fParty").value, fab = $("#fAB").value;
  const fc = $("#fControls").checked;
  return state.signals.filter(s => {
    if (fm && s.ministry_name !== fm) return false;
    if (fp && !s.parties.includes(fp)) return false;
    if (fab === "A" && !s.ai_addressable) return false;
    if (fab === "B" && s.ai_addressable) return false;
    if (fc && !s.controls_theme) return false;
    if (q && !(s.topic + s.summary + s.parties.join(" ") + s.ministry_name).toLowerCase().includes(q)) return false;
    return true;
  });
}

function render() {
  const rows = filtered().slice().sort((a, b) => {
    const k = state.sortKey, av = a[k], bv = b[k];
    return (av > bv ? 1 : av < bv ? -1 : 0) * state.sortDir;
  });
  renderKPIs(rows);
  renderTable(rows);
  renderMinistryChart(rows);
  renderPartyChart(rows);
  renderABChart(rows);
}

function renderKPIs(rows) {
  const actionable = rows.filter(r => r.ai_addressable);
  const crossParty = rows.filter(r => r.parties.length >= 2);
  const controls = rows.filter(r => r.controls_theme);
  const withThesis = rows.filter(r => r.matched_theses.length);
  const cards = [
    ["good", actionable.length, "AI-addressable (A)"],
    ["", rows.length, "total signals"],
    ["hot", crossParty.length, "cross-party"],
    ["hot", controls.length, "controls theme"],
    ["good", withThesis.length, "matched thesis"],
    ["", new Set(rows.map(r => r.ministry_id)).size, "ministries"],
  ];
  $("#kpis").innerHTML = "";
  for (const [c, v, l] of cards)
    $("#kpis").appendChild(el("div", "kpi " + c, `<div class="v">${v}</div><div class="l">${l}</div>`));
}

function renderTable(rows) {
  $("#count").textContent = `(${rows.length})`;
  const tb = $("#signals tbody"); tb.innerHTML = "";
  rows.forEach((s, i) => {
    const tr = el("tr");
    const theses = s.matched_theses.slice(0, 2).map(t => `<span class="thesis">${t}</span>`).join("<br>")
      + (s.matched_theses.length > 2 ? `<br><span class="muted">+${s.matched_theses.length - 2}</span>` : "");
    tr.innerHTML = `
      <td><span class="score">${s.score}</span></td>
      <td>${s.ministry_name}</td>
      <td>${s.topic} ${s.controls_theme ? '<span class="badge hot">controls</span>' : ""}
          <span class="badge ab-${s.ai_addressable ? "A" : "B"}">${s.ai_addressable ? "A" : "B"}</span></td>
      <td>${s.parties.map(p => `<span class="badge" style="color:${PARTY_COLORS[p] || "#ccc"}">${p}</span>`).join("")}</td>
      <td>${s.frequency}</td>
      <td>${theses || '<span class="muted">—</span>'}</td>
      <td class="muted">${s.latest_date || "—"}</td>`;
    tr.addEventListener("click", () => openDrawer(s));
    tb.appendChild(tr);
  });
}

function barChart(node, items) {
  node.innerHTML = "";
  const max = Math.max(1, ...items.map(i => i.v));
  for (const it of items) {
    const row = el("div", "bar");
    row.innerHTML = `<span class="lab" title="${it.k}">${it.k}</span>
      <span class="track"><span class="fill" style="width:${(it.v / max * 100).toFixed(0)}%;${it.color ? "background:" + it.color : ""}"></span></span>
      <span class="val">${it.v}</span>`;
    node.appendChild(row);
  }
}

function renderMinistryChart(rows) {
  const m = {};
  rows.forEach(r => { m[r.ministry_name] = (m[r.ministry_name] || 0) + r.score; });
  const items = Object.entries(m).map(([k, v]) => ({ k, v: Math.round(v) }))
    .sort((a, b) => b.v - a.v).slice(0, 8);
  barChart($("#chartMinistry"), items);
}

function renderPartyChart(rows) {
  const p = {};
  rows.forEach(r => r.parties.forEach(x => { p[x] = (p[x] || 0) + r.frequency; }));
  const items = Object.entries(p).map(([k, v]) => ({ k, v, color: PARTY_COLORS[k] }))
    .sort((a, b) => b.v - a.v);
  barChart($("#chartParty"), items);
}

function renderABChart(rows) {
  const a = rows.filter(r => r.ai_addressable).length, b = rows.length - a;
  const tot = Math.max(1, a + b), frac = a / tot, C = 2 * Math.PI * 52;
  $("#chartAB").innerHTML = `
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="52" fill="none" stroke="#22262e" stroke-width="14"/>
      <circle cx="60" cy="60" r="52" fill="none" stroke="#21c08b" stroke-width="14"
        stroke-dasharray="${(C * frac).toFixed(1)} ${C.toFixed(1)}"
        transform="rotate(-90 60 60)" stroke-linecap="round"/>
      <text x="60" y="65" text-anchor="middle" fill="#e6edf3" font-size="22" font-weight="700">${Math.round(frac * 100)}%</text>
    </svg>
    <div class="legend"><div><span class="dot" style="background:#21c08b"></span><b>${a}</b> AI-addressable (A)</div>
      <div><span class="dot" style="background:#7a869a"></span><b>${b}</b> political (B)</div></div>`;
}

function renderTopics() {
  const node = document.querySelector("#mlTopics");
  if (!node) return;
  if (!state.topics.length) { node.innerHTML = '<span class="muted">run `ml.cli build`</span>'; return; }
  node.innerHTML = state.topics.map(t =>
    `<div class="topic"><span class="tsize">${t.size}</span>
       <span class="tlabel" title="${(t.top_terms||[]).join(', ')}">${t.label}</span>
       ${t.dominant_party ? `<span class="badge" style="color:${PARTY_COLORS[t.dominant_party]||'#ccc'}">${t.dominant_party}</span>` : ""}</div>`
  ).join("");
}

function renderGraph() {
  const node = document.querySelector("#mlGraph");
  if (!node) return;
  const g = state.graph;
  if (!g || !g.report) { node.innerHTML = '<span class="muted">run `ml.cli graph`</span>'; return; }
  const r = g.report;
  const comm = (r.community_party_makeup || []).filter(c => c.size > 1).slice(0, 4).map(c => {
    const top = Object.entries(c.parties).slice(0, 3)
      .map(([p, n]) => `<span class="badge" style="color:${PARTY_COLORS[p] || '#ccc'}">${p} ${n}</span>`).join("");
    return `<div class="topic"><span class="tsize">${c.size}</span><span class="tlabel">${top}</span></div>`;
  }).join("");
  const defs = (r.top_defectors || []).slice(0, 4).map(d =>
    `<div class="topic"><span class="tsize" style="background:var(--hot)">${d.defection}</span>
       <span class="tlabel">${d.mp}</span>
       <span class="badge" style="color:${PARTY_COLORS[d.party] || '#ccc'}">${d.party}</span></div>`).join("");
  node.innerHTML =
    `<div class="muted" style="font-size:11px;margin-bottom:4px">${r.n_communities} coalitions · modularity ${r.modularity} · vote-pred ${Math.round((r.vote_prediction_accuracy || 0) * 100)}%</div>`
    + comm + '<div class="muted" style="font-size:11px;margin:6px 0 4px">Top defectors</div>' + defs;
}

/* ---- force-directed co-voting network (vanilla Canvas, no deps) ---- */
const COMMUNITY_COLORS = ["#4f7cff", "#21c08b", "#e0457b", "#e08e2f", "#b14ae0",
  "#e0473a", "#2bb3c0", "#c0b22b", "#9aa6b5", "#6a5acd"];
const net = { nodes: [], edges: [], colorBy: "community", alpha: 1, anim: null, hover: null, drag: null };

function nodeColor(n) {
  return net.colorBy === "party" ? (PARTY_COLORS[n.party] || "#888")
    : COMMUNITY_COLORS[(n.community + COMMUNITY_COLORS.length) % COMMUNITY_COLORS.length];
}

function renderNetwork() {
  const cv = document.querySelector("#net"), g = state.graph;
  if (!cv) return;
  if (!g || !g.nodes || !g.nodes.length) { cv.style.display = "none"; return; }
  document.querySelector("#netStats").textContent =
    `${g.nodes.length} MPs · ${g.edges.length} edges · ${g.report.n_communities} coalitions · vote-pred ${Math.round((g.report.vote_prediction_accuracy || 0) * 100)}%`;

  const W = cv.clientWidth || 900, H = 560, dpr = window.devicePixelRatio || 1;
  cv.width = W * dpr; cv.height = H * dpr;
  const ctx = cv.getContext("2d"); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  Object.assign(net, { ctx, W, H, cv });

  const byId = {};
  net.nodes = g.nodes.map(n => { const o = { ...n, x: Math.random() * W, y: Math.random() * H, vx: 0, vy: 0, r: 4 + Math.sqrt((n.degree || 1)) * 1.4 }; byId[n.id] = o; return o; });
  net.edges = g.edges.map(e => ({ s: byId[e.source], t: byId[e.target], w: e.weight })).filter(e => e.s && e.t);
  net.alpha = 1;
  if (net.anim) cancelAnimationFrame(net.anim);
  loop();
  bindNet();
}

function tick() {
  const { nodes, edges, W, H, alpha: k } = net;
  for (let i = 0; i < nodes.length; i++) {
    const a = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const b = nodes[j];
      let dx = a.x - b.x, dy = a.y - b.y, d2 = dx * dx + dy * dy || 0.01, d = Math.sqrt(d2);
      let f = Math.min(40, 1400 / d2), fx = dx / d * f, fy = dy / d * f;
      a.vx += fx; a.vy += fy; b.vx -= fx; b.vy -= fy;
    }
  }
  for (const e of edges) {
    let dx = e.t.x - e.s.x, dy = e.t.y - e.s.y, d = Math.sqrt(dx * dx + dy * dy) || 0.01;
    let f = (d - 64) * 0.02 * e.w, fx = dx / d * f, fy = dy / d * f;
    e.s.vx += fx; e.s.vy += fy; e.t.vx -= fx; e.t.vy -= fy;
  }
  for (const n of nodes) {
    n.vx += (W / 2 - n.x) * 0.002; n.vy += (H / 2 - n.y) * 0.002;
    n.vx *= 0.85; n.vy *= 0.85;
    if (n !== net.drag) { n.x += n.vx * k; n.y += n.vy * k; }
    n.x = Math.max(n.r, Math.min(W - n.r, n.x)); n.y = Math.max(n.r, Math.min(H - n.r, n.y));
  }
  net.alpha = Math.max(0.04, net.alpha * 0.992);
}

function draw() {
  const { ctx, W, H } = net; ctx.clearRect(0, 0, W, H);
  ctx.globalAlpha = 0.45;
  for (const e of net.edges) {
    ctx.strokeStyle = "#26303f"; ctx.lineWidth = Math.max(0.3, e.w * 1.3 - 0.6);
    ctx.beginPath(); ctx.moveTo(e.s.x, e.s.y); ctx.lineTo(e.t.x, e.t.y); ctx.stroke();
  }
  ctx.globalAlpha = 1;
  for (const n of net.nodes) {
    ctx.fillStyle = nodeColor(n);
    ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, 7); ctx.fill();
    if (n.defection > 0.25) { ctx.strokeStyle = "#ff6b4a"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 2.6, 0, 7); ctx.stroke(); }
    if (n === net.hover) { ctx.strokeStyle = "#fff"; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(n.x, n.y, n.r + 1, 0, 7); ctx.stroke(); }
  }
}

function loop() { tick(); draw(); net.anim = requestAnimationFrame(loop); }

function atPointer(ev) {
  const r = net.cv.getBoundingClientRect(), x = ev.clientX - r.left, y = ev.clientY - r.top;
  let best = null, bd = 1e9;
  for (const n of net.nodes) { const d = (n.x - x) ** 2 + (n.y - y) ** 2; if (d < bd && d < (n.r + 6) ** 2) { bd = d; best = n; } }
  return { node: best, x, y };
}

function bindNet() {
  const cv = net.cv, tip = document.querySelector("#netTip");
  cv.onmousemove = (ev) => {
    if (net.drag) { const r = cv.getBoundingClientRect(); net.drag.x = ev.clientX - r.left; net.drag.y = ev.clientY - r.top; net.alpha = Math.max(net.alpha, 0.3); return; }
    const { node } = atPointer(ev); net.hover = node;
    if (node) {
      tip.classList.remove("hidden");
      tip.style.left = (ev.clientX + 14) + "px"; tip.style.top = (ev.clientY + 14) + "px";
      tip.innerHTML = `<b>${node.id}</b><br><span class="k">party</span> ${node.party || "—"}<br>
        <span class="k">coalition</span> ${node.community} &nbsp; <span class="k">defection</span> ${node.defection}`;
    } else tip.classList.add("hidden");
  };
  cv.onmousedown = (ev) => { net.drag = atPointer(ev).node; };
  window.addEventListener("mouseup", () => { net.drag = null; });
  cv.onmouseleave = () => { tip.classList.add("hidden"); net.hover = null; };
  document.querySelector("#netColor").onclick = (e) => {
    net.colorBy = net.colorBy === "community" ? "party" : "community";
    e.target.textContent = "Colour: " + net.colorBy;
  };
  document.querySelector("#netRelayout").onclick = () => {
    for (const n of net.nodes) { n.x = Math.random() * net.W; n.y = Math.random() * net.H; n.vx = n.vy = 0; }
    net.alpha = 1;
  };
}

function openDrawer(s) {
  const items = state.grievances.filter(g => g.ministry_id === s.ministry_id && g.topic === s.topic);
  $("#drawerBody").innerHTML = `
    <h3>${s.topic}</h3>
    <div class="muted">${s.ministry_name}</div>
    <div class="kv"><span class="k">Score</span> <span class="score">${s.score}</span>
      &nbsp;·&nbsp; <span class="badge ab-${s.ai_addressable ? "A" : "B"}">${s.ai_addressable ? "AI-addressable" : "political"}</span>
      ${s.controls_theme ? '<span class="badge hot">controls</span>' : ""}</div>
    <div class="kv"><span class="k">Parties</span> ${s.parties.map(p => `<span class="badge" style="color:${PARTY_COLORS[p] || "#ccc"}">${p}</span>`).join("")}</div>
    <div class="kv"><span class="k">Frequency</span> ${s.frequency} &nbsp;·&nbsp; <span class="k">Latest</span> ${s.latest_date || "—"}</div>
    <div class="kv"><span class="k">Matched theses</span><br>${s.matched_theses.map(t => `<span class="thesis">${t}</span>`).join("<br>") || "—"}</div>
    <h2>Grievances (${items.length})</h2>
    ${items.map(g => `<div class="ex"><b>${(g.mps || []).join(", ") || g.party || "—"}</b>
        <span class="muted">· ${g.date}</span><br>${g.summary}
        ${g.quantities && g.quantities.length ? `<br><span class="muted">${g.quantities.join(" · ")}</span>` : ""}</div>`).join("")}`;
  $("#drawer").classList.remove("hidden");
}

boot();
