import { createChatBotMessage } from "react-chatbot-kit";

const config: any = {
  botName: "Kayaloram Bot",
  initialMessages: [
    createChatBotMessage("Hi! How can I help you today?",{})
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#0f766e" },
    chatButton: { backgroundColor: "#0f766e" },
  },
};

export default config;
