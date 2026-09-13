/**
 * Textos da página. Editar aqui não exige mexer em componente.
 * Nenhuma frase atribui ao bar algo que não esteja confirmado em business.ts.
 */
import { business } from "@/data/business";
import { formatMeters } from "@/lib/maps";

const distance = formatMeters(business.transit.straightLineMeters);

/** Troca espaços por espaço inseparável: "São Paulo" nunca quebra entre linhas. */
const nb = (text: string) => text.replace(/\x20/g, String.fromCharCode(160));

export const navigation = [
  { label: "A casa", href: "#a-casa" },
  { label: "Drinks", href: "#drinks" },
  { label: "Endereço", href: "#endereco" },
] as const;

export const seo = {
  title: "Santana Drinks | Bar de drinks em Santana, Zona Norte de SP",
  description: `Bar de drinks na ${business.address.streetShort}, ${business.address.number}, em Santana, Zona Norte de São Paulo, a cerca de ${distance} do metrô. Veja como chegar.`,
};

export const content = {
  skipLink: "Pular para o conteúdo",
  primaryCta: "Como chegar",
  menu: { open: "Abrir menu", close: "Fechar menu", label: "Menu principal" },

  hero: {
    headingSuffix: "bar de drinks em Santana, Zona Norte de São Paulo",
    lead: `Bar de drinks em Santana, na ${nb("Zona Norte")} de ${nb("São Paulo")}, a poucos minutos a pé do metrô.`,
    addressLinkLabel: "Ver endereço e como chegar",
  },

  about: {
    id: "a-casa",
    title: "A noite de Santana tem endereço.",
    paragraphs: [
      `${business.address.street}, ${business.address.number}. É ali, em Santana, que fica o Santana Drinks.`,
      "Perto de casa para quem mora na Zona Norte. Uma caminhada curta para quem chega de metrô. E nenhuma travessia até o outro lado da cidade para sair à noite.",
    ],
    route: {
      note: "em linha reta",
      summary: `Cerca de ${distance} em linha reta entre a estação ${business.transit.station} do metrô e o bar.`,
    },
  },

  drinks: {
    id: "drinks",
    title: "Está no nome.",
    body: "Drinks é metade do nome da casa. A outra metade é o bairro.",
    menuTitle: "Da carta",
    galleryLabel: "Galeria de imagens de drinks",
    illustrativeNote: "Imagens ilustrativas.",
  },

  interlude: {
    line: "Do lado de cá do rio.",
    caption: `Santana, ${nb("Zona Norte")} de ${nb("São Paulo")}`,
  },

  visit: {
    id: "endereco",
    title: "Como chegar",
    intro: `Em Santana, a cerca de ${distance} da estação ${business.transit.station} do metrô, em linha reta.`,
    labels: {
      address: "Endereço",
      transit: "Metrô",
      hours: "Horário",
      coordinates: "Coordenadas",
      contact: "Contato",
    },
    transitValue: `Estação ${business.transit.station}, ${business.transit.line}`,
    transitNote: `Cerca de ${distance} em linha reta`,
    hoursPending: "A confirmar",
    mapsCta: "Ver no Google Maps",
    copy: {
      idle: "Copiar endereço",
      done: "Endereço copiado",
      failed: "Não deu para copiar. Selecione o endereço acima.",
    },
    map: {
      load: "Mostrar mapa",
      loading: "Carregando mapa…",
      note: "O mapa interativo é carregado do Google Maps.",
      iframeTitle: "Mapa com a localização do Santana Drinks",
    },
  },

  closing: {
    title: "Até mais tarde.",
  },

  notFound: {
    title: "Esta página não existe.",
    body: "O link pode estar errado ou a página saiu do ar. O endereço do bar continua o mesmo.",
    homeCta: "Voltar ao início",
    homeLabel: "Santana Drinks, voltar ao início",
  },

  footer: {
    legal: [
      "Beba com moderação.",
      "Venda de bebidas alcoólicas proibida para menores de 18 anos.",
    ],
    illustrativeNote: "Fotografias ilustrativas.",
  },
};
