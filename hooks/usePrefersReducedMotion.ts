import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

// useSyncExternalStore reads the setting with getSnapshot and re-renders when subscribe reports a change.
function subscribe(onChange: () => void) {
    const mediaQuery = window.matchMedia(QUERY);
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
}

function getSnapshot() {
    return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
    return false; // the server can't read the visitor's setting, so assume motion is allowed
}

/** True when the visitor has "Reduce motion" turned on. Updates if they change the setting. */
export function usePrefersReducedMotion(): boolean {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
