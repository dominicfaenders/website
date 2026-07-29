import Image from "next/image";
import { brand } from "@/lib/content";
import { alt, images } from "@/lib/images";

export default function Hero() {
  return (
    <section id="start" className="relative bg-ink">
      <div className="relative mx-auto flex min-h-[92vh] w-full max-w-intro items-end lg:min-h-[95vh] lg:items-center">
        <Image
          src={images.leipzigSkyline}
          alt={alt.leipzigSkyline}
          fill
          priority
          quality={92}
          className="object-cover object-center"
          sizes="(min-width: 120rem) 120rem, 100vw"
        />
        <div className="absolute inset-0 bg-ink/60" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40 lg:px-10 lg:pb-24 lg:pt-48">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight text-warm-white sm:text-6xl lg:text-[4.25rem]">
              {brand.claim}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-warm-white lg:text-xl lg:leading-8">
              {brand.heroSubclaim}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
