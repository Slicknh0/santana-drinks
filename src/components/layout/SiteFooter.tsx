import { Wordmark } from "@/components/ui/Wordmark";
import { business } from "@/data/business";
import { content } from "@/data/content";
import { cityLine, streetLine } from "@/lib/maps";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer data-menu-inert className="border-t border-line">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter pb-32 pt-12 md:flex-row md:items-end md:justify-between md:pb-12">
        <div className="flex flex-col items-start gap-5">
          <Wordmark />
          <address className="text-sm not-italic text-dust">
            {streetLine}
            <br />
            {cityLine}, {business.address.postalCode}
          </address>
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link text-sm text-chalk"
          >
            {content.visit.mapsCta}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
        <div className="flex flex-col gap-1.5 text-xs text-dust md:items-end md:text-right">
          {content.footer.legal.map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p>{content.footer.illustrativeNote}</p>
          <p className="mt-3">
            © {year} {business.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
