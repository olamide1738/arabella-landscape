import { useState } from 'react'

/* ── Bespoke Architectural SVG Icons (Zero Emojis) ── */
function SunIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function SunsetIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M17 18a5 5 0 0 0-10 0" />
      <line x1="12" y1="2" x2="12" y2="9" />
      <line x1="4.22" y1="10.22" x2="5.64" y2="11.64" />
      <line x1="1" y1="18" x2="3" y2="18" />
      <line x1="21" y1="18" x2="23" y2="18" />
      <line x1="18.36" y1="11.64" x2="19.78" y2="10.22" />
      <line x1="23" y1="22" x2="1" y2="22" />
      <polyline points="8 6 12 2 16 6" />
    </svg>
  )
}

function MoonIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      <path d="M19 4v2M20 5h-2" strokeWidth="1.5" />
    </svg>
  )
}

function BulbIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
    </svg>
  )
}

function ShieldIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  )
}

function DialIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="12" x2="16.5" y2="7.5" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function EnergyIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function CrosshairIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="22" y1="12" x2="18" y2="12" />
      <line x1="6" y1="12" x2="2" y2="12" />
      <line x1="12" y1="6" x2="12" y2="2" />
      <line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  )
}

function CloseSmallIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

/* ── Default Hotspots & Fixtures ── */
const DEFAULT_HOTSPOTS = [
  {
    id: 'canopy-uplight',
    x: 26,
    y: 42,
    title: 'Canopy Architectural Uplight',
    category: 'Botanical Lighting',
    fixture: 'In-Ground Recessed Well (IP68)',
    cct: '2700K Warm White',
    beam: '18° Precision Narrow Spot with Honeycomb Louver',
    purpose: 'Grazes vertical trunk architecture and illuminates canopy underbellies while louvers eliminate peripheral pedestrian glare.',
    wattage: '15W Solid-State LED'
  },
  {
    id: 'pathway-bollard',
    x: 68,
    y: 74,
    title: 'Pathway Low-Bollard Ground Wash',
    category: 'Hardscape Circulation',
    fixture: 'Solid Brass Architectural Bollard (IP65)',
    cct: '3000K Soft White',
    beam: '360° Asymmetric Ground Cast',
    purpose: 'Provides safe nocturnal circulation along pavers and steps; keeps light strictly below knee-level conforming to Dark-Sky standards.',
    wattage: '6W High-Efficiency LED'
  },
  {
    id: 'aquatic-luminaire',
    x: 48,
    y: 62,
    title: 'Aquatic Submersible Luminaire',
    category: 'Water Feature & Terrace',
    fixture: 'Submersible Stainless Fixture (IP68 Submerged)',
    cct: '2400K Amber / Marine Azure',
    beam: '60° Wide Diffused Optical Lens',
    purpose: 'Casts gentle kinetic water ripples across terrace stone and adjacent retaining walls for ambient tranquility.',
    wattage: '9W Low-Voltage AC'
  },
  {
    id: 'wall-grazer',
    x: 84,
    y: 48,
    title: 'Textured Wall Grazer',
    category: 'Perimeter & Masonry',
    fixture: 'Linear Micro-Optic Luminaire',
    cct: '2700K Warm White',
    beam: '10° x 60° Elliptical Vertical Graze',
    purpose: 'Accentuates natural masonry crevices, dressed quarry stone, and retaining wall contours.',
    wattage: '12W/meter Linear LED'
  }
]

