"use client"

import Image from "next/image"

const successStories = [
  {
    id: 1,
    img: "/story-1.jpeg",
    alt: "Donar charging station in Kenya",
    description:
      "In addition to conventional DC charging stations, the charging stations built by Donar in Kenya also have distributed solar energy storage charging stations installed, bringing more economically valuable green energy to the local market.",
  },
  {
    id: 2,
    img: "/story-2.jpeg",
    alt: "Donar charging station in Vietnam",
    description:
      "Donar's charging stations in Vietnam have both DC charging stations and AC charging stations, providing local users with the ultimate charging experience.",
  },
  {
    id: 3,
    img: "/story-3.jpeg",
    alt: "Donar charging station in China",
    description:
      "Donar's charging stations in China are installed on highways, residential areas, tourist attractions, etc., making it convenient for electric vehicle users to recharge their batteries efficiently at any time.",
  },
]

const SectionIcon = () => (
  <div className="relative mx-auto mb-3 size-10 overflow-hidden">
    <Image
      src="/scenario-gird/logo-small.png"
      alt="Donar Logo"
      fill
      className="object-contain"
    />
  </div>
)

export default function DonarAboutClient() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* ── Company Section ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionIcon />
        <h2 className="mb-10 text-center text-4xl font-light tracking-tight text-gray-900">
          Company
        </h2>

        <div className="space-y-5 text-xl leading-7 text-gray-700">
          <p>
            Donar is a professional EV charging ecology solution provider that
            integrates research and development, production, sales, and service.
          </p>
          <p>
            Donar adheres to the concept of focus on innovation, excellence, and
            struggle, and based on the advantages of enterprises in green energy
            technology, provides customers with green solutions such as solar
            storage integrated EV charging stations, industrial and commercial
            energy storage, intelligent home storage systems, and portable power
            supplies. Through the use of advanced cloud computing, big data,
            artificial intelligence, and the IoT technology, Donar is committed
            to building a smart and green EV charging industry ecosystem.
          </p>
          <p>
            As a global leader in the green energy industry, Donar relies on
            China to gradually move towards the world, driving the progress of
            the clean energy industry with the power of technology, and leading
            the world towards the freedom of sustainable green energy.
          </p>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl border-t border-gray-100" />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <SectionIcon />
        <h2 className="mb-10 text-center text-4xl font-light tracking-tight text-gray-900">
          Success Story
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="group relative cursor-pointer overflow-hidden"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={story.img}
                  alt={story.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Subtle blue overlay on hover */}
              <div className="absolute inset-0 bg-[#1a8cff] opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
