import { TransitionLink } from "@/components/transition/TransitionLink";
import { BrandBento } from "@/components/case-study/BrandBento";
import { MarkLab } from "@/components/case-study/MarkLab";
import { RCintelSignature } from "@/components/case-study/RCintelMarks";
import { StudyPalette } from "@/components/case-study/StudyPalette";
import { StudyTopbar } from "@/components/case-study/StudyTopbar";
import { contact, rcintelStudy as s } from "@/content";
import "./rcintel-case-study.css";

const mail = (subject: string) => `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;

function SectionHead({ kicker, heading, sub }: { kicker: string; heading: string; sub: string }) {
  return (
    <div className="section-head">
      <div>
        <div className="kicker">{kicker}</div>
        <h2 className="section-title">{heading}</h2>
      </div>
      <p className="section-sub">{sub}</p>
    </div>
  );
}

/** RCintel brand case study: brief, five decisions, mark tester, palette, open issues, brand kit bento. */
export default function RCintelCaseStudyPage() {
  return (
    <div className="rc-study min-h-screen w-full max-w-full overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--ink)] transition-colors duration-300">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Sacramento&family=Sora:wght@300;400;500;600;700&display=swap"
      />

      <StudyTopbar copy={s.topbar} ctaHref={mail(s.topbar.ctaSubject)} />

      <main>
        <section className="hero" id="overview">
          <div className="container">
            <div className="hero-grid">
              <div>
                <div className="kicker">{s.hero.kicker}</div>
                <h1>
                  {s.hero.headingLead} <span className="accent">{s.hero.headingAccent}</span>
                </h1>
                <p className="hero-lead">{s.hero.lead}</p>
                <div className="hero-cta-row">
                  <a href="#decisions" className="btn btn-primary">
                    {s.hero.primaryCta} <span aria-hidden>↓</span>
                  </a>
                  <a href="#kit" className="btn">
                    {s.hero.secondaryCta}
                  </a>
                </div>
                <dl className="meta-strip">
                  {s.hero.meta.map((m) => (
                    <div key={m.label} className="meta-item">
                      <dt className="label">{m.label}</dt>
                      <dd className="val">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="made-note">{s.hero.madeNote}</p>
              </div>

              <div className="hero-stage">
                <div className="hero-stage-top">
                  <span>{s.hero.stageLabel}</span>
                  <span>{s.hero.stageNote}</span>
                </div>
                <div className="hero-stage-sig">
                  <RCintelSignature tone="foil" alt={s.hero.signatureAlt} style={{ width: 280 }} />
                </div>
                <div className="hero-kpis">
                  {s.hero.stats.map((k) => (
                    <div key={k.d} className="hero-kpi">
                      <div className="n">{k.n}</div>
                      <div className="d">{k.d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="brief">
          <div className="container">
            <SectionHead {...s.brief} />
            <div className="brief-grid">
              {s.brief.items.map((item, i) => (
                <article key={item.title} className="card brief-item">
                  <span className="num" aria-hidden>
                    0{i + 1}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="decisions">
          <div className="container">
            <SectionHead {...s.decisions} />
            <div className="decision-rows">
              {s.decisions.items.map((d) => (
                <article key={d.tag} className="card decision-row">
                  <header>
                    <span className="decision-badge">{d.tag}</span>
                    <h3>{d.title}</h3>
                  </header>
                  <div className="decision-steps">
                    <div className="decision-split">
                      <strong>{s.decisions.labels.problem}</strong>
                      {d.problem}
                    </div>
                    <div className="decision-split move">
                      <strong>{s.decisions.labels.decision}</strong>
                      {d.decision}
                    </div>
                    <div className="decision-split rule">
                      <strong>{s.decisions.labels.rule}</strong>
                      {d.rule}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="marks">
          <div className="container">
            <SectionHead {...s.marks} />
            <MarkLab copy={s.marks} />
          </div>
        </section>

        <section id="colour">
          <div className="container">
            <SectionHead {...s.colour} />
            <StudyPalette />
          </div>
        </section>

        <section id="open">
          <div className="container">
            <SectionHead {...s.open} />
            <div className="open-grid">
              {s.open.items.map((item) => (
                <article key={item.title} className="card open-item">
                  <span className="state" aria-hidden />
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kit">
          <div className="container">
            <SectionHead {...s.kit} />
            <BrandBento />
          </div>
        </section>

        <section id="inquiry">
          <div className="container">
            <div className="cta-box cta-single">
              <div>
                <h2>{s.cta.heading}</h2>
                <p>{s.cta.body}</p>
                <div className="flex flex-wrap gap-3">
                  <a href={mail(s.cta.subject)} className="btn btn-primary">
                    {s.cta.primary} <span aria-hidden>→</span>
                  </a>
                  <TransitionLink href="/" className="btn">
                    <span aria-hidden>←</span> {s.cta.back}
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>
            © {new Date().getFullYear()} {s.footer.line}
          </p>
          <div className="study-foot-links">
            {s.footer.links.map((l) => (
              <TransitionLink key={l.href} href={l.href}>
                {l.label}
              </TransitionLink>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
