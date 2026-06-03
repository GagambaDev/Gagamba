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
      key={part.id}
      data-drone-dropdown
      className="absolute z-30 rounded-2xl border border-white/[0.07] bg-[#071024]/95 p-6 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:border-blue-500/40 hover:bg-[#071024]"
      style={cardStyle}
    >
      <h3 className="text-xl font-bold leading-tight text-white">{part.title}</h3>
      <div className="mt-3 h-[2px] w-16 bg-blue-500" />
      <p className="mt-4 text-sm leading-relaxed text-gray-300">
        {part.description}
      </p>
    </div>
  );
}
