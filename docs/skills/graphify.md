# graphify

## 快速判断

`graphify` 是一个把代码库、文档、PDF、图片、视频、文本和网页链接转换成 Neo4j 知识图谱的 GraphRAG 工具。它不生成 PPT、网页或普通笔记，而是把项目和资料拆成实体、关系和图谱节点，再通过前端和 API 对知识图谱提问。

## 适合场景

- 你要快速理解一个陌生代码库的模块、函数、类、依赖和架构关系。
- 你希望把 GitHub 仓库、ZIP、PDF、文档、图片、视频或网页资料转成可查询图谱。
- 你想用 GraphRAG 对项目或资料进行问答，而不是只做向量检索。
- 你需要给团队 onboarding、代码导航、架构理解或资料问答提供结构化入口。
- 你愿意维护 Neo4j 数据库和 Gemini API 配置。

## 前置要求

- Google Gemini API Key。
- Neo4j 5.20+ 数据库。
- 后端 Python 环境。
- 前端 Node/React 环境。
- 可选 Docker / Docker Compose。
- 待分析的代码库、ZIP、文档、PDF、图片、视频、文本或网页链接。

## 输入与输出

输入：

- GitHub 仓库链接、本地 ZIP 或源码目录
- PDF、DOC/DOCX、PPT/PPTX、图片、视频、文本或网页 URL
- 用户关于代码结构、资料关系或架构的问题

输出：

- Neo4j 知识图谱
- 节点、关系、实体和文档片段
- 图谱可视化
- GraphRAG 问答结果
- 处理进度和导入状态

## 核心特色

- 代码库图谱化：把函数、类、模块、文件和依赖关系转成可查询图结构。
- 多模态输入：支持文档、PDF、图片、视频和文本等资料。
- Neo4j 后端：使用图数据库保存实体和关系，适合结构化探索。
- GraphRAG 问答：围绕图谱回答问题，而不是只靠普通全文搜索。
- Web 前端：提供上传、处理、可视化和问答界面。
- API 化：可以通过后端 API 集成到其他工作流。

## 和相近技能的差异

- 相比 [karpathy-llm-wiki](karpathy-llm-wiki.md)，`graphify` 不维护 Markdown 学习 wiki，而是把任意代码库和多模态资料转成 Neo4j 图谱。
- 相比普通 RAG 工具，它更强调实体关系、图谱结构和 GraphRAG。
- 相比当前多个 PPT 类技能，它完全不生成演示稿，核心产物是知识图谱和图谱问答。

## 工作流程

1. 配置 Gemini API Key、Neo4j 连接和后端环境变量。
2. 启动 Neo4j、后端 API 和 React 前端，或使用 Docker Compose。
3. 上传 GitHub 仓库、ZIP、文件、文本或网页链接。
4. 系统解析代码和资料内容。
5. 调用 Gemini 抽取实体、关系和摘要。
6. 把抽取结果写入 Neo4j。
7. 在前端查看图谱和处理进度。
8. 通过 GraphRAG 对图谱提问，获取结构化答案。

## 当前限制

- 需要 Gemini API Key 和可用额度，抽取质量受模型能力和提示词影响。
- 需要 Neo4j，部署和维护成本高于 Markdown wiki 或普通笔记。
- 大型仓库和大量多模态资料可能带来处理时间、费用和图谱噪音。
- 抽取出的实体关系需要人工抽查，不应直接视为完全准确的架构事实。
- 更适合结构化探索和图谱问答，不适合替代 IDE、文档站或传统全文搜索。

## 链接

- 项目仓库：<https://github.com/safishamsi/graphify>
- 收录来源：<https://linux.do/t/topic/1907342>
- 来源可见性：整理时可直接查看
- 核心 SKILL：<https://github.com/safishamsi/graphify/blob/main/graphify/skill.md>

## 备注

本页基于用户提供的 Linux.do 来源链接、原项目 README 与 `graphify/skill.md` 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
