"use client";


import PageTitle from "@/components/PageTitle";
import MeetTheTeam from "@/components/MissionStatement";
import MediaGallery from "@/components/MediaGallery";
import MissionStatement from "@/components/MeetTheTeam";

export default function About() {
  return (
    <>
      <section className="flex min-h-screen flex-col items-center justify-center bg-[#04060f] text-white text-center px-4 relative overflow-hidden">

        {/* Single unified glow — left-offset, bleeds into black */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 75% 65% at 20% 35%, rgba(22,65,185,0.9) 0%, rgba(12,35,110,0.4) 45%, transparent 70%)" }} />
          <div className="mt-5">
            <PageTitle prefix="About" highlight="Us" />
          </div>
        

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
        
      
      </section>
      <MissionStatement />
      
      
        <MeetTheTeam />
        <MediaGallery />
      
    </>
  );
}