"use client";

import { ReactNode } from "react";

/**
 * InfiniteScroll
 *
 * Purpose:
 * - Render a horizontal, continuously-looping track of arbitrary React items.
 * - Duplicate the provided items internally to create a seamless looping animation.
 *
 * Props:
 * - items: ReactNode[] — array of elements to display inside the track.
 * - gap?: string — Tailwind gap classes (e.g. "gap-12 md:gap-24").
 * - speed?: string — CSS animation duration (e.g. "30s").
 * - fadeColor?: string — color used for edge fade masks.
 *
 * Usage:
 * ```tsx
 * <InfiniteScroll items={itemElements} gap="gap-12" speed="30s" fadeColor="#04060f" />
 * ```
 *
 * Notes:
 * - The component duplicates the items four times to ensure a robust seamless loop.
 * - Pause-on-hover behavior is implemented via `group-hover:[animation-play-state:paused]`.
 */

interface InfiniteScrollProps {
    items: ReactNode[];
    gap?: string; // Tailwind class e.g. "gap-12 md:gap-24"
    speed?: string; // CSS animation duration e.g. "30s"
    fadeColor?: string; // hex color for edge fading mask, e.g. "#04060f"
}

export default function InfiniteScroll({ 
    items, 
    gap = "gap-12 md:gap-24", 
    speed = "30s", 
    fadeColor = "#04060f" 
}: InfiniteScrollProps) {
    return (
        <div className="relative flex overflow-hidden group">
            {/* Edge-fade masks */}
            <div 
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ background: `linear-gradient(to right, ${fadeColor}, transparent 5%, transparent 95%, ${fadeColor})` }}
            />
            
            <style>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    /* The total width depends on the content.
                       We duplicate the content so when 50% is scrolled, it loops perfectly. */
                    animation: scroll ${speed} linear infinite;
                    width: max-content;
                }
            `}</style>
            
            {/* Track */}
            <div className={`animate-scroll flex ${gap} group-hover:[animation-play-state:paused]`}>
                {/* We map four times to create a robust seamless loop effect (100% -> 50% keyframe logic) */}
                {[...items, ...items, ...items, ...items].map((item, idx) => (
                    <div key={idx} className="shrink-0 flex items-center justify-center">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
