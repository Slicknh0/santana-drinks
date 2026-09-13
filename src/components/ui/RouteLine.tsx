import { business } from "@/data/business";
import { content } from "@/data/content";
import { formatMeters, streetLine } from "@/lib/maps";

/** Diagrama de linha de metrô: da estação até a porta, com a distância real em linha reta. */
export function RouteLine() {
  const { transit } = business;
  const { route } = content.about;

  return (
    <figure>
      <div aria-hidden="true" className="flex items-center gap-3 sm:gap-5">
        <span className="size-3.5 flex-none rounded-full border-2 border-champagne bg-asphalt" />
        <span className="route-track">
          <span className="route-fill" />
        </span>
        <span className="flex-none font-plate text-lg tracking-[0.04em] text-champagne">
          {formatMeters(transit.straightLineMeters)}
        </span>
        <span className="route-track">
          <span className="route-fill route-fill-late" />
        </span>
        <span className="brand-plate flex-none text-[0.625rem]">Drinks</span>
      </div>
      <figcaption className="mt-5 flex items-start justify-between gap-6 text-sm">
        <span className="sr-only">{route.summary}</span>
        <span>
          <span className="block text-chalk">Estação {transit.station}</span>
          <span className="block text-dust">{transit.line}</span>
        </span>
        <span aria-hidden="true" className="hidden text-dust sm:block">
          {route.note}
        </span>
        <span className="text-right">
          <span translate="no" className="block text-chalk">
            {business.name}
          </span>
          <span className="block text-dust">{streetLine}</span>
        </span>
      </figcaption>
    </figure>
  );
}
