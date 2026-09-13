import { business } from "@/data/business";

const { address, geo } = business;

const NBSP = String.fromCharCode(160);

// Display line: abbreviations ("R. Dr.") stay glued to the next word.
export const streetLine = `${address.streetShort.replace(/\. /g, `.${NBSP}`)}, ${address.number}`;

export const cityLine = `${address.neighborhood}, ${address.city} - ${address.state}`;

// Plain spaces: this string is copied to the clipboard and sent to Google Maps.
export const fullAddress = `${address.streetShort}, ${address.number} - ${cityLine}, ${address.postalCode}`;

// The Google-registered name in the query makes Maps resolve the listing, not just the building.
const placeQuery = encodeURIComponent(`${business.googleName}, ${fullAddress}`);

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${placeQuery}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${placeQuery}&z=17&output=embed`;

const secondsFormat = new Intl.NumberFormat("pt-BR", {
  minimumIntegerDigits: 2,
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const distanceFormat = new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 });

function toDms(value: number, positive: string, negative: string) {
  const abs = Math.abs(value);
  const degrees = Math.floor(abs);
  const minutesFloat = (abs - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = secondsFormat.format((minutesFloat - minutes) * 60);
  return `${degrees}°${String(minutes).padStart(2, "0")}′${seconds}″${value < 0 ? negative : positive}`;
}

export const coordinates = {
  latitude: toDms(geo.latitude, "N", "S"),
  longitude: toDms(geo.longitude, "L", "O"),
};

export function formatMeters(meters: number) {
  return meters >= 1000
    ? `${distanceFormat.format(meters / 1000)}${NBSP}km`
    : `${distanceFormat.format(meters)}${NBSP}m`;
}
