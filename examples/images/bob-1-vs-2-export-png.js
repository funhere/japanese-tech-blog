#!/usr/bin/env node
/**
 * bob-1-vs-2-export-png.js
 * Generates 3 diagram PNGs for the article "IBM Bob 1.0 vs 2.0 入門".
 *
 * Usage:
 *   node bob-1-vs-2-export-png.js
 *
 * Requires: sharp  (already in package.json)
 */

const sharp = require("sharp");
const path  = require("path");
const out   = __dirname;

// ── SVG 1: Eyecatch / OGP ────────────────────────────────────────────────────
const eyecatchSVG = `<svg width="720" height="405" viewBox="0 0 720 405"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="405" fill="#ffffff"/>
  <!-- subtle grid -->
  <g stroke="#f1f5f9" stroke-width="1">
    <line x1="0" y1="135" x2="720" y2="135"/>
    <line x1="0" y1="270" x2="720" y2="270"/>
    <line x1="240" y1="0" x2="240" y2="405"/>
    <line x1="480" y1="0" x2="480" y2="405"/>
  </g>
  <!-- header text -->
  <text x="360" y="50" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="26" font-weight="700" fill="#1e293b">IBM Bob 1.0 vs 2.0</text>
  <text x="360" y="76" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="13" fill="#64748b">Skill · Mode · MCP — What Changed?</text>
  <!-- divider -->
  <line x1="80" y1="90" x2="640" y2="90" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- ── Bob 1.0 panel ── -->
  <rect x="48" y="108" width="282" height="224" rx="10"
    fill="#f8fafc" stroke="#94a3b8" stroke-width="1.8"/>
  <!-- panel header -->
  <rect x="48" y="108" width="282" height="44" rx="10" fill="#334155"/>
  <rect x="48" y="130" width="282" height="22" fill="#334155"/>
  <text x="189" y="136" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="16" font-weight="700" fill="#ffffff">Bob 1.0</text>
  <!-- single block -->
  <rect x="80" y="166" width="218" height="40" rx="6" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.2"/>
  <text x="189" y="191" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="13" fill="#475569">Prompt → Response</text>
  <!-- fixed tools note -->
  <rect x="80" y="220" width="218" height="30" rx="5" fill="#f1f5f9"/>
  <text x="189" y="239" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="11" fill="#94a3b8">Fixed tools only</text>
  <!-- no extensions badge -->
  <rect x="80" y="264" width="218" height="30" rx="5" fill="#fef2f2" stroke="#fecaca" stroke-width="1"/>
  <text x="189" y="283" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="11" fill="#dc2626">No extensions / customisation</text>
  <!-- pill -->
  <rect x="90" y="308" width="198" height="18" rx="9" fill="#e2e8f0"/>
  <text x="189" y="321" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="9" fill="#64748b">Simple · Zero config</text>

  <!-- ── Bob 2.0 panel ── -->
  <rect x="390" y="108" width="282" height="224" rx="10"
    fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
  <!-- panel header -->
  <rect x="390" y="108" width="282" height="44" rx="10" fill="#1e3a5f"/>
  <rect x="390" y="130" width="282" height="22" fill="#1e3a5f"/>
  <text x="531" y="136" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="16" font-weight="700" fill="#ffffff">Bob 2.0</text>
  <!-- skill row -->
  <rect x="410" y="162" width="242" height="26" rx="5" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.2"/>
  <text x="434" y="179" font-family="Arial,Helvetica,sans-serif" font-size="12" font-weight="600" fill="#1d4ed8">skill</text>
  <text x="490" y="179" font-family="Arial,Helvetica,sans-serif" font-size="11" fill="#475569">Reusable task playbooks</text>
  <!-- mode row -->
  <rect x="410" y="196" width="242" height="26" rx="5" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.2"/>
  <text x="434" y="213" font-family="Arial,Helvetica,sans-serif" font-size="12" font-weight="600" fill="#15803d">mode</text>
  <text x="490" y="213" font-family="Arial,Helvetica,sans-serif" font-size="11" fill="#475569">Agent role switching</text>
  <!-- mcp row -->
  <rect x="410" y="230" width="242" height="26" rx="5" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1.2"/>
  <text x="434" y="247" font-family="Arial,Helvetica,sans-serif" font-size="12" font-weight="600" fill="#7e22ce">MCP</text>
  <text x="490" y="247" font-family="Arial,Helvetica,sans-serif" font-size="11" fill="#475569">External tool integration</text>
  <!-- image install badge -->
  <rect x="410" y="268" width="242" height="28" rx="5" fill="#f0fdf4" stroke="#86efac" stroke-width="1"/>
  <text x="531" y="286" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="11" fill="#16a34a">bob install skill &lt;name&gt;</text>
  <!-- "new" badge -->
  <rect x="620" y="112" width="44" height="18" rx="9" fill="#3b82f6"/>
  <text x="642" y="125" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="700" fill="#ffffff">NEW</text>

  <!-- centre arrow -->
  <defs>
    <marker id="ev" markerWidth="9" markerHeight="9" refX="8" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L9,3.5 z" fill="#3b82f6"/>
    </marker>
  </defs>
  <line x1="340" y1="220" x2="378" y2="220"
    stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"
    marker-end="url(#ev)"/>
  <text x="359" y="213" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="9" fill="#64748b">evolves</text>

  <!-- bottom border -->
  <rect x="1" y="1" width="718" height="403" rx="5"
    fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
</svg>`;

