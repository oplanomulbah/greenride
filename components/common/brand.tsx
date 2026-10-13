import Link from "next/link"
import { Plug } from "lucide-react"

export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="GreenRide home" className="group inline-flex items-center gap-2">
      <span className="flex size-9 items-center justify-center bg-emerald-700 text-white transition-colors group-hover:bg-emerald-800">
        <Plug className="size-5" aria-hidden="true" />
      </span>
      <span className={`font-sans text-xl font-bold ${inverse ? "text-white" : "text-gray-950"}`}>
        Green<span className={inverse ? "text-emerald-200" : "text-emerald-700"}>Ride</span>
      </span>
    </Link>
  )
}