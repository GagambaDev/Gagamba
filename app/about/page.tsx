"use client";

import MissionStatement from "@/components/MissionStatement";
import MediaGallery from "@/components/MediaGallery";
import MeetTheTeam from "@/components/MeetTheTeam";

export default function About() {
  return (
    <div>
      {/* Imported Page Components In Order: */}
      <MissionStatement/>
      <MeetTheTeam/>
      <MediaGallery/>
    </div>
  );
}