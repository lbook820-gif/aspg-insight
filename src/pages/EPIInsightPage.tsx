import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, Wallet, TrendingUp, Globe, Users, Clock, DollarSign, Shield, Zap, Target, AlertTriangle } from 'lucide-react';

export default function EPIInsightPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Header */}
      <div className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-black">首页</Link>
            <span>/</span>
            <Link to="/payment-ecosystem" className="hover:text-black">支付生态</Link>
            <span>/</span>
            <span className="text-black">EPI洞察专栏</span>
          </div>
          <h1 className="font-bold mb-2 text-xl md:text-2xl">
            EPI Company 支付生态新闻洞察
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            欧洲支付主权战略深度分析 | 更新时间：2026年4月22日
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Section 1: EPI Overview */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              一、EPI 核心概况
            </h2>
          </div>
          <div className="pl-14 space-y-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-semibold mb-2 text-blue-900">欧洲支付倡议组织（European Payments Initiative，简称 EPI）</p>
              <p className="text-gray-700">
                由 <strong>16 家欧洲银行和支付服务提供商</strong>组成的联盟，旨在建立欧洲自主的支付体系，减少对美国支付巨头（Visa、Mastercard、PayPal）的依赖。
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-5 border border-indigo-200">
              <div className="flex items-center gap-2 mb-3">
                <Wallet className="w-5 h-5 text-indigo-600" />
                <p className="font-bold text-indigo-900">核心产品：Wero 数字钱包</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span><strong>2024 年 7 月</strong>正式上线</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>欧洲首个本土数字钱包</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>目前用户数：<strong>超过 4,850 万</strong>（德国、法国、比利时）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>累计交易规模：<strong>超过 75 亿欧元</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span>目标：统一欧洲碎片化的支付格局</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Recent News */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              二、近期重要新闻（2025-2026）
            </h2>
          </div>
          <div className="pl-14 space-y-6">
            
            {/* News 1 */}
            <div className="border-l-4 border-blue-400 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">2025-11-18</span>
                <h3 className="font-bold text-base md:text-lg">Airwallex 空中云汇成为 EPI 首席会员单位</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">来源：移动支付网 / 新浪财经 / 界面新闻</p>
                <p className="text-gray-700">
                  Airwallex 正式成为 EPI 首席会员单位，其平台商户可在欧洲各地提供 Wero 数字钱包支付方式。
                  这是 EPI 拓展国际商户群体的重要一步，为中国出海企业提供直接接入欧洲本地支付方式的渠道。
                </p>
                <div className="mt-3 p-3 bg-amber-50 rounded border border-amber-200">
                  <p className="text-sm text-amber-900">
                    <strong>影响分析：</strong>降低对传统银行卡网络的依赖，为中国出海企业简化跨境交易流程。
                  </p>
                </div>
              </div>
            </div>

            {/* News 2 */}
            <div className="border-l-4 border-green-400 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">2026-03-25</span>
                <h3 className="font-bold text-base md:text-lg">Worldpay 加入 EPI 成为核心成员</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">来源：同花顺财经</p>
                <p className="text-gray-700">
                  Global Payments 旗下 Worldpay 加入 EPI，未来数月将为客户开通 Wero 支付。
                  商家可通过简单集成将 Wero 添加为结账选项，无需额外硬件或接口。
                </p>
                <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-sm text-green-900">
                    <strong>影响分析：</strong>大型支付服务商的加入将加速 Wero 的普及，提升欧洲消费者的支付选择多样性。
                  </p>
                </div>
              </div>
            </div>

            {/* News 3 */}
            <div className="border-l-4 border-purple-400 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-semibold">2026-03-04</span>
                <h3 className="font-bold text-base md:text-lg">Wero 在比利时上线电商支付功能</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">来源：BRICS Go / 同花顺财经</p>
                <p className="text-gray-700">
                  比利时成为继德国后第二个支持 Wero 电商支付的市场。当地多家主流银行、头部商户及 Stripe 等支付服务商已接入。
                  <strong>2026 年计划：</strong>法国、卢森堡、荷兰将陆续上线，荷兰已启动将 iDEAL 支付方案迁移至 Wero 的工作。
                </p>
                <div className="mt-3 p-3 bg-purple-50 rounded border border-purple-200">
                  <p className="text-sm text-purple-900">
                    <strong>影响分析：</strong>Wero 正从个人转账向商业支付场景扩展，2026 年将成为商业化关键年。
                  </p>
                </div>
              </div>
            </div>

            {/* News 4 */}
            <div className="border-l-4 border-red-400 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">2026-02-10</span>
                <h3 className="font-bold text-base md:text-lg">欧洲呼吁摆脱对 Visa 和 Mastercard 的依赖</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">来源：移动支付网 / 新浪财经 / 凤凰网</p>
                <p className="text-gray-700">
                  EPI 首席执行官 Martina Weimert 表示："我们高度依赖国际支付解决方案。虽然欧洲各国拥有本土支付卡体系，但缺乏真正的跨境支付系统。"
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-red-50 rounded p-3 border border-red-200">
                    <p className="text-sm font-semibold text-red-900 mb-1">市场现状</p>
                    <p className="text-sm text-gray-700">Visa 和 Mastercard 处理欧元区约 <strong>三分之二</strong> 银行卡交易</p>
                  </div>
                  <div className="bg-red-50 rounded p-3 border border-red-200">
                    <p className="text-sm font-semibold text-red-900 mb-1">脆弱性</p>
                    <p className="text-sm text-gray-700">欧元区 <strong>13 个成员国</strong> 无本土替代方案</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-amber-50 rounded border border-amber-200">
                  <p className="text-sm text-amber-900">
                    <strong>驱动因素：</strong>金融主权、成本压力、地缘政治风险、数据主权与隐私安全
                  </p>
                </div>
              </div>
            </div>

            {/* News 5 */}
            <div className="border-l-4 border-orange-400 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-semibold">2026-01-15</span>
                <h3 className="font-bold text-base md:text-lg">PingPong 成为首批支持 Wero 的亚洲支付公司</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">来源：搜狐网</p>
                <p className="text-gray-700">
                  一次接入有望触达超 <strong>2.5 亿</strong> 欧洲主流消费群体。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
                  <div className="bg-orange-50 rounded p-3 border border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Zap className="w-4 h-4 text-orange-600" />
                      <p className="text-sm font-semibold text-orange-900">速度优势</p>
                    </div>
                    <p className="text-sm text-gray-700"><strong>10 秒内</strong>完成跨境汇款</p>
                  </div>
                  <div className="bg-orange-50 rounded p-3 border border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                      <DollarSign className="w-4 h-4 text-orange-600" />
                      <p className="text-sm font-semibold text-orange-900">成本优势</p>
                    </div>
                    <p className="text-sm text-gray-700"><strong>1%</strong> vs 传统 3%-4%</p>
                  </div>
                  <div className="bg-orange-50 rounded p-3 border border-orange-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-orange-600" />
                      <p className="text-sm font-semibold text-orange-900">便捷性</p>
                    </div>
                    <p className="text-sm text-gray-700">仅需手机号/邮箱/二维码</p>
                  </div>
                </div>
              </div>
            </div>

            {/* News 6 */}
            <div className="border-l-4 border-indigo-400 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-semibold">2026-02-13</span>
                <h3 className="font-bold text-base md:text-lg">欧洲加快数字欧元布局，2029 年正式发行</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <p className="text-sm text-gray-600">来源：新浪财经 / 欧洲时报</p>
                <p className="text-gray-700">
                  欧洲议会于 2026 年 2 月 10 日通过关键投票，支持推出兼具线上与线下双重功能的数字欧元框架。
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-indigo-600 mt-1" />
                    <p className="text-sm text-gray-700"><strong>时间表：</strong>2026 年底法律框架通过 → 2027 年启动试点 → 2029 年正式发行</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-indigo-600 mt-1" />
                    <p className="text-sm text-gray-700"><strong>隐私设计：</strong>离线支付提供与现金同等的隐私，遵循"隐私优先"原则</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-4 h-4 text-indigo-600 mt-1" />
                    <p className="text-sm text-gray-700"><strong>成本：</strong>总开发成本 13 亿欧元，年运营费用 3.2 亿欧元</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-indigo-50 rounded border border-indigo-200">
                  <p className="text-sm text-indigo-900">
                    <strong>战略意义：</strong>数字欧元与 Wero 形成"公私双轨"格局，共同推动欧洲支付主权。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 3: Strategic Impact */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Target className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              三、EPI 战略意义分析
            </h2>
          </div>
          <div className="pl-14 space-y-6">
            
            {/* Impact on Europe */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
              <h3 className="font-bold text-base md:text-lg mb-3 text-blue-900">1. 对欧洲支付生态的影响</h3>
              
              <div className="mb-4">
                <p className="font-semibold mb-2 text-gray-800">现状问题：</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                  <li>欧洲支付市场高度碎片化："一国一工具"</li>
                  <li>荷兰：iDEAL、比利时：Payconiq、法国：Carte Bancaire、德国：Giropay</li>
                  <li>缺乏真正的跨境支付系统</li>
                  <li>高度依赖美国支付巨头</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-800">Wero 的解决方案：</p>
                <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                  <li>统一的泛欧数字钱包</li>
                  <li>基于账户对账户（A2A）支付</li>
                  <li>依托 SEPA 即时转账协议</li>
                  <li>10 秒内完成跨境转账</li>
                </ul>
              </div>
            </div>

            {/* Global Impact */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
              <h3 className="font-bold text-base md:text-lg mb-3 text-green-900">2. 对全球支付格局的潜在冲击</h3>
              
              <div className="mb-4">
                <p className="font-semibold mb-2 text-gray-800">对标对象：</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-300">Visa / Mastercard</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-300">PayPal</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-300">Apple Pay</span>
                  <span className="px-3 py-1 bg-white rounded-full text-sm border border-gray-300">Google Pay</span>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2 text-gray-800">竞争优势：</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="bg-white rounded p-3 border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-1">🏛️ 主权背书</p>
                    <p className="text-sm text-gray-700">欧洲银行联盟支持</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-1">💰 成本优势</p>
                    <p className="text-sm text-gray-700">跨境交易成本 1% vs 传统 3%-4%</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-1">⚡ 速度优势</p>
                    <p className="text-sm text-gray-700">10 秒即时转账</p>
                  </div>
                  <div className="bg-white rounded p-3 border border-gray-200">
                    <p className="text-sm font-semibold text-green-700 mb-1">🔒 隐私保护</p>
                    <p className="text-sm text-gray-700">符合 GDPR 标准</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded border border-amber-200">
                <p className="text-sm text-amber-900">
                  <AlertTriangle className="w-4 h-4 inline mr-1" />
                  <strong>潜在影响：</strong>可能削弱 Visa/Mastercard 在欧洲的市场份额，为其他地区提供支付自主化范例，推动全球支付多极化发展。
                </p>
              </div>
            </div>

            {/* Opportunities for Chinese Companies */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-5 border border-orange-200">
              <h3 className="font-bold text-base md:text-lg mb-3 text-orange-900">3. 对中国企业的机遇</h3>
              
              <div className="space-y-3">
                <div className="bg-white rounded p-4 border border-gray-200">
                  <p className="font-semibold mb-2 text-gray-800">🚀 出海企业</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>通过 Airwallex、PingPong 等平台接入 Wero</li>
                    <li>降低欧洲市场跨境支付成本</li>
                    <li>提升欧洲消费者支付体验</li>
                  </ul>
                </div>

                <div className="bg-white rounded p-4 border border-gray-200">
                  <p className="font-semibold mb-2 text-gray-800">💳 支付企业</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>学习 EPI 的合作模式（银行联盟）</li>
                    <li>探索类似的区域支付一体化方案</li>
                    <li>关注数字人民币国际化与 Wero 的潜在对接</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 4: Key Data */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-800 rounded-lg">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              四、关键数据汇总
            </h2>
          </div>
          <div className="pl-14">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left font-semibold border border-gray-300">指标</th>
                    <th className="px-4 py-3 text-left font-semibold border border-gray-300">数据</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border border-gray-300 font-medium">EPI 成员</td>
                    <td className="px-4 py-3 border border-gray-300">16 家欧洲银行和支付服务商</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-medium">Wero 用户数</td>
                    <td className="px-4 py-3 border border-gray-300">超 4,850 万（德、法、比）</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border border-gray-300 font-medium">累计交易规模</td>
                    <td className="px-4 py-3 border border-gray-300">超 75 亿欧元</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-medium">跨境支付速度</td>
                    <td className="px-4 py-3 border border-gray-300">10 秒内完成</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border border-gray-300 font-medium">跨境交易成本</td>
                    <td className="px-4 py-3 border border-gray-300">约 1%（传统工具 3%-4%）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 border border-gray-300 font-medium">2026 年扩展计划</td>
                    <td className="px-4 py-3 border border-gray-300">法国、卢森堡、荷兰上线电商支付</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 border border-gray-300 font-medium">目标覆盖人口</td>
                    <td className="px-4 py-3 border border-gray-300">超 3.8 亿（15 个欧盟国家）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 5: Future Outlook */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              五、未来展望
            </h2>
          </div>
          <div className="pl-14 space-y-4">
            
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="font-bold text-blue-900 mb-2">短期（2026年）</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                <li>Wero 在法国、卢森堡、荷兰上线电商支付</li>
                <li>荷兰 iDEAL 迁移至 Wero</li>
                <li>更多国际支付公司加入 EPI</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
              <p className="font-bold text-green-900 mb-2">中期（2027年）</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                <li>Wero 拓展至线下 POS 支付</li>
                <li>推出"先用后付"等增值服务</li>
                <li>与数字欧元项目形成互补</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
              <p className="font-bold text-purple-900 mb-2">长期（2029年及以后）</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                <li>成为欧洲主流支付方式之一</li>
                <li>可能与数字欧元深度融合</li>
                <li>推动欧洲支付主权真正实现</li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 6: Summary */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-800 rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              六、总结
            </h2>
          </div>
          <div className="pl-14">
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <p className="mb-4">
                EPI 及其 Wero 数字钱包代表了欧洲追求支付主权的最重要尝试。在地缘政治、金融主权、成本压力等多重因素驱动下，欧洲正在加速构建自主支付体系。
              </p>
              <div className="space-y-3 pt-4 border-t border-gray-700">
                <p className="text-sm md:text-base">
                  <strong className="text-yellow-400">关键看点：</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-300">
                  <li><strong>2026 年是商业化关键年</strong>：从个人转账向商业支付扩展</li>
                  <li><strong>国际合作伙伴的加入</strong>：Airwallex、Worldpay、PingPong 等</li>
                  <li><strong>与数字欧元的竞合关系</strong>：私营与公共部门双轨推进</li>
                  <li><strong>对 Visa/Mastercard 的潜在冲击</strong>：可能重塑欧洲支付格局</li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  对于关注支付生态的企业和机构来说，EPI 的进展值得持续跟踪，它可能成为全球支付多极化的重要推动力量。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="pt-6 border-t border-gray-200">
          <Link
            to="/payment-ecosystem"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回支付生态
          </Link>
        </div>

      </div>
    </main>
  );
}
