import Link from "next/link"
import type { NewsCategory } from "@/data/news"

interface NewsTabsProps {
  activeCategory: NewsCategory
}

const TABS: { label: string; slug: NewsCategory }[] = [
  { label: "Sustainable News", slug: "sustainable-news" },
  { label: "Events", slug: "events" },
  { label: "Success Stories", slug: "success-stories" },
]

export function NewsTabs({ activeCategory }: NewsTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200 bg-white py-4 md:gap-8 md:py-6">
      {TABS.map((tab) => {
        const isActive = activeCategory === tab.slug
        return (
          <Link
            key={tab.slug}
            href={`/news?category=${tab.slug}`}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-[#F3D0B4] text-gray-900 shadow-xs"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}
