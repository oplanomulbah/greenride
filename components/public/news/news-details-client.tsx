"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { NewsCard } from "@/components/public/news/news-card"
import type { NewsArticle } from "@/data/news"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

interface NewsDetailsClientProps {
  article: NewsArticle
  relatedArticles: NewsArticle[]
}

export default function NewsDetailsClient({
  article,
  relatedArticles,
}: NewsDetailsClientProps) {
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="bg-gray-50 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-800"
          >
            <ArrowLeft className="size-4" />
            {t("common.backInsights")}
          </Link>
        </div>
      </div>

      <div className="relative h-72 w-full overflow-hidden md:h-110">
        <Image
          src={article.imageUrl}
          alt={article.title[currentLang]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-950/60 via-transparent to-transparent" />
      </div>

      <div className="flex-1 bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-4xl">
          <span className="mb-5 inline-flex border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800">
            {t(`catalog.${article.category}`)}
          </span>
          <h1 className="mb-5 text-3xl leading-tight font-semibold text-gray-950 md:text-4xl">
            {article.title[currentLang]}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-600">
            {article.excerpt[currentLang]}
          </p>
          <div className="bg-white p-6 shadow-sm md:p-10">
            <div className="leading-8 whitespace-pre-line text-gray-700">
              {article.content[currentLang]}
            </div>
          </div>

          {relatedArticles.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-6 text-2xl font-semibold text-gray-950">
                {t("common.related")}
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {relatedArticles.map((related) => (
                  <NewsCard key={related.id} article={related} />
                ))}
              </div>
            </section>
          )}
        </article>
      </div>
    </div>
  )
}