"use client"

import { motion } from "framer-motion"

interface SectionTitleProps {
  badge?: string
  title: string
  subtitle?: string
  center?: boolean
}

export default function SectionTitle({ badge, title, subtitle, center = true }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  )
}
