// Step text is intentionally separate from the sequence renderer. Keys are the chapter ids in gagamba-tour-manifest.json.
export type TourStep = {
  title: string;
  body: string;
  chips: string[];
};

export const tourSteps: Record<number, TourStep> = {
  1: {
    title: "Meet Gagamba",
    body: "Scroll to explore every part of the drone.",
    chips: [],
  },
  2: {
    title: "Propellers",
    body: "Eight coaxial propellers generate the lift and redundancy needed to carry the full 66 lb system and remain airborne even with a single motor failure.",
    chips: ["8 coaxial propellers", "66 lb system", "Single-motor-failure tolerant"],
  },
  3: {
    title: "Battery",
    body: "High-capacity LiPo batteries power the motors, pump, and onboard compute, delivering roughly 24 minutes of flight time per mission cycle.",
    chips: ["LiPo", "~24 min flight time"],
  },
  4: {
    title: "Water Tank",
    body: "A 12-liter onboard reservoir eliminates the tether entirely, freeing Gagamba from the ~200 ft altitude ceiling that limits hose-fed competitors.",
    chips: ["12 L reservoir", "No tether", "No 200 ft ceiling"],
  },
  5: {
    title: "Pressure Nozzle",
    body: "A precision nozzle delivers a controlled stream of water onto the glass, keeping spray contained within the detected window boundary while minimizing waste.",
    chips: ["0.07 GPM", "29x less water"],
  },
  6: {
    title: "Camera",
    body: "The onboard camera feeds the computer vision system that identifies glass panes, guides docking, and captures the data behind the Post-Flight Report.",
    chips: ["Computer vision", "Post-Flight Report"],
  },
};
