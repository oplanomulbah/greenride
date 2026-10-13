"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/types/types"
import {
  CarFront,
  Truck,
  Bike,
  PlugZap,
  ArrowRight,
  Gauge,
  BatteryCharging,
  Zap,
  CheckCircle2,
} from "lucide-react"

type FleetCategory = "all" | "executive" | "commercial" | "micro" | "charging"

interface FleetVehicle {
  id: string
  category: FleetCategory
  tag: Record<Language, string>
  title: Record<Language, string>
  subtitle: Record<Language, string>
  image: string
  specs: {
    icon: React.ComponentType<{ className?: string }>
    label: Record<Language, string>
    value: string
  }[]
  highlights: Record<Language, string>[]
  primaryLink: string
}

const fleetItems: FleetVehicle[] = [
  {
    id: "executive-sedan",
    category: "executive",
    tag: {
      en: "Executive Passenger",
      sw: "Gari la Kifahari",
      zh: "高端商务轿车",
    },
    title: {
      en: "Flagship Electric Saloon",
      sw: "Sedan ya Kisasa ya Umeme",
      zh: "旗舰豪华智能纯电轿车",
    },
    subtitle: {
      en: "Whisper-quiet premium luxury for corporate executives and upscale private travel.",
      sw: "Anasa tulivu ya hali ya juu kwa viongozi na safari za kibinafsi.",
      zh: "为商务出行和高管接送提供静谧舒适体验与充沛动力。",
    },
    image: "/products/product-hero.jpg",
    specs: [
      {
        icon: Gauge,
        label: { en: "Range", sw: "Masafa", zh: "综合续航" },
        value: "550+ km",
      },
      {
        icon: BatteryCharging,
        label: { en: "DC Fast Charge", sw: "Chaji ya Haraka", zh: "快充补能" },
        value: "28 mins",
      },
      {
        icon: Zap,
        label: { en: "0-100 km/h", sw: "Mwendokasi", zh: "百公里加速" },
        value: "4.2s",
      },
    ],
    highlights: [
      {
        en: "Advanced intelligent cockpit with driver-assist telematics",
        sw: "Mfumo wa kisasa wa udereva na ufuatiliaji wa kompyuta",
        zh: "配备高阶智能辅助驾驶与全景互联座舱",
      },
      {
        en: "Ultra-low noise vibration harshness (NVH) cabin acoustic design",
        sw: "Chumba tulivu bila kelele wala mtikisiko",
        zh: "超静音NVH图书馆级静谧车舱设计",
      },
      {
        en: "NTSA registration assistance and 8-year high-voltage battery coverage",
        sw: "Usaidizi wa usajili na dhamana ya betri ya miaka 8",
        zh: "NTSA 上牌全程协助与长达8年动力电池保障",
      },
    ],
    primaryLink: "/products?category=vehicles",
  },
  {
    id: "commercial-van",
    category: "commercial",
    tag: {
      en: "Urban Logistics Fleet",
      sw: "Magari ya Biashara na Mizigo",
      zh: "城市城配物流车",
    },
    title: {
      en: "High-Payload Electric Cargo Van",
      sw: "Gari Kubwa la Umeme la Mizigo",
      zh: "大容量纯电封闭式物流厢货",
    },
    subtitle: {
      en: "Drastically reduce delivery operating costs by up to 70% with high uptime and rapid fleet charging.",
      sw: "Punguza gharama za usambazaji hadi 70% ukiwa na uwezo mkubwa wa kubeba mizigo.",
      zh: "全方位降低市内及周边配送能耗成本达70%，大装载容积保障高出勤率。",
    },
    image: "/scenario-gird/icj5.jpg",
    specs: [
      {
        icon: Gauge,
        label: { en: "Payload", sw: "Mizigo", zh: "额定载重" },
        value: "1,450 kg",
      },
      {
        icon: BatteryCharging,
        label: { en: "Urban Range", sw: "Masafa ya Kazi", zh: "城市工况续航" },
        value: "320 km",
      },
      {
        icon: Zap,
        label: { en: "Cost Savings", sw: "Uokoaji wa Fedha", zh: "降本比例" },
        value: "70% Less",
      },
    ],
    highlights: [
      {
        en: "Spacious cargo volume optimized for standard pallet loading",
        sw: "Nafasi pana ya kubeba mizigo ya ukubwa wa kawaida",
        zh: "宽敞货箱平整规整，支持标准托盘顺畅装卸",
      },
      {
        en: "Depot overnight AC charging or rapid 45-minute DC top-up",
        sw: "Uchaji wa usiku au wa haraka wa dakika 45 wa DC",
        zh: "支持夜间慢充平谷电价与45分钟日间快充补电",
      },
      {
        en: "Telematics fleet tracker integration for real-time battery and route telemetry",
        sw: "Ufuatiliaji wa gari na betri moja kwa moja",
        zh: "预装车队智控终端，实时掌握路线与电池健康状态",
      },
    ],
    primaryLink: "/products?category=fleet",
  },
  {
    id: "aero-sports-saloon",
    category: "executive",
    tag: {
      en: "Smart Ride-Hailing & Corporate",
      sw: "Teksi za Umeme na Makampuni",
      zh: "智能网约出行旗舰",
    },
    title: {
      en: "Aerodynamic Long-Range Electric Saloon",
      sw: "Gari la Umeme la Mwendo Kasi",
      zh: "超低风阻长续航智能纯电轿跑",
    },
    subtitle: {
      en: "Modern aerodynamic styling with rapid DC supercharge capability built for high-mileage mobility.",
      sw: "Muundo safi wa aerodynamic na uwezo wa kuchaji haraka kwa safari ndefu za kila siku.",
      zh: "风阻系数仅 0.23 Cd，兼顾高颜值流线与高强度日均运营里程耐用性。",
    },
    image: "/scenario-gird/icj6.jpeg",
    specs: [
      {
        icon: Gauge,
        label: { en: "Drag Coeff", sw: "Upepo", zh: "风阻系数" },
        value: "0.23 Cd",
      },
      {
        icon: BatteryCharging,
        label: { en: "Voltage", sw: "Volti", zh: "高压架构" },
        value: "800V High",
      },
      {
        icon: Zap,
        label: { en: "DC Input", sw: "Kasi ya Chaji", zh: "峰值功率" },
        value: "150 kW",
      },
    ],
    highlights: [
      {
        en: "High-mileage battery chemistry engineered for commercial duty cycles",
        sw: "Betri imara inayovumilia safari nyingi za kila siku",
        zh: "高循环寿命长效电芯，满足全天候高频次营运需求",
      },
      {
        en: "Smart thermal conditioning ensuring stable battery performance under African climate",
        sw: "Mfumo wa kudhibiti joto la betri katika hali ya hewa ya joto",
        zh: "智能双向液冷温控，完美适应东非热带气温环境",
      },
      {
        en: "Flexible lease-to-own arrangements for fleets and transport partners",
        sw: "Chaguo la kukodisha na baadaye kumiliki kwa biashara",
        zh: "提供极具竞争力的以租代购与车队金融解决方案",
      },
    ],
    primaryLink: "/products?category=vehicles",
  },
  {
    id: "dc-supercharger-station",
    category: "charging",
    tag: {
      en: "High-Power Infrastructure",
      sw: "Miundombinu ya Kuchaji",
      zh: "大功率直流充电机",
    },
    title: {
      en: "Multi-Bay 120kW+ DC Fast Charging Hub",
      sw: "Kituo cha Kuchaji cha Haraka cha 120kW+",
      zh: "120kW+ 双枪直流高功率快充桩",
    },
    subtitle: {
      en: "Turnkey commercial charging infrastructure tailored for malls, highways, depots, and public hubs.",
      sw: "Vituo kamili vya kuchaji vya kibiashara kwa ajili ya maeneo ya umma na makampuni.",
      zh: "为商超广场、公路干线、物流园区打造的交钥匙级公共快充基础设施。",
    },
    image: "/scenario-gird/icj4.jpg",
    specs: [
      {
        icon: Gauge,
        label: { en: "Power Output", sw: "Nguvu ya Umeme", zh: "额定功率" },
        value: "120kW - 240kW",
      },
      {
        icon: BatteryCharging,
        label: { en: "Dual Connector", sw: "Bunduki Mbili", zh: "双枪配置" },
        value: "CCS2 / GBT",
      },
      {
        icon: Zap,
        label: { en: "Turnaround", sw: "Muda wa Kuchaji", zh: "平均充电" },
        value: "20-30 mins",
      },
    ],
    highlights: [
      {
        en: "Simultaneous dual-vehicle fast charging with dynamic load balancing",
        sw: "Kuchaji magari mawili kwa pamoja kwa usalama",
        zh: "支持两车动态分流并发快充，智能匹配需求功率",
      },
      {
        en: "Cloud-connected smart payment, RFID card, and remote station monitoring",
        sw: "Malipo ya kidijitali na ufuatiliaji wa mbali wa kituo",
        zh: "支持手机扫码支付、RFID刷卡与云端远程运维调度",
      },
      {
        en: "Weatherproof IP54 enclosure built for rigorous outdoor environments",
        sw: "Muundo imara unaostahimili mvua na jua kali nje",
        zh: "IP54高防护等级，防水防尘防雷，无惧严苛户外气候",
      },
    ],
    primaryLink: "/products?category=charging",
  },
  {
    id: "home-workplace-wallbox",
    category: "charging",
    tag: {
      en: "Destination & Workplace",
      sw: "Kuchaji Nyumbani na Kazini",
      zh: "目的地与家用交流充电桩",
    },
    title: {
      en: "Smart 7kW - 22kW AC Commercial Wallbox",
      sw: "Chaja ya Ukutani ya 7kW - 22kW AC",
      zh: "7kW - 22kW 智能交流壁挂式充电桩",
    },
    subtitle: {
      en: "Elegant, cost-effective overnight charging for residential properties, corporate offices, and hotels.",
      sw: "Uchaji salama na nafuu wa usiku kwa makazi, ofisi na hoteli.",
      zh: "适合住宅公寓、办公园区、酒店车位停放场景的经济型充电设备。",
    },
    image: "/scenario-gird/icj1.jpg",
    specs: [
      {
        icon: Gauge,
        label: { en: "AC Power", sw: "Nguvu ya AC", zh: "额定输出" },
        value: "7kW / 22kW",
      },
      {
        icon: BatteryCharging,
        label: { en: "Mounting", sw: "Ufungaji", zh: "安装方式" },
        value: "Wall / Pedestal",
      },
      {
        icon: Zap,
        label: { en: "Control", sw: "Usimamizi", zh: "智能交互" },
        value: "App & RFID",
      },
    ],
    highlights: [
      {
        en: "Scheduled charging during low off-peak electricity tariff hours",
        sw: "Panga kuchaji nyakati za umeme wa bei nafuu usiku",
        zh: "支持预约谷电充电，大幅降低每度电用车费用",
      },
      {
        en: "Compact minimalist aesthetic with integrated cable holster and LED status ring",
        sw: "Muundo safi na mdogo usiochukua nafasi kubwa",
        zh: "极简小巧机身，带枪线收纳与环形呼吸灯状态提示",
      },
      {
        en: "Comprehensive electrical surge, leakage, and temperature protection built-in",
        sw: "Kinga kamili ya umeme dhidi ya shoti na joto kali",
        zh: "内置过流、漏电、防雷及过温多重电气安全保护",
      },
    ],
    primaryLink: "/products?category=charging",
  },
]

