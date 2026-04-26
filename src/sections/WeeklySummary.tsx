import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { sortedNewsData } from '../data/newsData';

// 获取北京时间（UTC+8）的日期
const getBeijingDate = (): Date => {
  const now = new Date();
  return new Date(now.getTime() + (8 * 60 * 60 * 1000));
};



// 返回上周日期范围
const getWeeklyRange = (): { start: string; end: string } => {
  const beijingNow = getBeijingDate();
  const end = new Date(beijingNow.getTime() - (1 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
  const start = new Date(beijingNow.getTime() - (7 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
  return { start, end };
};

export default function WeeklySummary() {
  const { start, end } = getWeeklyRange();

  // 获取对应时间范围的新闻
  const displayNews = useMemo(() => {
    return sortedNewsData.filter(news => {
      return news.publishDate >= start && news.publishDate <= end;
    });
  }, [start, end]);

  if (displayNews.length === 0) {
    return (
      <div className="mb-10">
        <div className="mb-4 border-b border-gray-200 pb-2">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            上周快讯一览
          </h3>
        </div>
        <div className="text-center py-8 bg-white rounded-lg border border-gray-200">
          <p className="text-gray-500">上周暂无资讯</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-10 bg-blue-50 rounded-xl p-5 md:p-6 border border-blue-100 shadow-sm">
      <div className="mb-5 border-b border-blue-200/60 pb-3 flex items-center justify-between">
        <h3 className="font-bold text-lg flex items-center gap-2 text-blue-900">
          <Calendar className="w-5 h-5 text-blue-600" />
          上周快讯一览 <span className="text-sm font-normal text-blue-600/70">（{start} 至 {end}）</span>
        </h3>
      </div>

      <div className="space-y-4">
        {displayNews.map((news, index) => (
          <Link
            key={news.id}
            to={`/#news-${news.id}`}
            className="block p-4 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors shadow-sm"
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                {index + 1}
              </span>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 text-base mb-1">
                  {news.title}
                </h4>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                  {news.summary}
                </p>
                <div className="text-xs text-gray-400">
                  {news.publishDate}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
