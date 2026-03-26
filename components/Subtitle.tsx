export default function Subtitle({ message }: { message: string }) {
  return (
    <p className="text-base md:text-lg text-white/50 font-normal max-w-xl leading-relaxed tracking-wide">
      {message}
    </p>
  );
}