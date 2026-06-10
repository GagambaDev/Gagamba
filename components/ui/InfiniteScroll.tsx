"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * InfiniteScroll
 *
 * Purpose:
 * - Render a horizontal, continuously-looping track of arbitrary React items.
 *
 * Props:
 * - items: ReactNode[] — array of elements to display inside the track.
 * - gap?: string — Tailwind gap classes applied uniformly between all items and between the two copies (e.g. "gap-12 md:gap-24").
 * - speed?: string — CSS animation duration (e.g. "30s").
 *
 * Edge fading uses mask-image (transparent → opaque) so the logos dissolve into
 * whatever background sits behind them — including dynamic effects like mouse glows.
 *
 * Loop correctness:
 * - Two copies of items sit in a flex container using the same gap class, so all
 *   inter-item spacings (including the copy boundary) are identical.
 * - A ResizeObserver measures copy2.offsetLeft — the exact pixel distance the track
 *   must travel before copy 2 aligns with copy 1's original position — and stores it
 *   in --scroll-dist. This avoids the half-gap drift that breaks translateX(-50%).
 */

interface InfiniteScrollProps {
    items: ReactNode[];
    gap?: string;
    speed?: string;
}

export default function InfiniteScroll({
    items,
    gap = "gap-12 md:gap-24",
    speed = "30s",
}: InfiniteScrollProps) {
    const trackRef = useRef<HTMLDivElement>(null);
    const copy2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        const copy2 = copy2Ref.current;
        if (!track || !copy2) return;

        const update = () => {
            track.style.setProperty("--scroll-dist", `${copy2.offsetLeft}px`);
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(track);
        return () => ro.disconnect();
    }, [items, gap]);

    return (
        <div
            className="relative overflow-hidden"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            }}
        >

            <style>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(calc(-1 * var(--scroll-dist, 50%))); }
                }
                .scroll-track {
                    animation: infinite-scroll ${speed} linear infinite;
                    will-change: transform;
                }
            `}</style>

            {/* Track — two copies share the same gap so the copy boundary is seamless */}
            <div ref={trackRef} className={`scroll-track flex ${gap} w-max`}>
                <div className={`flex ${gap}`}>
                    {items.map((item, idx) => (
                        <div key={idx} className="shrink-0 flex items-center justify-center">
                            {item}
                        </div>
                    ))}
                </div>
                <div ref={copy2Ref} className={`flex ${gap}`} aria-hidden="true">
                    {items.map((item, idx) => (
                        <div key={`b-${idx}`} className="shrink-0 flex items-center justify-center">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
