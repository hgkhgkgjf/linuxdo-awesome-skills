# GordenPPTSkill

## 快速判断

`GordenPPTSkill` 是一个面向中文商务场景的原生 PPTX 模板生成 skill。它不是图片生成型 PPT，也不是从零自由设计，而是先选择内置中文 PPTX 模板或用户自带模板，再通过 `edits.json` 进行非破坏式文字替换，尽量保留原排版、配色、字号和页面结构。

## 适合场景

- 你要做国企、互联网大厂、商务汇报、年终总结、季度复盘、述职竞聘、项目复盘或商务提案。
- 你希望生成真实 `.pptx`，而不是整页图片、HTML deck 或 PDF。
- 你喜欢成熟中文模板的复杂排版和高信息密度，但希望 AI 帮你填内容。
- 你有自己的 `.pptx` 模板，希望按模板换内容且不破坏排版。
- 你需要对已有 PPT 做文字级编辑，并希望保留原有布局、颜色、字号和层级。

## 前置要求

- Python 3。
- `python-pptx` 1.0+。
- 首次使用 skill 时需要运行 `python3 scripts/apply_update.py`，用于更新模板和规则。
- 如果要渲染预览图，需要 LibreOffice 和 Poppler。
- 内置模板仅供个人学习与研究，禁止商业使用或二次分发；商业项目需自行确认模板授权。

## 输入与输出

输入：

- 主题、提纲、文字材料、项目介绍或工作汇报素材
- 可选内置模板偏好、颜色、页数和页面类型
- 可选用户自带 `.pptx` 模板
- 可选已有 PPT 的文字编辑需求

输出：

- 原生可编辑 `.pptx`
- `edits.json`
- 可选逐页 PNG 预览
- 可选模板选择说明、出框检查和渲染自检结果

## 核心特色

- 中文模板库：内置多套面向中文商务场景的手工模板，适合复杂排版和高信息密度表达。
- 非破坏式编辑：核心原则是只替换文字，不主动改动模板位置、大小、颜色、字体、字号和行距。
- 真实 PPTX：输出 PowerPoint 可编辑文件，不是图片型幻灯片。
- 文本容量约束：模板 `detail.json` 中记录文本框容量，构建时可做出框检测。
- 同级标题一致：强调通过缩短文字解决溢出，而不是随意缩小字号。
- 自动更新机制：首次启用时可以拉取最新模板、规则和更新索引。
- 自带模板模式：用户提供 `.pptx` 时，可以渲染和探查页面结构，再按 explicit address 替换文字。
- 原创兜底：当用户明确不想用模板时，可生成简洁原创版式，但仍强调少元素、强对齐和风格克制。

## 和相近技能的差异

- 相比 [thesis-defense-pptx-skill](thesis-defense-pptx-skill.md)，`GordenPPTSkill` 更偏中文职场和商务汇报，内置模板库是核心优势；`thesis-defense-pptx-skill` 更偏论文答辩和学校/学院模板保真。
- 相比 [gpt-image2-ppt-skills](gpt-image2-ppt-skills.md) 和 [awesome-ppt-skills](awesome-ppt-skills.md)，它不是图片优先路线，而是输出真实可编辑 PPTX。
- 相比 [ppt-master](ppt-master.md)，它不是通用文档转 PPT 工作流，而是模板选择、文字替换、文本容量检查和中文商务版式复用。

## 工作流程

1. 首次启用 skill 时运行 `scripts/apply_update.py`，确保模板和规则是最新版本。
2. 默认从内置模板中选择，读取 `templates/INDEX.md` 并结合用户场景筛选候选模板。
3. 如果无法确定最佳模板，让用户看 3 个候选模板预览后选择。
4. 读取目标模板的 `intro.md` 和 `detail.json`。
5. 规划要使用的页面，并按文本槽位写 `edits.json`。
6. 运行 `scripts/build_pptx.py` 生成最终 `.pptx`，建议开启 `--strict` 做出框检查。
7. 如需预览，运行 `scripts/render_slides.py` 导出逐页 PNG。
8. 如果使用用户自带模板，先渲染和探查 shape 结构，再按 explicit address 替换文字，且不修改原模板文件。

## 当前限制

- 内置模板仅供个人学习和研究，禁止商业使用或二次分发。
- 核心策略是文字替换，不适合期待 AI 大幅改变模板图形、动画或版式的需求。
- 装饰性图形、进度条、圆环、流程箭头等固定形状不会随文本数值自动变化。
- 预览渲染依赖 LibreOffice 和 Poppler；缺失时仍可生成 PPTX，但自检能力会变弱。
- 文字过长时应缩短文案，不能随意缩小字号，否则会破坏模板同级标题一致性。

## 链接

- 项目仓库：<https://github.com/GordenSun/GordenPPTSkill>
- 收录来源：<https://linux.do/t/topic/2278294>
- 来源可见性：整理时可直接查看
- 核心 SKILL：<https://github.com/GordenSun/GordenPPTSkill/blob/main/SKILL.md>
- 模板索引：<https://github.com/GordenSun/GordenPPTSkill/blob/main/templates/INDEX.md>

## 备注

本页基于 Linux.do 话题、原项目 README、`SKILL.md` 与模板索引提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
