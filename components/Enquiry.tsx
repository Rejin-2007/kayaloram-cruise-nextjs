'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'

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
        setStatus('✅ Enquiry sent successfully!')
        setFormData({ name: '', phone: '', message: '' })
        setSending(false)
      })
      .catch((error) => {
        console.error(error)
        setStatus('❌ Failed to send enquiry. Try again.')
        setSending(false)
      })
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-emerald-950 p-6">
      <section className="max-w-lg w-full bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-6 text-center">
        <h1 className="text-3xl font-extrabold text-white mb-6">
          Enquire About Poovar Boating & Kerala Backwater Tours
        </h1>

        {/* Tabs */}
        <nav className="flex justify-center gap-4 mb-6">
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
            >
              {tab === 'message' ? 'Message' : 'Call Us'}
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
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full p-2 rounded bg-white/10 text-white"
              />

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                required
                className="w-full p-2 rounded bg-white/10 text-white"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                className="w-full p-2 rounded bg-white/10 text-white"
              />

              <motion.button
                type="submit"
                disabled={sending}
                className="w-full bg-emerald-600 text-white py-2 rounded"
              >
                {sending ? 'Sending...' : 'Submit Enquiry'}
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
            >
              <a
                href="tel:+918139031924"
                className="inline-block bg-emerald-600 px-6 py-3 rounded-lg"
              >
                📞 Call +91 81390 31924
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  )
}
