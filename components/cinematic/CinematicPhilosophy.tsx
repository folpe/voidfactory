"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export const CinematicPhilosophy = () => {
  const t = useTranslations("philosophy")

  return (
    <section className="relative overflow-hidden px-6 py-40">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E10] via-[#1A1A1D]/30 to-[#0E0E10]"></div>

      <div className="relative z-10 mx-auto max-w-[900px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Section Label */}
          <div className="mb-12 inline-block rounded-full border border-[rgba(191,195,200,0.2)] px-4 py-2">
            <span className="text-xs font-semibold tracking-widest text-primary">{t("label")}</span>
          </div>

          {/* Manifesto */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="pointer-events-none absolute top-0 -left-8 text-[200px] leading-none font-bold text-primary/5"
            >
              "
            </motion.div>

            <p className="text-2xl leading-relaxed font-light tracking-wide text-[#BFC3C8] md:text-3xl">
              {t("text.part1")}
              <span className="font-normal text-primary">{t("text.highlight1")}</span>
              {t("text.part2")}
              <span className="font-normal text-primary">{t("text.highlight2")}</span>
              {t("text.part3")}
              <span className="font-normal text-primary">{t("text.highlight3")}</span>
              {t("text.part4")}
              <span className="text-[#BFC3C8]/60">{t("text.part5")}</span>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#297fff]/50"></div>
            <motion.div
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-2 w-2 rotate-45 border border-[#297fff]"
            ></motion.div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#297fff]/50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
