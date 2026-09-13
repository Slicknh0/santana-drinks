import { LitImage } from "@/components/ui/LitImage";
import { content } from "@/data/content";
import { drinks } from "@/data/drinks";
import { drinksGallery } from "@/data/media";

const galleryLayout = [
  { sizes: "(min-width: 768px) 42vw, 80vw", className: "md:col-span-5", image: "object-cover" },
  { sizes: "(min-width: 768px) 25vw, 80vw", className: "md:col-span-3 md:mt-44", image: "object-cover object-[58%_50%]" },
  { sizes: "(min-width: 768px) 34vw, 80vw", className: "md:col-span-4 md:mt-20", image: "object-cover object-[50%_60%]" },
];

export function Drinks() {
  const copy = content.drinks;

  return (
    <section
      id={copy.id}
      aria-labelledby="drinks-title"
      className="pt-section pb-[calc(var(--spacing-section)*0.5)]"
    >
      <div className="mx-auto max-w-page px-gutter">
        <div className="grid gap-y-8 md:grid-cols-12 md:items-end md:gap-x-6">
          <h2 id="drinks-title" className="display text-4xl md:col-span-7">
            {copy.title}
          </h2>
          <p className="max-w-copy text-xl text-dust md:col-span-5 md:col-start-8 lg:col-span-4 lg:col-start-9">
            {copy.body}
          </p>
        </div>

        <div
          role="region"
          aria-label={copy.galleryLabel}
          tabIndex={0}
          className="-mx-gutter mt-14 flex snap-x snap-mandatory scroll-px-gutter gap-3 overflow-x-auto px-gutter pb-4 [scrollbar-width:none] md:mx-0 md:mt-24 md:grid md:grid-cols-12 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {drinksGallery.map((photo, index) => (
            <LitImage
              key={photo.credit}
              photo={photo}
              sizes={galleryLayout[index % galleryLayout.length].sizes}
              className={`aspect-[4/5] w-[80vw] flex-none snap-start rounded-plate md:w-auto ${galleryLayout[index % galleryLayout.length].className}`}
              imageClassName={galleryLayout[index % galleryLayout.length].image}
            />
          ))}
        </div>
        <p className="mt-6 text-xs text-dust md:text-right">{copy.illustrativeNote}</p>

        {drinks.length > 0 && (
          <div className="mt-24 grid gap-y-8 md:grid-cols-12 md:gap-x-6">
            <h3 className="display text-2xl md:col-span-4">{copy.menuTitle}</h3>
            <ul className="divide-y divide-line border-y border-line md:col-span-7 md:col-start-6">
              {drinks.map((drink) => (
                <li key={drink.name} className="flex items-baseline justify-between gap-8 py-5">
                  <div>
                    <p className="text-lg text-chalk">{drink.name}</p>
                    {drink.description && <p className="mt-1 text-sm text-dust">{drink.description}</p>}
                  </div>
                  {drink.price && <p className="flex-none font-plate text-lg text-champagne">{drink.price}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
