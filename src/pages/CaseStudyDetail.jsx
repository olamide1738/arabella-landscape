import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getCaseStudy } from '../data/caseStudies'
import { SERVICES } from '../data/services'

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = getCaseStudy(slug)
  const sectionRef = useScrollAnimation()

  if (!cs) return <Navigate to="/case-studies" replace />

  const relatedServices = SERVICES.filter(s => cs.services.includes(s.slug))

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>{cs.title} — Arabella Landscape Limited</title>
        <meta name="description" content={cs.challenge.slice(0, 160)} />
        <meta property="og:title" content={`${cs.title} — Arabella Case Study`} />
        <meta property="og:image" content={cs.heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="csd-hero">
        <div className="csd-hero__image" style={{ backgroundImage: `url(${cs.heroImage})` }} />
        <div className="csd-hero__overlay" />
        <div className="csd-hero__content">
          <div className="container">
            <p className="csd-hero__label">{cs.market} — Case Study</p>
            <h1 className="csd-hero__title">{cs.title}</h1>
            <div className="csd-hero__meta">
              <span className="csd-hero__meta-item">
                <MapPinIcon /> {cs.location}
              </span>
              <span className="csd-hero__meta-item">
                <CalendarIcon /> Delivered {cs.year}
              </span>
              <span className="csd-hero__meta-item">{cs.client}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="csd-stats-bar">
        <div className="container">
          <div className="csd-stats-bar__grid">
            {cs.stats.map(s => (
              <div key={s.label}>
                <span className="csd-stat-val">{s.value}</span>
                <span className="csd-stat-key">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="csd-body">

            {/* Main narrative */}
            <div className="csd-body__main">
              <div>
                <h2 className="csd-section-heading">The Challenge</h2>
                <p className="csd-body__text">{cs.challenge}</p>
              </div>
              <div>
                <h2 className="csd-section-heading">Our Approach</h2>
                <p className="csd-body__text">{cs.approach}</p>
              </div>
              <div>
                <h2 className="csd-section-heading">The Outcome</h2>
                <p className="csd-body__text">{cs.outcome}</p>
              </div>

              {/* Gallery */}
              {cs.gallery?.length > 0 && (
                <div>
                  <h2 className="csd-section-heading">Project Gallery</h2>
                  <div className="csd-gallery">
                    {cs.gallery.map((src, i) => (
                      <div key={i} className="csd-gallery__item">
                        <img src={src} alt={`${cs.title} — ${i + 1}`} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="csd-sidebar">
              {/* Quote */}
              {cs.quote && (
                <div className="csd-sidebar-card">
                  <p className="csd-sidebar-card__heading">Client Testimonial</p>
                  <p className="csd-sidebar-card__quote">"{cs.quote.text}"</p>
                  <p className="csd-sidebar-card__author">— {cs.quote.author}</p>
                </div>
              )}

              {/* Services used */}
              {relatedServices.length > 0 && (
                <div className="csd-sidebar-card">
                  <p className="csd-sidebar-card__heading">Services Delivered</p>
                  <div className="csd-sidebar-service-list">
                    {relatedServices.map(s => (
                      <Link key={s.slug} to={`/services/${s.slug}`} className="csd-sidebar-service">
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="csd-sidebar-card" style={{ background: 'var(--forest-depth)', border: 'none' }}>
                <p className="csd-sidebar-card__heading" style={{ color: 'var(--lime-energy)' }}>Start Your Project</p>
                <p className="csd-sidebar-card__quote" style={{ color: 'rgba(255,255,255,0.8)', fontStyle: 'normal' }}>
                  Interested in a similar outcome for your site? Our team would love to hear about your project.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Get a Free Quote
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── Back link ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)', paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div className="container">
          <Link to="/case-studies" className="btn btn-secondary">
            ← Back to Case Studies
          </Link>
        </div>
      </section>
    </main>
  )
}
