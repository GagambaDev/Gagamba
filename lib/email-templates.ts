import { Quote } from "@/types/forms/quote";

export function quoteEmailBody(quote: Quote): string {
  return `Name: ${quote.name}\nEmail: ${quote.email}\n\n${quote.message}`;
}

export function quoteConfirmationEmailBody(quote: Quote): string {
  return `Hi ${quote.name},\n\nThanks for reaching out to Team Gagamba! We've received your message and will get back to you soon.\n\nFor reference, here's what you sent us:\n\n${quote.message}\n\n-Team Gagamba`;
}
