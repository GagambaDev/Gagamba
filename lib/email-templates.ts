import { Quote } from "@/types/forms/quote";
import {
  emailHeader,
  emailIntro,
  emailField,
  emailSignoff,
  emailFooter,
  emailLayout,
  escapeHtml,
} from "@/lib/email-components";

export function quoteEmailBody(quote: Quote): string {
  const body = `${emailIntro("You've received a new quote request through the website.")}${emailField("Name", quote.name)}${emailField("Email", quote.email)}${emailField("Message", quote.message)}`;
  return emailLayout(emailHeader("New quote request"), body, emailFooter());
}

export function quoteConfirmationEmailBody(quote: Quote): string {
  const intro = emailIntro(`Hi ${escapeHtml(quote.name)}, thanks for reaching out to <strong>Team Gagamba</strong>! We've received your message and will get back to you soon.`);
  const body = `${intro}${emailField("Your message", quote.message)}${emailSignoff("— Team Gagamba")}`;
  return emailLayout(emailHeader("We received your message"), body, emailFooter());
}
