import Image from "next/image";
import type { Photo } from "@/data/media";

interface LitImageProps {
  photo: Photo;
  sizes: string;
  className?: string;
  imageClassName?: string;
}

/** Moldura de foto com fill. Com a classe `lit-lamp`, a foto acende conforme o scroll (CSS, sem JavaScript). */
export function LitImage({
  photo,
  sizes,
  className = "",
  imageClassName = "object-cover",
}: LitImageProps) {
  return (
    <div className={`lit ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        quality={70}
        placeholder="blur"
        className={imageClassName}
      />
    </div>
  );
}
