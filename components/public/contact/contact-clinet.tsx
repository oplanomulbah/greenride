"use client"

import HeroSection from "@/components/common/hero-section"
import { PhoneCall } from "lucide-react"
import { useState } from "react"
import { CiLocationOn } from "react-icons/ci"
import { MdEmail } from "react-icons/md"

export default function DonarContactClient() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (form.email && form.message) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
      setForm({ name: "", email: "", message: "" })
    }
  }

  const contactCards = [
    {
      icon: <PhoneCall className="size-7 text-white" />,
      label: "Give Us A Call",
      detail: "+86 755-23187506",
    },
    {
      icon: <MdEmail className="size-7 text-white" />,
      label: "Email Us",
      detail: "service@donarev.com",
    },
    {
      icon: <CiLocationOn className="size-7 text-white" />,
      label: "Address",
      detail:
        "No. 470, Haide 2nd Road, Xiangnan Community, Nanshan Street, Nanshan District, Shenzhen",
    },
  ]

  return (
    <div style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: "#222" }}>
      <HeroSection
        title="Let's Power the Future Together"
        image="/contact_nbanner.jpeg"
        description="Have questions about our charging solutions, high-power energy storage cabinets, or interested in partnering with us? Fill out the form or reach out directly."
      />

      {/* Contact Info Cards Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-1.5 text-2xl font-bold tracking-wider md:text-3xl">
            CONTACT
          </h2>
          <p className="mb-9 text-sm text-gray-500">You are in: / CONTACT</p>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="flex cursor-default flex-col items-center border border-gray-200 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-blue-500/20"
              >
                <div className="mb-3 flex size-14 items-center justify-center rounded-full bg-linear-to-br from-[#1a6fd4] to-[#2196F3] shadow-[0_4px_14px_rgba(33,150,243,0.3)]">
                  {card.icon}
                </div>
                <div className="text-md mb-4 font-bold">{card.label}</div>
                <div className="text-sm leading-relaxed text-gray-600">
                  {card.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative flex flex-col items-center overflow-hidden bg-[url(/cn_fbg.png)] bg-fixed bg-center bg-no-repeat px-3 py-16">
        <div className="relative z-10 w-full max-w-170 text-center">
          <h2 className="mb-3.5 text-4xl font-normal tracking-wider text-white">
            Contact Us
          </h2>
          <p className="mb-10 text-base text-[#e2e8f0]">
            If you need more information, please feel free to contact us at any
            time
          </p>

          <div className="bg-white p-5 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:p-11">
            <div style={{ marginBottom: 22 }}>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Enter your name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="For example : Andrew Gardner"
                className="w-full border border-gray-300 px-3.5 py-2.75 text-sm text-gray-700 transition-colors duration-200 outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20"
              />
            </div>

            <div style={{ marginBottom: 22 }}>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Please enter your email address
                <span style={{ color: "#e53935" }}>*</span>
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="For example :service@donarev.com"
                className="w-full border border-gray-300 px-3.5 py-2.75 text-sm text-gray-700 transition-colors duration-200 outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20"
              />
            </div>

            <div style={{ marginBottom: 30 }}>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Please enter your message
                <span style={{ color: "#e53935" }}>*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please describe your needs"
                rows={5}
                className="w-full border border-gray-300 px-3.5 py-2.75 text-sm text-gray-700 transition-colors duration-200 outline-none focus:border-[#2196F3] focus:ring-2 focus:ring-[#2196F3]/20"
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleSubmit}
                className={`text-md cursor-pointer border-none px-6 py-4 tracking-wider text-black shadow-lg shadow-black/30 transition-transform hover:scale-105 active:scale-95 ${
                  submitted
                    ? "opacity-100"
                    : "hover:opacity-90 active:opacity-80"
                } `}
              >
                {submitted ? "✓ Message Sent!" : "Submit your information"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
