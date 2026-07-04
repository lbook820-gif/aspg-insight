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
  {
    id: '184',
    title: 'Google Play新计费选择计划6月30日生效:服务费+账单费分离,年收入低于100万美元仅收10%',
    source: 'IT之家 / 新浪科技',
    sourceUrl: 'https://www.ithome.com/0/968/290.htm',
    summary: '谷歌6月24日发布公告,6月30日起Google Play在EEA、英国和美国正式启用新收费体系。将原来打包的30%费用拆分为"服务费"和"账单费":年收入前100万美元部分统一收取10%服务费,超出部分按20%-25%收取;使用谷歌支付系统另加5%账单费,使用第三方支付或网页则免账单费。同时推出"游戏升级计划"和"应用体验计划",参与开发者可享10%-20%更低费率。2026年底扩展至澳大利亚、日本和韩国,2027年9月覆盖全球。',
    aiComment: {
      overallImpact: '这是谷歌与Epic和解协议的核心落地,标志着安卓应用商店从"30%统一抽成"时代进入"服务费+账单费"透明拆分的全新范式。中小开发者合规总成本可降至10%-15%,大幅提升独立开发者盈利空间。但分层收费也意味着谷歌保留了对高频使用的官方支付体系的额外收费能力,并非完全开放免费。此改革将加剧与苹果的费率竞争压力,全球监管机构(中国、印度等)可能参考此模式推动本土化苹果税调整。',
      huaweiImpact: '谷歌新费率体系的透明化分层为华为AppGallery的费率策略提供了参照基准——可设计更具竞争力的阶梯式费率吸引海外开发者入驻。同时开放第三方支付+账单费分离的设计,验证了支付链路松绑后平台仍能通过基础服务收费获利,对华为构建HarmonyOS海外支付基础设施具有借鉴意义。',
    },
    publishDate: '2026-06-25',
    score: 8,
    category: 'googleplay',
    tags: ['谷歌','Google Play','佣金改革','第三方支付','服务费','分层定价','6月30日','Epic和解'],
  },
  {
    id: '185',
    title: '欧盟委员会初步认定AWS及Azure应被列为DMA守门人,云计算监管扩围',
    source: '新浪财经 / 钛媒体',
    sourceUrl: 'https://k.sina.com.cn/article_5182171545_134e1a99902002g5ey.html',
    summary: '欧盟委员会6月25日宣布初步认定亚马逊AWS和微软Azure应被列为DMA"守门人",尽管两者均未达DMA规定的量化门槛。委员会指出两家公司在欧盟云计算市场长期占据稳固主导地位,AI工具及合作伙伴生态已成为企业云采购决定性因素。若最终认定成立,两家公司须在六个月内确保云服务符合DMA义务。亚马逊和微软有权行使抗辩权,最终裁定期为2026年底。',
    aiComment: {
      overallImpact: '这是DMA监管范围首次实质突破量化门槛限制,以"市场主导地位+锁定效应"为由扩大守门人认定,具有重大先例意义。若落地,AWS和Azure须开放互操作接口、降低数据迁出费、禁止自我优待,将重塑欧洲云计算竞争格局——降低客户锁定效应、利好中小云厂商和云迁移服务商,但也推高合规成本(行业估算每家超10亿欧元)。同时欧盟还在评估将DMA扩展至AI领域,显示其"事前监管"网络正系统化扩张至科技全产业链。',
      huaweiImpact: 'AWS/Azure被纳入DMA守门人对华为云海外拓展构成间接利好:欧盟强制开放数据互操作+降低迁移门槛后,欧洲企业多云/混合云策略更加可行,华为云作为第三方云供应商有望在欧洲获得更多竞标机会,尤其在AI训练场景下客户寻求降低对单一美国云平台的依赖。华为云应提前评估DMA合规框架,确保在欧洲的云服务条款符合互操作性和数据可移植性要求。',
    },
    publishDate: '2026-06-25',
    score: 9,
    category: 'dma',
    tags: ['欧盟','DMA','AWS','Azure','亚马逊','微软','云计算','守门人','反垄断'],
  },
  {
    id: '186',
    title: '数字欧元ECON委员会关键投票通过,2027年试点2029年发行路线图确认',
    source: '新浪财经 / 移动支付网',
    sourceUrl: 'https://finance.sina.com.cn/stock/usstock/summary/2026-06-24/doc-inienawh6405406.shtml',
    summary: '欧洲议会经济与货币委员会(ECON)6月23日以43票赞成、14票反对、1票弃权通过数字欧元监管规则草案,推进法律框架搭建。后续7月欧洲议会全体会议审议,若2026年底前完成立法,2027年中启动试点,2029年正式发行。数字欧元定位为央行数字货币,支持在线+离线支付,零基本手续费,个人持有限额,不计利息。欧洲央行预计开发总成本约13亿欧元,年度运营成本约3.2亿欧元。',
    aiComment: {
      overallImpact: 'ECON投票通过标志着数字欧元从"政策构想"进入"可预见执行阶段",是欧洲金融主权建设的里程碑事件。当前Visa和Mastercard处理欧元区超60%的卡类支付,数字欧元以公共资金支撑的免费支付选项将直接制约卡组织定价能力,长期可能重塑欧洲零售支付格局。但商业银行对存款外流的担忧仍是最大阻力,且项目时间表(2029年)距消费端落地尚有数年。EPI Wero钱包已积累超4000万用户,与数字欧元形成"市场+央行"双轨推进的支付主权战略。',
      huaweiImpact: '数字欧元推进对华为/鸿蒙生态的长期机遇在于:欧洲支付基础设施从美资卡组织向本土化迁移,为华为钱包(Pay)在欧元区的接入和合作创造新窗口。华为可关注数字欧元技术标准制定进程,在鸿蒙系统的NFC离线支付、SE安全元件等底层技术与数字欧元离线支付方案对接。同时EPI Wero在德国/比利时的电商支付扩展,也是华为AppGallery接入本地支付的可选路径。',
    },
    publishDate: '2026-06-23',
    score: 8,
    category: 'dma',
    tags: ['数字欧元','ECON','欧洲议会','CBDC','支付主权','Visa','万事达','央行数字货币'],
  },
  {
    id: '187',
    title: '意大利AGCM依据DMA对苹果iCloud启动调查:指控系统级权限歧视第三方云服务',
    source: '钛媒体',
    sourceUrl: 'https://www.tmtpost.com/agent/ai-article?id=18360',
    summary: '意大利反垄断监管机构AGCM于6月16日依据DMA对苹果发起正式调查,指控苹果违反第6条第7款互操作性义务——在iOS/iPadOS中为iCloud开放完整系统级备份功能,将Google Drive、Dropbox等第三方云服务排除在外。这是全球首个国家监管机构依据DMA针对苹果云服务发起的调查。若裁决成立,苹果须向第三方云服务开放iOS系统级备份通道,消费级云存储竞争格局将被改写。',
    aiComment: {
      overallImpact: 'AGCM此举开创了国家监管机构依据DMA针对苹果云服务的执法先河,是对欧盟DMA执法体系的补充:此前DMA主要由欧盟委员会集中执法,意大利主动行使国家执法权表明成员国层面的分散执法正在激活。iCloud系统特权的核心争议与苹果"围墙花园"战略直接相关——通过操作系统层级的默认权限锁定用户。若调查结论扩大至NFC、蓝牙配对等其他iOS硬件/软件权限,其影响将远超云存储本身,波及整个iOS生态开放度。',
      huaweiImpact: '意大利iCloud案为华为推动鸿蒙生态的开放策略提供了差异化参照:华为可在海外市场强调HarmonyOS对第三方云服务的公平接入承诺(如华为云+第三方云双轨服务),作为与iOS封闭策略的直接对比卖点。同时此案暴露的"系统级权限歧视"红线,也是华为在欧盟合规审查中需提前规避的风险——确保华为手机/平板系统层级的默认服务不构成对第三方云服务的排除或优待。',
    },
    publishDate: '2026-06-16',
    score: 7,
    category: 'appstore',
    tags: ['意大利','AGCM','苹果','iCloud','DMA','互操作性','云服务','反垄断'],
  },
  {
    id: '188',
    title: 'AI版Siri入欧陷僵局:DMA合规冲突导致欧盟用户将延迟获得新Siri功能',
    source: '新浪财经',
    sourceUrl: 'https://finance.sina.com.cn/stock/usstock/summary/2026-07-01/doc-inifhvww6306680.shtml',
    summary: '苹果与欧盟数字市场专员6月30日举行线上会议商讨AI版Siri落地欧盟事宜,双方称会议"具有建设性"但未取得突破性进展。此前苹果宣布iOS 27发布时欧盟地区将无法搭载AI版Siri,理由是DMA对AI功能的互操作性要求与苹果隐私安全理念冲突,欧盟已拒绝苹果的豁免申请。谷歌部分Gemini功能也因类似摩擦推迟向欧盟开放。DMA在AI热潮前起草,其"一刀切"互操作要求在AI时代面临挑战。',
    aiComment: {
      overallImpact: 'AI版Siri入欧僵局是DMA与AI技术发展节奏错配的典型案例。DMA起草(2020-2022年)时AI尚未成为核心议题,其互操作性条款在AI场景下可能导致:第三方AI助手可要求访问同等的系统级权限和数据,对科技巨头构成安全隐忧。此事件可能推动欧盟在2026年启动的DMA审查中考虑AI专项修订——否则欧洲可能面临AI落地持续延迟,"监管高地"与"创新洼地"的矛盾加剧。对全球监管政策制定者而言,此案是"事前监管如何适应快速技术迭代"的重要观察样本。',
      huaweiImpact: '苹果因DMA推迟AI版Siri入欧,为华为在欧洲推广AI助手的差异化策略打开了窗口期。华为小艺(AI Assistant)在鸿蒙生态中已具备系统级AI能力,若能在欧盟率先满足DMA合规要求(开放互操作性+隐私保护),可抢占欧洲消费者对"合规AI助手"的心智。此案也提示华为在海外推广AI功能时须提前与当地监管对话,避免因合规摩擦导致产品或功能延迟上市。',
    },
    publishDate: '2026-07-01',
    score: 7,
    category: 'dma',
    tags: ['苹果','Siri','AI','DMA','欧盟','互操作性','隐私','Gemini'],
  },
  {
    id: '189',
    title: '欧盟DMA要求谷歌7月27日前向第三方AI助手开放Android系统级权限',
    source: '安兔兔 / Ars Technica',
    sourceUrl: 'http://antutu.com/doc/136698.htm',
    summary: '欧盟委员会依据DMA向谷歌施压,要求Android系统向第三方AI助手开放同等系统级权限,最终裁定期为7月27日。目前Gemini是唯一能在Android原生系统层面响应用户快捷键、查看屏幕上下文、访问本地数据生成主动建议的AI助手。欧盟要求第三方AI工具应能通过热词或实体按键在系统层面被唤起,访问与Gemini相同的屏幕上下文和本地数据,同时免费提供运行本地模型的硬件API。谷歌反对称此举剥夺设备制造商自主权,推高成本,破坏隐私安全。',
    aiComment: {
      overallImpact: '此案是DMA互操作性条款在AI领域的延伸升级——从搜索选择界面、替代支付等传统场景扩展到AI助手的系统级权限。若7月27日裁决要求谷歌开放,将与苹果AI版Siri入欧僵局(见ID 188)形成双向压力:DMA同时在Android和iOS两条战线上推进AI互操作性,其执法一致性将受考验。对行业更深远的影响在于:AI助手的系统级权限竞争将从"模型能力"之争转向"平台准入权限"之争,可能改变全球AI助手市场格局。',
      huaweiImpact: '若欧盟裁定谷歌开放Android AI权限,将对华为海外AI战略产生双向影响:利方面,HarmonyOS可在欧洲定位为"天然支持多AI助手"的开放平台,吸引第三方AI服务入驻;弊方面,华为若在海外推出内置AI助手的设备,同样须面对DMA互操作要求——需提前设计AI助手的系统级权限开放方案,避免像苹果一样陷入被动合规僵局。',
    },
    publishDate: '2026-04-27',
    score: 8,
    category: 'dma',
    tags: ['欧盟','DMA','谷歌','Android','AI助手','Gemini','互操作性','系统权限'],
  },
  {
    id: '190',
    title: '48位中国iOS开发者联名向市场监管总局举报苹果:要求开放第三方分发与支付,对齐巴西欧盟费率',
    source: '21世纪经济报道 / 钛媒体 / 同花顺',
    sourceUrl: 'https://stock.10jqka.com.cn/usstock/20260703/c677916293.shtml',
    summary: '48位中国iOS中小及个人开发者联名向国家市场监管总局提交举报信,指苹果滥用中国市场垄断地位,未兑现3月"全球最低费率"承诺。举报信核心诉求:要求苹果向中国开发者开放第三方应用商店分发、应用内第三方支付及外链支付渠道,将佣金对齐巴西/日本/欧盟最低费率,并建立"自动对齐监督机制"。对比巴西6月19日新政(标准IAP 26%+第三方商店分发5%),中国仅落实IAP单项降费(25%/12%),第三方支付与分发渠道均未开放,综合费率显著高于海外。',
    aiComment: {
      overallImpact: '48位开发者联名举报是中国开发者首次以集体行动挑战苹果税,标志着中国应用商店反垄断从"消费者诉讼"(2021年金某案)进入"开发者行政举报"新阶段。举报将苹果的"全球最低费率"承诺置于法律检验之下:对比巴西、欧盟、日本的开放路径,中国是苹果四大核心市场中唯一仅开放IAP降费而未开放第三方分发和支付的市场。若市场监管总局立案,可能开启中国版DMA立法进程,或直接推动苹果在华开放生态。此案与最高法院Epic案、英国CMA咨询形成全球共振。',
      huaweiImpact: '48位开发者举报苹果直接利好华为AppGallery在中国市场的竞争地位。华为可借势向开发者宣传"低佣金+开放分发"策略,作为iOS封闭生态的对比。若举报推动苹果在华开放侧载和第三方支付,将彻底改变中国应用分发格局——华为应用市场可成为iOS第三方分发的候选平台之一,实现鸿蒙与iOS生态的跨平台开发者互通。华为支付也为iOS第三方支付提供了合规基础设施。',
    },
    publishDate: '2026-07-03',
    score: 9,
    category: 'appstore',
    tags: ['苹果','中国','开发者','举报','市场监管总局','反垄断','苹果税','第三方支付','第三方商店','联名举报'],
  },
  {
    id: '191',
    title: '苹果Apple Maps搜索广告功能正式上线:竞价模式首发美加,App Ads广告版图扩张',
    source: '钛媒体 / DoNews / 9to5Mac',
    sourceUrl: 'https://www.donews.com/news/detail/8/6554966.html',
    summary: '苹果Apple Maps搜索广告功能随iOS 26.5正式版在2026年夏季上线,首发覆盖美国和加拿大市场。广告采用关键词竞价模式,初期开放两个入口:搜索结果顶部及"Suggested Places"建议地点列表,均以浅蓝色背景+明显"Ad"标识区分自然结果。苹果强调隐私保护——位置数据与广告互动均设备端处理,不关联Apple ID、不共享第三方。商家通过新版Apple Business平台竞价管理广告。Apple Maps在美国拥有约1.5亿月活跃用户,此次是苹果2012年上线地图以来首次涉足搜索广告。',
    aiComment: {
      overallImpact: 'Apple Maps引入广告标志着苹果服务收入战略从"App Store单一引擎"转向"搜索+地图+应用商店"多引擎驱动。2026年Q1苹果服务收入首破300亿美元,地图广告开辟了新的增长极——对标Google Maps年广告收入超50亿美元的规模,Apple Maps广告年化潜力可达10-20亿美元。但广告化也可能影响用户体验,需关注消费者反馈。对Google而言,Apple Maps广告意味着搜索广告市场迎来强劲对手,可能加剧两大生态在本地商业搜索的竞争。',
      huaweiImpact: 'Apple Maps广告化对华为海外战略有双重启示。竞争层面:华为Petal Maps在海外若跟进广告模式,可借鉴Apple Maps的"隐私优先+竞价模式"设计,避免Google Maps式的过度商业化,作为差异化卖点。机会层面:Apple Maps数据不与Apple ID关联且不上传云端,为开发者提供"去中心化"本地广告投放选项——华为可在欧洲市场推出类似"本地商家自助广告"服务,结合鸿蒙生态多端联动。隐私保护方面,华为应确保Petal Maps广告方案在欧洲符合GDPR和DMA要求。',
    },
    publishDate: '2026-07-04',
    score: 7,
    category: 'developer',
    tags: ['苹果','Apple Maps','广告','搜索广告','iOS 26.5','美加','竞价','隐私','Apple Ads','服务收入'],
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

