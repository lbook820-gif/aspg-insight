# ASPG Insight 工作流记录

## 每日自动更新流程

### 1. 新闻采集

- **方式**：WorkBuddy 自动化 `aspg-insight-daily-update`（本机定时，非云端）
- **定时**：每天本机 17:30（= 北京时间次日 00:30）
- **时间范围**：最近 72 小时为主，最长回溯 5 天（补跑时）
- **补跑机制**：本机休眠会错过窗口，开机后由调度器自动补跑；补跑按实际运行日期归档

#### 采集顺序（重要，2026-10 修订）

**第一步：信源直采（主通道）**

```bash
python3 scripts/fetch_feeds.py --days 3            # 文本清单，按日期分组
python3 scripts/fetch_feeds.py --days 3 --json      # 结构化，便于逐条判定
```

脚本直连官方与权威媒体的 RSS/Atom，带发布时间，可按时间窗过滤，覆盖：

| 源 | 覆盖 | 级别 |
|----|------|------|
| Apple Developer News | App 审核指南、政策更新 | S |
| Android Developers Blog / Play 标签 | Google Play 政策与能力 | S |
| 欧盟委员会新闻稿 | DMA/DSA 执法与决定 | S |
| 英国 CMA | SMS 认定、行为要求、咨询 | S |
| 欧洲央行 | 数字欧元 | S |
| TechCrunch / The Verge | 综合科技 | A |
| 9to5Mac / AppleInsider | 苹果垂直 | B |
| Finextra / Payments Dive | 支付与收单 | B |

**第二步：搜索补充（辅助）**

对直采未覆盖的角度（如 EPI/Wero、WhatsApp 互操作、区域监管动向）再用 WebSearch 补搜。

> ⚠️ 经验：搜索工具对"新闻类"查询经常返回科普长文、SEO 站与教程页，而非当日新闻，且不保证时效。
> 因此**不得把搜索结果当作唯一采集通道**；若某天直采与补搜都没有符合条件的新条目，视为"当日确无新增"，并在报告中写明候选数与判断依据，而不是默认漏采。

#### 搜索关键词（补充检索时使用，8 组，覆盖 3 大模块）

> **⚠️ 过滤规则**：所有搜索结果中，**明确以中国内地（大陆）市场为主体**或**仅与中国市场相关**的新闻必须排除。
> 排除标准包括但不限于："中国""中国市场""中国监管""国行""工信部""国内"等关键词主导的报道，以及来源仅为中国国内媒体的独家本地新闻。
> 全球性事件（如DMA、Epic诉谷歌等）中若包含中国市场影响分析的段落，不影响该新闻被采用。

**模块 A — 平台政策与监管（4组）**
1. `App Store iOS 政策 佣金 2026`
2. `Google Play Android 政策 三方计费 2026`
3. `DMA 欧盟 数字市场法 反垄断 2026`
4. `第三方应用商店 侧载 Epic 诉讼 2026`

**模块 B — 消息与广告（2组）**
5. `WhatsApp Telegram 即时通讯 隐私 互操作`
6. `App Store 广告 Apple Maps 地图广告 2026`

**模块 C — 支付生态（2组）**
7. `EPI Wero 欧洲支付 数字欧元 支付主权 2026`
8. `Visa Mastercard 跨境支付 数字钱包 即时支付 2026`

#### 英文补充搜索（仅 3 组，使用 Google 搜索）

> 英文搜索结果优先采用非中国视角的国际化报道。
```javascript
web_fetch({"url": "https://www.google.com/search?q=DMA+Digital+Markets+Act+Apple+Google+2026"})
web_fetch({"url": "https://www.google.com/search?q=WhatsApp+interoperability+third+party+messaging+2026"})
web_fetch({"url": "https://www.google.com/search?q=EPI+Wero+digital+euro+payment+Europe+2026"})
```

### 2. 来源验证

| 等级 | 说明 | 处理方式 |
|------|------|---------|
| S级 | 官方公告（EC、Apple Dev、Google Blog） | 直接可用 |
| A级 | 权威科技媒体（TechCrunch、The Verge） | 直接可用 |
| B级 | 垂直媒体（9to5Mac、Android Police） | 交叉验证后可用 |
| C级 | 综合财经媒体 | 需S/A级交叉验证 |
| ❌ **排除** | **中国国内媒体（新浪、搜狐、腾讯新闻、IT之家、36氪等）的独家本地报道** | **不采用** |

> **特别说明**：中国国内媒体转载翻译的海外新闻（如转载自Reuters、The Verge等的文章），仍可作为参考来源，但必须追溯原文链接进行交叉验证。

### 3. 去重检查

**三步规则**（2026-10 修订：区分"重复"与"进展"）：

1. **URL 去重**（硬规则）：新 URL 不得在已有数据中出现，含同一文章的不同转载/短链。
2. **标题去重**（硬规则）：与已有标题关键词重叠 > 70% 且指向同一事件同一进展的，跳过。
3. **主题去重**（软规则）：判断是否为**同一事件的同一进展**。
   - **跳过**：仅措辞不同、无新增事实的重复报道；媒体转述同一份公告而未提供新信息。
   - **收录**：同一事件出现**实质新进展**时，应作为新条目收录，并在 `summary` 首句写明进展点。实质新进展包括：
     - 监管机构从"拟议/预告"进入"正式提案、启动咨询、作出决定、开出罚单、公布截止日期"
     - 法院/法官的裁决、听证、上诉、和解批准等程序节点
     - 企业正式回应、提起上诉、政策正式生效或生效日期确定
     - 新增可量化数据（金额、费率、用户数、生效范围）或适用范围扩大
   - 判定示例：10-16"CMA 拟下周发布 NFC 咨询提案"（已收录 id 320）→ 10-20"CMA 正式发布咨询提案、咨询期至 11-17、要求 SE+HCE 双标准"属于**实质新进展**，应收录（id 321），不得以"后续报道"为由跳过。

