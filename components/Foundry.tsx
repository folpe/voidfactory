"use client"

import Image from "next/image"
import { PROJECTS } from "./projects"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"

interface Project {
  title: string
  category: string
  description: string
  image: string
  link?: string
  lock: boolean
  status: string
  statusKey: string
}

const getStatusColors = (statusKey: string) => {
  switch (statusKey) {
    case "status.released":
      return { dot: "bg-emerald-500", text: "text-emerald-500" }
    case "status.dropped":
      return { dot: "bg-red-500", text: "text-red-500" }
    case "status.build":
      return { dot: "bg-amber-500 animate-pulse", text: "text-amber-500" }
    case "status.analysis":
      return { dot: "bg-blue-500 animate-pulse", text: "text-blue-500" }
    case "status.idea":
      return { dot: "bg-purple-500", text: "text-purple-500" }
    default:
      return { dot: "bg-gray-500", text: "text-gray-500" }
  }
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <button
        onClick={handleClick}
        disabled={!project.link}
        className={`relative w-full overflow-hidden rounded-lg border border-[rgba(191,195,200,0.1)] bg-[#1A1A1D] text-left transition-all duration-500 hover:border-[#8a1ae5] hover:shadow-[0_0_40px_rgba(138,26,229,0.15)] ${
          project.link ? "cursor-pointer" : "cursor-default"
        } disabled:cursor-default`}
      >
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

          {/* Lock Icon - left side */}
          {project.lock && (
            <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(191,195,200,0.2)] bg-[#0E0E10]/80 backdrop-blur-sm">
              <svg className="h-5 w-5 text-[#BFC3C8]/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          )}

          {/* Status Badge - right side */}
          <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-[rgba(191,195,200,0.2)] bg-[#0E0E10]/80 px-3 py-1.5 backdrop-blur-sm">
            <span className={`h-2 w-2 rounded-full ${getStatusColors(project.statusKey).dot}`}></span>
            <span className={`text-xs font-medium ${getStatusColors(project.statusKey).text}`}>{project.status}</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-2 flex items-start justify-between gap-4">
            <h3 className="group-hover:text-primary text-xl font-bold text-[#BFC3C8] transition-all duration-300 group-hover:-translate-y-2">
              {project.title}
            </h3>
          </div>
          <p className="text-sm tracking-wider text-[#BFC3C8]/50 uppercase transition-all duration-300 group-hover:-translate-y-2">
            {project.category}
          </p>
          <p className="mt-3 translate-y-2 text-sm text-[#BFC3C8]/70 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {project.description}
          </p>
        </div>
      </button>
      {/* Corner Accent */}
      <div className="absolute -top-1 -right-1 h-4 w-4 border-t-2 border-r-2 border-[#297fff] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      <div className="absolute -bottom-1 -left-1 h-4 w-4 border-b-2 border-l-2 border-[#297fff] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
    </motion.div>
  )
}

export const Foundry = () => {
  const t = useTranslations("foundry")
  const projects = PROJECTS.map((p) => ({
    ...p,
    category: t(p.categoryKey),
    description: t(p.descriptionKey),
    status: t(p.status),
    statusKey: p.status,
  }))

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
            <span className="text-primary text-xs font-semibold tracking-widest">{t("label")}</span>
          </div>
          <h2 className="mb-6 text-6xl font-bold tracking-tight text-[#BFC3C8] md:text-7xl">{t("title")}</h2>
          <p className="mx-auto max-w-[700px] text-xl text-[#BFC3C8]/50">{t("description")}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
