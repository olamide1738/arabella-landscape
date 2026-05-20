import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

// Each pair: { title, location, category, before, after, beforeLabel, afterLabel, description }
// Uses existing project imagery. before = design render / early state, after = completed photo.
const PAIRS = [
  {
    title: 'Abuja City Gate',
    location: 'Abuja, FCT',
    category: 'Public Space',
    before: '/images/abuja-gate-r4.jpg',
    after:  '/images/abuja-gate-3.png',
    beforeLabel: 'Design Render',
    afterLabel:  'Completed 2024',
    description: "From architectural rendering to award-winning civic reality — the City Gate roundabout transformed into one of Abuja's most visited public spaces.",
    slug: 'abuja-city-gate',
  },
  {
    title: 'Meridian Corporate Campus',
    location: 'Abuja',
    category: 'Corporate',
    before: '/images/abuja-gate-r2.jpg',
    after:  '/images/abuja-gate-r1.jpg',
    beforeLabel: 'Design Concept',
    afterLabel:  'Built & Planted',
    description: "Corporate campus landscape — showing the translation from design intent to a planted, lived-in environment that employees use daily.",
    slug: 'meridian-corporate-campus',
  },
  {
    title: 'Lekki Coastal Park',
    location: 'Lekki, Lagos',
    category: 'Recreational',
    before: '/images/abuja-gate-2.png',
    after:  '/images/abuja-gate-4.png',
    beforeLabel: 'Site Before',
    afterLabel:  'Park Completed',
    description: "A coastal strip transformed into a biodiverse public park — with native planting, boardwalks, and community amenities where there was once bare land.",
    slug: 'lekki-coastal-park',
  },
  {
    title: 'Banana Island Retreat',
    location: 'Banana Island, Lagos',
    category: 'Residential',
    before: '/images/abuja-gate-r5.jpg',
    after:  '/images/abuja-gate-r3.jpg',
    beforeLabel: 'Site Survey',
    afterLabel:  'Garden Complete',
    description: "Private estate garden on reclaimed land — engineered planting beds, mature specimens, and a naturalistic pool garden where there was once compacted fill.",
    slug: 'banana-island-retreat',
  },
]

export default function BeforeAfter() {
  const sectionRef = useScrollAnimation()

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Before & After — Arabella Landscape Limited</title>
        <meta name="description" content="See the transformation. Drag the slider to reveal the before and after of Arabella's most significant landscape projects across Nigeria." />
        <meta property="og:title" content="Project Transformations — Arabella Landscape Limited" />
        <meta property="og:description" content="Drag to reveal: before and after comparisons of Arabella's landmark projects." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Transformations</p>
          <h1>Before & After</h1>
          <p>Drag the slider to reveal the transformation. Every landscape starts somewhere — here's where ours began and where they ended up.</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div className="ba-page-grid stagger-children">
            {PAIRS.map((pair) => (
              <div key={pair.slug} className="ba-item animate-on-scroll">
                <div className="ba-item__header">
                  <div>
                    <span className="ba-item__category">{pair.category}</span>
                    <h2 className="ba-item__title">{pair.title}</h2>
                    <p className="ba-item__location">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round" style={{ width: 13, height: 13 }}>
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {pair.location}
                    </p>
                  </div>
                  <Link to={`/projects/${pair.slug}`} className="btn btn-secondary btn-sm">
                    View Project
                  </Link>
                </div>

                <BeforeAfterSlider
                  before={pair.before}
                  after={pair.after}
                  beforeLabel={pair.beforeLabel}
                  afterLabel={pair.afterLabel}
                  alt={pair.title}
                />

                <p className="ba-item__desc">{pair.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Your Turn</p>
          <h2>What Could Your<br /><em>Space Become?</em></h2>
          <p>Every transformation starts with a conversation. Tell us about your site and we'll show you the possibilities.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Start Your Transformation</Link>
            <Link to="/projects" className="btn btn-white btn-lg">See All Projects</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
