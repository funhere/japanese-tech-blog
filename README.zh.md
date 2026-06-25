# japanese-tech-blog

> 一个帮助 AI 编程助手撰写高质量日语技术博客文章的 Agent Skill。

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Skills.sh](https://img.shields.io/badge/skills.sh-compatible-brightgreen)](https://skills.sh)

---

## 这是什么？

`japanese-tech-blog` 是一个 **Agent Skill**（智能体技能包），安装后可让 AI 助手（IBM Bob、Claude Code、OpenAI Codex 等）自动遵循日语技术写作规范，为 **Zenn、Qiita、note** 等日本主流技术博客平台生成发布就绪的日语文章。

### 技能涵盖内容

| 模块 | 说明 |
|---|---|
| 平台适配 | Zenn `:::message`、Qiita `:::note` 等各平台专有语法 |
| 日语写作规范 | です・ます调 vs だ・である调、句子长度、全/半角字符规则 |
| SEO 标题设计 | 5 种标题模式 + 搜索关键词布局建议 |
| 文章结构模板 | 操作指南型、概念讲解型、对比选型型三种模板 |
| 常见错误提示 | 前置叙述过长、代码无说明、结尾单薄等问题的规避指引 |
| **配套图片自动生成** | 根据文章内容自动生成 1–4 张专业技术图解，并输出可直接用于 DALL·E / Midjourney / Stable Diffusion 的生成提示词 |

---

## 安装方法

### 方式一：IBM Bob（推荐）

```bash
# 全局安装（所有项目可用）
npx skills add funhere/japanese-tech-blog -g -y

# 项目级安装（仅当前项目可用）
npx skills add funhere/japanese-tech-blog -y
```

安装后，Bob 会在下次对话中自动加载此技能。

### 方式二：Claude Code

```bash
npx skills add funhere/japanese-tech-blog -g -y
```

或手动复制到 Claude Code 的 skills 目录：

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.claude/skills/japanese-tech-blog/
```

### 方式三：OpenAI Codex

将 `SKILL.md` 的内容添加到 Codex 的系统提示词中，或复制到 Codex 配置的 skills 目录：

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.codex/skills/japanese-tech-blog/
```

### 方式四：手动克隆（通用方式）

```bash
git clone https://github.com/funhere/japanese-tech-blog.git
# 然后根据你使用的 AI 助手，将文件夹复制到对应的 skills 目录
```

---

## 使用方法

安装后，直接用自然语言告诉 AI 助手你想写什么文章即可。以下是一些触发示例：

### 示例 1：撰写新文章

```
帮我写一篇 Zenn 文章，介绍如何用 uv 搭建 Python 开发环境。
面向有一定 Python 基础的读者，标准篇幅。
```

### 示例 2：指定平台与文章类型

```
Qiita 向けに TypeScript の型ガバナンスについての記事を書いて。
中級者向け、2000 字程度でお願いします。
```

### 示例 3：翻译 / 本地化英文文章

```
请把这篇英文技术文档改写成一篇适合发布到 note 的日语技术博客文章。
```

### 示例 4：概念解说文章

```
为初学者写一篇讲解 Docker 容器和镜像区别的日语文章，发布到 Qiita。
```

### 自动触发条件

当你说出以下关键词时，技能会自动激活：

- 「ブログ記事を書いて」「Zenn に投稿したい」
- "write a Japanese tech blog"、"Qiita article"
- 「Qiita 向けに書いて」「技術記事をまとめて」
- 将英文技术内容翻译/本地化为日语

---

## 使用案例（Use Cases）

| 场景 | 提示词示例 |
|---|---|
| 新技术入门教程 | `用 Zenn 格式写一篇 Bun 入门指南` |
| 踩坑记录 | `把我遇到的 Next.js 14 App Router 的问题写成 Qiita 文章` |
| 工具对比 | `写一篇 pnpm vs npm vs yarn 的日语对比文章` |
| 源码解析 | `为 note 平台写一篇关于 React Fiber 架构的日语解说文章` |
| 周报/月报 | `把这份工程师月报整理成适合发布的日语技术文章` |

---

## 配套图片自动生成

文章生成完成后，技能会根据内容自动输出 **1–4 张专业技术图解的生成提示词**，可直接粘贴到 DALL·E、Midjourney 或 Stable Diffusion 中生成图片。

### 图片类型

| 类型 | 插入位置 | 使用条件 |
|---|---|---|
| **OGP / 封面图** | 文章标题下方 | 所有文章 |
| **架构图** | 架构讲解章节开头 | 系统/组件类文章 |
| **流程图** | 步骤讲解章节开头 | 操作指南/流程类文章 |
| **对比图** | 对比章节内部 | 仅对比类文章 |

### 视觉风格规范（所有图片统一）

| 要素 | 规范 |
|---|---|
| 背景 | 白色或浅灰色 |
| 配色 | 深海军蓝文字，`#3b82f6` 蓝色强调色，`#10b981` 绿色用于成功状态 |
| 字体 | 无衬线体，标注文字使用**英语或日语** |
| 禁止 | 卡通插图、装饰元素、渐变色、人物形象 |

### 输出示例

```
---
## 🖼 生成图片（3 张）

### 图片 1 — OGP 封面
插入位置：文章标题下方
文件名：docker-compose-intro-hero-01.png
提示词：
A clean, professional technical diagram for a Japanese tech blog article about
Docker Compose. Shows interconnected service containers (app, db, proxy) on a
white background. Style: minimalist flat design, dark navy text, blue (#3b82f6)
accent arrows. Text: "Docker Compose" in English, sans-serif. No people, no gradients.

### 图片 2 — 架构图
插入位置：「Docker Compose とは」章节开头
文件名：docker-compose-intro-architecture-01.png
提示词：
...
---
```

---

## 文件结构

```
japanese-tech-blog/
├── SKILL.md                       # 核心技能指令（被 AI 助手自动加载）
├── references/
│   └── article-templates.md      # 3 种文章模板 + 平台 Markdown 速查表
├── examples/
│   ├── sample-article.md         # 技能生成的示例文章（含图片占位符）
│   └── images/                   # 将生成的图片放在此目录（DALL·E / Midjourney / SD）
│       ├── docker-compose-intro-hero-01.png
│       └── docker-compose-intro-architecture-01.png
├── README.md                      # 英文 README
├── README.ja.md                   # 日语 README
├── README.zh.md                   # 本文件（中文说明）
├── package.json                   # npx skills 兼容元数据
└── LICENSE                        # MIT 许可证
```

---

## 常见问题

**Q：安装后技能没有自动触发？**  
A：确保你的 AI 助手支持 skills 加载。Bob 和 Claude Code 会在对话开始时扫描已安装的技能。可以在对话中明确说「使用 japanese-tech-blog skill 来写一篇 Zenn 文章」。

**Q：生成的文章可以直接发布吗？**  
A：可以作为初稿直接使用，建议检查技术准确性、代码示例，以及根据你个人的风格偏好做调整。

**Q：支持哪些平台？**  
A：Zenn、Qiita、note、个人博客（Hugo/Gatsby/Astro 等）、社内技术文档。

**Q：可以写英文文章吗？**  
A：此技能专为日语写作优化。英文文章建议使用其他通用写作技能。

---

## 参与贡献

欢迎提交 PR。修改 `SKILL.md` 后，请先让 AI 助手生成一篇示例文章进行验证再提交。

## 许可证

[MIT](LICENSE) © funhere
