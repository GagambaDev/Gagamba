'use client';
import { Prata } from 'next/font/google';
import Image from 'next/image';
import PlusPin from './PlusPin';

const Drone_Parts = [
    {
        id:'propellors',
        title: 'Propellors',
        description: 'something about the propellors',
        top: '35%', // % from top of image
        left: '15%', // % from left of image
    },
    {
        // same layout here
        id:'battery',
        top: '35%', // % from top of image
        left: '62%', // % from left of image

    },
    {
        id: 'water-tank',
        top: '78%', // % from top of image
        left: '15%', // % from left of image
    },
    {
        id: 'pressure-nozzle',
        top: '78%', // % from top of image
        left: '62%', // % from left of image
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
                    The Drone Stuff
                </p>

                <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    Meet Charlotte The{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                    >
                        Spider Drone
                    </span>
                </h2>

                <div className="w-16 h-[2px] bg-blue-500 mb-16" />

								{/* Drone Specs Popup Buttons */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Drone_Parts.map((part) => (
                    <button
                    	key={part.id}
                      className="absolute flex items-center justify-center"
                      style={{top: part.top, left: part.left}}
											onClick={() => console.log("component clicked")}
                    >
                    <PlusPin />
                    </button>
                  ))}
                </div>

                <div className="border border-white inline-block">
                  <Image
                    src="/images/shapes.png"
                    alt="Shapes"
                    width={1000}
                    height={500}
                  />
                  
                </div>

            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
        </section>
    );
}