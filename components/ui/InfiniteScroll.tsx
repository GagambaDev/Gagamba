"use client";

import { ReactNode, useEffect, useRef } from "react";

interface InfiniteScrollProps {
    items: ReactNode[];
    gap?: string;
    speed?: string;
}

// The track shifts left by one copy per loop, so the copies after the first must
// fill the viewport by themselves or a blank gap shows before the loop restarts.
const REPEATED_COPY_COUNT = 2;

export default function InfiniteScroll({
    items,
    gap = "gap-12 md:gap-[72px]",
    speed = "30s",
}: InfiniteScrollProps) {
    const trackRef      = useRef<HTMLDivElement>(null);
    const secondCopyRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track      = trackRef.current;
        const secondCopy = secondCopyRef.current;
        if (!track || !secondCopy) return;

        const syncScrollDistance = () => {
            track.style.setProperty("--scroll-dist", `${secondCopy.offsetLeft}px`);
        };

        syncScrollDistance();
        const resizeObserver = new ResizeObserver(syncScrollDistance);
        resizeObserver.observe(track);
        return () => resizeObserver.disconnect();
    }, [items, gap]);

    return (
        <div className="scroll-viewport relative overflow-hidden">
            <style>{`
                @keyframes infinite-scroll {
                    from { transform: translateX(0); }
                    to   { transform: translateX(calc(-1 * var(--scroll-dist, 50%))); }
                }
                .scroll-track {
                    animation: infinite-scroll ${speed} linear infinite;
                    will-change: transform;
                }
                .scroll-viewport:hover .scroll-track,
                .scroll-viewport:focus-within .scroll-track {
                    animation-play-state: paused;
                }
                @media (prefers-reduced-motion: reduce) {
                    .scroll-track {
                        animation: none;
                    }
                }
            `}</style>

            {/* Repeated copies share the same gap so each copy boundary is seamless */}
            <div ref={trackRef} className={`scroll-track flex ${gap} w-max motion-reduce:w-full`}>
                <div className={`flex ${gap} motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center`}>
                    {items.map((item, itemIndex) => (
                        <div key={itemIndex} className="shrink-0 flex items-center justify-center">
                            {item}
                        </div>
                    ))}
                </div>
                {Array.from({ length: REPEATED_COPY_COUNT }, (_, copyIndex) => (
                    <div
                        key={copyIndex}
                        ref={copyIndex === 0 ? secondCopyRef : undefined}
                        className={`flex ${gap} motion-reduce:hidden`}
                        aria-hidden="true"
                        inert
                    >
                        {items.map((item, itemIndex) => (
                            <div key={itemIndex} className="shrink-0 flex items-center justify-center">
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
