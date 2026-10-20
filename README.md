# HTML网页版 · 报名数据小工具
## 先运行
用 VS Code 打开本子文件夹。若顶部出现 Restricted Mode（受限模式），点击 Manage，确认是讲师提供的课程工程后点击 Trust，信任当前文件夹。只需信任这个子工程，不要信任整个下载目录。信任状态与 Copilot 的登录、授权是不同的检查。

浏览器直接打开 index.html，再选择 data/registrations.csv。文件上传只在本机解析，不需要服务器、Python 或 Node.js。

本工程独立运行，不调用旁边的另一个版本。数据为 180 位虚构学员。
初版刻意朴素，没有完整筛选、精美布局和复杂图表。

## 上午自选尝试
先运行，再选一个问题：筛选查找、城市比较、报名趋势、学习进度、成绩与反馈、界面或导出都可以。
不用统一做部门筛选，也不必全部完成。reference 是一个参考方向，不是标准答案。
先完成一个小改动并检查，保存能重新运行的第一版；之后按自己的进度继续完善，具体节奏听讲师安排。
请先阅读 docs/需求说明.md 与 docs/检查清单.md。

## 工程里的 Skills
.github/skills/schneider-style/SKILL.md 是课程用施耐德电气参考风格。
.github/skills/check-data/SKILL.md 是数据核验方法。
在支持项目 Skills 的工具中，以本文件夹为工作区；确认工具识别了技能。
如未自动识别，可明确附上 SKILL.md 让 AI 读取，不将“文件存在”当作“已调用”。

示例：请使用当前工程的 schneider-style 技能美化已有成果，保持数据与功能不变，然后按 check-data 核验。
普通需求 Markdown 与 Skill 有不同用途：前者描述这个任务，后者封装可重复使用的方法。

## 参考版
reference 目录提供完成一项改进的参考，卡住时再打开对照。
打开 reference/index.html，仍手动选择本工程 CSV。压缩包 vendor 中附 ECharts 与许可证；初版不使用该库也能运行。

## 数据更丰富，初版仍简单
180 条模拟报名，含日期、城市、课程、状态、计划时长、成绩和反馈。字段与分层任务见 docs/数据说明.md。
CSV 使用 UTF-8 BOM；Excel 查看优先打开 data/registrations.xlsx。程序仍读取 CSV，两者不自动同步。
