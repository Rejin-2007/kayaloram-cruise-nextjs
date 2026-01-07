class ActionProvider {
  // ✅ Declare class properties FIRST
  private createChatBotMessage: (message: string, options?: any) => any;
  private setState: (fn: (prev: any) => any) => void;

  // ✅ Type constructor parameters
  constructor(
    createChatBotMessage: (message: string, options?: any) => any,
    setStateFunc: (fn: (prev: any) => any) => void
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleBooking = () => {
    const message = this.createChatBotMessage(
      "You can book a cruise by calling or WhatsApp!",
      {}
    );

    this.setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
