"use client";
import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import CrystalCluster from "./CrystalCluster";

// The five ways Gagamba earns trust, from the About page's mission statement
const PILLARS = ["Lower cost", "Human connection", "Materials", "Autonomy", "Environmental consciousness"];

function PillarsAndLink() {
  return (
    <>
      <p className="text-small font-semibold tracking-widest text-onyx-70 uppercase">What we deliver</p>
      <ul className="mt-4 space-y-2.5">
        {PILLARS.map((pillar) => (
          <li key={pillar} className="flex items-center gap-3 text-lg font-medium text-onyx">
            {/* Small diamond bullet, echoing the logo and the crystal */}
            <span aria-hidden="true" className="size-2 shrink-0 rotate-45 bg-sapphire" />
            {pillar}
          </li>
        ))}
      </ul>
      <Link
        href="/about#founders"
        className="group mt-8 inline-flex items-center gap-2 text-lg font-semibold text-sapphire hover:underline hover:underline-offset-4"
      >
        Meet the team
        <span aria-hidden="true" className="transition-transform duration-200 motion-safe:group-hover:translate-x-1">
          &rarr;
        </span>
      </Link>
    </>
  );
}

export default function AboutUs() {
  const { ref, fadeTop } = useScrollReveal();
  return (
    // overflow-x-clip trims the crystal at the screen's left edge but lets it run above and below the section.
    // (It's a clip, not overflow-hidden, so the sticky column still works.)
    <section id="who-we-are" className="relative overflow-x-clip bg-white px-6 py-12 md:px-8 md:py-20">
      {/* Dim background crystal: a long sweep that grows out of the left edge up in the hero's fade,
          widens beside the heading and list, and tapers back into the edge in the white space before the tour.
          z-10 keeps it above the tour's sticky white stage (which comes later on the page); the text sits above it at z-20.
          Its height is the smallest of 185% of the section, 1000px, or 75% of the screen width, so on narrower
          screens (where this section is taller) it stays clear of the paragraphs and the hero's buttons.
          Desktop only: on phones it would sit right under the paragraphs. */}
      <CrystalCluster
        id="who-we-are-crystal"
        shape="long"
        className="absolute top-1/2 left-0 z-10 hidden aspect-23/50 h-[min(185%,1000px,75vw)] -translate-y-1/2 opacity-55 md:block"
      />

      <div ref={ref} className="relative z-20 mx-auto grid max-w-300 gap-6 md:grid-cols-12">
        {/* Pinned below the fixed header on desktop while the text scrolls past */}
        <div className="md:sticky md:top-[calc(var(--header-height)+2rem)] md:col-span-5 md:self-start">
          <h2 style={fadeTop(0)} className="text-display text-sapphire">
            The answer is clear.
          </h2>
          <div style={fadeTop(0.3)} className="mt-8 hidden md:block">
            <PillarsAndLink />
          </div>
        </div>

        <div className="max-w-[62ch] space-y-6 text-lg md:col-span-6 md:col-start-7 md:self-center md:text-body-lg">
          <p style={fadeTop(0.1)}>
            Gagamba UAS, also known as Gagamba, is building a clearer, more
            advanced future with drone technology. We engineer solutions that
            go beyond the machine itself, transforming complex operations into
            safer, more efficient, and autonomous systems.
          </p>
          <p style={fadeTop(0.2)}>
            We believe technology should do more than perform tasks. It should
            pave a way towards confidence, new possibilities, and elevate the
            way the world operates for humans. By bringing greater clarity to
            security, technology, and strategy, Gagamba is helping build a
            future where progress is not only possible; it is undeniable.
          </p>
        </div>

        {/* On phones the list follows the paragraphs, so the heading still leads straight into the text */}
        <div style={fadeTop(0.3)} className="mt-4 md:hidden">
          <PillarsAndLink />
        </div>
      </div>
    </section>
  );
}
