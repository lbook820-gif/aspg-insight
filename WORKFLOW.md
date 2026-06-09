# ASPG Insight 工作流记录

## 每日自动更新流程

### 1. 新闻采集（由我执行）
- **方式**：OpenClaw Cron 任务（isolated session）
- **时间范围**：
  - **Cron 定时执行（每天 00:00）**：搜索过去48小时
  - **手动执行（cron 已运行后同一天重跑）**：仍使用 freshness=day，无新增属正常，禁止扩时间范围
  - **手动执行（cron 未运行）**：搜索过去48小时
- **搜索关键词**（10组）：
  1. Apple App Store / iOS / App Store Connect 政策 / XChat
  2. Google Play / Android / Play Store 政策
  3. DMA / 欧盟数字市场法 / 反垄断
  4. Epic Games Store / 第三方应用商店 / 侧载
  5. Apple Maps / 地图广告 / 本地广告
  6. 即时通讯 / WhatsApp / Telegram / 隐私加密
  7. 开发者 / 佣金 / 支付 IAP / 第三方计费
  8. 应用生态 / 平台政策 / 监管合规
  9. EPI / Wero / 欧洲支付 / 支付主权 / 数字欧元
  10. Visa / Mastercard / 跨境支付 / 数字钱包 / 即时支付

#### 固定官方信源检索（使用多引擎搜索，Bing精准检索）
除上述关键词搜索外，必须使用 **多引擎搜索（multi-search-engine）** 对以下官方信源进行精准检索。使用 Bing 国际版搜索的 `site:` 指令确保直接命中官方发布页面。

> **注意**：使用 Bing 国际版（`bing.com/search?ensearch=1`）而不是国内版（`ensearch=0`），以获得英文官方站点的更好的检索结果。

```javascript
// 检索指令（web_fetch 调用Bing搜索）：
// 时间范围规则（严格遵循）：
//   - Cron 定时执行（每天 00:00）：使用 &freshness=day 限定最近24小时
//   - 手动执行（同一天内 cron 已运行后）：直接使用 &freshness=day，无新增属于正常情况，禁止扩至 week
//   - 手动执行（cron 未运行 / 跨越了前一天）：使用 &freshness=day
//   - 仅在返回结果极少时（<3条），可临时改用 &freshness=week 补搜

// 1. 欧盟委员会 DMA 相关
web_fetch({"url": "https://www.bing.com/search?q=site:digital-markets-act.ec.europa.eu DMA review 2026&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=site:ec.europa.eu/commission/presscorner DMA 2026&ensearch=1&freshness=day"})

// 2. Apple 开发者相关
web_fetch({"url": "https://www.bing.com/search?q=site:developer.apple.com/news App Store policy 2026&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=site:www.apple.com/newsroom App Store DMA 2026&ensearch=1&freshness=day"})

// 3. Google 开发者相关
web_fetch({"url": "https://www.bing.com/search?q=site:android-developers.googleblog.com Play Store 2026&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=site:security.googleblog.com Android Play 2026&ensearch=1&freshness=day"})

// 4. Epic Games
web_fetch({"url": "https://www.bing.com/search?q=site:www.epicgames.com news store 2026&ensearch=1&freshness=day"})

// 5. 权威科技媒体（辅助验证）
web_fetch({"url": "https://www.bing.com/search?q=site:techcrunch.com DMA 2026&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=site:theverge.com DMA 2026&ensearch=1&freshness=day"})
```

**检索流程**：
1. 依次执行以上 `web_fetch` 调用，获取搜索结果中的标题和链接。
2. 对每条结果进行**URL去重**（与 `src/data/newsData.ts` 中已有 sourceUrl 比对）
3. 对未收录的结果进行**主题去重**（检查是否已有相同主题新闻）
4. 保留符合收录条件的新新闻进入第2步内容生成

> **注意**：如果 cron 今天已执行过且未发现新新闻，同一天手动重跑时大概率也无新内容，属于正常现象，禁止为凑数而扩大时间范围。

#### 英文关键词补充搜索（弥补中文搜索盲区）
使用Bing国际版搜索补充以下英文关键词，覆盖中文搜索容易遗漏的英文报道：

