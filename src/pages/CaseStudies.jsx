import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { CASE_STUDIES } from '../data/caseStudies'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export default function CaseStudies() {
  const sectionRef = useScrollAnimation()
  const featured = CASE_STUDIES[0]
  const rest = CASE_STUDIES.slice(1)

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Case Studies — Arabella Landscape Limited</title>
        <meta name="description" content="Deep-dive project narratives from Arabella's portfolio — measurable outcomes, client testimonials, and the story behind Nigeria's finest landscape projects." />
        <meta property="og:title" content="Case Studies — Arabella Landscape Limited" />
        <meta property="og:description" content="From civic public realm to private estates — read the stories behind Arabella's most significant landscape commissions." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="page-hero page-hero--casestudies">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>In Depth</p>
          <h1>Case Studies</h1>
          <p>The story behind the design. Measurable outcomes, client perspectives, and the detail behind our most significant projects.</p>
        </div>
      </section>

      {/* ── Featured Case Study ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)', paddingBottom: '2rem' }}>
        <div className="container">
          <p className="section-label animate-on-scroll">Featured Project</p>
          <Link to={`/case-studies/${featured.slug}`} className="cs-featured animate-on-scroll">
            <div className="cs-featured__image">
              <img src={featured.heroImage} alt={featured.title} loading="eager" />
            </div>
            <div className="cs-featured__body">
              <p className="cs-featured__label">{featured.market}</p>
              <h2 className="cs-featured__title">{featured.title}</h2>
              <div className="cs-featured__meta">
                {featured.stats.slice(0, 3).map(s => (
                  <div key={s.label} className="cs-featured__meta-item">
                    <span className="cs-featured__meta-val">{s.value}</span>
                    <span className="cs-featured__meta-key">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="cs-featured__cta">Read Case Study <ArrowIcon /></p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Case Study Grid ── */}
      <section className="section" style={{ background: 'var(--surface)', paddingTop: '2rem' }}>
        <div className="container">
          <div className="cs-grid stagger-children">
            {rest.map(cs => (
              <Link key={cs.slug} to={`/case-studies/${cs.slug}`} className="cs-card animate-on-scroll">
                <div className="cs-card__image">
                  <img src={cs.heroImage} alt={cs.title} loading="lazy" />
                  <span className="cs-card__market">{cs.market}</span>
                </div>
                <div className="cs-card__body">
                  <p className="cs-card__client">{cs.client}</p>
                  <h2 className="cs-card__title">{cs.title}</h2>
                  <div className="cs-card__stats">
                    {cs.stats.slice(0, 2).map(s => (
                      <div key={s.label}>
                        <span className="cs-card__stat-val">{s.value}</span>
                        <span className="cs-card__stat-key">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Start Your Story</p>
          <h2>Your Project<br /><em>Could Be Next</em></h2>
          <p>Every case study started with a conversation. Tell us about your site and we will show you the possibilities.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-consultation btn-lg">Get a Consultation</Link>
            <Link to="/projects" className="btn btn-white btn-lg">View All Projects</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
