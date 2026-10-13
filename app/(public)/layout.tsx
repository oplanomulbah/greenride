import { Suspense } from "react"
import Navbar from "@/components/layout/public/navbar"
import "../globals.css"
import Footer from "@/components/layout/public/footer"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <Suspense fallback={<div className="h-18 border-b border-gray-100 bg-white" />}>
          <Navbar />
        </Suspense>
        {children}
        <Footer />
      </div>
    </main>
  )
}
