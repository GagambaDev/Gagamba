"use client";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Big stats shown first; the header and paragraph below explain them.
// Fallback numbers from the ticket (pending confirmation from Reasey / Vaughn).
const stats = [
  { value: "29x", label: "Less water than traditional cleaning" },
  { value: "$240K", label: "Saved per building, every year" },
  { value: "$48M", label: "Las Vegas market opportunity" },
];

export default function ProblemVsSolution() {
  const { ref, fadeTop } = useScrollReveal();

  return (
    <section
      id="why-gagamba"
      aria-labelledby="why-gagamba-heading"
      className="bg-white px-6 py-12 lg:px-8 lg:py-20"
    >
      <div ref={ref} className="mx-auto max-w-[1200px] text-center">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-pearl">
          {stats.map((s, i) => (
            <div
              key={s.value}
              style={fadeTop(i * 0.1)}
              className="flex flex-col items-center lg:px-6"
            >
              <p className="whitespace-nowrap font-heming text-[clamp(68px,8vw,110px)] font-bold leading-none text-sapphire">
                {s.value}
              </p>
              <p className="mt-3 max-w-[26ch] font-elms text-lg font-semibold text-onyx">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* The claim the stats support */}
        <h2
          id="why-gagamba-heading"
          style={fadeTop(0.3)}
          className="mt-16 font-heming text-[26px] font-bold leading-tight text-sapphire lg:text-[42px]"
        >
          A clearer way to clean high-rises.
        </h2>

        <p
          style={fadeTop(0.4)}
          className="mx-auto mt-5 max-w-[62ch] font-elms text-base text-onyx-70 lg:text-lg"
        >
          Gagamba's Wall Interface System cleans at 0.07 gallons per minute,
          against an industry standard of 1.8-2.5. Replacing rope-access crews
          cuts a typical high-rise's cleaning bill from $540K to $300K a year.
          And with 160 high-rises in Las Vegas alone, that's a $48M market to
          start.
        </p>
      </div>
    </section>
  );
}