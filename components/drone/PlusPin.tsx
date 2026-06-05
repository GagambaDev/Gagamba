type PlusPinProps = {
  active?: boolean;
};

export const pinSize = 56;
export const outerRadius = 16;

const center = pinSize / 2;
const dotRadius = 2;
const ringStrokeWidth = 1.5;
const plusStrokeWidth = 3;
const plusArmLength = 12;
const ringFill = '#251414';
const ringStroke = '#ffffff';
const iconColor = '#ffffff';

export default function PlusPin({ active = false }: PlusPinProps){
  const plusStart = center - plusArmLength;
  const plusEnd = center + plusArmLength;

  return (
    <svg width={pinSize} height={pinSize} viewBox={`0 0 ${pinSize} ${pinSize}`} className="group cursor-pointer transition-all duration-200">
      <circle cx={center} cy={center} r={outerRadius}
        fill={ringFill}
        fillOpacity="0.3"
        stroke={ringStroke}
        strokeOpacity="0.2"
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
