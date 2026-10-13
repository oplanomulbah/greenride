import { useLanguage } from "@/contexts/language-context"
import React from "react"
import { motion } from "motion/react"
import { translate } from "@/lib/translations"

export default function HomeHeroSection() {
  const { currentLang } = useLanguage()
  const heroTitle = translate(currentLang, "home.hero")
  return (
    <div
      className="relative flex h-[60vh] w-full items-end justify-center overflow-hidden sm:h-[75vh] md:h-[80vh]"
      id="hero-banner"
    >
      {/* Hero Image */}
      <img
        src="/home-hero.jpg"
        alt="Electric vehicle charging infrastructure"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Soft elegant gradient overlays to guarantee perfect contrast */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/15"></div>

      {/* Hero Title Overlay - Aligned exactly as the reference near the bottom */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 text-center select-none sm:pb-16 md:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-[34px] leading-tight font-extrabold tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] sm:text-[48px] md:text-[64px] lg:text-[76px]"
          id="hero-header-text"
        >
          {heroTitle}
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-6 h-1.5 rounded-full bg-electric shadow-lg"
        ></motion.div>
      </div>
    </div>
  )
}
