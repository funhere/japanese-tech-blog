#!/usr/bin/env node
/**
 * export-png.js
 * Converts the two embedded SVGs to PNG files using sharp (no browser needed).
 *
 * Usage:
 *   npm install sharp      (first time only)
 *   node export-png.js
 */

const sharp = require("sharp");
const path  = require("path");
const out   = __dirname;

// ── SVG 1: OGP / Hero ─────────────────────────────────────────────────────────
const heroSVG = `<svg width="720" height="405" viewBox="0 0 720 405"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="405" fill="#ffffff"/>
  <g stroke="#f1f5f9" stroke-width="1">
    <line x1="0" y1="135" x2="720" y2="135"/>
    <line x1="0" y1="270" x2="720" y2="270"/>
    <line x1="240" y1="0" x2="240" y2="405"/>
    <line x1="480" y1="0" x2="480" y2="405"/>
  </g>
  <!-- title -->
  <text x="360" y="56" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="28" font-weight="700" fill="#1e293b">Docker Compose</text>
  <text x="360" y="80" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="13" fill="#64748b">Local Development Environment Setup</text>
  <!-- app box shadow -->
  <rect x="92" y="118" width="196" height="182" rx="10" fill="#e2e8f0"/>
  <!-- app box -->
  <rect x="88" y="114" width="196" height="182" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <rect x="88" y="114" width="196" height="42" rx="10" fill="#1e293b"/>
  <rect x="88" y="134" width="196" height="22" fill="#1e293b"/>
  <circle cx="108" cy="135" r="5" fill="#ef4444"/>
  <circle cx="124" cy="135" r="5" fill="#f59e0b"/>
  <circle cx="140" cy="135" r="5" fill="#10b981"/>
  <text x="186" y="142" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="14" font-weight="700" fill="#ffffff">app</text>
  <text x="186" y="180" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="12" fill="#475569">node:20-alpine</text>
  <text x="186" y="200" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="11" fill="#3b82f6">port 3000:3000</text>
  <text x="186" y="220" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="11" fill="#64748b">volume .:/app</text>
  <rect x="108" y="258" width="156" height="22" rx="11" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <text x="186" y="273" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="10" fill="#3b82f6">localhost:3000</text>
  <!-- arrow -->
  <defs>
    <marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
      <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6"/>
    </marker>
  </defs>
  <line x1="286" y1="205" x2="430" y2="205"
    stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"
    marker-end="url(#ah)"/>
  <rect x="314" y="190" width="92" height="18" rx="4" fill="#eff6ff"/>
  <text x="360" y="203" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="10" font-weight="600" fill="#3b82f6">depends_on</text>
  <!-- db box shadow -->
  <rect x="440" y="118" width="196" height="182" rx="10" fill="#e2e8f0"/>
  <!-- db box -->
  <rect x="436" y="114" width="196" height="182" rx="10" fill="#f8fafc" stroke="#1e293b" stroke-width="2"/>
  <rect x="436" y="114" width="196" height="42" rx="10" fill="#1e293b"/>
  <rect x="436" y="134" width="196" height="22" fill="#1e293b"/>
  <circle cx="456" cy="135" r="5" fill="#ef4444"/>
  <circle cx="472" cy="135" r="5" fill="#f59e0b"/>
  <circle cx="488" cy="135" r="5" fill="#10b981"/>
  <text x="534" y="142" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="14" font-weight="700" fill="#ffffff">db</text>
  <text x="534" y="180" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="12" fill="#475569">postgres:16</text>
  <text x="534" y="200" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="11" fill="#3b82f6">port 5432:5432</text>
  <text x="534" y="220" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="11" fill="#64748b">volume db-data</text>
  <rect x="456" y="258" width="156" height="22" rx="11" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <text x="534" y="273" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="10" fill="#3b82f6">localhost:5432</text>
  <!-- bottom pill -->
  <rect x="248" y="338" width="224" height="34" rx="17" fill="#1e293b"/>
  <text x="360" y="360" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="13" font-weight="600" fill="#ffffff">$ docker compose up -d</text>
  <rect x="1" y="1" width="718" height="403" rx="5" fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
</svg>`;

