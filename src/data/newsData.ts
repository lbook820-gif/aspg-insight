// 历史新闻及所有新闻通过月度文件进行管理

// [IMPORTS_START]
import { news_2026_07 } from './news/news_2026_07';
import { news_2026_06 } from './news/news_2026_06';
import { news_2026_05 } from './news/news_2026_05';
import { news_2026_04 } from './news/news_2026_04';
import { news_2026_03 } from './news/news_2026_03';
import { news_2026_02 } from './news/news_2026_02';
import { news_2026_01 } from './news/news_2026_01';
import { news_2025_12 } from './news/news_2025_12';
import { news_2025_11 } from './news/news_2025_11';
import { news_2025_10 } from './news/news_2025_10';
import { news_2025_04 } from './news/news_2025_04';
// [IMPORTS_END]

// 新闻数据 - 所有新闻均来自可靠来源
// 按日期降序排列(最新的在前)

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  sourceUrl: string;
  summary: string;
  aiComment: {
    overallImpact: string;
    huaweiImpact: string;
  };
  publishDate: string;
  score: number;
  category: string;
  tags: string[];
}

// 完整新闻数据 = 所有月份新闻合并
export const newsData: NewsItem[] = [
  // [ARRAY_START]
  ...news_2026_07,
  ...news_2026_06,
  ...news_2026_05,
  ...news_2026_04,
  ...news_2026_03,
  ...news_2026_02,
  ...news_2026_01,
  ...news_2025_12,
  ...news_2025_11,
  ...news_2025_10,
  ...news_2025_04,
// [ARRAY_END]
];

// 按日期降序排序(最新的在前)
export const sortedNewsData = [...newsData].sort((a, b) => {
  return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
});

// 支付生态相关新闻(支付渠道、支付公司、银行、卡组织、钱包、数字货币)
export const paymentEcosystemNews = sortedNewsData.filter((item) => {
  const paymentCoreKeywords = [
    'Visa', 'Mastercard', '万事达', 'PayPal', 'Stripe', 'Curve',
    'EPI', 'Wero', '数字欧元', '数字货币', 'CBDC',
    'Airwallex', 'PingPong', 'Worldpay',
    '支付主权', '支付倡议', '欧洲支付',
    '数字钱包', '跨境支付', '即时支付',
    '银行', '卡组织', '加密货币'
  ];

  const excludeKeywords = [
    'Epic Games', 'Epic Games Store', 'Fortnite',
    'App Store', 'Google Play', '应用商店',
    '第三方商店', '侧载', '诉讼', '上诉',
    '佣金', 'IAP', '计费', '市场报告', '应用内购买'
  ];

  const text = (item.title + item.summary + item.tags.join(' ')).toLowerCase();

  if (excludeKeywords.some(kw => text.includes(kw.toLowerCase()))) {
    return false;
  }

  return paymentCoreKeywords.some(kw => text.includes(kw.toLowerCase()));
});

// 应用生态相关新闻(其他所有新闻)
export const appEcosystemNews = sortedNewsData.filter((item) => {
  return !paymentEcosystemNews.find(p => p.id === item.id);
});

// 获取北京时间(UTC+8)的日期
const getBeijingNow = (): Date => {
  const now = new Date();
  return new Date(now.getTime() + (8 * 60 * 60 * 1000));
};

// 获取最近N天的新闻(用于最新动态,基于北京时间)
export const getLatestNews = (days: number = 30) => {
  const beijingNow = getBeijingNow();
  const cutoffDate = new Date(beijingNow.getTime() - days * 24 * 60 * 60 * 1000);

  return sortedNewsData.filter((item) => {
    const itemDate = new Date(item.publishDate);
    return itemDate >= cutoffDate;
  });
};

// 获取当日新增新闻(用于首页当日新增版块)
export const getTodayNews = (today?: string) => {
  if (!today) {
    const beijingNow = getBeijingNow();
    today = `${beijingNow.getUTCFullYear()}-${String(beijingNow.getUTCMonth() + 1).padStart(2, '0')}-${String(beijingNow.getUTCDate()).padStart(2, '0')}`;
  }
  return sortedNewsData.filter((item) => item.publishDate === today);
};
