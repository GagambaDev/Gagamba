"use client";

// Figure out what to do with the next two lines
import Image from "next/image";
import Link from "next/link";

import PageTitle from "@/components/PageTitle";
import MeetTheTeam from "@/components/MeetTheTeam";
import MediaGallery from "@/components/MediaGallery";
import MissionStatement from "@/components/MissionStatement";

export default function About() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#04060f] text-white text-center px-4 relative overflow-hidden">

        {/* About page spotlight background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 75% 65% at 20% 35%, rgba(22,65,185,0.9) 0%, rgba(12,35,110,0.4) 45%, transparent 70%)" }} />
        
        {/* Bottom portion of About page will fade into a darker background */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />

        {/* Page title */}
        {/* <div className="mt-5">
          <PageTitle prefix="About" highlight="Us" />
        </div> */}

        <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-3"> 
          About US 
        </h1>
        
      </section>
        <MissionStatement />
        <MeetTheTeam />
        <MediaGallery />
    </>
  );
}