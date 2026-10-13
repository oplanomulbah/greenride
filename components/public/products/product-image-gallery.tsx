"use client"

import { useState } from "react"
import Image from "next/image"

interface ProductImageGalleryProps {
  images: string[]
  name: string
}

export function ProductImageGallery({ images, name }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="flex h-full min-h-75 w-full items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
        No images available
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="relative flex h-80 w-full items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-xs md:h-112">
        <Image
          src={images[activeIndex]}
          alt={`${name} - view ${activeIndex + 1}`}
          fill
          className="object-contain transition-all duration-500 ease-in-out scale-95 hover:scale-100"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-4 justify-center md:justify-start overflow-x-auto py-2 no-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`relative w-20 h-20 rounded-xl border-2 overflow-hidden p-2 bg-white transition-all duration-200 cursor-pointer ${
                activeIndex === idx
                  ? "border-electric scale-105 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              aria-label={`Show image ${idx + 1}`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`${name} thumbnail ${idx + 1}`}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
