import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export type DronePart = {
  id: string;
  title: string;
  down: string;
  right: string;
  tourCopy: string;
  spotlightRadius?: string;
};

type PartDescriptionProps = {
  part: DronePart | null;
  step?: number;
  totalSteps?: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onReset?: () => void;
};

export default function PartDescription({
  part,
  step = 1,
  totalSteps = 1,
  onNext,
  onPrevious,
  onReset,
}: PartDescriptionProps) {
  const isIntro = !part;
  const title = part?.title ?? 'Explore Gagamba';
  const copy =
    part?.tourCopy ??
    'Start the guided tour to walk through the systems that let Gagamba fly, clean, see, and operate without a tether.';
  const nextLabel = isIntro ? 'Start tour' : 'Next';

  return (
    <aside className="relative z-30 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050810] p-5 text-white shadow-[0_24px_70px_rgba(4,6,15,0.34)]">
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          background:
            'radial-gradient(ellipse 55% 120% at 8% 0%, rgba(79,142,255,0.22) 0%, rgba(22,65,185,0.08) 44%, transparent 72%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

      <div className="relative grid gap-6 pr-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        {!isIntro && (
          <button
            type="button"
            onClick={onReset}
            className="absolute right-0 top-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg leading-none text-blue-100 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Reset drone tour"
          >
            &times;
          </button>
        )}

        <div className="max-w-3xl">
          <h3
            className="text-2xl font-black leading-tight text-transparent bg-clip-text md:text-3xl"
            style={{ backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #a5c0ff 55%, #4f8eff 100%)' }}
          >
            {title}
          </h3>
          <p className={`${spaceGrotesk.className} mt-3 text-sm leading-6 text-[#D5D2F7]/85 md:text-base md:leading-7`}>
            {copy}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-end">
          <div className="flex gap-2" aria-label="Tour progress">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  !isIntro && index + 1 === step ? 'w-8 bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.55)]' : 'w-3 bg-white/20'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            {!isIntro && (
              <button
                type="button"
                onClick={onPrevious}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-blue-100 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous drone part"
              >
                &larr;
              </button>
            )}
            <button
              type="button"
              onClick={onNext}
              className="flex h-10 cursor-pointer items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 text-sm font-bold text-blue-100 transition hover:border-blue-300/60 hover:bg-blue-500/25 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {nextLabel} <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
