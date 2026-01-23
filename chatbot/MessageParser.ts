class MessageParser {
  private actionProvider: any;

  constructor(actionProvider: any) {
    this.actionProvider = actionProvider;
  }

  parse(message: string) {
    if (!message) return;

    const lower = message.toLowerCase().trim();

    if (
      lower.includes("book") ||
      lower.includes("booking") ||
      lower.includes("price") ||
      lower.includes("contact") ||
      lower.includes("whatsapp")
    ) {
      this.actionProvider.handleBooking();
      return;
    }
  }
}

export default MessageParser;
