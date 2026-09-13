import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Imbue } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { business } from "@/data/business";
import { content, seo } from "@/data/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const imbue = Imbue({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-imbue",
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: business.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: business.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, address: false, email: false },
};

export const viewport: Viewport = {
  themeColor: "#0e0d0a",
  colorScheme: "dark",
};

const designContract = `
THESIS: Santana Drinks as a Santana street at night under a sodium lamp; the address is the second headline and every action leads to the route. Refuses the neon club hero with a DJ and "Book now", and the gold-script lounge template.
OWN-WORLD: asphalt #0E0D0A, enamel #1D1A12, champagne #D8BD72, sodium #E2A64B used only as light; photos in amber monochrome; enamel plates with an inset rule; Imbue display with Barlow.
STORY: the visitor learns it is a drinks bar in Santana, feels the neighborhood night, sees where it is, taps "Como chegar".
FIRST VIEWPORT: full-bleed amber photo, lamp warming top right, giant "Santana" with the DRINKS plate bottom left, one line of copy and the "Como chegar" plate right below.
FORM: candidate 5 of 7, SP street plate and metro wayfinding fused with sodium-lamp light; seed 6cf46c9b.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${imbue.variable} ${barlow.variable} ${barlowCondensed.variable}`}
    >
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: `<!--${designContract}-->` }} />
        <a
          href="#conteudo"
          className="plate plate-solid sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70]"
        >
          {content.skipLink}
        </a>
        {children}
        <div className="grain" aria-hidden="true" />
        <LocalBusinessJsonLd />
      </body>
    </html>
  );
}
