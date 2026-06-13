"use client";

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

export interface GradientConfig {
    shape: string;    // e.g. "ellipse 70% 60%"
    position: string; // e.g. "10% 10%"
    color: string;    // RGB triplet e.g. "40,80,220"
    maxAlpha: number; // peak opacity of this gradient e.g. 0.13
}

// Alpha is animated inside rgba() rather than on element opacity to avoid
// GPU compositor layer snap at the start/end of hover transitions.
function buildBackground(gradients: GradientConfig[], a: number): string {
    return gradients
        .map(g => `radial-gradient(${g.shape} at ${g.position}, rgba(${g.color},${(g.maxAlpha * a).toFixed(4)}) 0%, transparent 100%)`)
        .join(", ");
}

interface HoverGlowProps {
    gradients: GradientConfig[];
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    element?: "div" | "section" | "article" | "main";
    lerpFactor?: number;
    breatheAmplitude?: number;
    breathePeriodMs?: number;
}

export default function HoverGlow({
    gradients,
    children,
    className = "",
    style,
    element: Tag = "div",
    lerpFactor = 0.05,
    breatheAmplitude = 0.3,
    breathePeriodMs = 3500,
}: HoverGlowProps) {
    const glowRef      = useRef<HTMLDivElement>(null);
    const targetAlpha  = useRef(0);
    const currentAlpha = useRef(0);
    const animFrameId  = useRef(0);

    useEffect(() => {
        const tick = () => {
            const diff = targetAlpha.current - currentAlpha.current;
            if (Math.abs(diff) > 0.0005) {
                currentAlpha.current += diff * lerpFactor;
            }

            const a = currentAlpha.current;
            if (glowRef.current && a > 0.001) {
                // Sine wave mapped to [0, 1], then scaled to [1 - breatheAmplitude, 1]
                // so the glow pulses between those bounds while hovered.
                const breathe = 1 - breatheAmplitude + breatheAmplitude * ((Math.sin((Date.now() / breathePeriodMs) * Math.PI * 2) + 1) / 2);
                glowRef.current.style.background = buildBackground(gradients, a * breathe);
            }

            animFrameId.current = requestAnimationFrame(tick);
        };
        animFrameId.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(animFrameId.current);
    }, [gradients, lerpFactor, breatheAmplitude, breathePeriodMs]);

    return (
        <Tag
            className={`relative ${className}`}
            style={style}
            onMouseEnter={() => { targetAlpha.current = 1; }}
            onMouseLeave={() => { targetAlpha.current = 0; }}
        >
            <div
                ref={glowRef}
                className="absolute inset-0 pointer-events-none"
                style={{ background: buildBackground(gradients, 0) }}
            />
            {children}
        </Tag>
    );
}
