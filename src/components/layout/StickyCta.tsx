"use client";

import { useEffect, useState } from "react";
import { PlateLink } from "@/components/ui/PlateLink";
import { content } from "@/data/content";
import { directionsUrl } from "@/lib/maps";

/** Mobile only: keeps "Como chegar" under the thumb while no other CTA is on screen. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const zones = document.querySelectorAll("[data-cta-zone]");
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting ? onScreen.add(entry.target) : onScreen.delete(entry.target),
        );
        setVisible(onScreen.size === 0);
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    zones.forEach((zone) => observer.observe(zone));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      data-visible={visible}
      inert={!visible}
      className="sticky-cta fixed inset-x-0 bottom-0 z-20 translate-y-full bg-linear-to-t from-asphalt via-asphalt/90 to-transparent px-gutter pb-[max(1rem,env(safe-area-inset-bottom))] pt-8 transition-transform duration-700 ease-out-expo motion-reduce:transition-none data-[visible=true]:translate-y-0 md:hidden"
    >
      <PlateLink href={directionsUrl} external icon="arrowUpRight" className="w-full">
        {content.primaryCta}
      </PlateLink>
    </div>
  );
}
