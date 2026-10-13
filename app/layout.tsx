import { Geist, Geist_Mono, Lora } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const lora = Lora({ subsets: ["latin"], variable: "--font-serif" })

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Donar EV - Empowering Communities Through Innovation",
    template: "%s | Donar EV",
  },
  description:
    "Donar EV is dedicated to empowering communities across EV through innovative solutions, sustainable development, and collaborative partnerships.",
  keywords: [
    "Donar EV",
    "Africa development",
    "community empowerment",
    "sustainable development",
    "innovation",
    "social impact",
    "electric",
    "electric vehicle",
    "electricity",
  ],
  icons: {
    icon: "/scenario-gird/logo.png",
  },
  authors: [{ name: "Donar EV" }],
  creator: "Donar EV",
  publisher: "Donar EV",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://donarafrica.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Donar EV",
    title: "Donar EV - Empowering Communities Through Innovation",
    description:
      "Donar EV is dedicated to empowering communities across EV through innovative solutions, sustainable development, and collaborative partnerships.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Donar EV - Empowering Communities Through Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donar EV - Empowering Communities Through Innovation",
    description:
      "Donar EV is dedicated to empowering communities across EV through innovative solutions, sustainable development, and collaborative partnerships.",
    images: ["/og-image.jpg"],
    creator: "@donarev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  //   yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        fontMono.variable,
        "font-serif",
        lora.variable
      )}
    >
      <body>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
