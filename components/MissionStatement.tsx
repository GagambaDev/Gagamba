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
      </div>
    </section>
  );
}
