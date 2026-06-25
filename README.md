# japanese-tech-blog

> An agent skill for writing high-quality Japanese technical blog posts.  
> 日本語技術ブログ記事の執筆を支援するエージェントスキルです。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills.sh](https://img.shields.io/badge/skills.sh-compatible-brightgreen)](https://skills.sh)

[English](#) | [日本語](README.ja.md) | [中文](README.zh.md)

---

## What is this?

`japanese-tech-blog` is an **Agent Skill** — a modular instruction pack that teaches AI coding assistants (IBM Bob, Claude Code, OpenAI Codex, etc.) to write publication-ready Japanese technical blog articles following the conventions of **Zenn**, **Qiita**, **note**, and personal blogs.

### What the skill covers

| Module | Description |
|---|---|
| Platform adaptation | Zenn `:::message`, Qiita `:::note`, and other platform-specific markup |
| Japanese writing style | です・ます vs だ・である, sentence length, full/half-width character rules |
| SEO title design | 5 title patterns + keyword placement guidelines |
| Article structure templates | How-to, concept explainer, and comparison — 3 templates |
| Common pitfall guide | Avoiding long intros, unexplained code, weak summaries, and more |
| **Auto image generation** | Generates 1–4 professional technical diagrams per article with ready-to-use prompts for DALL·E / Midjourney / Stable Diffusion |

---

## Installation

### Method 1: IBM Bob (recommended)

```bash
# Global install — available in all projects
npx skills add funhere/japanese-tech-blog -g -y

# Project-local install
npx skills add funhere/japanese-tech-blog -y
```

After installation, Bob automatically loads the skill at the start of the next conversation.

### Method 2: Claude Code

```bash
npx skills add funhere/japanese-tech-blog -g -y
```

Or copy manually to Claude Code's skills directory:

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.claude/skills/japanese-tech-blog/
```

### Method 3: OpenAI Codex

Add the contents of `SKILL.md` to your Codex system prompt, or copy the folder to your configured skills directory:

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.codex/skills/japanese-tech-blog/
```

### Method 4: Manual clone (universal)

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
# Then copy to your agent's skills directory:
# IBM Bob  →  ~/.bob/skills/japanese-tech-blog/
# Claude Code  →  ~/.claude/skills/japanese-tech-blog/
```

---

## Usage

Once installed, just tell your AI assistant what you want to write in natural language:

### Example 1: Write a new article

```
Write a Zenn article about setting up a Python dev environment with uv.
Aimed at readers with some Python experience, standard length.
```

### Example 2: Specify platform and article type

```
Qiita 向けに TypeScript の型ガバナンスについての記事を書いて。
中級者向け、2000 字程度でお願いします。
```

### Example 3: Translate / localise an English article

```
Please rewrite this English technical document as a Japanese tech blog post for note.
```

### Example 4: Concept explainer article

```
Write a Japanese article for Qiita explaining the difference between Docker containers and images, for beginners.
```

### Auto-trigger conditions

The skill activates automatically when you use keywords like:

- "write a Japanese tech blog", "Qiita article"
- 「ブログ記事を書いて」「Zenn に投稿したい」
- 「Qiita 向けに書いて」「技術記事をまとめて」
- Translating / localising English technical content into Japanese

---

## Use Cases

| Scenario | Prompt example |
|---|---|
| New technology intro | `Write a Zenn-format beginner's guide to Bun` |
| Lessons-learned post | `Turn my Next.js 14 App Router issues into a Qiita article` |
| Tool comparison | `Write a Japanese comparison article: pnpm vs npm vs yarn` |
| Source code deep-dive | `Write a Japanese article about React Fiber architecture for note` |
| Weekly / monthly report | `Turn this engineer's monthly report into a publishable Japanese tech article` |

---

## Auto Image Generation

After writing the article, the skill automatically produces **1–4 professional technical diagram prompts** — one per meaningful visual opportunity. These are ready to paste into DALL·E, Midjourney, or Stable Diffusion.

### Image types

| Type | Placement | When used |
|---|---|---|
| **OGP / Hero image** | Below article title | Every article |
| **Architecture diagram** | Opening of the architecture section | System/component articles |
| **Flowchart** | Opening of the step-by-step section | How-to / process articles |
| **Comparison diagram** | Inside the comparison section | Comparison articles only |

### Style specification (all images)

All prompts enforce a consistent professional look:
- **Background:** white or light gray
- **Colors:** dark navy text, `#3b82f6` blue accents, `#10b981` green for success states
- **Typography:** sans-serif, clean and legible — labels in **English or Japanese**
- **No** cartoons, decorations, gradients, or people

### Output format

After the article body, the skill outputs a block like this:

```
---
## 🖼 Images to generate (3)

### Image 1 — OGP / Hero
Placement: below article title
Filename: docker-compose-intro-hero-01.png
Prompt:
A clean, professional technical diagram for a Japanese tech blog article about
Docker Compose. Shows interconnected service containers (app, db, proxy) on a
white background. Style: minimalist flat design, dark navy text, blue (#3b82f6)
accent arrows. Text: "Docker Compose" in English, sans-serif. No people, no gradients.

### Image 2 — Architecture diagram
Placement: opening of "Docker Compose とは" section
Filename: docker-compose-intro-architecture-01.png
Prompt:
...
---
```

---

## File structure

```
japanese-tech-blog/
├── SKILL.md                       # Core skill instructions (auto-loaded by agent)
├── references/
│   └── article-templates.md      # 3 article templates + platform markup cheatsheets
├── examples/
│   ├── sample-article.md         # Sample generated article (with image placeholders)
│   └── images/                   # Place generated images here (DALL·E / Midjourney / SD)
│       ├── docker-compose-intro-hero-01.png
│       └── docker-compose-intro-architecture-01.png
├── README.md                      # This file (English)
├── README.ja.md                   # Japanese README
├── README.zh.md                   # Chinese README
├── package.json                   # npx skills metadata
└── LICENSE                        # MIT
```

---

## FAQ

**Q: The skill doesn't trigger automatically after installation.**  
A: Make sure your AI assistant supports skills loading. Bob and Claude Code scan installed skills at the start of each conversation. You can also trigger it explicitly: "Use the japanese-tech-blog skill to write a Zenn article about X."

**Q: Can the generated article be published as-is?**  
A: Yes, as a first draft. We recommend reviewing technical accuracy, code examples, and adjusting to your personal style before publishing.

**Q: Which platforms are supported?**  
A: Zenn, Qiita, note, personal blogs (Hugo / Gatsby / Astro, etc.), and internal technical documentation.

**Q: Can it write English articles?**  
A: This skill is optimised for Japanese writing. For English articles, use a general-purpose writing skill.

---

## Contributing

PRs welcome. After modifying `SKILL.md`, ask your agent to generate a sample article to verify the output before submitting.

## License

[MIT](LICENSE) © funhere
