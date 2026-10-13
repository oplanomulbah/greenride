import Image from "next/image"
import Link from "next/link"
import type { NewsArticle } from "@/data/news"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

interface NewsCardProps {
  article: NewsArticle
}

/**
 * NewsCard — standard card used for non-featured articles.
 * Image on top, text + CTA below.
 */
export function NewsCard({ article }: NewsCardProps) {
  const { currentLang } = useLanguage()
  return (
    <div className="flex flex-col overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* ── Image ─────────────────────────────────────────────────────── */}
      <div className="relative h-48 w-full overflow-hidden md:h-52">
        <Image
          src={article.imageUrl}
          alt={article.title[currentLang]}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* ── Text Content ──────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-lg leading-snug font-semibold text-gray-900">
          {article.title[currentLang]}
        </h3>
        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
          {article.excerpt[currentLang]}
        </p>

        <Link
          href={`/news/${article.slug}`}
          className="inline-flex w-fit items-center border border-emerald-700 bg-white px-5 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-50"
        >
          {translate(currentLang, "common.learn")}
        </Link>
      </div>
    </div>
  )
}
