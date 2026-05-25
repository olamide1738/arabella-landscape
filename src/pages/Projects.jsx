import { useState, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { PROJECTS, FILTERS } from '../data/projects'

const ProjectsMap = lazy(() => import('../components/ProjectsMap'))

const PAGE_SIZE = 9

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Projects() {
  const [active, setActive]   = useState('All')
  const [search, setSearch]   = useState('')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [viewMode, setViewMode] = useState('grid')
  const sectionRef = useScrollAnimation()

  const filtered = PROJECTS
    .filter(p => active === 'All' || p.category === active)
    .filter(p => {
      if (!search.trim()) return true
      const q = search.toLowerCase()
      return p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q)
    })
  const shown    = filtered.slice(0, visible)
  const hasMore  = visible < filtered.length

  const handleFilter = (f) => {
    setActive(f)
    setVisible(PAGE_SIZE)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setVisible(PAGE_SIZE)
  }

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Projects — Arabella Landscape Limited</title>
        <meta name="description" content="Browse 200+ completed landscape projects across Nigeria — residential gardens, corporate campuses, public parks, and landmark public spaces." />
        <meta property="og:title" content="Our Projects — Arabella Landscape Limited" />
        <meta property="og:description" content="From the Abuja City Gate to Lekki Coastal Park — explore Arabella's portfolio of landmark landscapes." />
        <meta property="og:image" content="/images/abuja-gate-4.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Page Hero ── */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Our Work</p>
          <h1>Our Projects</h1>
          <p>Over 200 completed projects since 1990 — private homes, corporate offices, hotels, retail centres, parks, and public spaces across Nigeria.</p>

          <div className="projects-hero-stats">
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '35+',  label: 'Years in Practice'  },
              { number: '7',    label: 'Sectors Covered'    },
              { number: 'BALI', label: 'Registered Member'  },
            ].map(({ number, label }) => (
              <div key={label} className="projects-hero-stat">
                <span className="projects-hero-stat__number">{number}</span>
                <span className="projects-hero-stat__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Grid ── */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">

          {/* Search bar + view toggle */}
          <div className="projects-search-row">
            <div className="projects-search-bar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="projects-search-bar__icon"
                aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={handleSearch}
                placeholder="Search by name or location…"
                className="projects-search-bar__input"
                aria-label="Search projects"
              />
              {search && (
                <button
                  className="projects-search-bar__clear"
                  onClick={() => { setSearch(''); setVisible(PAGE_SIZE) }}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <div className="projects-view-toggle" role="group" aria-label="View mode">
              <button
                className={`projects-view-toggle__btn${viewMode === 'grid' ? ' active' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
                title="Grid view"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                  <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                </svg>
              </button>
              <button
                className={`projects-view-toggle__btn${viewMode === 'map' ? ' active' : ''}`}
                onClick={() => setViewMode('map')}
                aria-label="Map view"
                title="Map view"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                  <line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Filter tabs */}
          <div className="filter-tabs">
            {FILTERS.map(f => {
              const count = f === 'All'
                ? PROJECTS.length
                : PROJECTS.filter(p => p.category === f).length
              return (
                <button
                  key={f}
                  className={`filter-tab${active === f ? ' active' : ''}`}
                  onClick={() => handleFilter(f)}
                >
                  {f}
                  <span className="filter-tab__count">{count}</span>
                </button>
              )
            })}
          </div>

          {/* Map view */}
          {viewMode === 'map' && (
            <Suspense fallback={<div className="projects-map-loading">Loading map…</div>}>
              <ProjectsMap projects={filtered} />
            </Suspense>
          )}

          {/* Count line */}
          {viewMode === 'grid' && (
            <p className="projects-count">
              Showing <strong>{shown.length}</strong> of <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
              {active !== 'All' && <> in <strong>{active}</strong></>}
              {search && <> matching <strong>"{search}"</strong></>}
            </p>
          )}

          {/* Grid */}
          {viewMode === 'grid' && shown.length > 0 ? (
            <div className="projects-grid stagger-children">
              {shown.map((project) => (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className="project-card animate-on-scroll"
                  aria-label={`View ${project.name}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="project-card__image">
                    <div className="project-card__image-inner">
                      <img
                        src={project.image}
                        alt={project.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,10,5,0.5) 0%, transparent 55%)',
                      }} />
                    </div>
                    <span className="project-card__year">{project.year}</span>
                    <span className="project-card__tag">{project.category}</span>
                  </div>
                  <div className="project-card__body">
                    <p className="project-card__name">{project.name}</p>
                    <p className="project-card__location">
                      <PinIcon />
                      {project.location}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : viewMode === 'grid' ? (
            <p style={{ textAlign: 'center', color: 'var(--on-surface-variant)', padding: '4rem 0' }}>
              No projects in this category yet.
            </p>
          ) : null}

          {/* Load More */}
          {viewMode === 'grid' && hasMore && (
            <div className="load-more-wrap">
              <button
                className="btn btn-secondary"
                onClick={() => setVisible(v => v + PAGE_SIZE)}
              >
                Load More Projects
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <p className="load-more-progress">
                {shown.length} of {filtered.length} shown
                {filtered.length - shown.length > 0 && ` — ${filtered.length - shown.length} more`}
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  )
}
