"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function MeetTheTeam() {
  const { ref, fadeTop } = useScrollReveal();
  return (
    <section id="founders" className="px-6 pt-16 md:px-8 md:pt-30">
      <div ref={ref} className="mx-auto max-w-[1200px]">
        <h2 style={fadeTop(0)} className="text-h2 text-sapphire">
          Founders
        </h2>
      </div>
    </section>
  );
}
