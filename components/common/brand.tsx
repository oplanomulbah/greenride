import Link from "next/link";
import Image from "next/image";

export default function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="GreenRide home"
      className={`group relative inline-flex h-9 w-40 overflow-hidden bg-transparent md:h-10 md:w-44 ${inverse ? "shadow-sm" : ""}`}
    >
      <Image
        src="/logo-removebg.png"
        alt="GreenRide logo"
        fill
        sizes="176px"
        className="object-cover"
      />
    </Link>
  );
}
