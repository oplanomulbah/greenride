import { useLanguage } from "@/contexts/language-context"
import { chineseScenarios, englishScenarios, swahiliScenarios } from "@/data/scenario-grid"
import { motion } from "motion/react"

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
    <section className="relative bg-gradient-to-b from-emerald-50/70 to-white py-20">
      {/* Decorative clean outline */}
      <div className="bg-grid-slate-100 pointer-events-none absolute inset-0 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

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
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group flex flex-col overflow-hidden rounded-none border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:shadow-lg"
              id={`scenario-card-${scenario.id}`}
            >
              {/* Card Image Container */}
              <div className="relative aspect-video overflow-hidden bg-slate-50">
                <img
                  src={scenario.imageUrl}
                  alt={scenario.title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
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
          ))}
        </div>
      </div>
    </section>
  )
}