// ── SVG 2: Architecture diagram ────────────────────────────────────────────────
const archSVG = `<svg width="720" height="405" viewBox="0 0 720 405"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="405" fill="#ffffff"/>
  <!-- title -->
  <text x="360" y="32" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="15" font-weight="700" fill="#1e293b">Docker Compose — Service Architecture</text>
  <!-- project boundary -->
  <rect x="32" y="52" width="656" height="292" rx="10"
    fill="#fafafa" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="8 5"/>
  <rect x="258" y="43" width="204" height="22" rx="4" fill="#ffffff" stroke="#e5e7eb" stroke-width="1"/>
  <text x="360" y="58" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="11" font-weight="600" fill="#64748b">docker-compose.yml</text>
  <!-- service: app -->
  <rect x="60" y="78" width="240" height="224" rx="8"
    fill="#f8fafc" stroke="#1e293b" stroke-width="1.8"/>
  <rect x="60" y="78" width="240" height="38" rx="8" fill="#1e293b"/>
  <rect x="60" y="97" width="240" height="19" fill="#1e293b"/>
  <text x="96" y="102" font-family="'Courier New',monospace"
    font-size="11" fill="#94a3b8">service</text>
  <text x="180" y="102" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="14" font-weight="700" fill="#ffffff">app</text>
  <text x="80" y="140" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">image:</text>
  <text x="136" y="140" font-family="'Courier New',monospace" font-size="11" fill="#3b82f6">node:20-alpine</text>
  <text x="80" y="163" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">ports:</text>
  <text x="136" y="163" font-family="'Courier New',monospace" font-size="11" fill="#3b82f6">"3000:3000"</text>
  <text x="80" y="186" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">volumes:</text>
  <text x="148" y="186" font-family="'Courier New',monospace" font-size="11" fill="#3b82f6">.:/app</text>
  <text x="80" y="209" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">command:</text>
  <text x="80" y="224" font-family="'Courier New',monospace" font-size="11" fill="#64748b">  npm install &amp;&amp; npm start</text>
  <text x="80" y="248" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">depends_on:</text>
  <text x="80" y="263" font-family="'Courier New',monospace" font-size="11" fill="#f97316">  - db</text>
  <rect x="72" y="278" width="144" height="18" rx="9"
    fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <text x="144" y="291" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" fill="#3b82f6">localhost:3000</text>
  <!-- arrow depends_on -->
  <defs>
    <marker id="bh" markerWidth="9" markerHeight="9" refX="8" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L9,3.5 z" fill="#3b82f6"/>
    </marker>
    <marker id="ch" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
      <path d="M0,0 L0,7 L7,3.5 z" fill="#94a3b8"/>
    </marker>
  </defs>
  <line x1="300" y1="190" x2="418" y2="190"
    stroke="#3b82f6" stroke-width="2.2" stroke-linecap="round"
    marker-end="url(#bh)"/>
  <rect x="312" y="174" width="96" height="18" rx="4" fill="#eff6ff"/>
  <text x="360" y="187" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="10" font-weight="600" fill="#3b82f6">depends_on</text>
  <!-- service: db -->
  <rect x="420" y="78" width="240" height="224" rx="8"
    fill="#f8fafc" stroke="#1e293b" stroke-width="1.8"/>
  <rect x="420" y="78" width="240" height="38" rx="8" fill="#1e293b"/>
  <rect x="420" y="97" width="240" height="19" fill="#1e293b"/>
  <text x="456" y="102" font-family="'Courier New',monospace"
    font-size="11" fill="#94a3b8">service</text>
  <text x="540" y="102" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="14" font-weight="700" fill="#ffffff">db</text>
  <text x="440" y="140" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">image:</text>
  <text x="496" y="140" font-family="'Courier New',monospace" font-size="11" fill="#3b82f6">postgres:16</text>
  <text x="440" y="163" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">ports:</text>
  <text x="496" y="163" font-family="'Courier New',monospace" font-size="11" fill="#3b82f6">"5432:5432"</text>
  <text x="440" y="186" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">volumes:</text>
  <text x="508" y="186" font-family="'Courier New',monospace" font-size="11" fill="#3b82f6">db-data:/var/…</text>
  <text x="440" y="209" font-family="'Courier New',monospace" font-size="11" fill="#94a3b8">environment:</text>
  <text x="440" y="224" font-family="'Courier New',monospace" font-size="11" fill="#64748b">  POSTGRES_USER: user</text>
  <text x="440" y="239" font-family="'Courier New',monospace" font-size="11" fill="#64748b">  POSTGRES_DB: mydb</text>
  <rect x="432" y="278" width="144" height="18" rx="9"
    fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
  <text x="504" y="291" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif" font-size="10" fill="#3b82f6">localhost:5432</text>
  <!-- volume connector -->
  <line x1="504" y1="302" x2="504" y2="330"
    stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"
    marker-end="url(#ch)"/>
  <!-- cylinder -->
  <rect x="442" y="340" width="124" height="36" rx="4"
    fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
  <ellipse cx="504" cy="340" rx="62" ry="11"
    fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="504" y="362" text-anchor="middle"
    font-family="'Courier New',monospace"
    font-size="12" font-weight="600" fill="#475569">db-data</text>
  <text x="504" y="376" text-anchor="middle"
    font-family="Arial,Helvetica,sans-serif"
    font-size="9" fill="#94a3b8">named volume</text>
  <rect x="1" y="1" width="718" height="403" rx="5" fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
</svg>`;

async function run() {
  const files = [
    { name: "docker-compose-intro-hero-01.png",         svg: heroSVG },
    { name: "docker-compose-intro-architecture-01.png", svg: archSVG },
  ];

  for (const { name, svg } of files) {
    const dest = path.join(out, name);
    await sharp(Buffer.from(svg))
      .png()
      .toFile(dest);
    console.log(`✅  Saved: ${dest}`);
  }
}

run().catch(err => { console.error(err); process.exit(1); });
