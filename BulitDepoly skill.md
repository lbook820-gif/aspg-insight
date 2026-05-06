# ASPG Insight 工作流构建与部署



### 1. 构建与推送
- `npm install`（如 node_modules 不存在）
- `npm run build`（生成 dist/）
- `git add -A`
- `git commit -m "auto: daily news update YYYY-MM-DD"`
- `git push origin main`
- **如无新增新闻**：仅执行 `git pull` 后静默结束，不提交空更新

### 2. 自动部署（GitHub Actions）
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
- **Timeout**：600秒

## 更新历史
- 2026-04-21：初始化工作流，添加3条华为生态新闻，设置定时任务
- 2026-04-21：优化关键词，新增XChat、Apple Maps广告等关键词，移除纯华为产品报道；深化华为影响分析
- 2026-04-22：新增支付生态关键词（EPI/Wero/欧洲支付/数字欧元等），添加6条EPI相关新闻，覆盖欧洲支付主权、Wero数字钱包、Airwallex/Worldpay/PingPong合作等动态
- 2026-04-23：执行每日更新流程，新增3条新闻：马克龙呼吁欧洲支付主权、万事达卡支持Apple Pay跨境支付、欧盟认定Meta违反反垄断规则要求开放WhatsApp AI访问
- 2026-04-24：重构支付生态分类逻辑，从关键词匹配改为核心关键词+排除关键词模式，聚焦支付行业本身（支付渠道、支付公司、银行、卡组织、钱包、数字货币），排除应用商店生态相关新闻；优化应用生态和支付生态页面搜索功能，与首页保持一致；修复多条新闻分类错误；新增Stripe估值暴涨、Stripe加密货币支付、Curve Pay与华为手表合作等新闻；更新支付生态热门搜索词为EPI/Wero/Visa/Mastercard/Stripe/数字欧元
- 2026-04-26：**强化去重机制**，新增URL去重、标题去重、主题去重三重检查机制，避免重复收录新闻
