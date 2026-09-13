import { HeaderShell } from "@/components/layout/HeaderShell";
import { PlateLink } from "@/components/ui/PlateLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { business } from "@/data/business";
import { content, navigation } from "@/data/content";
import { cityLine, directionsUrl, streetLine } from "@/lib/maps";

/** Server half of the header: copy, data and markup stay on the server; HeaderShell ships only menu and scroll state. */
export function SiteHeader() {
  return (
    <HeaderShell
      logo={<Wordmark />}
      homeLabel={`${business.name}, voltar ao início`}
      navigation={navigation}
      menuLabels={content.menu}
      desktopCta={
        <PlateLink href={directionsUrl} external icon="arrowUpRight" className="min-h-11 px-5">
          {content.primaryCta}
        </PlateLink>
      }
      menuFooter={
        <>
          <address className="text-sm not-italic text-dust">
            {streetLine}
            <br />
            {cityLine}
          </address>
          <PlateLink href={directionsUrl} external icon="arrowUpRight" className="w-full">
            {content.primaryCta}
          </PlateLink>
        </>
      }
    />
  );
}
