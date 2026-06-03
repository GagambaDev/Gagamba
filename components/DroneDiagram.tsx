import Image from 'next/image';
import DronePartDropdown from './DronePartDropdown';
import { type DronePart } from './PartDescription';

const DRONE_PARTS: DronePart[] = [
    {
        id:'propellors',
        title: 'Propellors',
        description: 'High-efficiency rotors.',
        down: '20.2%', // % down from top edge of image
        right: '19.1%', // % right from left edge of image
    },
    {
        // same layout here
        id:'battery',
        title: 'Battery',
        description: 'High efficiency and long lasting.',
        down: '14.6%', // % down from top edge of image
        right: '72.6%', // % right from left edge of image

    },
    {
        id: 'water-tank',
        title: 'Water Tank',
        description: 'Carry up to 5 gallons of cleaning solution.',
        down: '73%', // % down from top edge of image
        right: '20.3%', // % right from left edge of image
    },
    {
        id: 'pressure-nozzle',
        title: 'Pressure Nozzle',
        description: 'Low flow nozzle for efficient water usage.',
        down: '77.4%', // % down from top edge of image
        right: '72.7%', // % right from left edge of image
    }
    // other component details go here
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

                <div className="w-16 h-[2px] bg-blue-500 mb-16" />

                <div className="flex justify-center">
                  <div className="relative inline-block max-w-full">
                    <DronePartDropdown parts={DRONE_PARTS} />

                    <Image
                      src="/images/shapes.png"
                      alt="Shapes"
                      width={500}
                      height={889}
                    />
                  </div>
                </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
        </section>
    );
}
