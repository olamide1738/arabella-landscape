import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getService } from '../data/services'
import { PROJECTS } from '../data/projects'

/* ── Icons ── */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

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

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 12, height: 12, flexShrink: 0 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ChevronIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 18, height: 18, flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

/* ── FAQ Accordion ── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`sd-faq__item${open ? ' open' : ''}`}>
      <button className="sd-faq__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronIcon open={open} />
      </button>
      <div className="sd-faq__a-wrap" style={{ maxHeight: open ? '400px' : '0' }}>
        <p className="sd-faq__a">{a}</p>
      </div>
    </div>
  )
}

/* ── Related project card ── */
function ProjectCard({ project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="sd-project-card"
      style={{ textDecoration: 'none' }}
      aria-label={`View ${project.name}`}
    >
      <div className="sd-project-card__image">
        <img src={project.image} alt={project.name} />
        <div className="sd-project-card__overlay" aria-hidden="true" />
        <span className="sd-project-card__tag">{project.category}</span>
        <span className="sd-project-card__year">{project.year}</span>
      </div>
      <div className="sd-project-card__body">
        <p className="sd-project-card__name">{project.name}</p>
        <p className="sd-project-card__location">
          <PinIcon /> {project.location}
        </p>
      </div>
    </Link>
  )
}

/* ── Main ── */
export default function ServiceDetail() {
  const { slug } = useParams()
  const sectionRef = useScrollAnimation()
  const service = getService(slug)

  if (!service) return <Navigate to="/services" replace />

  const relatedProjects = service.highlightProjects
    .map(s => PROJECTS.find(p => p.slug === s))
    .filter(Boolean)

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>{service.title} — Arabella Landscape Limited</title>
        <meta name="description" content={service.tagline} />
        <meta property="og:title" content={`${service.title} — Arabella Landscape`} />
        <meta property="og:description" content={service.tagline} />
        <meta property="og:image" content={service.heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="sd-hero">
        <div className="sd-hero__bg" style={{ backgroundImage: `url(${service.heroImage})` }} aria-hidden="true" />
        <div className="sd-hero__overlay" aria-hidden="true" />
        <div className="sd-hero__content container">
          <nav className="pd-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{service.title}</span>
          </nav>
          <span className="sd-hero__label">{service.label}</span>
          <h1 className="sd-hero__title">{service.title}</h1>
          <p className="sd-hero__tagline">{service.tagline}</p>
          <div className="sd-hero__actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote <ArrowIcon />
            </Link>
            <Link to="/services" className="btn btn-white btn-lg">
              All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="section sd-overview">
        <div className="container">
          <div className="sd-overview__grid">
            <div className="animate-on-scroll animate-left">
              <p className="section-label">Overview</p>
              <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: '1.5rem' }}>
                What Is<br /><em>{service.title}?</em>
              </h2>
              {service.overview.map((para, i) => (
                <p key={i} style={{ color: 'var(--on-surface-variant)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '16px' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Sticky quote card */}
            <div className="sd-quote-card animate-on-scroll animate-right">
              <p className="sd-quote-card__label">Ready to get started?</p>
              <h3 className="sd-quote-card__title">Free Initial Consultation</h3>
              <p className="sd-quote-card__text">
                All enquiries receive a free 30-minute consultation with a senior landscape architect — no obligation.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
                Request a Quote <ArrowIcon />
              </Link>
              <div className="sd-quote-card__divider" />
              <div className="sd-quote-card__contact">
                <a href="tel:+2348001234567" className="sd-quote-card__contact-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h-.08z" />
                  </svg>
                  +234 800 123 4567
                </a>
                <a href="mailto:hello@arabellalandscape.com" className="sd-quote-card__contact-link">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  hello@arabellalandscape.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="section sd-features" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>What's Included</p>
            <h2 className="animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Our {service.title} Services
            </h2>
          </div>
          <div className="sd-features__grid stagger-children">
            {service.features.map(({ label, text }) => (
              <div key={label} className="sd-feature-card animate-on-scroll">
                <div className="sd-feature-card__check">
                  <CheckIcon />
                </div>
                <div>
                  <p className="sd-feature-card__label">{label}</p>
                  <p className="sd-feature-card__text">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section sd-process">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>How We Work</p>
            <h2 className="animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Our Approach
            </h2>
          </div>
          <div className="sd-process__steps stagger-children">
            {service.process.map(({ n, title, text }) => (
              <div key={n} className="sd-process__step animate-on-scroll">
                <div className="sd-process__step-num">{n}</div>
                <div className="sd-process__step-connector" aria-hidden="true" />
                <h3 className="sd-process__step-title">{title}</h3>
                <p className="sd-process__step-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Who We Work With</p>
            <h2 className="animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Is This Service Right for You?
            </h2>
          </div>
          <div className="sd-whofor__grid stagger-children">
            {service.whoFor.map(({ title, text }) => (
              <div key={title} className="sd-whofor__card animate-on-scroll">
                <div className="sd-whofor__card-accent" aria-hidden="true" />
                <h3 className="sd-whofor__card-title">{title}</h3>
                <p className="sd-whofor__card-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Projects ── */}
      {relatedProjects.length > 0 && (
        <section className="section sd-projects">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <p className="section-label animate-on-scroll">See It in Practice</p>
                <h2 className="animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
                  Related Projects
                </h2>
              </div>
              <Link to="/projects" className="btn btn-secondary btn-sm animate-on-scroll">
                All Projects
              </Link>
            </div>
            <div className="sd-projects__grid stagger-children">
              {relatedProjects.map(p => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      <section className="section sd-faq" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <p className="section-label" style={{ justifyContent: 'center' }}>Common Questions</p>
              <h2 className="animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="sd-faq__list animate-on-scroll">
              {service.faq.map(({ q, a }) => (
                <FaqItem key={q} q={q} a={a} />
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '15px', color: 'var(--on-surface-variant)' }}>
              Have a question not listed here?{' '}
              <Link to="/contact" style={{ color: 'var(--vivid-growth)', fontWeight: 600 }}>
                Get in touch
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Ready to Begin?</p>
          <h2>Let's Discuss<br /><em>Your {service.title} Project</em></h2>
          <p>Tell us about your project and we'll put together a tailored proposal — completely free of charge.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get a Free Quote <ArrowIcon />
            </Link>
            <Link to="/projects" className="btn btn-white btn-lg">See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
