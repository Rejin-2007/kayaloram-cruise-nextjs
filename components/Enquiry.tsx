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
      .catch(() => {
        setStatus('❌ Failed to send enquiry. Please try again.');
        setSending(false);
      });
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="flex min-h-screen items-center justify-center bg-emerald-950 p-6"
        aria-label="Poovar boating enquiry and Kerala backwater cruise booking"
        itemScope
        itemType="https://schema.org/ContactPage"
      >
        <div className="w-full max-w-lg rounded-2xl border border-white/30 bg-white/20 p-6 text-center shadow-2xl backdrop-blur-xl">
          {/* Heading */}
          <h2
            className="mb-3 text-3xl font-extrabold text-white"
            itemProp="headline"
          >
            Enquire About Poovar Boating & Backwater Cruises
          </h2>

          <p className="mb-6 text-sm text-emerald-100">
            Get details about Poovar boating price, timings, island boating,
            mangrove cruises, and Kerala backwater tour bookings near Trivandrum.
          </p>

          {/* Tabs */}
          <nav
            className="mb-6 flex justify-center gap-4"
            aria-label="Choose Poovar boating enquiry method"
          >
            {(['message', 'call'] as TabType[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-4 py-2 font-semibold transition ${
                  activeTab === tab
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                }`}
                aria-pressed={activeTab === tab}
              >
                <span className="flex items-center gap-2">
                  {tab === 'message' ? (
                    <FaEnvelopeOpenText aria-hidden="true" />
                  ) : (
                    <FaPhoneAlt aria-hidden="true" />
                  )}
                  {tab === 'message' ? 'Message' : 'Call Us'}
                </span>
              </button>
            ))}
          </nav>

          {/* Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'message' && (
              <m.form
                key="message"
                onSubmit={handleSubmit}
                className="space-y-4 text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                aria-label="Poovar boating enquiry form"
              >
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full rounded bg-white/10 p-2 text-white"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full rounded bg-white/10 p-2 text-white"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message (date, package, or Poovar boating query)"
                  required
                  rows={4}
                  className="w-full rounded bg-white/10 p-2 text-white"
                />

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full rounded bg-emerald-600 py-2 font-semibold text-white"
                >
                  {sending ? 'Sending Enquiry…' : 'Submit Enquiry'}
                </button>

                {status && (
                  <p className="text-center text-amber-200">{status}</p>
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
              >
                <a
                  href="tel:+918139031924"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold"
                  aria-label="Call Kayaloram Cruise for Poovar boating booking"
                >
                  <FaPhoneAlt aria-hidden="true" />
                  Call +91 81390 31924
                </a>
              </m.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </LazyMotion>
  );
}
