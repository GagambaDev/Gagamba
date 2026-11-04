"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import manifest from "@/public/images/tour/gagamba-tour-manifest.json";
import { chapterCopy } from "./tour-content";
import "./product-tour.css";

// The base may be an absolute CDN URL; frame files must retain their variant folders.
const assetBase = (process.env.NEXT_PUBLIC_TOUR_ASSET_BASE || "/images/tour").replace(/\/$/, "");
const frameUrl = (variant: string, frame: number) =>
  `${assetBase}/${variant}/frame_${String(frame).padStart(manifest.padding, "0")}.webp`;
const chapters = manifest.chapters.map((chapter) => ({ ...chapter, copy: chapterCopy[chapter.id] }));
type Frame = ImageBitmap | HTMLImageElement;

function closeFrame(frame: Frame) {
  if ("close" in frame) frame.close();
}

/** Canvas renderer and bounded, direction-aware frame loader. */
function ScrollSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!root || !canvas || !overlay) return;
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
        const scale = Math.min(width / image.width, height / image.height);
        const w = image.width * scale;
        const h = image.height * scale;
        context.drawImage(image, (width - w) / 2, (height - h) / 2, w, h);
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
        const distance = Math.max(1, rect.height - root.querySelector(".tour-stage")!.getBoundingClientRect().height);
        const progress = Math.max(0, Math.min(1, -rect.top / distance));
        requested = manifest.frame_start + Math.round(progress * (manifest.frame_end - manifest.frame_start));
        if (requested !== previous) direction = requested > previous ? 1 : -1;
        previous = requested;
        const image = touch(requested);
        if (image && requested !== lastDrawn) { draw(image); lastDrawn = requested; }
        overlay.querySelectorAll<HTMLElement>("[data-chapter]").forEach((element, index) => {
          const chapter = chapters[index];
          const span = chapter.end_frame - chapter.start_frame + 1;
          const local = (requested - chapter.start_frame) / span;
          const fadeIn = index === 0 ? 1 : Math.max(0, Math.min(1, local / 0.16));
          const fadeOut = index === chapters.length - 1 ? 1 : Math.max(0, Math.min(1, (1 - local) / 0.16));
          const opacity = local >= 0 && local < 1 ? Math.min(fadeIn, fadeOut) : 0;
          element.style.opacity = String(opacity);
          element.style.transform = `translateY(${(1 - opacity) * 12}px)`;
        });
        pump();
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
      stop = () => {
        disposed = true;
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", resize);
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
      <div className="tour-stage">
        <div className="tour-stage-inner">
          <div className="tour-visual">
            <picture className="tour-poster">
              <source media="(max-width: 767px)" srcSet={frameUrl("mobile", manifest.frame_start)} />
              {/* Native image loading avoids per-frame Next.js optimization. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={frameUrl("desktop", manifest.frame_start)} alt="Gagamba drone" width="1920" height="1080" loading="lazy" />
            </picture>
            <canvas ref={canvasRef} aria-hidden="true" className="tour-canvas" />
          </div>
          <div ref={overlayRef} className="tour-overlays" aria-hidden="true">
            {chapters.map((chapter) => (
              <div className="tour-overlay" data-chapter key={chapter.id}>
                <p className="tour-eyebrow">The Drone · {String(chapter.id).padStart(2, "0")}</p>
                <p className="tour-title">{chapter.title}</p>
                <p className="tour-copy">{chapter.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tour-chapters">
        {chapters.map((chapter) => (
          <section key={chapter.id}>
            <h3>{chapter.title}</h3>
            <p>{chapter.copy}</p>
          </section>
        ))}
      </div>
    </div>
  );
}

export default function ProductTour() {
  return (
    <section className="product-tour" aria-labelledby="product-tour-heading">
      <h2 id="product-tour-heading" className="tour-sr-only">Explore Gagamba</h2>
      <ScrollSequence />
      <div className="tour-cta">
        <p>See what Gagamba can do for your building.</p>
        <Link href="/contact">Get a Quote <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
