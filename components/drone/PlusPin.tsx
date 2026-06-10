type PlusPinProps = {
  active?: boolean;
  label?: string;
  mode?: 'focus' | 'tour';
};

export const pinSize = 56;
export const outerRadius = 12;

const center = pinSize / 2;
const dotRadius = 2;
const ringStrokeWidth = 1.5;
const plusStrokeWidth = 3;
const plusArmLength = 12;
const ringFill = '#251414';
const ringStroke = '#ffffff';
const iconColor = '#ffffff';
const fillOpacity = 0.3;
const strokeOpacity = 0.2;

export default function PlusPin({ active = false, label, mode = 'focus' }: PlusPinProps){
  if (mode === 'tour') {
    return (
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-black shadow-[0_10px_24px_rgba(15,23,42,0.25)] ring-2 ring-white transition-all duration-200 ${
          active
            ? 'scale-110 bg-blue-600 text-white'
            : 'bg-white/85 text-slate-700 hover:bg-blue-600 hover:text-white'
        }`}
      >
        {label}
      </span>
    );
  }

  const plusStart = center - plusArmLength;
  const plusEnd = center + plusArmLength;

  return (
    <svg width={pinSize} height={pinSize} viewBox={`0 0 ${pinSize} ${pinSize}`} className="group cursor-pointer transition-all duration-200">
      <circle cx={center} cy={center} r={outerRadius}
        fill={ringFill}
        fillOpacity={fillOpacity}
        stroke={ringStroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={ringStrokeWidth}
        className={`transition-all duration-200 [@media(hover:hover)]:group-hover:fill-[#ffffff]/10 [@media(hover:hover)]:group-hover:stroke-[#ffffff]/20 ${active ? 'fill-[#ffffff]/10 stroke-[#ffffff]/20' : ''}`}
      />
      <circle cx={center} cy={center} r={dotRadius} fill={iconColor}
        className={`transition-all duration-200 [@media(hover:hover)]:group-hover:opacity-0 ${active ? 'opacity-0' : ''}`}
      />
      <line x1={center} y1={plusStart} x2={center} y2={plusEnd} stroke={iconColor} strokeWidth={plusStrokeWidth} strokeLinecap="round"
        className={`transition-all duration-200 origin-center scale-y-0 [@media(hover:hover)]:group-hover:scale-y-100 ${active ? 'scale-y-100' : ''}`}
      />
      <line x1={plusStart} y1={center} x2={plusEnd} y2={center} stroke={iconColor} strokeWidth={plusStrokeWidth} strokeLinecap="round"
        className={`transition-all duration-200 origin-center scale-x-0 [@media(hover:hover)]:group-hover:scale-x-100 ${active ? 'scale-x-100' : ''}`}
      />
    </svg>
  );
}
