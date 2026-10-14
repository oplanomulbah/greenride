"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import type { Language } from "@/types/types";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

interface SlideData {
  id: string;
  category: Record<Language, string>;
  title: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  alt: Record<Language, string>;
  primaryCta: {
    label: Record<Language, string>;
    href: string;
  };
  secondaryCta: {
    label: Record<Language, string>;
    href: string;
  };
}

const slides: SlideData[] = [
  {
    id: "electric-mobility",
    category: {
      en: "Electric Mobility",
      sw: "Usafiri wa Umeme",
      zh: "纯电出行",
    },
    title: {
      en: "Electric, Elevated.",
      sw: "Usafiri wa Umeme, Kwa Ubora.",
      zh: "电动出行，品质升级。",
    },
    description: {
      en: "Quiet comfort, long-range performance, and fast charging for every journey.",
      sw: "Starehe tulivu, safari ndefu na uchaji wa haraka kwa kila safari.",
      zh: "静谧舒适、长续航与快速充电，轻松开启每一程。",
    },
    image: "/scenario-gird/icj4.jpg",
    alt: {
      en: "Silver electric sedan at a modern charging station",
      sw: "Gari la umeme la rangi ya fedha kwenye kituo cha kisasa cha kuchaji",
      zh: "现代充电站旁的银色纯电轿车",
    },
    primaryCta: {
      label: { en: "Explore vehicles", sw: "Chunguza magari", zh: "探索车型" },
      href: "/products?category=vehicles",
    },
    secondaryCta: {
      label: {
        en: "Book a consultation",
        sw: "Panga mashauriano",
        zh: "预约咨询",
      },
      href: "/contact",
    },
  },
  {
    id: "charging-infrastructure",
    category: {
      en: "Charging Infrastructure",
      sw: "Miundombinu ya Kuchaji",
      zh: "充电基础设施",
    },
    title: {
      en: "Powering Every Journey.",
      sw: "Nguvu kwa Kila Safari.",
      zh: "为每一程注入动力。",
    },
    description: {
      en: "End-to-end charging hubs, from site planning to reliable 24/7 operations.",
      sw: "Vituo kamili vya kuchaji, kuanzia upangaji wa eneo hadi huduma ya saa 24.",
      zh: "从场地规划到全天候可靠运营，提供一站式充电枢纽方案。",
    },
    image: "/products/product-hero.jpg",
    alt: {
      en: "Electric vehicles at a multi-bay charging hub",
      sw: "Magari ya umeme kwenye kituo cha kuchaji chenye nafasi nyingi",
      zh: "多车位充电枢纽中的电动汽车",
    },
    primaryCta: {
      label: {
        en: "Explore charging",
        sw: "Chunguza uchaji",
        zh: "了解充电方案",
      },
      href: "/products?category=charging",
    },
    secondaryCta: {
      label: { en: "Plan a station", sw: "Panga kituo", zh: "规划充电站" },
      href: "/contact",
    },
  },
];

const INTRO_VIDEO = "/Electric_car_charging_at_station_20261013213500.mp4";
const INTRO_END_DELAY_MS = 750;
const SLIDE_DURATION_MS = 6500;
const TOTAL_PRESENTATION_SLIDES = slides.length + 1;
const videoSlideLabel: Record<Language, string> = {
  en: "Opening animation",
  sw: "Uhuishaji wa mwanzo",
  zh: "开场动画",
};

