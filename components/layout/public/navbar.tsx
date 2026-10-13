"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { NavItem } from "@/types/types"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const { currentLang, setCurrentLang, isLoaded } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(
    null
  )
  const dropdownRefRef = useRef<HTMLDivElement | null>(null)

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRefRef.current &&
        !dropdownRefRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navItems: NavItem[] =
    currentLang === "en"
      ? [
          { label: "Solutions", href: "/" },
          {
            label: "Products",
            href: "/products",
            dropdownItems: [
              { label: "AC Charging", href: "products?category=ac-charging" },
              { label: "DC Charging", href: "products?category=dc-charging" },
              { label: "ESS", href: "products?category=ess" },
              { label: "Platform", href: "products?category=platform" },
            ],
          },
          { label: "About us", href: "/about" },
          { label: "Contact us", href: "/contact" },
          {
            label: "News",
            href: "/news",
            dropdownItems: [
              {
                label: "Sustainable News",
                href: "news?category=sustainable-news",
              },
              { label: "Events", href: "news?category=events" },
              {
                label: "Success Stories",
                href: "news?category=success-stories",
              },
            ],
          },
        ]
      : [
          { label: "解决方案", href: "/" },
          {
            label: "产品中心",
            href: "/products",
            dropdownItems: [
              {
                label: "交流充电桩 (AC)",
                href: "products?category=ac-charging",
              },
              {
                label: "直流充电桩 (DC)",
                href: "products?category=dc-charging",
              },
              { label: "储能系统 (ESS)", href: "products?category=ess" },
              { label: "管理平台", href: "products?category=platform" },
            ],
          },
          { label: "关于我们", href: "/about" },
          { label: "联系我们", href: "/contact" },
          {
            label: "新闻动态",
            href: "/news",
            dropdownItems: [
              {
                label: "可持续发展新闻",
                href: "news?category=sustainable-news",
              },
              { label: "企业活动", href: "news?category=events" },
              { label: "成功案例", href: "news?category=success-stories" },
            ],
          },
        ]

  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-xs"
      id="nav-container"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="group flex items-center gap-1"
              id="nav-logo"
            >
              <div className="relative h-8 w-20 transition-transform group-hover:scale-105 md:h-10 md:w-28">
                <Image
                  src="/scenario-gird/logo.png"
                  alt="Donar Logo"
                  fill
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden items-center space-x-10 md:flex">
            {navItems.map((item) => {
              const hasDropdown = !!item.dropdownItems
              const isOpen = activeDropdown === item.label

              return (
                <div
                  key={item.label}
                  className="group relative py-2"
                  onMouseEnter={() =>
                    hasDropdown && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 py-1 text-base font-medium transition-colors duration-150 ${
                      isOpen
                        ? "font-semibold text-electric"
                        : "text-gray-700 hover:text-electric"
                    }`}
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-250 ${isOpen ? "rotate-180 text-electric" : "text-gray-400 group-hover:text-electric"}`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && isOpen && (
                    <div
                      className="absolute top-10 left-0 z-50 mt-2 w-56 border border-gray-100 bg-white shadow-xl focus:outline-hidden"
                      //   style={{ top: "100%" }}
                    >
                      <div className="px-1 py-2">
                        {item.dropdownItems?.map((dropItem, idx) => (
                          <div key={dropItem.label}>
                            <Link
                              href={dropItem.href}
                              className="block px-4 py-3 text-[15px] font-medium text-gray-700 transition-colors hover:text-electric"
                            >
                              {dropItem.label}
                            </Link>
                            {idx < item?.dropdownItems!.length - 1 && (
                              <div className="mx-4 border-b border-sky-400"></div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {/* Language Switcher */}
            <button
              onClick={() => setCurrentLang(currentLang === "en" ? "zh" : "en")}
              className="cursor-pointer border-l border-gray-200 pl-6 text-base font-medium text-electric transition-colors hover:text-electric"
              id="lang-toggle-btn"
            >
              {currentLang === "en" ? "中文" : "English"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setCurrentLang(currentLang === "en" ? "zh" : "en")}
              className="rounded-sm border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-electric"
            >
              {currentLang === "en" ? "中文" : "EN"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-electric focus:outline-hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide */}
      {mobileMenuOpen && (
        <div
          className="border-t border-gray-100 bg-white shadow-lg transition-all md:hidden"
          id="mobile-menu-panel"
        >
          <div className="space-y-2 px-4 pt-2 pb-6">
            {navItems.map((item) => {
              const isExpanded = mobileExpandedItem === item.label
              return (
                <div
                  key={item.label}
                  className="border-b border-gray-50 py-1 last:border-0"
                >
                  {item.dropdownItems ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileExpandedItem(isExpanded ? null : item.label)
                        }
                        className="flex w-full items-center justify-between py-2 text-left text-sm font-semibold tracking-wider text-electric uppercase focus:outline-hidden"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                      {isExpanded && (
                        <div className="mt-1 mb-2 space-y-1 border-l-2 border-blue-100 pl-4">
                          {item.dropdownItems.map((dropItem) => (
                            <a
                              key={dropItem.label}
                              href={dropItem.href}
                              onClick={() => {
                                setMobileMenuOpen(false)
                                setMobileExpandedItem(null)
                              }}
                              className="block py-2 text-sm text-gray-600 transition-colors hover:font-medium hover:text-electric-glow"
                            >
                              {dropItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false)
                        setMobileExpandedItem(null)
                      }}
                      className="block py-2 text-sm font-semibold tracking-wider text-electric uppercase transition-colors hover:text-electric-glow"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
