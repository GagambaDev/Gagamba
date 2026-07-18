"use client";


import MissionStatement from "@/components/MissionStatement";
import MediaGallery from "@/components/MediaGallery";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function About() {
  return (
    <div>
      <section className="flex min-h-screen flex-col items-center justify-center text-white text-center px-4 relative overflow-hidden">

        {/* <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-3"> 
          About Us
        </h1> */}

        {/* Single unified glow — left-offset, bleeds into black */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 75% 65% at 20% 35%, rgba(22,65,185,0.9) 0%, rgba(12,35,110,0.4) 45%, transparent 70%)" }} />
          <div className="mt-5">
            <MissionStatement/>
          </div>
        

        {/* Page title */}
        {/* <div className="mt-5">
          <PageTitle prefix="About" highlight="Us" />
        </div> */}
        
      </section>
        
        
        <MeetTheTeam/>
        <MediaGallery/>
      
    </div>
  );
}