export default function HomeHeroSection() {
  const { currentLang } = useLanguage();
  const lang: Language = currentLang || "en";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isVideoSlide = currentIndex === 0;
  const activeSlide = isVideoSlide ? null : slides[currentIndex - 1];

  useEffect(
    () => () => {
      if (videoTimer.current) clearTimeout(videoTimer.current);
    },
    [],
  );

  const nextSlide = useCallback(() => {
    if (videoTimer.current) clearTimeout(videoTimer.current);
    videoTimer.current = null;
    setCurrentIndex((prev) => (prev + 1) % TOTAL_PRESENTATION_SLIDES);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    if (videoTimer.current) clearTimeout(videoTimer.current);
    videoTimer.current = null;
    setCurrentIndex(
      (prev) =>
        (prev - 1 + TOTAL_PRESENTATION_SLIDES) % TOTAL_PRESENTATION_SLIDES,
    );
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (videoTimer.current) clearTimeout(videoTimer.current);
    videoTimer.current = null;
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  const finishVideoSlide = useCallback(() => {
    if (!isVideoSlide || !isPlaying) return;
    if (videoTimer.current) clearTimeout(videoTimer.current);
    videoTimer.current = setTimeout(() => {
      videoTimer.current = null;
      nextSlide();
    }, INTRO_END_DELAY_MS);
  }, [isVideoSlide, isPlaying, nextSlide]);

  useEffect(() => {
    if (isVideoSlide || !isPlaying) return;

    const intervalStep = 50;
    const progressTimer = setInterval(() => {
      setProgress((prev) =>
        Math.min(prev + (100 * intervalStep) / SLIDE_DURATION_MS, 100),
      );
    }, intervalStep);
    const slideTimer = setTimeout(nextSlide, SLIDE_DURATION_MS);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [currentIndex, isVideoSlide, isPlaying, nextSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  useEffect(() => {
    if (!isVideoSlide || !isPlaying) {
      videoRef.current?.pause();
      return;
    }

    const playPromise = videoRef.current?.play();
    playPromise?.catch((error: unknown) => {
      console.error("Unable to play the GreenRide opening video.", error);
    });
  }, [isVideoSlide, isPlaying]);

  useEffect(() => {
    if (!isVideoSlide || !isPlaying) {
      if (videoTimer.current) clearTimeout(videoTimer.current);
      videoTimer.current = null;
    }
  }, [isVideoSlide, isPlaying]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 50) {
        nextSlide();
      } else if (distance < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      id="home-hero-carousel"
      aria-roledescription="carousel"
      aria-label="GreenRide electric mobility showcase"
      className="relative flex h-[85vh] min-h-160 max-h-230 w-full items-end justify-center overflow-hidden bg-slate-950 text-white select-none sm:h-[86vh] md:h-[78vh]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
          >
            {isVideoSlide ? (
              <video
                ref={videoRef}
                aria-hidden="true"
                autoPlay={isPlaying}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                onCanPlay={(event) => {
                  if (!isPlaying) return;
                  event.currentTarget.play().catch((error: unknown) => {
                    console.error(
                      "Unable to play the GreenRide opening video.",
                      error,
                    );
                  });
                }}
                onEnded={finishVideoSlide}
                onError={finishVideoSlide}
                playsInline
                preload="auto"
                src={INTRO_VIDEO}
                tabIndex={-1}
              />
            ) : activeSlide ? (
              <Image
                src={activeSlide.image}
                alt={activeSlide.alt[lang] || activeSlide.alt.en}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            ) : null}
          </motion.div>
        </AnimatePresence>

        {!isVideoSlide && (
          <>
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/65 via-black/55 to-black/35" />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
            <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
          </>
        )}
      </div>

      {!isVideoSlide && activeSlide && (
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-4 sm:space-y-5"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/60 px-3.5 py-1 text-xs font-semibold tracking-wider text-emerald-300 uppercase backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span>
                    {activeSlide.category[lang] || activeSlide.category.en}
                  </span>
                </div>

                <h1 className="font-display text-3xl leading-[1.1] font-extrabold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] sm:text-5xl lg:text-6xl">
                  {activeSlide.title[lang] || activeSlide.title.en}
                </h1>

                <p className="max-w-2xl text-xs leading-relaxed font-normal text-gray-200 sm:text-sm md:text-base">
                  {activeSlide.description[lang] || activeSlide.description.en}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Link
                    href={activeSlide.primaryCta.href}
                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-950/50 transition-all hover:-translate-y-px hover:bg-emerald-500 hover:shadow-emerald-700/40 active:translate-y-0 sm:text-sm"
                  >
                    <span>
                      {activeSlide.primaryCta.label[lang] ||
                        activeSlide.primaryCta.label.en}
                    </span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href={activeSlide.secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:border-white/40 hover:bg-white/20 active:translate-y-0 sm:text-sm"
                  >
                    <span>
                      {activeSlide.secondaryCta.label[lang] ||
                        activeSlide.secondaryCta.label.en}
                    </span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-y-0 right-4 left-4 z-20 hidden items-center justify-between md:flex">
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-emerald-400 hover:bg-black/70 active:scale-95"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-emerald-400 hover:bg-black/70 active:scale-95"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute right-0 bottom-4 left-0 z-20 sm:bottom-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3">
            {[
              videoSlideLabel[lang] || videoSlideLabel.en,
              ...slides.map(
                (slide) => slide.category[lang] || slide.category.en,
              ),
            ].map((label, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}: ${label}`}
                  className="group relative flex cursor-pointer flex-col text-left focus:outline-none"
                >
                  <div className="h-1.5 w-8 overflow-hidden rounded-full bg-white/25 transition-all duration-300 group-hover:bg-white/40 sm:w-16">
                    {isActive && (
                      <div
                        className="h-full rounded-full bg-emerald-400 transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </div>
                  {idx > 0 && (
                    <span className="hidden pt-1 text-[11px] font-medium text-gray-400 transition-colors group-hover:text-white lg:inline-block">
                      0{idx + 1}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold tracking-wider text-gray-300">
              {!isVideoSlide && (
                <>
                  0{currentIndex + 1} <span className="text-gray-500">/</span> 0
                  {TOTAL_PRESENTATION_SLIDES}
                </>
              )}
            </span>

            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/40 text-gray-200 backdrop-blur-md transition-colors hover:border-emerald-400 hover:text-white"
            >
              {isPlaying ? (
                <Pause className="h-3.5 w-3.5" />
              ) : (
                <Play className="h-3.5 w-3.5 pl-0.5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
