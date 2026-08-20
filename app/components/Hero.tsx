import Image from "next/image";
import { brand } from "@/lib/content";
import { alt, images } from "@/lib/images";

export default function Hero() {
  return (
    <section id="start" className="bg-[var(--alt-bg)]">
      <div className="mx-auto max-w-6xl px-6 pt-28 lg:px-10 lg:pt-32">
        <div className="relative min-h-[72vh] overflow-hidden rounded-2xl lg:min-h-[80vh]">
          <Image
            src={images.leipzigSkyline}
            alt={alt.leipzigSkyline}
            fill
            priority
            quality={80}
            className="object-cover object-center"
            sizes="(min-width: 1024px) 72rem, 100vw"
          />
          <div className="absolute inset-0 bg-ink/55" />

          <div className="relative z-10 flex min-h-[72vh] items-end p-8 lg:min-h-[80vh] lg:items-center lg:p-14">
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
      </div>
    </section>
  );
}
