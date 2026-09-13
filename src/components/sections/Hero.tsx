import Image from "next/image";
import { PlateLink } from "@/components/ui/PlateLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { business } from "@/data/business";
import { content } from "@/data/content";
import { photos } from "@/data/media";
import { directionsUrl, fullAddress } from "@/lib/maps";

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
        <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-asphalt)_18%,rgb(14_13_10/0.6)_48%,rgb(14_13_10/0.05)_74%,rgb(14_13_10/0.5))] md:bg-[linear-gradient(100deg,var(--color-asphalt)_6%,rgb(14_13_10/0.7)_36%,rgb(14_13_10/0)_64%),linear-gradient(to_top,var(--color-asphalt),rgb(14_13_10/0)_34%)]" />
      </div>
      <div aria-hidden="true" className="lamp-ember" />
      <div aria-hidden="true" className="lamp-glow" />

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-gutter pb-10 pt-32 md:pb-16">
        <h1 id="hero-title">
          <Wordmark variant="hero" />
          <span className="sr-only">, {content.hero.headingSuffix}</span>
        </h1>

        <div className="mt-7 flex flex-col gap-8 md:mt-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[30rem]">
            <p className="text-lg text-chalk/90">{content.hero.lead}</p>
            <PlateLink href={directionsUrl} external icon="arrowUpRight" className="mt-8 w-full sm:w-auto">
              {content.primaryCta}
            </PlateLink>
          </div>

          {/* The address is the page's second headline: a street plate that jumps to the directions section. */}
          <a
            href={`#${content.visit.id}`}
            aria-label={`${content.hero.addressLinkLabel}: ${fullAddress}`}
            className="street-plate self-start text-[clamp(1.125rem,0.85rem+1vw,1.625rem)] md:self-end"
          >
            <span>
              {address.streetShort}, {address.number}
            </span>
            <span className="flex justify-between gap-10 text-[0.62em] text-dust">
              <span>{address.neighborhood}</span>
              <span>{address.postalCode}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
