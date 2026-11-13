"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import CrystalCluster from "./CrystalCluster";
import firstPlacePhoto from "@/public/images/company_events/PresInovChal.jpg";

export default function MissionStatement() {
  const { ref, fadeTop } = useScrollReveal();
  return (
    // relative + overflow-clip hold the background crystal inside the section
    <section className="relative overflow-clip px-6 pt-12 md:px-8 md:pt-16">
      {/* The home page's crystal, flipped so it grows out of the right edge behind the photo.
          Capped at 560px tall so on tablets, where this section gets tall, it doesn't reach the paragraphs.
          Desktop only: on phones the text fills the width. */}
      <CrystalCluster
        id="mission-crystal"
        className="absolute top-1/2 right-0 hidden aspect-[2/3] h-[min(88%,560px)] -translate-y-1/2 -scale-x-100 opacity-55 md:block"
      />

      <div ref={ref} className="relative mx-auto grid max-w-300 gap-y-8 md:grid-cols-12 md:gap-x-6">
        <h1 style={fadeTop(0)} className="text-display text-balance text-sapphire md:col-span-12">
          A clearer view of what&apos;s possible.
        </h1>

        <div className="max-w-[62ch] space-y-6 text-body md:col-span-7 md:text-lg">
          <p style={fadeTop(0.1)}>
            Inspired by crystals and spiders, Gagamba UAS is redefining what it
            means for a drone company to be both trustworthy and innovative.
            Drone companies often earn trust through strength, speed,
            adaptability, or durability. Gagamba UAS earns it through clarity of
            strategy: lower cost, human connection, materials, autonomy, and
            environmental consciousness.
          </p>
          <p style={fadeTop(0.2)}>
            &quot;Gagamba&quot; means &quot;spider&quot; in Tagalog. Rather than
            the spider itself, we focus on its webbing. Spidroins, the main
            proteins in spider silk, contain crystalline structures that make
            webbing flexible, durable, and strong, which is why spiders trust it
            to catch prey, move, and build their homes.
          </p>
          <p style={fadeTop(0.3)}>
            Gagamba UAS is more than drones. We strategically improve our
            clients&apos; businesses through automation and improve human
            quality of life along the way.
          </p>
        </div>

        {/* The team with its first-place check. Below 768px it follows the text. */}
        <figure style={fadeTop(0.4)} className="md:col-span-5 md:self-center">
          <Image
            src={firstPlacePhoto}
            alt="The Gagamba UAS team on stage holding their first-place check"
            sizes="(min-width: 1200px) 480px, (min-width: 768px) 40vw, 100vw"
            placeholder="blur"
            className="h-auto w-full"
          />
          <figcaption className="mt-3 text-small text-onyx-70">
            First place at the President&apos;s Innovation Challenge
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
