import type { NewsItem } from '../newsData';

export const news_2025_12: NewsItem[] = [
  {
    id: '17',
    title: '日本《移动软件竞争法》生效,苹果宣布iOS调整方案',
    source: 'Apple Newsroom / Xsolla',
    sourceUrl: 'https://www.apple.com/newsroom/2025/12/apple-announces-changes-to-ios-in-japan/',
    summary: '日本《移动软件竞争法》(MSCA)于2025年12月18日正式生效。苹果宣布调整iOS系统以符合法规要求,包括允许第三方应用商店和外部支付方式。苹果同时引入Notarization审核流程和年龄验证机制,以降低新法规带来的隐私和安全风险。',
    aiComment: {
      overallImpact: '日本成为继欧盟之后第二个强制苹果开放应用商店的重大市场。苹果的新条款包括10-21%佣金、5%支付处理费、5%核心技术费和15%商店服务佣金。虽然形式上开放,但经济负担仍可能阻碍第三方商店发展。',
      huaweiImpact: '日本市场的开放为华为等第三方应用商店提供了新的机会。华为可考虑在日本推出AppGallery服务,但需解决本地化合规和生态系统建设问题。',
    },
    publishDate: '2025-12-18',
    score: 7,
    category: 'dma',
    tags: ['日本', 'MSCA', '苹果', '第三方商店'],
  },
  {
    id: '74',
    title: 'X Money携手Visa推出即时支付服务,社交媒体向金融平台转型',
    source: '齐鲁晚报网',
    sourceUrl: 'https://www.qlwb.com.cn/videoDetail/25609842.html',
    summary: 'X平台(原Twitter)宣布与国际支付卡巨头Visa旗下跨境支付平台Visa Direct达成合作,推出由Visa支持的数字钱包X Money Account的点对点即时支付服务。该产品计划于2025年稍晚推出,标志着X平台从社交媒体向综合性金融平台的战略转型迈出关键一步。这是马斯克将X打造为"超级应用"战略的重要举措。',
    aiComment: {
      overallImpact: 'X与Visa的合作标志着社交媒体金融化的新里程碑。马斯克将X打造为"超级应用"战略路径日益清晰:XChat(通讯)→X Money(支付)→未来可能的电商、借贷等金融服务。选择Visa Direct作为基础设施意味着X从第一天起就具备跨境实时支付能力。对Visa而言,与X的合作是在数字钱包和社交金融领域的重要布局。社交媒体+金融的组合可能改变用户对支付入口的认知。',
      huaweiImpact: 'X从社交到金融的跨界整合对华为具有战略参考价值。X平台将通讯(XChat)、社交(X)、支付(X Money)三位一体整合,验证了"超级应用"战略在西方市场的可行性。华为可参考这一模式,将畅连、花瓣地图、华为钱包等核心应用在鸿蒙生态中实现更深度的场景联动。华为钱包需嵌入到鸿蒙生态的高频场景中,让用户在"无感"中完成支付。安全性应优先于"最快"的支付体验。',
    },
    publishDate: '2025-12-06',
    score: 7,
    category: 'thirdparty',
    tags: ['X', 'Visa', 'X Money', '即时支付', '社交媒体', '超级应用', '数字钱包'],
  }
];
