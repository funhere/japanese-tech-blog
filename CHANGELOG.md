# Changelog

All notable changes to `japanese-tech-blog` will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.0] — 2026-01-02

### Added
- `SKILL.md` — auto image generation section: 4 image types (OGP/hero, architecture, flowchart, comparison), prompt templates for DALL·E / Midjourney / Stable Diffusion, placement rules, filename conventions, and structured output block
- `SKILL.md` — updated 4-step workflow (added image generation phase between writing and post-processing)
- `SKILL.md` — SVG-first rendering strategy: AI generates diagram as inline SVG → rendered/previewed as HTML artifact → exported to PNG via `sharp`
- `examples/sample-article.md` — hero image and architecture diagram embedded as real PNG references (images actually generated)
- `examples/images/docker-compose-intro-hero-01.png` — OGP/hero image (720×405 px, 16:9)
- `examples/images/docker-compose-intro-architecture-01.png` — service topology diagram (720×405 px, 16:9)
- `examples/images/export-png.js` — Node.js script to render embedded SVGs to PNG via `sharp` (no browser required)
- `package.json` — added `sharp ^0.35.2` dependency for PNG export
- All READMEs — `Auto image generation` / `記事画像の自動生成` / `配套图片自动生成` sections with image-type table, style spec, and output example
- All READMEs — feature table updated with image generation row
- All READMEs — file structure trees updated to include `examples/images/`

---

## [1.0.0] — 2026-01-01

### Added
- `SKILL.md` — core skill with platform detection (Zenn / Qiita / note / personal blog / internal docs)
- Japanese writing style guide (です・ます vs だ・である, character width rules, terminology)
- SEO title design section with 5 title patterns
- Code snippet guidelines (language tagging, inline Japanese comments, output blocks)
- Reader experience section (callout boxes, image alt text)
- Common pitfalls table with actionable fixes
- `references/article-templates.md` — 3 article templates (how-to, concept explainer, comparison) + Zenn/Qiita markup cheatsheets
- `examples/sample-article.md` — full Docker Compose sample article
- `README.md` (English), `README.zh.md` (Chinese), `README.ja.md` (Japanese)
- MIT license
- `package.json` for `npx skills` compatibility
