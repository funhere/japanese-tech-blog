# japanese-tech-blog

> AI コーディングアシスタントが高品質な日本語技術ブログ記事を執筆するためのエージェントスキルです。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills.sh](https://img.shields.io/badge/skills.sh-compatible-brightgreen)](https://skills.sh)

[English](README.md) | [日本語](#) | [中文](README.zh.md)

---

## できること

IBM Bob・Claude Code・OpenAI Codex などの AI アシスタントが、**Zenn・Qiita・note** などのプラットフォーム向けに発表できる品質の日本語技術ブログ記事を書けるようになります。

| 機能 | 内容 |
|---|---|
| プラットフォーム対応 | Zenn・Qiita・note・個人ブログ・社内ドキュメント |
| 日本語文体ガイド | です・ます調 / だ・である調、句読点、全半角ルール |
| SEO タイトル設計 | 5 種類のタイトルパターン + キーワード配置指針 |
| 記事構造テンプレート | ハウツー型・概念解説型・比較型の 3 種類 |
| プラットフォーム固有記法 | Zenn `:::message`、Qiita `:::note` チートシート |

---

## インストール

### IBM Bob / Claude Code（推奨）

```bash
# グローバルインストール（すべてのプロジェクトで使用可能）
npx skills add funhere/japanese-tech-blog -g -y
```

### 手動インストール

```bash
git clone https://github.com/funhere/japanese-tech-blog.git

# IBM Bob
cp -r japanese-tech-blog ~/.bob/skills/japanese-tech-blog/

# Claude Code
cp -r japanese-tech-blog ~/.claude/skills/japanese-tech-blog/
```

---

## 使い方

インストール後、エージェントに自然な言葉で指示するだけです。

```
Zenn 向けに uv を使った Python 開発環境の構築方法を記事にして。
```
```
TypeScript の型ガバナンスについて Qiita 向けの記事を中級者向けに書いて。
```
```
この英語の README を note 向けの日本語技術記事に変換して。
```

以下のキーワードを含む指示でスキルが自動的に起動します：

- 「ブログ記事を書いて」「Zenn に投稿したい」
- 「Qiita 向けに書いて」「技術記事をまとめて」
- 「解説記事を日本語で書いて」

---

## ファイル構成

```
japanese-tech-blog/
├── SKILL.md                       # メインスキル指示書（エージェントが自動読み込み）
├── references/
│   └── article-templates.md      # 記事テンプレート 3 種 + プラットフォーム記法チートシート
├── examples/
│   └── sample-article.md         # サンプル生成記事（Docker Compose 入門）
├── README.md                      # 英語 README
├── README.ja.md                   # 本ファイル（日本語説明）
├── README.zh.md                   # 中国語 README
├── package.json                   # npx skills 対応メタデータ
└── LICENSE                        # MIT ライセンス
```

---

## コントリビューション

PR 歓迎です。`SKILL.md` を変更した際は、エージェントにサンプル記事を生成させて動作確認してから PR を出してください。

## ライセンス

[MIT](LICENSE) © funhere
