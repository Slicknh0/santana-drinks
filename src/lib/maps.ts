import { business } from "@/data/business";

const { address, geo } = business;

export const streetLine = `${address.streetShort}, ${address.number}`;

export const cityLine = `${address.neighborhood}, ${address.city} - ${address.state}`;

export const fullAddress = `${streetLine} - ${cityLine}, ${address.postalCode}`;

// The Google-registered name in the query makes Maps resolve the listing, not just the building.
const placeQuery = encodeURIComponent(`${business.googleName}, ${fullAddress}`);

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${placeQuery}`;

export const mapEmbedUrl = `https://www.google.com/maps?q=${placeQuery}&z=17&output=embed`;

function toDms(value: number, positive: string, negative: string) {
  const abs = Math.abs(value);
  const degrees = Math.floor(abs);
  const minutesFloat = (abs - degrees) * 60;
  const minutes = Math.floor(minutesFloat);
  const seconds = ((minutesFloat - minutes) * 60).toFixed(1).replace(".", ",");
  return `${degrees}°${String(minutes).padStart(2, "0")}′${seconds.padStart(4, "0")}″${value < 0 ? negative : positive}`;
}

export const coordinatesLabel = `${toDms(geo.latitude, "N", "S")} ${toDms(geo.longitude, "L", "O")}`;

export function formatMeters(meters: number) {
  return meters >= 1000
    ? `${(meters / 1000).toFixed(1).replace(".", ",")} km`
    : `${meters} m`;
}
