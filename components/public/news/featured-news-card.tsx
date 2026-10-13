import Image from "next/image"
import Link from "next/link"
import type { NewsArticle } from "@/data/news"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

interface FeaturedNewsCardProps {
  article: NewsArticle
}

/**
 * FeaturedNewsCard — the large, split-layout card used for the first/featured
 * story in each news category. Left side: title, date, excerpt & CTA button.
 * Right side: full-bleed image.
 */
export function FeaturedNewsCard({ article }: FeaturedNewsCardProps) {
  const { currentLang } = useLanguage()
  return (
    <div className="grid grid-cols-1 overflow-hidden bg-white shadow-sm md:grid-cols-2">
      {/* ── Left: Text Content ─────────────────────────────────────────── */}
      <div className="flex flex-col justify-center p-8 md:p-10">
        <h2 className="mb-4 text-xl leading-snug font-semibold text-gray-900 md:text-2xl">
          {article.title[currentLang]}
        </h2>

        <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {article.excerpt[currentLang]}
        </p>

        <Link
          href={`/news/${article.slug}`}
          className="inline-flex w-fit items-center border border-emerald-700 bg-white px-5 py-2 text-sm font-medium text-emerald-800 transition-colors hover:bg-emerald-50"
        >
          {translate(currentLang, "common.learn")}
        </Link>
      </div>

      {/* ── Right: Image ───────────────────────────────────────────────── */}
      <div className="relative h-64 w-full md:h-auto md:min-h-80">
        <Image
          src={article.imageUrl}
          alt={article.title[currentLang]}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  )
}
