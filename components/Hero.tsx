"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import EyebrowLabel from "./EyebrowLabel";
import PageTitle from "./PageTitle";
import Subtitle from "./Subtitle";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[#04060f] text-white text-center px-4 relative overflow-hidden">

      {/* Single unified glow — left-offset, bleeds into black */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 75% 65% at 20% 35%, rgba(22,65,185,0.9) 0%, rgba(12,35,110,0.4) 45%, transparent 70%)" }} />

      <div className="relative z-10 max-w-3xl flex flex-col items-center">

        {/* Logo */}
        <div className="relative mb-4">
          <Image
            src="/images/logo.png"
            alt="Gagamba Drone Logo"
            width={180}
            height={180}
            className="brightness-150"
          />
        </div>

        <EyebrowLabel message="Next Generation Drone Technology" />

        <div className="mt-5">
          <PageTitle prefix="The" highlight="Gagamba" />
        </div>

        <div className="mt-4">
          <Subtitle message="The first drone that can not only clean a wall, but paint it too." />
        </div>

        <Link href="/coordinates" className="mt-7">
          <PrimaryButton message="Get a Quote?" />
        </Link>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
    </section>
  );
}