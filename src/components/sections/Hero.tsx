import Image from "next/image";
import { PlateLink } from "@/components/ui/PlateLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { business } from "@/data/business";
import { content } from "@/data/content";
import { photos } from "@/data/media";
import { directionsUrl, streetLine } from "@/lib/maps";

export function Hero() {
  const { address } = business;

  return (
    <section
      id="inicio"
      data-cta-zone
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={photos.hero.src}
          alt={photos.hero.alt}
          fill
          preload
          sizes="100vw"
          quality={80}
          placeholder="blur"
          className="object-cover object-[50%_42%] md:object-[62%_55%]"
        />
        <div className="lamp-dim" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-asphalt)_14%,rgb(14_13_10/0.78)_44%,rgb(14_13_10/0.12)_72%,rgb(14_13_10/0.55))] md:bg-[linear-gradient(100deg,var(--color-asphalt)_6%,rgb(14_13_10/0.7)_36%,rgb(14_13_10/0)_64%),linear-gradient(to_top,var(--color-asphalt),rgb(14_13_10/0)_34%)]" />
      </div>
      <div aria-hidden="true" className="lamp-ember" />
      <div aria-hidden="true" className="lamp-glow" />

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-gutter pb-10 pt-32 md:pb-16">
        <h1 id="hero-title">
          <Wordmark variant="hero" />
          <span className="sr-only">, {content.hero.headingSuffix}</span>
        </h1>

        <div className="mt-7 flex flex-col gap-10 md:mt-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[27rem]">
            <p className="text-lg text-chalk/90">{content.hero.lead}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-5">
              <PlateLink href={directionsUrl} external icon="arrowUpRight" className="w-full sm:w-auto">
                {content.primaryCta}
              </PlateLink>
              <a href={`#${content.visit.id}`} className="text-link text-sm font-medium text-dust">
                {streetLine}
              </a>
            </div>
          </div>

          <p aria-hidden="true" className="street-plate hidden text-[1.0625rem] md:inline-flex">
            <span>{address.streetShort}</span>
            <span className="flex justify-between gap-10 text-[0.7em] text-dust">
              <span>{address.neighborhood}</span>
              <span>{address.postalCode}</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
