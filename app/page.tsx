"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6"
        >
          Framer Motion Aktif ✓
        </motion.span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Chondik<span className="text-blue-600">.</span>
        </h1>

        <p className="text-lg text-gray-500 mb-8 max-w-md mx-auto">
          Next.js + Tailwind CSS + shadcn/ui + Framer Motion sudah siap digunakan.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
          <Button size="lg">Mulai Bangun Website</Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
