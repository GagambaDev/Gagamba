"use client";

/**
 * ShinyButton
 *
 * Purpose:
 * - Pill-shaped button with a rotating gradient shine and glow animation.
 *   Used as the primary call-to-action element across the site.
 */

import "@/components/ui/shiny-button.css";
import type React from "react";

interface ShinyButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export function ShinyButton({ children, onClick, className = "" }: ShinyButtonProps) {
    return (
        <button className={`shiny-cta ${className}`} onClick={onClick}>
            <span>{children}</span>
        </button>
    );
}
