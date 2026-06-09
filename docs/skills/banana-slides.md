# banana-slides

## 快速判断

`banana-slides` 是一个基于 `nano banana pro` 的一站式 AI PPT 应用，而不是单个轻量生成脚本。它提供 Web 前端、后端、在线 Demo、CLI 和 Agent skill，可以从想法、大纲、描述或素材生成演示稿，并支持模板/素材上传、框选区域自然语言编辑、智能擦除，以及 PPTX、PDF、图片和讲解视频导出。

## 适合场景

- 你想用一个完整应用完成从想法到演示稿的生成、预览、编辑和导出。
- 你有模板、Logo、图片、产品截图或已有 PPT/PDF，希望在同一界面内复用和翻新。
- 你希望“口头提出修改”，例如框选某个区域后让 AI 改图、替换或擦除。
- 你需要 PPTX、PDF、图片或讲解视频等多种导出形式。
- 你希望通过 CLI 批量创建项目、生成页面、管理素材、套模板和导出文件。
- 你愿意部署或使用 Banana Slides 服务，并配置相应模型/API/OAuth。

## 前置要求

- 需要 `nano banana pro` 或兼容的生成模型/图片生成 provider。
- 可使用在线 Demo；本地部署需要 Banana Slides 前后端服务。
- 本地部署可走 Docker，或使用 Python 3.10+、`uv`、SQLite、React/Vite 前端环境。
- CLI 使用前需要后端健康检查通过，常见检查地址为 `http://localhost:5000/health`。
- 批量任务和脚本化操作通常还需要 `banana-cli`、`jq` 和绝对路径文件参数。

## 输入与输出

输入：

- 想法、大纲、描述、文档或已有 PPT/PDF
- 模板、Logo、图片、产品截图、图表、页面素材
- 可选页数、语言、风格、比例、导出格式和编辑指令

输出：

- AI 生成演示稿项目
- PPTX、PDF、图片或讲解视频
- 可通过 CLI 管理的项目、页面、素材、模板和导出结果
- 可选批量任务报告与运行状态文件

## 核心特色

- 完整应用形态：不是只跑一次 prompt，而是包含前端、后端、在线 Demo、CLI 和 Agent skill。
- Vibe PPT：从想法出发生成演示稿，再通过自然语言继续修改。
- 素材工具箱：支持素材生成、整图编辑、框选编辑和智能擦除。
- 模板与素材复用：可以上传模板、图片、Logo 和已有文件，围绕真实素材继续生成。
- 多格式导出：支持 PPTX、PDF、图片和讲解视频等输出。
- CLI 自动化：可以用 `banana-cli` 创建项目、跑全流程、导出文件和批量生成。
- OAuth/API 配置：支持通过模型 provider 或 OpenAI 官方 OAuth 等方式提供生成能力。

## 和相近技能的差异

- 相比 [gpt-image2-ppt-skills](gpt-image2-ppt-skills.md)，`banana-slides` 更像可部署产品，重点是 Web 应用、素材工具箱、框选编辑、CLI 和在线 Demo；前者更像围绕 `gpt-image-2` 的图片型 PPTX workflow。
- 相比 [awesome-ppt-skills](awesome-ppt-skills.md)，`banana-slides` 更突出应用内交互、模板/素材管理和自然语言编辑；前者更突出整页图片版 PPTX 与实验性可编辑重建。
- 相比 [ppt-master](ppt-master.md)，`banana-slides` 不主打 SVG 到原生对象级可编辑 PPTX，而是主打 `nano banana pro` 驱动的生成、编辑和导出体验。

## 工作流程

1. 选择在线 Demo，或本地启动 Banana Slides 后端与前端。
2. 配置模型、图片生成 provider、API Key 或 OAuth。
3. 输入想法、大纲、描述，或上传已有 PPT/PDF、模板与素材。
4. 生成大纲、页面描述和幻灯片图片。
5. 在应用内预览页面，必要时框选区域并用自然语言修改。
6. 使用素材工具箱完成整图编辑、框选替换或智能擦除。
7. 导出 PPTX、PDF、图片或讲解视频。
8. 如需脚本化或批量处理，用 `banana-cli` 创建项目、生成页面、管理素材并导出。

## 当前限制

- 部署和配置成本高于轻量 skill，尤其是本地前后端、模型 provider 和 CLI 环境。
- 强依赖 `nano banana pro` 或兼容生成模型，模型可用性、额度和速度会直接影响体验。
- CLI 要求后端可用，健康检查失败时不能继续执行命令。
- 不应理解为所有 PPT 元素都能像 PowerPoint 原生对象一样逐项编辑。
- 高精度数字、小字号文字、密集表格、法律/财务/合规材料仍需要人工复核。

## 链接

- 项目仓库：<https://github.com/Anionex/banana-slides>
- 收录来源：<https://linux.do/t/topic/1285413>
- 来源可见性：整理时话题 JSON 入口不可公开访问，保留用户提供的来源链接
- 在线 Demo：<https://bananaslides.online/>
- 项目文档：<https://docs.bananaslides.online/>
- 核心 SKILL：<https://github.com/Anionex/banana-slides/blob/main/skills/banana-cli/SKILL.md>

## 备注

本页基于用户提供的 Linux.do 来源链接、原项目 README 与 `skills/banana-cli/SKILL.md` 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
