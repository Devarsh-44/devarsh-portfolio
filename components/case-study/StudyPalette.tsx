import { rcintelStudy } from "@/content";

/** Palette for the RCintel case study: proportion bar, eight swatches and the contrast table. Static. */
export function StudyPalette() {
  const c = rcintelStudy.colour;
  const shared = c.swatches.filter((s) => s.share !== null);

  return (
    <>
      <div className="prop-bar" role="img" aria-label={c.proportionLabel}>
        {shared.map((s) => (
          <div key={s.name} style={{ flex: s.share ?? 0, background: s.hex }} />
        ))}
      </div>
      <div className="prop-legend">
        {shared.map((s) => (
          <span key={s.name}>
            <strong>{s.share}%</strong> {s.name}
          </span>
        ))}
      </div>

      <div className="swatch-grid">
        {c.swatches.map((s) => (
          <div key={s.name} className="swatch-card">
            <div className={`swatch-color ${s.light ? "on-dark" : "on-light"}`} style={{ background: s.hex }}>
              <span>{s.role}</span>
              {s.share !== null && <span>{s.share}%</span>}
            </div>
            <div className="swatch-body">
              <div className="swatch-name">{s.name}</div>
              <div className="swatch-role">{s.use}</div>
              <dl className="swatch-values">
                <dt>{c.valueLabels.hex}</dt>
                <dd>{s.hex}</dd>
                <dt>{c.valueLabels.rgb}</dt>
                <dd>{s.rgb}</dd>
                <dt>{c.valueLabels.cmyk}</dt>
                <dd>{s.cmyk}</dd>
              </dl>
            </div>
          </div>
        ))}
      </div>
      <p className="study-note">{c.cmykNote}</p>

      <h3 className="study-subhead">{c.pairsHeading}</h3>
      <div className="wcag-grid">
        {c.pairs.map((p) => (
          <div key={p.pair} className="wcag-item" style={{ background: p.bg, color: p.fg }}>
            <strong>{p.pair}</strong>
            <span className="wcag-ratio">
              {p.ratio} · {p.use}
            </span>
          </div>
        ))}
      </div>
      <p className="study-note">{c.pairsNote}</p>
    </>
  );
}
