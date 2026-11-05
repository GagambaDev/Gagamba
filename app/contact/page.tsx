"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import PrimaryButton from "@/components/PrimaryButton";
import FormLabel from "@/components/FormLabel";
import { Quote } from "@/types/forms/quote";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Shared field styling. Valid: 1px Onyx 60% border. Invalid or focused: 2px border.
// Padding drops by 1px when the border grows to 2px, so the text never shifts.
const fieldBase =
  "w-full bg-white font-body text-base text-onyx placeholder:text-onyx-60 focus:border-2 focus:border-sapphire focus:px-[15px] focus:py-[11px] focus:outline-hidden";
const fieldValid = "border border-onyx-60 px-4 py-3 hover:border-onyx";
const fieldInvalid = "border-2 border-error px-[15px] py-[11px]";

// Error text under a field (and the general send error). The hidden "Error:" is for screen readers.
function FieldError({ id, message, alert = false }: { id: string; message?: string; alert?: boolean }) {
  if (!message) return null;
  return (
    <p id={id} role={alert ? "alert" : undefined} className="font-body text-sm text-error">
      <span className="sr-only">Error: </span>
      {message}
    </p>
  );
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Quote>();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ref, fadeTop } = useScrollReveal();
  const thanksRef = useRef<HTMLHeadingElement>(null);

  // Move keyboard focus to the thank-you message when it appears
  useEffect(() => {
    if (submitted) thanksRef.current?.focus();
  }, [submitted]);

  const onSubmit = async (quote: Quote) => {
    setLoading(true);
    setError(null);
    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quote),
    });
    if (!response.ok) {
      const body = await response.json();
      setError(body.error ?? "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }
    setSubmitted(true);
    reset();
    setLoading(false);
  };

  return (
    <main className="bg-white px-6 py-16 lg:px-8 lg:py-[120px]">
      <div ref={ref} className="mx-auto w-full max-w-[640px] text-left">
        <h1
          style={fadeTop(0)}
          className="font-header text-[42px] font-bold leading-tight text-sapphire lg:text-[68px]"
        >
          Reach out to Gagamba
        </h1>
        <p style={fadeTop(0.1)} className="mt-4 font-body text-lg text-onyx-70">
          Have a question, idea, or just want to say hello? Send us a message and we'll get back to you.
        </p>

        {submitted ? (
          <div className="mt-10 bg-pearl p-8">
            <h2
              ref={thanksRef}
              tabIndex={-1}
              className="font-header text-[20px] font-semibold text-sapphire focus:outline-hidden lg:text-[26px]"
            >
              Thanks. Message received.
            </h2>
            <p className="mt-3 font-body text-base text-onyx">
              We'll get back to you soon. A confirmation is on its way to your inbox.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 cursor-pointer font-body text-base text-sapphire underline hover:text-tanzanite"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-10 flex flex-col gap-6">
            {/* Name and Email: side by side on desktop, stacked on phone */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-x-4">
              <div className="flex flex-col gap-2">
                <FormLabel htmlFor="name" label="Name" required />
                <Input
                  id="name"
                  type="text"
                  autoComplete="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="John Doe"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`h-12 ${fieldBase} ${errors.name ? fieldInvalid : fieldValid}`}
                />
                <FieldError id="name-error" message={errors.name?.message} />
              </div>

              <div className="flex flex-col gap-2">
                <FormLabel htmlFor="email" label="Email" required />
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  placeholder="email@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`h-12 ${fieldBase} ${errors.email ? fieldInvalid : fieldValid}`}
                />
                <FieldError id="email-error" message={errors.email?.message} />
              </div>
            </div>

            {/* Message: full width */}
            <div className="flex flex-col gap-2">
              <FormLabel htmlFor="message" label="Message" required />
              <Textarea
                id="message"
                {...register("message", { required: "Message is required" })}
                placeholder="Tell us what's on your mind..."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`min-h-40 resize-y ${fieldBase} ${errors.message ? fieldInvalid : fieldValid}`}
              />
              <FieldError id="message-error" message={errors.message?.message} />
            </div>

            <FieldError id="form-error" message={error ?? undefined} alert />

            {/* Full-width button on phone, natural width on desktop */}
            <div className="flex flex-col items-stretch gap-3 lg:items-start">
              <PrimaryButton
                type="submit"
                disabled={loading}
                label={loading ? "Sending…" : "Send Message"}
              />
              <p className="font-body text-sm text-onyx-70">
                By sending this message you agree to our{" "}
                <Link href="/privacy" className="text-sapphire underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}