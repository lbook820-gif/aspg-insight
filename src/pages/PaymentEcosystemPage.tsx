import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, TrendingUp, Minus, TrendingDown, Search } from 'lucide-react';
import { paymentEcosystemNews } from '../data/newsData';

// 热门搜索关键词
const hotKeywords = ['EPI', 'Wero', 'Visa', 'Mastercard', 'Stripe', '数字欧元'];

export default function PaymentEcosystemPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  // 搜索过滤
  const filteredNews = searchQuery.trim()
    ? paymentEcosystemNews.filter(
        (news) =>
          news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          news.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          news.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
          news.source.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : paymentEcosystemNews;

  const handleKeywordClick = (keyword: string) => {
    setSearchQuery(keyword);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const getScoreIcon = (score: number) => {
    if (score >= 8) return <TrendingUp className="w-4 h-4" />;
    if (score >= 6) return <Minus className="w-4 h-4" />;
    return <TrendingDown className="w-4 h-4" />;
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600 bg-green-50';
    if (score >= 6) return 'text-amber-600 bg-amber-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Header */}
      <div className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm">
            <Link to="/" className="hover:text-black">首页</Link>
            <span>/</span>
            <span className="text-black">支付生态新闻</span>
          </div>
          <h1 className="font-bold mb-2 text-gray-900 text-xl md:text-2xl">
            支付生态新闻 <span className="text-base font-normal text-gray-500">（{paymentEcosystemNews.length}）</span>
          </h1>
          <p className="text-gray-600">
            支付政策、佣金调整、第三方支付动态
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* EPI Insight Banner */}
        <Link 
          to="/epi-insight" 
          className="block mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg p-5 hover:shadow-lg transition-all group"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 bg-blue-600 text-white font-semibold rounded-full text-xs">
                  专栏
                </span>
                <span className="text-blue-600 font-bold text-lg">EPI 洞察专栏</span>
              </div>
              <p className="text-gray-700 text-sm md:text-base">
                欧洲支付主权战略深度分析 · Wero 数字钱包 · 2026 年商业化关键年
              </p>
              <p className="text-gray-500 text-xs mt-2">
                点击查看完整分析 →
              </p>
            </div>
            <div className="ml-4 text-blue-600 group-hover:translate-x-1 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索支付生态新闻..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3 md:py-4 focus:outline-none bg-white border border-gray-200 rounded-lg focus:border-black text-sm"
            />
            {/* 清除按钮 */}
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Hot Keywords */}
          {!searchQuery && (
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="text-gray-400 text-xs">热门搜索：</span>
              {hotKeywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => handleKeywordClick(keyword)}
                  className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 rounded-full hover:bg-gray-100 text-xs"
                >
                  {keyword}
                </button>
              ))}
            </div>
          )}

          {/* 搜索结果统计 */}
          {searchQuery && (
            <div className="mt-3 flex items-center justify-between">
              <span className="text-gray-600 text-sm">
                找到 <strong>{filteredNews.length}</strong> 条相关新闻
              </span>
              <button
                onClick={clearSearch}
                className="text-blue-600 hover:text-blue-700 text-sm"
              >
                清除搜索
              </button>
            </div>
          )}
        </div>

        {/* News List */}
        <div className="space-y-4 md:space-y-6">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              id={`news-${news.id}`}
              className="bg-white p-4 md:p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              {/* Top: Title & Meta */}
              <div className="mb-3 md:mb-4">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 font-medium rounded-full text-xs">
                    {news.source}
                  </span>
                  <span className="text-gray-400 text-xs">
                    {news.publishDate}
                  </span>
                  <span className={`flex items-center gap-1 px-2 py-0.5 rounded font-medium text-xs ${getScoreColor(news.score)}`}>
                    {getScoreIcon(news.score)}
                    评分 {news.score}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-base md:text-lg">
                  {news.title}
                </h3>
              </div>

              {/* Summary */}
              <p className="text-gray-600 mb-4 md:mb-5 text-sm md:text-base">
                {news.summary}
              </p>

              {/* AI Comment */}
              <div className="space-y-2 md:space-y-3 mb-4 md:mb-5">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 md:p-4">
                  <span className="inline-block px-2 py-0.5 bg-blue-500 text-white rounded mb-1 md:mb-2 text-xs">
                    整体影响
                  </span>
                  <p className="text-gray-700 text-sm md:text-base">
                    {news.aiComment.overallImpact}
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 md:p-4">
                  <span className="inline-block px-2 py-0.5 bg-orange-500 text-white rounded mb-1 md:mb-2 text-xs">
                    对华为的影响
                  </span>
                  <p className="text-gray-700 text-sm md:text-base">
                    {news.aiComment.huaweiImpact}
                  </p>
                </div>
              </div>

              {/* Bottom: Tags & Action */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-3 md:pt-4 border-t border-gray-100">
                <div className="flex flex-wrap gap-2">
                  {news.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-black text-sm"
                >
                  原文链接
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">未找到相关新闻</p>
          </div>
        )}
      </div>
    </main>
  );
}
