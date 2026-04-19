export default function FormLabel({ label }: { label: string }) {
  return (
    <p className="text-sm font-medium text-white/70 tracking-wide">
      {label}
    </p>
  );
}