"use client"

import Link from "next/link"
import type { NewsCategory } from "@/data/news"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

interface NewsTabsProps {
  activeCategory: NewsCategory
}

const tabs: NewsCategory[] = ["vehicles", "charging", "fleet"]

export function NewsTabs({ activeCategory }: NewsTabsProps) {
  const { currentLang } = useLanguage()
  return (
    <nav aria-label="Insight categories" className="flex flex-wrap justify-center gap-2 border-b border-gray-200 bg-white py-4 md:gap-8 md:py-6">
      {tabs.map((category) => (
        <Link
          key={category}
          href={`/news?category=${category}`}
          aria-current={category === activeCategory ? "page" : undefined}
          className={`px-5 py-2 text-sm font-medium transition-colors ${
            category === activeCategory
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