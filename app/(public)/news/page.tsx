import type { Metadata } from "next"
import HeroSection from "@/components/common/hero-section"

export const metadata: Metadata = {
  title: "News",
  description:
    "Stay updated with Donar's latest news, events, success stories, and sustainable development initiatives. Discover our impact on communities and the green energy sector.",
  keywords: [
    "Donar news",
    "EV charging news",
    "sustainable energy",
    "green energy updates",
    "success stories",
    "events",
    "community impact",
  ],
  openGraph: {
    title: "News | Donar EV",
    description:
      "Stay updated with Donar's latest news, events, success stories, and sustainable development initiatives. Discover our impact on communities and the green energy sector.",
    url: "/news",
  },
}
import { NewsTabs } from "@/components/public/news/news-tabs"
import { FeaturedNewsCard } from "@/components/public/news/featured-news-card"
import { NewsCard } from "@/components/public/news/news-card"
import { newsData, type NewsCategory } from "@/data/news"

const VALID_CATEGORIES: NewsCategory[] = [
  "sustainable-news",
  "events",
  "success-stories",
]

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedParams = await searchParams
  const categoryParam = resolvedParams.category

  const activeCategory: NewsCategory =
    typeof categoryParam === "string" &&
    VALID_CATEGORIES.includes(categoryParam as NewsCategory)
      ? (categoryParam as NewsCategory)
      : "success-stories"

  // Filter articles by active category
  const categoryArticles = newsData.filter(
    (article) => article.category === activeCategory
  )

  // The featured article is the one marked isFeatured (or the first in the list)
  const featuredArticle =
    categoryArticles.find((a) => a.isFeatured) ?? categoryArticles[0]

  // Remaining articles go into the standard grid below
  const remainingArticles = categoryArticles.filter(
    (a) => a.id !== featuredArticle?.id
  )

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* ── Hero Banner ────────────────────────────────────────────────── */}
      <HeroSection
        title="News"
        image="/news_banner.jpeg"
        description="Stay connected with our latest updates."
      />

      {/* ── Tab Bar ────────────────────────────────────────────────────── */}
      <NewsTabs activeCategory={activeCategory} />

      {/* ── Content Area ───────────────────────────────────────────────── */}
      <div className="flex-1 bg-[#f5f5f5] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {categoryArticles.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-lg font-medium text-gray-500">
                No articles found in this category.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <FeaturedNewsCard article={featuredArticle} />
              )}

              {/* Standard Article Grid — 2 columns */}
              {remainingArticles.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {remainingArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
