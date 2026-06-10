'use client';

import Image from 'next/image';
import { useState } from 'react';
import PartDescription, { type DronePart } from './PartDescription';
import PlusPin from './PlusPin';

type DronePartDropdownProps = {
  parts: DronePart[];
};

export default function DronePartDropdown({ parts }: DronePartDropdownProps) {
  const [tourIndex, setTourIndex] = useState(0);

  const tourPart = parts[tourIndex] ?? null;
  const isSpotlightActive = Boolean(tourPart);

  const selectTourPart = (index: number) => {
    setTourIndex(index);
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
      {tourPart && (
        <div onClick={(event) => event.stopPropagation()}>
          <PartDescription
            part={tourPart}
            step={tourIndex + 1}
            totalSteps={parts.length}
            onNext={showNextPart}
            onPrevious={showPreviousPart}
          />
        </div>
      )}

      <div className="relative overflow-hidden rounded-xl bg-[#f8fafc]">
        <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_70px_rgba(4,6,15,0.18)]" />

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
                background: `radial-gradient(circle at ${tourPart?.right} ${tourPart?.down}, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.08) 18%, transparent 34%)`,
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
              width: 32,
              height: 32,
              transform: 'translate(-50%, -50%)',
            }}
            onClick={(event) => {
              event.stopPropagation();
              selectTourPart(parts.findIndex((item) => item.id === part.id));
            }}
            aria-label={`Tour step ${part.title}`}
          >
            <PlusPin
              active={tourPart?.id === part.id}
              label={`${parts.findIndex((item) => item.id === part.id) + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
