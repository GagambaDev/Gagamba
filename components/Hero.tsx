"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
import PageTitle from "./PageTitle";
import Subtitle from "./Subtitle";
import AboutUs from "./AboutUs";
import MeetTheTeam from "./MeetTheTeam";
import SocialProof from "./SocialProof";

export default function Hero() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center bg-background text-white text-center px-4 relative overflow-hidden">

        {/* Single unified glow — center, bleeds into black */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 75% 65% at 48% 54%, rgba(22,65,185,0.9) 0%, rgba(12,35,110,0.4) 45%, transparent 70%)" }} />

        {/* Grid overlay: Adjust opacity and backgroundSize to tune grid visibility and density */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgb(0,170,255,1) 1.5px, transparent 1.5px), \
              linear-gradient(rgba(0,170,255,0.25) 1px, transparent 1px), \
              linear-gradient(90deg, rgba(0,170,255,0.25) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            backgroundPosition: "-32px -32px, 0 0, 0 0",
          }}
        />

        <div className="relative z-10 max-w-3xl flex flex-col items-center">

          {/* Logo */}
          <div className="relative -mb-7">

            <Image
              src="/images/gagamba_logo.png"
              alt="Gagamba Logo"
              width={180}
              height={180}
            className="brightness-160"
            />
          </div>

          <div className="mt-5">
            <PageTitle prefix="" highlight="GAGAMBA" />
          </div>

          <div className="mt-4">
            <Subtitle normal="No Crew. No Tether." highlight="No Compromise." />
          </div>

          <Link href="/contact" className="mt-7">
            <PrimaryButton message="Get a Quote" />
          </Link>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-ink-black)] to-transparent pointer-events-none" />
      </section>

      <AboutUs />
      <MeetTheTeam />
      <SocialProof />
    </>
  );
}