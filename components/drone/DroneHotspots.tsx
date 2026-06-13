/**
 * This is the list of clickable hotspot buttons placed over the drone image.
 * It uses each DronePart's down and right values to position the hotspot.
 * If you need to change how a hotspot is selected or where the buttons render,
 * this is the component that connects the part data to the hotspot icon.
 */

'use client';

import DroneHotspot from '@/components/drone/DroneHotspot';
import { DronePart } from '@/lib/types';

type DroneHotspotsProps = {
  parts: DronePart[];
  selectedPart: DronePart | null;
  onSelectPart: (index: number) => void;
};

export default function DroneHotspots({
  parts,
  selectedPart,
  onSelectPart,
}: DroneHotspotsProps) {
  return parts.map((part, index) => (
    <button
      key={part.id}
      className="absolute z-30 flex cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
      style={{
        top: part.down,
        left: part.right,
        width: 'clamp(1.9rem, 3.5%, 2.5rem)',
        aspectRatio: '1 / 1',
        transform: 'translate(-50%, -50%)',
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelectPart(index);
      }}
      aria-label={`Show ${part.title}`}
    >
      <DroneHotspot active={selectedPart?.id === part.id} />
    </button>
  ));
}
