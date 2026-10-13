"use client"

import Image from "next/image"
import { Plug } from "lucide-react"
import { ProductCard } from "@/components/public/products/product-card"
import { ProductTabs } from "@/components/public/products/product-tabs"
import { useLanguage } from "@/contexts/language-context"
import { productsData } from "@/data/products"
import { translate } from "@/lib/translations"
import type { Product } from "@/types/types"

interface ProductsClientProps {
  activeCategory: Product["category"]
}

export default function ProductsClient({ activeCategory }: ProductsClientProps) {
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)
  const categoryProducts = productsData.filter(
    (product) => product.category === activeCategory
  )

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50 pb-20">
      <section className="relative flex h-[42vh] min-h-72 items-end overflow-hidden bg-emerald-950 md:h-[52vh]">
        <Image
          src="/products/product-hero.jpg"
          alt="An electric vehicle connected to charging equipment"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/80 via-gray-950/35 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-12 sm:px-8 md:pb-16">
          <p className="mb-3 text-sm font-semibold tracking-[0.12em] text-emerald-200 uppercase">
            GreenRide
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-semibold text-white md:text-5xl">
            {t("nav.products")}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">
            {t("common.catalogIntro")}
          </p>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-4 w-full max-w-7xl bg-white px-4 pt-5 shadow-sm sm:px-6 lg:px-8">
        <ProductTabs activeCategory={activeCategory} />
        <div className="mx-auto mb-12 max-w-4xl text-center md:text-left">
          <h2 className="mb-4 text-2xl font-semibold text-gray-950">
            {t(`catalog.${activeCategory}`)}
          </h2>
          <p className="leading-relaxed text-gray-600">
            {t(`catalog.description.${activeCategory}`)}
          </p>
        </div>

        {categoryProducts.length > 0 ? (
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 pb-16 md:grid-cols-2 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center justify-center border border-dashed border-gray-300 px-4 py-20 text-center">
            <div className="mb-4 flex size-14 items-center justify-center bg-emerald-50 text-emerald-700">
              <Plug className="size-7" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {t("common.noProducts")}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-gray-500">
              {t("common.reachOut")}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}