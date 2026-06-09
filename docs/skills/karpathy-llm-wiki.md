# karpathy-llm-wiki

## 快速判断

`karpathy-llm-wiki` 是一个围绕 Karpathy LLM 学习资料的知识库构建与查询 skill。它不生成 PPT、图片或网页，而是把课程、论文、博客、实验笔记和链接等原始材料整理成 `wiki/` 下的 Markdown 知识库，并支持基于 wiki 带引用回答 LLM 相关问题。

## 适合场景

- 你在系统学习 Karpathy 的 LLM 课程、视频、代码或相关文章。
- 你希望把零散课程笔记、论文、博客和链接沉淀成可持续维护的 Markdown wiki。
- 你希望后续提问时答案能尽量基于已有资料，并引用具体来源。
- 你想维护一个长期增长的 LLM 学习知识库，而不是一次性摘要。
- 你需要检查知识库链接、frontmatter、引用和覆盖率。

## 前置要求

- 课程、论文、博客、笔记或链接等原始资料。
- Markdown 资料维护习惯。
- 可选 Node 环境，用于运行 wiki lint 检查脚本。

## 输入与输出

输入：

- Karpathy LLM 课程、视频、讲义或代码材料
- LLM 论文、博客、文章、链接或实验笔记
- 用户关于 LLM 概念、实现、训练、推理或学习路径的问题

输出：

- `wiki/` 下的 Markdown 主题页
- `sources.yml` 来源记录
- `coverage.yml` 覆盖率记录
- 基于 wiki 的带引用问答
- wiki 健康检查结果

## 核心特色

- 知识库优先：核心产物是可持续维护的 Markdown wiki，不是一次性回答。
- 原始资料分层：把原始来源放入 `raw/`，再沉淀到 `wiki/`。
- 来源可追踪：通过 `sources.yml` 记录资料来源、链接和可信度。
- 覆盖率意识：通过 `coverage.yml` 标记哪些主题已覆盖、哪些还缺资料。
- 带引用问答：回答 LLM 问题时优先引用已有 wiki 页面和来源。
- 健康检查：用 lint 检查 frontmatter、链接、引用和覆盖情况。

## 和相近技能的差异

- 与当前多数 PPT 类技能不同，`karpathy-llm-wiki` 不生成演示稿，而是维护 LLM 学习知识库。
- 与通用搜索或临时问答不同，它强调把新资料沉淀回 `wiki/`，让知识库持续变好。
- 与普通笔记不同，它包含来源记录、覆盖率记录和 lint 检查，更适合长期维护。

## 工作流程

1. 把课程、论文、博客、实验笔记或链接放入 `raw/`。
2. 读取来源材料，提炼主题、概念、实验和关键结论。
3. 更新或新建 `wiki/` 下的 Markdown 页面。
4. 在 `sources.yml` 中记录来源信息。
5. 在 `coverage.yml` 中标记主题覆盖情况。
6. 回答问题时优先检索 `wiki/`，必要时再查看 `raw/` 或联网核验。
7. 输出答案时附带具体 wiki 页面或来源引用。
8. 运行 lint 检查，修复链接、frontmatter、引用和覆盖缺口。

## 当前限制

- 主要服务 Karpathy LLM 学习资料和相关 LLM 知识整理，不是通用网页剪藏器。
- 回答质量取决于 wiki 覆盖率、来源质量和引用维护情况。
- 如果长期不维护 `raw/`、`wiki/`、`sources.yml` 和 `coverage.yml`，知识库会逐渐失真。
- 对最新模型、实时新闻、价格、API 变更等高时效信息仍需要联网核验。
- 不生成 PPT、图片、前端页面或代码资产。

## 链接

- 项目仓库：<https://github.com/Astro-Han/karpathy-llm-wiki>
- 收录来源：<https://linux.do/t/topic/1945700/10>
- 来源可见性：整理时可直接查看
- 核心 SKILL：<https://github.com/Astro-Han/karpathy-llm-wiki/blob/main/SKILL.md>

## 备注

本页基于 Linux.do 话题回复、原项目 README 与 `SKILL.md` 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
