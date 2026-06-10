'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import PartDescription, { type DronePart } from './PartDescription';
import PlusPin, { outerRadius, pinSize } from './PlusPin';

type DronePartDropdownProps = {
  parts: DronePart[];
};

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

export default function DronePartDropdown({ parts }: DronePartDropdownProps) {
  const [mode, setMode] = useState<'focus' | 'tour'>('focus');
  const [activePartId, setActivePartId] = useState<string | null>(parts[0]?.id ?? null);
  const [tourIndex, setTourIndex] = useState(0);

  const activePart = parts.find((part) => part.id === activePartId) ?? null;
  const tourPart = parts[tourIndex] ?? null;
  const displayedPart = mode === 'tour' ? tourPart : activePart;
  const isSpotlightActive = Boolean(displayedPart);

  const togglePart = (partId: string) => {
    setMode('focus');
    setActivePartId((currentPartId) =>
      currentPartId === partId ? null : partId
    );
  };

  const selectTourPart = (index: number) => {
    setMode('tour');
    setTourIndex(index);
    setActivePartId(parts[index]?.id ?? null);
  };

  const showNextPart = () => {
    const nextIndex = (tourIndex + 1) % parts.length;
    selectTourPart(nextIndex);
  };

  const showPreviousPart = () => {
    const previousIndex = (tourIndex - 1 + parts.length) % parts.length;
    selectTourPart(previousIndex);
  };

  useEffect(() => {
    if (!activePartId || mode === 'tour') {
      return;
    }

    const close = () => setActivePartId(null);

    document.addEventListener('click', close);

    return () => document.removeEventListener('click', close);
  }, [activePartId, mode]);

  const spotlightStyle = displayedPart
    ? {
        WebkitMaskImage: `radial-gradient(circle at ${displayedPart.right} ${displayedPart.down}, #000 0 ${displayedPart.focusRadius ?? '16%'}, transparent calc(${displayedPart.focusRadius ?? '16%'} + 8%))`,
        maskImage: `radial-gradient(circle at ${displayedPart.right} ${displayedPart.down}, #000 0 ${displayedPart.focusRadius ?? '16%'}, transparent calc(${displayedPart.focusRadius ?? '16%'} + 8%))`,
      }
    : undefined;

  return (
    <div className="relative space-y-4 transition-all duration-300">
      {displayedPart && (
        <div onClick={(event) => event.stopPropagation()}>
          <PartDescription
            mode={mode}
            placement="panel"
            part={displayedPart}
            step={tourIndex + 1}
            totalSteps={parts.length}
            onClose={() => setActivePartId(null)}
            onNext={showNextPart}
            onPrevious={showPreviousPart}
          />
        </div>
      )}

      <div className="relative overflow-hidden rounded-xl bg-[#f8fafc]">
        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_70px_rgba(4,6,15,0.18)]" />

        <div className="absolute left-4 top-4 z-30 flex flex-wrap items-center gap-2 rounded-lg border border-slate-200/80 bg-white/90 p-1 shadow-[0_14px_40px_rgba(15,23,42,0.14)] backdrop-blur">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setMode('focus');
              setActivePartId((currentPartId) => currentPartId ?? parts[0]?.id ?? null);
            }}
            className={`rounded-md px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
              mode === 'focus'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
            }`}
          >
            Focus
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setMode('tour');
              setActivePartId(parts[tourIndex]?.id ?? null);
            }}
            className={`rounded-md px-3 py-2 text-xs font-black uppercase tracking-[0.14em] transition ${
              mode === 'tour'
                ? 'bg-slate-950 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
            }`}
          >
            Tour
          </button>
        </div>

        <Image
          src="/images/dronerender.png"
          alt="Gagamba drone model"
          width={1719}
          height={1015}
          className={`relative z-0 h-auto w-full select-none transition-all duration-500 ${
            isSpotlightActive ? 'opacity-25 grayscale blur-[1px]' : 'opacity-100'
          }`}
          priority
        />
        {isSpotlightActive && (
          <>
            <Image
              src="/images/dronerender.png"
              alt=""
              width={1719}
              height={1015}
              className="absolute inset-0 z-0 h-auto w-full select-none drop-shadow-[0_18px_34px_rgba(37,99,235,0.22)] transition-opacity duration-500"
              style={spotlightStyle}
              aria-hidden="true"
              priority
            />
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-70"
              style={{
                background: `radial-gradient(circle at ${displayedPart?.right} ${displayedPart?.down}, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.08) 18%, transparent 34%)`,
              }}
            />
          </>
        )}

        {parts.map((part) => (
          <button
            key={part.id}
            className="absolute z-20 flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            style={{
              top: part.down,
              left: part.right,
              width: mode === 'tour' ? 32 : pinSize,
              height: mode === 'tour' ? 32 : pinSize,
              transform: 'translate(-50%, -50%)',
              clipPath: mode === 'tour' ? undefined : `circle(${outerRadius}px at 50% 50%)`,
            }}
            onMouseEnter={() => {
              if (mode === 'focus' && canHover()) {
                setActivePartId(part.id);
              }
            }}
            onMouseLeave={() => {
              if (mode === 'focus' && canHover()) {
                setActivePartId(null);
              }
            }}
            onClick={(event) => {
              event.stopPropagation();
              if (mode === 'tour') {
                selectTourPart(parts.findIndex((item) => item.id === part.id));
              } else {
                togglePart(part.id);
              }
            }}
            aria-label={`${mode === 'tour' ? 'Tour step' : 'Show details for'} ${part.title}`}
          >
            <PlusPin
              active={displayedPart?.id === part.id}
              label={`${parts.findIndex((item) => item.id === part.id) + 1}`}
              mode={mode}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
