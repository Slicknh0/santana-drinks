import { StickyReveal } from "@/components/layout/StickyReveal";
import { PlateLink } from "@/components/ui/PlateLink";
import { content } from "@/data/content";
import { directionsUrl } from "@/lib/maps";

/** Mobile only: keeps "Como chegar" under the thumb while no other CTA is on screen. */
export function StickyCta() {
  return (
    <StickyReveal>
      <PlateLink href={directionsUrl} external icon="arrowUpRight" className="w-full">
        {content.primaryCta}
      </PlateLink>
    </StickyReveal>
  );
}
