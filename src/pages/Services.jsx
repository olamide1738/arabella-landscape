import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { SERVICES } from '../data/services'

const PILLARS = [
  {
    num: '01',
    name: 'Design',
    sub: 'Landscape Architecture & Planning',
    desc: 'Visionary design from initial concept and masterplanning through to detailed construction drawings and 3D visualisations.',
    image: '/images/abuja-gate-r1.jpg',
    slug: 'landscape-architecture',
  },
  {
    num: '02',
    name: 'Build',
    sub: 'Design-Build & Site Development',
    desc: 'End-to-end construction and civil works — from earthworks and drainage through to full landscape installation and handover.',
    image: '/images/abuja-gate-2.png',
    slug: 'design-build',
  },
  {
    num: '03',
    name: 'Maintain',
    sub: 'Exterior Landscaping & Ongoing Care',
    desc: 'Premium maintenance, seasonal planting, and enhancement programmes that keep your landscape investment thriving year-round.',
    image: '/images/abuja-gate-3.png',
    slug: 'exterior-landscaping',
  },
  {
    num: '04',
    name: 'Interior',
    sub: 'Biophilic & Indoor Landscaping',
    desc: 'Living walls, planted installations, and indoor planting programmes that bring nature into the built environment.',
    image: '/images/abuja-gate-r3.jpg',
    slug: 'interior-landscaping',
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 16, height: 16, flexShrink: 0 }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 13, height: 13, flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Services() {
  const sectionRef = useScrollAnimation()

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Services — Arabella Landscape Limited</title>
        <meta name="description" content="End-to-end landscape solutions — exterior and interior landscaping, landscape architecture, recreational planning, design-build, and site development across Nigeria." />
        <meta property="og:title" content="Landscape Services — Arabella Landscape Limited" />
        <meta property="og:description" content="From concept through construction and ongoing care — Arabella delivers premium landscapes for residential, commercial, and public clients." />
        <meta property="og:image" content="/assets/images/service-exterior.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>What We Offer</p>
          <h1>Our Services</h1>
          <p>
            Six specialist disciplines — one integrated team. From your first idea through to a thriving, maintained landscape.
          </p>
        </div>
      </section>

      {/* ── Pillar Overview ── */}
      <section className="svc-pillars">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Four Disciplines</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              One Integrated Practice
            </h2>
          </div>
          <div className="svc-pillars__grid stagger-children">
            {PILLARS.map(pillar => (
              <Link
                key={pillar.slug}
                to={`/services/${pillar.slug}`}
                className="svc-pillar-card animate-on-scroll"
              >
                <div
                  className="svc-pillar-card__bg"
                  style={{ backgroundImage: `url(${pillar.image})` }}
                />
                <div className="svc-pillar-card__overlay" />
                <div className="svc-pillar-card__content">
                  <p className="svc-pillar-card__num">{pillar.num}</p>
                  <h3 className="svc-pillar-card__name">{pillar.name}</h3>
                  <p className="svc-pillar-card__sub">{pillar.sub}</p>
                  <p className="svc-pillar-card__cta">
                    Explore
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div className="svc-index__grid stagger-children">
            {SERVICES.map((service, i) => (
              <div key={service.slug} className="svc-index__card animate-on-scroll">
                {/* Image */}
                <div className="svc-index__card-image">
                  <img src={service.image} alt={service.title} />
                  <div className="svc-index__card-image-overlay" aria-hidden="true" />
                  <span className="svc-index__card-num">{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* Body */}
                <div className="svc-index__card-body">
                  <p className="svc-index__card-label">{service.label}</p>
                  <h2 className="svc-index__card-title">{service.title}</h2>
                  <p className="svc-index__card-tagline">{service.tagline}</p>

                  {/* Key inclusions — first 4 */}
                  <ul className="svc-index__card-features">
                    {service.features.slice(0, 4).map(f => (
                      <li key={f.label} className="svc-index__card-feature">
                        <span className="svc-index__card-feature-check"><CheckIcon /></span>
                        {f.label}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="svc-index__card-actions">
                    <Link to={`/services/${service.slug}`} className="btn btn-primary">
                      Explore Service <ArrowIcon />
                    </Link>
                    <Link to="/contact" className="btn btn-secondary">
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Arabella strip ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Why Choose Us</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              One Firm. Every Discipline.
            </h2>
            <p className="animate-on-scroll" style={{ color: 'var(--on-surface-variant)', maxWidth: '580px', margin: '0.75rem auto 0', fontSize: '16px', lineHeight: 1.75 }}>
              Arabella is Nigeria's only landscape practice that covers the full spectrum — from ecological masterplanning and 3D design to civil groundworks and ongoing maintenance — in-house.
            </p>
          </div>
          <div className="svc-why__grid stagger-children">
            {[
              { n: '200+', label: 'Projects Completed',   text: 'A deep portfolio spanning residential, commercial, public realm, and recreational typologies.' },
              { n: '15+',  label: 'Years of Practice',    text: 'Founded in 2010, Arabella has been shaping Nigeria\'s landscape industry for over a decade and a half.' },
              { n: '50+',  label: 'In-House Specialists', text: 'Landscape architects, horticulturalists, civil engineers, and skilled craftspeople — all under one roof.' },
              { n: '98%',  label: 'Client Satisfaction',  text: 'Our repeat client rate and referral track record reflect a consistent commitment to quality and service.' },
            ].map(({ n, label, text }) => (
              <div key={label} className="svc-why__card animate-on-scroll">
                <div className="svc-why__card-num">{n}</div>
                <p className="svc-why__card-label">{label}</p>
                <p className="svc-why__card-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Ready to Begin?</p>
          <h2>Let's Discuss<br /><em>Your Project</em></h2>
          <p>Every great landscape starts with a conversation. Tell us about your vision.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
            <Link to="/projects" className="btn btn-white btn-lg">See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
