import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";
import { quoteEmailBody, quoteConfirmationEmailBody } from "@/lib/email-templates";
import { Quote } from "@/types/forms/quote";

export async function POST(request: Request) {
  const quote: Quote = await request.json();

  if (!quote.name || !quote.email || !quote.message)
    return NextResponse.json({ error: "Name, email and message are required" }, { status: 400 });

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.RESEND_TO_EMAIL!,
    replyTo: quote.email,
    subject: `New quote request from ${quote.name}`,
    html: quoteEmailBody(quote),
  });

  if (error)
    return NextResponse.json({ error: error.message }, { status: 502 });

  const { error: confirmationError } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: quote.email,
    subject: "We received your message | Gagamba",
    html: quoteConfirmationEmailBody(quote),
  });

  if (confirmationError)
    return NextResponse.json({ error: confirmationError.message }, { status: 502 });

  return NextResponse.json({ id: data?.id }, { status: 200 });
}
