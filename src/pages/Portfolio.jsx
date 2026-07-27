import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FILTERS = ['All', 'Residential', 'Commercial', 'Recreational', 'Public Space']

const PROJECTS = [
  { category: 'Commercial', name: 'Meridian Corporate Campus', location: 'Abuja', year: '2024', color: '#1a4a2e', image: '/assets/images/project-meridian.png', description: 'A 4-hectare corporate landscape integrating formal gardens, productive planting, and outdoor meeting spaces for a Fortune 500 headquarters.' },
  { category: 'Residential', name: 'Maitama Garden Estate', location: 'Abuja', year: '2024', color: '#2d5016', image: '/assets/images/project-maitama.png', description: 'Luxury residential landscape for a 12-plot estate, featuring sculptural planting, infinity pool surrounds, and illuminated pathways.' },
  { category: 'Recreational', name: 'Lekki Coastal Park', location: 'Lagos', year: '2023', color: '#004E30', image: '/assets/images/project-lekki.png', description: 'A landmark public park stretching 2km along the Lekki coastline, with play zones, fitness trails, and native coastal planting.' },
  { category: 'Public Space', name: 'GRA Boulevard Revamp', location: 'Port Harcourt', year: '2023', color: '#1e6b3a', image: '/assets/images/project-gra.png', description: "Comprehensive redesign of the Government Residential Area's main boulevard with avenue tree planting, formal gardens, and public art." },
  { category: 'Residential', name: 'Banana Island Retreat', location: 'Lagos', year: '2023', color: '#0f3d1f', image: '/assets/images/project-banana.png', description: 'A secluded tropical retreat on Banana Island with cascading water features, a koi pond, and lush jungle planting.' },
  { category: 'Commercial', name: 'Transcorp Hotel Gardens', location: 'Abuja', year: '2022', color: '#003520', image: '/assets/images/project-transcorp.png', description: 'Complete landscaping of hotel grounds including arrival court, pool garden, and roof terrace for a 5-star property.' },
  { category: 'Recreational', name: 'Ikeja Junior Sports Complex', location: 'Lagos', year: '2022', color: '#005535', image: '/assets/images/project-ikeja.png', description: 'Multi-sport recreational facility with synthetic turf pitches, running tracks, and spectator landscaping for a community sports hub.' },
  { category: 'Public Space', name: 'National Arts Theatre Forecourt', location: 'Lagos', year: '2022', color: '#2a5f1c', image: '/assets/images/project-artstheatre.png', description: 'Revitalisation of the iconic National Arts Theatre forecourt with heritage-sensitive planting and event-ready hardscape.' },
  { category: 'Residential', name: 'Ikoyi Penthouse Terrace', location: 'Lagos', year: '2021', color: '#1a4020', image: '/assets/images/project-ikoyi.png', description: 'Elevated roof terrace transformation with container planting, pergola structures, and a miniature herb garden for a city-centre penthouse.' },
]

/* Geometric mark used inside portfolio tiles */
function TileMark() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.05 }}
      viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
      <circle cx="200" cy="140" r="110" fill="none" stroke="#DFDB00" strokeWidth="1" />
      <circle cx="200" cy="140" r="65" fill="none" stroke="#DFDB00" strokeWidth="0.5" />
      <line x1="0" y1="140" x2="400" y2="140" stroke="#DFDB00" strokeWidth="0.5" />
      <line x1="200" y1="0" x2="200" y2="280" stroke="#DFDB00" strokeWidth="0.5" />
    </svg>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const sectionRef = useScrollAnimation()

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === active)

  return (
    <main ref={sectionRef}>
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Our Work</p>
          <h1>Portfolio</h1>
          <p>Over 200 completed projects across Nigeria — from intimate gardens to landmark public spaces.</p>
        </div>
      </section>

      {/* ── Filtered Grid ── */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="filter-tabs">
            {FILTERS.map(f => (
              <button key={f} className={`filter-tab${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>
                {f}
              </button>
            ))}
          </div>

          <div className="portfolio-full-grid stagger-children">
            {filtered.map(project => (
              <button
                key={project.name}
                className="portfolio-item portfolio-full-grid__item animate-on-scroll"
                style={{ border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
                onClick={() => setLightbox(project)}
                aria-label={`View ${project.name}`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="portfolio-item__overlay" style={{ opacity: 1, background: 'linear-gradient(to top, rgba(0,30,15,0.85) 0%, rgba(0,30,15,0.1) 55%, transparent 100%)' }}>
                  <p className="portfolio-item__category">{project.category}</p>
                  <p className="portfolio-item__name">{project.name}</p>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--on-surface-variant)', padding: '4rem 0' }}>
              No projects found in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox open" onClick={() => setLightbox(null)}
          role="dialog" aria-modal="true" aria-label={lightbox.name}>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="18" height="18">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div style={{
              width: '70vw', maxWidth: '700px', height: '420px',
              borderRadius: 'var(--rounded)',
              position: 'relative', overflow: 'hidden',
            }}>
              <img
                src={lightbox.image}
                alt={lightbox.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,20,10,0.6) 0%, transparent 60%)',
              }} />
            </div>
            <div className="lightbox__info">
              <p className="portfolio-item__category">{lightbox.category} · {lightbox.location} · {lightbox.year}</p>
              <h3 className="lightbox__title">{lightbox.name}</h3>
              <p className="lightbox__description">{lightbox.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
