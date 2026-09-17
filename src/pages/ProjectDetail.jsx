import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getRelated } from '../data/projects'
import { getManagedProjects } from '../lib/insforge'
import BotanicalPalette from '../components/BotanicalPalette'
import ArchitecturalLighting from '../components/ArchitecturalLighting'

/* ── Icons ── */
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 14, height: 14, flexShrink: 0 }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 14, height: 14, flexShrink: 0 }}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 16, height: 16, flexShrink: 0 }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 22, height: 22 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function ChevronIcon({ dir }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ width: 28, height: 28, transform: dir === 'left' ? 'none' : 'rotate(180deg)' }}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

/* ── Gallery Lightbox ── */
function Lightbox({ images, startIndex, onClose }) {
  const [idx, setIdx] = useState(startIndex)
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') onClose()
  }

  return (
    <div className="pd-lightbox" onClick={onClose} role="dialog" aria-modal="true"
      tabIndex={-1} onKeyDown={handleKey} ref={el => el?.focus()}>
      <button className="pd-lightbox__close" onClick={onClose} aria-label="Close">
        <CloseIcon />
      </button>

      <div className="pd-lightbox__inner" onClick={e => e.stopPropagation()}>
        <button className="pd-lightbox__nav pd-lightbox__nav--prev" onClick={prev} aria-label="Previous image">
          <ChevronIcon dir="left" />
        </button>

        <img
          src={images[idx]}
          alt={`Project image ${idx + 1} of ${images.length}`}
          className="pd-lightbox__img"
        />

        <button className="pd-lightbox__nav pd-lightbox__nav--next" onClick={next} aria-label="Next image">
          <ChevronIcon dir="right" />
        </button>
      </div>

      <p className="pd-lightbox__counter">{idx + 1} / {images.length}</p>
    </div>
  )
}

