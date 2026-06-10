type PlusPinProps = {
  active?: boolean;
};

export default function PlusPin({ active = false }: PlusPinProps) {
  return (
    <span
      className="group relative flex h-full w-full items-center justify-center rounded-full"
    >
      <span
        className={`absolute inset-0 rounded-full border transition-all duration-200 ${
          active
            ? 'border-blue-200/80 bg-blue-400/14'
            : 'border-blue-200/0 bg-blue-400/0 group-hover:border-blue-200/60 group-hover:bg-blue-400/10'
        }`}
      />
      <span
        className={`absolute left-1/2 top-1/2 rounded-full transition-all duration-200 ${
          active
            ? 'h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,0.68)]'
            : 'h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 bg-blue-200/75 shadow-[0_0_8px_rgba(191,219,254,0.42)] group-hover:h-[28%] group-hover:w-[28%] group-hover:bg-blue-300'
        }`}
      />
      <span className={`absolute h-[26%] w-[2px] rounded-full bg-white transition-transform duration-200 ${active ? 'scale-y-100' : 'scale-y-0'}`} />
      <span className={`absolute h-[2px] w-[26%] rounded-full bg-white transition-transform duration-200 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
    </span>
  );
}
