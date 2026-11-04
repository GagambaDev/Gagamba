import type { Metadata } from "next";
import ProductTourVideo from "@/components/tour/ProductTourVideo";

// Preview of the video-driven drone tour, kept beside the frame-sequence tour on the home page.
export const metadata: Metadata = {
  title: "Drone tour (video)",
  robots: { index: false },
};

export default function TourVideoPage() {
  return <ProductTourVideo />;
}
