"use client"

import React from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/types/types"
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  PhoneCall,
  CheckCircle2,
} from "lucide-react"

export default function HomeCta() {
  const { currentLang } = useLanguage()
  const lang: Language = currentLang || "en"

  const highlights = [
    {
      en: "Multi-Brand EV Supply & Transparent Valuation",
      sw: "Ugavi wa Magari ya Umeme na Tathmini ya Uwazi",
      zh: "严选多品牌电动汽车与透明电池车况评估",
    },
    {
      en: "Turnkey Charging Station Development & 24/7 Operations",
      sw: "Ujenzi Kamili wa Vituo vya Kuchaji na Matunzo",
      zh: "交钥匙级交直流快充站规划建设与全天候运维",
    },
    {
      en: "NTSA Registration Assistance & Commercial Fleet Leasing",
      sw: "Usaidizi wa Usajili wa NTSA na Ukodishaji wa Magari",
      zh: "NTSA 牌照合规代办与灵活经营性租赁方案",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white sm:py-24" id="home-cta-section">
      {/* Background Lighting & Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-emerald-600/15 blur-[120px] pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/20 bg-linear-to-b from-white/10 to-white/5 p-8 backdrop-blur-xl sm:p-12 lg:p-16 shadow-2xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 backdrop-blur-md uppercase">
                <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
                <span>
                  {lang === "en"
                    ? "Accelerate Your Switch Today"
                    : lang === "sw"
                      ? "Anza Safari Yako ya Umeme Leo"
                      : "即刻携手开启纯电出行转型"}
                </span>
              </div>

              <h2 className="font-display mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
                {lang === "en"
                  ? "Ready to Power Your Electric Journey?"
                  : lang === "sw"
                    ? "Uko Tayari Kuingia Kwenye Usafiri wa Umeme?"
                    : "准备好步入更清洁、更经济的电动新时代了吗？"}
              </h2>

              <p className="mt-4 max-w-xl text-base text-gray-300 sm:text-lg leading-relaxed">
                {lang === "en"
                  ? "Whether you are an individual buying your first EV, a fleet manager planning commercial transition, or a property owner building charging infrastructure — our Nairobi team is ready to guide you."
                  : lang === "sw"
                ? "Iwe unanunua gari lako la kwanza la umeme, unabadilisha magari ya kampuni, au unajenga kituo cha kuchaji — timu yetu ya Nairobi ipo tayari kukusaidia."
                : "无论您是选购首台私家电车的个人车主，还是规划规模化转型的车队管理者或商业充电站投资方，内罗毕专业团队随时为您提供全流程专属支持。"}
              </p>

              {/* Checklist */}
              <ul className="mt-6 space-y-2.5">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-200">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    <span>{item[lang] || item.en}</span>
                  </li>
                ))}
              </ul>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:scale-[1.02]"
                >
                  <span>
                    {lang === "en" ? "Contact Our E-Mobility Team" : lang === "sw" ? "Wasiliana na Timu Yetu" : "咨询电动出行顾问"}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40"
                >
                  <span>
                    {lang === "en" ? "Explore Vehicles & Hardware" : lang === "sw" ? "Chunguza Bidhaa Zote" : "浏览完整产品与车型"}
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Contact Card Info */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-black/40 p-6 sm:p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Greenride Africa Tech Limited</h3>
                    <p className="text-xs text-gray-400">Driving Kenya&apos;s Transition to Electric Mobility</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">
                        {lang === "en" ? "Nairobi Head Office" : lang === "sw" ? "Ofisi Kuu ya Nairobi" : "内罗毕总部地址"}
                      </div>
                      <div className="text-xs text-gray-300">
                        9 Spring Gardens, Kikambala Street, Kileleshwa, Nairobi, Kenya
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">
                        {lang === "en" ? "Email Inquiries" : lang === "sw" ? "Barua Pepe" : "官方联络邮箱"}
                      </div>
                      <a
                        href="mailto:greenride@kencharge.com"
                        className="text-xs text-emerald-400 hover:underline"
                      >
                        greenride@kencharge.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">
                        {lang === "en" ? "Operating Hours" : lang === "sw" ? "Saa za Kazi" : "对外服务时间"}
                      </div>
                      <div className="text-xs text-gray-300">
                        {lang === "en"
                          ? "Monday – Saturday: 8:00 AM – 6:00 PM (EAT)"
                          : lang === "sw"
                            ? "Jumatatu – Jumamosi: 8:00 Asubuhi – 12:00 Jioni"
                            : "周一至周六：上午8:00 至 下午6:00 (东非时间)"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-950/40 p-3 text-center text-xs text-emerald-300">
                  {lang === "en"
                    ? "✨ Regional EV Trading & After-Sales Support in East Africa"
                    : lang === "sw"
                      ? "✨ Biashara ya Magari na Usaidizi Kote Afrika Mashariki"
                      : "✨ 辐射东非区域的纯电车辆贸易与全方位售后保障"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

