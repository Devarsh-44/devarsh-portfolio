import Image from "next/image";

/** Polaroid-style portrait frame with a strip of tape. */
export function Polaroid({
  src,
  alt,
  caption,
  note,
}: {
  src: string;
  alt: string;
  caption: string;
  note?: string;
}) {
  return (
    <figure className="relative mx-auto w-64 -rotate-3 bg-paper p-3 pb-4 text-ink shadow-[0_0_0_1px_rgb(34_211_238/0.1),0_28px_60px_-18px_rgb(0_0_0/0.95)] sm:w-72">
      {/* tape */}
      <span
        aria-hidden
        className="absolute -top-3 left-1/2 z-10 h-6 w-24 -translate-x-1/2 rotate-2 bg-accent/85"
      />
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <Image
          src={src}
          alt={alt}
          width={960}
          height={1200}
          sizes="(min-width: 640px) 264px, 232px"
          priority
          className="size-full object-cover"
        />
      </div>
      <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-1">
        <span className="font-serif text-lg italic">{caption}</span>
        {note && <span className="font-mono text-[0.7rem] text-ink-soft">{note}</span>}
      </figcaption>
    </figure>
  );
}
