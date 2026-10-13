"use client"

import React from "react"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/types/types"
import { MapPin, ArrowRight, Building2, Wrench, BatteryCharging } from "lucide-react"

interface CaseStory {
  id: string
  title: Record<Language, string>
  category: Record<Language, string>
  location: Record<Language, string>
  summary: Record<Language, string>
  image: string
  icon: React.ComponentType<{ className?: string }>
  stats: {
    label: Record<Language, string>
    value: string
  }
}

const stories: CaseStory[] = [
  {
    id: "station-commissioning",
    title: {
      en: "Commercial DC Charging Station Commissioning",
      sw: "Uzinduzi wa Kituo cha Kuchaji cha DC",
      zh: "商用大功率直流充电机现场落成调试",
    },
    category: {
      en: "Infrastructure Deployment",
      sw: "Ujenzi wa Vituo",
      zh: "充电场站建设交付",
    },
    location: {
      en: "Nairobi, Kenya",
      sw: "Nairobi, Kenya",
      zh: "肯尼亚内罗毕",
    },
    summary: {
      en: "Complete technical installation, electrical safety validation, and operational handover of dual-gun DC fast chargers supporting commercial fleet operations.",
      sw: "Ufungaji kamili wa kiufundi, ukaguzi wa usalama wa umeme, na makabidhiano ya chaja za haraka za DC kwa ajili ya magari ya biashara.",
      zh: "技术工程团队完成双枪直流快充机整体验收、带电联调测试与运营商运营人员现场交接培训。",
    },
    image: "/story-1.jpeg",
    icon: BatteryCharging,
    stats: {
      label: { en: "Dual Output Power", sw: "Nguvu ya Chaji", zh: "快充输出功率" },
      value: "Dual Gun DC",
    },
  },
  {
    id: "dealer-service-integration",
    title: {
      en: "Dealership & Service Center EV Integration",
      sw: "Muungano wa Wauzaji wa Magari na Vituo vya Huduma",
      zh: "品牌经销商与授权维修中心充电配套",
    },
    category: {
      en: "Automotive Partnership",
      sw: "Ushirikiano wa Magari",
      zh: "汽车产业协同合作",
    },
    location: {
      en: "Regional Corridor, East Africa",
      sw: "Eneo la Afrika Mashariki",
      zh: "东非区域汽车枢纽",
    },
    summary: {
      en: "Partnering with major vehicle dealerships and workshops to integrate EV charging bays, diagnostic equipment, and certified technical training.",
      sw: "Kushirikiana na wauzaji wakuu wa magari kusakinisha maeneo ya kuchaji na kutoa mafunzo ya kiufundi ya magari ya umeme.",
      zh: "联合大型汽车经销商展厅及综合维保车间，布设专用充电车位与原厂检测诊断仪，赋能传统汽修网络转型。",
    },
    image: "/story-2.jpeg",
    icon: Building2,
    stats: {
      label: { en: "Service Readiness", sw: "Uwezo wa Huduma", zh: "售后维保能力" },
      value: "Certified Techs",
    },
  },
  {
    id: "regional-fleet-hub",
    title: {
      en: "Transit & Regional E-Mobility Hub",
      sw: "Kituo cha Magari ya Umeme ya Abiria",
      zh: "区域客运枢纽与新能源充电站",
    },
    category: {
      en: "Public Transport",
      sw: "Usafiri wa Umma",
      zh: "公共交通与城际补能",
    },
    location: {
      en: "Transit Route, Kenya",
      sw: "Njia ya Usafiri, Kenya",
      zh: "肯尼亚干线客运节点",
    },
    summary: {
      en: "Providing reliable public charging infrastructure for electric passenger saloons and taxis serving commuter routes and eco-tourism corridors.",
      sw: "Kutoa miundombinu ya kuaminika ya kuchaji kwa ajili ya teksi na magari ya abiria yanayofanya kazi katika njia za umma.",
      zh: "为往返客运线路、纯电出租车及绿色旅游廊道提供全天候高可靠充电保障，让清洁出行无惧里程焦虑。",
    },
    image: "/story-3.jpeg",
    icon: Wrench,
    stats: {
      label: { en: "Public Access", sw: "Matumizi ya Umma", zh: "全天候开放" },
      value: "24/7 Charging",
    },
  },
]

export default function RealImpactStories() {
  const { currentLang } = useLanguage()
  const lang: Language = currentLang || "en"

  return (
    <section className="bg-white py-20 text-gray-900 sm:py-24" id="real-impact-stories">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>
              {lang === "en"
                ? "Real-World Deployments"
                : lang === "sw"
                  ? "Utekelezaji Halisi Barabarani"
                  : "实景现场与落地案例"}
            </span>
          </div>

          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {lang === "en"
              ? "Driving Electric Mobility on the Ground"
              : lang === "sw"
                ? "Tunaendesha Uhamaji wa Umeme Halisi Kenya"
                : "扎根东非大地，赋能清洁交通转型"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            {lang === "en"
              ? "A glimpse into our real charging installations, fleet partnerships, and technical handovers empowering Kenya's electric transition."
              : lang === "sw"
                ? "Picha halisi za vituo vyetu vya kuchaji, ushirikiano wa magari, na makabidhiano ya kiufundi kote Kenya."
                : "实地见证我们在肯尼亚充电站建设、经销商协同及干线车队服务现场的真实足迹。"}
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-emerald-600" />
        </div>

        {/* 3 Story Cards */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xs transition-all duration-300 hover:border-emerald-300 hover:shadow-xl"
              >
                {/* Photo Container */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={story.image}
                    alt={story.title[lang] || story.title.en}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Location badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 rounded-md bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-md">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      <span>{story.location[lang] || story.location.en}</span>
                    </span>
                  </div>

                  {/* Bottom Stat Chip */}
                  <div className="absolute right-3 bottom-3 left-3 flex items-center justify-between rounded-lg bg-black/60 p-2 backdrop-blur-md text-white">
                    <span className="text-[11px] text-gray-300">
                      {story.stats.label[lang] || story.stats.label.en}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {story.stats.value}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
                      <Icon className="h-4 w-4" />
                      <span>{story.category[lang] || story.category.en}</span>
                    </div>

                    <h3 className="font-display mt-2.5 text-lg font-bold text-gray-950 transition-colors group-hover:text-emerald-700">
                      {story.title[lang] || story.title.en}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-gray-600">
                      {story.summary[lang] || story.summary.en}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800"
                    >
                      <span>
                        {lang === "en" ? "Partner with us" : lang === "sw" ? "Fanya kazi nasi" : "洽谈业务合作"}
                      </span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

