"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { ProductImageGallery } from "@/components/public/products/product-image-gallery"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"
import type { Product } from "@/types/types"

interface ProductDetailsClientProps {
  product: Product
  recommendedProducts: Product[]
}

export default function ProductDetailsClient({
  product,
  recommendedProducts,
}: ProductDetailsClientProps) {
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)
  const name = t(product.nameKey)

  return (
    <div className="flex w-full flex-col bg-white pb-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-800"
        >
          <ArrowLeft className="size-4" />
          {t("common.back")}
        </Link>

        <div className="flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          <div className="flex w-full justify-center md:w-1/2">
            <ProductImageGallery images={product.imageUrl} name={name} />
          </div>
          <div className="flex w-full flex-col justify-center md:w-1/2">
            <span className="mb-4 inline-flex w-fit border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
              {t(`catalog.${product.category}`)}
            </span>
            <h1 className="mb-5 text-3xl leading-tight font-semibold text-gray-950 lg:text-4xl">
              {name}
            </h1>
            <p className="mb-8 max-w-lg text-base leading-7 text-gray-600">
              {t(product.summaryKey)}
            </p>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
            >
              {t("common.serviceContact")}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>

      {recommendedProducts.length > 0 && (
        <section className="border-t border-gray-100 bg-emerald-50/50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-semibold text-gray-950">
              {t("common.recommended")}
            </h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {recommendedProducts.map((recommended) => (
                <Link
                  key={recommended.slug}
                  href={`/products/${recommended.slug}`}
                  className="group border border-gray-200 bg-white p-5 transition-colors hover:border-emerald-700"
                >
                  <span className="mb-2 block text-xs font-semibold text-emerald-700">
                    {t(`catalog.${recommended.category}`)}
                  </span>
                  <span className="font-semibold text-gray-900 group-hover:text-emerald-800">
                    {t(recommended.nameKey)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}