"use client";

/**
 * ShinyButton
 *
 * Purpose:
 * - Pill-shaped button with a rotating gradient shine and glow animation.
 *   Used as the primary call-to-action element across the site.
 *
 * Props:
 * - children: ReactNode — button label or content (typically a Link or text).
 * - onClick?: () => void — optional click handler.
 * - className?: string — pass a size-variant class to override default sizing.
 *   Available variants (defined in globals.css):
 *     .shiny-cta-xs  — compact (nav / inline uses)
 *     .shiny-cta-sm  — small
 *     (default)      — medium (2.5rem / 1.25rem / 1.125rem)
 *     .shiny-cta-lg  — large (hero / section CTAs)
 *
 * Notes:
 * - All animation and sizing is driven by CSS custom properties in globals.css
 *   inside the .shiny-cta block. Adjust --shiny-cta-highlight for color changes.
 * - Size variants override --shiny-cta-px, --shiny-cta-py, and --shiny-cta-text
 *   via cascade; no JS involved.
 */

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
