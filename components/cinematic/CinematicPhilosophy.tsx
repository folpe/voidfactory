"use client"

import { motion } from "motion/react"

export const CinematicPhilosophy = () => {
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
            <span className="text-xs font-semibold tracking-widest text-[#FF6E2E]">THE PHILOSOPHY</span>
          </div>

          {/* Manifesto */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="pointer-events-none absolute top-0 -left-8 text-[200px] leading-none font-bold text-[#FF6E2E]/5"
            >
              "
            </motion.div>

            <p className="text-2xl leading-relaxed font-light tracking-wide text-[#BFC3C8] md:text-3xl">
              We are the invisible hand behind innovation.
              <span className="font-normal text-[#FF6E2E]"> Every line of code</span>, every pixel, every iteration—a
              deliberate act of
              <span className="font-normal text-[#FF6E2E]"> mastery</span>. We forge tools that don't just work—they
              <span className="font-normal text-[#FF6E2E]"> transcend expectations</span>. In the crucible of v0rn,
              ideas are tested, refined, and reborn.
              <span className="text-[#BFC3C8]/60"> This is where version zero becomes version one.</span>
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#FF6E2E]/50"></div>
            <motion.div
              animate={{
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="h-2 w-2 rotate-45 border border-[#FF6E2E]"
            ></motion.div>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#FF6E2E]/50"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