// ── SVG 2: Architecture comparison diagram ────────────────────────────────────
const archSVG = `<svg width="720" height="440" viewBox="0 0 720 440"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="440" fill="#ffffff"/>
  <text x="360" y="30" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="15" font-weight="700" fill="#1e293b">Architecture: Bob 1.0 vs Bob 2.0</text>
  <line x1="60" y1="44" x2="660" y2="44" stroke="#e5e7eb" stroke-width="1"/>

  <!-- ── Bob 1.0 column ── -->
  <text x="180" y="66" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="13" font-weight="700" fill="#334155">Bob 1.0</text>

  <!-- user -->
  <rect x="110" y="80" width="140" height="36" rx="6"
    fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="180" y="103" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="12" fill="#334155">User Prompt</text>

  <!-- arrow down -->
  <defs>
    <marker id="da" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z" fill="#94a3b8"/>
    </marker>
    <marker id="db" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z" fill="#3b82f6"/>
    </marker>
  </defs>
  <line x1="180" y1="116" x2="180" y2="148"
    stroke="#94a3b8" stroke-width="1.5" marker-end="url(#da)"/>

  <!-- bob agent box -->
  <rect x="90" y="148" width="180" height="80" rx="8"
    fill="#f8fafc" stroke="#334155" stroke-width="2"/>
  <rect x="90" y="148" width="180" height="32" rx="8" fill="#334155"/>
  <rect x="90" y="163" width="180" height="17" fill="#334155"/>
  <text x="180" y="169" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="700" fill="#ffffff">Bob Agent</text>
  <text x="180" y="202" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="11" fill="#64748b">Built-in tools only</text>
  <text x="180" y="218" text-anchor="middle"
    font-family="'Courier New',monospace" font-size="10" fill="#94a3b8">read / write / exec</text>

  <!-- arrow down -->
  <line x1="180" y1="228" x2="180" y2="260"
    stroke="#94a3b8" stroke-width="1.5" marker-end="url(#da)"/>

  <!-- output -->
  <rect x="110" y="260" width="140" height="36" rx="6"
    fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="180" y="283" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="12" fill="#334155">Code / Answer</text>

  <!-- 1.0 brace label -->
  <line x1="72" y1="80" x2="72" y2="296" stroke="#e2e8f0" stroke-width="1.5"/>
  <line x1="72" y1="80" x2="82" y2="80" stroke="#e2e8f0" stroke-width="1.5"/>
  <line x1="72" y1="296" x2="82" y2="296" stroke="#e2e8f0" stroke-width="1.5"/>

  <!-- ── vertical separator ── -->
  <line x1="360" y1="56" x2="360" y2="420"
    stroke="#e5e7eb" stroke-width="1.5" stroke-dasharray="6 4"/>

  <!-- ── Bob 2.0 column ── -->
  <text x="540" y="66" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="13" font-weight="700" fill="#1e3a5f">Bob 2.0</text>

  <!-- user -->
  <rect x="470" y="80" width="140" height="36" rx="6"
    fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
  <text x="540" y="103" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="12" fill="#1d4ed8">User Prompt</text>

  <line x1="540" y1="116" x2="540" y2="148"
    stroke="#3b82f6" stroke-width="1.5" marker-end="url(#db)"/>

  <!-- skill resolver -->
  <rect x="450" y="148" width="180" height="34" rx="6"
    fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
  <text x="540" y="170" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="11" font-weight="600" fill="#1d4ed8">Skill Resolver</text>

  <line x1="540" y1="182" x2="540" y2="210"
    stroke="#3b82f6" stroke-width="1.5" marker-end="url(#db)"/>

  <!-- mode selector -->
  <rect x="450" y="210" width="180" height="34" rx="6"
    fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
  <text x="540" y="232" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="11" font-weight="600" fill="#15803d">Mode Selector</text>

  <line x1="540" y1="244" x2="540" y2="272"
    stroke="#3b82f6" stroke-width="1.5" marker-end="url(#db)"/>

  <!-- bob agent 2.0 -->
  <rect x="450" y="272" width="180" height="60" rx="8"
    fill="#f8fafc" stroke="#1e3a5f" stroke-width="2"/>
  <rect x="450" y="272" width="180" height="28" rx="8" fill="#1e3a5f"/>
  <rect x="450" y="286" width="180" height="14" fill="#1e3a5f"/>
  <text x="540" y="291" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="13" font-weight="700" fill="#ffffff">Bob Agent</text>
  <text x="540" y="318" text-anchor="middle"
    font-family="'Courier New',monospace" font-size="10" fill="#3b82f6">+ MCP tools</text>

  <line x1="540" y1="332" x2="540" y2="360"
    stroke="#3b82f6" stroke-width="1.5" marker-end="url(#db)"/>

  <!-- output -->
  <rect x="470" y="360" width="140" height="36" rx="6"
    fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
  <text x="540" y="383" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="12" fill="#1d4ed8">Code / Answer</text>

  <!-- MCP external note -->
  <rect x="390" y="282" width="50" height="22" rx="4" fill="#faf5ff" stroke="#e9d5ff" stroke-width="1"/>
  <text x="415" y="297" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="9" fill="#7e22ce">MCP</text>
  <line x1="440" y1="293" x2="452" y2="293"
    stroke="#c084fc" stroke-width="1" stroke-dasharray="3 2"/>

  <!-- outer border -->
  <rect x="1" y="1" width="718" height="438" rx="5"
    fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
</svg>`;

