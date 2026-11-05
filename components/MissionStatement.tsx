"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MissionStatement() {
  const { ref, fadeTop } = useScrollReveal();
  return (
    <section className="px-6 pt-16 md:px-8 md:pt-24">
      <div ref={ref} className="mx-auto max-w-[1200px]">
        <h1 style={fadeTop(0)} className="text-display text-sapphire">
          The answer is clear.
        </h1>

        <div className="mt-8 max-w-[62ch] space-y-6 text-body md:text-lg">
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
      </div>
    </section>
  );
}
