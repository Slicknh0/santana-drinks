"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/content";
import { coordinatesLabel, mapEmbedUrl } from "@/lib/maps";

/** Facade: the Google iframe (heavy, third-party) loads only on request. */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);
  const { map } = content.visit;

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-plate bg-enamel shadow-[inset_0_0_0_1px_var(--color-line)] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
      {loaded ? (
        <iframe
          src={mapEmbedUrl}
          title={map.iframeTitle}
          className="map-frame absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map-paper absolute inset-0 flex flex-col items-center justify-center gap-7 p-8 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-asphalt shadow-[0_0_0_1px_var(--color-line-strong),0_0_80px_rgb(226_166_75/0.35)]">
            <Icon name="pin" className="size-7 text-champagne" />
          </span>
          <p className="text-lg tabular-nums tracking-[0.02em] text-champagne">{coordinatesLabel}</p>
          <button type="button" onClick={() => setLoaded(true)} className="plate plate-ghost">
            {map.load}
          </button>
          <p className="max-w-[30ch] text-xs text-dust">{map.note}</p>
        </div>
      )}
    </div>
  );
}
