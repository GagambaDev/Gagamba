export default function PrimaryButton({message}: {message: string}) {
  return (
    <button
      className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
      {message}
    </button>
  );
}