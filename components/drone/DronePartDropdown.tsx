'use client';

import Image from 'next/image';
import { useState } from 'react';
import PartDescription, { type DronePart } from './PartDescription';
import PlusPin from './PlusPin';

type DronePartDropdownProps = {
  parts: DronePart[];
};

export default function DronePartDropdown({ parts }: DronePartDropdownProps) {
  const [hasStartedTour, setHasStartedTour] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);

  const tourPart = parts[tourIndex] ?? null;
  const isSpotlightActive = hasStartedTour && Boolean(tourPart);

  const startTour = () => {
    setTourIndex(0);
    setHasStartedTour(true);
  };

  const resetTour = () => {
    setTourIndex(0);
    setHasStartedTour(false);
  };

  const selectTourPart = (index: number) => {
    setTourIndex(index);
    setHasStartedTour(true);
  };

  const showNextPart = () => {
    const nextIndex = (tourIndex + 1) % parts.length;
    selectTourPart(nextIndex);
  };

  const showPreviousPart = () => {
    const previousIndex = (tourIndex - 1 + parts.length) % parts.length;
    selectTourPart(previousIndex);
  };

  const spotlightStyle = tourPart
    ? {
        WebkitMaskImage: `radial-gradient(circle at ${tourPart.right} ${tourPart.down}, #000 0 ${tourPart.spotlightRadius ?? '16%'}, transparent calc(${tourPart.spotlightRadius ?? '16%'} + 8%))`,
        maskImage: `radial-gradient(circle at ${tourPart.right} ${tourPart.down}, #000 0 ${tourPart.spotlightRadius ?? '16%'}, transparent calc(${tourPart.spotlightRadius ?? '16%'} + 8%))`,
      }
    : undefined;

  return (
    <div className="relative space-y-4 transition-all duration-300">
      <div onClick={(event) => event.stopPropagation()}>
        <PartDescription
          part={hasStartedTour ? tourPart : null}
          step={hasStartedTour ? tourIndex + 1 : 0}
          totalSteps={parts.length}
          onNext={hasStartedTour ? showNextPart : startTour}
          onPrevious={showPreviousPart}
          onReset={resetTour}
        />
      </div>

      <div className="relative isolate overflow-hidden rounded-xl bg-[#030712]">
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 45% at 50% 48%, rgba(79,142,255,0.11) 0%, rgba(12,35,110,0.07) 40%, transparent 72%), linear-gradient(135deg, #030712 0%, #061023 52%, #02040c 100%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(165,192,255,0.18) 1px, transparent 1.4px)',
              backgroundSize: '22px 22px',
            }}
          />
        </div>

        <Image
          src="/images/dronerender.png"
          alt="Gagamba drone model"
          width={1719}
          height={1015}
          className={`relative z-10 h-auto w-full select-none transition-all duration-500 ${
            isSpotlightActive ? 'opacity-100 grayscale brightness-[0.58] contrast-110 blur-[1px]' : 'opacity-100'
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
              className="absolute inset-0 z-10 h-auto w-full select-none drop-shadow-[0_18px_34px_rgba(37,99,235,0.22)] transition-opacity duration-500"
              style={spotlightStyle}
              aria-hidden="true"
              priority
            />
            <div
              className="absolute inset-0 z-10 pointer-events-none opacity-70"
              style={{
                background: `radial-gradient(circle at ${tourPart?.right} ${tourPart?.down}, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.08) 18%, transparent 34%)`,
              }}
            />
          </>
        )}

        {hasStartedTour && parts.map((part) => (
          <button
            key={part.id}
            className="absolute z-30 flex cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
            style={{
              top: part.down,
              left: part.right,
              width: 'clamp(1.7rem, 3.5%, 2.5rem)',
              aspectRatio: '1 / 1',
              transform: 'translate(-50%, -50%)',
            }}
            onClick={(event) => {
              event.stopPropagation();
              selectTourPart(parts.findIndex((item) => item.id === part.id));
            }}
            aria-label={`Tour step ${part.title}`}
          >
            <PlusPin
              active={hasStartedTour && tourPart?.id === part.id}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
