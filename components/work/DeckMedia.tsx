import Image from "next/image";
import { RCintelBrandVisual, WeddingRSVPVisual } from "./ProjectVisual";

/**
 * The picture for a case-study preview: a real screenshot when one exists,
 * otherwise the project's own drawn visual. Fills its parent; static, so it
 * reads the same with or without JavaScript.
 */
export function DeckMedia({
  slug,
  media,
  sizes,
}: {
  slug: string;
  media: Record<string, { src: string; alt: string }>;
  sizes: string;
}) {
  const shot = media[slug];
  if (shot) {
    return (
      <Image
        src={shot.src}
        alt={shot.alt}
        fill
        sizes={sizes}
        className="object-cover object-left-top"
      />
    );
  }
  if (slug.startsWith("rcintel")) {
    return <RCintelBrandVisual className="absolute inset-0 rounded-none border-0" />;
  }
  return <WeddingRSVPVisual className="absolute inset-0 rounded-none border-0" />;
}
