import { useLanguage } from "@/contexts/language-context"
import { chineseScenarios, englishScenarios, swahiliScenarios } from "@/data/scenario-grid"
import Image from "next/image"
import { motion } from "motion/react"

const scenarioImages = {
  vehicles: {
    src: "/home-hero.jpg",
    alt: "Electric car connected to a home charging station",
  },
  "boda-tuk-tuk": {
    src: "/cn_fbg.png",
    alt: "Electric vehicle charging connectors",
  },
  commercial: {
    src: "/scenario-gird/icj5.jpg",
    alt: "Electric commercial vans at a charging station",
  },
  fleet: {
    src: "/scenario-gird/icj4.jpg",
    alt: "A fleet of electric cars at a charging station",
  },
  charging: {
    src: "/scenario-gird/icj2.jpeg",
    alt: "Electric vehicle charging station",
  },
  "technical-support": {
    src: "/story-3.jpeg",
    alt: "A team demonstrating electric vehicle charging equipment",
  },
}

export default function ScenarioGrid() {
  const { currentLang } = useLanguage()

  const scenarios =
    currentLang === "en"
      ? englishScenarios
      : currentLang === "sw"
        ? swahiliScenarios
        : chineseScenarios

  const sectionTitle =
    currentLang === "en"
      ? "Solutions for every electric journey"
      : currentLang === "sw"
        ? "Suluhisho kwa kila safari ya umeme"
        : "覆盖电动出行全程的解决方案"

  return (
    <section className="relative bg-linear-to-b from-emerald-50/70 to-white py-20">
      {/* Decorative clean outline */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {sectionTitle}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-electric"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario, index) => {
            const image = scenarioImages[scenario.id as keyof typeof scenarioImages]
            return (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col overflow-hidden rounded-none border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:shadow-lg"
                id={`scenario-card-${scenario.id}`}
              >
                <div className="relative aspect-video overflow-hidden bg-emerald-50">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Text Content */}
                <div className="flex flex-1 flex-col justify-between bg-slate-50/50 p-6 text-center">
                  <div>
                    <h3 className="font-display mb-3 text-[20px] font-bold text-gray-900 transition-colors group-hover:text-electric">
                      {scenario.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed font-normal text-gray-600">
                      {scenario.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
