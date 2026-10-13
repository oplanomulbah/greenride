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
    const savedLang = localStorage.getItem("app-language") as Language | null
    if (savedLang && ["en", "sw", "zh"].includes(savedLang)) {
      setCurrentLangState(savedLang)
      document.documentElement.lang = savedLang
    } else {
      localStorage.setItem("app-language", "en")
      document.documentElement.lang = "en"
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
