export default function SecondaryButton({ message }: { message: string }) {
  return (
    <button
      className="bg-transparent hover:bg-white/5 border border-white/15 hover:border-white/25 text-white/80 hover:text-white rounded-full font-medium text-sm h-10 px-6 cursor-pointer transition-all duration-200">
      {message}
    </button>
  );
}