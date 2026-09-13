import { LitImage } from "@/components/ui/LitImage";
import { content } from "@/data/content";
import { photos } from "@/data/media";

export function Interlude() {
  return (
    <section aria-labelledby="interlude-title" className="relative isolate">
      <LitImage
        photo={photos.interlude}
        sizes="100vw"
        className="lit-lamp h-[82svh] min-h-[30rem] w-full md:h-[70svh]"
        imageClassName="object-cover object-[50%_58%] md:object-[50%_70%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,var(--color-asphalt),rgb(14_13_10/0)_14%,rgb(14_13_10/0)_58%,var(--color-asphalt))]" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto max-w-page px-gutter pb-14 md:pb-24">
          <h2 id="interlude-title" className="display max-w-[11ch] text-4xl">
            {content.interlude.line}
          </h2>
          <p className="mt-5 text-sm text-dust">{content.interlude.caption}</p>
        </div>
      </div>
    </section>
  );
}
