import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import BeforeAfterSlider from '../components/BeforeAfterSlider'

// Authentic multi-project transformation pairs across Arabella's actual portfolio
const PAIRS = [
  {
    title: 'Abuja City Gate',
    location: 'Abuja, FCT',
    category: 'Public Space',
    before: '/images/abuja-gate-r4.jpg',
    after:  '/images/abuja-gate-3.png',
    beforeLabel: 'Design Render',
    afterLabel:  'Completed Reality',
    description: "From architectural 3D rendering to award-winning civic reality — the ceremonial City Gate roundabout transformed into Nigeria's most photographed national public monument.",
    slug: 'abuja-city-gate',
  },
  {
    title: 'Private Residence, Asaba',
    location: 'Asaba, Delta State',
    category: 'Residential',
    before: '/images/asaba-residence-1.jpg',
    after:  '/images/asaba-residence-2.jpg',
    beforeLabel: 'Approach Road',
    afterLabel:  'Cobblestone Court',
    description: "Transitioning from the raw laterite soil approach to an exclusive private arrival sanctuary, anchored by handcrafted granite cobblestones, topiary box hedges, and centerpiece stone sculpture.",
    slug: 'private-residence-asaba',
  },
  {
    title: 'Adire Mall',
    location: 'Abeokuta, Ogun State',
    category: 'Commercial',
    before: '/images/adire-mall-5.jpg',
    after:  '/images/adire-mall-1.jpg',
    beforeLabel: 'Daytime Framework',
    afterLabel:  'Illuminated Boulevard',
    description: "Transforming an artisan commercial market into a world-class cultural boulevard with heavy-duty interlocking pavers and a glowing emerald architectural skybridge.",
    slug: 'adire-mall',
  },
  {
    title: 'Mariam Babangida Leisure Park',
    location: 'Asaba, Delta State',
    category: 'Public Space',
    before: '/images/mariam-babangida-4.jpg',
    after:  '/images/mariam-babangida-1.jpg',
    beforeLabel: 'Site Works & Berms',
    afterLabel:  'Lagoon & Tower Plaza',
    description: "10.5 hectares of regional delta floodplains sculpted into rolling amphitheater berms, an engineered aquatic lagoon, and a monumental 30-meter observation tower.",
    slug: 'mariam-babangida-leisure-park',
  },
  {
    title: 'GTBank HNI Branch',
    location: 'Bayo Kuku, Ikoyi, Lagos',
    category: 'Commercial',
    before: '/images/gtb-bayo-kuku-3.jpg',
    after:  '/images/gtb-bayo-kuku-1.jpg',
    beforeLabel: 'Steel Trellis Matrix',
    afterLabel:  'Living Wall Bio-Facade',
    description: "Engineering Nigeria's premier multi-story vertical bio-facade — converting bare structural steel trellis into a flourishing micro-misted living wall that cools the corporate courtyard.",
    slug: 'gtb-bayo-kuku',
  },
  {
    title: 'Asaba Country Home',
    location: 'Asaba, Delta State',
    category: 'Residential',
    before: '/images/asaba-country-home-4.jpg',
    after:  '/images/asaba-country-home-1.jpg',
    beforeLabel: 'Riparian Pathway',
    afterLabel:  'Waterfront Pool Terrace',
    description: "Transforming raw River Niger waterfront acreage into a terraced country estate, uniting an infinity pool deck, stone retaining walls, and cobblestone garden promenades.",
    slug: 'asaba-country-home',
  },
]

const FILTERS = ['All', 'Public Space', 'Commercial', 'Residential']

export default function BeforeAfter() {
  const [activeFilter, setActiveFilter] = useState('All')
  const sectionRef = useScrollAnimation()

  const filteredPairs = activeFilter === 'All'
    ? PAIRS
    : PAIRS.filter((pair) => pair.category === activeFilter)

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
          <p>Drag the slider to reveal the transformation. Every landscape starts somewhere — here's where ours began and where they ended up across Nigeria.</p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="filter-tabs" style={{ marginBottom: '3rem', justifyContent: 'center' }}>
            {FILTERS.map((cat) => {
              const count = cat === 'All'
                ? PAIRS.length
                : PAIRS.filter((p) => p.category === cat).length
              return (
                <button
                  key={cat}
                  className={`filter-tab${activeFilter === cat ? ' active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  <span>{cat}</span>
                  <span className="filter-tab__count">{count}</span>
                </button>
              )
            })}
          </div>

          <div className="ba-page-grid stagger-children">
            {filteredPairs.map((pair) => (
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
