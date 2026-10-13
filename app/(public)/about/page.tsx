import AboutClient from "@/components/public/about/about-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Greenride Africa Tech Limited, its mission, vision, values and electric mobility services across Kenya.",
  keywords: [
    "GreenRide",
    "electric mobility Kenya",
    "electric vehicles",
    "EV charging",
    "fleet solutions",
  ],
  openGraph: {
    title: "About GreenRide",
    description: "Learn about GreenRide's mission, vision and electric mobility services.",
    url: "/about",
  },
}

export default function AboutPage() {
  return <AboutClient />
}
