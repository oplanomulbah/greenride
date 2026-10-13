"use client"

import React, { useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import type { Language } from "@/types/types"
import {
  Calculator,
  TrendingDown,
  Leaf,
  Wrench,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react"

type VehicleType = "van" | "sedan" | "boda"

interface VehicleOption {
  id: VehicleType
  label: Record<Language, string>
  petrolPerKmKES: number // Petrol cost per km in KES (average fuel consumption * KES 200/L)
  electricPerKmKES: number // Electric cost per km in KES (average kWh/km * commercial tariff KES 20/kWh)
  co2GramsPerKm: number // CO2 saved in grams per km
  defaultKm: number
}

const vehicleOptions: VehicleOption[] = [
  {
    id: "van",
    label: {
      en: "Commercial Fleet Van (Delivery)",
      sw: "Gari la Mizigo (Usambazaji)",
      zh: "纯电城配物流厢货",
    },
    petrolPerKmKES: 26, // Diesel/petrol ~13L/100km * ~200 KES/L = 26 KES/km
    electricPerKmKES: 7.2, // ~36 kWh/100km * ~20 KES/kWh = 7.2 KES/km
    co2GramsPerKm: 245,
    defaultKm: 3200,
  },
  {
    id: "sedan",
    label: {
      en: "Executive Sedan / Taxi Service",
      sw: "Sedan ya Kifahari / Teksi",
      zh: "高频营运纯电轿车/网约车",
    },
    petrolPerKmKES: 17, // Petrol ~8.5L/100km * ~200 KES/L = 17 KES/km
    electricPerKmKES: 4.8, // ~24 kWh/100km * ~20 KES/kWh = 4.8 KES/km
    co2GramsPerKm: 180,
    defaultKm: 2500,
  },
  {
    id: "boda",
    label: {
      en: "Electric Boda / Delivery 3-Wheeler",
      sw: "Boda Boda ya Umeme / Tuk-Tuk",
      zh: "电动两轮摩的/三轮物流车",
    },
    petrolPerKmKES: 8.5,
    electricPerKmKES: 2.2,
    co2GramsPerKm: 95,
    defaultKm: 1800,
  },
]

export default function SavingsCalculator() {
  const { currentLang } = useLanguage()
  const lang: Language = currentLang || "en"

  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>("van")
  const currentOption = vehicleOptions.find((v) => v.id === selectedVehicle) || vehicleOptions[0]
  const [monthlyKm, setMonthlyKm] = useState<number>(currentOption.defaultKm)

  const handleVehicleChange = (v: VehicleType) => {
    setSelectedVehicle(v)
    const opt = vehicleOptions.find((item) => item.id === v)
    if (opt) {
      setMonthlyKm(opt.defaultKm)
    }
  }

  // Calculations
  const monthlyPetrolKES = monthlyKm * currentOption.petrolPerKmKES
  const monthlyElectricKES = monthlyKm * currentOption.electricPerKmKES
  const monthlySavingsKES = Math.round(monthlyPetrolKES - monthlyElectricKES)
  const annualSavingsKES = Math.round(monthlySavingsKES * 12)
  const annualCo2Kg = Math.round((monthlyKm * 12 * currentOption.co2GramsPerKm) / 1000)
  const percentSaved = Math.round(
    ((currentOption.petrolPerKmKES - currentOption.electricPerKmKES) /
      currentOption.petrolPerKmKES) *
      100
  )

  return (
    <section className="relative overflow-hidden bg-emerald-950 py-20 text-white sm:py-24" id="savings-calculator">
      {/* Background glowing gradients */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 h-96 w-96 rounded-full bg-emerald-600/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/60 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 backdrop-blur-md uppercase">
            <Calculator className="h-3.5 w-3.5 text-emerald-400" />
            <span>
              {lang === "en"
                ? "Interactive EV Economy Calculator"
                : lang === "sw"
                  ? "Kikokotoo cha Gharama za Umeme"
                  : "纯电出行全生命周期经济测算"}
            </span>
          </div>

          <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {lang === "en"
              ? "Calculate Your Electric Fleet Savings"
              : lang === "sw"
                ? "Kokotoa Uokoaji Wako wa Fedha kwa Umeme"
                : "直观测算您的新能源车队降本空间"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base text-emerald-100/80 sm:text-lg">
            {lang === "en"
              ? "See how much fuel, maintenance, and carbon emissions you save each month when transitioning to GreenRide electric vehicles in Kenya."
              : lang === "sw"
                ? "Ona jinsi unavyookoa fedha za mafuta na kupunguza moshi unapotumia magari ya umeme ya GreenRide nchini Kenya."
                : "对比肯尼亚常规燃油支出与谷电快充成本，量化每月油费结余与碳减排效益。"}
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="mt-12 grid grid-cols-1 gap-8 rounded-3xl border border-emerald-800/60 bg-emerald-900/40 p-6 backdrop-blur-xl lg:grid-cols-12 lg:p-10 shadow-2xl">
          {/* Controls Column */}
          <div className="flex flex-col justify-between space-y-8 lg:col-span-6">
            <div>
              {/* Vehicle Selection */}
              <label className="block text-xs font-bold tracking-wider text-emerald-300 uppercase">
                {lang === "en" ? "1. Select Vehicle Application" : lang === "sw" ? "1. Chagua Aina ya Gari" : "1. 选择运营车型"}
              </label>

              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {vehicleOptions.map((opt) => {
                  const isSelected = opt.id === selectedVehicle
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleVehicleChange(opt.id)}
                      className={`flex flex-col rounded-xl border p-3 text-left transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-emerald-400 bg-emerald-600/30 text-white shadow-md shadow-emerald-950/40"
                          : "border-emerald-800/60 bg-emerald-950/50 text-emerald-200/70 hover:border-emerald-700 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold">
                          {opt.id === "van" ? "Cargo Van" : opt.id === "sedan" ? "Executive Sedan" : "Boda / Tuk-Tuk"}
                        </span>
                        {isSelected && <Check className="h-3.5 w-3.5 text-emerald-300" />}
                      </div>
                      <span className="mt-1 text-[11px] text-emerald-300/80">
                        ~{opt.defaultKm.toLocaleString()} km/mo
                      </span>
                    </button>
                  )
                })}
              </div>

              {/* Monthly Distance Slider */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label htmlFor="km-slider" className="text-xs font-bold tracking-wider text-emerald-300 uppercase">
                    {lang === "en" ? "2. Monthly Distance Driven" : lang === "sw" ? "2. Umbali wa Mwezi" : "2. 月均行驶里程"}
                  </label>
                  <span className="font-mono text-lg font-black text-white">
                    {monthlyKm.toLocaleString()} <span className="text-xs font-sans text-emerald-300">km / month</span>
                  </span>
                </div>

                <div className="mt-4">
                  <input
                    id="km-slider"
                    type="range"
                    min="500"
                    max="6000"
                    step="100"
                    value={monthlyKm}
                    onChange={(e) => setMonthlyKm(parseInt(e.target.value, 10))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-emerald-950 accent-emerald-400 focus:outline-none"
                  />
                  <div className="mt-2 flex justify-between text-[11px] font-mono text-emerald-400/60">
                    <span>500 km</span>
                    <span>3,000 km</span>
                    <span>6,000 km</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Baseline comparison note */}
            <div className="rounded-xl border border-emerald-800/40 bg-emerald-950/40 p-4 text-xs text-emerald-200/80">
              <div className="flex items-start gap-2.5">
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <p>
                  {lang === "en"
                    ? `Based on current Kenya fuel benchmarks (~KES 200/L petrol) vs off-peak/commercial electric tariff (~KES 20/kWh). EVs also cut moving mechanical parts by ~60%, eliminating engine oil, oil filters, and spark plug servicing.`
                    : lang === "sw"
                      ? `Kulingana na bei za kawaida za mafuta nchini Kenya dhidi ya umeme wa kawaida. Magari ya umeme pia hupunguza gharama za matengenezo kwa 60%.`
                      : `测算基准参考肯尼亚商业电价与燃油零售均价。纯电动力总成减少了约60%传统易损运动机械部件，彻底免除机油滤芯等周期性常规保养。`}
                </p>
              </div>
            </div>
          </div>

          {/* Results Summary Column */}
          <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/30 bg-emerald-950/80 p-6 sm:p-8 lg:col-span-6 shadow-inner">
            <div>
              <div className="flex items-center justify-between border-b border-emerald-800/60 pb-4">
                <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase">
                  {lang === "en" ? "Estimated Direct Savings" : lang === "sw" ? "Makadirio ya Uokoaji" : "测算预期总效益"}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                  <TrendingDown className="h-3.5 w-3.5" />
                  <span>{percentSaved}% Saved</span>
                </span>
              </div>

              {/* Huge Annual Savings Display */}
              <div className="mt-6 text-center sm:text-left">
                <div className="text-xs font-medium text-emerald-200">
                  {lang === "en" ? "Estimated Annual Savings" : lang === "sw" ? "Uokoaji wa Kila Mwaka" : "预计年度可节省支出"}
                </div>
                <div className="font-display mt-1 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  KES {annualSavingsKES.toLocaleString()}
                </div>
                <div className="mt-1 text-xs text-emerald-300/80">
                  ≈ KES {monthlySavingsKES.toLocaleString()} / month
                </div>
              </div>

              {/* Sub-Metrics Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-emerald-800/60 bg-black/30 p-3.5">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Leaf className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-semibold">
                      {lang === "en" ? "CO₂ Averted" : lang === "sw" ? "Mazingira Safi" : "二氧化碳减排"}
                    </span>
                  </div>
                  <div className="font-display mt-2 text-xl font-bold text-white">
                    {annualCo2Kg.toLocaleString()} kg
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {lang === "en" ? "per year" : lang === "sw" ? "kwa mwaka" : "每年"}
                  </div>
                </div>

                <div className="rounded-xl border border-emerald-800/60 bg-black/30 p-3.5">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <Wrench className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-semibold">
                      {lang === "en" ? "Service Cost" : lang === "sw" ? "Matunzo" : "维保费用"}
                    </span>
                  </div>
                  <div className="font-display mt-2 text-xl font-bold text-white">
                    ~50% Less
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {lang === "en" ? "fewer moving parts" : lang === "sw" ? "vipuri vichache" : "免去内燃机常规保养"}
                  </div>
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="mt-8 pt-4 border-t border-emerald-800/60">
              <Link
                href="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 px-4 text-sm font-bold text-emerald-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:scale-[1.01]"
              >
                <span>
                  {lang === "en"
                    ? "Request Custom Fleet TCO Analysis"
                    : lang === "sw"
                      ? "Omba Uchambuzi wa Gharama za Magari"
                      : "获取专属车队全面TCO方案"}
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

