"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import Brand from "@/components/common/brand"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

const navigation = [
  { key: "nav.home", href: "/" },
  {
    key: "nav.products",
    href: "/products",
    children: [
      { key: "nav.vehicles", href: "/products?category=vehicles" },
      { key: "nav.charging", href: "/products?category=charging" },
      { key: "nav.fleet", href: "/products?category=fleet" },
      { key: "nav.infrastructure", href: "/products?category=infrastructure" },
      { key: "nav.consultancy", href: "/products?category=consultancy" },
    ],
  },
  { key: "nav.about", href: "/about" },
  { key: "nav.news", href: "/news" },
  { key: "nav.contact", href: "/contact" },
]

function LanguageSelect({ className = "" }: { className?: string }) {
  const { currentLang, setCurrentLang } = useLanguage()
  const languageLabel = translate(currentLang, "common.language")
  return (
    <label className={className}>
      <span className="sr-only">{languageLabel}</span>
      <select
        aria-label={languageLabel}
        value={currentLang}
        onChange={(event) => setCurrentLang(event.target.value as "en" | "sw" | "zh")}
        className="cursor-pointer border border-gray-200 bg-white px-2 py-2 text-sm font-medium text-gray-800 outline-none focus:border-emerald-700"
      >
        <option value="en">English</option>
        <option value="sw">Kiswahili</option>
        <option value="zh">中文</option>
      </select>
    </label>
  )
}

export default function Navbar() {
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-xs">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Brand />
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => {
            const label = t(item.key)
            const isOpen = activeDropdown === item.key
            return (
              <div
                key={item.key}
                className="relative py-3"
                onMouseEnter={() => item.children && setActiveDropdown(item.key)}
                onMouseLeave={() => item.children && setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-emerald-700"
                >
                  {label}
                  {item.children && <ChevronDown className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                </Link>
                {item.children && isOpen && (
                  <div className="absolute top-full left-0 z-50 min-w-56 border border-gray-100 bg-white py-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                      >
                        {t(child.key)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          <LanguageSelect className="border-l border-gray-200 pl-5" />
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSelect />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
            aria-label={translate(currentLang, mobileMenuOpen ? "common.closeMenu" : "common.openMenu")}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {navigation.map((item) => (
            <div key={item.key} className="border-b border-gray-100 last:border-0">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 text-sm font-semibold text-gray-800 hover:text-emerald-700"
              >
                {t(item.key)}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 pl-4 text-sm text-gray-600 hover:text-emerald-700"
                >
                  {t(child.key)}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}