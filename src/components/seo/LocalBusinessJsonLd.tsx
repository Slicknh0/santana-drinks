import { business, type OpeningPeriod } from "@/data/business";
import { getSameAs } from "@/lib/contact";
import { siteUrl } from "@/lib/site";

const schemaDays = (period: OpeningPeriod) =>
  period.days.map((day) => `https://schema.org/${day}`);

/** BarOrPub com apenas atributos confirmados; campos nulos em business.ts ficam fora. */
export function LocalBusinessJsonLd() {
  const { address, geo, contact, hours } = business;
  const sameAs = getSameAs();

  const data = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    "@id": `${siteUrl}/#bar`,
    name: business.name,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street}, ${address.number} - ${address.neighborhood}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    hasMap: business.googleMapsUrl,
    ...(contact.phone && { telephone: `+${contact.phone.replace(/\D/g, "")}` }),
    ...(contact.email && { email: contact.email }),
    ...(contact.reservationUrl && { acceptsReservations: contact.reservationUrl }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(hours && {
      openingHoursSpecification: hours.map((period) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: schemaDays(period),
        opens: period.opens,
        closes: period.closes,
      })),
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
