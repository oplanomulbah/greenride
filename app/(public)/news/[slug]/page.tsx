import { notFound } from "next/navigation"
import type { Metadata } from "next"
import NewsDetailsClient from "@/components/public/news/news-details-client"
import { newsData } from "@/data/news"

interface NewsPageProps {
  params: Promise<{ slug: string }>
}

export default async function NewsDetailsPage({ params }: NewsPageProps) {
  const { slug } = await params
  const article = newsData.find((item) => item.slug === slug)
  if (!article) notFound()

  const relatedArticles = newsData.filter((item) => item.id !== article.id)

  return (
    <NewsDetailsClient
      article={article}
      relatedArticles={relatedArticles.slice(0, 2)}
    />
  )
}

export async function generateStaticParams() {
  return newsData.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params
  const article = newsData.find((item) => item.slug === slug)
  if (!article) return { title: "Insight not found" }

  return {
    title: article.title.en,
    description: article.excerpt.en,
    keywords: [article.title.en, "GreenRide", "electric mobility Kenya"],
    openGraph: {
      title: `${article.title.en} | GreenRide`,
      description: article.excerpt.en,
      url: `/news/${article.slug}`,
      images: [article.imageUrl],
      type: "article",
      authors: ["Greenride Africa Tech Limited"],
    },
  }
}