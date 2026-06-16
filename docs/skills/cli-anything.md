# CLI-Anything

## 快速判断

`CLI-Anything` 是一个把专业软件能力变成 Agent 原生 CLI 的生态。它通过 CLI-Hub 提供目录、搜索、安装、preflight 和工作流矩阵，让 Agent 能按任务找到合适的软件 CLI，而不是只依赖少数有 API 的服务。

## 适合场景

- 想查找图像、视频、3D、办公、AI、通信、开发等领域的 Agent 可调用 CLI。
- 想按任务能力安装最小必要工具，而不是一次性装一堆软件。
- 想用工作流矩阵组合多个 provider 完成跨工具任务。
- 想让专业桌面软件或后端能力输出 JSON，供 Agent 继续处理。
- 想研究“让所有软件 Agent Native”的 CLI 化生态。

## 前置要求

- Python 与 pip。
- `cli-anything-hub`。
- 具体软件、Python 包、系统库或云服务依赖。
- 对复杂任务先做 preflight。

## 输入与输出

输入：

- 任务能力或关键词
- 软件类别、matrix、capability 或 recipe
- 要安装的 CLI 范围
- 具体 CLI 命令参数

输出：

- 可安装 CLI 列表
- preflight 检查结果
- 已安装的 `cli-anything-*` 命令
- JSON 结构化执行结果
- 可选 preview artifacts

## 核心特色

- CLI-Hub 目录：可搜索和安装专业软件 CLI。
- 工作流矩阵：按能力和 provider 组合复杂任务。
- 最小化安装：支持 `--capability`、`--recipe`、`--only` 和 `--dry-run`。
- Agent 友好：强调 JSON 输出、REPL 和真实软件后端。
- 生态覆盖广：面向创意、生产力、AI、通信、开发和内容生成。

## 和相近技能的差异

- 相比 [OpenCLI](opencli.md)，`CLI-Anything` 更像专业软件 CLI 市场；`OpenCLI` 更偏网站、浏览器、桌面应用和站点 adapter。
- 相比 [agent-cli-creator](agent-cli-creator.md)，它不是为某个网站从零生成 CLI，而是帮助发现和安装已有的 Agent 原生 CLI。
- 相比 [bb-browser](bb-browser.md)，它不以真实浏览器登录态为核心，而是面向软件和工作流能力。

## 工作流程

1. 安装 `cli-anything-hub`。
2. 用 `cli-hub list/search/can` 查找工具或能力。
3. 用 matrix preflight 检查当前环境缺口。
4. 按 capability、recipe 或 only 安装最小必要 CLI。
5. 阅读安装后的本地 SKILL.md 和 provider 选择规则。
6. 调用 `cli-anything-<name>` 执行 one-shot 或 REPL 命令。
7. 使用 `--json` 输出服务后续 Agent 工作流。

## 当前限制

- 不同 CLI 依赖不同软件、包、系统库或云服务。
- 复杂 matrix 不应盲目全量安装，需要先 preflight。
- 部分专业软件仍需要本机安装、授权或 GUI/渲染环境。
- 实时目录和包生态会变化，使用前需要确认当前可用性。

## 链接

- 项目仓库：<https://github.com/HKUDS/CLI-Anything>
- 收录来源：<https://linux.do/t/topic/2269051>
- 中文 README：<https://github.com/HKUDS/CLI-Anything/blob/main/README_CN.md>
- CLI-Hub Meta Skill：<https://github.com/HKUDS/CLI-Anything/blob/main/cli-hub-meta-skill/SKILL.md>
- Web Hub：<https://clianything.cc/>

## 备注

本页基于 Linux.do 推荐来源、原项目 README_CN、GitHub 元数据和 `cli-hub-meta-skill` 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
