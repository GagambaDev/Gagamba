import Image from "next/image";
import HeroBackground from "./HeroBackground";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-var(--header-height))] items-center overflow-hidden">
      <HeroBackground />

      <div className="relative mx-auto grid w-full max-w-300 grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-12 lg:items-center lg:gap-6 lg:px-8 lg:py-30">
        <div className="flex justify-center lg:col-span-5">
          <Image
            src="/brand/icon-sapphire.svg"
            alt=""
            width={440}
            height={428}
            preload
            className="h-auto w-[clamp(160px,30vw,440px)]"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <h1>
            <Image
              src="/brand/wordmark-sapphire.svg"
              alt="Gagamba UAS"
              width={520}
              height={100}
              preload
              className="h-auto w-[clamp(240px,34vw,520px)]"
            />
          </h1>

          <p className="mt-6 max-w-[34ch] text-body-lg text-balance text-onyx">
            Gagamba UAS builds autonomous, tetherless drones that clean{" "}
            <span className="whitespace-nowrap">high-rise</span> windows with no
            crew and a fraction of the water.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton label="Get a Quote" href="/contact" />
            {/* White backing keeps the label readable as the shards drift behind it */}
            <div className="flex bg-white">
              <SecondaryButton label="See how it works" href="#meet-gagamba" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
