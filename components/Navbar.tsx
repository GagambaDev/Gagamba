"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 h-14 border-b border-white/5 bg-[#050810]/80 backdrop-blur-md">

      {/* Brand */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/images/gagamba_logo.png"
            alt="Gagamba logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="text-white font-bold text-base tracking-tight">Gagamba</span>
        </Link>
      </div>

      {/* Desktop nav links */}
      <nav
        aria-label="Primary"
        className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={isActive(href) ? "page" : undefined}
            className={`text-sm transition-colors ${
              isActive(href) ? "text-white font-medium" : "text-white/70 hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="md:hidden text-white p-1 -mr-1"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Mobile dropdown */}
      {open && (
        <nav
          aria-label="Mobile"
          className="md:hidden absolute top-14 left-0 right-0 flex flex-col border-b border-white/5 bg-[#050810]/95 backdrop-blur-md"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isActive(href) ? "page" : undefined}
              className={`px-6 py-3 text-sm transition-colors ${
                isActive(href)
                  ? "text-white font-medium bg-white/5"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}

    </header>
  );
}
