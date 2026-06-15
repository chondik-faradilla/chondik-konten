"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  category: string
  slug: string
  imageUrl?: string
  author?: string
}

export default function BlogCard({
  title,
  excerpt,
  date,
  category,
  slug,
  imageUrl = "/placeholder.jpg",
  author = "Admin",
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
    >
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-snug">
          {title}
        </h3>

        <p className="text-gray-500 text-sm line-clamp-3 mb-4">{excerpt}</p>

        <Link
          href={`/artikel/${slug}`}
          className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:gap-2 transition-all"
        >
          Baca Selengkapnya
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}
