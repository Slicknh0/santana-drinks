import { LitImage } from "@/components/ui/LitImage";
import { PlateLink } from "@/components/ui/PlateLink";
import { business } from "@/data/business";
import { content } from "@/data/content";
import { photos } from "@/data/media";
import { directionsUrl, streetLine } from "@/lib/maps";

export function Closing() {
  return (
    <section data-cta-zone aria-labelledby="closing-title" className="border-t border-line">
      <div className="mx-auto grid max-w-page items-end gap-y-14 px-gutter py-section md:grid-cols-12 md:gap-x-6">
        <div className="md:col-span-7">
          <h2 id="closing-title" className="display max-w-[9ch] text-4xl">
            {content.closing.title}
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <PlateLink href={directionsUrl} external icon="arrowUpRight" className="w-full sm:w-auto">
              {content.primaryCta}
            </PlateLink>
            <span className="text-sm text-dust">
              {streetLine}, {business.address.neighborhood}
            </span>
          </div>
        </div>
        <LitImage
          photo={photos.closing}
          sizes="(min-width: 768px) 34vw, 100vw"
          className="aspect-[4/5] rounded-plate md:col-span-4 md:col-start-9"
          imageClassName="object-cover object-[50%_40%]"
        />
      </div>
    </section>
  );
}