```javascript
// DMA相关
web_fetch({"url": "https://www.bing.com/search?q=DMA review 2026 European Commission&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=Digital Markets Act gatekeeper compliance 2026&ensearch=1&freshness=day"})

// 平台政策
web_fetch({"url": "https://www.bing.com/search?q=Apple App Store commission fee 2026&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=Google Play service fee third party billing 2026&ensearch=1&freshness=day"})

// 第三方应用商店
web_fetch({"url": "https://www.bing.com/search?q=third party app store Apple iOS 2026&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=alternative app store Google Android 2026&ensearch=1&freshness=day"})

// 消息互操作
web_fetch({"url": "https://www.bing.com/search?q=WhatsApp interoperability DMA 2026&ensearch=1&freshness=day"})

// 反垄断诉讼
web_fetch({"url": "https://www.bing.com/search?q=antitrust lawsuit app store monopoly 2026&ensearch=1&freshness=day"})

// 支付生态
web_fetch({"url": "https://www.bing.com/search?q=EPI Wero digital wallet Europe 2026&ensearch=1&freshness=day"})
web_fetch({"url": "https://www.bing.com/search?q=European digital euro CBDC 2026&ensearch=1&freshness=day"})
```

### 2. 来源验证（news-research 分级体系）
对已通过去重的新新闻进行来源可靠性验证：

**可靠来源等级**：
| 等级 | 说明 | 来源示例 |
|------|------|---------|
| **S级** | 官方公告，直接可用 | Apple Developer, Google Developers Blog, European Commission |
| **A级** | 权威科技媒体，直接可用 | TechCrunch, The Verge, Ars Technica, Engadget |
| **B级** | 专业垂直媒体，需要交叉验证 | 9to5Mac, Android Police, PocketGamer, Game Developer |
| **C级** | 综合科技/财经媒体，需要交叉验证 | 新浪科技、搜狐、凤凰网、同花顺等 |

**验证方法**：
1. 检查 sourceUrl 是否可访问
2. 查看发布日期是否明确
3. 交叉验证多个来源报道同一事件
4. 优先选择有署名作者的文章
5. C级来源的新闻优先查找S/A级来源交叉验证

### 3. 内容生成
- 读取 `src/data/newsData.ts`，提取已有 sourceUrl 去重
- **⚠️ 去重机制（必须严格执行）**：
  1. **URL去重**：提取所有已存在的 `sourceUrl`，新发现的新闻URL必须不在列表中
  2. **标题去重**：检查新新闻标题是否与已有新闻标题高度相似（关键词重叠>70%）
  3. **主题去重**：检查是否已存在相同主题的新闻（如：同一事件的后续报道、同一政策的不同解读）
  4. **去重检查命令**：
     ```bash
     # 检查URL是否已存在
     grep -o "sourceUrl.*" src/data/newsData.ts | grep -o "https://[^\"']*" | sort | uniq
     
     # 检查标题关键词
     grep -E "(关键词1|关键词2|关键词3)" src/data/newsData.ts | grep "title:"
     ```
  5. **重复新闻处理**：如发现重复，跳过该新闻，不添加到数据中
- 对每条新发现的新闻，AI 生成（按下文框架分析）：
  - `overallImpact`：整体行业影响分析
  - `huaweiImpact`：对华为的影响分析（**核心字段，必须生成**），提供深度扩展的多维度分析结果。
  - `score`：1-10 重要性评分
  - `category`：appstore / googleplay / dma / thirdparty / developer
  - `tags`：相关标签
- 新新闻追加到数组末尾，id 按最大+1递增
- **注意**：不收录纯华为产品报道，聚焦行业动态和监管政策

### 3.1 影响分析框架（news-research 结构化分析）

#### 整体影响分析（overallImpact）的 6 个维度
撰写 `overallImpact` 时应涵盖以下维度的分析：

1. **政策层面** — 是否改变行业规则？是否为先例？
2. **市场层面** — 对竞争格局的影响？市场份额变化？
3. **开发者层面** — 对开发者成本/收益的影响？合规成本？
4. **用户层面** — 对用户体验的影响？选择权增加？
5. **时间维度** — 短期/中期/长期影响？
6. **地域维度** — 影响范围（全球/地区/国家）？

#### 对华为影响分析（huaweiImpact）的 5 个维度
撰写 `huaweiImpact` 时应涵盖以下维度的分析：

1. **竞争影响** — 与华为AppGallery的直接竞争关系？
2. **机会窗口** — 是否为华为创造差异化机会？
3. **技术影响** — 是否需要技术调整？
4. **市场影响** — 对华为海外/国内市场的影响？
5. **合规参考** — 华为是否需要跟进类似措施？

