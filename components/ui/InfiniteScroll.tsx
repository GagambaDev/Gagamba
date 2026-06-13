"use client";

import { ReactNode, useEffect, useRef } from "react";

/**
 * InfiniteScroll
 *
 * Purpose:
 * - Render a horizontal, continuously-looping track of arbitrary React items.
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
    const trackRef        = useRef<HTMLDivElement>(null);
    const secondCopyRef   = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track      = trackRef.current;
        const secondCopy = secondCopyRef.current;
        if (!track || !secondCopy) return;

        const syncScrollDistance = () => {
            track.style.setProperty("--scroll-dist", `${secondCopy.offsetLeft}px`);
        };

        syncScrollDistance();
        const ro = new ResizeObserver(syncScrollDistance);
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
                <div ref={secondCopyRef} className={`flex ${gap}`} aria-hidden="true">
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
