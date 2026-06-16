# OpenCLI

## 快速判断

`OpenCLI` 是一个把网站、真实 Chrome 会话、Electron 桌面应用和本地命令统一变成 CLI 的工具链。它既有现成站点命令，也能让 Agent 通过 `opencli browser` 临时操作网页，还能用 `opencli-adapter-author` 为新站点沉淀可复用 adapter。

## 适合场景

- 想用 CLI 稳定调用小红书、B 站、知乎、Twitter、Reddit、HackerNews 等站点。
- 想让 Agent 复用真实 Chrome 登录态完成网页导航、点击、填表、提取数据。
- 想把某个新网站写成可长期维护的 OpenCLI adapter。
- 想把 `gh`、`docker`、Notion、企业微信等本地 CLI 统一挂到一个入口。
- 想通过 CDP 控制 Cursor、Codex、ChatGPT App 等 Electron 应用。

## 前置要求

- Node.js 20+。
- `@jackwener/opencli`。
- OpenCLI Browser Bridge Chrome 扩展。
- 需要登录态时，先在真实 Chrome 中完成登录。

## 输入与输出

输入：

- 目标站点、命令或 URL
- 可选登录态浏览器会话
- adapter 需要的参数、字段和输出格式
- 本地 CLI 或 Electron 应用接入配置

输出：

- 结构化 CLI 输出
- 网页状态、元素引用、网络响应或提取内容
- 可复用站点 adapter
- 站点记忆、fixture 和 verify 结果

## 核心特色

- 站点命令丰富：内置覆盖多类站点和命令。
- 真实浏览器：Browser Bridge 复用用户已登录 Chrome。
- Agent 原生 envelope：命令返回结构化匹配、错误和提示。
- adapter 开发闭环：站点侦察、endpoint 验证、字段解码、verify 和 trace。
- CLI 枢纽：外部 CLI 和 Electron 桌面应用也能接入统一入口。

## 和相近技能的差异

- 相比 [agent-cli-creator](agent-cli-creator.md)，`OpenCLI` 不是单纯教 Agent 生成 CLI，而是提供完整运行时、浏览器桥、内置 adapter 和 adapter 编写技能。
- 相比 [bb-browser](bb-browser.md)，`OpenCLI` 更偏完整 CLI 生态、插件、adapter 开发和桌面应用接入。
- 相比 [CLI-Anything](cli-anything.md)，`OpenCLI` 更聚焦网站、浏览器和桌面应用；`CLI-Anything` 更聚焦专业软件 CLI 市场。

## 工作流程

1. 安装 Node.js 20+ 和 OpenCLI。
2. 安装 Browser Bridge Chrome 扩展。
3. 运行 `opencli doctor` 检查连通性。
4. 优先使用现有 `opencli <site> <command>`。
5. 未覆盖的一次性任务用 `opencli browser` 操作真实页面。
6. 需要长期复用时用 `opencli-adapter-author` 编写 adapter。
7. 通过 verify、trace 和站点记忆检查输出正确性。

## 当前限制

- 需要 Node.js、OpenCLI 和浏览器扩展正确安装。
- 真实登录态写操作会产生实际副作用，需要谨慎确认。
- adapter 会随网站结构、接口、登录状态变化而失效。
- 编写高质量 adapter 需要验证字段和输出，不是简单录制脚本。

## 链接

- 项目仓库：<https://github.com/jackwener/OpenCLI>
- 收录来源：<https://linux.do/t/topic/2269051>
- 中文 README：<https://github.com/jackwener/OpenCLI/blob/main/README.zh-CN.md>
- 官方 skills：<https://github.com/jackwener/OpenCLI/tree/main/skills>

## 备注

本页基于 Linux.do 推荐来源、原项目 README.zh-CN、GitHub 元数据和官方 skills 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
