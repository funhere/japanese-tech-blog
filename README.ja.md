# japanese-tech-blog

> AI コーディングアシスタントが高品質な日本語技術ブログ記事を執筆するためのエージェントスキルです。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills.sh](https://img.shields.io/badge/skills.sh-compatible-brightgreen)](https://skills.sh)

[English](README.md) | [日本語](#) | [中文](README.zh.md)

---

## これは何？

`japanese-tech-blog` は **Agent Skill**（エージェントスキルパッケージ）です。インストールすると、AI アシスタント（IBM Bob・Claude Code・OpenAI Codex など）が日本語技術ライティングの規範に従い、**Zenn・Qiita・note** などの日本の主要技術ブログプラットフォーム向けに発表できる品質の記事を生成できるようになります。

### スキルがカバーする内容

| モジュール | 説明 |
|---|---|
| プラットフォーム対応 | Zenn `:::message`・Qiita `:::note` など各プラットフォーム固有の記法 |
| 日本語文体ガイド | です・ます調 vs だ・である調、句の長さ、全角・半角文字ルール |
| SEO タイトル設計 | 5 種類のタイトルパターン + キーワード配置指針 |
| 記事構造テンプレート | ハウツー型・概念解説型・比較型の 3 種類 |
| よくある落とし穴ガイド | 前置きの長すぎ・コード説明なし・まとめの薄さ等の回避策 |
| **記事画像の自動生成** | 記事の内容に応じて 1〜4 枚の技術図解を生成し、DALL·E / Midjourney / Stable Diffusion 対応のプロンプトを出力 |

---

## インストール方法

### 方法 1：IBM Bob（推奨）

```bash
# グローバルインストール（すべてのプロジェクトで使用可能）
npx skills add funhere/japanese-tech-blog -g -y

# プロジェクトローカルインストール
npx skills add funhere/japanese-tech-blog -y
```

インストール後、Bob は次の会話開始時に自動的にスキルを読み込みます。

### 方法 2：Claude Code

```bash
npx skills add funhere/japanese-tech-blog -g -y
```

または Claude Code の skills ディレクトリに手動でコピー：

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.claude/skills/japanese-tech-blog/
```

### 方法 3：OpenAI Codex

`SKILL.md` の内容を Codex のシステムプロンプトに追加するか、設定済みの skills ディレクトリにフォルダをコピーしてください：

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.codex/skills/japanese-tech-blog/
```

### 方法 4：手動クローン（汎用）

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
# その後、使用している AI アシスタントの skills ディレクトリにコピーします：
# IBM Bob       →  ~/.bob/skills/japanese-tech-blog/
# Claude Code   →  ~/.claude/skills/japanese-tech-blog/
```

---

## 使い方

インストール後、AI アシスタントに自然な言葉で書きたい記事を伝えるだけです。

### 例 1：新規記事の執筆

```
Zenn 向けに uv を使った Python 開発環境の構築方法を記事にして。
Python の基礎がわかる読者向け、標準的な長さでお願いします。
```

### 例 2：プラットフォームと記事タイプを指定

```
TypeScript の型ガバナンスについて Qiita 向けの記事を中級者向けに書いて。
2000 字程度でお願いします。
```

### 例 3：英語記事の翻訳・ローカライズ

```
この英語の技術ドキュメントを note 向けの日本語技術ブログ記事に書き直して。
```

### 例 4：概念解説記事

```
Docker のコンテナとイメージの違いを初心者向けに解説する
Qiita 向け日本語記事を書いて。
```

### 自動トリガー条件

以下のキーワードを含む指示でスキルが自動的に起動します：

- 「ブログ記事を書いて」「Zenn に投稿したい」
- 「Qiita 向けに書いて」「技術記事をまとめて」
- 「解説記事を日本語で書いて」
- 英語技術コンテンツの日本語への翻訳・ローカライズ

---

## ユースケース

| シナリオ | プロンプト例 |
|---|---|
| 新技術の入門チュートリアル | `Zenn 形式で Bun の入門ガイドを書いて` |
| ハマりポイント記録 | `Next.js 14 App Router で遭遇した問題を Qiita 記事にして` |
| ツール比較 | `pnpm vs npm vs yarn の日本語比較記事を書いて` |
| ソースコード解説 | `React Fiber アーキテクチャについての日本語解説記事を note 向けに書いて` |
| 週報・月報 | `このエンジニア月報を公開できる日本語技術記事にまとめて` |

---

## 記事画像の自動生成

記事執筆後、スキルはコンテンツに合わせた **1〜4 枚のプロフェッショナルな技術図解プロンプト** を自動出力します。
そのまま DALL·E・Midjourney・Stable Diffusion に貼り付けて使用できます。

### 生成される画像の種類

| 種類 | 配置場所 | 使用条件 |
|---|---|---|
| **OGP / アイキャッチ** | 記事タイトル直下 | 全記事 |
| **アーキテクチャ図** | アーキテクチャセクション冒頭 | システム・構成解説記事 |
| **フロー図** | 手順セクション冒頭 | ハウツー・プロセス記事 |
| **比較図** | 比較セクション内 | 比較記事のみ |

### スタイル仕様（全画像共通）

| 要素 | 仕様 |
|---|---|
| 背景 | 白またはライトグレー |
| 主色 | ダークネイビーテキスト、アクセントカラー `#3b82f6`（青） |
| フォント | サンセリフ体、英語または日本語のラベル |
| 禁止 | イラスト・キャラクター・グラデーション・人物 |

### 出力イメージ

```
---
## 🖼 生成する画像（3 枚）

### 画像 1 — アイキャッチ
配置：記事タイトル直下
ファイル名：docker-compose-intro-hero-01.png
プロンプト：
A clean, professional technical diagram for a Japanese tech blog article about
Docker Compose. Shows interconnected service containers (app, db, proxy) on a
white background. Style: minimalist flat design, dark navy text, blue (#3b82f6)
accent arrows. Text: "Docker Compose" in English, sans-serif. No people, no gradients.

### 画像 2 — アーキテクチャ図
配置：「Docker Compose とは」セクション冒頭
ファイル名：docker-compose-intro-architecture-01.png
プロンプト：
...
---
```

---

## ファイル構成

```
japanese-tech-blog/
├── SKILL.md                       # メインスキル指示書（エージェントが自動読み込み）
├── references/
│   └── article-templates.md      # 記事テンプレート 3 種 + プラットフォーム記法チートシート
├── examples/
│   ├── sample-article.md         # サンプル生成記事（画像プレースホルダー付き）
│   └── images/                   # 生成した画像を配置（DALL·E / Midjourney / SD）
│       ├── docker-compose-intro-hero-01.png
│       └── docker-compose-intro-architecture-01.png
├── README.md                      # 英語 README
├── README.ja.md                   # 本ファイル（日本語）
├── README.zh.md                   # 中国語 README
├── package.json                   # npx skills 対応メタデータ
└── LICENSE                        # MIT ライセンス
```

---

## よくある質問

**Q：インストール後にスキルが自動起動しない。**  
A：AI アシスタントが skills の読み込みに対応していることを確認してください。Bob と Claude Code は会話開始時にインストール済みスキルをスキャンします。明示的にトリガーする場合は「japanese-tech-blog スキルを使って Zenn 記事を書いて」と伝えてください。

**Q：生成された記事はそのまま公開できますか？**  
A：初稿としてそのまま使用できます。技術的な正確性・コード例を確認し、自分のスタイルに合わせて調整してから公開することをお勧めします。

**Q：どのプラットフォームに対応していますか？**  
A：Zenn・Qiita・note・個人ブログ（Hugo / Gatsby / Astro 等）・社内技術ドキュメントに対応しています。

**Q：英語の記事も書けますか？**  
A：このスキルは日本語執筆に特化して最適化されています。英語記事には汎用ライティングスキルの使用をお勧めします。

---

## コントリビューション

PR 歓迎です。`SKILL.md` を変更した際は、エージェントにサンプル記事を生成させて動作確認してから PR を出してください。

## ライセンス

[MIT](LICENSE) © funhere
