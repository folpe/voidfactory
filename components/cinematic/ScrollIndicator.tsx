"use client"

import { motion } from "motion/react"

export const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-10 w-6 justify-center rounded-full border-2 border-gray-600/50 pt-2"
      >
        <div className="h-2 w-1 rounded-full bg-gray-400" />
      </motion.div>
    </motion.div>
  )
}
