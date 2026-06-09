# 收录规则

## 必填字段

- `id`
- `name`
- `author`
- `source`
- `repository`
- `summary`

## 推荐字段

- `tags`
- `one_liner`
- `prerequisites`
- `skill_description`
- `use_cases`
- `workflow`
- `limitations`
- `notes`
- `detail_page`
- `verified_at`
- `verification_sources`

## 核验规则

- 每条正式收录都应按终稿标准编写，不在 README 或静态页展示 `draft`、`verified` 这类状态字段。
- 完成原项目和来源阅读后，在结构化数据中记录 `verified_at` 与 `verification_sources`。
- 如果条目不确定，先不要进入公开技能清单。

## 来源规则

1. 能保存原帖链接时，优先保存原帖链接。
2. 帖子原文只用于提炼摘要、流程、特色和局限性，不收录原文全文。
3. 来源字段只记录“信息来自哪里”，不保存整段帖子内容。

## README 展示规则

1. README 面向最终读者快速查询技能清单。
2. 表格列优先服务筛选和跳转，不堆叠相近含义的长文本。
3. 单条 skill 的完整说明放到 `docs/skills/`。
4. 详情页至少讲清用途、适合场景、输入输出、核心特色、限制和来源。
5. README 和静态页不展示状态字段；条目默认按已核验终稿呈现。
6. GitHub 项目入口可使用 Shields.io 徽章展示仓库名、GitHub 图标和 star 数。
7. README 和静态页不展示平台字段，统一按通用技能介绍。
8. README 的技能简介可展示原项目 `SKILL.md` frontmatter 中的 `description`；展示标签统一写为 `description`。中文 description 优先使用原文；英文 description 直译为中文，不做提炼总结。只有原始 description 特别长或同一项目包含多个子 skill description 时，才做必要截取或选择核心入口。
9. README 表格可展示 `前置要求` 列，用短语帮助读者快速判断是否具备模型、API、本地环境或素材条件；不要把安装教程塞进表格。
