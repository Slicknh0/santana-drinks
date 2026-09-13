import { business } from "@/data/business";

export type ChannelId =
  | "reservation"
  | "whatsapp"
  | "phone"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "email";

export interface Channel {
  id: ChannelId;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

const digits = (value: string) => value.replace(/\D/g, "");

/** "5511912345678" -> "(11) 91234-5678" */
export function formatBrPhone(value: string) {
  const local = digits(value).replace(/^55/, "");
  const ddd = local.slice(0, 2);
  const rest = local.slice(2);
  const split = rest.length - 4;
  return `(${ddd}) ${rest.slice(0, split)}-${rest.slice(split)}`;
}

const handle = (value: string) =>
  value.replace(/^@/, "").replace(/^https?:\/\/(www\.)?[^/]+\//, "").replace(/\/$/, "");

/** Only channels that exist in business data. Empty list = nothing rendered. */
export function getChannels(): Channel[] {
  const { contact, social } = business;
  const channels: Channel[] = [];

  if (contact.reservationUrl) {
    channels.push({ id: "reservation", label: "Reservas", value: "Reservar mesa", href: contact.reservationUrl, external: true });
  }
  if (contact.whatsapp) {
    channels.push({ id: "whatsapp", label: "WhatsApp", value: formatBrPhone(contact.whatsapp), href: `https://wa.me/${digits(contact.whatsapp)}`, external: true });
  }
  if (contact.phone) {
    channels.push({ id: "phone", label: "Telefone", value: formatBrPhone(contact.phone), href: `tel:+${digits(contact.phone)}`, external: false });
  }
  if (social.instagram) {
    channels.push({ id: "instagram", label: "Instagram", value: `@${handle(social.instagram)}`, href: `https://www.instagram.com/${handle(social.instagram)}/`, external: true });
  }
  if (social.facebook) {
    channels.push({ id: "facebook", label: "Facebook", value: handle(social.facebook), href: social.facebook, external: true });
  }
  if (social.tiktok) {
    channels.push({ id: "tiktok", label: "TikTok", value: `@${handle(social.tiktok)}`, href: `https://www.tiktok.com/@${handle(social.tiktok)}`, external: true });
  }
  if (contact.email) {
    channels.push({ id: "email", label: "E-mail", value: contact.email, href: `mailto:${contact.email}`, external: false });
  }
  return channels;
}

/** Profile URLs for JSON-LD sameAs. */
export function getSameAs() {
  return getChannels()
    .filter((c) => c.id === "instagram" || c.id === "facebook" || c.id === "tiktok")
    .map((c) => c.href);
}
