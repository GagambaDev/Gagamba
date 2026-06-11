export default function Subtitle({ normal, highlight }: { normal: string, highlight?: string }) {
  return (
    <p className="text-base md:text-2xl text-[var(--color-periwinkle)] font-normal max-w-xl leading-relaxed tracking-wide">
      {normal}

      {highlight && <span className="text-[var(--color-fresh-sky)]">
        {" "}
        {highlight}
      </span>}
    </p>
  );
}