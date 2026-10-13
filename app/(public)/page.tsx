import type { Metadata } from "next"
import HomeClient from "@/components/public/home/home-client"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Explore GreenRide's electric vehicles, fleet solutions, charging infrastructure and technical support in Kenya.",
  keywords: [
    "GreenRide",
    "electric mobility Kenya",
    "EV sales",
    "charging stations",
    "fleet solutions",
  ],
  openGraph: {
    title: "Electric mobility in Kenya | GreenRide",
    description:
      "Explore GreenRide's electric vehicles, fleet solutions, charging infrastructure and technical support in Kenya.",
    url: "/",
  },
}

export default function Home() {
  return (
    <>
      <HomeClient />
    </>
  )
}
