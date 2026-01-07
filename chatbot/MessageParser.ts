class MessageParser {
  private actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    const lower = message.toLowerCase();

    if (lower.includes("booking")) {
      this.actionProvider.handleBooking();
    }
  }
}

export default MessageParser;
