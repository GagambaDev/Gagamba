export default function PageTitle({ prefix, highlight }: { prefix: string; highlight: string }) {
  return (
    <h1 className="font-header text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
      {prefix}{" "}
      <span className="text-white">
        {highlight}
      </span>
    </h1>
  );
}