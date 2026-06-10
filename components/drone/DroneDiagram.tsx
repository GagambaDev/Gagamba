import DronePartDropdown from './DronePartDropdown';
import { type DronePart } from './PartDescription';

const DRONE_PARTS: DronePart[] = [
  {
    id:'propeller-guard',
    title: 'Propeller Guard',
    down: '45%', // % down from top edge of image
    right: '18.5%', // % right from left edge of image
    tourCopy: 'Shields the propellers from damage and improves flight safety during close facade work.',
    spotlightRadius: '18%',
  },
  {
    id:'battery',
    title: 'Smart Battery',
    down: '45%',
    right: '50%',
    tourCopy: 'Powers each cleaning pass with live health telemetry and a fast-swap bay for short turnaround time.',
    spotlightRadius: '12%',
  },
  {
    id: 'water-tank',
    title: 'Water Tank',
    down: '55%',
    right: '47%',
    tourCopy: 'Carries up to 5 gallons of cleaning solution while preserving balance through the center-mounted layout.',
    spotlightRadius: '13%',
  },
  {
    id: 'pressure-nozzle',
    title: 'Pressure Nozzle',
    down: '55%',
    right: '54%',
    tourCopy: 'Directs a controlled spray pattern onto the target surface for efficient water use.',
    spotlightRadius: '12%',
  }
]

export default function DroneDiagram() {
  return (
    <section className="relative bg-[#04060f] text-white overflow-hidden py-32 px-6">

      {/* Glow — left side, echoing the Hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 15% 70%, rgba(22,65,185,0.6) 0%, rgba(12,35,110,0.25) 50%, transparent 72%)",
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

      <div className="relative z-10 max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
          The Drone 
        </p>

        <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
          Meet {" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
          >
            Gagamba
          </span>
        </h2>

        <div className="w-16 h-[2px] bg-blue-500 mb-8" />

        <p className="mb-10 max-w-2xl text-sm leading-6 text-slate-300 md:text-base">
          Follow a guided tour that walks through each major subsystem of the aircraft.
        </p>

        <div className="flex justify-center">
          <div className="relative w-full max-w-6xl rounded-[1.75rem] border border-white/15 bg-white/[0.04] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-white/25 via-blue-400/20 to-transparent opacity-70 pointer-events-none" />

            <div className="relative rounded-[1.25rem] bg-[#f8fafc] p-3">
              <DronePartDropdown parts={DRONE_PARTS} />
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
    </section>
  );
}
