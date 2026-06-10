import DronePartDropdown from './DronePartDropdown';
import { type DronePart } from './PartDescription';

const DRONE_PARTS: DronePart[] = [
  {
    id:'propeller-guard',
    title: 'Propeller Guard',
    description: 'Shields the propellers from impact during close building passes and keeps the aircraft safer around edges, cables, and glass.',
    down: '45%', // % down from top edge of image
    right: '18.5%', // % right from left edge of image
    statSummary: 'Impact-safe perimeter protection',
    stats: [
      { label: 'Coverage', value: '270 deg' },
      { label: 'Clearance', value: '8 cm' },
      { label: 'Material', value: 'Carbon' },
      { label: 'Weight', value: '120 g' },
    ],
    tourCopy: 'Shields the propellers from damage and improves flight safety during close facade work.',
    focusRadius: '18%',
  },
  {
    id:'battery',
    title: 'Smart Battery',
    description: 'High-density power pack with fast swap access, live health monitoring, and output tuned for long cleaning passes.',
    down: '45%',
    right: '50%',
    statSummary: 'Fast-swap flight power',
    stats: [
      { label: 'Runtime', value: '34 min' },
      { label: 'Charge', value: '42 min' },
      { label: 'Cells', value: '12S' },
      { label: 'Cycles', value: '400+' },
    ],
    tourCopy: 'Powers each cleaning pass with live health telemetry and a fast-swap bay for short turnaround time.',
    focusRadius: '12%',
  },
  {
    id: 'water-tank',
    title: 'Water Tank',
    description: 'Low-profile tank carries cleaning solution close to the center of mass, keeping the drone stable as fluid levels change.',
    down: '55%',
    right: '47%',
    statSummary: 'Balanced onboard fluid storage',
    stats: [
      { label: 'Capacity', value: '5 gal' },
      { label: 'Balance', value: 'Center' },
      { label: 'Flow', value: '1.8 L/m' },
      { label: 'Weight', value: '18.9 kg' },
    ],
    tourCopy: 'Carries up to 5 gallons of cleaning solution while preserving balance through the center-mounted layout.',
    focusRadius: '13%',
  },
  {
    id: 'pressure-nozzle',
    title: 'Pressure Nozzle',
    description: 'Directional low-flow nozzle focuses spray onto the cleaning path, reducing waste while maintaining useful pressure at the surface.',
    down: '55%',
    right: '54%',
    statSummary: 'Efficient directional spray',
    stats: [
      { label: 'Pressure', value: '900 psi' },
      { label: 'Pattern', value: 'Fan' },
      { label: 'Flow', value: 'Low' },
      { label: 'Angle', value: '35 deg' },
    ],
    tourCopy: 'Directs a controlled spray pattern onto the target surface for efficient water use.',
    focusRadius: '12%',
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
          Explore the aircraft in focus mode, then switch into a guided tour that walks through each major subsystem.
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
