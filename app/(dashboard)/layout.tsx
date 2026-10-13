import "../globals.css"

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <main className="flex min-h-screen flex-col">{children}</main>
}
