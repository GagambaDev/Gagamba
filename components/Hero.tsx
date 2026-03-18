"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-lime-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-lime-400/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lime-400/5 blur-3xl" />

      <div className="relative z-10 max-w-3xl flex flex-col items-center gap-8">

        {/* Logo with glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-lime-400/30 blur-2xl scale-110" />
          <Image
            src="/updated_logo-removebg.png"
            alt="Gagamba Drone Logo"
            width={240}
            height={240}
            className="relative z-10 brightness-125 drop-shadow-[0_0_40px_rgba(163,230,53,0.8)]"
          />
        </div>

        {/* Eyebrow label */}
        <div className="inline-block border border-lime-400/40 text-lime-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
          Next Generation Drone Technology
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight">
          The{" "}
          <span className="bg-gradient-to-r from-lime-300 to-lime-500 bg-clip-text text-transparent">
            Gagamba
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed">
          The first drone that can not only clean a wall, but paint it too.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => router.push("/coordinates")}
          className="mt-2 bg-lime-400 hover:bg-lime-300 text-black font-semibold text-sm sm:text-base h-10 sm:h-12 px-6 rounded-full cursor-pointer transition-all duration-200 shadow-[0_0_20px_rgba(163,230,53,0.4)] hover:shadow-[0_0_30px_rgba(163,230,53,0.7)]"
        >
          Got Coordinates?
        </button>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lime-400/30 to-transparent" />
    </section>
  );
}
