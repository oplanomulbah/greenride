"use client"

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from "react"
import type { ReactNode } from "react"
import type { Language } from "@/types/types"

interface LanguageContextType {
  currentLang: Language
  setCurrentLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
const LANGUAGE_EVENT = "greenride-language-change"

function getLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "en"
  const savedLanguage = localStorage.getItem("app-language")
  return savedLanguage === "sw" || savedLanguage === "zh" ? savedLanguage : "en"
}

function subscribeToLanguage(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === "app-language") onStoreChange()
  }
  window.addEventListener(LANGUAGE_EVENT, onStoreChange)
  window.addEventListener("storage", handleStorage)
  return () => {
    window.removeEventListener(LANGUAGE_EVENT, onStoreChange)
    window.removeEventListener("storage", handleStorage)
  }
}

function getServerLanguageSnapshot(): Language {
  return "en"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const currentLang = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot
  )

  useEffect(() => {
    document.documentElement.lang = currentLang
  }, [currentLang])

  const setCurrentLang = (lang: Language) => {
    localStorage.setItem("app-language", lang)
    window.dispatchEvent(new Event(LANGUAGE_EVENT))
  }

  return (
    <LanguageContext.Provider value={{ currentLang, setCurrentLang }}>
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
