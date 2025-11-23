"use client"

import { motion } from "motion/react"

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-14 w-9 justify-center rounded-full border-2 border-[#BFC3C8]/60 pt-3 shadow-lg"
        style={{
          boxShadow: "0 0 20px rgba(255, 110, 46, 0.3)",
        }}
      >
        <motion.div
          className="h-3 w-1.5 rounded-full bg-[#FF6E2E]"
          animate={{
            opacity: [1, 0.4, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            boxShadow: "0 0 10px rgba(255, 110, 46, 0.8)",
          }}
        />
      </motion.div>
    </motion.div>
  )
}
