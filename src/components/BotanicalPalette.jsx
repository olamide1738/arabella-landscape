import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ── Architectural SVG Icons (Replacing all Emojis) ── */
function LeafIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function SunIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function DropIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}

function PillarIcon({ size = 20, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 4h16M4 20h16M6 4v16M18 4v16M10 4v16M14 4v16" />
      <path d="M2 20h20M2 4h20" />
    </svg>
  )
}

function PalmIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M13 8c0-2.76-2.24-5-5-5-1.5 0-2.83.66-3.75 1.71C3.5 6 3 8 3 8s2.5 1 4.5 0" />
      <path d="M13 7.14A5.82 5.82 0 0 1 18 4c1.8 0 3.3.82 4.25 2.1-.8 1.4-2.25 2.4-4.25 2.4" />
      <path d="M13 10c2.5-.5 5 0 7 1.5-1 1-2.5 1.5-4.5 1" />
      <path d="M11 10.5C9 10.5 7 11 5 13c1.5.5 3.5 0 4.5-.5" />
      <path d="M12 10v11" />
    </svg>
  )
}

function TreeIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 19v3" />
      <path d="M7 19c-2.76 0-5-2.24-5-5 0-2.3 1.56-4.24 3.7-4.82A6 6 0 0 1 17 5a6 6 0 0 1 5.3 6.18C22.18 11.75 22 12.35 22 13c0 3.31-2.69 6-6 6H7z" />
    </svg>
  )
}

function FlowerIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5 4.5 4.5 0 1 1 16.5 12 4.5 4.5 0 0 1 12 16.5z" />
      <path d="M12 7.5V3M12 21v-4.5M16.5 12H21M3 12h4.5" />
    </svg>
  )
}

function SproutIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M7 20h10" />
      <path d="M10 20c0-4.42 2-7 5-8 0-4-3-7-7-7-2 0-3.5 1-4.5 2 0 4 3 6.5 6.5 7" />
      <path d="M12 20v-8" />
    </svg>
  )
}

function GrassIcon({ size = 22, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 20c1-5 4-8 8-9" />
      <path d="M12 20c0-6 2-10 6-12" />
      <path d="M8 20c1-3 2-6 5-7" />
      <path d="M2 20h20" />
    </svg>
  )
}

/* Dynamically picks architectural icon based on category */
function getPlantIcon(category = '') {
  const cat = category.toLowerCase()
  if (cat.includes('palm')) return <PalmIcon />
  if (cat.includes('tree')) return <TreeIcon />
  if (cat.includes('flower') || cat.includes('fragrant')) return <FlowerIcon />
  if (cat.includes('turf') || cat.includes('grass')) return <GrassIcon />
  if (cat.includes('climber') || cat.includes('vertical')) return <SproutIcon />
  return <LeafIcon size={22} />
}

export default function BotanicalPalette({ plants }) {
  if (!plants || plants.length === 0) return null

  const categories = ['All', ...new Set(plants.map(p => p.category))]
  const [selectedCat, setSelectedCat] = useState('All')

  const filteredPlants = selectedCat === 'All'
    ? plants
    : plants.filter(p => p.category === selectedCat)

  return (
    <section className="section pd-botanical-section">
      <div className="container">
        {/* Section Header */}
        <div className="pd-botanical__header animate-on-scroll">
          <div>
            <p className="section-label">Living Architecture</p>
            <h2 className="headline-lg" style={{ color: 'var(--on-surface)' }}>
              Botanical &amp; <em>Specimen Palette</em>
            </h2>
            <p className="pd-botanical__intro">
              The living plant species selected and engineered specifically for this site’s micro-climate, soil profile, and architectural harmony.
            </p>
          </div>
          <Link to="/plants" className="btn btn-secondary btn-sm pd-botanical__finder-btn">
            Open Plant Finder ↗
          </Link>
        </div>

        {/* Botanical Highlights Metric Strip with crisp SVG icons */}
        <div className="pd-botanical__metrics animate-on-scroll">
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">
              <LeafIcon size={22} />
            </span>
            <div>
              <strong>{plants.length} Curated Taxa</strong>
              <span>Custom-Specified Flora</span>
            </div>
          </div>
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">
              <SunIcon size={22} />
            </span>
            <div>
              <strong>Micro-Climate Hardened</strong>
              <span>Solar &amp; Wind Adapted</span>
            </div>
          </div>
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">
              <DropIcon size={22} />
            </span>
            <div>
              <strong>Zoned Water Efficiency</strong>
              <span>Drip &amp; Rainfall Optimized</span>
            </div>
          </div>
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">
              <PillarIcon size={22} />
            </span>
            <div>
              <strong>Architectural Scale</strong>
              <span>Stratified Vertical Layers</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        {categories.length > 2 && (
          <div className="pd-botanical__filters animate-on-scroll">
            {categories.map(cat => (
              <button
                key={cat}
                type="button"
                className={`pd-botanical__filter-btn${selectedCat === cat ? ' active' : ''}`}
                onClick={() => setSelectedCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Plant Cards Grid */}
        <div className="pd-botanical__grid">
          {filteredPlants.map((plant) => (
            <div key={plant.scientific} className="pd-plant-card animate-on-scroll">
              <div className="pd-plant-card__top">
                <div className="pd-plant-card__avatar">
                  {getPlantIcon(plant.category)}
                </div>
                <div className="pd-plant-card__badges">
                  {plant.native && (
                    <span className="pd-plant-badge pd-plant-badge--native">
                      Native Species
                    </span>
                  )}
                  {plant.tag && (
                    <span className="pd-plant-badge pd-plant-badge--tag">
                      {plant.tag}
                    </span>
                  )}
                </div>
              </div>

              <div className="pd-plant-card__body">
                <p className="pd-plant-card__scientific">
                  {plant.scientific}
                </p>
                <h3 className="pd-plant-card__common">
                  {plant.name}
                </h3>
                <p className="pd-plant-card__role">
                  {plant.role}
                </p>
              </div>

              <div className="pd-plant-card__footer">
                <div className="pd-plant-card__specs">
                  {plant.light && (
                    <span className="pd-plant-spec" title="Sunlight Requirement">
                      <SunIcon size={14} className="pd-spec-icon" />
                      <span>{plant.light}</span>
                    </span>
                  )}
                  {plant.water && (
                    <span className="pd-plant-spec" title="Water Needs">
                      <DropIcon size={14} className="pd-spec-icon" />
                      <span>{plant.water}</span>
                    </span>
                  )}
                </div>
                <Link
                  to={`/plants?search=${encodeURIComponent(plant.name)}`}
                  className="pd-plant-card__link"
                  title={`View ${plant.name} specifications in Plant Finder`}
                >
                  Explore Specimen →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Botanical Consultation Footnote */}
        <div className="pd-botanical__footer-card animate-on-scroll">
          <div className="pd-botanical__footer-text">
            <h4>Curating Flora for Your Property</h4>
            <p>
              Every site has unique soil salinity, sun angles, and water table depths. Arabella’s horticulturists and landscape architects specify living specimens that thrive effortlessly year-round.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Consult With Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}
