import { createChatBotMessage } from "react-chatbot-kit";

const config: any = {
  botName: "Kayaloram Bot",

  initialMessages: [
    createChatBotMessage(
      "👋 Hi! Welcome to Kayaloram Backwater Cruises. How can I help you today?",
      {}
    ),
  ],

  customStyles: {
    botMessageBox: {
      backgroundColor: "#0f766e", // emerald-700
    },
    chatButton: {
      backgroundColor: "#0f766e",
    },
  },
};

export default config;
