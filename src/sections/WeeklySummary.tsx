import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, TrendingUp, AlertCircle, DollarSign, Globe } from 'lucide-react';
import { sortedNewsData } from '../data/newsData';

// 获取北京时间（UTC+8）的日期
const getBeijingDate = (): Date => {
  const now = new Date();
  return new Date(now.getTime() + (8 * 60 * 60 * 1000));
};

const isMondayInBeijing = (): boolean => {
  return getBeijingDate().getUTCDay() === 1;
};

// 根据是否周一返回不同的日期范围
const getDateRange = (): { start: string; end: string; title: string; isWeekly: boolean } => {
  const beijingNow = getBeijingDate();
  const isMonday = isMondayInBeijing();
  
  if (isMonday) {
    // 上周一到上周日
    const end = new Date(beijingNow.getTime() - (1 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    const start = new Date(beijingNow.getTime() - (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    return { start, end, title: '上周快讯一览', isWeekly: true };
  } else {
    // 当日新增
    const today = beijingNow.toISOString().split('T')[0];
    return { start: today, end: today, title: '当日新增', isWeekly: false };
  }
};

export default function WeeklySummary() {
  const { start, end, title, isWeekly } = getDateRange();

  // 获取对应时间范围的新闻
  const displayNews = useMemo(() => {
    return sortedNewsData.filter(news => {
      return news.publishDate >= start && news.publishDate <= end;
    });
  }, [start, end]);

  // 按分类统计
  const categoryStats = useMemo(() => {
    const stats: Record<string, number> = {};
    displayNews.forEach(news => {
      stats[news.category] = (stats[news.category] || 0) + 1;
    });
    return stats;
  }, [displayNews]);

  // 按重要性筛选高分新闻
  const highImpactNews = useMemo(() => {
    return displayNews
      .filter(news => news.score >= 8)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [displayNews]);

  // 提取关键主题
  const keyThemes = useMemo(() => {
    const themes: string[] = [];
    
    // 检查是否有相关主题
    if (displayNews.some(n => n.title.includes('DMA') || n.title.includes('数字市场法'))) {
      themes.push('欧盟DMA监管持续深化');
    }
    if (displayNews.some(n => n.title.includes('佣金') || n.title.includes('抽成'))) {
      themes.push('应用商店佣金改革');
    }
    if (displayNews.some(n => n.title.includes('支付') || n.title.includes('EPI') || n.title.includes('Wero'))) {
      themes.push('欧洲支付主权建设');
    }
    if (displayNews.some(n => n.title.includes('AI') || n.title.includes('人工智能'))) {
      themes.push('AI生态开放争议');
    }
    if (displayNews.some(n => n.title.includes('第三方') || n.title.includes('侧载'))) {
      themes.push('第三方应用商店崛起');
    }
    
    return themes.slice(0, 4);
  }, [displayNews]);

  // 如果没有新闻，不显示此版块
  if (displayNews.length === 0) {
    return null;
  }

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h2 className="font-bold text-gray-900 text-xl md:text-2xl">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            {start === end ? start : `${start} 至 ${end}`} · 共 {displayNews.length} 条动态
          </p>
        </div>

        {/* Key Themes */}
        {keyThemes.length > 0 && (
          <div className="mb-6 bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              {isWeekly ? '上周焦点' : '今日焦点'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {keyThemes.map((theme, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg"
                >
                  <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{theme}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Category Stats */}
        <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-purple-600" />
              <span className="text-xs text-gray-500">应用生态</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {(categoryStats['appstore'] || 0) + (categoryStats['googleplay'] || 0)}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-600" />
              <span className="text-xs text-gray-500">支付生态</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {categoryStats['developer'] || 0}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-red-600" />
              <span className="text-xs text-gray-500">监管政策</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {categoryStats['dma'] || 0}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-amber-600" />
              <span className="text-xs text-gray-500">第三方生态</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              {(categoryStats['thirdparty'] || 0) + (categoryStats['developer'] || 0)}
            </p>
          </div>
        </div>

        {/* High Impact News */}
        {highImpactNews.length > 0 && (
          <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-lg">🔥</span>
              高影响力事件
            </h3>
            <div className="space-y-3">
              {highImpactNews.map((news, index) => (
                <Link
                  key={news.id}
                  to={`/#news-${news.id}`}
                  className="block p-3 hover:bg-gray-50 rounded-lg transition-colors border-l-4 border-blue-500"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm mb-1 line-clamp-2">
                        {news.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <span>{news.source}</span>
                        <span>·</span>
                        <span>{news.publishDate}</span>
                        <span className="px-1.5 py-0.5 bg-red-100 text-red-600 rounded font-medium">
                          热度 {news.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-6 text-center">
          <Link
            to="/app-ecosystem"
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm"
          >
            查看全部动态
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
