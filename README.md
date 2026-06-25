# japanese-tech-blog

> An agent skill for writing high-quality Japanese technical blog posts.  
> 日本語技術ブログ記事の執筆を支援するエージェントスキルです。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills.sh](https://img.shields.io/badge/skills.sh-compatible-brightgreen)](https://skills.sh)

[English](#english) | [日本語](#japanese) | [中文](#chinese)

---

<a name="english"></a>
## English

### What it does

`japanese-tech-blog` is an agent skill that guides AI coding assistants (Bob, Claude Code, Codex, etc.) to write publication-ready Japanese technical blog articles following the conventions of **Zenn**, **Qiita**, **note**, and personal blogs.

It encodes:
- Platform-specific markup (Zenn `:::message`, Qiita `:::note`, etc.)
- Japanese writing style guide (です・ます vs だ・である, sentence length, half-width alphanumerics)
- SEO-optimised title patterns
- Article structure templates (how-to, concept explainer, comparison)
- Common pitfalls and how to avoid them

### Installation

#### IBM Bob / Claude Code (recommended)

```bash
# Global install — available in all projects
npx skills add fuukaiyuu/japanese-tech-blog -g -y

# Or: project-local install
npx skills add fuukaiyuu/japanese-tech-blog -y
```

#### Manual install (any agent with a skills directory)

```bash
# IBM Bob
cp -r . ~/.bob/skills/japanese-tech-blog/

# Claude Code
cp -r . ~/.claude/skills/japanese-tech-blog/
```

#### OpenAI Codex

Add the `SKILL.md` content to your Codex system prompt or place the folder in your configured skills directory:

```bash
cp -r . ~/.codex/skills/japanese-tech-blog/
```

#### Direct clone

```bash
git clone https://github.com/fuukaiyuu/japanese-tech-blog.git
cd japanese-tech-blog
# then copy to your agent's skills directory as above
```

### Usage

Once installed, just talk to your agent naturally:

```
Write a Zenn article about setting up a Python dev environment with uv.
```
```
Qiita 向けに TypeScript の型ガバナンスについての記事を書いて。
```
```
Translate this English README into a Japanese technical blog post for note.
```

The skill triggers automatically when you mention blog writing, Zenn/Qiita/note, or ask to write a Japanese technical article.

### Example output

See [`examples/sample-article.md`](examples/sample-article.md) for a full sample article generated using this skill.

### File structure

```
japanese-tech-blog/
├── SKILL.md                       # Main skill instructions (auto-loaded by agent)
├── references/
│   └── article-templates.md      # 3 article templates + platform markup cheatsheets
├── examples/
│   └── sample-article.md         # Sample generated article
├── README.md                      # This file
├── README.zh.md                   # Chinese README
└── LICENSE                        # MIT
```

---

<a name="japanese"></a>
## 日本語

### できること

`japanese-tech-blog` は、AI コーディングアシスタント（Bob・Claude Code・Codex など）が **Zenn・Qiita・note** 等のプラットフォーム向けに日本語技術ブログ記事を執筆する際のガイドラインを提供するスキルです。

### インストール

```bash
# IBM Bob / Claude Code（グローバルインストール）
npx skills add fuukaiyuu/japanese-tech-blog -g -y
```

### 使い方

インストール後、エージェントに自然な言葉で指示するだけです。

```
Zenn 向けに uv を使った Python 開発環境の構築方法を記事にして。
```

---

<a name="chinese"></a>
## 中文

详细说明请参阅 [README.zh.md](README.zh.md)。

```bash
# 安装（IBM Bob / Claude Code）
npx skills add fuukaiyuu/japanese-tech-blog -g -y
```

---

## Contributing

PRs welcome. Please keep the core `SKILL.md` under 500 lines and test changes by asking your agent to generate a sample article before submitting.

## License

[MIT](LICENSE) © 
