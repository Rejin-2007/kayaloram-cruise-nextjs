"use client";

import { useState } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../chatbot/config";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";
import TawkToChat from "./TawkToChat";

const buttonBaseClasses =
  "w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xl sm:text-2xl shadow-lg active:scale-95 transition focus:outline-none focus:ring-2";

export default function FloatingContactButtons() {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      {/* Chatbot Panel */}
      {showChatbot && (
        <div className="fixed bottom-20 left-4 sm:left-6 w-80 z-50 shadow-2xl rounded-xl overflow-hidden">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}

      {/* Floating Contact Buttons */}
      <nav
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col gap-3 sm:gap-4 z-50"
        aria-label="Floating Contact Options for Poovar Boating"
      >
        {/* WhatsApp */}
        <a
          href="https://wa.me/918139031924"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Poovar Boating on WhatsApp"
          className={`${buttonBaseClasses} text-emerald-400 hover:bg-emerald-500/30 hover:text-white focus:ring-emerald-300`}
        >
          <FaWhatsapp />
        </a>

        {/* Phone Call */}
        <a
          href="tel:+918139031924"
          aria-label="Call Poovar Boating"
          className={`${buttonBaseClasses} text-blue-400 hover:bg-blue-500/30 hover:text-white focus:ring-blue-300`}
        >
          <FaPhone />
        </a>

        {/* Chatbot Toggle */}
        <button
          onClick={() => setShowChatbot((prev) => !prev)}
          aria-expanded={showChatbot}
          aria-label="Toggle live chatbot support"
          className={`${buttonBaseClasses} text-cyan-400 hover:bg-cyan-500/30 hover:text-white focus:ring-cyan-300`}
        >
          <TawkToChat />
        </button>
      </nav>
    </>
  );
}
