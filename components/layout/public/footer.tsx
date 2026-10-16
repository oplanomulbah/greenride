"use client";

import Link from "next/link";
import Brand from "@/components/common/brand";
import { useLanguage } from "@/contexts/language-context";
import { translate } from "@/lib/translations";
import Image from "next/image";

const footerLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.products", href: "/products" },
  { key: "nav.about", href: "/about" },
  { key: "nav.news", href: "/news" },
  { key: "nav.contact", href: "/contact" },
];

export default function Footer() {
  const { currentLang } = useLanguage();
  const t = (key: string) => translate(currentLang, key);

  return (
    <footer className="bg-emerald-950 text-white" id="global-footer">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <Brand inverse />
          <p className="mt-5 max-w-md text-sm font-semibold text-emerald-100">
            {t("footer.tagline")}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-emerald-50/80">
            {t("footer.description")}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">GreenRide</h2>
            <ul className="space-y-3 text-sm text-emerald-50/80">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">
              {t("nav.contact")}
            </h2>
            <a
              className="text-sm text-emerald-50/80 transition-colors hover:text-white"
              href="mailto:info@donargreenride.com"
            >
              info@donargreenride.com
            </a>
            <p className="mt-3 text-sm text-emerald-50/80">
              {t("common.location")}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-5 text-center text-xs text-emerald-100/80 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Greenride Africa Tech Limited
      </div>
    </footer>
  );
}
