import { useState } from 'react'
import { Link } from 'react-router-dom'

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

        {/* Botanical Highlights Pill Bar */}
        <div className="pd-botanical__metrics animate-on-scroll">
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">🌿</span>
            <div>
              <strong>{plants.length} Curated Taxa</strong>
              <span>Custom-Specified Flora</span>
            </div>
          </div>
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">☀️</span>
            <div>
              <strong>Micro-Climate Hardened</strong>
              <span>Solar &amp; Wind Adapted</span>
            </div>
          </div>
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">💧</span>
            <div>
              <strong>Zoned Water Efficiency</strong>
              <span>Drip &amp; Rainfall Optimized</span>
            </div>
          </div>
          <div className="pd-botanical__metric">
            <span className="pd-botanical__metric-icon">🏛️</span>
            <div>
              <strong>Architectural Scale</strong>
              <span>Stratified Vertical Layers</span>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (if > 1 category) */}
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
                  <span>{plant.emoji || '🌱'}</span>
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
                      ☀️ {plant.light}
                    </span>
                  )}
                  {plant.water && (
                    <span className="pd-plant-spec" title="Water Needs">
                      💧 {plant.water}
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
