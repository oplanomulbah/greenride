"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/types/types"
import {
  ChevronLeft,
  ChevronRight,
  Zap,
  BatteryCharging,
  Gauge,
  ShieldCheck,
  ArrowRight,
  Pause,
  Play,
  Truck,
  Sparkles,
  Layers,
} from "lucide-react"

interface SpecItem {
  icon: React.ComponentType<{ className?: string }>
  value: string
  label: Record<Language, string>
}

interface SlideData {
  id: string
  category: Record<Language, string>
  title: Record<Language, string>
  tagline: Record<Language, string>
  description: Record<Language, string>
  image: string
  alt: Record<Language, string>
  specs: SpecItem[]
  primaryCta: {
    label: Record<Language, string>
    href: string
  }
  secondaryCta: {
    label: Record<Language, string>
    href: string
  }
}

const slides: SlideData[] = [
  {
    id: "executive-saloon",
    category: {
      en: "Executive Passenger EV",
      sw: "Gari la Kifahari la Umeme",
      zh: "高端纯电行政座驾",
    },
    title: {
      en: "Next-Generation Electric Executive Mobility",
      sw: "Uhamaji wa Kifahari wa Magari ya Umeme",
      zh: "新一代智能高端纯电出行",
    },
    tagline: {
      en: "Quiet Luxury • 550+ km Extended Range • Zero Emissions",
      sw: "Anasa Tulivu • Kilomita 550+ za Masafa • Bila Moshi",
      zh: "静谧豪华 • 550+ 公里超长续航 • 零碳排放",
    },
    description: {
      en: "Engineered for executive corporate travel, private car services, and discerning owners seeking prestige, high efficiency, and ultra-fast DC charging.",
      sw: "Imeundwa kwa ajili ya usafiri wa viongozi, huduma za magari ya hadhi ya juu, na ufanisi mkubwa kwa chaji ya haraka ya DC.",
      zh: "专为商务出行与高端出行服务打造，兼具静谧舒适质感、超长续航表现与极速高功率快充支持。",
    },
    image: "/products/product-hero.jpeg",
    alt: {
      en: "Modern silver luxury electric sedan plugged into smart charging station",
      sw: "Gari la kisasa la umeme la kifahari likiunganishwa na kituo cha kuchaji",
      zh: "连接在智能充电桩上的高档豪华纯电轿车",
    },
    specs: [
      {
        icon: Gauge,
        value: "550+ km",
        label: { en: "Electric Range", sw: "Umbali wa Safari", zh: "综合纯电续航" },
      },
      {
        icon: BatteryCharging,
        value: "28 min",
        label: { en: "10-80% DC Charge", sw: "Kuchaji Haraka", zh: "10-80% 极速快充" },
      },
      {
        icon: Zap,
        value: "4.2s",
        label: { en: "0-100 km/h", sw: "Mwendokasi", zh: "百公里加速" },
      },
      {
        icon: ShieldCheck,
        value: "Zero",
        label: { en: "Carbon Emissions", sw: "Moshi Sifuri", zh: "全生命周期零排" },
      },
    ],
    primaryCta: {
      label: { en: "Explore Vehicles", sw: "Chunguza Magari", zh: "浏览电动车型" },
      href: "/products?category=vehicles",
    },
    secondaryCta: {
      label: { en: "Book Consultation", sw: "Wasiliana Nasi", zh: "预约试驾咨询" },
      href: "/contact",
    },
  },
  {
    id: "commercial-fleet-van",
    category: {
      en: "Commercial & Logistics",
      sw: "Magari ya Biashara na Mizigo",
      zh: "纯电城配物流车队",
    },
    title: {
      en: "High-Efficiency Commercial Electric Fleet Vans",
      sw: "Magari ya Umeme ya Kibiashara ya Kusafirisha Mizigo",
      zh: "高效经济纯电城配物流商用车型",
    },
    tagline: {
      en: "Up to 70% Lower Running Costs • Heavy Cargo Payload",
      sw: "Gharama Chini kwa 70% • Uwezo Mkubwa wa Mizigo",
      zh: "降低多达 70% 综合运营成本 • 超大装载空间",
    },
    description: {
      en: "Reliable, high-payload electric cargo vans tailored for urban logistics, express courier fleets, and commercial distribution across Nairobi.",
      sw: "Magari ya kuaminika ya mizigo ya umeme yaliyotengenezwa kwa ajili ya usafirishaji wa mizigo mijini na huduma za vifurushi.",
      zh: "为城市物流、快递配送与企事业车队定制，具备低维保成本、高出勤率与场站极速补能优势。",
    },
    image: "/scenario-gird/icj5.jpeg",
    alt: {
      en: "Commercial electric fleet delivery vans charging at depot station",
      sw: "Magari ya umeme ya kubebea mizigo yakichajiwa katika kituo cha kampuni",
      zh: "在物流场站快速充电的纯电商用厢式货车",
    },
    specs: [
      {
        icon: Zap,
        value: "70% Less",
        label: { en: "Fuel & Service Cost", sw: "Gharama ya Chini", zh: "运营维保降本" },
      },
      {
        icon: Truck,
        value: "1,450 kg",
        label: { en: "Payload Capacity", sw: "Uwezo wa Mizigo", zh: "载重负荷能力" },
      },
      {
        icon: Gauge,
        value: "320 km",
        label: { en: "Daily Urban Range", sw: "Masafa ya Kazi", zh: "工况满载续航" },
      },
      {
        icon: ShieldCheck,
        value: "NTSA",
        label: { en: "Fully Compliant", sw: "Usajili Kamili", zh: "国家标准合规" },
      },
    ],
    primaryCta: {
      label: { en: "Fleet Solutions", sw: "Suluhisho za Biashara", zh: "了解车队方案" },
      href: "/products?category=fleet",
    },
    secondaryCta: {
      label: { en: "Request Fleet Quote", sw: "Omba Makisio", zh: "定制车队报价" },
      href: "/contact",
    },
  },
  {
    id: "smart-aerodynamic-saloon",
    category: {
      en: "High-Performance EV",
      sw: "Magari ya Kasi ya Kisasa",
      zh: "智能轿跑与旗舰车队",
    },
    title: {
      en: "Intelligent Aerodynamic Electric Sedans",
      sw: "Magari ya Umeme ya Kisasa Yenye Teknolojia Bora",
      zh: "全域高压智能流线纯电轿跑",
    },
    tagline: {
      en: "0.23 Cd Drag Coefficient • 800V High-Voltage Architecture",
      sw: "Muundo Maalum wa Hewa • Mfumo Imara wa Volti 800",
      zh: "0.23 Cd 超低风阻 • 800V 高压电气架构",
    },
    description: {
      en: "Ultra-sleek aerodynamics combined with intelligent battery telematics for premium airport transfers, corporate fleets, and green ride-hailing.",
      sw: "Muundo safi wa kuvutia pamoja na teknolojia ya betri yenye akili kwa ajili ya usafiri wa viwanja vya ndege na mashirika.",
      zh: "兼顾极致风阻空气动力学与高阶智能座舱，助力高端机场接送、网约车队与品质私家出行。",
    },
    image: "/scenario-gird/icj6.jpeg",
    alt: {
      en: "Lineup of sleek aerodynamic silver electric sedans charging under solar canopy",
      sw: "Magari ya kisasa ya umeme yaliyopangwa yakichaji chini ya paa la jua",
      zh: "在光伏车棚下整齐充电的高性能流线银色纯电车队",
    },
    specs: [
      {
        icon: Sparkles,
        value: "0.23 Cd",
        label: { en: "Aerodynamic Drag", sw: "Upinzani wa Hewa", zh: "超低风阻系数" },
      },
      {
        icon: BatteryCharging,
        value: "800V",
        label: { en: "HV Architecture", sw: "Volti ya Juu", zh: "全域高压快充" },
      },
      {
        icon: Zap,
        value: "150 kW",
        label: { en: "Peak Charging Input", sw: "Kasi ya Chaji", zh: "峰值快充功率" },
      },
      {
        icon: Gauge,
        value: "Dual Motor",
        label: { en: "All-Wheel Drive", sw: "Magurudumu Yote", zh: "双电机智能四驱" },
      },
    ],
    primaryCta: {
      label: { en: "View EV Catalog", sw: "Orodha ya Magari", zh: "查看车型详情" },
      href: "/products?category=vehicles",
    },
    secondaryCta: {
      label: { en: "Inquire Now", sw: "Wasiliana Nasi", zh: "立即咨询意向" },
      href: "/contact",
    },
  },
  {
    id: "supercharging-infrastructure",
    category: {
      en: "Rapid EV Charging Parks",
      sw: "Vituo vya Kuchaji vya Haraka",
      zh: "大功率直流极速充电站",
    },
    title: {
      en: "Multi-Bay Fast Charging Hubs & Station Networks",
      sw: "Mtandao wa Vituo vya Kuchaji vya Haraka vya DC",
      zh: "高密度多车位大功率快充枢纽",
    },
    tagline: {
      en: "Up to 120kW+ DC High Power • Dual-Gun Multi-Vehicle Charging",
      sw: "Nguvu ya 120kW+ DC • Bunduki Mbili za Kuchaji",
      zh: "最高 120kW+ 峰值直流输出 • 双枪多车型同步快充",
    },
    description: {
      en: "End-to-end charging station design, equipment supply, and round-the-clock maintenance built for highway corridors, malls, and fleet depots.",
      sw: "Ujenzi kamili wa vituo vya kuchaji, usambazaji wa vifaa, na matengenezo ya mara kwa mara kwa barabara kuu na vituo vya ununuzi.",
      zh: "提供场地勘测、设备配置、工程交付及7×24小时云端运维，为干线公路、商业中心及场站提供高可靠补能。",
    },
    image: "/scenario-gird/icj4.jpeg",
    alt: {
      en: "Modern electric vehicle charging plaza with multiple electric cars",
      sw: "Kituo cha kisasa cha kuchaji magari ya umeme chenye magari kadhaa",
      zh: "配备多台电动汽车同时充电的现代化直流快充广场",
    },
    specs: [
      {
        icon: Zap,
        value: "120kW+",
        label: { en: "DC Fast Output", sw: "Nguvu ya DC", zh: "直流大功率输出" },
      },
      {
        icon: Layers,
        value: "CCS2 / GBT",
        label: { en: "Dual Connector Standard", sw: "Viwango vya Viunganishi", zh: "多标准兼容接口" },
      },
      {
        icon: ShieldCheck,
        value: "99.8%",
        label: { en: "Target Uptime", sw: "Utegemevu wa Mfumo", zh: "高可靠在线率" },
      },
      {
        icon: BatteryCharging,
        value: "Multi-Bay",
        label: { en: "Concurrent Charging", sw: "Uchaji Sambamba", zh: "多车位并发支持" },
      },
    ],
    primaryCta: {
      label: { en: "Charging Equipment", sw: "Vifaa vya Kuchaji", zh: "充电设备方案" },
      href: "/products?category=charging",
    },
    secondaryCta: {
      label: { en: "Plan a Station", sw: "Panga Kituo Chako", zh: "规划充电场站" },
      href: "/contact",
    },
  },
  {
    id: "turnkey-ecosystem",
    category: {
      en: "Turnkey Fleet Solutions",
      sw: "Suluhisho Kamili za Magari",
      zh: "全生命周期电动化方案",
    },
    title: {
      en: "Comprehensive Electric Vehicle Sourcing & Leasing",
      sw: "Upataji na Ukodishaji wa Magari ya Umeme ya Kisasa",
      zh: "一站式整车采购、合规租赁与后市场服务",
    },
    tagline: {
      en: "One Partner • Vehicle Sourcing • Registration • Ongoing Support",
      sw: "Mshirika Mmoja • Magari Bora • Usajili wa NTSA • Matunzo",
      zh: "一站协同 • 严选品质整车 • 牌照代办 • 全程运维",
    },
    description: {
      en: "From new and certified pre-owned EVs to flexible leasing structures and genuine spare parts, GreenRide powers your clean energy transition.",
      sw: "Kuanzia magari mapya na yaliyotumika yenye ubora hadi ukodishaji unaonyumbulika na vipuri halisi, GreenRide inakuongoza.",
      zh: "从新车严选、合规上牌、灵活经营租赁到原厂零配件与技术咨询，全方位护航企业与个人的电动化转型步伐。",
    },
    image: "/scenario-gird/icj3.jpeg",
    alt: {
      en: "Illuminated nighttime EV charging station with sleek white electric sedan",
      sw: "Kituo cha kuchaji cha usiku chenye taa na gari jeupe la umeme",
      zh: "夜色中灯火通明、科技感十足的高端纯电轿车充电桩展区",
    },
    specs: [
      {
        icon: ShieldCheck,
        value: "360°",
        label: { en: "Lifecycle Support", sw: "Usaidizi Kamili", zh: "全链路贴心保障" },
      },
      {
        icon: Sparkles,
        value: "Flexible",
        label: { en: "Lease & Purchase", sw: "Ukodishaji Rahisi", zh: "灵活租购方案" },
      },
      {
        icon: Gauge,
        value: "Genuine",
        label: { en: "EV Spare Parts", sw: "Vipuri Asili", zh: "原厂纯电备件" },
      },
      {
        icon: Zap,
        value: "East Africa",
        label: { en: "Regional Network", sw: "Mtandao wa Kanda", zh: "东非区域网络" },
      },
    ],
    primaryCta: {
      label: { en: "Explore All Solutions", sw: "Suluhisho Zote", zh: "探索全部方案" },
      href: "/products",
    },
    secondaryCta: {
      label: { en: "Talk to an Expert", sw: "Ongea na Mtaalamu", zh: "咨询技术专家" },
      href: "/contact",
    },
  },
]

