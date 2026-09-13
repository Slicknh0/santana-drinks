import { LitImage } from "@/components/ui/LitImage";
import { RouteLine } from "@/components/ui/RouteLine";
import { content } from "@/data/content";
import { photos } from "@/data/media";

export function About() {
  const { about } = content;

  return (
    <section id={about.id} aria-labelledby="about-title" className="py-section">
      <div className="mx-auto grid max-w-page gap-y-12 px-gutter md:grid-cols-12 md:gap-x-6 md:gap-y-20">
        <h2 id="about-title" className="display text-4xl md:col-span-10 lg:col-span-8">
          {about.title}
        </h2>

        <LitImage
          photo={photos.about}
          sizes="(min-width: 768px) 42vw, 100vw"
          className="aspect-[4/5] rounded-plate md:col-span-5"
          imageClassName="object-cover object-[64%_50%]"
        />

        <div className="flex flex-col justify-end gap-6 text-lg md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
          {about.paragraphs.map((paragraph, index) => (
            <p key={paragraph} className={`max-w-copy ${index === 0 ? "text-chalk" : "text-dust"}`}>
              {paragraph}
            </p>
          ))}
        </div>

        <div className="md:col-span-12">
          <RouteLine />
        </div>
      </div>
    </section>
  );
}
