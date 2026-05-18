import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getMarket } from '../data/markets'
import { SERVICES } from '../data/services'

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function MarketDetail() {
  const { slug }  = useParams()
  const market    = getMarket(slug)
  const sectionRef = useScrollAnimation()

  if (!market) return <Navigate to="/markets" replace />

  const relatedServices = SERVICES.filter(s => market.services.includes(s.slug))

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>{market.name} Landscaping — Arabella Landscape Limited</title>
        <meta name="description" content={market.description.slice(0, 155)} />
        <meta property="og:title" content={`${market.name} — Arabella Landscape Limited`} />
        <meta property="og:description" content={market.heroLine} />
        <meta property="og:image" content={market.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="md-hero">
        <div className="md-hero__bg" style={{ backgroundImage: `url(${market.image})` }} aria-hidden="true" />
        <div className="md-hero__overlay" aria-hidden="true" />
        <div className="container">
          <div className="md-hero__content">
            <Link to="/markets" className="md-hero__back">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                <polyline points="15 18 9 12 15 6" />
              </svg>
              All Markets
            </Link>
            <p className="md-hero__label">{market.label}</p>
            <h1 className="md-hero__title">{market.name}</h1>
            <p className="md-hero__line">{market.heroLine}</p>
            <div className="md-hero__outcome">
              <span className="md-hero__outcome-label">Outcome</span>
              <span className="md-hero__outcome-text">{market.outcome}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="md-overview-grid">
            <div className="animate-on-scroll animate-left">
              <p className="section-label">Our Expertise</p>
              <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: '1.25rem' }}>
                {market.label} Landscape<br /><em>Solutions</em>
              </h2>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: 1.75, fontSize: '16px' }}>
                {market.description}
              </p>
            </div>

            {/* Stats panel */}
            <div className="md-stats-panel animate-on-scroll animate-right">
              {market.stats.map(({ n, label }) => (
                <div key={label} className="md-stats-panel__item">
                  <div className="md-stats-panel__num">{n}</div>
                  <div className="md-stats-panel__label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sub-sectors ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Sectors We Cover</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Tailored to Your Context
            </h2>
          </div>
          <div className="md-subsectors-grid stagger-children">
            {market.subsectors.map(({ name, text }) => (
              <div key={name} className="md-subsector-card animate-on-scroll">
                <div className="md-subsector-card__check">
                  <CheckIcon />
                </div>
                <h3 className="md-subsector-card__title">{name}</h3>
                <p className="md-subsector-card__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Applicable Services ── */}
      {relatedServices.length > 0 && (
        <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>What We Deliver</p>
              <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
                Services for {market.name}
              </h2>
            </div>
            <div className="md-services-grid stagger-children">
              {relatedServices.map(service => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="md-service-card animate-on-scroll"
                >
                  <div className="md-service-card__image">
                    <img src={service.image} alt={service.title} />
                    <div className="md-service-card__overlay" aria-hidden="true" />
                  </div>
                  <div className="md-service-card__body">
                    <p className="md-service-card__label">{service.label}</p>
                    <h3 className="md-service-card__title">{service.title}</h3>
                    <p className="md-service-card__tagline">{service.tagline.slice(0, 90)}…</p>
                    <span className="md-service-card__cta">
                      Learn more
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Testimonial ── */}
      <section className="md-testimonial-section">
        <div className="container">
          <div className="md-testimonial">
            <svg className="md-testimonial__quote-mark" viewBox="0 0 40 30" fill="currentColor" aria-hidden="true">
              <path d="M0 30V18.75C0 8.4375 6.25 2.1875 18.75 0L21.25 3.75C15.625 5.3125 12.5 8.4375 11.875 13.125H18.75V30H0ZM21.25 30V18.75C21.25 8.4375 27.5 2.1875 40 0L42.5 3.75C36.875 5.3125 33.75 8.4375 33.125 13.125H40V30H21.25Z" />
            </svg>
            <blockquote className="md-testimonial__quote">
              {market.testimonial.quote}
            </blockquote>
            <p className="md-testimonial__author">{market.testimonial.author}</p>
            <p className="md-testimonial__role">{market.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {market.projects.length > 0 && (
        <section className="section" style={{ background: 'var(--surface-container-low)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <p className="section-label animate-on-scroll">Our Work</p>
                <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
                  {market.name} Projects
                </h2>
              </div>
              <Link to="/projects" className="btn btn-secondary btn-sm animate-on-scroll">All Projects</Link>
            </div>
            <div className="md-projects-grid stagger-children">
              {market.projects.map(project => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="md-project-card animate-on-scroll"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="md-project-card__image">
                    <img src={project.image} alt={project.name} />
                    <div className="md-project-card__overlay" aria-hidden="true" />
                    <span className="md-project-card__tag">{project.category}</span>
                  </div>
                  <div className="md-project-card__body">
                    <p className="md-project-card__name">{project.name}</p>
                    <span className="md-project-card__link">
                      View Project
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
                        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Ready to Begin?</p>
          <h2>Let's Build Something<br /><em>Extraordinary</em></h2>
          <p>
            Tell us about your {market.name.toLowerCase()} project and we'll respond within
            one business day with a tailored proposal — free of charge.
          </p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/projects" className="btn btn-white btn-lg">See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
