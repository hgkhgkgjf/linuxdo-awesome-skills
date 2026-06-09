# gpt-image2-ppt-skills

## 快速判断

`gpt-image2-ppt-skills` 是一个图片型 PPTX 生成和编辑工作流。它用 `gpt-image-2` 把每页当成完整视觉稿生成，再打包成 16:9 PowerPoint；同时支持按用户提供的 `.pptx` 模板仿版式换内容，并能通过自然语言重生成指定页。

## 适合场景

- 你想从主题、大纲或 Markdown 快速生成一套视觉完成度较高的 PPTX。
- 你有公司模板、答辩模板或公开模板，希望 AI 仿照版式、配色和插画语汇换成新内容。
- 你需要融资路演、产品介绍、培训课件、课程分享、技术分享等偏视觉表达的演示稿。
- 你希望先看一页样稿确认风格，再批量生成整套。
- 你希望后续能用自然语言修改指定页、指定标题、副标题、日期、数据卡片或页脚。
- 你可以接受文字和背景主要是整页图片，并在交付前人工核对小字和数字。

## 输入与输出

输入：

- 演示主题、文章、大纲、Markdown 或 `slides_plan.md`
- 可选 `.pptx` 模板、参考图片、真实素材、Logo、产品截图、图表或表格
- 可选风格 ID、页数、观众、比例和输出要求

输出：

- 每页高清 PNG 图片
- 一份 16:9 PPTX
- `prompts.json`、`metadata.json` 等用于复盘、修改和回滚的运行记录
- 可选真实素材后贴结果，让图片、Logo、产品截图等成为 PPT 中可单独选中的图片对象

## 核心特色

- 图片优先：利用 `gpt-image-2` 的构图、排版和审美能力，让每页像完整设计稿。
- 模板克隆：可以渲染用户提供的 `.pptx`，再分析模板版式、配色、字体和插画语言，生成新内容。
- 风格库：内置 10 套精选风格，并提供扩展风格库参考。
- Markdown 编排：先写 `slides_plan.md`，便于人工确认文案、diff 和修改，再转换为 JSON 生成。
- 指哪改哪：通过 session、metadata 和 `slide_spec` 定位页面元素，支持自然语言修改指定页。
- 真实素材保真：产品图、Logo、图表、截图等素材默认可作为独立图片对象后贴，不强制交给模型重绘。
- 版本追踪：修改过哪些页、生成过哪些版本可以追踪，方便继续迭代或回滚。

## 工作流程

1. 澄清内容、页数、观众、风格偏好，以及是否使用自带 PPTX 模板。
2. 先写 `slides_plan.md`，让用户确认页面文案和结构。
3. 将 Markdown 转成 `slides_plan.json`。
4. 选择内置风格，或渲染并分析用户提供的 PPTX 模板。
5. 为每页构造 `slide_spec`，记录标题、卡片、指标、图片槽位等元素。
6. 先生成封面或一页样稿，确认视觉方向。
7. 批量生成每页高清 PNG，并打包为 16:9 PPTX。
8. 后续修改时读取 session 和 metadata，只重生成目标页并更新 PPTX。

## 当前限制

- 背景和文字本质上仍是整页图片，不是原生文本框和形状对象级编辑。
- 真实图片、Logo、产品截图和图表可以作为独立图片对象后贴，但大部分视觉内容仍依赖图片重生成。
- 密集表格、财务数字、法律证据、医学影像、小字号内容需要人工逐项核对。
- 模板克隆效果依赖 PPTX 渲染后端、视觉分析质量、参考图质量和模型表现。
- 视频素材不是当前主流程；图片素材可以保真嵌入，或在用户明确允许时作为参考图融合重绘。

## 链接

- 项目仓库：<https://github.com/JuneYaooo/gpt-image2-ppt-skills>
- 收录来源：<https://linux.do/t/topic/2053515>
- 来源可见性：整理时可直接查看
- README：<https://github.com/JuneYaooo/gpt-image2-ppt-skills/blob/main/README.md>
- 核心 SKILL：<https://github.com/JuneYaooo/gpt-image2-ppt-skills/blob/main/SKILL.md>
- 实现逻辑：<https://github.com/JuneYaooo/gpt-image2-ppt-skills/blob/main/docs/ppt-implementation-logic.md>
- 修改能力说明：<https://github.com/JuneYaooo/gpt-image2-ppt-skills/blob/main/docs/edit_guide.md>

## 备注

本页基于 Linux.do 话题、原项目 README、`SKILL.md`、实现逻辑和编辑能力说明提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
