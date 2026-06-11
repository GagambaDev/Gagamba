import { Space_Grotesk } from 'next/font/google';
import { DronePart, PartDescriptionProps } from '@/lib/types';
import TourContent from '@/components/drone/TourContent';
import TourControl from '@/components/drone/TourControl';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

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
    <aside className="relative z-30 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050810] p-4 text-white shadow-[0_24px_70px_rgba(4,6,15,0.34)] sm:p-5">
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          background:
            'radial-gradient(ellipse 55% 120% at 8% 0%, rgba(79,142,255,0.22) 0%, rgba(22,65,185,0.08) 44%, transparent 72%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />

      <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
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

        {/* Tour title and description text */}
        <TourContent title={title} copy={copy} isIntro={isIntro}/>

        {/* Progress dots and prev/next navigation */}
        <TourControl 
          isIntro={isIntro}
          step={step}
          totalSteps={totalSteps}
          nextLabel={nextLabel}
          onNext={onNext}
          onPrevious={onPrevious}
          />
      </div>
    </aside>
  );
}
