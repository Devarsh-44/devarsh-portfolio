import type { ReactNode } from "react";
import { rcintelStudy } from "@/content";
import {
  RCintelBadge,
  RCintelLockup,
  RCintelSeal,
  RCintelSignature,
  RCintelStack,
} from "./RCintelMarks";

const LIGHTS = ["foil", "foil", "foil", "foil", "blue", "blue", "off", "off"];

function Tile({
  area,
  ground,
  label,
  note,
  children,
}: {
  area: string;
  ground: "night" | "deep" | "paper" | "almond";
  label: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <figure className={`kit-tile kit-area-${area} kit-on-${ground}`}>
      <div className="kit-art">{children}</div>
      <figcaption className="kit-cap">
        <strong>{label}</strong>
        <span>{note}</span>
      </figcaption>
    </figure>
  );
}

/** Closing bento board for the RCintel case study, built only from brand kit files and values. Static. */
export function BrandBento() {
  const t = rcintelStudy.kit.tiles;
  const shares = rcintelStudy.colour.swatches.filter((s) => s.share !== null);

  return (
    <div className="kit-bento">
      <Tile area="signature" ground="night" label={t.signature.label} note={t.signature.note}>
        <RCintelSignature tone="foil" alt={t.signature.alt} style={{ width: "min(340px, 78%)" }} />
      </Tile>

      <Tile area="badge" ground="deep" label={t.badge.label} note={t.badge.note}>
        <div className="kit-badge-row">
          <RCintelBadge alt={t.badge.alt} style={{ width: 96 }} />
          <RCintelBadge flat alt={t.badge.flatAlt} style={{ width: 32 }} />
          <RCintelBadge flat alt="" style={{ width: 16 }} />
        </div>
      </Tile>

      <Tile area="lights" ground="night" label={t.lights.label} note={t.lights.note}>
        <div className="shift-bar-lg kit-lights" role="img" aria-label={t.lights.alt}>
          {LIGHTS.map((l, i) => (
            <span key={i} className={`led ${l}`} />
          ))}
        </div>
      </Tile>

      <Tile area="palette" ground="paper" label={t.palette.label} note={t.palette.note}>
        <div className="kit-stripes" aria-hidden>
          {shares.map((s) => (
            <span key={s.name} style={{ flex: s.share ?? 0, background: s.hex }} />
          ))}
        </div>
      </Tile>

      <Tile area="type" ground="almond" label={t.type.label} note={t.type.note}>
        <div className="kit-type">
          <span className="kit-type-aa" aria-hidden>
            {t.type.display}
          </span>
          <span className="kit-type-sample">{t.type.sample}</span>
          <span className="kit-type-caption">{t.type.caption}</span>
        </div>
      </Tile>

      <Tile area="card" ground="paper" label={t.card.label} note={t.card.note}>
        <div className="kit-cards">
          <div className="kit-card kit-card-front">
            <RCintelStack tone="dark" alt={t.card.stackAlt} style={{ width: "58%" }} />
          </div>
          <div className="kit-card kit-card-back">
            <RCintelBadge flat alt={t.card.badgeAlt} style={{ width: 28 }} />
            <strong>{t.card.name}</strong>
            <span>{t.card.role}</span>
            <span className="kit-card-mail">{t.card.email}</span>
          </div>
        </div>
      </Tile>

      <Tile area="header" ground="night" label={t.header.label} note={t.header.note}>
        <div className="kit-header">
          <div className="kit-header-bar">
            <RCintelLockup tone="dark" alt={t.header.alt} style={{ width: 180 }} />
            <ul aria-hidden>
              {t.header.nav.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </div>
          <p className="kit-header-line">{t.header.headline}</p>
          <p className="kit-header-sub">{t.header.line}</p>
        </div>
      </Tile>

      <Tile area="watermark" ground="deep" label={t.watermark.label} note={t.watermark.note}>
        <div className="kit-watermark">
          <span className="kit-speed">
            {t.watermark.value}
            <small>{t.watermark.unit}</small>
          </span>
          {/* One-colour almond monogram: the kit's watermark file, not in RCintelMarks. */}
          <img
            src="/rcintel/rcintel-monogram-mono-almond.svg"
            alt={t.watermark.alt}
            width={83}
            height={60}
            className="kit-wm-mark"
          />
        </div>
      </Tile>

      <Tile area="seal" ground="paper" label={t.seal.label} note={t.seal.note}>
        <RCintelSeal alt={t.seal.alt} style={{ width: 132 }} />
      </Tile>

      <Tile area="stack" ground="almond" label={t.stack.label} note={t.stack.note}>
        <RCintelStack tone="light" alt={t.stack.alt} style={{ width: 150 }} />
      </Tile>
    </div>
  );
}
