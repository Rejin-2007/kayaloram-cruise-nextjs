'use client';

import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { LazyMotion, domAnimation, m, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';

type TabType = 'message' | 'call';

export default function Enquiry() {
  const [activeTab, setActiveTab] = useState<TabType>('message');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setSending(true);

    emailjs
      .send(
        'service_smh1c0p',
        'template_22f9sbp',
        formData,
        'M40cSVMnA_AywFy2-'
      )
      .then(() => {
        setStatus('✅ Your Poovar boating enquiry has been sent successfully!');
        setFormData({ name: '', phone: '', message: '' });
        setSending(false);
      })
      .catch((error) => {
        console.error(error);
        setStatus('❌ Failed to send enquiry. Please try again.');
        setSending(false);
      });
  };

  return (
    <LazyMotion features={domAnimation}>
      <main
        className="flex min-h-screen items-center justify-center bg-emerald-950 p-6"
        aria-label="Poovar boating enquiry and Kerala backwater tour booking section"
      >
        <section className="w-full max-w-lg rounded-2xl border border-white/30 bg-white/20 p-6 text-center shadow-2xl backdrop-blur-xl">
          <h1 className="mb-3 text-3xl font-extrabold text-white">
            Enquire About Poovar Boating & Kerala Backwater Cruises
          </h1>

          <p className="mb-6 text-sm text-emerald-100">
            Contact us for Poovar boating prices, packages, timings, and backwater
            cruise bookings near Trivandrum.
          </p>

          {/* Tabs */}
          <nav
            className="mb-6 flex justify-center gap-4"
            aria-label="Choose enquiry method for Poovar boating"
          >
            {(['message', 'call'] as TabType[]).map((tab) => (
              <m.button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 font-semibold ${
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
                    <FaEnvelopeOpenText aria-hidden="true" focusable="false" />
                    Message
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaPhoneAlt aria-hidden="true" focusable="false" />
                    Call Us
                  </span>
                )}
              </m.button>
            ))}
          </nav>

          <AnimatePresence mode="wait">
            {activeTab === 'message' && (
              <m.form
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
                  className="w-full rounded bg-white/10 p-2 text-white"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  aria-label="Phone number for Poovar boating contact"
                  className="w-full rounded bg-white/10 p-2 text-white"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message (Poovar boating package, date, or questions)"
                  required
                  aria-label="Message regarding Poovar boating or backwater cruise"
                  className="w-full rounded bg-white/10 p-2 text-white"
                />

                <m.button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded bg-emerald-600 py-2 text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sending
                    ? 'Sending Enquiry...'
                    : 'Submit Poovar Boating Enquiry'}
                </m.button>

                {status && (
                  <m.p
                    className="text-center text-amber-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {status}
                  </m.p>
                )}
              </m.form>
            )}

            {activeTab === 'call' && (
              <m.div
                key="call"
                className="text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-label="Call for Poovar boating booking"
              >
                <a
                  href="tel:+918139031924"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3"
                >
                  <FaPhoneAlt aria-hidden="true" focusable="false" />
                  Call +91 81390 31924
                </a>
              </m.div>
            )}
          </AnimatePresence>
        </section>
      </main>
    </LazyMotion>
  );
}