**评分标准**：
| 分数 | 说明 |
|------|------|
| 9-10 | 行业变革级 |
| 7-8 | 重要政策级 |
| 5-6 | 一般动态 |
| 1-4 | 参考信息 |

### 2.1 新闻分类规则
网站分为两个二级频道：**应用生态** 和 **支付生态**，分类逻辑如下：

#### 支付生态频道（paymentEcosystemNews）
**核心定位**：聚焦支付行业本身，包括支付渠道、支付公司、银行、卡组织、数字钱包、数字货币等。

**包含关键词**（必须包含其一）：
- 支付渠道：Visa, Mastercard, 万事达, PayPal, Stripe
- 支付倡议：EPI, Wero, 数字欧元, 数字货币, CBDC
- 支付公司：Airwallex, PingPong, Worldpay, Curve
- 支付概念：支付主权, 支付倡议, 欧洲支付, 数字钱包, 跨境支付, 即时支付, 加密货币
- 金融机构：银行, 卡组织

**排除关键词**（不应出现在支付生态）：
- 应用商店：App Store, Google Play, 应用商店, 第三方商店
- 游戏平台：Epic Games, Epic Games Store, Fortnite
- 应用生态：侧载, 诉讼, 上诉, 佣金, IAP, 计费
- 市场报告：市场报告, 应用内购买

#### 应用生态频道（appEcosystemNews）
**核心定位**：应用商店政策、平台更新、开发者动态、监管合规等。

**包含内容**：所有不属于支付生态的新闻，包括但不限于：
- 应用商店政策更新（App Store, Google Play）
- 开发者工具和服务
- 平台治理和安全
- 反垄断和监管政策（DMA等）
- 第三方应用商店
- 即时通讯和社交应用
- 广告和商业化策略

### 3. 构建与推送
- `npm install`（如 node_modules 不存在）
- `npm run build`（生成 dist/）
- `git add -A`
- `git commit -m "auto: daily news update YYYY-MM-DD"`
- `git push origin main`
- **如无新增新闻**：仅执行 `git pull` 后静默结束，不提交空更新

### 4. 自动部署（GitHub Actions）
- **触发**：main 分支推送时自动触发
- **工作流**：`.github/workflows/deploy.yml`
- **步骤**：
  1. checkout 代码
  2. setup Node.js 20
  3. `npm ci`
  4. `npm run build`
  5. 部署到 GitHub Pages
- **额外**：每天北京时间 08:00 也会自动构建一次（保底）
- **手动触发**：Actions 页面 → Build and Deploy → Run workflow

## 手动添加新闻（备用）
- **方式**：GitHub Actions 手动触发
- **工作流**：`.github/workflows/auto-update-news.yml`
- **入口**：Actions → Auto Update News → Run workflow
- **表单字段**：标题、链接、来源、摘要、整体影响、华为影响、分类、评分

## 盲区检测清单（执行完新闻采集后逐一核对）

完成所有搜索后，对照以下清单检查是否有遗漏：

### 1. 细分领域覆盖检查（6大领域）
| 领域 | 覆盖渠道 | 检查是否已搜 |
|------|---------|------------|
| 消息应用互操作 | WhatsApp/DMA/第三方消息 | 中文搜索 + Bing英文搜索 |
| 支付系统开放 | Apple Pay、Google Pay、EPI/Wero、数字欧元 | 中文搜索 + Bing英文搜索 |
| 广告平台规则 | App Store广告、Google Play广告、Apple Maps广告 | 中文搜索 |
| 浏览器引擎选择 | DMA浏览器选择屏幕、WebKit限制 | Bing英文搜索 |
| 侧载/替代分发 | 第三方应用商店、Epic Games、Aptoide、AltStore | 中文搜索 + Bing英文搜索 |
| 平台反垄断诉讼 | Epic诉Apple/Google、Aptoide诉Google、美国DOJ/欧盟DMA | 中文搜索 + Bing英文搜索 |

### 2. 遗漏案例分析（记录并改进）
当发现重要新闻在常规搜索中被遗漏时，分析原因并记录在此：

