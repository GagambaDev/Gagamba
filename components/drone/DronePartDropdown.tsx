'use client';

import { useEffect, useState } from 'react';
import PartDescription, { type DronePart } from './PartDescription';
import PlusPin, { outerRadius, pinSize } from './PlusPin';

type DronePartDropdownProps = {
  parts: DronePart[];
};

const canHover = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

export default function DronePartDropdown({ parts }: DronePartDropdownProps) {
  const [activePartId, setActivePartId] = useState<string | null>(null);

  const activePart = parts.find((part) => part.id === activePartId) ?? null;
  const togglePart = (partId: string) => {
    setActivePartId((currentPartId) =>
      currentPartId === partId ? null : partId
    );
  };

  useEffect(() => {
    if (!activePartId) {
      return;
    }

    const close = () => setActivePartId(null);

    document.addEventListener('click', close);

    return () => document.removeEventListener('click', close);
  }, [activePartId]);

  return (
    <div className="absolute inset-0 z-20">
      {parts.map((part) => (
        <button
          key={part.id}
          className="absolute z-20 flex items-center justify-center rounded-full"
          // Controls where the pin appears
          style={{
            top: part.down,
            left: part.right,
            width: pinSize,
            height: pinSize,
            transform: 'translate(-50%, -50%)',
            clipPath: `circle(${outerRadius}px at 50% 50%)`,
          }}
          // Display card when the user hovers over button
          onMouseEnter={() => {
            if (canHover()) {
              setActivePartId(part.id);
            }
          }}
          onMouseLeave={() => {
            if (canHover()) {
              setActivePartId(null);
            }
          }}
          // Mobile Support
          onClick={(event) => {
            event.stopPropagation();
            togglePart(part.id);
          }}
        >
          <PlusPin active={activePartId === part.id} />
        </button>
      ))}

      <div onClick={(event) => event.stopPropagation()}>
        <PartDescription part={activePart} />
      </div>
    </div>
  );
}
