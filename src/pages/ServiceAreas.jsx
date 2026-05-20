import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SERVICE_AREAS } from '../data/serviceAreas'

const WHY = [
  {
    title: 'Local Knowledge',
    body: 'Every city has its own soils, rainfall patterns, regulatory landscape, and plant behaviour. Our resident teams know each city intimately.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'National Coordination',
    body: 'For clients with multi-site programmes, our national structure allows a single point of contact to manage projects across all four cities simultaneously.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Consistent Standards',
    body: 'Whether you are building in Lagos or Port Harcourt, every Arabella project is delivered to the same quality standards, specifications, and handover process.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
]

export default function ServiceAreas() {
  const sectionRef = useScrollAnimation()

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Service Areas — Arabella Landscape Limited</title>
        <meta name="description" content="Arabella delivers premium landscape architecture and construction across Lagos, Abuja, Port Harcourt, and Ibadan — with local resident teams in every city." />
        <meta property="og:title" content="Where We Work — Arabella Landscape Limited" />
        <meta property="og:description" content="Arabella operates across Nigeria's four major cities, with local site teams, supply chain relationships, and deep horticultural knowledge in each region." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Where We Work</p>
          <h1>Service Areas</h1>
          <p>Resident teams in Nigeria's four major cities — local knowledge, national scale, consistent quality.</p>
        </div>
      </section>

      {/* ── City Cards ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div className="sa-grid stagger-children">
            {SERVICE_AREAS.map(area => (
              <div key={area.slug} className="sa-card animate-on-scroll">
                <div className="sa-card__image">
                  <img src={area.image} alt={area.city} loading="lazy" />
                  <span className="sa-card__badge">{area.projectCount} Projects</span>
                </div>
                <div className="sa-card__body">
                  <p className="sa-card__state">{area.state}</p>
                  <h2 className="sa-card__city">{area.city}</h2>
                  <p className="sa-card__tagline">{area.tagline}</p>

                  <div className="sa-card__districts">
                    {area.districts.slice(0, 4).map(d => (
                      <span key={d} className="sa-card__district">{d}</span>
                    ))}
                    {area.districts.length > 4 && (
                      <span className="sa-card__district" style={{ color: 'var(--vivid-growth)', fontWeight: 600 }}>
                        +{area.districts.length - 4} more areas
                      </span>
                    )}
                  </div>

                  <div className="sa-card__footer">
                    <div className="sa-card__stat">
                      <span className="sa-card__stat-val">{area.projectCount}</span>
                      <span className="sa-card__stat-key">Projects</span>
                    </div>
                    <div className="sa-card__stat">
                      <span className="sa-card__stat-val">Since {area.sinceYear}</span>
                      <span className="sa-card__stat-key">Operating</span>
                    </div>
                    <Link
                      to={`/contact?city=${area.slug}`}
                      className="btn btn-primary btn-sm"
                      style={{ marginLeft: 'auto', flexShrink: 0 }}
                    >
                      Contact {area.city} Team
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why This Structure ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Why It Matters</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Local Teams. National Reach.
            </h2>
            <p className="animate-on-scroll" style={{ color: 'var(--on-surface-variant)', maxWidth: '540px', margin: '0.75rem auto 0', fontSize: '16px', lineHeight: 1.75 }}>
              Most landscape firms parachute in teams from Lagos for Abuja projects — we have permanent resident teams in every city we serve.
            </p>
          </div>
          <div className="sa-why-grid stagger-children">
            {WHY.map(w => (
              <div key={w.title} className="sa-why-card animate-on-scroll">
                <div className="sa-why-card__icon">{w.icon}</div>
                <h3 className="sa-why-card__title">{w.title}</h3>
                <p className="sa-why-card__body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Strip ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)', paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="sa-contact-strip animate-on-scroll">
            <div className="sa-contact-strip__text">
              <h3>Not Sure Which Team to Contact?</h3>
              <p>Our central team will route your enquiry to the right city office within 2 hours.</p>
            </div>
            <div className="sa-contact-strip__actions">
              <Link to="/contact" className="btn btn-primary">Send an Enquiry</Link>
              <a href="tel:+2348001234567" className="btn btn-white">Call Us Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Get Started</p>
          <h2>Tell Us About<br /><em>Your Project</em></h2>
          <p>Wherever your site is in Nigeria, we have a team that knows the land.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
            <Link to="/projects" className="btn btn-white btn-lg">View Our Portfolio</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
