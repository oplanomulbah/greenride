"use client"

import React from "react"
import { motion } from "motion/react"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/types/types"
import { TrendingDown, Zap, Gauge, Leaf, ShieldCheck } from "lucide-react"

interface MetricItem {
  icon: React.ComponentType<{ className?: string }>
  stat: string
  label: Record<Language, string>
  subtext: Record<Language, string>
}

const metrics: MetricItem[] = [
  {
    icon: TrendingDown,
    stat: "70%",
    label: {
      en: "Running Cost Reduction",
      sw: "Kupunguza Gharama ya Mafuta",
      zh: "运营能耗成本降幅",
    },
    subtext: {
      en: "vs Conventional Petrol/Diesel",
      sw: "ikilinganishwa na petroli au diseli",
      zh: "对比传统燃油日常支出",
    },
  },
  {
    icon: Zap,
    stat: "120kW+",
    label: {
      en: "DC Fast Charging",
      sw: "Chaji ya Haraka ya DC",
      zh: "大功率直流极速快充",
    },
    subtext: {
      en: "Rapid Turnaround at Depots",
      sw: "uchaji wa haraka vituoni",
      zh: "场站短停留快速补能",
    },
  },
  {
    icon: Gauge,
    stat: "550+ km",
    label: {
      en: "Extended Electric Range",
      sw: "Masafa Marefu ya Safari",
      zh: "旗舰纯电高续航里程",
    },
    subtext: {
      en: "Intercity & Urban Reliability",
      sw: "safari za mijini na kanda",
      zh: "畅行城市与城际干道",
    },
  },
  {
    icon: Leaf,
    stat: "0 g/km",
    label: {
      en: "Direct Tailpipe Emissions",
      sw: "Uzalishaji wa Moshi Sifuri",
      zh: "尾气全生命周期零排",
    },
    subtext: {
      en: "100% Clean Transport Impact",
      sw: "usafiri safi unaolinda mazingira",
      zh: "助力绿色低碳环保出行",
    },
  },
  {
    icon: ShieldCheck,
    stat: "Turnkey",
    label: {
      en: "NTSA & Full Compliance",
      sw: "Usajili Kamili wa NTSA",
      zh: "NTSA 牌照合规一站代办",
    },
    subtext: {
      en: "Road Legal & Insured Support",
      sw: "kufuata sheria za barabara",
      zh: "合法合规安心上路运营",
    },
  },
]

export default function ImpactMetrics() {
  const { currentLang } = useLanguage()
  const lang: Language = currentLang || "en"

  return (
    <section className="relative border-y border-emerald-950/20 bg-slate-900 py-12 text-white sm:py-16">
      {/* Background glow and subtle grid */}
      <div className="absolute inset-0 bg-radial from-emerald-600/10 via-transparent to-transparent pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col items-center text-center p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-white/5"
              >
                <div className="mb-3.5 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-950/60 text-emerald-400 shadow-inner shadow-emerald-400/20 transition-transform duration-300 group-hover:scale-110 group-hover:border-emerald-400 group-hover:text-emerald-300">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="font-display text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {item.stat}
                </div>

                <div className="mt-1 text-xs font-bold text-emerald-300 sm:text-sm">
                  {item.label[lang] || item.label.en}
                </div>

                <div className="mt-0.5 text-[11px] font-normal text-gray-400 sm:text-xs">
                  {item.subtext[lang] || item.subtext.en}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

