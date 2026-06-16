# bb-browser

## 快速判断

`bb-browser` 把真实 Chrome 登录态变成 CLI 和 MCP。它适合让 Agent 直接访问网页、内部系统、登录后页面，执行点击、填写、截图、带登录态 fetch、网络拦截，以及通过 site adapter 一键调用常见网站命令。

## 适合场景

- 想用真实浏览器登录态获取公开或私域网页信息。
- 想让 Agent 操作网页表单、按钮、滚动、截图和 JS eval。
- 想通过 `bb-browser site <name>` 获取 Twitter、知乎、GitHub、YouTube 等平台结构化数据。
- 想在浏览器上下文执行带 Cookie 的 fetch。
- 想通过 MCP 接入 Claude Code、Cursor 等工具。

## 前置要求

- Node.js 18+。
- `bb-browser` npm 包。
- 可连接的真实 Chrome。
- 需要私域数据时，先登录对应网站。

## 输入与输出

输入：

- URL、站点 adapter 名称或网页操作目标
- 元素引用、CSS 范围或 JS 表达式
- fetch 请求、network 过滤或 MCP 调用
- 登录后的真实浏览器状态

输出：

- 可交互元素快照
- 结构化站点 adapter 结果
- 页面文本、标题、URL、截图或 JS eval 结果
- network、console、errors 和 trace 调试信息

## 核心特色

- 真实浏览器登录态：不是偷 Cookie，而是直接用用户真实 Chrome。
- site 系统：社区 adapter 覆盖多平台常用命令。
- 带登录态 fetch：在浏览器上下文调用请求。
- 浏览器自动化：open、snapshot、click、fill、eval、network、screenshot 等命令完整。
- MCP 入口：可作为 AI 工具的浏览器执行层。

## 和相近技能的差异

- 相比 [OpenCLI](opencli.md)，`bb-browser` 更偏轻量浏览器 CLI/MCP 执行层；`OpenCLI` 更偏完整 CLI 枢纽和 adapter 开发生态。
- 相比 [agent-cli-creator](agent-cli-creator.md)，`bb-browser` 是可直接运行的浏览器 CLI/MCP 工具；后者是创建新网站 CLI 的流程。
- 相比 [CLI-Anything](cli-anything.md)，`bb-browser` 面向网页和真实浏览器登录态；`CLI-Anything` 面向专业软件 CLI 市场。

## 工作流程

1. 安装 `bb-browser`。
2. 用 `bb-browser site update` 更新社区 adapter。
3. 用 `bb-browser site list/search/recommend` 查找能力。
4. 直接运行 `bb-browser site <name>` 获取结构化结果。
5. 需要自由操作时用 `open`、`snapshot -i`、`click`、`fill`、`eval`。
6. 需要带登录态请求时用 `bb-browser fetch`。
7. 需要 AI 工具接入时启动 `bb-browser --mcp`。

## 当前限制

- 依赖真实浏览器、本地 daemon 或 MCP 运行状态。
- 私域数据和写操作复用真实登录态，需要用户明确授权。
- site adapter 会受网页结构、接口、权限和登录状态变化影响。
- 新站点 CLI 化仍需要逆向、测试和长期维护。

## 链接

- 项目仓库：<https://github.com/epiral/bb-browser>
- 收录来源：<https://linux.do/t/topic/2269051>
- 中文 README：<https://github.com/epiral/bb-browser/blob/main/README.zh-CN.md>
- 核心 SKILL：<https://github.com/epiral/bb-browser/blob/main/skills/bb-browser/SKILL.md>

## 备注

本页基于 Linux.do 推荐来源、原项目 README.zh-CN、GitHub 元数据和 `skills/bb-browser/SKILL.md` 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
