"use client";

import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "./PrimaryButton";
// import EyebrowLabel from "./EyebrowLabel";
import PageTitle from "./PageTitle";
import Subtitle from "./Subtitle";
import AboutUs from "./AboutUs";
import MeetTheTeam from "./MeetTheTeam";

export default function Hero() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#04060f] text-white text-center px-4 relative overflow-hidden">

        {/* Single unified glow — left-offset, bleeds into black */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 75% 65% at 20% 35%, rgba(22,65,185,0.9) 0%, rgba(12,35,110,0.4) 45%, transparent 70%)" }} />

        {/* Grid overlay: Adjust opacity and backgroundSize to tune grid visibility and density  */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,170,255,0.25) 1px, transparent 1px), \
              linear-gradient(90deg, rgba(0,170,255,0.25) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />

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

          {/* <EyebrowLabel message="Next Generation Drone Technology" /> */}

          <div className="mt-5">
            <PageTitle prefix="" highlight="GAGAMBA" />
          </div>

          <div className="mt-4">
            <Subtitle message="No Crew. No Tether. No Compromise." />
          </div>

          <Link href="/contact" className="mt-7">
            <PrimaryButton message="Get a Quote" />
          </Link>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
      </section>

      <AboutUs />
      <MeetTheTeam />
    </>
  );
}