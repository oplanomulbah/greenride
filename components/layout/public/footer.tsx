"use client"

import { useLanguage } from "@/contexts/language-context"
import { Plug } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedinIn } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa6"

export default function Footer() {
  const { currentLang } = useLanguage()

  const t =
    currentLang === "en"
      ? {
          tagline: "Evolving to a Sustainable Future",
          description:
            "Donar is a global leader in electric vehicle (EV) charging infrastructure and microgrid solutions.",
          solutions: "Solutions",
          products: "Products",
          acCharging: "AC Charging",
          dcCharging: "DC Charging",
          ess: "ESS",
          platform: "Platform",
          aboutUs: "About us",
          contactUs: "Contact us",
          news: "News",
          sustainableNews: "Sustainable News",
          events: "Events",
          successStories: "Success Stories",
          privacy: "Privacy Policy",
          terms: "Terms and Conditions",
        }
      : {
          tagline: "演进至可持续的绿色未来",
          description:
            "多纳(Donar)是全球领先的电动汽车 (EV) 充电站基础设施及微电网端到端系统解决方案供应商。",
          solutions: "解决方案",
          products: "产品中心",
          acCharging: "交流充电桩 (AC)",
          dcCharging: "直流充电桩 (DC)",
          ess: "储能系统 (ESS)",
          platform: "运营管理平台",
          aboutUs: "关于我们",
          contactUs: "联系我们",
          news: "新闻动态",
          sustainableNews: "可持续发展新闻",
          events: "企业与行业活动",
          successStories: "全球成功故事",
          privacy: "隐私政策声明",
          terms: "用户条款与服务条件",
        }

  return (
    <footer className="flex w-full flex-col" id="global-footer">
      {/* 1. Deep Blue Primary Banner Area */}
      <div className="bg-[#0059E3] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Presentation (Left Side) */}
          <div className="flex flex-col justify-start lg:col-span-5">
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className="group flex items-center gap-1"
                id="nav-logo"
              >
                <div className="relative h-8 w-20 transition-transform group-hover:scale-105 md:h-10 md:w-28">
                  <Image
                    src="/scenario-gird/logo-white.png"
                    alt="Donar Logo"
                    fill
                    className="h-full w-full object-contain"
                  />
                </div>
              </Link>
            </div>

            <h5 className="font-display mb-3 text-[17px] font-bold tracking-tight text-[#cbe2ff] sm:text-[19px]">
              {t.tagline}
            </h5>
            <p className="mb-6 max-w-sm text-[14px] leading-relaxed font-normal text-blue-50/80">
              {t.description}
            </p>

            {/* Social Media Link Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue-700/60 text-white transition-colors hover:bg-[#00d2ff]"
                aria-label="YouTube Channel"
              >
                <FaYoutube className="h-4 w-4 fill-white text-transparent" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-blue-700/60 text-white transition-colors hover:bg-[#00d2ff]"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="h-4 w-4 fill-white text-transparent" />
              </a>
            </div>
          </div>

          {/* Quick links structured columns (Right Side) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-5 lg:col-span-7">
            {/* Col 1: Solutions */}
            <div>
              <a
                href="#solutions"
                className="mb-4 block text-[15px] font-bold text-white transition-colors hover:text-sky-200"
              >
                {t.solutions}
              </a>
            </div>

            {/* Col 2: Products SubMenu */}
            <div className="sm:col-span-1">
              <a
                href="#products"
                className="mb-4 block text-[15px] font-bold text-white transition-colors hover:text-sky-200"
              >
                {t.products}
              </a>
              <ul className="space-y-2 text-[13px] font-medium text-blue-100/80">
                <li>
                  <a
                    href="#ac-charging"
                    className="transition-colors hover:text-white"
                  >
                    {t.acCharging}
                  </a>
                </li>
                <li>
                  <a
                    href="#dc-charging"
                    className="transition-colors hover:text-white"
                  >
                    {t.dcCharging}
                  </a>
                </li>
                <li>
                  <a href="#ess" className="transition-colors hover:text-white">
                    {t.ess}
                  </a>
                </li>
                <li>
                  <a
                    href="#platform"
                    className="transition-colors hover:text-white"
                  >
                    {t.platform}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: About Us */}
            <div>
              <a
                href="#about-us"
                className="mb-4 block text-[15px] font-bold text-white transition-colors hover:text-sky-200"
              >
                {t.aboutUs}
              </a>
            </div>

            {/* Col 4: Contact Us */}
            <div>
              <a
                href="#contact-us"
                className="mb-4 block text-[15px] font-bold text-white transition-colors hover:text-sky-200"
              >
                {t.contactUs}
              </a>
            </div>

            {/* Col 5: News SubMenu */}
            <div className="sm:col-span-1">
              <a
                href="#news"
                className="mb-4 block text-[15px] font-bold text-white transition-colors hover:text-sky-200"
              >
                {t.news}
              </a>
              <ul className="space-y-2 text-[13px] font-medium text-blue-100/80">
                <li>
                  <a
                    href="#sustainable-news"
                    className="transition-colors hover:text-white"
                  >
                    {t.sustainableNews}
                  </a>
                </li>
                <li>
                  <a
                    href="#events"
                    className="transition-colors hover:text-white"
                  >
                    {t.events}
                  </a>
                </li>
                <li>
                  <a
                    href="#success-stories"
                    className="transition-colors hover:text-white"
                  >
                    {t.successStories}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Secondary Bottom White Bar */}
      <div className="border-t border-gray-100 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Privacy & Legal links */}
          <div className="flex items-center gap-6 text-[13px] font-medium text-gray-500">
            <a
              href="#privacy"
              className="transition-colors hover:text-[#0059E3]"
            >
              {t.privacy}
            </a>
            <a href="#terms" className="transition-colors hover:text-[#0059E3]">
              {t.terms}
            </a>
          </div>

          {/* Badges container */}
          <div className="flex items-center gap-4">
            {/* Google Play Store Badge Mock */}
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center gap-2.5 rounded-md border border-zinc-700 bg-black px-3.5 py-1.5 text-white shadow-xs transition-colors hover:bg-zinc-800"
              id="google-play-badge"
            >
              {/* Play Store Tri color SVG */}
              <svg
                className="h-5 w-5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M3 19.3L12.5 12L3 4.7V19.3Z" fill="#00E5FF" />
                <path
                  d="M16.5 9L12.5 12L16.5 15L21 12.5C21.8 12.1 21.8 11.9 21 11.5L16.5 9Z"
                  fill="#FFC107"
                />
                <path
                  d="M12.5 12L16.5 9L12.5 6L3 4.7L12.5 12Z"
                  fill="#FF3D00"
                />
                <path
                  d="M3 19.3L12.5 12L16.5 15L12.5 18L3 19.3Z"
                  fill="#4CAF50"
                />
              </svg>
              <div className="flex flex-col text-left leading-none select-none">
                <span className="text-[9px] font-semibold text-zinc-400 uppercase">
                  Get it on
                </span>
                <span className="font-sans text-[14px] font-bold tracking-tight">
                  Google Play
                </span>
              </div>
            </a>

            {/* App Store Badge Mock */}
            <a
              href="https://apple.com/app-store"
              target="_blank"
              rel="noreferrer"
              className="flex cursor-pointer items-center gap-2.5 rounded-md border border-zinc-700 bg-black px-4 py-1.5 text-white shadow-xs transition-colors hover:bg-zinc-800"
              id="apple-store-badge"
            >
              {/* Apple icon SVG */}
              <svg
                className="h-5 w-5 flex-shrink-0 fill-white"
                viewBox="0 0 24 24"
              >
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.19.44-3.06-.4C4.1 16.57 3.51 10.45 6.64 7.21c1.55-1.6 3.12-1.7 4.29-1.07 1.15.62 1.83.62 2.94 0 1.05-.59 2.76-.79 4.14.62 1.13.91 1.7 2.05 1.7 4.12 0 4.21-2.58 8.13-2.66 9.4M12.03 5.4c.02-2.31 1.81-4.22 4.1-4.4.24 2.75-2.33 4.67-4.1 4.4" />
              </svg>
              <div className="flex flex-col text-left leading-none select-none">
                <span className="text-[9px] font-semibold text-zinc-400 uppercase">
                  Download on the
                </span>
                <span className="font-sans text-[14px] font-bold tracking-tight">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
