import Image from "next/image";
import type { Photo } from "@/data/media";

interface LitImageProps {
  photo: Photo;
  sizes: string;
  className?: string;
  imageClassName?: string;
}

/** Foto que "acende" ao entrar na tela; o efeito vive em CSS (.lit), sem JavaScript. */
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