// ── SVG 3: Skill install flow diagram ────────────────────────────────────────
const flowSVG = `<svg width="720" height="200" viewBox="0 0 720 200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="200" fill="#ffffff"/>
  <text x="360" y="26" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="14" font-weight="700" fill="#1e293b">Skill Install Flow: bob install skill &lt;name&gt;</text>
  <line x1="60" y1="36" x2="660" y2="36" stroke="#e5e7eb" stroke-width="1"/>

  <defs>
    <marker id="fa" markerWidth="9" markerHeight="9" refX="8" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L9,3.5 z" fill="#3b82f6"/>
    </marker>
  </defs>

  <!-- step boxes -->
  <!-- 1: run command -->
  <rect x="24" y="68" width="136" height="64" rx="8"
    fill="#f8fafc" stroke="#334155" stroke-width="1.8"/>
  <rect x="24" y="68" width="136" height="26" rx="8" fill="#334155"/>
  <rect x="24" y="80" width="136" height="14" fill="#334155"/>
  <text x="92" y="86" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="700" fill="#94a3b8">STEP 1</text>
  <text x="92" y="110" text-anchor="middle"
    font-family="'Courier New',monospace" font-size="10" fill="#334155">bob install skill</text>
  <text x="92" y="124" text-anchor="middle"
    font-family="'Courier New',monospace" font-size="10" fill="#3b82f6">japanese-tech-blog</text>

  <!-- arrow -->
  <line x1="160" y1="100" x2="188" y2="100"
    stroke="#3b82f6" stroke-width="2" marker-end="url(#fa)"/>

  <!-- 2: fetch from registry -->
  <rect x="190" y="68" width="136" height="64" rx="8"
    fill="#f8fafc" stroke="#3b82f6" stroke-width="1.8"/>
  <rect x="190" y="68" width="136" height="26" rx="8" fill="#3b82f6"/>
  <rect x="190" y="80" width="136" height="14" fill="#3b82f6"/>
  <text x="258" y="86" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="700" fill="#ffffff">STEP 2</text>
  <text x="258" y="108" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="11" fill="#334155">Fetch SKILL.md</text>
  <text x="258" y="124" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" fill="#64748b">from registry</text>

  <!-- arrow -->
  <line x1="326" y1="100" x2="354" y2="100"
    stroke="#3b82f6" stroke-width="2" marker-end="url(#fa)"/>

  <!-- 3: write to .bob/skills/ -->
  <rect x="356" y="68" width="136" height="64" rx="8"
    fill="#f8fafc" stroke="#3b82f6" stroke-width="1.8"/>
  <rect x="356" y="68" width="136" height="26" rx="8" fill="#3b82f6"/>
  <rect x="356" y="80" width="136" height="14" fill="#3b82f6"/>
  <text x="424" y="86" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="700" fill="#ffffff">STEP 3</text>
  <text x="424" y="108" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="11" fill="#334155">Write to disk</text>
  <text x="424" y="122" text-anchor="middle"
    font-family="'Courier New',monospace" font-size="9" fill="#64748b">.bob/skills/&lt;name&gt;/</text>

  <!-- arrow -->
  <line x1="492" y1="100" x2="520" y2="100"
    stroke="#3b82f6" stroke-width="2" marker-end="url(#fa)"/>

  <!-- 4: Bob loads skill -->
  <rect x="522" y="68" width="174" height="64" rx="8"
    fill="#f0fdf4" stroke="#16a34a" stroke-width="1.8"/>
  <rect x="522" y="68" width="174" height="26" rx="8" fill="#16a34a"/>
  <rect x="522" y="80" width="174" height="14" fill="#16a34a"/>
  <text x="609" y="86" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="700" fill="#ffffff">STEP 4 — Active</text>
  <text x="609" y="108" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="11" fill="#334155">Bob loads skill</text>
  <text x="609" y="124" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" fill="#16a34a">Ready to use ✓</text>

  <!-- bottom note -->
  <text x="360" y="168" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" fill="#94a3b8">
    Like Docker image pull — versioned, shareable, project-scoped
  </text>

  <!-- outer border -->
  <rect x="1" y="1" width="718" height="198" rx="5"
    fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
</svg>`;

// ── Generate PNGs ─────────────────────────────────────────────────────────────
async function run() {
  const files = [
    { name: "bob-1-vs-2-eyecatch-01.png",     svg: eyecatchSVG },
    { name: "bob-1-vs-2-architecture-02.png",  svg: archSVG     },
    { name: "bob-1-vs-2-flow-03.png",          svg: flowSVG     },
  ];

  for (const { name, svg } of files) {
    const dest = path.join(out, name);
    await sharp(Buffer.from(svg)).png().toFile(dest);
    console.log(`✅  Saved: ${dest}`);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