export default function ArchitecturalLighting({ project }) {
  const [timeMode, setTimeMode] = useState('night') // 'day' | 'twilight' | 'night'
  const [activeHotspot, setActiveHotspot] = useState(null)
  const [showHotspots, setShowHotspots] = useState(true)

  // Determine base images
  const dayImage = project.lighting?.dayImage || project.images?.[1] || project.image
  const nightImage = project.lighting?.nightImage || (project.images?.find(img => img.includes('night') || img.includes('gate-4') || img.includes('gate-1'))) || null
  const baseImage = project.image

  const hotspots = project.lighting?.hotspots || DEFAULT_HOTSPOTS

  const timeModes = [
    {
      id: 'day',
      label: 'Daylight',
      time: '12:00 PM',
      cct: '5500K Natural',
      icon: SunIcon,
      subtitle: 'Natural Solar Fidelity'
    },
    {
      id: 'twilight',
      label: 'Twilight',
      time: '6:30 PM',
      cct: '3200K Golden Dusk',
      icon: SunsetIcon,
      subtitle: 'Golden Hour Harmony'
    },
    {
      id: 'night',
      label: 'Nocturnal',
      time: '9:30 PM',
      cct: '2700K Architectural',
      icon: MoonIcon,
      subtitle: 'Sculpted Landscape Illumination'
    }
  ]

  return (
    <section className="section pd-lighting" id="architectural-lighting">
      <div className="container">
        {/* Section Header */}
        <div className="pd-lighting__header animate-on-scroll">
          <div className="pd-lighting__header-left">
            <span className="pd-lighting__badge">
              <BulbIcon size={14} />
              <span>Atmosphere &amp; Illumination Studio</span>
            </span>
            <h2 className="pd-lighting__title">Architectural Lighting &amp; Nocturnal Study</h2>
            <p className="pd-lighting__intro">
              Arabella designs landscapes that remain enchanting long after dusk. Explore how precision 
              photometrics, low-glare dark-sky fixtures, and warm 2700K architectural luminaires sculpt 
              trees, living water, and stone pathways through the evening.
            </p>
          </div>

          {/* Time Selector Controls */}
          <div className="pd-lighting__controls">
            <div className="pd-lighting__time-switcher" role="tablist" aria-label="Select Ambiance Timeframe">
              {timeModes.map(mode => {
                const Icon = mode.icon
                const isActive = timeMode === mode.id
                return (
                  <button
                    key={mode.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`pd-lighting__time-btn ${isActive ? 'is-active' : ''}`}
                    onClick={() => {
                      setTimeMode(mode.id)
                      if (mode.id === 'day') setActiveHotspot(null)
                    }}
                  >
                    <span className="pd-lighting__time-btn-icon">
                      <Icon size={16} />
                    </span>
                    <span className="pd-lighting__time-btn-meta">
                      <strong className="pd-lighting__time-btn-label">{mode.label}</strong>
                      <small className="pd-lighting__time-btn-time">{mode.time}</small>
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Hotspots Toggle */}
            <button
              type="button"
              className={`pd-lighting__hotspots-toggle ${showHotspots ? 'is-on' : ''}`}
              onClick={() => setShowHotspots(!showHotspots)}
              title="Toggle Architectural Fixture Hotspots"
            >
              <CrosshairIcon size={14} />
              <span>{showHotspots ? 'Hotspots Active' : 'Show Fixtures'}</span>
            </button>
          </div>
        </div>

        {/* Interactive Lighting Canvas */}
        <div className={`pd-lighting__stage pd-lighting__stage--${timeMode} animate-on-scroll`}>
          <div className="pd-lighting__viewport">
            {/* Base Daylight Image */}
            <img
              src={dayImage || baseImage}
              alt={`${project.name} Daylight Ambiance`}
              className="pd-lighting__img pd-lighting__img--day"
              loading="lazy"
            />

            {/* True Night Image if available, crossfaded */}
            {nightImage && (
              <img
                src={nightImage}
                alt={`${project.name} Night Architectural Lighting`}
                className={`pd-lighting__img pd-lighting__img--night-true ${timeMode === 'night' ? 'is-visible' : ''}`}
                loading="lazy"
              />
            )}

            {/* Twilight Atmospheric Filter Layer */}
            <div className="pd-lighting__shader pd-lighting__shader--twilight" aria-hidden="true" />

            {/* Night Atmospheric Filter & Contrast Layer */}
            <div className="pd-lighting__shader pd-lighting__shader--night" aria-hidden="true" />

            {/* Optical Luminosity Cones & Pools of Light (Active in Twilight & Night) */}
            <div className="pd-lighting__optical-grid" aria-hidden="true">
              <div className="pd-lighting__beam pd-lighting__beam--tree" />
              <div className="pd-lighting__beam pd-lighting__beam--path" />
              <div className="pd-lighting__beam pd-lighting__beam--water" />
              <div className="pd-lighting__beam pd-lighting__beam--wall" />
            </div>

            {/* Interactive Fixture Hotspots */}
            {showHotspots && (
              <div className="pd-lighting__hotspots-layer">
                {hotspots.map(spot => {
                  const isSelected = activeHotspot?.id === spot.id
                  return (
                    <div
                      key={spot.id}
                      className={`pd-lighting__pin-wrap ${isSelected ? 'is-selected' : ''}`}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    >
                      <button
                        type="button"
                        className="pd-lighting__pin-btn"
                        onClick={() => setActiveHotspot(isSelected ? null : spot)}
                        aria-label={`Inspect ${spot.title}`}
                        aria-expanded={isSelected}
                      >
                        <span className="pd-lighting__pin-pulse" />
                        <span className="pd-lighting__pin-core">
                          <BulbIcon size={12} />
                        </span>
                      </button>

                      {/* Hotspot Micro-Label */}
                      <span className="pd-lighting__pin-tag">{spot.title}</span>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Selected Fixture Drawer Popover */}
            {activeHotspot && (
              <div className="pd-lighting__drawer animate-scale-in" role="dialog" aria-modal="false" aria-labelledby="drawer-fixture-title">
                <div className="pd-lighting__drawer-header">
                  <div className="pd-lighting__drawer-category">
                    <BulbIcon size={13} />
                    <span>{activeHotspot.category}</span>
                  </div>
                  <button
                    type="button"
                    className="pd-lighting__drawer-close"
                    onClick={() => setActiveHotspot(null)}
                    aria-label="Close fixture details"
                  >
                    <CloseSmallIcon size={13} />
                  </button>
                </div>

                <h4 id="drawer-fixture-title" className="pd-lighting__drawer-title">{activeHotspot.title}</h4>
                <p className="pd-lighting__drawer-purpose">{activeHotspot.purpose}</p>

                <div className="pd-lighting__drawer-specs">
                  <div className="pd-lighting__drawer-spec-item">
                    <span>Fixture</span>
                    <strong>{activeHotspot.fixture}</strong>
                  </div>
                  <div className="pd-lighting__drawer-spec-item">
                    <span>Color Temp</span>
                    <strong>{activeHotspot.cct}</strong>
                  </div>
                  <div className="pd-lighting__drawer-spec-item">
                    <span>Optics</span>
                    <strong>{activeHotspot.beam}</strong>
                  </div>
                  <div className="pd-lighting__drawer-spec-item">
                    <span>Output</span>
                    <strong>{activeHotspot.wattage}</strong>
                  </div>
                </div>
              </div>
            )}

            {/* Current Atmospheric HUD Tag */}
            <div className="pd-lighting__hud" aria-hidden="true">
              <span className="pd-lighting__hud-dot" />
              <span className="pd-lighting__hud-text">
                {timeMode === 'day' && 'High Noon • 5500K Solar Zenith'}
                {timeMode === 'twilight' && 'Golden Hour • 3200K Ambient Dusk'}
                {timeMode === 'night' && 'Nocturnal Illumination • 2700K Low-Glare LEDs'}
              </span>
            </div>
          </div>
        </div>

        {/* Photometric & Engineering Console */}
        <div className="pd-lighting__specs-grid animate-on-scroll">
          <div className="pd-lighting__spec-card">
            <div className="pd-lighting__spec-card-icon">
              <ShieldIcon size={22} />
            </div>
            <div className="pd-lighting__spec-card-content">
              <h5>Dark-Sky Certified</h5>
              <p>
                Zero upward light spill. Optics are strictly shielded downwards to eliminate light 
                pollution and preserve the tranquility of the nocturnal ecosystem.
              </p>
            </div>
          </div>

          <div className="pd-lighting__spec-card">
            <div className="pd-lighting__spec-card-icon">
              <DialIcon size={22} />
            </div>
            <div className="pd-lighting__spec-card-content">
              <h5>Astronomical Automation</h5>
              <p>
                Integrated DALI-2 microprocessor controller adjusts dimming dynamically according to 
                solar dusk calculations, seasonal sunset variations, and late-night scenes.
              </p>
            </div>
          </div>

          <div className="pd-lighting__spec-card">
            <div className="pd-lighting__spec-card-icon">
              <EnergyIcon size={22} />
            </div>
            <div className="pd-lighting__spec-card-content">
              <h5>Ultra-Low Energy (1.2 W/m²)</h5>
              <p>
                100% solid-state low-voltage architecture. Operates safely around water elements 
                with minimal thermal emission and extended 50,000-hour diode life.
              </p>
            </div>
          </div>

          <div className="pd-lighting__spec-card">
            <div className="pd-lighting__spec-card-icon">
              <BulbIcon size={22} />
            </div>
            <div className="pd-lighting__spec-card-content">
              <h5>Curated 2700K / 3000K CCT</h5>
              <p>
                Dual color temperatures: warm 2700K highlights living foliage and trunks with high CRI (&gt;92), 
                while 3000K defines crisp architectural masonry and steps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
