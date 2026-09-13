import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { StickyCta } from "@/components/layout/StickyCta";
import { About } from "@/components/sections/About";
import { Closing } from "@/components/sections/Closing";
import { Drinks } from "@/components/sections/Drinks";
import { Hero } from "@/components/sections/Hero";
import { Interlude } from "@/components/sections/Interlude";
import { Visit } from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} data-menu-inert className="focus:outline-none">
        <Hero />
        <About />
        <Drinks />
        <Interlude />
        <Visit />
        <Closing />
      </main>
      <SiteFooter />
      <StickyCta />
    </>
  );
}
