/**
 * Fotografias da página. Todas são ilustrativas (banco Unsplash, licença Unsplash)
 * até o bar fornecer fotos próprias. Para trocar: coloque o arquivo em
 * assets-src/photos, rode `npm run photos`, importe aqui e marque illustrative: false.
 */
import type { StaticImageData } from "next/image";
import casaMaoCopo from "@/assets/photos/casa-mao-copo.jpg";
import drinksBrinde from "@/assets/photos/drinks-brinde.jpg";
import drinksCoador from "@/assets/photos/drinks-coador.jpg";
import drinksDoseGelo from "@/assets/photos/drinks-dose-gelo.jpg";
import drinksMaoBalcao from "@/assets/photos/drinks-mao-balcao.jpg";
import heroCopoBalcao from "@/assets/photos/hero-copo-balcao.jpg";
import interludioPoste from "@/assets/photos/interludio-poste.jpg";

export interface Photo {
  src: StaticImageData;
  alt: string;
  illustrative: boolean;
  credit: string;
}

export const photos = {
  hero: {
    src: heroCopoBalcao,
    alt: "Copo baixo com drink, gelo e casca de laranja sobre um balcão de madeira escuro",
    illustrative: true,
    credit: "https://unsplash.com/photos/a-glass-of-liquid-e1eu-v1vXWs",
  },
  about: {
    src: casaMaoCopo,
    alt: "Mão segurando um copo de drink na penumbra",
    illustrative: true,
    credit: "https://unsplash.com/photos/person-holding-clear-drinking-glass-41dj6h1xEfk",
  },
  interlude: {
    src: interludioPoste,
    alt: "Poste de luz aceso em meio à neblina, à noite",
    illustrative: true,
    credit: "https://unsplash.com/photos/red-streetlight-4V0peF90KR4",
  },
  closing: {
    src: drinksBrinde,
    alt: "Duas pessoas brindando com drinks",
    illustrative: true,
    credit: "https://unsplash.com/photos/a-couple-of-people-that-are-holding-some-drinks-laRs9JYI2cs",
  },
} satisfies Record<string, Photo>;

export const drinksGallery: Photo[] = [
  {
    src: drinksDoseGelo,
    alt: "Bebida sendo servida sobre gelo em um copo baixo",
    illustrative: true,
    credit: "https://unsplash.com/photos/bartender-pouring-amber-liquid-into-a-glass-with-ice-x07Im_cq6tY",
  },
  {
    src: drinksCoador,
    alt: "Drink passando pelo coador sobre uma pedra grande de gelo",
    illustrative: true,
    credit: "https://unsplash.com/photos/amber-cocktail-pouring-over-ice-dmkmrNptMpw",
  },
  {
    src: drinksMaoBalcao,
    alt: "Mão apoiando um copo de drink sobre o balcão",
    illustrative: true,
    credit: "https://unsplash.com/photos/a-womans-hand-holding-a-glass-of-whiskey-xz6aXA7EbBY",
  },
];
