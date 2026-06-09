/**
 * useScrollReveal
 *
 * Purpose:
 * - Observes when a container scrolls into the viewport and returns inline-style
 *   objects that animate child elements in from the top or bottom on first reveal.
 *   The observer disconnects after the first intersection so the animation fires
 *   once and never reverses.
 *
 * Usage:
 *   const { ref, fadeTop, fadeBottom } = useScrollReveal();
 *   <div ref={ref}>
 *     <h1 style={fadeTop(0)}>Fades in from above, no delay</h1>
 *     <h2 style={fadeTop(0.15)}>Fades in from above, 150ms later</h2>
 *     <p style={fadeBottom}>Fades in from below</p>
 *   </div>
 *
 * Returns:
 * - ref — attach to the container element to observe.
 * - fadeTop(delay?) — inline styles for a top-entry fade. Optional delay in seconds
 *   staggers multiple elements without needing separate observers.
 * - fadeBottom — inline styles for a bottom-entry fade (no delay variant needed
 *   in current usage, but delay can be added if required).
 *
 * Parameters:
 * - threshold?: number — fraction of the container that must be visible before
 *   the animation triggers (default 0.15).
 */

import { CSSProperties, useEffect, useRef, useState } from "react";

interface ScrollReveal {
    ref: React.RefObject<HTMLDivElement | null>;
    fadeTop: (delay?: number) => CSSProperties;
    fadeBottom: CSSProperties;
}

export function useScrollReveal(threshold = 0.15): ScrollReveal {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const fadeTop = (delay = 0): CSSProperties => ({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(-32px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
        transitionDelay: `${delay}s`,
    });

    const fadeBottom: CSSProperties = {
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
    };

    return { ref, fadeTop, fadeBottom };
}
