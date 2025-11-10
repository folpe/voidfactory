"use client"

import { motion } from "motion/react"
import { useLanguage } from "contexts/LanguageContext"

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-8 right-8 z-50"
    >
      <div className="relative flex items-center gap-2 rounded-full border border-[rgba(191,195,200,0.2)] bg-[#1A1A1D]/90 p-1 backdrop-blur-md">
        {/* Background slider */}
        <motion.div
          className="absolute h-[calc(100%-8px)] rounded-full bg-gradient-to-r from-[#FF6E2E] to-[#E55A1A]"
          initial={false}
          animate={{
            left: language === "fr" ? "4px" : "calc(50%)",
            width: "calc(50% - 4px)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />

        {/* FR Button */}
        <button
          onClick={() => setLanguage("fr")}
          className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
            language === "fr" ? "text-[#0E0E10]" : "text-[#BFC3C8]/60 hover:text-[#BFC3C8]"
          }`}
        >
          FR
        </button>

        {/* EN Button */}
        <button
          onClick={() => setLanguage("en")}
          className={`relative z-10 px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
            language === "en" ? "text-[#0E0E10]" : "text-[#BFC3C8]/60 hover:text-[#BFC3C8]"
          }`}
        >
          EN
        </button>
      </div>
    </motion.div>
  )
}
