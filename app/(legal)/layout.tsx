export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white px-6 py-16 md:px-8 md:py-30">
      <article className="mx-auto max-w-[720px] leading-relaxed [&_h1]:text-h2 [&_h1]:text-sapphire [&_h2]:mt-10 [&_h2]:text-[20px]
        [&_h2]:font-semibold [&_h2]:text-onyx [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_a]:text-sapphire [&_a]:underline">
        {children}
      </article>
    </main>
  );
}