/**
 * useScrollReveal
 *
 * Purpose:
 * - Observes when a container scrolls into the viewport and returns inline-style
 *   factories that animate child elements in from the top or bottom on first reveal.
 *   The observer disconnects after the first intersection so the animation fires
 *   once and never reverses.
 * - Respects "Reduce motion": if the visitor has it on, content shows right away
 *   with no movement.
 */

import { CSSProperties, useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

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
    distance = "24px",
    duration = "0.6s",
    easing = "cubic-bezier(0.2, 0.8, 0.2, 1)",
}: ScrollRevealOptions = {}): ScrollReveal<T> {
    const ref = useRef<T>(null);
    const [observedInView, setObservedInView] = useState(false);
    const reducedMotion = usePrefersReducedMotion();
    const inView = observedInView || reducedMotion;

    useEffect(() => {
        const el = ref.current;
        if (!el || reducedMotion) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setObservedInView(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold, reducedMotion]);

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
