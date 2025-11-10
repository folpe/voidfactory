"use client"

import { Flame, Rocket, Search } from "lucide-react"
import { motion } from "motion/react"
import { useLanguage } from "contexts/LanguageContext"
import { translations } from "lib/translations"

export const CinematicProcess = () => {
  const { language } = useLanguage()

  const pillars = [
    {
      icon: Search,
      title: translations.process.pillars.prequalify.title[language],
      description: translations.process.pillars.prequalify.description[language],
    },
    {
      icon: Flame,
      title: translations.process.pillars.forge.title[language],
      description: translations.process.pillars.forge.description[language],
    },
    {
      icon: Rocket,
      title: translations.process.pillars.scale.title[language],
      description: translations.process.pillars.scale.description[language],
    },
  ]

  return (
    <section className="relative overflow-hidden px-6 py-40">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="bg-gradient-radial absolute top-0 left-1/4 h-[600px] w-[600px] from-[#297FFF]/10 to-transparent blur-3xl"></div>
        <div className="bg-gradient-radial absolute right-1/4 bottom-0 h-[600px] w-[600px] from-[#FF6E2E]/10 to-transparent blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <div className="mb-8 inline-block rounded-full border border-[rgba(191,195,200,0.2)] px-4 py-2">
            <span className="text-xs font-semibold tracking-widest text-[#FF6E2E]">
              {translations.process.label[language]}
            </span>
          </div>
          <h2 className="text-6xl font-bold tracking-tight text-[#BFC3C8] md:text-7xl">
            {translations.process.title[language]}
          </h2>
        </motion.div>

        {/* Pillars Container */}
        <div className="flex flex-col items-center justify-center gap-20 md:flex-row md:gap-0">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div key={index} className="flex items-center">
                {/* Pillar */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group flex flex-col items-center"
                >
                  {/* Icon Container */}
                  <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
                    {/* Outer Ring */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF6E2E]/30"
                    ></motion.div>

                    {/* Inner Glow */}
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 40px rgba(255,110,46,0.4)",
                      }}
                      className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#FF6E2E]/30 bg-[#1A1A1D] transition-all duration-300"
                    >
                      <Icon className="h-10 w-10 text-[#FF6E2E]" />
                      <motion.div className="absolute inset-0 rounded-full bg-[#FF6E2E] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"></motion.div>
                    </motion.div>

                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6E2E] to-[#E55A1A] shadow-lg">
                      <span className="text-sm font-bold text-[#0E0E10]">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="max-w-[280px] text-center">
                    <h3 className="mb-4 text-3xl font-bold text-[#BFC3C8] transition-colors duration-300 group-hover:text-[#FF6E2E] md:text-4xl">
                      {pillar.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#BFC3C8]/60 md:text-lg">{pillar.description}</p>
                  </div>
                </motion.div>

                {/* Vertical Connecting Line - Only between pillars, hidden on mobile */}
                {index < pillars.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className="mx-12 hidden h-[200px] w-[1px] origin-top bg-gradient-to-b from-transparent via-[#FF6E2E]/30 to-transparent md:block"
                  ></motion.div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
