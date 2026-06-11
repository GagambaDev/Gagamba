/**
 * useScrollReveal
 *
 * Purpose:
 * - Observes when a container scrolls into the viewport and returns inline-style
 *   factories that animate child elements in from the top or bottom on first reveal.
 *   The observer disconnects after the first intersection so the animation fires
 *   once and never reverses.
 *
 * Usage:
 *   const { ref, fadeTop, fadeBottom } = useScrollReveal();
 *   <div ref={ref}>
 *     <h1 style={fadeTop(0)}>Fades in from above, no delay</h1>
 *     <h2 style={fadeTop(0.15)}>Fades in from above, 150ms later</h2>
 *     <p style={fadeBottom(0.3)}>Fades in from below, 300ms later</p>
 *   </div>
 *
 *   // Attach to any element type via the generic:
 *   const { ref } = useScrollReveal<HTMLSectionElement>();
 *   <section ref={ref}>...</section>
 *
 *   // Custom options:
 *   const { ref, fadeTop } = useScrollReveal({ threshold: 0.3, distance: "48px", duration: "1s" });
 *
 * Returns:
 * - ref      — attach to the container element to observe.
 * - inView   — boolean, true once the container has entered the viewport.
 * - fadeTop(delay?)    — inline styles for a top-entry fade with optional delay (seconds).
 * - fadeBottom(delay?) — inline styles for a bottom-entry fade with optional delay (seconds).
 *
 * Options:
 * - threshold?: number — visible fraction required to trigger (default 0.15).
 * - distance?: string  — translateY offset before reveal (default "32px").
 * - duration?: string  — transition duration (default "0.7s").
 * - easing?: string    — CSS easing function (default "ease-out").
 */

import { CSSProperties, useEffect, useRef, useState } from "react";

interface ScrollRevealOptions {
    threshold?: number;
    distance?: string;
    duration?: string;
    easing?: string;
}

interface ScrollReveal<T extends HTMLElement> {
    ref: React.RefObject<T | null>;
    inView: boolean;
    fadeTop: (delay?: number) => CSSProperties;
    fadeBottom: (delay?: number) => CSSProperties;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
    threshold = 0.15,
    distance = "32px",
    duration = "0.7s",
    easing = "ease-out",
}: ScrollRevealOptions = {}): ScrollReveal<T> {
    const ref = useRef<T>(null);
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

    const transition = `opacity ${duration} ${easing}, transform ${duration} ${easing}`;

    const fadeTop = (delay = 0): CSSProperties => ({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(-${distance})`,
        transition,
        transitionDelay: `${delay}s`,
    });

    const fadeBottom = (delay = 0): CSSProperties => ({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${distance})`,
        transition,
        transitionDelay: `${delay}s`,
    });

    return { ref, inView, fadeTop, fadeBottom };
}
