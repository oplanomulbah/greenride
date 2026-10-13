"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

interface ProductTabsProps {
  activeCategory?: string
}

const tabs = ["vehicles", "fleet", "charging", "infrastructure", "consultancy"]

export function ProductTabs({ activeCategory = "vehicles" }: ProductTabsProps) {
  const { currentLang } = useLanguage()
  return (
    <nav aria-label="Product and service categories" className="mb-12 flex flex-wrap justify-center gap-3 border-b border-gray-100 py-6 md:gap-5">
      {tabs.map((category) => (
        <Link
          key={category}
          href={`/products?category=${category}`}
          aria-current={activeCategory === category ? "page" : undefined}
          className={`cursor-pointer px-5 py-2.5 text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-emerald-700 text-white"
              : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-800"
          }`}
        >
          {translate(currentLang, `catalog.${category}`)}
        </Link>
      ))}
    </nav>
  )
}