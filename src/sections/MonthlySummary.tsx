import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, BarChart3, Trophy, TrendingUp, Shield, CreditCard, Smartphone, Globe, Gavel } from 'lucide-react';
import { sortedNewsData } from '../data/newsData';

export default function MonthlySummary() {
  const aprilNews = useMemo(() => {
    return sortedNewsData.filter(news => news.publishDate.startsWith('2026-04'));
  }, []);

  if (aprilNews.length === 0) return null;

  // 统计信息
  const totalCount = aprilNews.length;
  const avgScore = Math.round(aprilNews.reduce((sum, n) => sum + n.score, 0) / totalCount * 10) / 10;
  const top5 = [...aprilNews].sort((a, b) => b.score - a.score).slice(0, 5);

  // 分类统计
  const categoryCount: Record<string, number> = {};
  aprilNews.forEach(n => {
    categoryCount[n.category] = (categoryCount[n.category] || 0) + 1;
  });

  // 按日期分组
  const dateGroups = useMemo(() => {
    const groups: Record<string, typeof aprilNews> = {};
    aprilNews.forEach(news => {
      if (!groups[news.publishDate]) groups[news.publishDate] = [];
      groups[news.publishDate].push(news);
    });
    return Object.entries(groups).sort((a, b) => b[0].localeCompare(a[0]));
  }, [aprilNews]);

  const categoryIcons: Record<string, React.ReactNode> = {
    appstore: <Smartphone className="w-3.5 h-3.5" />,
    googleplay: <TrendingUp className="w-3.5 h-3.5" />,
    dma: <Gavel className="w-3.5 h-3.5" />,
    thirdparty: <Globe className="w-3.5 h-3.5" />,
    developer: <CreditCard className="w-3.5 h-3.5" />,
  };

  const categoryLabels: Record<string, string> = {
    appstore: 'App Store',
    googleplay: 'Google Play',
    dma: 'DMA',
    thirdparty: '第三方',
    developer: '开发者',
  };

  return (
    <div className="mb-10">
      <div className="mb-6 border-b-2 border-gray-800 pb-3 flex items-center justify-between">
        <h3 className="font-bold text-xl flex items-center gap-2 text-gray-900">
          <Calendar className="w-5 h-5 text-gray-800" />
          2026年4月快讯综述
        </h3>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          共 {totalCount} 条
        </span>
      </div>

      {/* 数据概览 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200/60">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-blue-600 font-medium">新闻总数</span>
          </div>
          <p className="text-2xl font-bold text-blue-900">{totalCount}</p>
          <p className="text-xs text-blue-500 mt-0.5">4月新增</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-4 border border-amber-200/60">
          <div className="flex items-center gap-2 mb-1">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span className="text-xs text-amber-600 font-medium">平均热度</span>
          </div>
          <p className="text-2xl font-bold text-amber-900">{avgScore}</p>
          <p className="text-xs text-amber-500 mt-0.5">/ 10分</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 border border-green-200/60">
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-xs text-green-600 font-medium">监管热点</span>
          </div>
          <p className="text-2xl font-bold text-green-900">{categoryCount['dma'] || 0}</p>
          <p className="text-xs text-green-500 mt-0.5">DMA相关</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4 border border-purple-200/60">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-purple-600 font-medium">高分新闻</span>
          </div>
          <p className="text-2xl font-bold text-purple-900">{aprilNews.filter(n => n.score >= 9).length}</p>
          <p className="text-xs text-purple-500 mt-0.5">评分≥9</p>
        </div>
      </div>

      {/* Top 5 新闻 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
          <h4 className="font-bold text-sm text-gray-700 flex items-center gap-1.5">
            <Trophy className="w-4 h-4 text-amber-500" />
            本月热点新闻 TOP 5
          </h4>
        </div>
        <div className="divide-y divide-gray-100">
          {top5.map((news, i) => (
            <Link
              key={news.id}
              to={`/#news-${news.id}`}
              className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors group"
            >
              <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                i === 0 ? 'bg-yellow-100 text-yellow-700' :
                i === 1 ? 'bg-gray-200 text-gray-600' :
                i === 2 ? 'bg-orange-100 text-orange-700' :
                'bg-gray-100 text-gray-500'
              }`}>
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-800 group-hover:text-blue-600 transition-colors truncate">
                  {news.title}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-gray-400">{news.publishDate}</span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className={`text-xs font-medium ${
                    news.score >= 8 ? 'text-green-600' : 'text-amber-600'
                  }`}>
                    热度 {news.score}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* 按日期时间线 */}
      <div className="relative">
        {dateGroups.map(([date, newsList]) => (
          <div key={date} className="mb-4 last:mb-0">
            {/* 日期标签 */}
            <div className="flex items-center gap-3 mb-2">
              <div className="flex-shrink-0 w-20 text-xs font-bold text-gray-500 bg-gray-100 rounded-full px-2 py-1 text-center">
                {date.slice(5)}
              </div>
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400">{newsList.length}条</span>
            </div>

            {/* 新闻列表 */}
            <div className="space-y-1.5">
              {newsList.map(news => (
                <Link
                  key={news.id}
                  to={`/#news-${news.id}`}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <span className="flex-shrink-0 flex items-center gap-1 text-gray-400 text-xs">
                    {categoryIcons[news.category] || null}
                  </span>
                  <span className="flex-1 text-sm text-gray-700 group-hover:text-blue-600 transition-colors truncate">
                    {news.title}
                  </span>
                  <span className={`flex-shrink-0 text-xs font-medium px-1.5 py-0.5 rounded ${
                    news.score >= 8 ? 'text-green-600 bg-green-50' :
                    news.score >= 6 ? 'text-amber-600 bg-amber-50' :
                    'text-gray-400 bg-gray-100'
                  }`}>
                    {news.score}
                  </span>
                  <span className="flex-shrink-0 text-xs text-gray-300 bg-gray-100 rounded px-1.5 py-0.5 hidden sm:inline">
                    {categoryLabels[news.category] || news.category}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