```markdown
## 遗漏案例登记表
| 日期 | 遗漏新闻 | 原因 | 改进措施 |
|------|---------|------|---------|
| 2026-05-08 | 欧盟DMA首次审查报告 | 中文搜索对EC官网索引低，关键词未精准覆盖 | 新增固定官方信源检索 + Bing site:指令 |
| (新发现) | ... | ... | ... |
```

### 3. 每周深度检索（周六执行一次）
除了每日过去48小时的常规搜索，每周额外执行一次深度检索（时间范围扩展至30天），覆盖以下关键词：

```javascript
web_fetch({"url": "https://www.bing.com/search?q=DMA interoperability 2026 site:techcrunch.com OR site:theverge.com&ensearch=1&freshness=month"})
web_fetch({"url": "https://www.bing.com/search?q=WhatsApp third party apps EU interoperability 2026&ensearch=1&freshness=month"})
web_fetch({"url": "https://www.bing.com/search?q=App Store alternative payment commission 2026&ensearch=1&freshness=month"})
web_fetch({"url": "https://www.bing.com/search?q=Google Play commission change alternative billing 2026&ensearch=1&freshness=month"})
```

## 相关路径
- 本地仓库：`/home/sandbox/.openclaw/workspace/repo/aspg-insight/`
- 远程仓库：`https://github.com/lbook820-gif/aspg-insight`
- **Git Push Token**：存在变量中（不写入文件），通过 `git config credential.helper` 本地管理
- 网站地址：`https://lbook820-gif.github.io/aspg-insight/`

### Push 配置
```bash
# Token 已通过 git credential-store 本地管理，不写入仓库文件
# 如需重配，在 sandbox 上执行：
# echo "url=https://github.com/lbook820-gif/aspg-insight.git" | git credential-store store
```

## 定时任务信息
- **任务ID**：`5e03e870-b12c-4ba1-8068-105306a3f3bb`
- **任务名**：`aspg-insight-daily-update`
- **Cron**：`0 0 * * *` @ Asia/Shanghai
- **Session Target**：isolated
- **Thinking**：high
- **Timeout**：1200秒

## 更新历史
- 2026-04-21：初始化工作流，添加3条华为生态新闻，设置定时任务
- 2026-04-21：优化关键词，新增XChat、Apple Maps广告等关键词，移除纯华为产品报道；深化华为影响分析
- 2026-04-22：新增支付生态关键词（EPI/Wero/欧洲支付/数字欧元等），添加6条EPI相关新闻，覆盖欧洲支付主权、Wero数字钱包、Airwallex/Worldpay/PingPong合作等动态
- 2026-04-23：执行每日更新流程，新增3条新闻：马克龙呼吁欧洲支付主权、万事达卡支持Apple Pay跨境支付、欧盟认定Meta违反反垄断规则要求开放WhatsApp AI访问
- 2026-04-24：重构支付生态分类逻辑，从关键词匹配改为核心关键词+排除关键词模式，聚焦支付行业本身（支付渠道、支付公司、银行、卡组织、钱包、数字货币），排除应用商店生态相关新闻；优化应用生态和支付生态页面搜索功能，与首页保持一致；修复多条新闻分类错误；新增Stripe估值暴涨、Stripe加密货币支付、Curve Pay与华为手表合作等新闻；更新支付生态热门搜索词为EPI/Wero/Visa/Mastercard/Stripe/数字欧元
- 2026-04-26：**强化去重机制**，新增URL去重、标题去重、主题去重三重检查机制，避免重复收录新闻
- 2026-05-08：新增**固定官方信源**检索规则（欧盟DMA官网、EC新闻稿、Apple Developer News、Google Developers Blog、Google Security Blog、Epic Games News），确保官方一手信息不遗漏；同时将新收录的欧盟DMA官方新闻稿写入数据并构建部署
- 2026-05-09：整合**news-research 技能精华**，新增来源验证分级体系（S/A/B/C四级）、影响分析框架（整体影响6维度+华为影响5维度）、盲区检测清单（6大细分领域覆盖检查）、遗漏案例分析登记表、每周深度检索机制
- 2026-05-09：优化时间范围，所有Bing搜索从freshness=week改为freshness=day（聚焦最近48小时）；定时任务超时从1000秒改为1200秒
- 2026-06-10：修复重复的英文关键词搜索段落（删除完全重复的第二份）；明确手动执行（cron已运行后同天重跑）的时间范围规则：仍用freshness=day，无新增属正常，禁止扩至week；移除freshness=week补搜的宽松措辞