**时效红线**：`publishDate` 早于运行日前 5 天（补跑窗口）的条目，除重大遗漏外不补录；不收录未来日期的活动预告。

**去重命令**：
```bash
cd <仓库根目录>
grep -h "sourceUrl:" src/data/news/news_*.ts | sed "s/.*sourceUrl: '//;s/'.*//" | sort -u > /tmp/existing_urls.txt
```

**如无新增新闻**：完成采集与去重后确认无条目通过，不提交，并在运行报告中写明「候选 N 条，均因 X 原因未收录」。

### 4. 内容生成

对每条通过去重的新新闻，生成（**精简版**，每条分析控制在 150 字以内）：

| 字段 | 要求 |
|------|------|
| `id` | 当前最大 ID + 1 |
| `title` | 中文标题，含日期/版本等关键信息 |
| `source` | 来源名称 |
| `sourceUrl` | 原文链接（优先使用海外原文链接） |
| `summary` | 1-2 句话概括 |
| `publishDate` | YYYY-MM-DD |
| `score` | 1-10（9-10行业变革 / 7-8重要政策 / 5-6一般动态 / 1-4参考） |
| `category` | appstore / googleplay / dma / thirdparty / developer |
| `tags` | 2-5 个标签（不含中国专有名词/事件） |
| `overallImpact` | **3 个维度，2-3 句话**：政策影响 + 市场影响 + 开发者/用户影响 |
| `huaweiImpact` | **2-3 个维度，2-3 句话**：竞争影响 + 机会窗口（或合规参考） |

**内容分类**：
- **支付生态**：包含 EPI/Wero/Visa/Mastercard/PayPal/Stripe/数字欧元/CBDC/数字钱包 等支付关键词，且无 应用商店/侧载/诉讼/IAP 等排除词
- **应用生态**：其余所有

### 5. 写入数据
每月 1 日在data/news文件夹下的自动创建一个news 文件，格式为new_yyyy_mm
新新闻更新在最新的 news 文件的数组末尾。
使用 `edit` 工具时，匹配 `id: '当前最大ID'` 所在的对象尾部，在其后加逗号和新的对象。

### 6. 推送

```bash
cd /home/sandbox/.openclaw/workspace/repo/aspg-insight
git add -A src/data/newsData.ts
git commit -m "auto: daily news update YYYY-MM-DD"
git push origin main
```

**不需要** `npm install` / `npm run build` — 推送后 GitHub Actions 自动构建部署。

### 7. 自动部署（GitHub Actions）

- **触发**：main 分支推送时自动触发
- **工作流**：`.github/workflows/deploy.yml`
- **步骤**：checkout → Node 20 → npm ci → npm run build → 部署到 Pages
- **保底**：每天北京时间 08:00 自动构建一次
- **手动触发**：Actions → Build and Deploy → Run workflow

## 手动添加新闻（备用）

- **方式**：GitHub Actions → Auto Update News → Run workflow
- **表单**：标题、链接、来源、摘要、整体影响、华为影响、分类、评分

## 每周深度检索（周六）

周六执行完每日更新后，额外用 `freshness=week` 补搜 2 组英文关键词：

```javascript
web_fetch({"url": "https://www.google.com/search?q=DMA+interoperability+2026+Apple+WhatsApp"})
web_fetch({"url": "https://www.google.com/search?q=alternative+app+store+commission+side+loading+2026"})
```

## 盲区检测清单

推送前快速脑检以下 6 个领域是否有明显遗漏。只需确认关键词搜索覆盖过即可，**不需要额外搜索**：

| 领域 | 覆盖方式 |
|------|---------|
| 消息互操作 | 关键词 5 |
| 支付系统开放 | 关键词 7 + 8 |
| 广告平台规则 | 关键词 6 |
| 浏览器引擎/侧载 | 关键词 4 + 英文补充 1 |
| 反垄断诉讼 | 关键词 3 + 4 |

## 相关路径

- 本地仓库：`/Users/xiaoqingli/WorkBuddy/2026-09-24-21-27-52/aspg-insight/`
- 远程仓库：`https://github.com/lbook820-gif/aspg-insight`
- 网站地址：`https://lbook820-gif.github.io/aspg-insight/`
- 抓取脚本：`scripts/fetch_feeds.py`
- Push Token：已通过本机 git 凭据管理（`git config user.name=lbook820-gif`）

## 定时任务配置

- **任务名**：`aspg-insight-daily-update`
- **调度**：WorkBuddy 自动化，每天本机 17:30（本机时区 GMT+1 = 北京时间次日 00:30）
- **自动化 id**：`142973c9-503a-41e9-95de-a63b7b9ecfef`
- **调度日志**：`~/.workbuddy/logs/automation.log`（按 id 检索 start/finish 与成败）
- **推送**：直接 push 到 main，GitHub Actions 自动构建部署；失败时只报错，不强制推送

## 已知陷阱

1. **搜索工具不是新闻源**：对"XX 政策 2026"这类查询常返回科普/SEO 长文，时效不可靠。以 `fetch_feeds.py` 直采为主。
2. **本机休眠会错过窗口**：日志出现 `scheduling suspended` 即表示本机未运行，恢复后会自动补跑，补跑时间晚于原定窗口属正常。
3. **不要用"后续报道"一刀切去重**：本领域大部分新闻天然是同一事件的推进，过度去重会导致连续多天"零新增"。按上面的"实质新进展"标准判定。
4. **跨时区归档**：日期基准取运行当天的本机日期，不要用北京时间推断月份，否则月初会出现归档到上月文件。
