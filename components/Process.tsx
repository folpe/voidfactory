"use client"

import { PILLARS } from "./pillars"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export const Process = () => {
  const t = useTranslations("process")

  const pillars = PILLARS.map((p) => ({
    ...p,
    title: t(p.titleKey),
    description: t(p.descriptionKey),
  }))

  return (
    <section className="relative overflow-hidden px-6 py-40">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="bg-gradient-radial absolute top-0 left-1/4 h-[600px] w-[600px] from-[#297FFF]/10 to-transparent blur-3xl"></div>
        <div className="bg-gradient-radial absolute right-1/4 bottom-0 h-[600px] w-[600px] from-[#297fff]/10 to-transparent blur-3xl"></div>
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
            <span className="text-primary text-xs font-semibold tracking-widest">{t("label")}</span>
          </div>
          <h2 className="text-6xl font-bold tracking-tight text-[#BFC3C8] md:text-7xl">{t("title")}</h2>
        </motion.div>

        {/* Pillars Container */}
        <div className="relative flex flex-col items-center justify-between gap-20 md:flex-row md:items-start md:gap-0">
          {/* Continuous Connecting Line - Hidden on mobile */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-16 right-32 left-32 hidden h-[2px] overflow-hidden bg-[#297fff]/20 md:block"
          >
            {/* K2000-style moving light */}
            <motion.div
              animate={{
                x: ["-100%", "250%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-[30%] bg-linear-to-r from-transparent via-[#297fff] to-transparent"
            ></motion.div>
          </motion.div>

          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative z-10 flex flex-col items-center"
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
                    className="absolute inset-0 rounded-full border-2 border-dashed border-[#297fff]/30"
                  ></motion.div>

                  {/* Inner Glow */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 40px rgba(41,127,255,0.4)",
                    }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#297fff]/30 bg-[#1A1A1D] transition-all duration-300"
                  >
                    <Icon className="text-primary h-10 w-10" />
                    <motion.div className="absolute inset-0 rounded-full bg-[#297fff] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20"></motion.div>
                  </motion.div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#297fff] to-[#8a1ae5] shadow-lg">
                    <span className="text-sm font-bold text-[#0E0E10]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-[280px] text-center">
                  <h3 className="group-hover:text-primary mb-4 text-3xl font-bold text-[#BFC3C8] transition-colors duration-300 md:text-4xl">
                    {pillar.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#BFC3C8]/60 md:text-lg">{pillar.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
