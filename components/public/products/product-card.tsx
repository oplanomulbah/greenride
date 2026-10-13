"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Product } from "@/types/types"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = "" }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)
  const images = product.imageUrl || []

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (images.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  return (
    <div
      className={`group/card relative flex flex-col border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-2xs">
          {t(`catalog.${product.category}`)}
        </span>
      </div>

      <h3 className="mt-4 mb-6 text-center text-xl font-semibold text-gray-950">
        {t(product.nameKey)}
      </h3>

      {/* Image Carousel Area */}
      <div className="group/carousel relative mb-4 flex h-48 w-full items-center justify-center overflow-hidden rounded-lg">
        {images.length > 0 ? (
          <Image
            src={images[currentImageIndex]}
            alt={`${t(product.nameKey)} - image ${currentImageIndex + 1}`}
            fill
            className="scale-95 object-contain transition-all duration-500 ease-in-out hover:scale-100"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={product.id === 1}
          />
        ) : (
          <div className="text-gray-450 text-sm">No image available</div>
        )}

        {/* Carousel controls - visible on hover */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/80 text-gray-700 opacity-0 shadow-md transition-all duration-200 group-hover/carousel:opacity-100 hover:bg-white hover:text-electric"
              aria-label={t("common.previousImage")}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/80 text-gray-700 opacity-0 shadow-md transition-all duration-200 group-hover/carousel:opacity-100 hover:bg-white hover:text-electric"
              aria-label={t("common.nextImage")}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Dynamic Pagination dots */}
      {images.length > 1 && (
        <div className="mb-6 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentImageIndex(index)
              }}
              className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-200 ${
                index === currentImageIndex
                  ? "scale-125 bg-electric shadow-2xs"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`${t("common.slide")} ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Spacing if only one or no images */}
      {images.length <= 1 && <div className="mb-6 h-[10px]"></div>}

      <p className="mb-8 flex-1 text-sm leading-relaxed text-gray-600">
        {t(product.summaryKey)}
      </p>

      <Link
        href={`/products/${product.slug}`}
        className="group/link mt-auto inline-flex items-center text-sm font-semibold text-electric transition-colors hover:text-emerald-800"
      >
        {t("common.discover")}
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  )
}
