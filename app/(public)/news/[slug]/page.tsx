import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, ArrowLeft } from "lucide-react"
import { newsData } from "@/data/news"
import type { Metadata } from "next"
import { NewsCard } from "@/components/public/news/news-card"

interface NewsPageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailsPage({ params }: NewsPageProps) {
  const { slug } = await params
  const article = newsData.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  // Get related articles from the same category (excluding current article)
  const relatedArticles = newsData
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  const categoryLabels: Record<string, string> = {
    "sustainable-news": "Sustainable News",
    events: "Events",
    "success-stories": "Success Stories",
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* ── Back Navigation ────────────────────────────────────────────────── */}
      <div className="bg-[#f5f5f5] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </Link>
        </div>
      </div>

      {/* ── Featured Image Hero ─────────────────────────────────────────────── */}
      <div className="relative h-96 w-full overflow-hidden md:h-[500px]">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* ── Article Content ─────────────────────────────────────────────────── */}
      <div className="flex-1 bg-[#f5f5f5] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Article Header */}
          <div className="mb-8">
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center rounded-full bg-[#F3D0B4] px-3 py-1 font-medium text-gray-900">
                {categoryLabels[article.category] || article.category}
              </span>
              <div className="flex items-center gap-2 text-gray-500">
                <CalendarDays className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
            </div>

            <h1 className="mb-6 text-3xl leading-tight font-semibold text-gray-900 md:text-4xl">
              {article.title}
            </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              {article.excerpt}
            </p>
          </div>

          {/* Article Body */}
          {article.content ? (
            <div className="prose prose-lg max-w-none bg-white p-8 shadow-sm">
              <div className="leading-relaxed whitespace-pre-line text-gray-700">
                {article.content}
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 shadow-sm">
              <p className="text-gray-500">
                Full article content is not available at this time.
              </p>
            </div>
          )}

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((relatedArticle) => (
                  <NewsCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Generate static params for all news articles
export async function generateStaticParams() {
  return newsData.map((article) => ({
    slug: article.slug,
  }))
}

// Generate metadata for each article
export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = newsData.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  const categoryLabels: Record<string, string> = {
    "sustainable-news": "Sustainable News",
    events: "Events",
    "success-stories": "Success Stories",
  }

  return {
    title: article.title,
    description:
      article.excerpt ||
      `Read about ${article.title} - ${categoryLabels[article.category]} from Donar Africa`,
    keywords: [
      article.title,
      article.category,
      "Donar news",
      "sustainable energy",
      "EV charging",
      "green energy",
      categoryLabels[article.category],
    ],
    openGraph: {
      title: article.title,
      description:
        article.excerpt ||
        `Read about ${article.title} - ${categoryLabels[article.category]} from Donar Africa`,
      url: `/news/${article.slug}`,
      images: [article.imageUrl],
      type: "article",
      publishedTime: article.date,
      authors: ["Donar Africa"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  }
}
