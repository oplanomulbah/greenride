import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import type { NewsArticle } from "@/data/news"

interface FeaturedNewsCardProps {
  article: NewsArticle
}

/**
 * FeaturedNewsCard — the large, split-layout card used for the first/featured
 * story in each news category. Left side: title, date, excerpt & CTA button.
 * Right side: full-bleed image.
 */
export function FeaturedNewsCard({ article }: FeaturedNewsCardProps) {
  return (
    <div className="grid grid-cols-1 overflow-hidden bg-white shadow-sm md:grid-cols-2">
      {/* ── Left: Text Content ─────────────────────────────────────────── */}
      <div className="flex flex-col justify-center p-8 md:p-10">
        <h2 className="mb-4 text-xl leading-snug font-semibold text-gray-900 md:text-2xl">
          {article.title}
        </h2>

        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays className="h-4 w-4 shrink-0 text-gray-400" />
          <span>{article.date}</span>
        </div>

        <p className="mb-8 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {article.excerpt}
        </p>

        <Link
          href={`/news/${article.slug}`}
          className="inline-flex w-fit items-center border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
        >
          Learn More
        </Link>
      </div>

      {/* ── Right: Image ───────────────────────────────────────────────── */}
      <div className="relative h-64 w-full md:h-auto md:min-h-[320px]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  )
}
