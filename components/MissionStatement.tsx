"use client";

export default function MissionStatement() {
    return (
        <section className="relative bg-[#04060f] text-white overflow-hidden py-32 px-6">

            {/* Glow — right side for variety */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 55% at 80% 55%, rgba(22,65,185,0.75) 0%, rgba(12,35,110,0.35) 45%, transparent 70%)",
                }}
            />



            <div className="relative z-10 max-w-6xl mx-auto">

                <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
                    Our Mission Statement
                </p>

                <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    No Crew.{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                    >
                        No Tether.{" "}
                    </span>
                    <br></br>
                    No Compromise.
                </h2>

                <div className="w-16 h-[2px] bg-blue-500 mb-10" />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                        <p>
                            At Gagamba, we dedicate ourselves to a mission of safety, sustainability, and innovation as we redefine the standards of high-rise window cleaning.

                            By deploying advanced drone technology, we eliminate the need for traditional at-height crews, ensuring that human lives are never put at risk on 
                            dangerous high-rise structures. 
                            
                            Our OSHA-certified engineers utilize eco-friendly designs to minimize our environmental impact, while our AI-powered software calculates optimal 
                            cleaning patterns, maximizing efficiency and conserving up to 29 times more water than legacy methods.

                            We aren't just cleaning windows; we are engineering a safer, greener, and more efficient future for high-rise property maintenance.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#04060f] to-transparent pointer-events-none" />
        </section>
    );
}