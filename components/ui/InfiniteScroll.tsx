"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/**
 * InfiniteScroll
 *
 * Purpose:
 * - Render a horizontal, continuously-looping track of arbitrary React items.
 *
 * Props:
 * - items: ReactNode[] — array of elements to display inside the track.
 * - gap?: string — Tailwind gap classes applied uniformly between all items and between repeated copies (e.g. "gap-12 md:gap-24").
 * - speed?: string — CSS animation duration (e.g. "30s").
 *
 * Edge fading uses mask-image (transparent → opaque) so the logos dissolve into
 * whatever background sits behind them — including dynamic effects like mouse glows.
 *
 * Loop correctness:
 * - Repeated copies of items sit in a flex container using the same gap class, so all
 *   inter-item spacings (including copy boundaries) are identical.
 * - A ResizeObserver measures copy2.offsetLeft — the exact pixel distance the track
 *   must travel before copy 2 aligns with copy 1's original position — and stores it
 *   in --scroll-dist. The component renders enough copies to keep the viewport filled
 *   throughout that travel distance.
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
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const copy2Ref = useRef<HTMLDivElement>(null);
    const [copyCount, setCopyCount] = useState(4);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        const copy2 = copy2Ref.current;
        if (!container || !track || !copy2) return;   // Don't attempt to calculate the scroll distance before we have all needed variables

        const update = () => {
            // Measure from the start of the first item set to the start of the second item set.
            // | Image 1, Image 2, Image 3 | < The bars are the scroll distance.
            const scrollDistance = copy2.offsetLeft;
            if (!scrollDistance) return;

            track.style.setProperty("--scroll-dist", `${scrollDistance}px`);
            // Calculate how many copies of the "scroll images" are needed to fill the scroll area so there are no gaps
            const nextCopyCount = Math.max(3, Math.ceil(container.offsetWidth / scrollDistance) + 2);
            setCopyCount((currentCopyCount) =>
                currentCopyCount === nextCopyCount ? currentCopyCount : nextCopyCount
            );
        };

        update();
        const ro = new ResizeObserver(update);
        ro.observe(container);
        ro.observe(track);
        return () => ro.disconnect();
    }, [items, gap]);

    return (
        <div
            ref={containerRef}
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

            {/* Track — repeated copies share the same gap so each copy boundary is seamless */}
            <div ref={trackRef} className={`scroll-track flex ${gap} w-max`}>
                {Array.from({ length: copyCount }).map((_, copyIndex) => (
                    <div
                        key={copyIndex}
                        // We measure the length of a full loop using the second copy
                        // copyIndex === 1 is the second copy
                        ref={copyIndex === 1 ? copy2Ref : undefined}
                        className={`flex ${gap}`}
                        aria-hidden={copyIndex > 0 ? "true" : undefined}
                    >
                        {items.map((item, itemIndex) => (
                            <div key={`${copyIndex}-${itemIndex}`} className="shrink-0 flex items-center justify-center">
                                {item}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
