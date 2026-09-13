/**
 * Fonte única dos dados do estabelecimento.
 *
 * Confirmado na ficha pública do Google (entidade /g/11wmqht6jz) em 2026-09-12.
 * Campo `null` = informação ainda não confirmada. A interface esconde ou neutraliza
 * cada um deles, então basta preencher aqui para o dado aparecer no site e no JSON-LD.
 */

export type Weekday =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface OpeningPeriod {
  days: Weekday[];
  /** "18:00" */
  opens: string;
  /** "02:00" — horário após meia-noite é aceito */
  closes: string;
}

export interface Business {
  name: string;
  /** Grafia exata da ficha do Google, útil para conferir NAP em SEO local. */
  googleName: string;
  category: string;
  address: {
    street: string;
    streetShort: string;
    number: string;
    neighborhood: string;
    region: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  geo: { latitude: number; longitude: number };
  plusCode: string;
  googleMapsUrl: string;
  transit: {
    station: string;
    line: string;
    /** Distância em linha reta até a estação (coordenadas da ficha x Wikipédia). */
    straightLineMeters: number;
  };
  hours: OpeningPeriod[] | null;
  contact: {
    phone: string | null;
    /** Somente dígitos com DDI, ex.: "5511999999999" */
    whatsapp: string | null;
    email: string | null;
    reservationUrl: string | null;
  };
  social: {
    instagram: string | null;
    facebook: string | null;
    tiktok: string | null;
  };
}

export const business: Business = {
  name: "Santana Drinks",
  googleName: "SANTANA DRINKS",
  category: "Bar",
  address: {
    street: "Rua Doutor Gabriel Piza",
    streetShort: "R. Dr. Gabriel Piza",
    number: "544",
    neighborhood: "Santana",
    region: "Zona Norte",
    city: "São Paulo",
    state: "SP",
    postalCode: "02036-011",
    country: "BR",
  },
  geo: { latitude: -23.5021829, longitude: -46.6207904 },
  plusCode: "F9XH+4M",
  googleMapsUrl:
    "https://www.google.com/maps/place/SANTANA+DRINKS/@-23.5021829,-46.6207904,17z/data=!4m6!3m5!1s0x94cef70068cde525:0x243d76e1f7b2da47!8m2!3d-23.5021829!4d-46.6207904!16s%2Fg%2F11wmqht6jz",
  transit: {
    station: "Santana",
    line: "Linha 1-Azul",
    straightLineMeters: 400,
  },
  hours: null,
  contact: {
    phone: null,
    whatsapp: null,
    email: null,
    reservationUrl: null,
  },
  social: {
    instagram: null,
    facebook: null,
    tiktok: null,
  },
};
