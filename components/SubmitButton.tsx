import { JSX } from "react";

export default function SubmitButton({ label, onClick }: { label: string; onClick?: () => void }): JSX.Element {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full bg-blue-600/80 hover:bg-blue-500/90 border border-blue-500/40 hover:border-blue-400/60 text-white font-semibold text-sm h-12 px-6 rounded-xl cursor-pointer transition-all duration-200 backdrop-blur-sm"
    >
      {label}
    </button>
  );
}