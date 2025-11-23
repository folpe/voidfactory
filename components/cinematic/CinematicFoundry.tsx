"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { useTranslations } from "next-intl"

export const CinematicFoundry = () => {
  const t = useTranslations("foundry")

  const projects = [
    {
      title: "Project Atlas",
      category: t("categories.internalTool"),
      image:
        "https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkYXJrfGVufDF8fHx8MTc1OTk1NDkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Project Nexus",
      category: t("categories.apiGateway"),
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwaW50ZXJmYWNlJTIwZGVzaWdufGVufDF8fHx8MTc1OTk1NDkzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Project Forge",
      category: t("categories.buildSystem"),
      image:
        "https://images.unsplash.com/photo-1689250912749-c5c1e2e8d4f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWV0YWwlMjB0ZXh0dXJlfGVufDF8fHx8MTc1OTk1NDk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Project Cipher",
      category: t("categories.dataPipeline"),
      image:
        "https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwc2NyZWVuJTIwZGFya3xlbnwxfHx8fDE3NTk5NTQ5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Project Quantum",
      category: t("categories.analyticsEngine"),
      image:
        "https://images.unsplash.com/photo-1743963256372-345f0c6dc098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJuJTIwZGFya3xlbnwxfHx8fDE3NTk4OTc3MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      title: "Project Onyx",
      category: t("categories.infrastructure"),
      image:
        "https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc1OTg2MzAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0E0E10] via-[#1A1A1D]/20 to-[#0E0E10] px-6 py-40">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-gradient-radial absolute inset-0 from-[#297fff]/5 via-transparent to-transparent blur-3xl"
        ></motion.div>
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
            <span className="text-xs font-semibold tracking-widest text-primary">{t("label")}</span>
          </div>
          <h2 className="mb-6 text-6xl font-bold tracking-tight text-[#BFC3C8] md:text-7xl">{t("title")}</h2>
          <p className="mx-auto max-w-[700px] text-xl text-[#BFC3C8]/50">{t("description")}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg border border-[rgba(191,195,200,0.1)] bg-[#1A1A1D] transition-all duration-500 hover:border-[rgba(255,110,46,0.3)] hover:shadow-[0_0_40px_rgba(255,110,46,0.15)]">
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1080}
                    height={810}
                    className="h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:blur-sm"
                  />

                  {/* Blur Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1D] via-[#1A1A1D]/50 to-transparent"></div>

                  {/* Hover Glow */}
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-[#297fff]/0 to-[#297FFF]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-30"></motion.div>

                  {/* Lock Icon */}
                  <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(191,195,200,0.2)] bg-[#0E0E10]/80 backdrop-blur-sm">
                    <svg className="h-5 w-5 text-[#BFC3C8]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-[#BFC3C8] transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm tracking-wider text-[#BFC3C8]/50 uppercase">{project.category}</p>

                  {/* Internal Badge */}
                  <div className="mt-4 border-t border-[rgba(191,195,200,0.1)] pt-4">
                    <span className="text-xs font-semibold tracking-wide text-primary/70">{t("badge")}</span>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-[#297fff] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-[#297fff] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
