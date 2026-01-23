"use client";

import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./config";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

export default function ChatBotUI() {
  return (
    <div className="w-[320px] h-112.5 shadow-2xl rounded-xl overflow-hidden">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
}
