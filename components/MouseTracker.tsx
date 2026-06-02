"use client";

import { useRef, MouseEvent, useEffect, ReactNode } from "react";

/**
 * MouseTracker
 *
 * Purpose:
 * - Wraps any subtree and provides a smoothed radial-gradient "spotlight" that follows
 *   the user's mouse using requestAnimationFrame and linear interpolation (lerp).
 *
 * Props:
 * - children: ReactNode — content to render inside the tracked area.
 * - className?: string — additional classes applied to the outer container.
 * - overlayColor?: string — CSS color used for the radial highlight (default set in caller).
 *
 * Notes for maintainers:
 * - Smoothing is controlled by the lerp factor `* 0.15` near the top of the file.
 *   Reduce the number to make motion smoother/slower, increase to make it snappier.
 * - The default hidden state resets the overlay to a large, off-screen radial gradient.
 * - This component intentionally keeps DOM manipulation minimal (direct style writes)
 *   for low-latency visual updates.
 */

interface MouseTrackerProps {
    children: ReactNode;
    className?: string;
    overlayColor?: string; // e.g. "rgba(52,95,195,0.9)"
}

export default function MouseTracker({ children, className = "", overlayColor = "rgba(52,95,195,0.9)" }: MouseTrackerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const targetPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const isVisible = useRef(false);
    const frameId = useRef(0);

    useEffect(() => {
        const loop = () => {
            if (isVisible.current && overlayRef.current) {
                // Lerp current position towards target position
                currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.15;
                currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.15;
                
                overlayRef.current.style.background = `radial-gradient(50px circle at ${currentPos.current.x}px ${currentPos.current.y}px, ${overlayColor}, transparent 100%)`;
            }
            frameId.current = requestAnimationFrame(loop);
        };
        
        frameId.current = requestAnimationFrame(loop);
        
        return () => cancelAnimationFrame(frameId.current);
    }, [overlayColor]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        targetPos.current.x = e.clientX - rect.left;
        targetPos.current.y = e.clientY - rect.top;
        
        if (!isVisible.current) {
            currentPos.current.x = targetPos.current.x;
            currentPos.current.y = targetPos.current.y;
            isVisible.current = true;
        }
    };

    const handleMouseLeave = () => {
        isVisible.current = false;
        if (overlayRef.current) {
            overlayRef.current.style.background = `radial-gradient(600px circle at -100% -100%, rgba(255,255,255,0.06), transparent 40%)`;
        }
    };

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden ${className}`}
        >
            <div 
                ref={overlayRef}
                className="absolute inset-0 z-0 pointer-events-none transition-colors duration-500 ease-out"
                style={{ background: "radial-gradient(600px circle at -100% -100%, rgba(255,255,255,0.06), transparent 40%)" }}
            />
            {children}
        </section>
    );
}
