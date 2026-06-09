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
