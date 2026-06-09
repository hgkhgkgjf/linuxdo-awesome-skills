# thesis-defense-pptx-skill

## 快速判断

`thesis-defense-pptx-skill` 是一个论文答辩专用的本地 PPTX 生成工作流。它的目标不是重新设计一套通用 AI PPT，而是在尽量保留学校、学院、实验室或品牌模板的前提下，把论文 PDF/LaTeX 内容整理成原生可编辑的正式答辩 PPTX，并做逐页导出、总览图、文字溢出和旧模板词检查。

## 适合场景

- 你要做本科、硕士或博士论文答辩 PPT。
- 你已经有学校、学院、实验室或公司提供的 `.pptx` 模板，而且不希望 AI 改掉封面、配色、导航、卡片和字体层级。
- 你的论文材料来自 PDF、LaTeX 项目、实验图、旧版答辩 PPT 或本地私密文件。
- 你需要输出真实可编辑的 PowerPoint，而不是图片型幻灯片、HTML deck 或 PDF。
- 你希望在最终交付前做逐页 PNG 导出、总览图检查、文字溢出检查和旧模板词扫描。

## 前置要求

- 论文 PDF 或 LaTeX 项目。
- 用户提供的答辩模板 `.pptx`。
- Python 3.10+。
- Python 依赖：`python-pptx`、`Pillow`、`PyMuPDF` 或 `pypdf`。
- 完整质量检查推荐 Windows + Microsoft PowerPoint，用于 COM 驱动的模板复制、PNG 导出和文字溢出检查。

## 输入与输出

输入：

- 本地论文 PDF、LaTeX 项目或相关源文件
- 用户提供的 PowerPoint 答辩模板
- 可选旧版答辩 PPT、实验图、表格、脚本、图注和输出目录

输出：

- 原生可编辑 `.pptx`
- 逐页 PNG
- 整套 PPT 总览图
- 模板页文本、形状、表格和图片 dump
- 文字溢出检查结果
- 旧模板词、占位词、TODO 等残留扫描结果

## 核心特色

- 模板保真优先：把用户提供的 `.pptx` 模板当成视觉基准，而不是让 AI 自由重设计。
- 原生可编辑：输出可编辑文本框、图片、表格和图形，而不是整页图片。
- 论文内容抽取：从 PDF/LaTeX 中提取研究背景、方法、实验、结果、结论和候选图表。
- 原生模板页复制：在可用时使用 PowerPoint COM 复制模板原生页面，再替换内容。
- 答辩口径转写：把论文长段落改写成适合答辩讲述的短句、指标卡和页面重点。
- 质量门完整：导出逐页 PNG、生成总览图、检查文字溢出、扫描旧模板文字和占位词。
- 本地私密场景：适合论文、实验图和学校模板都不方便上传到在线平台的情况。

## 和相近技能的差异

- 相比 [ppt-master](ppt-master.md)，`thesis-defense-pptx-skill` 目标更窄：不是从资料生成一套新的 AI 设计 PPT，而是优先保留已有答辩模板。
- 相比 [gpt-image2-ppt-skills](gpt-image2-ppt-skills.md) 和 [awesome-ppt-skills](awesome-ppt-skills.md)，它不是图片优先路线，而是输出真实可编辑 PPTX。
- 相比 [banana-slides](banana-slides.md)，它不是一站式 Web 应用，而是围绕本地论文源文件、PPTX 模板和 PowerPoint COM 的保守交付流程。

## 工作流程

1. 确认论文 PDF/LaTeX 项目、答辩模板 PPTX、可选旧版 PPT 和输出目录。
2. 提取论文上下文和候选图表。
3. 分析模板封面、目录、章节页、导航、字体、字号、配色、卡片和间距。
4. 使用 PowerPoint COM 复制模板原生页面，或在无 COM 环境下使用可用的 python-pptx 部分。
5. 把论文内容转写为简洁、正式、适合答辩讲述的页面内容。
6. 填入可编辑文本框、图片、表格和图形。
7. 导出逐页 PNG，生成总览图。
8. 检查文字溢出、旧模板词、占位词、TODO、导航错误和明显视觉问题。
9. 按质量检查结果反复修复，直到适合交付。

## 当前限制

- 主要服务论文答辩和模板保真，不适合通用创意型 PPT 设计。
- 完整质量门依赖 Windows + Microsoft PowerPoint；macOS/Linux 只能使用 python-pptx 相关部分并跳过 COM 检查。
- 当前内置提取脚本主要支持 PDF 文本、LaTeX `.tex` 章节和候选图表，Word `.docx` 结构化提取尚未实现。
- 学校模板、校徽、字体、论文图表和第三方素材授权需要使用者自行确认。
- 高质量交付仍需要人工查看总览图和关键页截图，不适合生成后不检查直接提交。

## 链接

- 项目仓库：<https://github.com/zouchenzhen/thesis-defense-pptx-skill>
- 收录来源：<https://linux.do/t/topic/2091089>
- 来源可见性：整理时可直接查看
- 中文 README：<https://github.com/zouchenzhen/thesis-defense-pptx-skill/blob/main/README.zh-CN.md>
- 核心 SKILL：<https://github.com/zouchenzhen/thesis-defense-pptx-skill/blob/main/skills/thesis-defense-pptx/SKILL.md>

## 备注

本页基于 Linux.do 话题、原项目中文 README、英文 README 与 `skills/thesis-defense-pptx/SKILL.md` 提炼而成。帖子原文只用于整理阶段理解 skill 的用途、特色、流程和局限性，不作为仓库存档内容保留。
