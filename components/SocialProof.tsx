"use client";

/**
 * SocialProof
 *
 * Purpose:
 * - Hero-style section that displays co-innovation partner logos in a
 *   continuously scrolling ticker, with a "Contact Us" CTA below.
 */

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import HoverGlow, { GradientConfig } from "@/components/ui/HoverGlow";
import InfiniteIconScroll from "@/components/ui/InfiniteScroll";
import { ShinyButton } from "@/components/ui/ShinyButton";

const TECHNOLOGIES = [
    { name: "UNLV",       src: "/images/partners/UNLV-Logo.svg" },
    { name: "Blackfire",  src: "/images/partners/BlackFire-Innovation-Logo.svg" },
    { name: "SBDC",       src: "/images/partners/Nevada-SBDC-Logo.svg" },
    { name: "RebelForge", src: "/images/partners/RebelForge-Logo.svg" },
    { name: "Zero Labs",  src: "/images/partners/ZeroLabs-Logo.svg" },
];

const GLOW_GRADIENTS: GradientConfig[] = [
    { shape: "ellipse 70% 60%", position: "10% 10%", color: "40,80,220",  maxAlpha: 0.13 },
    { shape: "ellipse 55% 50%", position: "90% 90%", color: "90,40,210",  maxAlpha: 0.11 },
];

export default function SocialProof() {
    const { ref, fadeTop, fadeBottom } = useScrollReveal();

    const renderLogos = TECHNOLOGIES.map((tech) => (
        <div
            key={tech.name}
            className="opacity-75 transition-all duration-300 hover:opacity-100 w-32 md:w-48 lg:w-56 flex justify-center"
        >
            <div className="relative w-36 h-24 md:w-48 md:h-32 lg:w-56 lg:h-36">
                <Image
                    src={tech.src}
                    alt={`${tech.name} logo`}
                    fill
                    className="object-contain grayscale invert"
                />
            </div>
        </div>
    ));

    return (
        <HoverGlow
            element="section"
            gradients={GLOW_GRADIENTS}
            className="overflow-hidden text-white py-32"
            style={{ background: "linear-gradient(to bottom, #09061A 0%, #04060f 220px, #04060f 100%)" }}
            breatheAmplitude={0.9}
            breathePeriodMs={4000}
        >
            {/* Dot grid texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.05]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div ref={ref} className="relative z-10">
                <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
                    <p style={fadeTop(0)} className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
                        Trusted Technology
                    </p>
                    <h2 style={fadeTop(0.1)} className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
                        Our Co-Innovation{" "}
                        <span
                            className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                        >
                            Partners
                        </span>
                    </h2>
                    <div style={fadeTop(0.2)} className="mx-auto lg:mx-0 w-16 h-0.5 bg-blue-500 mb-16" />
                </div>

                <div className="w-full md:w-[90%] mx-auto my-16">
                    <InfiniteIconScroll items={renderLogos} speed="35s" />
                </div>

                <div className="max-w-6xl mx-auto px-6">
                    <div style={fadeBottom()} className="mt-20 justify-center flex">
                        <ShinyButton href="/contact" className="lg:shiny-cta-lg">
                            Contact Us
                        </ShinyButton>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#050810] to-transparent pointer-events-none" />
        </HoverGlow>
    );
}
