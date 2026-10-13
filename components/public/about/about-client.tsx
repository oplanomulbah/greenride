"use client"

import Image from "next/image"
import { BatteryCharging, CarFront, ClipboardCheck, Truck, Wrench } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

const serviceKeys = [
  "service.vehicles",
  "service.import",
  "service.fleet",
  "service.registration",
  "service.charging",
  "service.stations",
  "service.consultancy",
]

const serviceIcons = [CarFront, Truck, Truck, ClipboardCheck, BatteryCharging, BatteryCharging, Wrench]

const projectImages = [
  { src: "/contact_nbanner.jpeg", alt: "An electric vehicle connected to charging equipment" },
  { src: "/products/pocket-1.jpeg", alt: "Portable electric vehicle charging equipment" },
]

export default function AboutClient() {
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)

  return (
    <div className="bg-white text-gray-800">
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-center text-sm font-semibold tracking-[0.12em] text-emerald-700 uppercase">
          Greenride Africa Tech Limited
        </p>
        <h1 className="mx-auto mb-12 max-w-3xl text-center text-4xl leading-tight font-semibold text-gray-950 md:text-5xl">
          {t("about.title")}
        </h1>

        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-950">
            {t("about.company")}
          </h2>
          <p className="text-lg leading-8 text-gray-600">
            {t("about.companyBody")}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-10 border-y border-gray-200 py-10 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-emerald-800">
              {t("about.mission")}
            </h2>
            <p className="leading-7 text-gray-600">{t("about.missionBody")}</p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-emerald-800">
              {t("about.vision")}
            </h2>
            <p className="leading-7 text-gray-600">{t("about.visionBody")}</p>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-950">
            {t("about.values")}
          </h2>
          <p className="mb-8 max-w-3xl leading-7 text-gray-600">
            {t("about.valuesBody")}
          </p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {["sustainability", "reliability", "integrity", "innovation", "customer"].map((value) => (
              <li key={value} className="border-l-2 border-emerald-600 py-2 pl-4 font-medium text-gray-800">
                {t(`about.${value}`)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-emerald-50/70 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-semibold text-gray-950">
            {t("about.services")}
          </h2>
          <ul className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceKeys.map((key, index) => {
              const Icon = serviceIcons[index]
              return (
                <li key={key} className="flex items-start gap-4 border-b border-emerald-900/10 pb-5">
                  <Icon className="mt-0.5 size-6 shrink-0 text-emerald-700" aria-hidden="true" />
                  <span className="font-medium leading-6 text-gray-800">{t(key)}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold text-gray-950">
            {t("about.impact")}
          </h2>
          <p className="leading-7 text-gray-600">{t("about.impactBody")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projectImages.map((image) => (
            <div key={image.src} className="relative aspect-4/3 overflow-hidden bg-gray-100">
              <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
