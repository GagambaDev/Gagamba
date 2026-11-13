"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore, type FocusEvent } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const DONATE_URL = "https://www.gofundme.com/f/ggbprototype";

const SCROLL_THRESHOLD = 8;
const DESKTOP_QUERY = "(min-width: 768px)";

// useSyncExternalStore reads the position with getIsScrolled and re-renders when the answer changes.
function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

function getIsScrolled() {
  return window.scrollY > SCROLL_THRESHOLD;
}

function getServerIsScrolled() {
  return false; // the server has no scroll position, so assume the top of the page
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isScrolled = useSyncExternalStore(subscribeToScroll, getIsScrolled, getServerIsScrolled);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeMenu = () => setOpen(false);

  // The open menu covers the page, so Tabbing out of the header closes it instead of hiding focus behind it.
  const closeOnFocusLeave = (event: FocusEvent<HTMLElement>) => {
    if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    // Rotating a phone can reach desktop width, which hides the menu but would leave the page locked.
    const desktop = window.matchMedia(DESKTOP_QUERY);

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    desktop.addEventListener("change", closeMenu);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
      desktop.removeEventListener("change", closeMenu);
    };
  }, [open]);

  return (
    <header
      onBlur={closeOnFocusLeave}
      className={`fixed inset-x-0 top-0 z-50 h-(--header-height) border-b bg-white ${
        isScrolled || open ? "border-pearl" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex h-full max-w-300 items-center justify-between px-6 lg:px-8">
        <Link href="/" aria-label="Gagamba UAS home" onClick={closeMenu} className="block">
          <Image
            src="/brand/logo-primary-sapphire.svg"
            alt="Gagamba UAS"
            width={148}
            height={32}
            preload
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-8">
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`text-body font-medium transition-colors duration-200 ${
                  isActive(href)
                    ? "text-sapphire underline decoration-2 underline-offset-6"
                    : "text-onyx hover:text-sapphire"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Shown at every width, so on phones it sits beside the menu button instead of inside the menu.
              A shorter version of PrimaryButton (40px tall) so it fits the 72px header. */}
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="inline-flex h-10 items-center justify-center bg-sapphire px-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-tanzanite active:bg-tanzanite md:px-5"
          >
            Donate
            <span className="sr-only"> (opens in a new tab)</span>
          </a>

          {/* The negative margin lines the icon up with the page edge while keeping the 44px tap area */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="-mr-2.5 flex size-11 cursor-pointer items-center justify-center text-onyx md:hidden"
          >
            <svg
              aria-hidden="true"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="fixed inset-x-0 top-(--header-height) bottom-0 overflow-y-auto bg-white px-6 md:hidden"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              aria-current={isActive(href) ? "page" : undefined}
              className={`block border-b border-pearl py-4 text-body-lg font-medium ${
                isActive(href) ? "text-sapphire" : "text-onyx"
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
