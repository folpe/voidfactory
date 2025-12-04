"use client"

import { motion } from "motion/react"
import { useTranslations } from "next-intl"

export const Ethos = () => {
  const t = useTranslations("ethos")

  return (
    <section className="relative overflow-hidden px-6 py-40">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-r from-[#0E0E10] via-[#1A1A1D] to-[#0E0E10]"
          style={{ backgroundSize: "200% 100%" }}
        ></motion.div>

        {/* Vertical Accent Lines */}
        <div className="absolute top-0 bottom-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-[#297fff]/30 to-transparent"></div>
        <div className="absolute top-0 right-1/4 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#297FFF]/30 to-transparent"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Section Label */}
          <div className="mb-16 inline-block rounded-full border border-[rgba(191,195,200,0.2)] px-4 py-2">
            <span className="text-primary text-xs font-semibold tracking-widest">{t("label")}</span>
          </div>

          {/* Large Zero */}
          <div className="relative mb-16">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#297fff] opacity-20 blur-3xl"
            ></motion.div>

            <div className="bg-gradient-to-b from-[#297fff] via-[#297fff] to-[#297fff]/30 bg-clip-text text-[180px] leading-none font-bold text-transparent md:text-[240px]">
              o
            </div>
          </div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-[800px]"
          >
            <blockquote className="mb-8 text-3xl leading-relaxed font-light text-[#BFC3C8] md:text-4xl">
              "{t("quote.part1")}
              <br />
              <span className="text-primary font-normal">{t("quote.part2")}</span>"
            </blockquote>

            <div className="flex items-center justify-center gap-3 text-[#BFC3C8]/40">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#BFC3C8]/40"></div>
              <span className="text-sm tracking-widest uppercase">{t("manifesto")}</span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#BFC3C8]/40"></div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="mt-20 flex items-center justify-center gap-8">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="h-2 w-2 rounded-full bg-[#297fff]/50"
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "2s",
                  animationIterationCount: "infinite",
                }}
              ></motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
