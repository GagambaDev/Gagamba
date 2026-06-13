'use client';

import Image from 'next/image';
import { type RefObject } from 'react';
import DroneHotspots from '@/components/drone/DroneHotspots';
import { DronePart } from '@/lib/types';

const DRONE_IMAGE = {
  src: '/images/dronerender.png',
  width: 1719,
  height: 1015,
  alt: 'Gagamba drone model',
};

type DroneImageStageProps = {
  isTourActive: boolean;
  parts: DronePart[];
  scrollContainerRef: RefObject<HTMLDivElement | null>;
  selectedPart: DronePart | null;
  onSelectPart: (index: number) => void;
};

export default function DroneImageStage({
  isTourActive,
  parts,
  scrollContainerRef,
  selectedPart,
  onSelectPart,
}: DroneImageStageProps) {
  const isSpotlightActive = isTourActive && Boolean(selectedPart);

  return (
    <div className="overflow-hidden rounded-xl bg-[#030712]">
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="relative isolate min-w-[42rem] overflow-hidden rounded-xl bg-[#030712] md:min-w-0">
          <DroneStageBackground />

          <Image
            src={DRONE_IMAGE.src}
            alt={DRONE_IMAGE.alt}
            width={DRONE_IMAGE.width}
            height={DRONE_IMAGE.height}
            className={`relative z-10 h-auto w-full select-none transition-all duration-500 ${
              isSpotlightActive
                ? 'opacity-100 grayscale brightness-[0.58] contrast-110 blur-[1px]'
                : 'opacity-100'
            }`}
            priority
          />

          {isSpotlightActive && selectedPart && <DroneSpotlight part={selectedPart} />}

          {isTourActive && (
            <DroneHotspots
              parts={parts}
              selectedPart={selectedPart}
              onSelectPart={onSelectPart}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function DroneStageBackground() {
  return (
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
  );
}

function DroneSpotlight({ part }: { part: DronePart }) {
  const radius = part.spotlightRadius ?? '16%';
  const maskImage = `radial-gradient(circle at ${part.right} ${part.down}, #000 0 ${radius}, transparent calc(${radius} + 8%))`;

  return (
    <>
      <Image
        src={DRONE_IMAGE.src}
        alt=""
        width={DRONE_IMAGE.width}
        height={DRONE_IMAGE.height}
        className="absolute inset-0 z-10 h-auto w-full select-none drop-shadow-[0_18px_34px_rgba(37,99,235,0.22)] transition-opacity duration-500"
        style={{ WebkitMaskImage: maskImage, maskImage }}
        aria-hidden="true"
        priority
      />
      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-70"
        style={{
          background: `radial-gradient(circle at ${part.right} ${part.down}, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.08) 18%, transparent 34%)`,
        }}
      />
    </>
  );
}
