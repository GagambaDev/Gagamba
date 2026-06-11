"use client";

/**
 * HoverGlow
 *
 * Purpose:
 * - Wraps any subtree and renders layered radial-gradient glows that fade in
 *   smoothly on hover and pulse with a slow breathing effect.
 *
 * Props:
 * - gradients: GradientConfig[] — one entry per radial gradient layer. Each
 *   entry specifies the CSS shape, focal position, RGB color, and peak alpha.
 * - as?: "div" | "section" | "article" | "main" — rendered HTML element (default "div").
 * - className?: string — additional classes on the wrapper element.
 * - style?: CSSProperties — inline styles on the wrapper element.
 * - lerpFactor?: number — per-frame lerp step for hover fade (default 0.05).
 *   Lower = slower/smoother, higher = snappier.
 * - breatheAmplitude?: number — how much the glow pulses. 0 = static, 1 = fades
 *   fully to invisible at the bottom of each cycle (default 0.3).
 * - breathePeriodMs?: number — breathing cycle duration in ms (default 3500).
 *
 * Notes:
 * - Alpha is animated inside rgba() rather than on the element's opacity property.
 *   This avoids GPU compositor layer promotion/demotion, which causes a visible snap
 *   at the start and end of CSS opacity transitions.
 * - buildBackground is a pure module-level function so the rAF tick can safely
 *   reference it without a stale closure.
 */

import { CSSProperties, ReactNode, useEffect, useRef } from "react";

export interface GradientConfig {
    shape: string;    // e.g. "ellipse 70% 60%"
    at: string;       // e.g. "10% 10%"
    color: string;    // RGB triplet e.g. "40,80,220"
    maxAlpha: number; // peak opacity of this gradient e.g. 0.13
}

function buildBackground(gradients: GradientConfig[], a: number): string {
    return gradients
        .map(g => `radial-gradient(${g.shape} at ${g.at}, rgba(${g.color},${(g.maxAlpha * a).toFixed(4)}) 0%, transparent 100%)`)
        .join(", ");
}

interface HoverGlowProps {
    gradients: GradientConfig[];
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    as?: "div" | "section" | "article" | "main";
    lerpFactor?: number;
    breatheAmplitude?: number;
    breathePeriodMs?: number;
}

export default function HoverGlow({
    gradients,
    children,
    className = "",
    style,
    as: Tag = "div",
    lerpFactor = 0.05,
    breatheAmplitude = 0.3,
    breathePeriodMs = 3500,
}: HoverGlowProps) {
    const glowRef      = useRef<HTMLDivElement>(null);
    const targetAlpha  = useRef(0);
    const currentAlpha = useRef(0);
    const rafId        = useRef(0);

    useEffect(() => {
        const tick = () => {
            const diff = targetAlpha.current - currentAlpha.current;
            if (Math.abs(diff) > 0.0005) {
                currentAlpha.current += diff * lerpFactor;
            }

            const a = currentAlpha.current;
            if (glowRef.current && a > 0.001) {
                const breathe = 1 - breatheAmplitude + breatheAmplitude * ((Math.sin((Date.now() / breathePeriodMs) * Math.PI * 2) + 1) / 2);
                glowRef.current.style.background = buildBackground(gradients, a * breathe);
            }

            rafId.current = requestAnimationFrame(tick);
        };
        rafId.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafId.current);
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
