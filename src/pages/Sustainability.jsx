import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const PILLARS = [
  {
    title: 'Native Plant Palette',
    body: "We specify indigenous Nigerian species wherever possible — plants that are adapted to local rainfall, soils, and pest pressure, requiring less irrigation, fewer inputs, and delivering greater biodiversity value than exotic alternatives.",
    items: [
      '100% native plant palette on all public realm projects',
      'In-house horticulture nursery propagating native species',
      'Ecological surveys and biodiversity net gain assessments',
      'Coastal and savanna meadow restoration capability',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12m0 0C12 7 7 2 2 2c0 5 5 10 10 10zm0 0c0-5 5-10 10-10-5 0-10 5-10 10" />
      </svg>
    ),
  },
  {
    title: 'Water Stewardship',
    body: "Nigeria's water challenges — from seasonal drought in the north to flash flooding in Lagos — demand that every landscape we design is engineered as part of the water cycle, not in opposition to it.",
    items: [
      'Rainwater harvesting on 90% of projects over 1,000 m²',
      'Designed permeable surfaces in all new hardscape specifications',
      'Drip and sub-surface irrigation to minimise evaporation',
      'SuDS design capability for flood-risk sites',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
      </svg>
    ),
  },
  {
    title: 'Materials & Supply Chain',
    body: "The landscape industry's carbon footprint is dominated by materials transport. We take a rigorous approach to local sourcing — prioritising Nigerian-quarried stone, locally manufactured ironwork, and regionally grown plants.",
    items: [
      'Target 80% of materials within a 200 km supply radius',
      'No tropical hardwood from non-FSC-certified sources',
      'Preference for recycled aggregates in sub-base construction',
      'Annual supply chain carbon audit from 2025',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
  },
  {
    title: 'Social Value & Community',
    body: "Arabella was founded on the belief that landscape improves lives. That principle extends beyond our clients to the communities our projects touch — through local employment, apprenticeship programmes, and community green space delivery.",
    items: [
      '70% of site labour sourced within 10 km of project',
      'Annual landscape apprenticeship programme — 8 places per year',
      'Pro-bono community garden projects annually',
      'Schools horticulture outreach in Lagos and Abuja',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

const STATS = [
  { value: '100%', label: 'Native palette on public realm' },
  { value: '90%',  label: 'Projects with rainwater harvesting' },
  { value: '70%',  label: 'Local labour within 10 km' },
  { value: '8',    label: 'Apprentices trained per year' },
]

const COMMUNITY = [
  {
    num: '15+',
    title: 'Community Gardens Built',
    body: 'Pro-bono and subsidised community garden projects delivered in Lagos and Abuja, giving underserved neighbourhoods access to green space.',
  },
  {
    num: '200+',
    title: 'Apprenticeship Graduates',
    body: 'Since 2015, our landscape apprenticeship programme has equipped over 200 young Nigerians with professional horticulture and construction skills.',
  },
  {
    num: '40+',
    title: 'Schools Visited',
    body: 'Our outreach programme takes horticulture workshops into Lagos and Abuja primary schools, inspiring the next generation of landscape professionals.',
  },
]

export default function Sustainability() {
  const sectionRef = useScrollAnimation()

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Sustainability & Green Promise — Arabella Landscape Limited</title>
        <meta name="description" content="Arabella's sustainability commitments — native planting, water stewardship, local supply chains, and community value across every project in Nigeria." />
        <meta property="og:title" content="Our Green Promise — Arabella Landscape Limited" />
        <meta property="og:description" content="How Arabella builds a more sustainable landscape industry in Nigeria, one project at a time." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="page-hero page-hero--sustainability">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Our Commitment</p>
          <h1>The Green Promise</h1>
          <p>Landscape is inherently environmental work. Here is how we make sure every project we deliver leaves the land — and the community — better than we found it.</p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="section" style={{ background: 'var(--warm-cream)' }}>
        <div className="container">
          <div className="sus-intro animate-on-scroll">
            <div className="sus-intro__image">
              <img src="/images/abuja-gate-3.png" alt="Arabella landscape — sustainable planting" loading="lazy" />
            </div>
            <div className="sus-intro__body">
              <p className="section-label">Why It Matters</p>
              <h2 className="headline-lg" style={{ color: 'var(--on-surface)' }}>
                Landscape Is<br />Environmental Action
              </h2>
              <p>
                Every project Arabella delivers is a chance to increase urban tree cover, manage water sustainably, support local biodiversity, and build community green space. We take that responsibility seriously — not as a marketing exercise, but as the foundation of how we practise.
              </p>
              <p>
                Nigeria faces real and escalating environmental challenges: urban heat islands, seasonal flooding, biodiversity loss, and a construction industry that often prioritises speed over stewardship. Arabella is committed to demonstrating that premium landscape and ecological responsibility are not in tension — they are the same thing.
              </p>
              <blockquote className="sus-intro__commitment">
                "We design landscapes that earn their place in the ecosystem — not just on the client's brief."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Four Commitments</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              How We Practise
            </h2>
          </div>
          <div className="sus-pillars-grid stagger-children">
            {PILLARS.map(pillar => (
              <div key={pillar.title} className="sus-pillar-card animate-on-scroll">
                <div className="sus-pillar-card__icon">{pillar.icon}</div>
                <h3 className="sus-pillar-card__title">{pillar.title}</h3>
                <p className="sus-pillar-card__body">{pillar.body}</p>
                <ul className="sus-pillar-card__list">
                  {pillar.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <div className="sus-stats-strip">
        <div className="container">
          <div className="sus-stats-grid stagger-children">
            {STATS.map(s => (
              <div key={s.label} className="sus-stat animate-on-scroll">
                <span className="sus-stat__value">{s.value}</span>
                <span className="sus-stat__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Community ── */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Social Value</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Beyond the Client Brief
            </h2>
            <p className="animate-on-scroll" style={{ color: 'var(--on-surface-variant)', maxWidth: '560px', margin: '0.75rem auto 0', fontSize: '16px', lineHeight: 1.75 }}>
              The communities around our projects feel the impact too. Here is how we invest in the wider landscape.
            </p>
          </div>
          <div className="sus-community-grid stagger-children">
            {COMMUNITY.map(c => (
              <div key={c.title} className="sus-community-card animate-on-scroll">
                <div className="sus-community-card__num">{c.num}</div>
                <h3 className="sus-community-card__title">{c.title}</h3>
                <p className="sus-community-card__body">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PDF Download ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)', paddingTop: '2rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div className="sus-download-strip animate-on-scroll">
            <div className="sus-download-strip__text">
              <h3>Download Our Green Promise Statement</h3>
              <p>Our full sustainability commitments, targets, and progress — in a single document.</p>
            </div>
            <a
              href="/assets/arabella-green-promise.pdf"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Sustainable Design</p>
          <h2>Build Something<br /><em>That Lasts</em></h2>
          <p>Discuss your project with a team that takes its environmental responsibilities as seriously as you do.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation</Link>
            <Link to="/projects" className="btn btn-white btn-lg">See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
