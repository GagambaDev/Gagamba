'use client';

import { useEffect, useState } from 'react';
import PartDescription, { type DronePart } from './PartDescription';
import PlusPin from './PlusPin';

type DronePartDropdownProps = {
  parts: DronePart[];
};

const canHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const isMobilePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: none), (pointer: coarse)').matches;

export default function DronePartDropdown({ parts }: DronePartDropdownProps) {
  const [hoveredPartId, setHoveredPartId] = useState<string | null>(null);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);

  const activePartId = selectedPartId ?? hoveredPartId;
  const activePart = parts.find((part) => part.id === activePartId) ?? null;

  const showOnHover = (partId: string) => {
    if (!canHover()) {
      return;
    }

    setSelectedPartId(null);
    setHoveredPartId(partId);
  };

  const toggleOnMobile = (partId: string) => {
    if (!isMobilePointer()) {
      return;
    }

    setHoveredPartId(null);
    setSelectedPartId((currentPartId) =>
      currentPartId === partId ? null : partId
    );
  };

  useEffect(() => {
    if (!selectedPartId) {
      return;
    }

    const clearSelectionOnOutsideTap = (event: PointerEvent) => {
      if (!isMobilePointer()) {
        return;
      }

      if (event.target instanceof Element && event.target.closest('[data-drone-dropdown]')) {
        return;
      }

      setSelectedPartId(null);
      setHoveredPartId(null);
    };

    document.addEventListener('pointerdown', clearSelectionOnOutsideTap);

    return () => {
      document.removeEventListener('pointerdown', clearSelectionOnOutsideTap);
    };
  }, [selectedPartId]);

  return (
    <div className="absolute inset-0 z-20">
      {parts.map((part) => (
        <button
          key={part.id}
          type="button"
          data-drone-dropdown
          aria-label={`Show ${part.title} details`}
          aria-pressed={activePartId === part.id}
          className="absolute z-20 flex items-center justify-center"
          style={{
            top: part.down,
            left: part.right,
            transform: 'translate(-50%, -50%)',
          }}
          onMouseEnter={() => showOnHover(part.id)}
          onMouseLeave={() => setHoveredPartId(null)}
          onMouseDown={(event) => {
            if (canHover()) {
              event.preventDefault();
            }
          }}
          onFocus={() => setHoveredPartId(part.id)}
          onBlur={() => setHoveredPartId(null)}
          onClick={(event) => {
            event.stopPropagation();
            toggleOnMobile(part.id);
          }}
        >
          <PlusPin active={selectedPartId === part.id} />
        </button>
      ))}

      <PartDescription part={activePart} />
    </div>
  );
}
