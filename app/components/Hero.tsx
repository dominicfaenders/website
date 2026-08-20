import Image from "next/image";
import { brand } from "@/lib/content";
import { alt, images } from "@/lib/images";

export default function Hero() {
  return (
    <section id="start" className="bg-[var(--alt-bg)]">
      <div className="mx-auto max-w-[120rem] px-6 pt-40 lg:px-10 lg:pt-52">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-semibold leading-[1.06] tracking-tight text-[var(--alt-ink)] sm:text-6xl lg:text-[4.25rem]">
            {brand.claim}
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-[var(--alt-muted)] lg:text-xl lg:leading-8">
            {brand.heroSubclaim}
          </p>
        </div>

        <div className="relative mt-12 min-h-[56vh] overflow-hidden rounded-2xl lg:mt-16 lg:min-h-[64vh]">
          <Image
            src={images.leipzigSkyline}
            alt={alt.leipzigSkyline}
            fill
            priority
            quality={80}
            className="object-cover object-center"
            sizes="(min-width: 1920px) 120rem, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