/* ── Main component ── */
export default function ProjectDetail() {
  const { slug } = useParams()
  const sectionRef = useScrollAnimation()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const allProjects = getManagedProjects()
  const project = allProjects.find(p => p.slug === slug)
  if (!project) return <Navigate to="/projects" replace />

  const related = getRelated(slug, 3)
  const galleryImages = project.images?.length > 1 ? project.images : null

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>{project.name} — Arabella Landscape Limited</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.name} — Arabella Landscape`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Hero ── */}
      <section className="pd-hero">
        <div className="pd-hero__image" style={{ backgroundImage: `url(${project.image})` }} aria-hidden="true" />
        <div className="pd-hero__overlay" aria-hidden="true" />
        <div className="pd-hero__content container">
          <nav className="pd-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link to="/projects">Projects</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.name}</span>
          </nav>
          <span className="pd-hero__tag">{project.category}</span>
          <h1 className="pd-hero__title">{project.name}</h1>
          <p className="pd-hero__location">
            <PinIcon />
            {project.location} · {project.year}
          </p>
        </div>
      </section>

      {/* ── Meta strip ── */}
      <section className="pd-meta-strip">
        <div className="container">
          <div className="pd-meta-row">
            {project.area && (
              <div className="pd-meta-item">
                <span className="pd-meta-item__label">Area</span>
                <span className="pd-meta-item__value">{project.area}</span>
              </div>
            )}
            {project.client && (
              <div className="pd-meta-item">
                <span className="pd-meta-item__label">Client</span>
                <span className="pd-meta-item__value">{project.client}</span>
              </div>
            )}
            <div className="pd-meta-item">
              <span className="pd-meta-item__label">Location</span>
              <span className="pd-meta-item__value">{project.location}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-item__label">Year</span>
              <span className="pd-meta-item__value">{project.year}</span>
            </div>
            <div className="pd-meta-item">
              <span className="pd-meta-item__label">Category</span>
              <span className="pd-meta-item__value">{project.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Statement / The Brief ── */}
      <section className="pd-statement">
        <div className="container">
          <div className="pd-statement__grid animate-on-scroll animate-left">
            <div>
              <p className="pd-statement__label">The Brief</p>
              <p className="pd-statement__text">{project.description}</p>
            </div>
            {project.highlights && (
              <div className="pd-statement__highlights">
                {project.highlights.map((h, i) => (
                  <div key={i} className="pd-highlight">
                    <span className="pd-highlight__num">0{i + 1}</span>
                    <span className="pd-highlight__text">{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Approach + Services ── */}
      <section className="section pd-approach">
        <div className="container">
          <div className="pd-approach-grid">
            <div className="animate-on-scroll animate-left">
              <p className="section-label">Our Approach</p>
              <h2 style={{ marginBottom: '1.75rem' }}>How We Delivered It</h2>
              <p className="pd-detail">{project.detail}</p>
            </div>

            {project.services?.length > 0 && (
              <div className="animate-on-scroll animate-right">
                <div className="pd-services-box">
                  <h3 className="pd-services-box__title">Services Delivered</h3>
                  <ul className="pd-services-list">
                    {project.services.map(s => (
                      <li key={s} className="pd-services-list__item">
                        <span className="pd-services-list__check" aria-hidden="true">
                          <CheckIcon />
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="pd-services-box__divider" />

                  <div className="pd-services-box__meta">
                    {project.area && (
                      <div className="pd-services-box__meta-item">
                        <span>Area</span>
                        <strong>{project.area}</strong>
                      </div>
                    )}
                    <div className="pd-services-box__meta-item">
                      <span>Completed</span>
                      <strong>{project.year}</strong>
                    </div>
                    {project.client && (
                      <div className="pd-services-box__meta-item">
                        <span>Client</span>
                        <strong>{project.client}</strong>
                      </div>
                    )}
                  </div>

                  <Link to="/contact" className="btn btn-primary"
                    style={{ marginTop: '2rem', width: '100%', justifyContent: 'center' }}>
                    Start a Similar Project
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Botanical & Flora Palette ── */}
      {project.plants && project.plants.length > 0 && (
        <BotanicalPalette plants={project.plants} />
      )}

      {/* ── Architectural Lighting & Atmosphere Switch ── */}
      <ArchitecturalLighting project={project} />

      {/* ── Before / After Slider ── */}
      {project.beforeAfter && (
        <section className="section pd-before-after">
          <div className="container">
            <div className="pd-before-after__header animate-on-scroll">
              <p className="section-label">Design vs Reality</p>
              <h2>Before &amp; After</h2>
              <p className="pd-before-after__hint">Drag the handle to compare the design render with the completed build.</p>
            </div>

            <div className="pd-before-after__slider animate-on-scroll">
              <ReactCompareSlider
                itemOne={
                  <ReactCompareSliderImage
                    src={project.beforeAfter.before}
                    alt={project.beforeAfter.beforeLabel ?? 'Design Render'}
                    style={{ objectFit: 'cover' }}
                  />
                }
                itemTwo={
                  <ReactCompareSliderImage
                    src={project.beforeAfter.after}
                    alt={project.beforeAfter.afterLabel ?? 'Completed'}
                    style={{ objectFit: 'cover' }}
                  />
                }
                style={{ borderRadius: 'var(--rounded-lg)', overflow: 'hidden', aspectRatio: '16/9' }}
              />

              {/* Labels */}
              <div className="pd-before-after__labels" aria-hidden="true">
                <span className="pd-ba-label pd-ba-label--before">
                  {project.beforeAfter.beforeLabel ?? 'Design Render'}
                </span>
                <span className="pd-ba-label pd-ba-label--after">
                  {project.beforeAfter.afterLabel ?? 'Completed'}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ── */}
      {galleryImages && (
        <section className="section pd-gallery-section">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <p className="section-label animate-on-scroll">Project Photography</p>
                <h2 className="animate-on-scroll">Gallery</h2>
              </div>
              <p className="animate-on-scroll" style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>
                {galleryImages.length} images — click to expand
              </p>
            </div>

            <div className="pd-gallery">
              {galleryImages.map((img, i) => (
                <button
                  key={img + i}
                  className={`pd-gallery__item animate-on-scroll${i === 0 ? ' pd-gallery__item--featured' : ''}`}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`View image ${i + 1}`}
                >
                  <img src={img} alt={`${project.name} — image ${i + 1}`} />
                  <div className="pd-gallery__item-overlay" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      style={{ width: 28, height: 28, color: '#fff' }}>
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related ── */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--ivory)' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div>
                <p className="section-label animate-on-scroll">Keep Exploring</p>
                <h2 className="animate-on-scroll">Related Projects</h2>
              </div>
              <Link to="/projects" className="btn btn-secondary btn-sm animate-on-scroll">All Projects</Link>
            </div>

            <div className="projects-grid stagger-children">
              {related.map(p => (
                <Link
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  className="project-card animate-on-scroll"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="project-card__image">
                    <div className="project-card__image-inner">
                      <img src={p.image} alt={p.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(to top, rgba(0,10,5,0.5) 0%, transparent 55%)',
                      }} />
                    </div>
                    <span className="project-card__year">{p.year}</span>
                    <span className="project-card__tag">{p.category}</span>
                  </div>
                  <div className="project-card__body">
                    <p className="project-card__name">{p.name}</p>
                    <p className="project-card__location"><PinIcon />{p.location}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Ready to Begin?</p>
          <h2>Love What You See?<br /><em>Let's Talk</em></h2>
          <p>Tell us about your project and we'll put together a tailored proposal — completely free of charge.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-consultation btn-lg">
              Get a Consultation <ArrowIcon />
            </Link>
            <Link to="/projects" className="btn btn-white btn-lg">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── Lightbox overlay ── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

    </main>
  )
}
