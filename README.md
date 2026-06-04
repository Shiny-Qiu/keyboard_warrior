# 键盘侠

一个本地运行的打字练习网站，参考 Monkeytype 的核心体验重新实现。项目使用原生 HTML、CSS、JavaScript 和一个轻量 Node.js 本地服务，不依赖登录账号，成绩记录写入项目内的本地 JSON 文件。

## 目录

- [功能概览](#功能概览)
- [科学依据](#科学依据)
- [技术栈](#技术栈)
- [快速启动](#快速启动)
- [常用命令](#常用命令)
- [自适应大模型接入](#自适应大模型接入)
- [数据保存](#数据保存)
- [项目结构](#项目结构)
- [本地服务接口](#本地服务接口)
- [统计口径](#统计口径)
- [素材说明](#素材说明)
- [修改指南](#修改指南)
- [常见问题](#常见问题)
- [参考论文与资料](#参考论文与资料)

## 功能概览

- 计时测试：支持 15、30、60、120 秒。
- 英文练习：无限练习模式，包含基准键位、上排键位、下排键位、常用词、标点、数字上下文等课程。
- 综合自适应练习：通过本地实时统计和大模型 agent 生成下一批练习词，自动升级、保持、专项加强或降级。
- 实时统计：字符/分、原始速度、准确率、稳定性、字符统计。
- 结果图表：测试结束后显示速度曲线、原始速度虚线、爆发速度、错误点和悬浮提示。
- 本地成绩：每次测试和英文练习分段都会保存到 `data/records.json`，不限制条数。
- 弱项词：根据错词自动生成弱项词库，供后续练习使用。
- 指法提示：虚拟键盘和双手提示会根据下一个字符高亮对应按键和手指。
- 错误修正提示：输入错误时提示使用右手小拇指按 `Delete` 删除。
- 动效反馈：键盘侠会在输入时播放逐帧动画，平时静止。
- 中文界面：页面提示、模式、按钮和结果信息均为中文。

## 科学依据

打字是一种可练习的文字转录技能；当键盘输入更自动化时，人的注意力和工作记忆可以更多留给内容理解、表达、计划和修改。

### 为什么要练速度和准确率

打字练习最有效的部分通常不是盲目堆时长，而是有明确目标、即时反馈、短时集中练习和针对错误修正。Keith 与 Ericsson 在日常打字者研究中发现，参加过打字课程且在日常输入中主动追求速度目标的人表现最高；论文也提到，早期高水平打字研究建议每天 10 到 15 分钟短时集中地挑战舒适速度，并针对暴露出的错误和慢转换练习。这个项目的计时测试、错误点、实时速度和成绩记录就是为这种反馈循环服务的。

### 为什么要重视自动化

写作模型通常把写作拆成转录、生成内容、评估修改等过程。键盘输入属于转录技能，如果每个按键都要额外思考，注意力会被键盘动作占用。关于 touch typing 教学的研究综述提到，高效盲打可以释放写作任务所需的认知资源；Barkaoui 对 TOEFL-iBT 写作任务的研究也指出，键盘技能差会让考生把注意力和认知资源花在键盘动作上，从而影响计划、修改和文本质量，虽然在该研究中键盘技能对分数的影响是显著但较弱的。

### 为什么要记录字符/分、原始速度、准确率和稳定性

键盘流畅度不是单纯的“最快一瞬间”，而是速度、错误、修正成本和节奏稳定性的组合。Gong、Zhang 与 Li 使用 1300 多名中学生的线上写作击键数据研究发现，keyboarding fluency 是一个可靠的个体层面指标；低于某些阈值时，键盘流畅度会更明显影响写作过程和文本表现。项目使用字符/分、原始速度、准确率、稳定性和错误点，是为了同时观察速度和质量。

### 为什么要有指法提示和虚拟键盘

固定指法不是唯一能打快的方法。Feit、Weir 与 Oulasvirta 在 CHI 2016 的研究中发现，受过 touch typing 训练者和自学打字者在句子输入速度上可以相近；但受训者更少看键盘，且打字策略中“稳定的手指到按键映射”和较少的视觉依赖仍然很重要。因此本项目提供指法提示和虚拟键盘，不是强制一种唯一正确打法，而是帮助初学者建立稳定映射、减少看键盘和乱按带来的认知负担。

### 研究结论如何落到本项目

| 研究结论 | 项目中的对应设计 |
| --- | --- |
| 短时集中练习、速度目标和即时反馈有助于形成打字技能 | 计时测试、实时字符/分、原始速度、准确率、稳定性 |
| 错误和慢转换需要被看见，才能被针对性练习 | 错误点、错词记录、弱项词练习 |
| 键盘输入自动化可以减少写作时的认知负担 | 无限英文练习、常用词练习、逐步课程 |
| 键盘流畅度在数字写作和线上评测中是重要变量 | 本地成绩、历史记录、结果图表 |
| 稳定指法和减少看键盘有助于输入过程更顺畅 | 虚拟键盘、双手指法提示、Delete 修正提示 |

## 技术栈

- HTML
- CSS
- JavaScript
- Node.js
- Vite

运行环境建议：

- Node.js 18 或更高版本。
- macOS、Windows、Linux 均可运行。

## 快速启动

首次使用先安装依赖：

```bash
# 进入项目根目录后执行
npm install
```

如需使用综合自适应练习的大模型 agent，复制环境变量模板并填写自己的 Key：

```bash
cp .env.example .env.local
```

`.env.local` 或 `.env` 中至少需要配置：

```text
MIMO_API_URL=https://api.xiaomimimo.com/anthropic
MIMO_MODEL=mimo-v2.5-pro
MIMO_API_KEY=replace-with-your-key
```

`.env.local` 和 `.env` 已加入 `.gitignore`，不要把真实 Key 写进 README、前端代码或提交记录。

启动本地服务：

```bash
npm start
```

默认访问地址：

```text
http://127.0.0.1:5173/
```

如果 `5173` 端口被占用，换一个端口启动：

```bash
PORT=5174 npm start
```

对应访问地址：

```text
http://127.0.0.1:5174/
```

## 常用命令

```bash
# 安装依赖
npm install

# 启动本地服务，默认端口 5173
npm start

# 指定端口启动
PORT=5174 npm start

# 构建前端静态资源
npm exec -- vite build

# 使用 Vite 开发服务
npm run dev
```

## 自适应大模型接入

综合自适应练习采用“本地实时统计 + 大模型阶段性决策”的结构。浏览器端只负责记录输入表现，本地服务端会把分段摘要发给大模型 agent，由 agent 判断下一组应该升级、保持、专项加强还是降级。

当前项目以 MiMo API 作为接入示例，因为它提供 Anthropic 兼容接口：

```text
MIMO_API_URL=https://api.xiaomimimo.com/anthropic
MIMO_MODEL=mimo-v2.5-pro
MIMO_API_KEY=replace-with-your-key
```

MiMo 不是唯一选择。只要目标服务兼容当前 `server.mjs` 使用的 Anthropic Messages API 结构，就可以替换成其他模型提供商；如果目标服务是 OpenAI Chat Completions 格式，则需要在 `server.mjs` 中调整请求地址、消息结构和响应解析。

大模型不会逐键实时监控。项目会在本地统计每段练习的字符/分、准确率、稳定性、错词、慢词、常错键位和手指表现，然后让 agent 返回 `nextWords`、难度决策和一句中文教练反馈。服务端再把 `nextWords` 组合成下一批练习文本，这样比直接让模型输出整段长文本更稳定。

## 数据保存

成绩记录保存在：

```text
data/records.json
```

保存规则：

- 测试完成后写入一条测试记录。
- 英文练习按分段写入练习记录。
- 记录不限制条数。
- 只要 `data/records.json` 不被删除，记录就会一直保留。
- 页面也会保留少量浏览器本地缓存作为兜底，但正式记录以 `data/records.json` 为准。

建议定期备份：

```bash
cp data/records.json records-backup.json
```

## 项目结构

```text
键盘侠/
├── index.html                 # 页面结构
├── styles.css                 # 页面样式、布局、响应式、动效样式
├── app.js                     # 打字逻辑、统计、图表、指法提示、记录保存
├── server.mjs                 # 本地静态服务和 records API
├── .env.example               # 大模型环境变量模板，不包含真实 Key
├── .gitignore                 # 忽略本地密钥、依赖和构建输出
├── package.json               # npm 脚本和依赖
├── package-lock.json          # 依赖锁定文件
├── data/
│   └── records.json           # 本地成绩记录
├── 键盘侠LOGO.png              # 顶部品牌 Logo
├── 键盘侠动效逐帧透明底/       # 当前使用的键盘侠逐帧动画
├── 键盘侠动效原图/             # 备用逐帧动画素材
└── dist/                      # 构建输出目录
```

## 本地服务接口

`server.mjs` 提供静态资源服务和成绩记录接口。

```text
GET    /api/records    读取 records.json
POST   /api/records    追加一条记录
DELETE /api/records    清空记录
GET    /api/adaptive-practice     查看自适应 agent 是否已配置
POST   /api/adaptive-practice     根据练习摘要生成下一组综合练习
```

页面必须通过 `npm start` 启动的本地服务访问。直接双击打开 `index.html` 时，浏览器不能写入 `data/records.json`。

## 统计口径

- `字符/分`：按实际输入的英文字符数量计算，输入一个英文字符算 1 个字符。
- `原始速度`：不扣除错误的输入速度。
- `准确率`：正确字符占已输入字符的比例。
- `稳定性`：根据输入速度波动计算，用于粗略反映节奏稳定程度。
- `字符统计`：结果页中展示正确、错误、额外等字符数量。

## 素材说明

- Logo 使用 `键盘侠LOGO.png`。
- 键盘侠动效使用 `键盘侠动效逐帧透明底/` 中按顺序命名的逐帧图片。
- 键盘侠在输入时播放，停止输入后回到第一帧。
- 指法提示的虚拟手和虚拟键盘由页面代码绘制，不依赖外部网络资源。

## 修改指南

常见修改位置：

- 修改页面文案：优先看 `index.html` 和 `app.js`。
- 修改视觉布局：改 `styles.css`。
- 修改打字统计、成绩记录、结果图表：改 `app.js`。
- 修改本地记录接口或端口默认值：改 `server.mjs`。
- 修改综合自适应练习策略：改 `app.js` 里的 `ADAPTIVE_STAGES` 和 `server.mjs` 里的 agent 系统提示词。
- 替换键盘侠动效：保持 `键盘侠动效逐帧透明底/` 中图片文件名顺序一致，或同步修改 `app.js` 里的 `BIRD_FRAMES`。

## 常见问题

### 端口被占用

使用其他端口启动：

```bash
PORT=5174 npm start
```

### 成绩没有写入文件

确认是通过本地服务访问，而不是直接打开 HTML 文件：

```text
http://127.0.0.1:5174/
```

同时确认终端启动时显示了：

```text
Records file: data/records.json
```

### 页面显示旧样式

刷新浏览器页面。如果仍然没有变化，停止终端里的服务后重新启动：

```bash
PORT=5174 npm start
```

### 综合练习没有使用 AI

确认 `.env.local` 或 `.env` 中已配置大模型 API Key，并且是通过 `npm start` 启动的本地服务。没有配置 Key 或接口暂时不可用时，综合练习会自动使用本地规则继续生成下一组内容。当前示例环境变量名是 `MIMO_API_KEY`；接入其他模型时可以沿用这个变量名，也可以同步修改 `server.mjs`。

### 想清空成绩

可以在页面的成绩区域清空，也可以手动编辑或替换：

```text
data/records.json
```

清空前建议先备份。

## 开发备注

- 当前项目主要面向本地使用，不需要部署到公网。
- 所有成绩数据都保存在项目目录内，不上传到远程服务。
- `node_modules/` 和 `dist/` 可以重新生成，核心源码和数据是 `index.html`、`styles.css`、`app.js`、`server.mjs`、`data/records.json` 以及图片素材。

## 参考论文与资料

- Keith, N., & Ericsson, K. A. (2007). [A deliberate practice account of typing proficiency in everyday typists](https://pubmed.ncbi.nlm.nih.gov/17924799/). Journal of Experimental Psychology: Applied, 13(3), 135-145.
- Gong, T., Zhang, M., & Li, C. (2022). [Association of Keyboarding Fluency and Writing Performance in Online-Delivered Assessment](https://www.ets.org/research/policy_research_reports/publications/article/2022/kdon.html). Assessing Writing, 51, 100575.
- Feng, L., Lindner, A., Ji, X. R., & Joshi, R. M. (2019). [The Roles of Handwriting and Keyboarding in Writing: A Meta-Analytic Review](https://eric.ed.gov/?id=EJ1203330). Reading and Writing: An Interdisciplinary Journal, 32(1), 33-63.
- Barkaoui, K. (2014). [Examining the impact of L2 proficiency and keyboarding skills on scores on TOEFL-iBT writing tasks](https://journals.sagepub.com/doi/abs/10.1177/0265532213509810). Language Testing, 31(2), 241-259.
- Feit, A. M., Weir, D., & Oulasvirta, A. (2016). [How We Type: Movement Strategies and Performance in Everyday Typing](https://userinterfaces.aalto.fi/how-we-type/resources/HowWeType_CHI16.pdf). Proceedings of CHI 2016.
- Lewin, C., & Luckin, R. (2017). [Touch typing instruction: Elementary teachers' beliefs and practices](https://www.sciencedirect.com/science/article/abs/pii/S0360131516301361). Computers & Education, 106, 1-14.
