// 当前月新闻数据 - 仅包含本月(2026年7月)的新闻
// 历史新闻请参考 historicalNewsData.ts

import { historicalNewsData } from './historicalNewsData';

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


// 当月新闻（7月）
export const currentMonthNews: NewsItem[] = [
  {
    id: '178',
    title: '欧盟MiCA加密资产监管法案7月1日全面生效:约80%加密企业被迫退出,币安撤出欧盟市场',
    source: '新浪财经 / ESMA / CoinDesk',
    sourceUrl: 'https://finance.sina.com.cn/stock/usstock/summary/2026-06-30/doc-inifcrne1773014.shtml',
    summary: '欧盟《加密资产市场监管法案》(MiCA)18个月过渡期于2026年7月1日正式结束,未获得完整CASP牌照的加密资产服务企业需停止向欧盟用户提供服务。核心冲击:欧盟约1200家注册加密企业中仅约210家获得完整资质(淘汰率约80%);币安撤回希腊MiCA牌照申请,正式退出欧盟市场;Tether(USDT)从所有欧盟持牌交易所下架,USDC成为主流合规稳定币。合规流动性向Coinbase、Kraken、OKX等少数持牌头部平台集中。MiCA采用"通行证制度",持牌主体可覆盖全部27个成员国约4.5亿用户。此次监管落地标志着欧盟加密资产从"野蛮生长"进入"持牌经营"时代。',
    aiComment: {
      overallImpact: 'MiCA全面生效是欧盟在数字金融领域的历史性监管事件,其影响远超加密货币行业本身。首先,80%淘汰率表明欧盟选择了"质量优先于数量"的监管路径——通过高合规成本过滤掉不合规的中小交易所,将市场留给持牌头部机构。这种"银行业联盟式"的监管哲学,使加密资产市场从"去中心化理想"转向"中心化合规"轨道。其二,币安的退出是标志性事件——作为全球最大加密交易所,币安因合规能力不足被迫放弃欧盟市场,证明全球监管趋严背景下"合规能力"已成为交易所核心竞争力的决定性因素。其三,Tether(USDT)出局、USDC成为主流稳定币,将改变全球稳定币格局——USDT作为最大稳定币(市值超1000亿美元)在欧洲市场被边缘化,可能导致全球稳定币市场版图重组。其四,对传统金融的影响:MiCA的"通行证制度"使加密资产监管向传统金融看齐,机构投资者进入欧盟加密市场的合规确定性大幅提升,可能吸引传统金融机构(银行、资管)加速入场。对全球监管的溢出效应:英国、日本、新加坡、中国香港等均在观察MiCA的效果,若MiCA顺利执行,全球加密资产监管将加速向"许可制+通行证"模式靠拢。',
      huaweiImpact: 'MiCA全面生效对华为具有"合规参照+数字金融业务影响"双重意义。合规参照:MiCA的"通行证制度"(单一牌照覆盖27国)与GDPR的一站式机制(Lead DPA)设计理念相似,为华为在欧洲的数字服务合规提供了可借鉴的"全区域一致化"监管框架。华为若在欧盟推出基于区块链的服务(如数字身份、供应链溯源、数字人民币跨境支付),可参考MiCA的牌照路径规划,降低多国合规复杂度。数字金融业务影响:MiCA下USDT出局、USDC主导,意味着欧洲市场的合规稳定币基础设施将围绕USDC构建。华为支付的欧洲拓展策略应考虑与USDC及合规交易所的互操作性,同时密切关注欧洲央行数字欧元(2029年)的进展,评估"MiCA稳定币+数字欧元"双轨制对支付生态的重塑。对华为云的影响:MiCA要求加密资产服务商的技术基础设施具有高水平的安全和合规性,华为云在欧盟可推出"MiCA-ready"云服务方案——为加密交易所和金融服务商提供符合MiCA安全标准的云基础设施、数据本地化部署和实时合规监控方案,作为差异化云服务产品线。华为区块链服务:华为云区块链服务(BCS)若在欧盟拓展,需确保其技术和业务模式符合MiCA的资产托管、反洗钱和交易报告要求,提前完成合规认证和第三方审计。',
    },
    publishDate: '2026-07-01',
    score: 9,
    category: 'dma',
    tags: ['MiCA','加密资产','欧盟','监管','币安','Coinbase','USDT','USDC','CASP','退市','合规','稳定币','ESMA'],
  },
  {
    id: '179',
    title: '韩国KFTC指控谷歌Project Hug计划滥用安卓应用商店支配地位,涉案14万亿韩元',
    source: 'IT之家 / 路透社 / 新浪财经',
    sourceUrl: 'https://k.sina.com.cn/article_1826017320_6cd6d02802001n7ek.html',
    summary: '7月1日,韩国公平交易委员会(KFTC)正式指控谷歌滥用其在安卓应用商店市场的支配地位,涉嫌通过"Project Hug"(拥抱计划)向NCSoft、Netmarble等20余家游戏开发商提供云服务、广告和YouTube等扶持资金,但附加排他性条件:开发商在Google Play的条款优惠不得低于其他竞品应用商店,营收越高扶持额度越高,实质迫使开发商与谷歌达成独家合作。涉案交易规模达14.16万亿韩元(约623.46亿元人民币),涉及2019年7月至2026年3月期间。若最终认定违规,谷歌面临最高涉案收入6%的罚款(约8500亿韩元/5.46亿美元)。谷歌回应称已配合调查并将继续举证。',
    aiComment: {
      overallImpact: '韩国KFTC对谷歌的指控是继Epic诉谷歌案后,亚太地区针对"安卓应用商店垄断"的最强力执法行动。核心意义在于:Project Hug计划暴露了谷歌通过"软性排他"手段锁定游戏开发商的策略——不直接禁止多商店分发,而是通过梯度补贴机制将开发商"被动锁定"在Play Store生态,这是反垄断执法中对"隐性排他"行为的首次大规模定性。涉案金额14万亿韩元反映了游戏产业在Google Play上的营收规模。叠加日本MSCA、印度竞争委员会对谷歌的处罚,亚太市场正在形成继欧盟DMA之后全球第二强大的应用商店监管战线。',
      huaweiImpact: '韩国KFTC指控谷歌对华为具有"合规启示+竞争窗口"双重意义。合规启示:Project Hug案的"梯度补贴"实质排他定性,为华为AppGallery在全球市场的竞争规则制定提供了合规参照——华为在海外推广AppGallery时,应避免使用类似的"补贴换取排他"手段,而应采用"技术赋能+低佣金"的差异化竞争策略。竞争窗口:若KFTC裁定谷歌违规并责令停止Project Hug计划,韩国游戏开发商将获得分发自由度提升,华为AppGallery可利用这一窗口期主动接触NCSoft、Netmarble等韩国游戏大厂,以"低佣金+全球分发+鸿蒙生态"为卖点吸引其入驻。',
    },
    publishDate: '2026-07-01',
    score: 8,
    category: 'googleplay',
    tags: ['韩国','KFTC','谷歌','反垄断','Project Hug','应用商店','游戏','Play Store'],
  },
  {
    id: '180',
    title: '英国CMA启动公开咨询:拟强制苹果谷歌放开支付限制,要求开放NFC触碰支付',
    source: '新浪财经 / 路透社',
    sourceUrl: 'https://finance.sina.com.cn/stock/usstock/c/2026-07-01/doc-iniffqcq3265871.shtml',
    summary: '英国竞争与市场管理局(CMA)7月1日启动公开咨询,提议强制苹果和谷歌放开移动应用支付限制。拟议措施包括:允许开发者在应用内引导用户使用替代支付渠道;要求收取的任何费用"公平合理"且低于当前佣金标准,节省费用应让利消费者;考虑要求苹果向第三方开放iPhone NFC近场通信技术,打破Apple Pay在iOS触碰支付上的垄断。谷歌回应称新Play Store条款已部分满足要求;苹果称拟议要求将破坏安全防护。英国去年已认定苹果和谷歌在移动市场具有"战略市场地位"。',
    aiComment: {
      overallImpact: '英国CMA此次咨询是DMCC法案在移动支付领域的"首秀"。开放NFC要求直接瞄准Apple Pay的护城河,若落地将终结Apple Pay在iOS触碰支付上的独占地位。英国DMCC与欧盟DMA、日本MSCA形成全球三大应用商店监管格局——三者均要求开放支付和分发,但DMCC新增了"NFC开放"这一DMA尚未触及的领域。咨询窗口期预计持续至2026年Q4,CMA可能在2027年初发布最终干预令。',
      huaweiImpact: '若CMA要求苹果开放iPhone NFC,华为钱包(Huawei Pay)可借此进入iOS生态。华为可打造"跨设备支付一致性"品牌优势(手表+手机+平板均用华为钱包)。支付成本下降也将降低华为AppGallery在英国推广的支付渠道门槛。华为应主动对标CMA的"公平合理"费用标准,确保AppGallery在英国具有竞争力。',
    },
    publishDate: '2026-07-01',
    score: 9,
    category: 'appstore',
    tags: ['英国','CMA','DMCC','反垄断','苹果','谷歌','支付限制','NFC','Apple Pay'],
  },
  {
    id: '181',
    title: '美国最高法院同意受理苹果与Epic Games反垄断案:将审查27%外部支付佣金的合法性',
    source: '新浪财经 / Benzinga / 路透社',
    sourceUrl: 'https://finance.sina.com.cn/stock/usstock/summary/2026-07-01/doc-iniffqcq3253047.shtml',
    summary: '7月1日,美国最高法院同意受理苹果针对Epic Games反垄断纠纷相关民事藐视法庭裁决的上诉,案件口头辩论预计10月新开庭期进行。核心争议:2021年法院强制令要求苹果允许开发者引导用户使用外部支付,苹果合规后对通过外部链接完成的购买收取27%费用(仅比标准30%低3%),2025年地区法院认定此举构成"藐视法庭"。Epic称27%费用非法反竞争;苹果主张禁令效力应限于Epic个案。审理结果将从根本重塑全球应用商店佣金规则。',
    aiComment: {
      overallImpact: '最高法院受理苹果-Epic案是2026年全球科技监管最具里程碑意义的司法事件之一。若维持藐视认定,苹果可能被迫将27%降至接近零,终结"苹果税"的收费基础。全球监管机构(英国CMA、欧盟DMA执法、日本MSCA、韩国KFTC、印度CCI)均在等待这一裁定。预计2027年初裁决,期间苹果继续暂停收费。此案决定未来十年全球应用商店佣金定价权格局。',
      huaweiImpact: '苹果27%外部支付佣金的争议核心是"平台对非平台生态内的交易是否有权收费"。若Epic胜诉,将确立"平台不得对自身分发渠道外的交易课税"原则,华为可公开承诺"不对外部支付收取额外费用"。华为应预研"零佣金+技术服务费"定价模型,确保在Epic胜诉场景下快速切换,抢占开发者友好的舆论高地。HarmonyOS的分布式特性使华为平台边界更宽,需建立清晰的服务边界-收费对应规则。',
    },
    publishDate: '2026-07-01',
    score: 10,
    category: 'appstore',
    tags: ['苹果','Epic Games','最高法院','App Store','反垄断','佣金','外部支付','诉讼'],
  },
  {
    id: '182',
    title: '欧盟最高法院驳回谷歌上诉,维持41亿欧元安卓反垄断罚款创历史纪录',
    source: '新浪财经 / 路透社 / 凤凰网',
    sourceUrl: 'https://finance.sina.cn/2026-07-02/detail-inifmfcy4159917.d.html',
    summary: '7月2日,欧盟最高法院欧洲法院驳回谷歌及Alphabet全部上诉,维持因安卓系统滥用市场支配地位而处以的41亿欧元(约317.6亿元人民币)反垄断罚款。2018年欧盟委员会原处罚43.4亿欧元,2022年欧盟普通法院下调至41亿欧元。法院认定谷歌通过排他性协议强制安卓厂商预装谷歌搜索和Chrome浏览器,限制市场竞争。判决为终审裁决,谷歌累计在欧盟已缴纳近110亿欧元反垄断罚金。谷歌回应称早在2018年首轮裁决后已调整协议合规运营。',
    aiComment: {
      overallImpact: '本案是欧盟反垄断执法史上最高额之一,核心信号明确:即便在DMA事前监管框架已经运行的背景下,传统反垄断事后追责手段对科技巨头仍具强威慑力。41亿欧元终审落定意味着谷歌长达8年的安卓反垄断法律战彻底终结。叠加欧盟正推进对谷歌DMA违规(自搜索偏袒)近10亿欧元的罚款,以及云服务/AI领域的DMA扩围审查,谷歌在欧盟的合规压力正处于历史峰值。此判决可能激励更多司法管辖区(如印度、日本、巴西)跟进类似反垄断执法。',
      huaweiImpact: '谷歌安卓垄断案最终落定对华为具有合规参照+生态竞争双重意义。合规参照:判决的核心禁止排他性协议锁定开发者/设备商可作为华为在全球推广HarmonyOS和AppGallery时合规设计的红线——华为应确保与设备商、开发者的合作协议不存在事实排他条款。生态竞争:安卓系统因反垄断裁决被迫调整开放性(侧载、第三方商店、支付),可能降低安卓生态对开发者的锁定效应,使华为AppGallery在海外获得更公平的竞争环境。华为可关注安卓OEM厂商在禁令解除后扩大与多应用商店合作的机会。',
    },
    publishDate: '2026-07-02',
    score: 9,
    category: 'dma',
    tags: ['欧盟','欧洲法院','谷歌','安卓','反垄断','41亿欧元','终审','罚款'],
  },
  {
    id: '183',
    title: '俄反垄断局警告苹果歧视俄搜索引擎,要求预装Yandex等本土服务',
    source: '新华社 / 新华网',
    sourceUrl: 'https://www.news.cn/world/20260702/f96b19937fbb4257ba09901c17b0cdcb/c.html',
    summary: '俄罗斯联邦反垄断局(FAS)7月1日向苹果发出正式警告,指控苹果在俄销售的iOS设备仅预装外国搜索引擎,用户需手动更改设置才能使用俄罗斯搜索引擎(Yandex等),涉嫌违反俄竞争法律。FAS要求苹果在7月15日前纠正歧视性做法,在俄设备上预装俄本土搜索引擎,否则将启动调查。若认定违法,苹果面临最高40亿卢布(约5100万美元)罚款。此举是俄罗斯继要求苹果开放应用侧载后对iOS生态的最新监管施压。',
    aiComment: {
      overallImpact: '俄FAS对苹果搜索歧视的警告是全球科技平台搜索引擎默认设置主权化趋势的延续——美国(DMA相关)、印度、土耳其、俄罗斯等均要求平台在默认搜索引擎设置上给予本地服务平等竞争机会。此举虽罚款金额不大(5100万美元对苹果九牛一毛),但其象征意义在于:非欧盟市场也在系统化挑战iOS封闭生态。若FAS要求扩大至预装第三方应用商店或开放NFC(类似英国CMA提案),对苹果全球生态的碎片化压力将进一步加大。',
      huaweiImpact: '俄监管对iOS生态的压力为华为AppGallery在俄罗斯市场的拓展创造机遇。Yandex等俄本土服务商在iOS受限后可能更愿与HarmonyOS/华为生态合作。华为可推出俄罗斯本土应用预装方案,帮助俄用户开箱即用Yandex搜索引擎及本地服务,作为AppGallery俄语市场的差异化卖点。此案的搜索公平性逻辑也可为华为在欧盟的合规策略提供参考——确保华为搜索/浏览器等默认服务设置不构成自优待。',
    },
    publishDate: '2026-07-01',
    score: 6,
    category: 'appstore',
    tags: ['俄罗斯','FAS','苹果','反垄断','搜索引擎','Yandex','预装','iOS'],
  },
];

