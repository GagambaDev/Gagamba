import { JSX } from "react";

export default function Button({ label }: { label: string }): JSX.Element {
  return (
    <button
      type="submit"
      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition cursor-pointer mt-2"
    >
      {label}
    </button>
  );
}