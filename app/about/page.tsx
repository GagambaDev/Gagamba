"use client";

import MissionStatement from "@/components/MissionStatement";
import MediaGallery from "@/components/MediaGallery";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function About() {
  return (
    <div>
        {/* Single unified glow — left-offset, bleeds into black */}
        <div style={{position: 'absolute', top: '70px', display: 'block',
                    transform: 'none', color: '#ffffff', fontSize: '1.25rem', fontWeight: 500,
                    zIndex: 20}}>  
        </div>
        
        KADJFJASDHFJHASJKLHDAJSDHL
        {/* Bottom portion of About page will fade into a darker background */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" /> */}

      <MissionStatement/>
      <MeetTheTeam/>
      <MediaGallery/>
      
    </div>
  );
}