"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutUs() {
  const { ref, fadeTop } = useScrollReveal();
  return (
    <section id="who-we-are" className="bg-white px-6 py-16 md:px-8 md:py-30">
      <div ref={ref} className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-12">
        {/* Pinned below the fixed header on desktop while the text scrolls past */}
        <h2
          style={fadeTop(0)}
          className="text-h2 text-sapphire md:sticky md:top-[calc(var(--header-height)+2rem)] md:col-span-5 md:self-start"
        >
          The answer is clear.
        </h2>

        <div className="max-w-[62ch] space-y-6 text-body md:col-span-6 md:col-start-7 md:text-lg">
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
      </div>
    </section>
  );
}