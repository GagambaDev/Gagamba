export default function FormLabel({ label }: { label: string }) {
  return (
    <p className="text-zinc-300 text-sm font-medium">
      {label}
    </p>
  );
}