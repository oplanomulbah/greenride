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
    default: "GreenRide | Electric Mobility in Kenya",
    template: "%s | GreenRide",
  },
  description:
    "GreenRide makes electric mobility accessible in Kenya with EV sales, fleet solutions, charging infrastructure and technical support.",
  keywords: [
    "GreenRide",
    "electric vehicles Kenya",
    "electric mobility",
    "EV charging Kenya",
    "fleet leasing",
    "charging infrastructure",
  ],
  authors: [{ name: "Greenride Africa Tech Limited" }],
  creator: "Greenride Africa Tech Limited",
  publisher: "Greenride Africa Tech Limited",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "/",
    siteName: "GreenRide",
    title: "GreenRide | Electric Mobility in Kenya",
    description:
      "GreenRide makes electric mobility accessible in Kenya with EV sales, fleet solutions, charging infrastructure and technical support.",
    images: [
      {
        url: "/contact_nbanner.jpeg",
        alt: "Electric mobility and charging infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenRide | Electric Mobility in Kenya",
    description:
      "GreenRide makes electric mobility accessible in Kenya with EV sales, fleet solutions, charging infrastructure and technical support.",
    images: ["/contact_nbanner.jpeg"],
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
