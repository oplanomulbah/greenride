import type { Metadata } from "next"
import ContactClient from "@/components/public/contact/contact-clinet"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact GreenRide in Nairobi about electric vehicles, fleet solutions, charging infrastructure and technical consultancy.",
  keywords: [
    "GreenRide contact",
    "electric mobility Kenya",
    "EV charging",
    "fleet leasing",
  ],
  openGraph: {
    title: "Contact GreenRide",
    description: "Contact GreenRide in Nairobi about electric mobility solutions.",
    url: "/contact",
  },
}

export default function ContactPage() {
  return <ContactClient />
}
