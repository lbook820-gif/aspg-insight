import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, FileText, Target, Globe, Users, Shield, AlertTriangle, TrendingUp, MessageSquare, Smartphone, Watch, Building2 } from 'lucide-react';

export default function DMAResearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Header */}
      <div className="py-8 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
            <Link to="/" className="hover:text-black">首页</Link>
            <span>/</span>
            <Link to="/app-ecosystem" className="hover:text-black">应用生态</Link>
            <span>/</span>
            <span className="text-black">DMA审查专栏</span>
          </div>
          <h1 className="font-bold mb-2 text-xl md:text-2xl">
            DMA 首次审查报告深度分析
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            欧盟《数字市场法》实施两年成效评估 | 更新时间：2026年5月8日
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Section 1: Overview */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Building2 className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              一、审查报告核心结论
            </h2>
          </div>
          <div className="pl-14 space-y-4">
            <div className="bg-green-50 rounded-lg p-5 border border-green-200">
              <div className="flex items-start gap-3">
                <Scale className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2 text-green-900">DMA 仍然适合目标，不需要重大修订</p>
                  <p className="text-gray-700 leading-relaxed">
                    欧盟委员会于<strong>2026年4月28日</strong>发布《数字市场法》（DMA）实施两年的<strong>首次正式审查报告</strong>。报告明确指出：<strong>不提议修改DMA</strong>。因为在两年多的执行期内，DMA已经取得了看得见的积极成效，但现在谈立法修正"为时过早"——很多义务的全面影响还需要更长时间才能显现。
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-5 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <p className="font-bold text-amber-900">信号解读：监管不会退步，反而加强执行</p>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>欧盟明确表示：<strong>不加新法，但加强执行力度</strong></span></li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span><strong>AI和云计算</strong>被列为下一个重点监管战场</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 mt-1">•</span>
                  <span>社交网络互操作性要求<strong>暂不扩展</strong>，继续监测</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Achievements */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Target className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              二、具体成就：三大维度
            </h2>
          </div>
          <div className="pl-14 space-y-6">

            {/* End Users */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-200">
              <h3 className="flex items-center gap-2 font-bold text-lg mb-3 text-blue-900">
                <Users className="w-5 h-5" /> 1. 对用户（End Users）的改变
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span><strong>浏览器和搜索引擎选择</strong> — 通过选择屏幕（Choice Screens），用户可自由设置默认浏览器和搜索引擎</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span><strong>数据控制权</strong> — 守门人需先征求用户同意才能跨服务合并/使用个人数据，阻止未经授权的用户画像</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span><strong>数据可携带性</strong> — 用户可将Facebook/Instagram的帖子和点赞、Google搜索历史、Amazon购买历史导出到其他平台</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span><strong>eSIM可迁移</strong> — iPhone和Android之间可转移eSIM；Google和Apple还在推进iOS↔Android整体切换</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">✅</span>
                  <span><strong>酒店和租车价格自由</strong> — Booking.com等平台不再限制商家在自家平台提供更优价格</span>
                </li>
              </ul>
            </div>

            {/* SMEs */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-5 border border-green-200">
              <h3 className="flex items-center gap-2 font-bold text-lg mb-3 text-green-900">
                <Globe className="w-5 h-5" /> 2. 对中小企业（SMEs）的改变
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span><strong>替代浏览器和搜索引擎增长</strong> — Aloha、Ecosia、Qwant、DuckDuckGo等在法德等关键市场用户显著增长</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span><strong>第三方应用商店上线</strong> — Aptoide、Epic Games Store、AltStore已登陆此前封闭的iOS系统</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span><strong>开发者可直接从网站分发应用</strong> — iOS和iPadOS支持开发者用自己的网站分发应用</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span><strong>约40家第三方开发者已成功对接守门人API</strong>，开发跨平台数据管理工具</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span><strong>消息互操作性催生新服务</strong> — BirdyChat等成为首批对接WhatsApp的服务</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">📈</span>
                  <span><strong>应用开发者请求与iOS系统互操作</strong> — 第三方应用可实现此前仅Apple自带应用支持的功能（如关机发短信）</span>
                </li>
              </ul>
            </div>

            {/* Fairness */}
            <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 rounded-lg p-5 border border-purple-200">
              <h3 className="flex items-center gap-2 font-bold text-lg mb-3 text-purple-900">
                <Shield className="w-5 h-5" /> 3. 对市场公平性（Fairness）的改变
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔓</span>
                  <span><strong>广告透明化</strong> — 广告主和发布商首次获得定价、费用、报酬和效果数据的访问权限，打破过去广告领域的"黑箱"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 mt-1">🔓</span>
                  <span><strong>AI+云计算成为监管新战场</strong> — 欧盟已启动对云计算服务的市场调查（判断Microsoft Azure和AWS是否应被指定为守门人）</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Section 3: Future Directions */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-800 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              三、未来方向：三大关键信号
            </h2>
          </div>
          <div className="pl-14 space-y-6">

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-5 border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-3 text-blue-900">
                🚩 信号一：不加新法，但加执行
              </h3>
              <p className="text-gray-700 mb-3">DMA不会修订，但欧盟会更严格地执行：</p>
              <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-700">
                <li>继续监管对话和合规指引</li>
                <li>提高透明度，简化合规流程</li>
                <li>与欧洲数据保护委员会（EDPB）联合发布DMA与GDPR的交叉指引</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-5 border-l-4 border-purple-500">
              <h3 className="font-bold text-lg mb-3 text-purple-900">
                🚩 信号二：AI和云计算是下一个重点
              </h3>
              <p className="text-gray-700 mb-3">报告中AI相关议题涉及五大核心主题：</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <div className="bg-white rounded p-3 border border-purple-200">
                  <p className="text-sm font-semibold text-purple-800 mb-1">🤝 互操作性</p>
                  <p className="text-sm text-gray-600">AI服务对操作系统的平等访问权</p>
                </div>
                <div className="bg-white rounded p-3 border border-purple-200">
                  <p className="text-sm font-semibold text-purple-800 mb-1">🔗 自我优待</p>
                  <p className="text-sm text-gray-600">守门人对自家AI服务的偏袒</p>
                </div>
                <div className="bg-white rounded p-3 border border-purple-200">
                  <p className="text-sm font-semibold text-purple-800 mb-1">📊 数据访问</p>
                  <p className="text-sm text-gray-600">AI训练和推理所需的关键数据输入</p>
                </div>
                <div className="bg-white rounded p-3 border border-purple-200">
                  <p className="text-sm font-semibold text-purple-800 mb-1">☁️ 云计算依赖</p>
                  <p className="text-sm text-gray-600">AI模型训练和部署对云服务的依赖</p>
                </div>
              </div>
              <p className="text-sm text-gray-700">欧盟已启动对<strong>Microsoft Azure</strong>和<strong>AWS</strong>是否应被指定为守门人的市场调查，同时对Alphabet（Google）启动了关于AI互操作性和搜索数据共享的两项规范程序。</p>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-lg p-5 border-l-4 border-amber-500">
              <h3 className="font-bold text-lg mb-3 text-amber-900">
                🚩 信号三：社交网络互操作性暂不扩展
              </h3>
              <p className="text-gray-700">
                尽管DMA Art.7（消息互操作）取得了成效，但欧盟认为<strong>现阶段将互操作性要求扩展到社交网络为时过早</strong>，会继续监测。
              </p>
            </div>

          </div>
        </section>

        {/* Section 4: Impact on Huawei */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Target className="w-5 h-5 text-orange-600" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              四、对华为的战略影响
            </h2>
          </div>
          <div className="pl-14 space-y-6">

            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-5 border border-orange-200">
              <h3 className="font-bold text-lg mb-3 text-orange-900">战略窗口：DMA为华为提供四大机遇</h3>
              
              <div className="space-y-4">
                <div className="bg-white rounded p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-5 h-5 text-orange-600" />
                    <p className="font-bold text-orange-800">第三方应用商店</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    DMA确认第三方商店已在iOS系统上线，华为AppGallery可借DMA框架在欧盟市场争取合法上架iOS设备的权利。
                  </p>
                </div>

                <div className="bg-white rounded p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Watch className="w-5 h-5 text-orange-600" />
                    <p className="font-bold text-orange-800">可穿戴设备互操作</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    DMA推动可穿戴设备（耳机、智能手表）获得与iOS/Android的增强互操作，华为手表/手环在欧盟市场可抓住这一机遇。
                  </p>
                </div>

                <div className="bg-white rounded p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-5 h-5 text-orange-600" />
                    <p className="font-bold text-orange-800">消息互操作</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    BirdyChat已对接WhatsApp的模式证明可行，华为畅连可参考此路径实现与主流通讯应用的互联互通。
                  </p>
                </div>

                <div className="bg-white rounded p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-orange-600" />
                    <p className="font-bold text-orange-800">合规前瞻与广告透明</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    华为HMS广告服务可研究DMA的广告透明要求，在欧盟市场建立合规的广告生态。虽然华为目前未被指定为守门人，但随着鸿蒙生态扩大，未来可能面临DMA监管，应提前建立合规体系。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 5: Summary */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-800 rounded-lg">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-bold text-lg md:text-xl">
              五、总结
            </h2>
          </div>
          <div className="pl-14">
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <p className="text-xl mb-4 font-bold leading-relaxed">
                "DMA 2岁了，欧盟说<strong className="text-green-400">'继续保持，不加修正'</strong>——这不是监管的松动，而是监管的巩固。"
              </p>
              <div className="space-y-3 pt-4 border-t border-gray-700">
                <p className="text-sm md:text-base">
                  <strong className="text-green-400">对全球科技行业意味着：</strong>
                </p>
                <ul className="space-y-2 text-sm md:text-base text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">1️⃣</span>
                    <span><strong>开放生态不可逆</strong> — 侧载、第三方支付、消息互操作已从"可能"变为"必须"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">2️⃣</span>
                    <span><strong>AI和云是下一波主战场</strong> — 监管正在从应用商店延伸到基础设施层</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400">3️⃣</span>
                    <span><strong>合规不是一次性的</strong> — 欧盟会持续加码执行力度，企业需要长期投入</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  报告来源：欧盟委员会DMA首次审查报告（2026年4月28日发布）
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Back Button */}
        <div className="pt-6 border-t border-gray-200">
          <Link
            to="/app-ecosystem"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            返回应用生态
          </Link>
        </div>

      </div>
    </main>
  );
}
