export default function PrimaryButton({ message }: { message: string }) {
  return (
    <button
      className="bg-[var(--color-violet-twilight)] hover:bg-white/15 border border-white/10 hover:border-white/20 text-white font-semibold text-sm h-10 px-6 rounded-full cursor-pointer transition-all duration-200 backdrop-blur-sm">
      {message}
    </button>
  );
}