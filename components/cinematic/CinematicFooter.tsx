"use client"

import { motion } from "motion/react"
import { useLanguage } from "contexts/LanguageContext"
import { translations } from "lib/translations"

export const CinematicFooter = () => {
  const { language } = useLanguage()

  return (
    <footer className="relative overflow-hidden border-t border-[#2C2F33] px-6 py-16">
      {/* Subtle Background Glow */}
      <div className="bg-gradient-radial absolute bottom-0 left-1/2 h-[200px] w-[800px] -translate-x-1/2 from-[#FF6E2E]/5 to-transparent blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="flex flex-col items-center gap-8">
          {/* Brand Mark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="text-4xl font-bold tracking-tight text-[#BFC3C8]">
              v<span className="text-[#FF6E2E]">0</span>rn
            </div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-4 -z-10 rounded-full bg-[#FF6E2E] blur-xl"
            ></motion.div>
          </motion.div>

          {/* Divider */}
          <div className="h-[1px] w-full max-w-[200px] bg-gradient-to-r from-transparent via-[#FF6E2E]/30 to-transparent"></div>

          {/* Footer Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-2 text-center"
          >
            <p className="text-sm text-[#BFC3C8]/40">
              © 2025 <span className="text-[#BFC3C8]/60">Void Corp</span>. {translations.footer.copyright[language]}
            </p>
            <p className="text-xs tracking-wider text-[#BFC3C8]/30 uppercase">{translations.footer.forged[language]}</p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="flex items-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                className="h-1 w-1 rounded-full bg-[#FF6E2E]/50"
              ></motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
