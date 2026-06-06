export default function Subtitle({ message }: { message: string }) {
  return (
    <p className="text-base md:text-2xl text-[var(--color-periwinkle)] font-normal max-w-xl leading-relaxed tracking-wide">
      {message}
    </p>
  );
}