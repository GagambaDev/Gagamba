"use client";

import { useEffect, useRef } from "react";
import manifest from "@/public/images/tour/gagamba-tour-manifest.json";
import { elmsSans, heming } from "./fonts";
import { tourSteps } from "./tour-content";
import "./product-tour.css";
import "./product-tour-video.css";

// Video version of the drone tour. Same layout, copy and rail as ProductTour, but scroll scrubs one MP4 instead of
// swapping 480 WebP frames. The base may be an absolute CDN URL.
const assetBase = (process.env.NEXT_PUBLIC_TOUR_ASSET_BASE || "/images/tour").replace(/\/$/, "");
const videoUrl = `${assetBase}/video/${manifest.video.file}`;
const posterUrl = `${assetBase}/desktop/frame_${String(manifest.frame_start).padStart(manifest.padding, "0")}.webp`;
const chapters = manifest.chapters.map((chapter) => ({ ...chapter, ...tourSteps[chapter.id] }));

// Where in a chapter (0 to 1) the progress rail lands: past the fade-in, so the text is fully visible.
const RAIL_LANDING = 0.35;
// Text fades in over the first and out over the last 20% of its chapter and travels this many px.
const TEXT_FADE = 0.2;
const TEXT_TRAVEL = 24;

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

function TourChips({ chips }: { chips: string[] }) {
  if (!chips.length) return null;
  return (
    <ul className="tour-chips">
      {chips.map((chip) => <li key={chip}>{chip}</li>)}
    </ul>
  );
}

function ScrollVideo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const rail = railRef.current;
    if (!root || !video || !overlay || !rail) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let stop = () => {};

    const configure = () => {
      stop();
      root.classList.remove("tour--animated", "tour--rendered");
      if (motion.matches) return;

      let near = false;
      let raf = 0;
      const span = manifest.frame_end - manifest.frame_start;
      const stage = root.querySelector<HTMLElement>(".tour-stage")!;

      const update = () => {
        raf = 0;
        if (!near) return;
        const rect = root.getBoundingClientRect();
        // The stage sticks below the header, so progress starts when the section reaches that offset, not the viewport top.
        const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
        const distance = Math.max(1, rect.height - stage.getBoundingClientRect().height);
        const progress = clamp01((stickyTop - rect.top) / distance);
        const frame = manifest.frame_start + Math.round(progress * span);

        // Seek to the wanted time, one seek at a time; each "seeked" event re-runs this and chases the latest position.
        if (video.readyState >= 1 && !video.seeking) {
          const target = Math.min(video.duration, (progress * span + 0.5) / manifest.fps);
          if (Math.abs(video.currentTime - target) > 0.5 / manifest.fps) video.currentTime = target;
        }

        let active = 0;
        overlay.querySelectorAll<HTMLElement>("[data-chapter]").forEach((element, index) => {
          const chapter = chapters[index];
          const length = chapter.end_frame - chapter.start_frame + 1;
          const local = (frame - chapter.start_frame) / length;
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
      };
      const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
      const jump = (event: MouseEvent) => {
        const button = (event.target as Element).closest<HTMLElement>("[data-step]");
        if (!button) return;
        const chapter = chapters[Number(button.dataset.step)];
        const distance = Math.max(1, root.offsetHeight - stage.offsetHeight);
        const progress = chapter.scroll_start + (chapter.scroll_end - chapter.scroll_start) * (chapter.id === 1 ? 0 : RAIL_LANDING);
        const rootTop = root.getBoundingClientRect().top + window.scrollY;
        const stickyTop = parseFloat(getComputedStyle(stage).top) || 0;
        window.scrollTo({ top: rootTop - stickyTop + progress * distance, behavior: "smooth" });
      };
      const loaded = () => { root.classList.add("tour--rendered"); schedule(); };

      // Download the whole 15 MB file as soon as the page has loaded (browsers stop buffering a video early on their own),
      // then scrub that in-memory copy so seeks never wait on the network. Skipped for reduced motion, Data Saver and 2G;
      // those stream the file once the section is within two screens.
      const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
      const constrained = Boolean(connection?.saveData) || /(^|-)2g$/.test(connection?.effectiveType ?? "");
      let disposed = false;
      let blobUrl = "";
      const preload = async () => {
        if (constrained) return;
        try {
          const response = await fetch(videoUrl);
          if (!response.ok) return;
          const url = URL.createObjectURL(await response.blob());
          // Swapping the source resets the video, so only do it while the section is well out of view.
          if (disposed || near) { URL.revokeObjectURL(url); return; }
          blobUrl = url;
          video.src = url;
        } catch { /* the observer below falls back to streaming */ }
      };
      if (document.readyState === "complete") void preload();
      else window.addEventListener("load", preload, { once: true });

      const observer = new IntersectionObserver(([entry]) => {
        near = entry.isIntersecting;
        if (!near) return;
        if (!video.getAttribute("src")) video.src = videoUrl;
        schedule();
      }, { rootMargin: "200% 0px" });

      root.classList.add("tour--animated");
      observer.observe(root);
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      rail.addEventListener("click", jump);
      video.addEventListener("loadedmetadata", schedule);
      video.addEventListener("loadeddata", loaded);
      video.addEventListener("seeked", schedule);
      stop = () => {
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        rail.removeEventListener("click", jump);
        disposed = true;
        window.removeEventListener("load", preload);
        if (blobUrl) { URL.revokeObjectURL(blobUrl); blobUrl = ""; video.removeAttribute("src"); video.load(); }
        video.removeEventListener("loadedmetadata", schedule);
        video.removeEventListener("loadeddata", loaded);
        video.removeEventListener("seeked", schedule);
        cancelAnimationFrame(raf);
      };
    };
    configure();
    motion.addEventListener("change", configure);
    return () => { stop(); motion.removeEventListener("change", configure); };
  }, []);

  return (
    <div ref={rootRef} className="tour-sequence tour-sequence--video">
      {/* The visible heading in reduced-motion mode; the animated tour opens with the same title as step 1. */}
      <h2 id="product-tour-heading" className="tour-heading">{chapters[0].title}</h2>
      <div className="tour-stage">
        <div className="tour-stage-inner">
          <div className="tour-visual">
            <picture className="tour-poster">
              <source media="(max-width: 767px)" srcSet={`${assetBase}/mobile/frame_000001.webp`} />
              {/* Native image loading avoids per-frame Next.js optimization. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={posterUrl} alt="Gagamba drone" width="1920" height="1080" loading="lazy" />
            </picture>
            <video
              ref={videoRef}
              className="tour-video"
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              tabIndex={-1}
              aria-hidden="true"
            />
            <div className="tour-glow" aria-hidden="true" />
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

export default function ProductTourVideo() {
  return (
    <section id="meet-gagamba" className={`product-tour ${heming.variable} ${elmsSans.variable}`} aria-labelledby="product-tour-heading">
      <ScrollVideo />
    </section>
  );
}
