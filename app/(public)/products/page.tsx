import type { Metadata } from "next"
import Image from "next/image"
import { productsData } from "@/data/products"

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Donar's comprehensive range of EV charging solutions, energy storage systems, and smart management platforms. From AC/DC charging stations to intelligent energy storage systems.",
  keywords: [
    "Donar products",
    "EV charging stations",
    "AC charging",
    "DC charging",
    "energy storage systems",
    "ESS",
    "charging platforms",
    "smart charging",
  ],
  openGraph: {
    title: "Products | Donar Africa",
    description:
      "Explore Donar's comprehensive range of EV charging solutions, energy storage systems, and smart management platforms. From AC/DC charging stations to intelligent energy storage systems.",
    url: "/products",
  },
}
import { ProductTabs } from "@/components/public/products/product-tabs"
import { ProductCard } from "@/components/public/products/product-card"
import { Plug } from "lucide-react"

const CATEGORY_MAP: Record<string, { label: string; description: string }> = {
  "ac-charging": {
    label: "AC Charging",
    description:
      "provide a convenient way to add up to 40 miles of range per hour to electric vehicles. Every day, millions of EV drivers count on AC charging to fuel up where they spend most of their time — at home, at work and around town.",
  },
  "dc-charging": {
    label: "DC Charging",
    description:
      "Fast charging solutions for electric vehicles, delivering high power output to significantly reduce charging times. Ideal for highway stations, commercial fleets, and rapid charging hubs.",
  },
  ess: {
    label: "ESS",
    description:
      "Smart energy storage solutions designed to store electricity from the grid or renewable sources. Optimize power usage, reduce peak demand charges, and ensure backup power when you need it.",
  },
  platform: {
    label: "Platform",
    description:
      "Comprehensive software and management platforms to monitor, manage, and optimize your charging stations and energy systems in real-time.",
  },
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams
  const categoryParam = resolvedParams.category

  const activeCategorySlug =
    typeof categoryParam === "string" && CATEGORY_MAP[categoryParam]
      ? categoryParam
      : "ac-charging"

  const currentCategoryInfo = CATEGORY_MAP[activeCategorySlug]

  const filteredProducts = productsData.filter(
    (product) =>
      product.category.toLowerCase().replace(/\s+/g, "-") === activeCategorySlug
  )

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50 pb-20">
      {/* Hero Banner */}
      <div className="relative h-[60vh] w-full overflow-hidden bg-gray-900">
        <Image
          src="/products/product-hero.jpeg"
          alt="Products Hero"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto -mt-8 w-full max-w-7xl rounded-t-3xl bg-white px-4 pt-8 shadow-sm sm:px-6 lg:px-8">
        <ProductTabs activeCategory={activeCategorySlug} />

        <div className="mx-auto mb-16 max-w-4xl text-center md:text-left">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900">
            {currentCategoryInfo.label}
          </h2>
          <p className="leading-relaxed text-gray-600">
            {currentCategoryInfo.description}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 pb-16 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="border-gray-250 mx-auto mb-16 flex max-w-2xl flex-col items-center justify-center rounded-2xl border border-dashed px-4 py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-[#1D6DF2]">
              <Plug className="h-8 w-8 stroke-[1.5]" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              No products found
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              We do not have any products listed under the{" "}
              {currentCategoryInfo.label} category at this time. Please browse
              our other categories.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
