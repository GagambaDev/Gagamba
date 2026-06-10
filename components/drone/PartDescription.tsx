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
};

export default function PartDescription({
  part,
  step = 1,
  totalSteps = 1,
  onNext,
  onPrevious,
}: PartDescriptionProps) {
  if (!part) {
    return null;
  }

  return (
    <aside className="relative z-30 w-full rounded-lg border border-slate-200 bg-white p-5 text-slate-950 shadow-[0_18px_55px_rgba(15,23,42,0.12)]">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className={`${spaceGrotesk.className} text-sm font-medium text-slate-600`}>
            {step} / {totalSteps}
          </p>
          <h3 className="mt-2 text-xl font-black leading-tight text-blue-600">{part.title}</h3>
          <p className={`${spaceGrotesk.className} mt-3 max-w-3xl text-sm leading-6 text-slate-700`}>
            {part.tourCopy}
          </p>
        </div>

        <div className="flex items-center justify-between gap-5 lg:justify-end">
          <div className="flex gap-3" aria-label="Tour progress">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <span
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index + 1 === step ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrevious}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous drone part"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={onNext}
              className="flex items-center gap-3 rounded-full px-3 py-2 text-sm font-bold text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Next <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
