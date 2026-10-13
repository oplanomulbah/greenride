import type { Metadata } from "next"
import DonarContactClient from "@/components/public/contact/contact-clinet"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Donar EV. Contact us for inquiries about EV charging solutions, energy storage systems, partnership opportunities, or any questions about our products and services.",
  keywords: [
    "Donar contact",
    "EV charging solutions",
    "contact form",
    "customer support",
    "partnership",
    "energy storage",
  ],
  openGraph: {
    title: "Contact Us | Donar EV",
    description:
      "Get in touch with Donar EV. Contact us for inquiries about EV charging solutions, energy storage systems, partnership opportunities, or any questions about our products and services.",
    url: "/contact",
  },
}

export default function DonarContact() {
  return <DonarContactClient />
}
