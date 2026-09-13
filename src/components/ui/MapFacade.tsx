"use client";

import { useState, type ReactNode } from "react";
import { preconnect } from "react-dom";

interface MapFacadeProps {
  embedUrl: string;
  iframeTitle: string;
  loadLabel: string;
  marker: ReactNode;
  note: ReactNode;
}

// Hover or focus on "Mostrar mapa" signals intent: open the Google connections before the click.
function warmUpMaps() {
  preconnect("https://www.google.com");
  preconnect("https://maps.gstatic.com", { crossOrigin: "anonymous" });
}

export function MapFacade({ embedUrl, iframeTitle, loadLabel, marker, note }: MapFacadeProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-plate bg-enamel shadow-[inset_0_0_0_1px_var(--color-line)] sm:aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[34rem]">
      {loaded ? (
        <iframe
          src={embedUrl}
          title={iframeTitle}
          className="map-frame absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map-paper absolute inset-0 flex flex-col items-center justify-center gap-7 p-8 text-center">
          {marker}
          <button
            type="button"
            onPointerEnter={warmUpMaps}
            onFocus={warmUpMaps}
            onClick={() => setLoaded(true)}
            className="plate plate-ghost"
          >
            {loadLabel}
          </button>
          {note}
        </div>
      )}
    </div>
  );
}
