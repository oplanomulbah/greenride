"use client"

import HeroSection from "@/components/common/hero-section"
import { FeaturedNewsCard } from "@/components/public/news/featured-news-card"
import { NewsCard } from "@/components/public/news/news-card"
import { NewsTabs } from "@/components/public/news/news-tabs"
import type { NewsCategory } from "@/data/news"
import { newsData } from "@/data/news"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

export default function NewsListingClient({
  activeCategory,
}: {
  activeCategory: NewsCategory
}) {
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)
  const categoryArticles = newsData.filter(
    (article) => article.category === activeCategory
  )
  const [featuredArticle, ...remainingArticles] = categoryArticles

  return (
    <div className="flex min-h-screen w-full flex-col">
      <HeroSection
        title={t("nav.news")}
        image="/products/product-hero.jpg"
        description={t("common.insightsIntro")}
      />
      <NewsTabs activeCategory={activeCategory} />
      <div className="flex-1 bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6">
          {featuredArticle ? (
            <>
              <FeaturedNewsCard article={featuredArticle} />
              {remainingArticles.length > 0 && (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {remainingArticles.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="py-24 text-center text-lg font-medium text-gray-500">
              {t("common.noArticles")}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}