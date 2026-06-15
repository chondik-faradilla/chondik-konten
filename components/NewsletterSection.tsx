"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section className="bg-blue-600 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <span className="inline-block bg-blue-500 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Newsletter
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Jangan Lewatkan Artikel Terbaru
        </h2>
        <p className="text-blue-100 mb-8">
          Daftar sekarang dan dapatkan konten terbaik langsung di inbox kamu. Gratis selamanya.
        </p>

        {submitted ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white text-blue-600 font-semibold px-6 py-4 rounded-2xl inline-block"
          >
            Terima kasih! Kamu sudah terdaftar ✓
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email kamu..."
              required
              className="flex-1 px-5 py-3 rounded-full text-gray-800 outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
            >
              Daftar Sekarang
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
