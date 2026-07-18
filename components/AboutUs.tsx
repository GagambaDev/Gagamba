"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutUs() {
    const { ref, fadeTop } = useScrollReveal();
    return (
        <section className="relative text-white overflow-hidden py-32 px-6">

            {/* Glow — right side for variety */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 55% at 80% 55%, rgba(22,65,185,0.75) 0%, rgba(12,35,110,0.35) 45%, transparent 70%)",
                }}
            />



            <div ref={ref} className="relative z-10 max-w-6xl mx-auto">

                <p style={fadeTop(0)} className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
                    Who We Are
                </p>

                <h2 style={fadeTop(0.1)} className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    Built for the{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                    >
                        walls of tomorrow
                    </span>
                </h2>

                <div style={fadeTop(0.2)} className="w-16 h-[2px] bg-blue-500 mb-10" />

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                        <p>
                            Gagamba was founded on a straightforward observation — building
                            maintenance is dangerous, costly, and overdue for disruption.
                            We set out to build autonomous drone technology that removes
                            people from harm's way entirely.
                        </p>
                        <p>
                            Our team brings together expertise across mechanical engineering,
                            civil engineering, and computer science, combining hardware
                            precision with intelligent software to create a drone built for
                            real-world conditions.
                        </p>
                    </div>
                    <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
                        <p>
                            We've engaged directly with companies in construction and property
                            management to understand the industry's needs and validate our
                            approach. Every decision we make is informed by research and
                            real feedback from the field.
                        </p>
                        <p>
                            Backed by aerospace expertise and a drive to solve problems that
                            matter, Gagamba is building technology that makes buildings safer
                            to maintain and more efficient to operate.
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}