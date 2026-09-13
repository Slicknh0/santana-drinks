"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/content";
import { coordinates, mapEmbedUrl } from "@/lib/maps";

/** Facade: the Google iframe (heavy, third-party) loads only on request. */
export function MapEmbed() {
  const [requested, setRequested] = useState(false);
  const [ready, setReady] = useState(false);
  const status = useRef<HTMLDivElement>(null);
  const { map } = content.visit;

  // The button that had focus disappears on click; hand focus to the loading status instead of dropping it.
  useEffect(() => {
    if (requested) status.current?.focus();
  }, [requested]);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-plate bg-enamel shadow-[inset_0_0_0_1px_var(--color-line)] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
      {requested ? (
        <>
          <div
            ref={status}
            tabIndex={-1}
            className="map-paper absolute inset-0 grid place-items-center focus:outline-none"
          >
            <p role="status" className="text-sm text-dust">
              {ready ? "" : map.loading}
            </p>
          </div>
          <iframe
            src={mapEmbedUrl}
            title={map.iframeTitle}
            data-ready={ready}
            onLoad={() => setReady(true)}
            className="map-frame absolute inset-0 size-full border-0 opacity-0 transition-opacity duration-700 ease-out-expo data-[ready=true]:opacity-100"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </>
      ) : (
        <div className="map-paper absolute inset-0 flex flex-col items-center justify-center gap-7 p-8 text-center">
          <span className="grid size-16 place-items-center rounded-full bg-asphalt shadow-[0_0_0_1px_var(--color-line-strong),0_0_80px_rgb(226_166_75/0.35)]">
            <Icon name="pin" className="size-7 text-champagne" />
          </span>
          <p className="flex flex-wrap justify-center gap-x-5 text-lg tabular-nums tracking-[0.02em] text-champagne">
            <span>{coordinates.latitude}</span>
            <span>{coordinates.longitude}</span>
          </p>
          <button type="button" onClick={() => setRequested(true)} className="plate plate-ghost">
            {map.load}
          </button>
          <p className="max-w-[30ch] text-xs text-dust">{map.note}</p>
        </div>
      )}
    </div>
  );
}
