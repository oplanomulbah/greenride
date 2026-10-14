"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/types/types";
import {
  CarFront,
  ShieldCheck,
  CreditCard,
  Zap,
  Wrench,
  LineChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface PillarItem {
  icon: React.ComponentType<{ className?: string }>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  benefit: Record<Language, string>;
}

const pillars: PillarItem[] = [
  {
    icon: CarFront,
    title: {
      en: "Multi-Brand EV Sourcing & Sales",
      sw: "Uuzaji wa Magari ya Umeme",
      zh: "多品牌纯电整车直采与严选",
    },
    description: {
      en: "Wholesale and retail supply of brand-new passenger EVs, commercial delivery vans, and certified pre-owned EVs with transparent battery health checks.",
      sw: "Ugavi wa jumla na rejareja wa magari mapya na yaliyotumika ya umeme yenye uchunguzi wa kuaminika wa betri.",
      zh: "提供乘用车、商用厢式车批发与零售，并配备专业电池健康度衰减检测与官方验车认证。",
    },
    benefit: {
      en: "Transparent valuation & warranty",
      sw: "Tathmini ya uwazi na dhamana",
      zh: "透明车况评估与官方质保",
    },
  },
  {
    icon: ShieldCheck,
    title: {
      en: "NTSA Registration & Compliance",
      sw: "Usaidizi wa Usajili wa NTSA",
      zh: "NTSA 上牌合规一站式办理",
    },
    description: {
      en: "End-to-end guidance navigating vehicle registration, inspection, and regulatory compliance with Kenya's National Transport and Safety Authority.",
      sw: "Usaidizi kamili katika usajili wa magari na kufuata sheria za Mamlaka ya Usalama Barabarani (NTSA).",
      zh: "协助办理肯尼亚交通安全管理局（NTSA）牌照登记、安全检验与运营资质审批，免除繁琐手续。",
    },
    benefit: {
      en: "Hassle-free legal road deployment",
      sw: "Kuingia barabarani bila usumbufu",
      zh: "合规上路即刻投入运营",
    },
  },
  {
    icon: CreditCard,
    title: {
      en: "Flexible Fleet Leasing & Financing",
      sw: "Ukodishaji Rahisi wa Magari",
      zh: "灵活经营性租赁与金融方案",
    },
    description: {
      en: "Tailored commercial leasing arrangements and flexible payment structures allowing companies and individuals to transition with minimal upfront capital expenditure.",
      sw: "Chaguo nafuu za ukodishaji wa magari kwa biashara zinazotaka kuepuka gharama zote za ununuzi mara moja.",
      zh: "为企事业单位与车队运营者定制低首付经营租赁方案，有效优化现金流并降低前期重资产投入。",
    },
    benefit: {
      en: "Preserve operational capital",
      sw: "Okoa mtaji wa biashara",
      zh: "保护企业营运现金流",
    },
  },
  {
    icon: Zap,
    title: {
      en: "Turnkey Charging Infrastructure",
      sw: "Miundombinu Kamili ya Kuchaji",
      zh: "全功率交钥匙级充换电建设",
    },
    description: {
      en: "From 7kW residential and workplace AC wallboxes to 120kW+ public high-speed DC charging stations, covering site assessment, installation, and operation.",
      sw: "Kuanzia chaja ndogo za 7kW nyumbani na kazini hadi vituo vikubwa vya 120kW+ vya umma, ikiwemo ufungaji na uendeshaji.",
      zh: "覆盖7kW交流慢充到120kW+超充桩，提供场地勘测、电力接入报装、桩机安装与日常运维一站包办。",
    },
    benefit: {
      en: "High reliability & 99.8% uptime",
      sw: "Utegemevu wa hali ya juu wa 99.8%",
      zh: "高在线率与长期无忧售后",
    },
  },
  {
    icon: Wrench,
    title: {
      en: "Genuine Parts & Dedicated Service",
      sw: "Vipuri Halisi na Huduma Bora",
      zh: "原厂直供零备件与专业维保",
    },
    description: {
      en: "Direct component pipelines from trusted global EV manufacturers, minimizing vehicle downtime and ensuring expert after-sales technical maintenance.",
      sw: "Upatikanaji wa moja kwa moja wa vipuri asili vya magari kutoka kwa watengenezaji wakuu ili kuzuia kusimama kwa kazi.",
      zh: "海外源头直连核心配件与三电系统原厂件，本地化售后维修团队保障车辆极低停机率。",
    },
    benefit: {
      en: "Minimal downtime & prompt service",
      sw: "Huduma ya haraka na uhakika",
      zh: "急速响应与充足备件库",
    },
  },
  {
    icon: LineChart,
    title: {
      en: "Technical E-Mobility Consultancy",
      sw: "Ushauri wa Kitaalamu wa Umeme",
      zh: "电动化战略与能源转型技术咨询",
    },
    description: {
      en: "Data-driven feasibility studies, route simulation, charging power demand forecasting, and fleet rollout strategy for institutions and private enterprises.",
      sw: "Tafiti za kitaalamu na mipango ya safari ili kusaidia mashirika kuelekea umeme kwa njia salama na yenye faida.",
      zh: "为企业提供路线能耗测算、变压器电容负荷评估、充储配套方案及分阶段车队电动化实施路径。",
    },
    benefit: {
      en: "Data-backed transition roadmap",
      sw: "Mwongozo unaotegemea takwimu",
      zh: "数据驱动的高效决策支持",
    },
  },
];

export default function WhyChooseGreenRide() {
  const { currentLang } = useLanguage();
  const lang: Language = currentLang || "en";

  return (
    <section
      className="bg-slate-50 py-20 text-gray-900 sm:py-24"
      id="why-greenride-section"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/60 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
            <span>
              {lang === "en"
                ? "The GreenRide Advantage"
                : lang === "sw"
                  ? "Faida za GreenRide"
                  : "选择 GreenRide 的核心优势"}
            </span>
          </div>

          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            {lang === "en"
              ? "Your Complete End-to-End EV Ecosystem"
              : lang === "sw"
                ? "Mfumo Wako Kamili wa Magari ya Umeme"
                : "覆盖全生命周期的一站式纯电生态体系"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            {lang === "en"
              ? "We don't just supply electric vehicles — we support every stage of your electric mobility journey from vehicles and leasing to chargers and parts."
              : lang === "sw"
                ? "Hatuuzi tu magari ya umeme — tunasaidia kila hatua kuanzia ununuzi, ukodishaji, chaji hadi vipuri halisi."
                : "我们不仅提供高品质纯电车辆，更提供充电网络、牌照合规、金融租赁及原厂配件全链条闭环支持。"}
          </p>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-emerald-600" />
        </div>

        {/* 6 Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-7 shadow-xs transition-all duration-300 hover:border-emerald-300 hover:shadow-lg"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display mt-5 text-xl font-bold text-gray-950 group-hover:text-emerald-700 transition-colors">
                    {item.title[lang] || item.title.en}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-gray-600">
                    {item.description[lang] || item.description.en}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs font-semibold text-emerald-700">
                  <CheckCircle className="h-4 w-4" />
                  <span>{item.benefit[lang] || item.benefit.en}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Link Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-emerald-800 transition-colors hover:text-emerald-600"
          >
            <span>
              {lang === "en"
                ? "Learn more about our mission, vision and leadership"
                : lang === "sw"
                  ? "Pata maelezo zaidi kuhusu dhamira na uongozi wetu"
                  : "深入了解 GreenRide 愿景、使命与服务矩阵"}
            </span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
