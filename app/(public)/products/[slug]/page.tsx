import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { productsData } from "@/data/products"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const product = productsData.find(
    (p) =>
      p.slug === resolvedParams.slug ||
      p.slug.toLowerCase() === resolvedParams.slug.toLowerCase()
  )

  if (!product) {
    return {
      title: "Product Not Found",
    }
  }

  return {
    title: product.name,
    description:
      product.description ||
      product.subtitle ||
      `Discover ${product.name} - ${product.category} solution by Donar EV`,
    keywords: [
      product.name,
      product.category,
      "Donar",
      "EV charging",
      "energy storage",
      product.subtitle,
    ],
    openGraph: {
      title: `${product.name} | Donar EV`,
      description:
        product.description ||
        product.subtitle ||
        `Discover ${product.name} - ${product.category} solution by Donar EV`,
      url: `/products/${product.slug}`,
      images: product.imageUrl ? [product.imageUrl[0]] : [],
    },
  }
}
import { ProductParametersTable } from "@/components/public/products/product-parameters-table"
import { ProductImageGallery } from "@/components/public/products/product-image-gallery"
import {
  Network,
  Atom,
  MonitorSmartphone,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
} from "lucide-react"

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const product = productsData.find(
    (p) =>
      p.slug === resolvedParams.slug ||
      p.slug.toLowerCase() === resolvedParams.slug.toLowerCase()
  )

  // Debug logging (remove in production)
  console.log("Requested slug:", resolvedParams.slug)
  console.log(
    "Available slugs:",
    productsData.map((p) => p.slug)
  )
  console.log("Found product:", product?.name || "None")

  if (!product) {
    notFound()
  }

  // Recommended products (excluding current)
  const recommendedProducts = productsData.filter(
    (p) => p.slug !== product.slug
  )

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case "network":
        return <Network className="h-12 w-12 text-[#1D6DF2]" />
      case "atom":
        return <Atom className="h-12 w-12 text-[#1D6DF2]" />
      case "monitor-smartphone":
        return <MonitorSmartphone className="h-12 w-12 text-[#1D6DF2]" />
      case "shield-check":
        return <ShieldCheck className="h-12 w-12 text-[#1D6DF2]" />
      default:
        return <Network className="h-12 w-12 text-[#1D6DF2]" />
    }
  }

  return (
    <div className="flex w-full flex-col bg-white pb-20">
      {/* Hero Section */}
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-[#1D6DF2]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          {/* Left: Dynamic Image Gallery */}
          <div className="flex w-full justify-center md:w-1/2">
            <ProductImageGallery
              images={product.imageUrl}
              name={product.name}
            />
          </div>

          {/* Right: Info */}
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-[#1D6DF2] shadow-2xs">
                {product.category}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-950 lg:text-5xl">
              {product.name}
            </h1>
            <h2 className="text-gray-650 mb-6 text-lg font-medium md:text-xl">
              {product.subtitle}
            </h2>
            {product.description && (
              <p className="max-w-lg text-[15px] leading-relaxed text-gray-600 md:text-base">
                {product.description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Detailed Features Grid */}
      {product.detailedFeatures && product.detailedFeatures.length > 0 && (
        <div className="w-full border-y border-gray-100 bg-gray-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2">
              {product.detailedFeatures.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-6">
                  <div className="shadow-3xs shrink-0 rounded-2xl border border-gray-100 bg-white p-3">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="mb-3 text-xl font-semibold text-[#1D6DF2]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-650 text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Parameters Section */}
      {product.parametersImage && (
        <div className="w-full border-b border-gray-200 bg-gray-100 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <ProductParametersTable parametersImage={product.parametersImage} />
          </div>
        </div>
      )}

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <div className="w-full border-t border-gray-100 bg-white py-20">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-16 text-center text-3xl font-medium text-gray-950">
              Recommended Products
            </h2>

            {/* Cards container with carousel arrows */}
            <div className="flex items-center justify-between gap-4">
              {/* Left arrow */}
              <button
                className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-300 transition-colors hover:text-gray-500 md:flex"
                aria-label="Previous recommended products"
              >
                <ChevronLeft className="h-8 w-8 stroke-[1.5]" />
              </button>

              {/* Recommended cards */}
              <div className="mx-auto grid max-w-4xl flex-1 grid-cols-1 gap-8 md:grid-cols-3">
                {recommendedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xs transition-all duration-300 hover:shadow-md"
                  >
                    {/* Image area */}
                    <div className="relative flex h-56 w-full items-center justify-center bg-white p-8">
                      <img
                        src={p.imageUrl[0]}
                        alt={p.name}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    {/* Bottom bar */}
                    <div className="bg-[#523F2E] py-4 text-center transition-colors duration-300 group-hover:bg-[#1D6DF2]">
                      <span className="text-base font-semibold tracking-wide text-white">
                        {p.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Right arrow */}
              <button
                className="hidden h-10 w-10 cursor-pointer items-center justify-center rounded-full text-gray-300 transition-colors hover:text-gray-500 md:flex"
                aria-label="Next recommended products"
              >
                <ChevronRight className="h-8 w-8 stroke-[1.5]" />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="mt-12 flex justify-center gap-2">
              <div className="h-2.5 w-2.5 rounded-full bg-[#1D6DF2]"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
