"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MissionStatement() {
    const { ref, fadeTop } = useScrollReveal();
    return (
        // Commented out below code to remove overlay that clashes with background
        // <section className="relative bg-[#04060f] text-white overflow-hidden py-32 px-6">
        // One line below is its replacement.
        <section>

            {/* Disabling top right glow near mission statement for now. */}
            {/* Glow — right side for variety */}
            {/* <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 55% at 80% 55%, rgba(22,65,185,0.75) 0%, rgba(12,35,110,0.35) 45%, transparent 70%)",
                }}
            /> */}



            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">

                <p style={fadeTop(0)} className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
                    Mission Statement
                </p>

                <div style={fadeTop(0.1)} className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    No Crew.{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                    >
                        No Tether.{" "}
                    </span>
                    <br></br>
                    No Compromise.
                </div>

                <div style={fadeTop(0.2)} className="w-16 h-[2px] bg-blue-500 mb-1" />

                
                    <div className="space-y-5 text-gray-300 text-lg leading-relaxed flex justify-center items-center">
                        <p className="max-w-3xl my-12">
                            At Gagamba, we aren't just cleaning windows; we are engineering a safer, greener, and more efficient future for high-rise property maintenance.
                            By deploying advanced drone technology, we eliminate the need for traditional at-height crews, ensuring that human lives are never put at risk on
                            dangerous high-rise structures.
                            <br></br>
                            <br></br>
                            Our EPA 608, OSHA 10 Construction, OSHA 10 Manufacturing, and forklift led engineering team is qualified to work through a FAA part 107 license.
                            Utilizing eco-friendly design to minimize our environmental impact, our drone uses AI-powered software, calculating optimal cleaning patterns
                            to maximize efficiency and conserving up to 29 times more water than current cleaning drones in the market.
                        </p>
                    </div>
              
            </div>        </section>
    );
}