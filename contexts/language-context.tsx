"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { Language } from "@/types/types"

interface LanguageContextType {
  currentLang: Language
  setCurrentLang: (lang: Language) => void
  isLoaded: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLangState] = useState<Language>("en")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 1. Check localStorage first
    const savedLang = localStorage.getItem("app-language") as Language | null
    if (savedLang && (savedLang === "en" || savedLang === "zh")) {
      setCurrentLangState(savedLang)
      document.documentElement.lang = savedLang
    } else {
      // 2. Fall back to browser's default language
      const browserLang = navigator.language
      const defaultLang = browserLang.startsWith("zh") ? "zh" : "en"
      setCurrentLangState(defaultLang)
      document.documentElement.lang = defaultLang
      localStorage.setItem("app-language", defaultLang)
    }
    setIsLoaded(true)
  }, [])

  const setCurrentLang = (lang: Language) => {
    setCurrentLangState(lang)
    localStorage.setItem("app-language", lang)
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang, isLoaded }}>
      {/* 
        We render children even if not loaded, relying on Next.js suppressHydrationWarning 
        which you already have on the <html> tag. The text might flash if the browser 
        language differs from the default SSR language ("en"), but it's better than blocking rendering.
      */}
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
