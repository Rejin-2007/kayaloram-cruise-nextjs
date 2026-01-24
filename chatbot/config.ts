"use client";

import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Staff Of Kayaloram",
  initialMessages: [
    createChatBotMessage(
      "Hi! How can I help you today?",
      {} // 👈 REQUIRED for TypeScript
    ),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#0f766e",
    },
    chatButton: {
      backgroundColor: "#0f766e",
    },
  },
};

export default config;
