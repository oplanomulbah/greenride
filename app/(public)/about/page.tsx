import DonarAboutClient from "@/components/public/about/about-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Donar - a professional EV charging ecology solution provider integrating R&D, production, sales, and service. Discover our innovative green energy solutions and global impact.",
  keywords: [
    "Donar",
    "EV charging",
    "green energy",
    "sustainable energy",
    "charging stations",
    "solar storage",
    "about Donar",
  ],
  openGraph: {
    title: "About Us | Donar Africa",
    description:
      "Learn about Donar - a professional EV charging ecology solution provider integrating R&D, production, sales, and service. Discover our innovative green energy solutions and global impact.",
    url: "/about",
  },
}

export default function DonarAboutPage() {
  return <DonarAboutClient />
}
