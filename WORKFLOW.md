# ASPG Insight 工作流记录

## 每日自动更新流程

### 1. 新闻采集（由我执行）
- **时间**：每天北京时间 00:00（午夜）
- **方式**：OpenClaw Cron 任务（isolated session）
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

### 2. 内容生成
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
- 对每条新发现的新闻，AI 生成：
  - `overallImpact`：整体行业影响分析
  - `huaweiImpact`：对华为的影响分析（**核心字段，必须生成**），提供深度扩展的多维度分析结果。
  - `score`：1-10 重要性评分
  - `category`：appstore / googleplay / dma / thirdparty / developer
  - `tags`：相关标签
- 新新闻追加到数组末尾，id 按最大+1递增
- **注意**：不收录纯华为产品报道，聚焦行业动态和监管政策

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

## 相关路径
- 本地仓库：`/home/sandbox/.openclaw/workspace/repo/aspg-insight/`
- 远程仓库：`https://github.com/lbook820-gif/aspg-insight`
- 网站地址：`https://lbook820-gif.github.io/aspg-insight/`

## 定时任务信息
- **任务ID**：`5e03e870-b12c-4ba1-8068-105306a3f3bb`
- **任务名**：`aspg-insight-daily-update`
- **Cron**：`0 0 * * *` @ Asia/Shanghai
- **Session Target**：isolated
- **Thinking**：high
- **Timeout**：600秒

## 更新历史
- 2026-04-21：初始化工作流，添加3条华为生态新闻，设置定时任务
- 2026-04-21：优化关键词，新增XChat、Apple Maps广告等关键词，移除纯华为产品报道；深化华为影响分析
- 2026-04-22：新增支付生态关键词（EPI/Wero/欧洲支付/数字欧元等），添加6条EPI相关新闻，覆盖欧洲支付主权、Wero数字钱包、Airwallex/Worldpay/PingPong合作等动态
- 2026-04-23：执行每日更新流程，新增3条新闻：马克龙呼吁欧洲支付主权、万事达卡支持Apple Pay跨境支付、欧盟认定Meta违反反垄断规则要求开放WhatsApp AI访问
- 2026-04-24：重构支付生态分类逻辑，从关键词匹配改为核心关键词+排除关键词模式，聚焦支付行业本身（支付渠道、支付公司、银行、卡组织、钱包、数字货币），排除应用商店生态相关新闻；优化应用生态和支付生态页面搜索功能，与首页保持一致；修复多条新闻分类错误；新增Stripe估值暴涨、Stripe加密货币支付、Curve Pay与华为手表合作等新闻；更新支付生态热门搜索词为EPI/Wero/Visa/Mastercard/Stripe/数字欧元
- 2026-04-26：**强化去重机制**，新增URL去重、标题去重、主题去重三重检查机制；删除重复新闻（XChat、Google Play佣金、苹果地图广告），仅保留真正新增的新闻（数字欧元、欧洲支付主权）
