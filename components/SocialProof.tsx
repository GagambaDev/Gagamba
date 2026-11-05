"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import InfiniteScroll from "@/components/ui/InfiniteScroll";
import PrimaryButton from "@/components/PrimaryButton";

const PARTNERS = [
    { name: "UNLV",                 src: "/images/partners/UNLV-Logo.svg",                 widthPx: 160 },
    { name: "BlackFire Innovation", src: "/images/partners/BlackFire-Innovation-Logo.svg", widthPx: 200 },
    { name: "Nevada SBDC",          src: "/images/partners/Nevada-SBDC-Logo.svg",          widthPx: 120 },
    { name: "RebelForge",           src: "/images/partners/RebelForge-Logo.svg",           widthPx: 72 },
    { name: "Zero Labs",            src: "/images/partners/ZeroLabs-Logo.svg",             widthPx: 150 },
];

const PARTNER_LOGOS = PARTNERS.map((partner) => (
    <div
        key={partner.name}
        className="relative h-12 md:h-16"
        style={{ width: partner.widthPx }}
    >
        {/* Legal requires dark logos, so never add brightness-0: it ruins BlackFire, SBDC and RebelForge */}
        <Image
            src={partner.src}
            alt={`${partner.name} logo`}
            fill
            sizes={`${partner.widthPx}px`}
            className="object-contain grayscale"
        />
    </div>
));

export default function SocialProof() {
    const { ref, fadeTop, fadeBottom } = useScrollReveal();

    return (
        <section id="partners" className="bg-white px-6 py-16 md:px-8 md:py-30">
            <div ref={ref} className="mx-auto max-w-[1200px] text-center">
                <h2 style={fadeTop(0)} className="text-h2 text-sapphire">
                    Our Partners
                </h2>

                <div className="mt-12 md:mt-16">
                    <InfiniteScroll items={PARTNER_LOGOS} speed="40s" />
                </div>

                <div style={fadeBottom()} className="mt-14">
                    <PrimaryButton label="Contact Us" href="/contact" />
                </div>
            </div>
        </section>
    );
}
