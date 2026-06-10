import type { CSSProperties } from 'react';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export type DronePartStat = {
  label: string;
  value: string;
};

export type DronePart = {
  id: string;
  title: string;
  description: string;
  down: string;
  right: string;
  statSummary: string;
  stats: DronePartStat[];
  tourCopy: string;
  focusRadius?: string;
};

type PartDescriptionProps = {
  mode?: 'focus' | 'tour';
  part: DronePart | null;
  placement?: 'overlay' | 'panel';
  step?: number;
  totalSteps?: number;
  onClose?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
};

const statIcons = ['#', '%', '~', '+'];

export default function PartDescription({
  mode = 'focus',
  part,
  placement = 'overlay',
  step = 1,
  totalSteps = 1,
  onClose,
  onNext,
  onPrevious,
}: PartDescriptionProps) {
  if (!part) {
    return null;
  }

  const opensLeft = Number.parseFloat(part.right) > 55;
  const opensUp = Number.parseFloat(part.down) > 58;
  const preferredLeft = opensLeft
    ? `calc(${part.right} - 19.25rem)`
    : `calc(${part.right} + 2.25rem)`;
  const cardStyle: CSSProperties = {
    left: `clamp(0.75rem, ${preferredLeft}, calc(100% - min(17rem, calc(100% - 1.5rem)) - 0.75rem))`,
    width: 'min(17rem, calc(100% - 1.5rem))',
    maxHeight: 'calc(100% - 1.5rem)',
    overflowY: 'auto',
    ...(opensUp
      ? { bottom: `calc(100% - ${part.down} - 1.75rem)` }
      : { top: `calc(${part.down} - 1.75rem)` }),
  };

  if (mode === 'tour') {
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

  if (placement === 'panel') {
    return (
      <aside className="relative z-30 w-full rounded-lg border border-slate-200 bg-white p-5 text-slate-950 shadow-[0_18px_55px_rgba(15,23,42,0.12)]">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.4fr)]">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  {part.statSummary}
                </p>
                <h3 className="mt-2 text-xl font-black leading-tight text-blue-600">{part.title}</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Close part details"
              >
                &times;
              </button>
            </div>

            <p className={`${spaceGrotesk.className} mt-3 max-w-3xl text-sm leading-6 text-slate-700`}>
              {part.description}
            </p>
          </div>

          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {part.stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center justify-between gap-4 text-sm">
                <dt className="flex items-center gap-3 font-semibold text-slate-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-200 text-[10px] font-black text-blue-600">
                    {statIcons[index] ?? '+'}
                  </span>
                  {stat.label}
                </dt>
                <dd className="font-bold text-slate-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    );
  }

  return (
    <div
      key={part.id}
      data-drone-dropdown
      className="absolute z-30 rounded-lg border border-slate-200 bg-white p-5 text-slate-950 shadow-[0_24px_80px_rgba(15,23,42,0.16)] transition-all duration-300"
      style={cardStyle}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-black leading-tight text-blue-600">{part.title}</h3>
        <button
          type="button"
          onClick={onClose}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Close part details"
        >
          &times;
        </button>
      </div>

      <p className={`${spaceGrotesk.className} mt-3 text-sm leading-6 text-slate-700`}>
        {part.description}
      </p>

      <div className="mt-4 border-t border-slate-200 pt-4">
        <dl className="space-y-3">
          {part.stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center justify-between gap-4 text-sm">
              <dt className="flex items-center gap-3 font-semibold text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-blue-200 text-[10px] font-black text-blue-600">
                  {statIcons[index] ?? '+'}
                </span>
                {stat.label}
              </dt>
              <dd className="font-bold text-slate-950">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        type="button"
        className="mt-5 flex w-full items-center justify-between rounded-md bg-blue-600 px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.32)] transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Learn more <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
