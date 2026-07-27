import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { PLANTS, PLANT_CATEGORIES } from '../data/plants'
import SunSimulator from '../components/SunSimulator'

const WATER_COLOUR = {
  'Very Low': '#d7df36',
  'Low': '#8bc34a',
  'Low–Medium': '#66bb6a',
  'Medium': '#26a69a',
  'High': '#42a5f5',
}

const GROWTH_BADGE = {
  'Very Fast': { label: 'Very Fast', bg: 'rgba(215,223,54,0.15)', color: 'var(--forest-depth)' },
  'Fast':      { label: 'Fast',      bg: 'rgba(0,179,73,0.12)',   color: 'var(--vivid-growth)' },
  'Moderate':  { label: 'Moderate',  bg: 'rgba(0,110,42,0.08)',   color: 'var(--forest-depth)' },
  'Slow':      { label: 'Slow',      bg: 'rgba(0,0,0,0.06)',      color: 'var(--on-surface-variant)' },
}

function DropIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 12, height: 12 }}>
      <path d="M12 2C6 10 4 14 4 17a8 8 0 0016 0c0-3-2-7-8-15z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}

function HeightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <polyline points="5 8 12 2 19 8" />
      <polyline points="5 16 12 22 19 16" />
    </svg>
  )
}

function PlantCard({ plant, activeSunMode }) {
  const growth = GROWTH_BADGE[plant.growth] || GROWTH_BADGE['Moderate']
  const waterColour = WATER_COLOUR[plant.water] || '#66bb6a'

  return (
    <div className="plant-card animate-on-scroll">
      <div className="plant-card__emoji">{plant.emoji}</div>
      <div className="plant-card__header">
        <div>
          <h3 className="plant-card__name">{plant.name}</h3>
          <p className="plant-card__scientific">{plant.scientific}</p>
        </div>
        {plant.native && (
          <span className="plant-card__native-badge">Nigerian Native</span>
        )}
      </div>
      <p className="plant-card__description">{plant.description}</p>

      <div className="plant-card__specs">
        <div className="plant-card__spec">
          <DropIcon />
          <span style={{ color: waterColour, fontWeight: 700 }}>{plant.water}</span>
          <span className="plant-card__spec-label">Water</span>
        </div>
        <div className="plant-card__spec">
          <SunIcon />
          <span style={{ color: activeSunMode ? 'var(--vivid-growth)' : 'inherit', fontWeight: activeSunMode ? 700 : 500 }}>{plant.light}</span>
          <span className="plant-card__spec-label">Light</span>
        </div>
        <div className="plant-card__spec">
          <HeightIcon />
          <span>{plant.height}</span>
          <span className="plant-card__spec-label">Height</span>
        </div>
      </div>

      <div className="plant-card__footer">
        <span className="plant-card__growth-badge"
          style={{ background: growth.bg, color: growth.color }}>
          {growth.label} growth
        </span>
        <div className="plant-card__uses">
          {plant.uses.slice(0, 3).map(u => (
            <span key={u} className="plant-card__use-tag">{u}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Plants() {
  const sectionRef = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [sunMode, setSunMode] = useState(null)

  const matchesSunMode = (plantLight) => {
    if (!sunMode) return true
    const lightLower = plantLight.toLowerCase()
    if (sunMode === 'Full Sun') return lightLower.includes('full sun')
    if (sunMode === 'Part Sun') return lightLower.includes('part') || lightLower.includes('bright') || lightLower.includes('full sun')
    if (sunMode === 'Part Shade') return lightLower.includes('part') || lightLower.includes('indirect') || lightLower.includes('shade')
    if (sunMode === 'Shade') return lightLower.includes('shade') || lightLower.includes('low') || lightLower.includes('indirect')
    return true
  }

  const filtered = PLANTS.filter(p => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const searchLower = search.toLowerCase()
    const searchMatch = !search
      || p.name.toLowerCase().includes(searchLower)
      || p.scientific.toLowerCase().includes(searchLower)
      || p.description.toLowerCase().includes(searchLower)
      || p.tags.some(t => t.includes(searchLower))
    const sunMatch = matchesSunMode(p.light)

    return catMatch && searchMatch && sunMatch
  })

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Plant Palette — Arabella Landscape Limited</title>
        <meta name="description" content="Browse the plants and materials Arabella's horticulturalists specify most across Nigerian landscape projects — from native trees to interior palms." />
        <meta property="og:title" content="Plant Palette — Arabella Landscape Limited" />
        <meta property="og:description" content="Nigerian native plants, tropical trees, palms, shrubs, and interior species used by Arabella Landscape." />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Our Palette</p>
          <h1>Plant Palette</h1>
          <p>The species and materials our horticulturalists and designers reach for most — organised by category, use, and solar light exposure.</p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">

          {/* Sun Simulator Widget */}
          <SunSimulator onSunModeChange={(mode) => setSunMode(mode)} activeSunMode={sunMode} />

          {/* Search + filter bar */}
          <div className="plants-toolbar animate-on-scroll">
            <div className="plants-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="plants-search__icon">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                placeholder="Search plants…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="plants-search__input"
                aria-label="Search plants"
              />
            </div>

            <div className="filter-tabs" style={{ margin: 0, justifyContent: 'flex-start', flexWrap: 'wrap' }}>
              {PLANT_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`filter-tab${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  <span className="filter-tab__count">
                    {cat === 'All' ? PLANTS.length : PLANTS.filter(p => p.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="projects-count" style={{ marginBottom: '2rem' }}>
            Showing <strong>{filtered.length}</strong> of <strong>{PLANTS.length}</strong> plant{PLANTS.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && <> in <strong>{activeCategory}</strong></>}
            {sunMode && <> matching <strong>{sunMode} Exposure</strong></>}
          </p>

          {/* Plant grid */}
          {filtered.length > 0 ? (
            <div className="plants-grid stagger-children">
              {filtered.map(plant => (
                <PlantCard key={plant.id} plant={plant} activeSunMode={sunMode} />
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center', color: 'var(--on-surface-variant)', padding: '4rem 0' }}>
              No plants match your selected filters and solar exposure mode.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Let's Design Together</p>
          <h2>Want a Custom Plant<br /><em>Palette for Your Project?</em></h2>
          <p>Our horticulturalists will specify the ideal species for your soil type, climate zone, and design vision.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-white btn-lg">Get a Free Consultation</Link>
            <Link to="/services/construction" className="btn btn-secondary btn-lg">Explore Exterior Landscaping</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
