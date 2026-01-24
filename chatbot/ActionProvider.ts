"use client";

import { createChatBotMessage } from "react-chatbot-kit";

type CreateChatBotMessage = (
  message: string,
  options?: Record<string, any>
) => any;

type SetStateFunc = React.Dispatch<React.SetStateAction<any>>;

class ActionProvider {
  private createChatBotMessage: CreateChatBotMessage;
  private setState: SetStateFunc;

  constructor(
    createChatBotMessage: CreateChatBotMessage,
    setStateFunc: SetStateFunc
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBooking = () => {
    const message = this.createChatBotMessage(
      "You can book a cruise by calling or WhatsApp!",
      {} // 👈 REQUIRED for TypeScript
    );

    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
