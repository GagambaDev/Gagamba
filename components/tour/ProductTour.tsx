"use client";

import { useEffect, useRef } from "react";
import manifest from "@/public/images/tour/gagamba-tour-manifest.json";
import { elmsSans, heming } from "./fonts";
import { tourSteps } from "./tour-content";
import "./product-tour.css";

// The base may be an absolute CDN URL; frame files must retain their variant folders.
const assetBase = (process.env.NEXT_PUBLIC_TOUR_ASSET_BASE || "/images/tour").replace(/\/$/, "");
const frameUrl = (variant: string, frame: number) =>
  `${assetBase}/${variant}/frame_${String(frame).padStart(manifest.padding, "0")}.webp`;
const chapters = manifest.chapters.map((chapter) => ({ ...chapter, ...tourSteps[chapter.id] }));
type Frame = ImageBitmap | HTMLImageElement;

// Where in a chapter (0 to 1) the progress rail lands: past the fade-in, so the text is fully visible.
const RAIL_LANDING = 0.35;
// Text fades in over the first and out over the last 20% of its chapter and travels this many px.
const TEXT_FADE = 0.2;
const TEXT_TRAVEL = 24;
// Phones show a 16:9 render in a short box; a slight zoom keeps the drone from looking tiny. Mirrors --tour-fit in the CSS.
const MOBILE_FIT = 1.3;

// Share of the frame's height, at its top and bottom, that fades to transparent.
const EDGE_FADE = 0.08;

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

function closeFrame(frame: Frame) {
  if ("close" in frame) frame.close();
}

