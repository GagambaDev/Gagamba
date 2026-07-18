"use client";

import DronePartDropdown from '@/components/drone/DronePartDropdown';
import { type DronePart } from '@/lib/types';
import { useScrollReveal } from "@/hooks/useScrollReveal";

const DRONE_PARTS: DronePart[] = [
  {
    id: 'propellers',
    title: 'Propellers',
    down: '42%', // % down from top edge of image
    right: '15%', // % right from left edge of image
    tourCopy: 'Eight coaxial propellers generate the lift and redundancy needed to carry the full 66 lb system and remain airborne even with a single motor failure.',
    spotlightRadius: '18%',
  },
  {
    id: 'battery',
    title: 'Battery',
    down: '45%',
    right: '50%',
    tourCopy: 'High-capacity LiPo batteries power the motors, pump, and onboard compute, delivering roughly 24 minutes of flight time per mission cycle.',
    spotlightRadius: '12%',
  },
  {
    id: 'water-tank',
    title: 'Water Tank',
    down: '55%',
    right: '47%',
    tourCopy: 'A 12-liter onboard reservoir eliminates the tether entirely, freeing Gagamba from the ~200 ft altitude ceiling that limits hose-fed competitors.',
    spotlightRadius: '13%',
  },
  {
    id: 'pressure-nozzle',
    title: 'Pressure Nozzle',
    down: '55%',
    right: '54%',
    tourCopy: 'A precision nozzle delivers a controlled stream of water onto the glass, keeping spray contained within the detected window boundary while minimizing waste.',
    spotlightRadius: '12%',
  },
  {
    id: 'camera',
    title: 'Camera',
    down: '44%',
    right: '55%',
    tourCopy: 'The onboard camera feeds the computer vision system that identifies glass panes, guides docking, and captures the data behind the Post-Flight Report.',
    spotlightRadius: '11%',
  }
]

export default function DroneDiagram() {
  const { ref, fadeTop } = useScrollReveal();
  return (
    <section className="relative text-white overflow-hidden py-32 px-6">

      {/* Glow — left side, echoing the Hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 15% 70%, rgba(22,65,185,0.6) 0%, rgba(12,35,110,0.25) 50%, transparent 72%)",
        }}
      />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">

        <p style={fadeTop(0)} className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
          The Drone
        </p>

        <h2 style={fadeTop(0.1)} className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
          Meet {" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
          >
            Gagamba
          </span>
        </h2>

        <div style={fadeTop(0.2)} className="w-16 h-[2px] bg-blue-500 mb-16" />

        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl rounded-[1.75rem] border border-white/15 bg-white/[0.04] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div className="absolute -inset-px rounded-[inherit] bg-gradient-to-br from-white/25 via-blue-400/20 to-transparent opacity-70 pointer-events-none" />

            <div className="relative rounded-[1.25rem] border border-white/10 bg-[#081225] p-3 shadow-[inset_0_1px_0_rgba(165,192,255,0.16)]">
              <DronePartDropdown parts={DRONE_PARTS} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
