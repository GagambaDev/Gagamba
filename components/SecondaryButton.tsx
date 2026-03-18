export default function SecondaryButton({message}: {message: string}) {
  return (
    <button
      className="bg-[#4f4f4f] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
      {message}
    </button>
  );
}