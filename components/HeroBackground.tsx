import type { SVGProps } from "react";

// The last two hex digits set each cloud's opacity: 8C = 55%, 80 = 50%, 73 = 45%.
const CLOUDS = [
  "radial-gradient(ellipse 38% 55% at 88% 12%, #EFBEEF8C, transparent)", // pink, top-right
  "radial-gradient(ellipse 34% 45% at 76% 50%, #C9C3F580, transparent)", // lavender, center-right
  "radial-gradient(ellipse 38% 50% at 90% 90%, #ACA8E38C, transparent)", // periwinkle, bottom-right
  "radial-gradient(ellipse 34% 40% at 55% 95%, #D5D6F473, transparent)", // pale blue, bottom-center
].join(", ");

// Gaps between shards leave room for the red and cyan fringes to show.
const FACETS = [
  "120,0 340,0 270,210 60,150",
  "352,0 600,0 600,170 470,250 285,212",
  "600,182 600,430 430,400 478,262",
  "52,162 262,222 200,420 20,360",
  "274,224 466,262 418,400 330,500 212,424",
  "600,442 600,640 440,600 342,508 428,412",
  "20,372 198,436 150,640 40,600",
  "210,436 322,516 430,610 300,760 162,642",
  "600,652 600,900 380,900 308,770 438,622",
];

function FacetLayer(props: SVGProps<SVGUseElement>) {
  return <use href="#hero-facets" width="100%" height="100%" {...props} />;
}

export default function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <style>{`
        @keyframes hero-facet-drift {
          50% { transform: translateX(8px); }
        }
      `}</style>

      <div className="absolute inset-0" style={{ backgroundImage: CLOUDS }} />

      {/* No viewBox here, so 1 unit is 1px and the 4px fringe shift holds at every screen width */}
      <svg className="absolute inset-y-0 right-0 h-full w-[45%] motion-safe:animate-[hero-facet-drift_14s_ease-in-out_infinite]">
        <defs>
          <linearGradient id="hero-facet-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-pearl)" />
            <stop offset="50%" stopColor="#C9C3F5" />
            <stop offset="100%" stopColor="#EFBEEF" />
          </linearGradient>

          <symbol id="hero-facets" viewBox="0 0 600 900" preserveAspectRatio="none">
            {FACETS.map((points) => (
              <polygon key={points} points={points} vectorEffect="non-scaling-stroke" />
            ))}
          </symbol>

          {/* Cuts the shards out of the red and cyan copies so only their edges show.
              A blend mode would tint every shard, because the facets are 50% see-through. */}
          <mask id="hero-fringe-mask">
            <rect width="100%" height="100%" fill="white" />
            <FacetLayer fill="black" />
          </mask>
        </defs>

        <g mask="url(#hero-fringe-mask)">
          <FacetLayer x={-4} fill="#FF4A00" opacity={0.12} />
          <FacetLayer x={4} fill="#02EBEF" opacity={0.16} />
        </g>

        <FacetLayer
          fill="url(#hero-facet-fill)"
          fillOpacity={0.5}
          stroke="var(--color-white)"
          strokeWidth={1}
        />
      </svg>

      {/* Soft white circle behind the logo. On desktop it follows the logo's column:
          22% across while the 1200px container fills the screen, then 338px left of center. */}
      <div className="absolute top-1/3 left-1/2 size-[clamp(320px,60vw,880px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_closest-side,white_55%,transparent)] lg:top-1/2 lg:left-[max(22%,calc(50%-338px))]" />

      {/* Keeps the text readable below 1024px, where it sits on top of the shards */}
      <div className="absolute inset-0 bg-white/60 lg:hidden" />

      <div className="absolute inset-x-0 bottom-0 h-30 bg-linear-to-t from-white to-transparent" />
    </div>
  );
}
