import type { Metadata } from "next"
import ProductsClient from "@/components/public/products/products-client"
import type { Product } from "@/types/types"

export const metadata: Metadata = {
  title: "Electric mobility products and services",
  description:
    "Explore GreenRide's electric vehicle sales, fleet solutions, charging equipment, infrastructure and technical consultancy.",
  keywords: [
    "GreenRide services",
    "electric vehicles Kenya",
    "EV fleet leasing",
    "charging stations",
    "EV batteries",
    "NTSA registration assistance",
  ],
  openGraph: {
    title: "Products & services | GreenRide",
    description:
      "Electric vehicles, fleet solutions, charging infrastructure and technical support in Kenya.",
    url: "/products",
  },
}

const categories: Product["category"][] = [
  "vehicles",
  "fleet",
  "charging",
  "infrastructure",
  "consultancy",
]

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const category = (await searchParams).category
  const activeCategory =
    typeof category === "string" && categories.includes(category as Product["category"])
      ? (category as Product["category"])
      : "vehicles"

  return <ProductsClient activeCategory={activeCategory} />
}