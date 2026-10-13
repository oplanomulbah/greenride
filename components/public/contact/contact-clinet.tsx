"use client"

import HeroSection from "@/components/common/hero-section"
import { Mail, MapPin } from "lucide-react"
import { useState, type FormEvent } from "react"
import { useLanguage } from "@/contexts/language-context"
import { translate } from "@/lib/translations"

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const { currentLang } = useLanguage()
  const t = (key: string) => translate(currentLang, key)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`GreenRide enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:greenride@kencharge.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const handleInvalid = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = event.currentTarget
    field.setCustomValidity(
      field.validity.typeMismatch
        ? t("contact.invalidEmail")
        : t("contact.required")
    )
  }

  const clearValidation = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => event.currentTarget.setCustomValidity("")

  const contactCards = [
    {
      icon: <Mail className="size-6 text-white" />,
      label: t("contact.email"),
      detail: "greenride@kencharge.com",
      href: "mailto:greenride@kencharge.com",
    },
    {
      icon: <MapPin className="size-6 text-white" />,
      label: t("contact.address"),
      detail: t("common.location"),
      href: "https://maps.google.com/?q=Kileleshwa%2C+Nairobi%2C+Kenya",
    },
  ]

  return (
    <div className="text-gray-900">
      <HeroSection
        title={t("contact.title")}
        image="/scenario-gird/icj1.jpg"
        description={t("contact.description")}
      />

      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">{t("nav.contact")}</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                className="flex flex-col items-center border border-gray-200 p-6 text-center transition-colors hover:border-emerald-600"
              >
                <div className="mb-4 flex size-12 items-center justify-center bg-emerald-700">
                  {card.icon}
                </div>
                <div className="mb-2 font-bold">{card.label}</div>
                <div className="text-sm leading-relaxed text-gray-600 underline-offset-4 hover:underline">
                  {card.detail}
                </div>
              </a>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-500">{t("contact.noPhone")}</p>
        </div>
      </div>

      <div className="relative flex flex-col items-center overflow-hidden bg-[url(/cn_fbg.png)] bg-center bg-cover px-3 py-16">
        <div className="absolute inset-0 bg-emerald-950/60" />
        <div className="relative z-10 w-full max-w-170 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-white">{t("contact.form")}</h2>
          <p className="mb-8 text-base text-white/90">{t("contact.description")}</p>

          <form onSubmit={handleSubmit} className="bg-white p-5 text-left shadow-xl md:p-10">
            <div className="mb-5">
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contact.name")}
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={clearValidation}
                required
                className="w-full border border-gray-300 px-3.5 py-3 text-sm text-gray-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contact.emailField")}
                <span className="text-red-600"> *</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={clearValidation}
                required
                className="w-full border border-gray-300 px-3.5 py-3 text-sm text-gray-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
              />
            </div>

            <div className="mb-7">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-gray-700">
                {t("contact.message")}
                <span className="text-red-600"> *</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                onInvalid={handleInvalid}
                onInput={clearValidation}
                required
                rows={5}
                className="w-full border border-gray-300 px-3.5 py-3 text-sm text-gray-700 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-emerald-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-800"
              >
                {submitted ? t("contact.sent") : t("contact.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
