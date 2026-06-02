"use client";

import Image from "next/image";
import MouseTracker from "./MouseTracker";
import InfiniteScroll from "./InfiniteScroll";

/**
 * SocialProof
 *
 * Purpose:
 * - Example composition showing how to present partner logos using `MouseTracker`
 *   (spotlight highlight) and `InfiniteScroll` (looping track).
 *
 * How to add logos:
 * 1. Put the SVG file in `public/images/partners/`.
 * 2. Ensure the SVG has a proper `viewBox` and does not depend on external CSS.
 * 3. Register the logo in the `technologies` array below, e.g.: 
 *    { name: "AcmeCo", src: "/images/partners/AcmeCo-Logo.svg" }
 *
 * Sizing & Coloring:
 * - Display sizes are controlled by the wrapper classes around the `<Image />`.
 *   Default sizing: `w-36 h-24` (adjust in this file to change display size).
 * - Logos are rendered with `grayscale invert` to produce monochrome output while
 *   preserving internal luminosity. To force solid white, use `brightness-0 invert`.
 */

const technologies = [
    { name: "UNLV", src: "/images/partners/UNLV-Logo.svg" },
    { name: "Blackfire", src: "/images/partners/BlackFire-Innovation-Logo.svg" },
    { name: "SBDC", src: "/images/partners/Nevada-SBDC-Logo.svg" },
    { name: "RebelForge", src: "/images/partners/RebelForge-Logo.svg" },
    { name: "Zero Labs", src: "/images/partners/ZeroLabs-Logo.svg" },
];

export default function SocialProof() {
    const renderLogos = technologies.map((tech) => (
        <div
            key={tech.name}
            className="opacity-75 transition-all duration-300 hover:opacity-100 w-32 md:w-48 flex justify-center"
        >
            <div className="relative w-36 h-24">
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
        <MouseTracker 
            className="bg-[#04060f] text-white py-32 px-6"
            overlayColor="rgba(52,95,195,0.9)"
        >
            {/* Glow — left side, echoing the Hero */}
            <div
                className="absolute inset-0 pointer-events-none"
            />

            {/* Dot grid texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto text-center md:text-left">
                <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4 mx-auto md:mx-0">
                    Trusted Technology
                </p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-16 mx-auto md:mx-0">
                    Our Co-Innovation{" "}
                    {/*  */}
                    <span className="text-transparent bg-clip-text" style={{backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)"}}>Partners</span>
                </h2>

                <InfiniteScroll 
                    items={renderLogos} 
                    fadeColor="#04060f" 
                    speed="40s" 
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-[#050810] to-transparent pointer-events-none" />
        </MouseTracker>
    );
}