export default function FeaturedFleet() {
  const { currentLang } = useLanguage()
  const lang: Language = currentLang || "en"
  const [activeTab, setActiveTab] = useState<FleetCategory>("all")

  const filteredItems =
    activeTab === "all"
      ? fleetItems
      : fleetItems.filter((item) => item.category === activeTab)

  const tabs: { id: FleetCategory; label: Record<Language, string>; icon: React.ComponentType<{ className?: string }> }[] = [
    {
      id: "all",
      label: { en: "All Solutions", sw: "Yote", zh: "全部方案" },
      icon: PlugZap,
    },
    {
      id: "executive",
      label: { en: "Executive EVs", sw: "Magari ya Kifahari", zh: "高端轿车" },
      icon: CarFront,
    },
    {
      id: "commercial",
      label: { en: "Logistics & Vans", sw: "Magari ya Mizigo", zh: "商用物流" },
      icon: Truck,
    },
    {
      id: "charging",
      label: { en: "Charging Hardware", sw: "Vifaa vya Kuchaji", zh: "充电桩设备" },
      icon: PlugZap,
    },
  ]

  return (
    <section className="bg-white py-20 text-gray-900 sm:py-24" id="featured-fleet-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span>
              {lang === "en"
                ? "Vehicle & Infrastructure Portfolio"
                : lang === "sw"
                  ? "Orodha ya Magari na Vifaa"
                  : "严选车型与充电装备产品矩阵"}
            </span>
          </div>

          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {lang === "en"
              ? "Professional Electric Vehicles & Systems"
              : lang === "sw"
                ? "Magari ya Umeme ya Kitaalamu na Mifumo ya Kuchaji"
                : "全场景专业纯电车辆与智能充电设备"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            {lang === "en"
              ? "From executive passenger saloons and high-capacity delivery vans to public DC fast charging hubs across Kenya."
              : lang === "sw"
                ? "Kuanzia magari ya kifahari na magari ya mizigo hadi vituo vya haraka vya kuchaji vya DC kote Kenya."
                : "覆盖商务出行、绿色城配、公共交通与高功率充电场站的全链条电动化产品。"}
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-emerald-600" />
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-900/20"
                    : "border border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-emerald-700"}`} />
                <span>{tab.label[lang] || tab.label.en}</span>
              </button>
            )
          })}
        </div>

        {/* Grid of Vehicles & Hardware */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title[lang] || item.title.en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-md bg-emerald-600/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
                      {item.tag[lang] || item.tag.en}
                    </span>
                  </div>

                  {/* Specs Bar Over Image Bottom */}
                  <div className="absolute right-3 bottom-3 left-3 grid grid-cols-3 gap-2">
                    {item.specs.map((spec, sIdx) => {
                      const SpecIcon = spec.icon
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/60 p-2 backdrop-blur-md text-white"
                        >
                          <SpecIcon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                          <div className="min-w-0">
                            <div className="truncate text-xs font-bold leading-tight">
                              {spec.value}
                            </div>
                            <div className="truncate text-[10px] text-gray-300">
                              {spec.label[lang] || spec.label.en}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <h3 className="font-display text-xl font-bold text-gray-950 transition-colors group-hover:text-emerald-700 sm:text-2xl">
                      {item.title[lang] || item.title.en}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {item.subtitle[lang] || item.subtitle.en}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="mt-4 space-y-2 border-t border-gray-100 pt-4">
                      {item.highlights.map((hl, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2 text-xs text-gray-700 sm:text-sm">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{hl[lang] || hl.en}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100">
                    <Link
                      href={item.primaryLink}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-700 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-colors hover:bg-emerald-800"
                    >
                      <span>
                        {lang === "en" ? "View Specifications" : lang === "sw" ? "Angalia Maelezo" : "查看配置详情"}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>

                    <Link
                      href="/contact"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 hover:text-emerald-800"
                    >
                      <span>
                        {lang === "en" ? "Request Pricing" : lang === "sw" ? "Omba Bei" : "获取车型报价"}
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

