import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { MARKETS } from '../data/markets'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

const WHY = [
  {
    title: 'Sector-Specific Design',
    text: "A hospital garden and a corporate campus serve entirely different human needs. We design around your sector's realities — not generic templates.",
  },
  {
    title: 'Relevant Experience',
    text: 'Over 200 completed projects across every sector we serve means we understand the constraints, procurement processes, and success criteria specific to your context.',
  },
  {
    title: 'Tailored Proposals',
    text: "Every quote we produce is specific to your sector, site, and brief — not a copy-paste estimate. We invest in understanding your world before we propose solutions.",
  },
]

export default function Markets() {
  const sectionRef = useScrollAnimation()

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Who We Serve — Arabella Landscape Limited</title>
        <meta name="description" content="Arabella Landscape serves residential, corporate, hospitality, government, and developer clients across Nigeria. Sector-specific landscape expertise for every brief." />
        <meta property="og:title" content="Who We Serve — Arabella Landscape Limited" />
        <meta property="og:description" content="From private estates to landmark civic parks — Arabella brings deep sector knowledge to every landscape project." />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="page-hero page-hero--markets">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Who We Serve</p>
          <h1>Industry Expertise.<br />Real-World Results.</h1>
          <p>
            Different sectors have different landscape priorities. We tailor every brief, proposal,
            and design to the commercial and human realities of your industry.
          </p>
        </div>
      </section>

      {/* ── Market Cards ── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="markets-grid stagger-children">
            {MARKETS.map((market) => (
              <Link
                key={market.slug}
                to={`/markets/${market.slug}`}
                className="market-card animate-on-scroll"
                aria-label={`Explore ${market.name} market`}
              >
                <div className="market-card__image">
                  <img src={market.image} alt={market.name} />
                  <div className="market-card__overlay" aria-hidden="true" />
                </div>
                <div className="market-card__body">
                  <p className="market-card__label">{market.label}</p>
                  <h2 className="market-card__name">{market.name}</h2>
                  <p className="market-card__tagline">{market.tagline}</p>
                  <div className="market-card__outcome">
                    <span>{market.outcome}</span>
                  </div>
                  <div className="market-card__cta">
                    Explore <ArrowIcon />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why sector expertise matters ── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Our Approach</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Why Sector Knowledge Matters
            </h2>
            <p className="animate-on-scroll" style={{ color: 'var(--on-surface-variant)', maxWidth: '560px', margin: '0.75rem auto 0', fontSize: '16px', lineHeight: 1.75 }}>
              Generic landscape design produces generic results. We build deep understanding of each
              sector we serve — so our designs work harder for your specific goals.
            </p>
          </div>
          <div className="markets-why-grid stagger-children">
            {WHY.map(({ title, text }) => (
              <div key={title} className="markets-why-card animate-on-scroll">
                <div className="markets-why-card__accent" aria-hidden="true" />
                <h3 className="markets-why-card__title">{title}</h3>
                <p className="markets-why-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Ready to Begin?</p>
          <h2>Let's Talk About<br /><em>Your Project</em></h2>
          <p>Tell us your sector and your brief — we'll respond within one business day with a tailored proposal.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start a Conversation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/projects" className="btn btn-white btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