/** Canvas renderer and bounded, direction-aware frame loader. */
function ScrollSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    const rail = railRef.current;
    if (!root || !canvas || !overlay || !rail) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop = () => {};

    const configure = () => {
      stop();
      root.classList.remove("tour--animated", "tour--rendered");
      if (motion.matches) return;

      let disposed = false;
      let near = false;
      let variant = window.innerWidth < 768 ? "mobile" : "desktop";
      let requested = manifest.frame_start;
      let previous = requested;
      let direction = 1;
      let raf = 0;
      let lastDrawn: number | null = null;
      let generation = 0;
      const cache = new Map<number, Frame>();
      const inflight = new Map<number, AbortController>();
      const failed = new Set<number>();
      const maxCache = () => variant === "mobile" ? 14 : 10;

      const draw = (image: Frame) => {
        const rect = canvas.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        // A capped pixel ratio keeps the canvas itself from dominating memory.
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = Math.round(rect.width * dpr);
        const height = Math.round(rect.height * dpr);
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
        }
        context.clearRect(0, 0, width, height);
        const fit = variant === "mobile" ? MOBILE_FIT : 1;
        const scale = Math.min(width / image.width, height / image.height) * fit;
        const w = image.width * scale;
        const h = image.height * scale;
        const top = (height - h) / 2;
        context.drawImage(image, (width - w) / 2, top, w, h);
        // Close-ups fill the whole frame, so dissolve the render's top and bottom edges into the white page.
        const fade = context.createLinearGradient(0, top, 0, top + h);
        fade.addColorStop(0, "rgba(0,0,0,0)");
        fade.addColorStop(EDGE_FADE, "#000");
        fade.addColorStop(1 - EDGE_FADE, "#000");
        fade.addColorStop(1, "rgba(0,0,0,0)");
        context.globalCompositeOperation = "destination-in";
        context.fillStyle = fade;
        context.fillRect(0, 0, width, height);
        context.globalCompositeOperation = "source-over";
        root.classList.add("tour--rendered");
      };

      const touch = (frame: number) => {
        const image = cache.get(frame);
        if (image) { cache.delete(frame); cache.set(frame, image); }
        return image;
      };
      const clear = () => {
        generation++;
        inflight.forEach((controller) => controller.abort());
        inflight.clear();
        cache.forEach(closeFrame);
        cache.clear();
        failed.clear();
        lastDrawn = null;
      };
      const desiredFrames = () => {
        const result = [requested];
        for (let i = 1; i <= 7; i++) {
          result.push(requested + i * direction);
          if (i <= 2) result.push(requested - i * direction);
        }
        return result.filter((frame) => frame >= manifest.frame_start && frame <= manifest.frame_end);
      };
      const pump = () => {
        if (!near || disposed) return;
        const desired = desiredFrames();
        // Abort stale prefetches so a fast scroll can immediately request its target.
        inflight.forEach((controller, frame) => {
          if (!desired.includes(frame)) { controller.abort(); inflight.delete(frame); }
        });
        if (!cache.has(requested) && !inflight.has(requested) && inflight.size >= 3) {
          const prefetch = [...inflight.keys()].find((frame) => frame !== requested);
          if (prefetch !== undefined) {
            inflight.get(prefetch)?.abort();
            inflight.delete(prefetch);
          }
        }
        for (const frame of desired) {
          if (inflight.size >= 3) break;
          if (cache.has(frame) || inflight.has(frame) || failed.has(frame)) continue;
          const controller = new AbortController();
          const currentGeneration = generation;
          const currentVariant = variant;
          inflight.set(frame, controller);
          void (async () => {
            let decoded: Frame | undefined;
            try {
              const response = await fetch(frameUrl(currentVariant, frame), { signal: controller.signal });
              if (!response.ok) throw new Error(`Frame request failed: ${response.status}`);
              const blob = await response.blob();
              if (typeof createImageBitmap === "function") {
                decoded = await createImageBitmap(blob);
              } else {
                const url = URL.createObjectURL(blob);
                try {
                  const image = new Image();
                  image.src = url;
                  await image.decode();
                  decoded = image;
                } finally { URL.revokeObjectURL(url); }
              }
              if (disposed || controller.signal.aborted || currentGeneration !== generation) {
                closeFrame(decoded);
                return;
              }
              cache.set(frame, decoded);
              while (cache.size > maxCache()) {
                const oldest = cache.keys().next().value as number;
                const evicted = cache.get(oldest);
                cache.delete(oldest);
                if (evicted) closeFrame(evicted);
              }
              if (frame === requested) { draw(decoded); lastDrawn = frame; }
            } catch {
              if (!controller.signal.aborted && currentGeneration === generation) failed.add(frame);
            } finally {
              if (inflight.get(frame) === controller) inflight.delete(frame);
              if (!disposed && currentGeneration === generation) pump();
            }
          })();
        }
      };
      const update = () => {
        raf = 0;
        if (!near) return;
        const rect = root.getBoundingClientRect();
        const stage = root.querySelector<HTMLElement>(".tour-stage")!;
        // The stage sticks below the header, so progress starts when the section reaches that offset, not the viewport top.
        const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
        const distance = Math.max(1, rect.height - stage.getBoundingClientRect().height);
        const progress = clamp01((stickyTop - rect.top) / distance);
        requested = manifest.frame_start + Math.round(progress * (manifest.frame_end - manifest.frame_start));
        if (requested !== previous) direction = requested > previous ? 1 : -1;
        previous = requested;
        const image = touch(requested);
        if (image && requested !== lastDrawn) { draw(image); lastDrawn = requested; }
        let active = 0;
        overlay.querySelectorAll<HTMLElement>("[data-chapter]").forEach((element, index) => {
          const chapter = chapters[index];
          const span = chapter.end_frame - chapter.start_frame + 1;
          const local = (requested - chapter.start_frame) / span;
          if (local >= 0 && local < 1) active = index;
          // Rises into place, then lifts away; the first and last steps never fade in from / out to nothing.
          const enter = index === 0 ? 1 : clamp01(local / TEXT_FADE);
          const exit = index === chapters.length - 1 ? 1 : clamp01((1 - local) / TEXT_FADE);
          const opacity = local >= 0 && local < 1 ? Math.min(enter, exit) : 0;
          const offset = enter < 1 ? (1 - enter) * TEXT_TRAVEL : -(1 - exit) * TEXT_TRAVEL;
          element.style.opacity = String(opacity);
          element.style.transform = `translateY(${offset}px)`;
        });
        rail.querySelectorAll<HTMLElement>("[data-step]").forEach((button, index) => {
          if (index === active) button.setAttribute("aria-current", "step");
          else button.removeAttribute("aria-current");
        });
        pump();
      };
      const jump = (event: MouseEvent) => {
        const button = (event.target as Element).closest<HTMLElement>("[data-step]");
        if (!button) return;
        const chapter = chapters[Number(button.dataset.step)];
        const stage = root.querySelector<HTMLElement>(".tour-stage")!;
        const distance = Math.max(1, root.offsetHeight - stage.offsetHeight);
        const progress = chapter.scroll_start + (chapter.scroll_end - chapter.scroll_start) * (chapter.id === 1 ? 0 : RAIL_LANDING);
        const rootTop = root.getBoundingClientRect().top + window.scrollY;
        const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
        window.scrollTo({ top: rootTop - stickyTop + progress * distance, behavior: "smooth" });
      };
      const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
      const resize = () => {
        const nextVariant = window.innerWidth < 768 ? "mobile" : "desktop";
        if (nextVariant !== variant) { variant = nextVariant; clear(); }
        else if (lastDrawn !== null) {
          const image = cache.get(lastDrawn);
          if (image) draw(image);
        }
        schedule();
      };
      const observer = new IntersectionObserver(([entry]) => {
        near = entry.isIntersecting;
        if (near) schedule();
        else { inflight.forEach((controller) => controller.abort()); inflight.clear(); }
      }, { rootMargin: "100% 0px" });
      root.classList.add("tour--animated");
      observer.observe(root);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", resize);
      rail.addEventListener("click", jump);
      stop = () => {
        disposed = true;
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", resize);
        rail.removeEventListener("click", jump);
        cancelAnimationFrame(raf);
        clear();
      };
    };
    configure();
    motion.addEventListener("change", configure);
    return () => { stop(); motion.removeEventListener("change", configure); };
  }, []);

  return (
    <div ref={rootRef} className="tour-sequence">
      {/* The visible heading in reduced-motion mode; the animated tour opens with the same title as step 1. */}
      <h2 id="product-tour-heading" className="tour-heading">{chapters[0].title}</h2>
      <div className="tour-stage">
        <div className="tour-stage-inner">
          <div className="tour-visual">
            <div className="tour-glow" aria-hidden="true" />
            <picture className="tour-poster">
              <source media="(max-width: 767px)" srcSet={frameUrl("mobile", manifest.frame_start)} />
              {/* Native image loading avoids per-frame Next.js optimization. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={frameUrl("desktop", manifest.frame_start)} alt="Gagamba drone" width="1920" height="1080" loading="lazy" />
            </picture>
            <canvas ref={canvasRef} aria-hidden="true" className="tour-canvas" />
          </div>
          <div ref={overlayRef} className="tour-overlays" aria-hidden="true">
            {chapters.map((chapter, index) => (
              <div className="tour-overlay" data-chapter key={chapter.id}>
                <p className={`tour-title ${index === 0 ? "tour-title--lead" : ""}`}>{chapter.title}</p>
                <p className="tour-copy">{chapter.body}</p>
                <TourChips chips={chapter.chips} />
              </div>
            ))}
          </div>
          <nav ref={railRef} className="tour-rail" aria-label="Drone tour steps">
            {chapters.map((chapter, index) => (
              <button type="button" className="tour-rail-step" data-step={index} key={chapter.id} aria-label={chapter.title}>
                <span className="tour-rail-label" aria-hidden="true">{chapter.title}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
      <div className="tour-chapters">
        {chapters.slice(1).map((chapter) => (
          <section key={chapter.id}>
            <h3>{chapter.title}</h3>
            <p>{chapter.body}</p>
            <TourChips chips={chapter.chips} />
          </section>
        ))}
      </div>
    </div>
  );
}

function TourChips({ chips }: { chips: string[] }) {
  if (!chips.length) return null;
  return (
    <ul className="tour-chips">
      {chips.map((chip) => <li key={chip}>{chip}</li>)}
    </ul>
  );
}

export default function ProductTour() {
  return (
    <section id="meet-gagamba" className={`product-tour ${heming.variable} ${elmsSans.variable}`} aria-labelledby="product-tour-heading">
      <ScrollSequence />
    </section>
  );
}
