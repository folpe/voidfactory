"use client"

import { motion } from "motion/react"

export const CinematicHero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#0E0E10] via-[#1A1A1D] to-[#0E0E10]"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Glowing Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(191,195,200,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(191,195,200,0.05) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial Glow */}
        <motion.div
          className="bg-gradient-radial absolute top-1/2 left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 from-[#FF6E2E]/15 via-[#297FFF]/10 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-[rgba(191,195,200,0.2)] bg-[#1A1A1D] px-6 py-3 backdrop-blur-sm"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#FF6E2E]"></div>
          <span className="text-sm tracking-wide text-[#BFC3C8]/70">An internal forge by</span>
          <span className="text-sm font-semibold text-[#BFC3C8]">Void Corp</span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="mb-6 text-7xl font-bold tracking-tighter md:text-8xl lg:text-9xl">
            <span className="text-[#BFC3C8]">FORGED BY</span>
            <br />
            <span className="relative inline-block">
              <span className="text-[#BFC3C8]">V</span>
              <motion.span
                className="relative inline-block text-[#FF6E2E]"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,110,46,0.5)",
                    "0 0 40px rgba(255,110,46,0.8)",
                    "0 0 20px rgba(255,110,46,0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                0
              </motion.span>
              <span className="text-[#BFC3C8]">RN</span>
              <motion.div
                className="absolute -inset-8 -z-10 rounded-full bg-[#FF6E2E] opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </h1>
        </motion.div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 text-2xl tracking-wide text-[#BFC3C8]/60 md:text-3xl"
        >
          Where vision meets iteration.
        </motion.p>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="mx-auto h-[2px] w-32 bg-gradient-to-r from-transparent via-[#FF6E2E] to-transparent"
        />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-48 bg-gradient-to-t from-[#0E0E10] to-transparent"></div>
    </section>
  )
}
