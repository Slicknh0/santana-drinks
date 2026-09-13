import type { ReactNode } from "react";
import { CopyAddressButton } from "@/components/ui/CopyAddressButton";
import { Icon, type IconName } from "@/components/ui/Icon";
import { MapEmbed } from "@/components/ui/MapEmbed";
import { PlateLink } from "@/components/ui/PlateLink";
import { business } from "@/data/business";
import { content } from "@/data/content";
import { getChannels, type ChannelId } from "@/lib/contact";
import { formatPeriod } from "@/lib/hours";
import { coordinates, directionsUrl } from "@/lib/maps";

const channelIcons: Record<ChannelId, IconName> = {
  reservation: "calendar",
  whatsapp: "whatsapp",
  phone: "phone",
  instagram: "instagram",
  facebook: "facebook",
  tiktok: "tiktok",
  email: "mail",
};

function InfoRow({ icon, label, children }: { icon: IconName; label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[1.25rem_1fr] gap-x-4 gap-y-1 py-5 sm:grid-cols-[1.25rem_7rem_1fr]">
      <Icon name={icon} className="mt-0.5 size-5 text-champagne" />
      <dt className="text-sm text-dust sm:pt-0.5">{label}</dt>
      <dd className="col-start-2 text-chalk sm:col-start-3">{children}</dd>
    </div>
  );
}

export function Visit() {
  const { visit } = content;
  const { address, hours } = business;
  const channels = getChannels();

  return (
    <section id={visit.id} data-cta-zone aria-labelledby="visit-title" className="py-section">
      <div className="mx-auto grid max-w-page gap-y-14 px-gutter lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-5">
          <h2 id="visit-title" className="display text-4xl">
            {visit.title}
          </h2>
          <p className="mt-6 max-w-copy text-lg text-dust">{visit.intro}</p>

          <address className="street-plate mt-10 text-[clamp(1.25rem,1rem+1vw,1.625rem)] not-italic">
            <span>
              {address.streetShort}, {address.number}
            </span>
            <span className="flex justify-between gap-8 text-[0.62em] text-dust">
              <span>
                {address.neighborhood}, {address.city}
              </span>
              <span>{address.postalCode}</span>
            </span>
          </address>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            <InfoRow icon="train" label={visit.labels.transit}>
              {visit.transitValue}
              <span className="block text-sm text-dust">{visit.transitNote}</span>
            </InfoRow>
            <InfoRow icon="clock" label={visit.labels.hours}>
              {hours ? (
                <ul>
                  {hours.map((period) => (
                    <li key={period.days.join()}>{formatPeriod(period)}</li>
                  ))}
                </ul>
              ) : (
                <span className="text-dust">{visit.hoursPending}</span>
              )}
            </InfoRow>
            <InfoRow icon="crosshair" label={visit.labels.coordinates}>
              <span className="flex flex-wrap gap-x-4 tabular-nums">
                <span>{coordinates.latitude}</span>
                <span>{coordinates.longitude}</span>
              </span>
            </InfoRow>
            {channels.length > 0 && (
              <InfoRow icon={channelIcons[channels[0].id]} label={visit.labels.contact}>
                <ul className="flex flex-col gap-2">
                  {channels.map((channel) => (
                    <li key={channel.id}>
                      <a
                        href={channel.href}
                        className="text-link inline-flex items-center gap-2"
                        {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        <Icon name={channelIcons[channel.id]} className="size-4 text-champagne" />
                        <span className="text-dust">{channel.label}</span> {channel.value}
                        {channel.external && <span className="sr-only"> (abre em nova aba)</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </InfoRow>
            )}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <PlateLink href={directionsUrl} external icon="arrowUpRight">
              {content.primaryCta}
            </PlateLink>
            <PlateLink href={business.googleMapsUrl} external variant="ghost">
              {visit.mapsCta}
            </PlateLink>
          </div>
          <div className="mt-3">
            <CopyAddressButton />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
