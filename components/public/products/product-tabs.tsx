import Link from "next/link"

interface ProductTabsProps {
  activeCategory?: string
}

const TABS = [
  { label: "AC Charging", slug: "ac-charging" },
  { label: "DC Charging", slug: "dc-charging" },
  { label: "ESS", slug: "ess" },
  { label: "Platform", slug: "platform" },
]

export function ProductTabs({ activeCategory = "ac-charging" }: ProductTabsProps) {
  return (
    <div className="flex justify-center flex-wrap gap-4 md:gap-8 py-6 mb-12 border-b border-gray-100">
      {TABS.map((tab) => {
        const isActive = activeCategory === tab.slug
        return (
          <Link
            key={tab.slug}
            href={`/products?category=${tab.slug}`}
            className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-[#F3D0B4] text-gray-900 shadow-xs scale-105"
                : "text-gray-950 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </Link>
        )
      })}
    </div>
  )
}
