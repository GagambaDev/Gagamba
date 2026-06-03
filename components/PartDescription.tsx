import type { CSSProperties } from 'react';

export type DronePart = {
  id: string;
  title: string;
  description: string;
  down: string;
  right: string;
};

type PartDescriptionProps = {
  part: DronePart | null;
};

export default function PartDescription({ part }: PartDescriptionProps) {
  if (!part) {
    return null;
  }

  const opensLeft = Number.parseFloat(part.right) > 55;
  const opensUp = Number.parseFloat(part.down) > 60;
  const preferredLeft = opensLeft
    ? `calc(${part.right} - 18.25rem)`
    : `calc(${part.right} + 2.25rem)`;
  const cardStyle: CSSProperties = {
    left: `clamp(0.75rem, ${preferredLeft}, calc(100% - min(16rem, calc(100% - 1.5rem)) - 0.75rem))`,
    width: 'min(16rem, calc(100% - 1.5rem))',
    maxHeight: 'calc(100% - 1.5rem)',
    overflowY: 'auto',
    ...(opensUp
      ? { bottom: `calc(100% - ${part.down} - 1.75rem)` }
      : { top: `calc(${part.down} - 1.75rem)` }),
  };

  return (
    <div
      data-drone-dropdown
      className="absolute z-30 border border-blue-400 bg-[#071024]/90 p-5 text-white shadow-xl backdrop-blur-sm"
      style={cardStyle}
    >
      <h3 className="text-2xl font-bold">{part.title}</h3>
      <p className="mt-3 text-gray-300">{part.description}</p>
    </div>
  );
}
