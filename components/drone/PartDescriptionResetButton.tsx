type PartDescriptionResetButtonProps = {
  onReset?: () => void;
};

export default function PartDescriptionResetButton({
  onReset,
}: PartDescriptionResetButtonProps) {
  return (
    <button
      type="button"
      onClick={onReset}
      className="absolute right-0 top-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg leading-none text-blue-100 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Reset drone tour"
    >
      &times;
    </button>
  );
}