const SLIDE_DURATION_MS = 6500

export default function HomeHeroSection() {
  const { currentLang } = useLanguage()
  const lang: Language = currentLang || "en"

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [progress, setProgress] = useState(0)

  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const activeSlide = slides[currentIndex]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
    setProgress(0)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
    setProgress(0)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index)
    setProgress(0)
  }, [])

  // Autoplay timer with progress bar
  useEffect(() => {
    if (!isPlaying || isHovered) return

    const intervalStep = 50
    const totalSteps = SLIDE_DURATION_MS / intervalStep

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 100 / totalSteps
      })
    }, intervalStep)

    return () => clearInterval(timer)
  }, [isPlaying, isHovered, nextSlide])

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide()
      } else if (e.key === "ArrowRight") {
        nextSlide()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current
      if (distance > 50) {
        nextSlide()
      } else if (distance < -50) {
        prevSlide()
      }
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  return (
    <section
      id="home-hero-carousel"
      aria-roledescription="carousel"
      aria-label="Professional Electric Vehicles Showcase"
      className="relative flex min-h-[640px] h-[85vh] max-h-[920px] w-full items-end justify-center overflow-hidden bg-slate-950 text-white select-none sm:h-[86vh] md:h-[78vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Vehicle Slides with Smooth Cross-fade and subtle pan zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.alt[lang] || activeSlide.alt.en}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Layered Gradient Overlays for Peak Readability & Elegance */}
        <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/55 to-black/35 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/30 to-transparent pointer-events-none" />
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />
      </div>

      {/* Main Slide Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Category Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 backdrop-blur-md uppercase sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span>{activeSlide.category[lang] || activeSlide.category.en}</span>
              </div>

              {/* Slide Headline */}
              <h1
                id="hero-header-text"
                className="font-display text-3xl font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                {activeSlide.title[lang] || activeSlide.title.en}
              </h1>

              {/* Subtitle / Tagline */}
              {/* <p className="text-sm font-semibold tracking-wide text-emerald-300 sm:text-base md:text-lg">
                {activeSlide.tagline[lang] || activeSlide.tagline.en}
              </p> */}

              {/* Description */}
              <p className="max-w-2xl text-xs sm:text-sm md:text-base font-normal leading-relaxed text-gray-200 line-clamp-3 sm:line-clamp-none">
                {activeSlide.description[lang] || activeSlide.description.en}
              </p>

              {/* Key Vehicle Specifications Grid */}
              {/* <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4 sm:gap-3">
                {activeSlide.specs.map((spec, i) => {
                  const Icon = spec.icon
                  return (
                    <div
                      key={i}
                      className="group/spec flex items-center gap-2.5 rounded-lg border border-white/15 bg-black/40 p-2 sm:p-2.5 backdrop-blur-md transition-all duration-300 hover:border-emerald-400/50 hover:bg-black/60"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-display truncate text-xs sm:text-sm font-bold text-white tracking-tight">
                          {spec.value}
                        </div>
                        <div className="truncate text-[10px] sm:text-xs font-medium text-gray-300">
                          {spec.label[lang] || spec.label.en}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div> */}

              {/* Call-to-Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={activeSlide.primaryCta.href}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-emerald-950/50 transition-all hover:bg-emerald-500 hover:shadow-emerald-700/40 hover:translate-y-[-1px] active:translate-y-[0px]"
                >
                  <span>{activeSlide.primaryCta.label[lang] || activeSlide.primaryCta.label.en}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={activeSlide.secondaryCta.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40 active:translate-y-[0px]"
                >
                  <span>{activeSlide.secondaryCta.label[lang] || activeSlide.secondaryCta.label.en}</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Side Arrow Navigation (Desktop & Tablet) */}
      <div className="absolute inset-y-0 left-4 right-4 z-20 hidden items-center justify-between pointer-events-none md:flex">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous electric vehicle slide"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:border-emerald-400 hover:bg-black/70 hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next electric vehicle slide"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:border-emerald-400 hover:bg-black/70 hover:scale-105 active:scale-95"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Modern Bottom Controls Bar: Progress Indicators, Thumbnails, Play/Pause */}
      <div className="absolute bottom-4 left-0 right-0 z-20 sm:bottom-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Slide Indicator Pills with Animated Real-time Progress Bar */}
          <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${slide.category[lang] || slide.category.en}`}
                  className="group relative flex flex-col cursor-pointer text-left focus:outline-none"
                >
                  <div className="h-1.5 w-8 rounded-full bg-white/25 sm:w-16 overflow-hidden transition-all duration-300 group-hover:bg-white/40">
                    {isActive && (
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                  <span className="hidden pt-1 text-[11px] font-medium text-gray-400 transition-colors group-hover:text-white lg:inline-block">
                    0{idx + 1}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Right Controls: Index Counter & Play/Pause */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-wider text-gray-300 font-mono">
              0{currentIndex + 1} <span className="text-gray-500">/</span> 0{slides.length}
            </span>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause electric vehicle slideshow" : "Play electric vehicle slideshow"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-gray-200 backdrop-blur-md transition-colors hover:border-emerald-400 hover:text-white"
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 pl-0.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
