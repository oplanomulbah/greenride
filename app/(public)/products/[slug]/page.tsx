import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ProductDetailsClient from "@/components/public/products/product-details-client"
import { productsData } from "@/data/products"
import { translate } from "@/lib/translations"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = productsData.find((item) => item.slug === slug)

  if (!product) return { title: "Service not found" }

  const title = translate("en", product.nameKey)
  const description = translate("en", product.summaryKey)
  return {
    title,
    description,
    keywords: [title, "GreenRide", "electric mobility Kenya"],
    openGraph: {
      title: `${title} | GreenRide`,
      description,
      url: `/products/${product.slug}`,
      images: product.imageUrl,
    },
  }
}

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = productsData.find((item) => item.slug === slug)
  if (!product) notFound()

  const recommendedProducts = productsData
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3)

  return (
    <ProductDetailsClient
      product={product}
      recommendedProducts={recommendedProducts}
    />
  )
}

export async function generateStaticParams() {
  return productsData.map((product) => ({ slug: product.slug }))
}