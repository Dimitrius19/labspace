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
  initFilters();
  render();
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
