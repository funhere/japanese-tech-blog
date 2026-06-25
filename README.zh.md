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

---

## 安装方法

### 方式一：IBM Bob（推荐）

```bash
# 全局安装（所有项目可用）
npx skills add fuukaiyuu/japanese-tech-blog -g -y

# 项目级安装（仅当前项目可用）
npx skills add fuukaiyuu/japanese-tech-blog -y
```

安装后，Bob 会在下次对话中自动加载此技能。

### 方式二：Claude Code

```bash
npx skills add fuukaiyuu/japanese-tech-blog -g -y
```

或手动复制到 Claude Code 的 skills 目录：

```bash
git clone https://github.com/fuukaiyuu/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.claude/skills/japanese-tech-blog/
```

### 方式三：OpenAI Codex

将 `SKILL.md` 的内容添加到 Codex 的系统提示词中，或复制到 Codex 配置的 skills 目录：

```bash
git clone https://github.com/fuukaiyuu/japanese-tech-blog.git
cp -r japanese-tech-blog ~/.codex/skills/japanese-tech-blog/
```

### 方式四：手动克隆（通用方式）

```bash
git clone https://github.com/fuukaiyuu/japanese-tech-blog.git
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

## 文件结构

```
japanese-tech-blog/
├── SKILL.md                       # 核心技能指令（被 AI 助手自动加载）
├── references/
│   └── article-templates.md      # 3 种文章模板 + 平台 Markdown 速查表
├── examples/
│   └── sample-article.md         # 技能生成的示例文章
├── README.md                      # 英文 README
├── README.zh.md                   # 本文件（中文说明）
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

[MIT](LICENSE) © fuukaiyuu
