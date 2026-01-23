'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa'

export default function Enquiry() {
  const [activeTab, setActiveTab] = useState<'message' | 'call'>('message')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('')
    setSending(true)

    emailjs
      .send(
        'service_smh1c0p',
        'template_22f9sbp',
        formData,
        'M40cSVMnA_AywFy2-'
      )
      .then(() => {
        setStatus('✅ Your Poovar boating enquiry has been sent successfully!')
        setFormData({ name: '', phone: '', message: '' })
        setSending(false)
      })
      .catch((error) => {
        console.error(error)
        setStatus('❌ Failed to send enquiry. Please try again.')
        setSending(false)
      })
  }

  return (
    <main
      className="min-h-screen flex items-center justify-center bg-emerald-950 p-6"
      aria-label="Poovar boating enquiry and Kerala backwater tour booking section"
    >
      <section className="max-w-lg w-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-extrabold text-white mb-3">
          Enquire About Poovar Boating & Kerala Backwater Cruises
        </h1>

        <p className="text-sm text-emerald-100 mb-6">
          Contact us for Poovar boating prices, packages, timings, and backwater
          cruise bookings near Trivandrum.
        </p>

        {/* Tabs */}
        <nav
          className="flex justify-center gap-4 mb-6"
          aria-label="Choose enquiry method for Poovar boating"
        >
          {['message', 'call'].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as 'message' | 'call')}
              className={`px-4 py-2 rounded-lg font-semibold ${
                activeTab === tab
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              aria-pressed={activeTab === tab}
            >
              {tab === 'message' ? (
                <span className="flex items-center gap-2">
                  <FaEnvelopeOpenText aria-hidden="true" /> Message
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <FaPhoneAlt aria-hidden="true" /> Call Us
                </span>
              )}
            </motion.button>
          ))}
        </nav>

        <AnimatePresence mode="wait">
          {activeTab === 'message' && (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-4 text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              aria-label="Poovar boating enquiry form"
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                aria-label="Your name for Poovar boating enquiry"
                className="w-full p-2 rounded bg-white/10 text-white"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                aria-label="Phone number for Poovar boating contact"
                className="w-full p-2 rounded bg-white/10 text-white"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message (Poovar boating package, date, or questions)"
                required
                aria-label="Message regarding Poovar boating or backwater cruise"
                className="w-full p-2 rounded bg-white/10 text-white"
              />

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full bg-emerald-600 text-white py-2 rounded"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sending ? 'Sending Enquiry...' : 'Submit Poovar Boating Enquiry'}
              </motion.button>

              {status && (
                <motion.p
                  className="text-center text-amber-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {status}
                </motion.p>
              )}
            </motion.form>
          )}

          {activeTab === 'call' && (
            <motion.div
              key="call"
              className="text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              aria-label="Call for Poovar boating booking"
            >
              <a
                href="tel:+918139031924"
                className="inline-flex items-center gap-2 bg-emerald-600 px-6 py-3 rounded-lg"
              >
                <FaPhoneAlt aria-hidden="true" />
                Call +91 81390 31924
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
