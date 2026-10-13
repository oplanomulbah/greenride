import type { Metadata } from "next"
import NewsListingClient from "@/components/public/news/news-listing-client"
import type { NewsCategory } from "@/data/news"

export const metadata: Metadata = {
  title: "Electric mobility insights",
  description:
    "Practical GreenRide guidance on choosing electric vehicles, planning charging and transitioning a fleet in Kenya.",
  keywords: ["GreenRide insights", "electric mobility", "EV charging Kenya", "electric fleets"],
  openGraph: {
    title: "Electric mobility insights | GreenRide",
    description:
      "Guidance on EV selection, charging infrastructure and fleet transitions.",
    url: "/news",
  },
}

const categories: NewsCategory[] = ["vehicles", "charging", "fleet"]

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const category = (await searchParams).category
  const activeCategory =
    typeof category === "string" && categories.includes(category as NewsCategory)
      ? (category as NewsCategory)
      : "vehicles"

  return <NewsListingClient activeCategory={activeCategory} />
}