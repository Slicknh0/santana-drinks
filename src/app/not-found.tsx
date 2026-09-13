import Link from "next/link";
import { PlateLink } from "@/components/ui/PlateLink";
import { Wordmark } from "@/components/ui/Wordmark";
import { business } from "@/data/business";
import { content } from "@/data/content";
import { directionsUrl } from "@/lib/maps";

/** Branded 404 for any unknown URL: says what happened and keeps the two useful ways out. */
export default function NotFound() {
  const { notFound } = content;
  const { address } = business;

  return (
    <main id="conteudo" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden">
      <div aria-hidden="true" className="lamp-glow" />

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col px-gutter pb-16 pt-6">
        <Link href="/" className="-m-2 self-start p-2" aria-label={notFound.homeLabel}>
          <Wordmark />
        </Link>

        <div className="my-auto pt-20">
          <h1 className="display max-w-[12ch] text-4xl">{notFound.title}</h1>
          <p className="mt-6 max-w-copy text-lg text-dust">{notFound.body}</p>

          <p className="street-plate mt-10 text-[clamp(1.125rem,0.85rem+1vw,1.625rem)]">
            <span>
              {address.streetShort}, {address.number}
            </span>
            <span className="flex justify-between gap-10 text-[0.62em] text-dust">
              <span>{address.neighborhood}</span>
              <span>{address.postalCode}</span>
            </span>
          </p>

          <div className="mt-10 flex flex-col items-start gap-x-8 gap-y-4 sm:flex-row sm:items-center">
            <PlateLink href="/" icon="arrowRight" className="w-full sm:w-auto">
              {notFound.homeCta}
            </PlateLink>
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" className="text-link text-sm text-chalk">
              {content.primaryCta}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
