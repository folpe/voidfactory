"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export const Ecosystem = () => {
  const t = useTranslations("ecosystem")

  const entities = [
    {
      name: "Void Corp",
      description: t("entities.voidCorp"),
      color: "#8929ff",
    },
    {
      name: "Volpio",
      description: t("entities.volpio"),
      color: "#297fff",
    },
  ]

  return (
    <section className="relative overflow-hidden px-6 py-40">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10] via-[#1A1A1D]/40 to-[#0E0E10]"></div>

      {/* Connecting Lines */}
      <motion.div
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <svg className="h-full w-full" preserveAspectRatio="none">
          <motion.path
            d="M 0,50 Q 50,25 100,50"
            stroke="#297fff"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <div className="mb-8 inline-block rounded-full border border-[rgba(191,195,200,0.2)] px-4 py-2">
            <span className="text-primary text-xs font-semibold tracking-widest">{t("label")}</span>
          </div>
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-[#BFC3C8] md:text-6xl">{t("title")}</h2>
          <p className="mx-auto max-w-[700px] text-xl text-[#BFC3C8]/50">{t("description")}</p>
        </motion.div>

        {/* Entities Grid */}
        <div className="mx-auto grid max-w-[1000px] gap-8 md:grid-cols-2">
          {entities.map((entity, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index === 0 ? -40 : 40,
              }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative rounded-lg border border-[rgba(191,195,200,0.1)] bg-[#1A1A1D]/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[rgba(191,195,200,0.3)] hover:shadow-[0_0_40px_rgba(255,110,46,0.1)]">
                {/* Top Accent */}
                <motion.div
                  className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent to-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, transparent, ${entity.color}, transparent)`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.2,
                  }}
                ></motion.div>

                {/* Content */}
                <div className="relative">
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="group-hover:text-primary text-3xl font-bold text-[#BFC3C8] transition-colors">
                      {entity.name}
                    </h3>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[rgba(191,195,200,0.2)] transition-all group-hover:border-[#297fff] group-hover:bg-[#297fff]/10"
                    >
                      <ArrowUpRight className="group-hover:text-primary h-5 w-5 text-[#BFC3C8]/50" />
                    </motion.div>
                  </div>

                  <p className="leading-relaxed text-[#BFC3C8]/60">{entity.description}</p>

                  {/* Connection Indicator */}
                  <div className="mt-6 flex items-center gap-2">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: entity.color }}
                    ></motion.div>
                    <span className="text-xs tracking-wider text-[#BFC3C8]/40 uppercase">{t("connection")}</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${entity.color}10, transparent 70%)`,
                  }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Connection */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(191,195,200,0.2)] bg-[#1A1A1D] px-6 py-3">
            <div className="h-2 w-2 rounded-full bg-[#297FFF]"></div>
            <span className="text-sm text-[#BFC3C8]/60">{t("unified")}</span>
            <span className="text-primary text-sm font-bold">Void Factory</span>
            <div className="h-2 w-2 rounded-full bg-[#297fff]"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
