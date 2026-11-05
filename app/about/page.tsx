import type { Metadata } from "next";
import MissionStatement from "@/components/MissionStatement";
import MediaGallery from "@/components/MediaGallery";
import MeetTheTeam from "@/components/MeetTheTeam";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <div>
      <MissionStatement/>
      <MeetTheTeam/>
      <MediaGallery/>
    </div>
  );
}
