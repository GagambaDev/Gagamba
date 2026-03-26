export default function EyebrowLabel({ message }: { message: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/80 text-xs font-medium tracking-wide px-4 py-1.5 rounded-full backdrop-blur-sm">
      {/* Accent dot mimicking the Framer "NEW" badge */}
      <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_6px_rgba(96,165,250,0.8)]" />
      {message}
    </div>
  );
}