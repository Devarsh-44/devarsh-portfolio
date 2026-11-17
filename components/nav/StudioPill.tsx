import { TransitionLink } from "@/components/transition/TransitionLink";
import { studio } from "@/content";
import { Magnetic } from "@/components/ui/Magnetic";
import { icons } from "@/components/ui/icons";

/**
 * Link to the RCintel studio page, led by the studio's capsule badge.
 * The badge is the brand kit's flat version, unmodified, at its 24 px minimum.
 */
export function StudioPill() {
  const Arrow = icons.arrowUpRight;
  return (
    <Magnetic strength={0.3}>
      <TransitionLink
        href={studio.href}
        aria-label={`${studio.name}, ${studio.tagline}`}
        className="inline-flex min-h-11 items-center gap-2 rounded-full border border-chalk/25 py-1 pl-2 pr-3 font-mono text-xs text-chalk-muted transition-colors hover:border-chalk/60 hover:text-chalk"
      >
        <img src="/rcintel/rcintel-badge-flat.svg" alt="" width={24} height={24} className="size-6 shrink-0" />
        <span className="hidden sm:inline">{studio.name}</span>
        <Arrow width={13} height={13} />
      </TransitionLink>
    </Magnetic>
  );
}
