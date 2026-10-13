import type { Language } from "@/types/types"

export type NewsCategory = "vehicles" | "charging" | "fleet"

export interface NewsArticle {
  id: number
  slug: string
  category: NewsCategory
  imageUrl: string
  title: Record<Language, string>
  excerpt: Record<Language, string>
  content: Record<Language, string>
}

export const newsData: NewsArticle[] = [
  {
    id: 1,
    slug: "choosing-an-electric-vehicle",
    category: "vehicles",
    imageUrl: "/contact_nbanner.jpeg",
    title: {
      en: "Choosing an electric vehicle for your needs",
      sw: "Kuchagua gari la umeme linalokufaa",
      zh: "如何选择适合自己的电动汽车",
    },
    excerpt: {
      en: "Start with the journeys you make, the people or goods you carry, and how you will charge. Compare options for personal, boda boda, tuk-tuk and business use.",
      sw: "Anza kwa kuangalia safari zako, watu au mizigo unayobeba na mahali pa kuchaji. Linganisha chaguo kwa matumizi binafsi, boda boda, tuk-tuk na biashara.",
      zh: "从日常行程、载客或载货需求以及充电方式入手，比较个人出行、电动摩托车、三轮车及商业用途的选择。",
    },
    content: {
      en: "Choosing an electric vehicle starts with understanding the work it needs to do. Consider typical trip distances, passengers or cargo, daily operating hours and where the vehicle can be charged.\n\nGreenRide supplies new electric vehicles, tuk-tuks and light commercial vehicles, and also offers second-hand EV valuation and trade-in support. The right choice depends on your use case and budget, so compare options with an experienced adviser before buying.",
      sw: "Kuchagua gari la umeme huanza kwa kuelewa kazi litakayofanya. Fikiria umbali wa kawaida wa safari, abiria au mizigo, saa za matumizi ya kila siku na mahali pa kuchaji gari.\n\nGreenRide hutoa magari mapya ya umeme, tuk-tuk na magari mepesi ya biashara, pamoja na tathmini na usaidizi wa kubadilishana magari yaliyotumika. Chaguo linalofaa hutegemea matumizi na bajeti yako; linganisha chaguo kwa ushauri wa mtaalamu kabla ya kununua.",
      zh: "选择电动汽车，首先要明确车辆承担的任务。考虑常见行程距离、乘客或货物、每日运营时间，以及车辆可以在哪里充电。\n\nGreenRide 提供全新电动汽车、电动三轮车和轻型商用车，也提供二手电动汽车估值和置换支持。合适的选择取决于具体用途和预算，购车前可咨询专业人员并比较方案。",
    },
  },
  {
    id: 2,
    slug: "planning-ev-charging",
    category: "charging",
    imageUrl: "/products/pocket-1.jpeg",
    title: {
      en: "Planning charging for a home, business or public site",
      sw: "Kupanga uchaji nyumbani, kwenye biashara au eneo la umma",
      zh: "为住宅、企业或公共场所规划充电",
    },
    excerpt: {
      en: "AC charging can suit places where vehicles park for several hours; DC fast charging can support sites that need quicker turnaround. Begin with dwell time and vehicle needs.",
      sw: "Chaji ya AC inaweza kufaa maeneo ambako magari husimama kwa saa kadhaa; chaji ya haraka ya DC inaweza kufaa maeneo yanayohitaji magari yarudi barabarani haraka.",
      zh: "交流充电适合车辆停放数小时的场所；直流快充可服务于需要快速周转的地点。规划应从停留时间和车辆需求开始。",
    },
    content: {
      en: "Charging plans should match how long vehicles stay parked and how quickly they need to return to the road. AC chargers, typically around 7 kW, can suit homes, offices and apartment buildings where vehicles remain for several hours.\n\nDC fast chargers, from around 20 kW to 120 kW and above, can suit malls, service stations, highway rest stops and fleet depots. GreenRide supports site assessment, equipment selection, installation and station operation. Actual design depends on the site and vehicles.",
      sw: "Mpango wa kuchaji unapaswa kuzingatia muda ambao magari yamesimama na kasi ya kuyarejesha barabarani. Chaja za AC, kwa kawaida karibu 7 kW, zinaweza kufaa nyumba, ofisi na majengo ya makazi ambako magari hukaa kwa saa kadhaa.\n\nChaja za haraka za DC, kuanzia takriban 20 kW hadi 120 kW au zaidi, zinaweza kufaa maduka, vituo vya huduma, mapumziko ya barabara kuu na maeneo ya magari ya biashara. GreenRide husaidia katika tathmini ya eneo, uchaguzi wa vifaa, usakinishaji na uendeshaji wa kituo. Muundo halisi hutegemea eneo na magari.",
      zh: "充电方案应与车辆停放时长及再次投入运营的速度要求相匹配。交流充电桩通常约为 7 kW，适用于车辆停放数小时的住宅、办公室和公寓。\n\n直流快充功率约从 20 kW 到 120 kW 及以上，可用于商场、服务站、高速公路休息区和车队停车场。GreenRide 提供场地评估、设备选型、安装和充电站运营支持。实际设计需根据场地和车辆确定。",
    },
  },
  {
    id: 3,
    slug: "electric-fleet-transition",
    category: "fleet",
    imageUrl: "/contact_nbanner.jpeg",
    title: {
      en: "Planning a fleet transition to electric",
      sw: "Kupanga mpito wa magari ya biashara kwenda umeme",
      zh: "规划车队电动化转型",
    },
    excerpt: {
      en: "A phased transition starts with the right vehicle mix, a practical rollout plan and a clear view of total cost of ownership. Leasing may help manage upfront costs.",
      sw: "Mpito huanza kwa kuchagua mchanganyiko wa magari unaofaa, kupanga utekelezaji na kuelewa gharama za jumla. Ukodishaji unaweza kusaidia kudhibiti gharama za awali.",
      zh: "分阶段转型应从合适的车型组合、可行的部署计划和总拥有成本分析开始。租赁可帮助管理前期资金需求。",
    },
    content: {
      en: "Fleet electrification works best when it is planned around daily routes and operating needs. Review which vehicles are used, where they return between trips, and what charging access is available.\n\nGreenRide offers fleet sales consultation to help organisations consider vehicle selection, phased rollout and total cost of ownership. Flexible leasing options are also available for customers who prefer to avoid the full upfront cost of ownership.",
      sw: "Ubadilishaji wa magari ya biashara kwenda umeme hufaulu zaidi unapopangwa kulingana na safari na shughuli za kila siku. Kagua magari yanayotumika, mahali yanaporudi kati ya safari na upatikanaji wa chaji.\n\nGreenRide hutoa ushauri wa mauzo ya magari ya biashara ili kusaidia mashirika kuzingatia uchaguzi wa magari, mpito wa hatua kwa hatua na gharama ya jumla ya umiliki. Pia kuna chaguo za ukodishaji unaonyumbulika kwa wateja wanaopendelea kuepuka gharama yote ya awali.",
      zh: "车队电动化应围绕日常路线和运营需求进行规划。评估现有车辆用途、车辆在行程间返回的位置，以及充电条件。\n\nGreenRide 提供车队销售咨询，协助机构考虑车辆选型、分阶段部署和总拥有成本。对于希望避免一次性承担全部购车成本的客户，也提供灵活租赁方案。",
    },
  },
]