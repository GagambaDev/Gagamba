type PlusPinProps = {
  active?: boolean;
  label?: string;
};

export default function PlusPin({ active = false, label }: PlusPinProps) {
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
