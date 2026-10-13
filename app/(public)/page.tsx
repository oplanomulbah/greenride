import type { Metadata } from "next"
import HomeClient from "@/components/public/home/home-client"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Donar EV. Discover our innovative solutions for community empowerment, sustainable development, and collaborative partnerships across the African continent.",
  keywords: [
    "Donar EV",
    "Africa development",
    "community empowerment",
    "home",
    "sustainable development",
    "electric",
    "electricity",
  ],
  openGraph: {
    title: "Home | Donar EV",
    description:
      "Welcome to Donar EV. Discover our innovative solutions for community empowerment, sustainable development, and collaborative partnerships across the African continent.",
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
