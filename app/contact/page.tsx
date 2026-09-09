"use client";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import SubmitButton from "@/components/SubmitButton";
import React, { useState } from "react";
import FormLabel from "@/components/FormLabel";
import { useForm } from "react-hook-form";
import { Quote } from "@/types/forms/quote";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Quote>();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { ref, fadeTop } = useScrollReveal();

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
    <main className="relative min-h-screen text-white flex items-center justify-center px-6 py-32 overflow-hidden">

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 75% 40%, rgba(22,65,185,0.7) 0%, rgba(12,35,110,0.3) 45%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div ref={ref} className="relative z-10 w-full max-w-2xl">

        <p style={fadeTop(0)} className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
          Get in Touch
        </p>
        <h1 style={fadeTop(0.1)} className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-3 whitespace-nowrap">
          Reach Out to{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
          >
            Gagamba
          </span>
        </h1>
        <p style={fadeTop(0.2)} className="text-gray-400 text-lg mb-10 leading-relaxed">
          Have a question, idea, or just want to say hello? Send us a message and we'll get back to you.
        </p>

        <div style={fadeTop(0.3)} className="w-16 h-[2px] bg-blue-500 mb-10" />

        {submitted ? (
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-8 py-10 text-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-xl mb-2">Message Received</h3>
            <p className="text-gray-400 text-sm">We'll be in touch shortly.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200 underline underline-offset-4 cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 space-y-6 backdrop-blur-sm"
          >
            {/* Name */}
            <div className="space-y-2">
              <FormLabel label="Name" />
              <Input
                {...register("name", { required: "Name is required" })}
                placeholder="John Doe"
                className={`w-full bg-white/[0.05] border ${errors.name ? "border-red-500/60" : "border-white/10 hover:border-white/20"} focus:border-blue-500/60 focus:outline-none text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm transition-colors duration-200`}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <FormLabel label="Email" />
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                placeholder="email@example.com"
                type="email"
                className={`w-full bg-white/[0.05] border ${errors.email ? "border-red-500/60" : "border-white/10 hover:border-white/20"} focus:border-blue-500/60 focus:outline-none text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm transition-colors duration-200`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <FormLabel label="Message" />
              <Textarea
                {...register("message", { required: "Message is required" })}
                placeholder="Tell us what's on your mind..."
                rows={5}
                className={`w-full bg-white/[0.05] border ${errors.message ? "border-red-500/60" : "border-white/10 hover:border-white/20"} focus:border-blue-500/60 focus:outline-none text-white placeholder-white/25 rounded-xl px-4 py-3 text-sm transition-colors duration-200 resize-none`}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}

            <SubmitButton label={loading ? "Sending..." : "Send Message"} />
          </form>
        )}
      </div>
    </main>
  );
}