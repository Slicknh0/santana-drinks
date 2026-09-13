import { Icon } from "@/components/ui/Icon";
import { MapFacade } from "@/components/ui/MapFacade";
import { content } from "@/data/content";
import { coordinates, mapEmbedUrl } from "@/lib/maps";

/** Facade: the Google iframe (heavy, third-party) loads only on request. */
export function MapEmbed() {
  const { map } = content.visit;

  return (
    <MapFacade
      embedUrl={mapEmbedUrl}
      iframeTitle={map.iframeTitle}
      loadLabel={map.load}
      marker={
        <>
          <span className="grid size-16 place-items-center rounded-full bg-asphalt shadow-[0_0_0_1px_var(--color-line-strong),0_0_80px_rgb(226_166_75/0.35)]">
            <Icon name="pin" className="size-7 text-champagne" />
          </span>
          <p className="flex flex-wrap justify-center gap-x-5 text-lg tabular-nums tracking-[0.02em] text-champagne">
            <span>{coordinates.latitude}</span>
            <span>{coordinates.longitude}</span>
          </p>
        </>
      }
      note={<p className="max-w-[30ch] text-xs text-dust">{map.note}</p>}
    />
  );
}
