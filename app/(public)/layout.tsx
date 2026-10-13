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
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  )
}
