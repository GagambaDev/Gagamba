import { Quote } from "@/types/forms/quote";

export function quoteEmailBody(quote: Quote): string {
  return `Name: ${quote.name}\nEmail: ${quote.email}\n\n${quote.message}`;
}
