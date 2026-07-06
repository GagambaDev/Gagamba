/**
 * useScrollReveal
 *
 * Purpose:
 * - Observes when a container scrolls into the viewport and returns inline-style
 *   factories that animate child elements in from the top or bottom on first reveal.
 *   The observer disconnects after the first intersection so the animation fires
 *   once and never reverses.
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
