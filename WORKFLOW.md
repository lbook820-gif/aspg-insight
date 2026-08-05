# ASPG Insight 工作流记录

## 每日自动更新流程

### 1. 新闻采集

- **方式**：OpenClaw Cron 任务（isolated session）
- **定时**：每天 00:30 @ Asia/Shanghai（避开午夜网络拥堵期）
- **时间范围**：搜索过去 48 小时
- **超时**：900 秒（实测约 5-8 分钟可完成）

#### 搜索方式
**全部使用小艺联网搜索**（xiaoyi-web-search），不再使用 Bing site: 指令。

```bash
cd /home/sandbox/.openclaw/workspace/skills/xiaoyi-web-search && node ./scripts/search.js "关键词" -n 10
```

#### 搜索关键词（精简为 8 组，覆盖 3 大模块）

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

**三步规则**（必须严格执行）：

1. **URL 去重**：新 URL 不能在已有列表中
2. **标题去重**：与已有标题关键词重叠 ≤ 70%
3. **主题去重**：不能是已有新闻的后续/同事件报道

**去重命令**：
```bash
cd /home/sandbox/.openclaw/workspace/repo/aspg-insight
awk '/sourceUrl:/{print}' src/data/newsData.ts | sort | uniq > /tmp/existing_urls.txt
```

**如无新增新闻**：`git pull` 后静默结束，不提交。

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

- 本地仓库：`/home/sandbox/.openclaw/workspace/repo/aspg-insight/`
- 远程仓库：`https://github.com/lbook820-gif/aspg-insight`
- 网站地址：`https://lbook820-gif.github.io/aspg-insight/`
- Push Token：已通过 git credential-store 本地管理

## 定时任务配置

- **任务名**：`aspg-insight-daily-update`
- **Cron**：`30 0 * * *` @ Asia/Shanghai
- **模式**：isolated，thinking=high
- **超时**：900 秒
- **Channel**：xiaoyi-channel
