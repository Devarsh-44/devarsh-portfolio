/**
 * Authentic Gothif Bold solid "DK" monogram.
 * Directly crafted from Gothif Bold (02 OF 07) typography:
 * - Heavyweight condensed squircle D with symmetrical softened corners and narrow counter slot.
 * - Solid monolithic vertical K stem and heavy 45° diagonal chevron arms.
 * - Solid filled typographic mass with full stroke-draw compatibility.
 */
export const MONOGRAM_VIEWBOX = "0 0 114 76";

export const GOTHIF_D_PATH =
  "M8 10 H36 C46 10, 52 16, 52 26 V50 C52 60, 46 66, 36 66 H8 Z M21.5 22.5 H34 C38 22.5, 40 24.5, 40 28.5 V47.5 C40 51.5, 38 53.5, 34 53.5 H21.5 Z";

export const GOTHIF_K_STEM = "M60 10 H73.5 V66 H60 Z";

export const GOTHIF_K_ARMS =
  "M73.5 35.5 L91 10 H105 L82.5 41.5 L106 66 H90.5 L73.5 45.5 Z";

export const monogramPaths = [GOTHIF_D_PATH, GOTHIF_K_STEM, GOTHIF_K_ARMS];

export function Monogram({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox={MONOGRAM_VIEWBOX}
      className={className}
      fill="currentColor"
      fillRule="evenodd"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {monogramPaths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
