# agent-cli-creator

## 快速判断

`agent-cli-creator` 是一个让 Agent 帮你“为某个网站做 CLI”的 skill。它适合把你在网页上反复做的操作，沉淀成可复用命令行工具：后续 Agent 不必每次重新点网页，而是直接调用 CLI，并通过 `kimi-webbridge` 复用真实 Chrome 登录态。

## 适合场景

- 你经常在某个网站重复读取信息流、搜索、查看详情或提交表单。
- 你希望把这些网页操作变成 `example-cli home --limit 10` 这类命令。
- 目标网站没有稳定 API，或者登录态、Cookie、浏览器上下文很重要。
- 你愿意先从 1-3 个高频功能开始验证，再逐步扩展。
- 你希望生成 CLI 后，再生成一个伴随 skill，让后续 Agent 知道如何使用这个 CLI。

## 前置要求

- 目标网站 URL。
- 首批 1-3 个功能需求。
- `kimi-webbridge` 浏览器插件与本地 skill。
- 已登录目标网站的 Chrome 会话。
- Go、Python、Node.js 或其他 CLI 实现语言；原项目推荐 Go。

## 输入与输出

输入：

- 目标网站 URL
- 是否需要登录
- 首批 1-3 个功能
- CLI 实现语言
- 用户对读/写操作的边界和确认要求

输出：

- 一个面向目标网站的 CLI 工具
- `login-status`、读命令、写命令等可执行命令
- 统一 JSON 输出契约
- 已验证的接口调用、请求头和响应结构
- 可选伴随 skill，用于告诉未来 Agent 如何使用该 CLI

## 核心特色

- 复用真实登录态：通过 `kimi-webbridge` 操作用户已登录的 Chrome。
- 先站点考古：写代码前必须确认 endpoint、headers、响应结构和可工作的 evaluate 调用。
- 小步验证：先做 1-3 个功能，避免为暂时不用的功能浪费时间。
- CLI 契约统一：成功输出 `{"ok": true, "data": ...}`，失败输出 `{"ok": false, "error": ...}`。
- 读写分层：先实现无副作用读命令，再实现发帖、评论、点赞等写命令。
- 伴随 skill：CLI 成熟后生成新的 skill，让后续 Agent 直接调用工具。

## 和相近技能的差异

- 相比 [agents-progressive-disclosure](agents-progressive-disclosure.md)，`agent-cli-creator` 生成网站操作 CLI；后者治理 Agent 指令文件。
- 相比 [GenericAgent](generic-agent.md)，它不是完整自进化 Agent 框架，而是把具体网站操作固化成可调用工具。
- 相比 [wechat-article-reader](wechat-article-reader.md)，它不是固定的公众号读取器，而是面向任意具体网站定制 CLI 的生成工作流。
- 相比通用浏览器自动化脚本，它更强调 CLI 契约、命令验证和后续 Agent 可复用。

## 工作流程

1. 检查 `kimi-webbridge` 是否运行，浏览器扩展是否连接。
2. 访谈目标网站 URL、实现语言、是否需要登录、首批 1-3 个功能。
3. 告诉用户先做少量功能验证端到端链路，后续可继续扩展。
4. 对每个功能执行站点探索，确认 API endpoint、必要 headers、响应结构和可工作的浏览器会话调用。
5. 选择语言并搭建 CLI 项目脚手架。
6. 如果网站需要登录，先实现 `login-status`。
7. 先实现读命令并验证，再实现有副作用的写命令。
8. 每个命令都验证 `--help`、成功路径和错误路径。
9. CLI 可用后，生成伴随 skill，供未来 Agent 直接使用。

## 当前限制

- 它不是万能接口挖掘器，不能保证穷举网站所有前端交互。
- 强依赖 `kimi-webbridge`、Chrome 扩展和用户真实登录态。
- 网站前端、接口、反爬策略和权限变化可能导致 CLI 失效。
- 写操作有真实副作用，需要用户确认和错误路径验证。
- 更适合先做高频小闭环，不适合一次性要求完整复刻复杂网站。

## 链接

- 项目仓库：<https://github.com/better-world-ai/agent-cli-creator>
- 收录来源：<https://linux.do/t/topic/2269051>
- 来源可见性：整理时可直接查看
- 核心 SKILL：<https://github.com/better-world-ai/agent-cli-creator/blob/main/SKILL.md>
- 工作示例：<https://github.com/better-world-ai/x-cli>

## 备注

本页基于 Linux.do 推荐来源、原项目 README、README_EN 与 `SKILL.md` 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