// 完整新闻数据 = 历史新闻 + 当月新闻
export const newsData: NewsItem[] = [
  ...historicalNewsData,
  ...currentMonthNews
];

// 按日期降序排序(最新的在前)
// 按日期降序排序(最新的在前)
export const sortedNewsData = [...newsData].sort((a, b) => {
  return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
});

// 支付生态相关新闻(佣金、支付、第三方支付等)
// 支付生态相关新闻(支付渠道、支付公司、银行、卡组织、钱包、数字货币)
export const paymentEcosystemNews = sortedNewsData.filter((item) => {
  // 支付生态核心关键词:支付渠道、支付公司、银行、卡组织、钱包、数字货币
  const paymentCoreKeywords = [
    'Visa', 'Mastercard', '万事达', 'PayPal', 'Stripe', 'Curve',
    'EPI', 'Wero', '数字欧元', '数字货币', 'CBDC',
    'Airwallex', 'PingPong', 'Worldpay',
    '支付主权', '支付倡议', '欧洲支付',
    '数字钱包', '跨境支付', '即时支付',
    '银行', '卡组织', '加密货币'
  ];

  // 排除关键词:应用商店生态相关新闻
  const excludeKeywords = [
    'Epic Games', 'Epic Games Store', 'Fortnite',
    'App Store', 'Google Play', '应用商店',
    '第三方商店', '侧载', '诉讼', '上诉',
    '佣金', 'IAP', '计费', '市场报告', '应用内购买'
  ];

  const text = (item.title + item.summary + item.tags.join(' ')).toLowerCase();

  // 如果包含排除关键词,则不算作支付生态新闻
  if (excludeKeywords.some(kw => text.includes(kw.toLowerCase()))) {
    return false;
  }

  // 只有包含支付生态核心关键词才算作支付生态新闻
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

