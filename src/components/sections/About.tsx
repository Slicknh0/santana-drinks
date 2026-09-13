import { LitImage } from "@/components/ui/LitImage";
import { RouteLine } from "@/components/ui/RouteLine";
import { content } from "@/data/content";
import { photos } from "@/data/media";

export function About() {
  const { about } = content;

  return (
    <section id={about.id} aria-labelledby="about-title" className="py-section">
      <div className="mx-auto grid max-w-page gap-y-12 px-gutter md:grid-cols-12 md:gap-x-6 md:gap-y-16">
        <h2 id="about-title" className="display text-4xl md:col-span-10 lg:col-span-8">
          {about.title}
        </h2>

        <div className="flex flex-col gap-6 text-lg md:col-span-5 md:pt-1">
          {about.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={`max-w-copy ${index === 0 ? "text-chalk" : "text-dust"}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <LitImage
          photo={photos.about}
          sizes="(min-width: 1024px) 45vw, (min-width: 768px) 55vw, 100vw"
          className="aspect-[3/2] rounded-plate md:col-span-7 md:col-start-6 lg:col-span-6 lg:col-start-7"
          imageClassName="object-cover object-[60%_55%]"
        />

        <div className="md:col-span-12 md:mt-4">
          <RouteLine />
        </div>
      </div>
    </section>
  );
}
