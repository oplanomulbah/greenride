import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import type { NewsArticle } from "@/data/news"

interface NewsCardProps {
  article: NewsArticle
}

/**
 * NewsCard — standard card used for non-featured articles.
 * Image on top, text + CTA below.
 */
export function NewsCard({ article }: NewsCardProps) {
  return (
    <div className="flex flex-col overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      {/* ── Image ─────────────────────────────────────────────────────── */}
      <div className="relative h-48 w-full overflow-hidden md:h-52">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* ── Text Content ──────────────────────────────────────────────── */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-lg leading-snug font-semibold text-gray-900">
          {article.title}
        </h3>

        <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays className="h-4 w-4 shrink-0 text-gray-400" />
          <span>{article.date}</span>
        </div>

        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
          {article.excerpt}
        </p>

        <Link
          href={`/news/${article.slug}`}
          className="inline-flex w-fit items-center border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 hover:text-gray-900"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
