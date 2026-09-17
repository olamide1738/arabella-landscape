import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import heroImg from '../assets/hero-plant.jpg'
import aboutImg from '../assets/about-story.jpg'
import HeroSlider from '../components/HeroSlider'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'
import { MARKETS } from '../data/markets'
import { getManagedProjects } from '../lib/insforge'

const SERVICES = [
  {
    slug: 'design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <line x1="12" y1="7" x2="12" y2="10" />
        <path d="m4.93 19 4.24-7.24a2 2 0 0 1 1.76-1h2.14a2 2 0 0 1 1.76 1L19.07 19" />
        <line x1="7.05" y1="15.5" x2="16.95" y2="15.5" />
      </svg>
    ),
    title: 'Design',
    text: 'Every project begins with proper site analysis and listening. We produce concept drawings, planting schedules, 3D visuals, and full construction packages — the kind of documentation that lets a contractor build exactly what was designed, not interpret it.',
  },
  {
    slug: 'construction',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
        <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
        <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
      </svg>
    ),
    title: 'Construction',
    text: 'We build what we design — and we build it to last. Earthworks, drainage, hard landscaping, planting, irrigation, lighting, and structures, executed on programme and without shortcuts. One team from first cut to final handover.',
  },
  {
    slug: 'maintenance',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    title: 'Maintenance',
    text: 'A landscape is only as good as the care it receives after handover. Our grounds management teams handle everything from weekly lawn care and pruning to irrigation servicing, seasonal planting, and annual tree inspections — on a programme that suits your site.',
  },
  {
    slug: 'farm',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
      </svg>
    ),
    title: 'Farm',
    text: 'We grow what we plant. Our nursery propagates Nigerian native and tropical species to the exact sizes and specifications our projects require — ensuring quality, availability, and provenance that the open market cannot reliably provide. Surplus stock is available for direct purchase.',
  },
]

const TESTIMONIALS = [
  {
    quote: "Arabella understood the brief immediately. They came back with a design that was better than what we had imagined, and they built it exactly as drawn. That doesn't happen often.",
    author: "Facilities Director",
    role: "Stanbic IBTC Head Office",
    project: "Stanbic IBTC, Victoria Island",
    city: "Lagos",
  },
  {
    quote: "What stood out was how practical they were. Every planting choice, every paving material — they could explain why it would work in our specific context. That gave us a lot of confidence.",
    author: "Property Manager",
    role: "Commercial Client",
    project: "GTBank HNI Branch",
    city: "Ikoyi, Lagos",
  },
  {
    quote: "The park has become something people actually use. It's not just decorative — it's well thought-out, well planted, and it holds up. Arabella clearly know their plants and their sites.",
    author: "Estate Director",
    role: "Urban Development Client",
    project: "Muri Okunola Park",
    city: "Victoria Island",
  },
  {
    quote: "They were honest about what would and wouldn't work — which is exactly what you want from a consultant. The end result speaks for itself. Guests mention the grounds constantly.",
    author: "General Manager",
    role: "Hospitality Client",
    project: "Southern Sun Hotel",
    city: "Ikoyi, Lagos",
  },
  {
    quote: "Arabella have been our landscape partner for years. They know how to work on occupied sites without disrupting operations, and the quality is consistent every time.",
    author: "Head of Facilities",
    role: "Corporate Client",
    project: "The George Hotel",
    city: "Ikoyi, Lagos",
  },
  {
    quote: "The mall landscaping had to work commercially — low maintenance, durable, attractive to foot traffic. Arabella delivered exactly that. We've had zero issues since handover.",
    author: "Development Manager",
    role: "Retail Client",
    project: "Owerri Mall",
    city: "Owerri",
  },
]

const PORTFOLIO_ITEMS = [
  { slug: 'asaba-country-home', category: 'Residential', name: 'Asaba Country Home', image: '/images/asaba-country-home-1.jpg', location: 'Asaba, Delta State' },
  { slug: 'gtb-bayo-kuku', category: 'Commercial', name: 'GTBank HNI Branch', image: '/images/gtb-bayo-kuku-1.jpg', location: 'Bayo Kuku, Ikoyi, Lagos' },
  { slug: 'muri-okunola-park', category: 'Public Space', name: 'Muri Okunola Park', image: '/images/muri-okunola-2.jpg', location: 'Victoria Island, Lagos' },
  { slug: 'the-george', category: 'Commercial', name: 'The George Hotel', image: '/images/the-george-1.jpg', location: 'Ikoyi, Lagos' },
  { slug: 'stanbic-ibtc', category: 'Commercial', name: 'Stanbic IBTC Head Office', image: '/images/stanbic-ibtc-1.jpg', location: 'Victoria Island, Lagos' },
  { slug: 'abuja-city-gate', category: 'Public Space', name: 'Abuja City Gate', image: '/images/abuja-gate-4.png', location: 'Abuja, FCT' },
]

/* Geometric placeholder — no emojis */
function GreenPlaceholder({ style }) {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #002d1a 0%, #004E30 45%, #006038 100%)',
      position: 'relative',
      overflow: 'hidden',
      ...style,
    }}>
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.4,
        background: 'radial-gradient(ellipse at 70% 30%, rgba(223,219,0,0.08) 0%, transparent 60%)'
      }} />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}
        viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <circle cx="200" cy="200" r="160" fill="none" stroke="#DFDB00" strokeWidth="1" />
        <circle cx="200" cy="200" r="110" fill="none" stroke="#DFDB00" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="#DFDB00" strokeWidth="0.5" />
        <line x1="40" y1="200" x2="360" y2="200" stroke="#DFDB00" strokeWidth="0.5" />
        <line x1="200" y1="40" x2="200" y2="360" stroke="#DFDB00" strokeWidth="0.5" />
      </svg>
      <div style={{
        position: 'absolute', bottom: '2rem', left: '2rem',
        fontFamily: 'var(--font-display)',
        fontSize: '12px', fontStyle: 'italic',
        letterSpacing: '0.12em', color: 'rgba(223,219,0,0.5)',
        textTransform: 'uppercase',
      }}>
        Est. 1990
      </div>
    </div>
  )
}

/* Check icon for about-features */
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function StatNumber({ value, suffix = '' }) {
  const ref = useCountUp(value)
  return <span ref={ref}>0</span>
}

export default function Home() {
  const sectionRef = useScrollAnimation()
  const [slide, setSlide] = useState(0)
  const [portfolioItems, setPortfolioItems] = useState(() => getManagedProjects().slice(0, 6))

  useEffect(() => {
    const handleUpdate = () => setPortfolioItems(getManagedProjects().slice(0, 6))
    window.addEventListener('arabella-projects-updated', handleUpdate)
    return () => window.removeEventListener('arabella-projects-updated', handleUpdate)
  }, [])

  // Responsive visible count
  const getVisible = () => {
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }
  const [visibleCount, setVisibleCount] = useState(getVisible)
  useEffect(() => {
    const onResize = () => setVisibleCount(getVisible())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Chunk testimonials into pages
  const pages = []
  for (let i = 0; i < TESTIMONIALS.length; i += visibleCount) {
    pages.push(TESTIMONIALS.slice(i, i + visibleCount))
  }
  const pageCount = pages.length

  // Reset to first page when visible count changes
  useEffect(() => { setSlide(0) }, [visibleCount])

  // Auto-advance every 5 s
  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % pageCount), 5000)
    return () => clearInterval(id)
  }, [pageCount])

  const prev = () => setSlide(s => (s - 1 + pageCount) % pageCount)
  const next = () => setSlide(s => (s + 1) % pageCount)

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>Arabella Landscape Limited — Shaping Spaces. Transforming Lives.</title>
        <meta name="description" content="Nigeria's leading landscape architecture and site development firm. Over 200 completed projects across Lagos, Abuja, and Port Harcourt." />
        <meta property="og:title" content="Arabella Landscape Limited" />
        <meta property="og:description" content="Premium landscape architecture and site development across Nigeria. Exterior, interior, recreational, and public realm projects." />
        <meta property="og:image" content="/assets/images/hero.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── Services ── */}
      <section className="services-section section">
        <div className="container">
          <p className="section-label animate-on-scroll">What We Do</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)', maxWidth: '480px' }}>
              Services Built Around<br /><em>Your Vision</em>
            </h2>
            <Link to="/services" className="btn btn-secondary btn-sm animate-on-scroll">All Services</Link>
          </div>

          <div className="services-grid stagger-children">
            {SERVICES.map(({ slug, icon, title, text }, i) => (
              <div key={title} className="service-card animate-on-scroll"
                data-num={String(i + 1).padStart(2, '0')}>
                <div className="service-card__icon">{icon}</div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__text">{text}</p>
                <div className="service-card__divider" aria-hidden="true" />
                <Link to={`/services/${slug}`} className="service-card__link">
                  Learn more
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="wws-section">
        <div className="container">
          <div className="wws-header">
            <div>
              <p className="section-label section-label--light animate-on-scroll">Who We Serve</p>
              <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--pure-white)' }}>
                Expertise Tailored<br /><em>to Your Sector</em>
              </h2>
            </div>
            <Link to="/markets" className="btn btn-secondary btn-sm animate-on-scroll">
              All Markets
            </Link>
          </div>
          <div className="wws-grid">
            {MARKETS.map(market => (
              <Link
                key={market.slug}
                to={`/markets/${market.slug}`}
                className="wws-card"
              >
                <p className="wws-card__label">{market.label}</p>
                <p className="wws-card__name">{market.name}</p>
                <p className="wws-card__tagline">{market.tagline}</p>
                <div className="wws-card__arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap animate-on-scroll animate-left">
              <img
                src={aboutImg}
                alt="Garden trellis with tropical planting — Arabella Landscape project"
                style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--rounded-lg)', objectFit: 'cover', objectPosition: 'center' }}
              />
              <div className="about-badge">
                <div className="about-badge__number">15+</div>
                <div className="about-badge__text">Years of Excellence</div>
              </div>
            </div>

            <div className="animate-on-scroll animate-right">
              <p className="section-label">Our Story</p>
              <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: '1.25rem' }}>
                Where Design<br /><em>Meets Nature</em>
              </h2>
              <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: '1rem' }}>
                Established in Lagos in 1990, Arabella Landscape Limited has spent over 35 years building some of Nigeria's most recognised gardens, parks, and commercial landscapes — from private Ikoyi villas to urban public spaces.
              </p>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                We combine a highly creative design process with rigorous on-site execution. Every project gets the same attention: careful listening at the start, considered design in the middle, and real accountability on site. We think about maintenance from day one — species selection, long-term durability, practical upkeep — because a landscape that can't be sustained isn't really a solution.
              </p>

              <div className="about-features">
                {[
                  { title: 'Est. 1990', text: 'Over 35 years in the Nigerian landscape industry' },
                  { title: 'BALI Registered', text: 'Members of the British Association of Landscape Industries' },
                  { title: 'Design to Handover', text: 'We carry the project from first sketch through to final planting' },
                  { title: 'Maintenance-Minded', text: 'Every design considers long-term upkeep from the outset' },
                ].map(({ title, text }) => (
                  <div key={title} className="about-feature">
                    <div className="about-feature__icon"><CheckIcon /></div>
                    <div>
                      <p className="about-feature__title">{title}</p>
                      <p className="about-feature__text">{text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/about" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: 200, suffix: '+', label: 'Projects Completed' },
              { value: 35, suffix: '+', label: 'Years in Practice' },
              { value: 50, suffix: '+', label: 'Expert Team Members' },
              { value: 7,  suffix: '',  label: 'Sectors Served' },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="stat animate-on-scroll">
                <div className="stat__number"><StatNumber value={value} />{suffix}</div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ── */}
      <section className="portfolio-section section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <p className="section-label animate-on-scroll">Our Work</p>
              <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
                Landmark Projects
              </h2>
            </div>
            <Link to="/projects" className="btn btn-secondary btn-sm animate-on-scroll">All Projects</Link>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, i) => (
              <Link
                key={item.name}
                to={`/projects/${item.slug}`}
                className={`portfolio-item ${i === 0 ? 'portfolio-grid__item--featured' : 'portfolio-grid__item'} animate-on-scroll`}
                style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start' }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="portfolio-item__image"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="portfolio-item__overlay">
                  <p className="portfolio-item__category">{item.category}</p>
                  <p className="portfolio-item__name">{item.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="process-section section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
            <p className="section-label animate-on-scroll" style={{ justifyContent: 'center' }}>How We Work</p>
            <h2 className="headline-lg animate-on-scroll" style={{ marginBottom: '0.75rem' }}>
              Our Design Process
            </h2>
            <p className="process-subtitle animate-on-scroll">
              From initial site audit to lifelong landscape maintenance, our structured 4-step workflow guarantees excellence at every phase.
            </p>
          </div>

          <div className="process-grid stagger-children">
            {[
              {
                n: '01',
                title: 'Listen & Audit',
                tag: 'Site Visit & Brief',
                text: 'We begin with a comprehensive site audit, client interviews, soil analysis, and an honest assessment of site topography and microclimate.',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                    <path d="m9 14 2 2 4-4"/>
                  </svg>
                )
              },
              {
                n: '02',
                title: 'Design & Specify',
                tag: 'CAD Plans & Specs',
                text: 'Concept master plans, 3D visualizations, precise planting schedules, hardscape specifications, and construction documentation ready for execution.',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="2" />
                    <line x1="12" y1="7" x2="12" y2="10" />
                    <path d="m4.93 19 4.24-7.24a2 2 0 0 1 1.76-1h2.14a2 2 0 0 1 1.76 1L19.07 19" />
                    <line x1="7.05" y1="15.5" x2="16.95" y2="15.5" />
                  </svg>
                )
              },
              {
                n: '03',
                title: 'Build & Construct',
                tag: 'Turnkey Execution',
                text: 'Our dedicated in-house landscape engineers and horticultural teams execute on site. We do not subcontract and disappear.',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z" />
                    <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
                    <path d="M4 15v-3a8 8 0 0 1 16 0v3" />
                  </svg>
                )
              },
              {
                n: '04',
                title: 'Maintain & Nurture',
                tag: 'Scheduled Care',
                text: 'Proactive seasonal pruning, automated irrigation monitoring, organic fertilization, and nursery support to keep your landscape flourishing.',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 20h10" />
                    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
                    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
                    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
                  </svg>
                )
              }
            ].map(({ n, title, tag, text, icon }) => (
              <div key={n} className="process-card animate-on-scroll">
                <div className="process-card__header">
                  <span className="process-card__num">{n}</span>
                  <div className="process-card__icon">{icon}</div>
                </div>
                <h3 className="process-card__title">{title}</h3>
                <p className="process-card__text">{text}</p>
                <div className="process-card__footer">
                  <span className="process-card__tag">✦ {tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="testimonials-header">
            <div>
              <p className="section-label animate-on-scroll">Client Stories</p>
              <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
                What Our Clients Say
              </h2>
            </div>
            <p className="testimonials-header__sub animate-on-scroll">
              Over 200 projects. Hundreds of satisfied clients. A few of their stories.
            </p>
          </div>

          <div className="tcarousel">
            {/* Cards track — one slide per page */}
            <div className="tcarousel__track" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {pages.map((page, pageIdx) => (
                <div key={pageIdx} className="tcarousel__slide">
                  <div className="tcarousel__page" style={{ gridTemplateColumns: `repeat(${page.length}, 1fr)` }}>
                    {page.map(({ quote, author, role, project, city }) => {
                      const initials = author.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('')
                      return (
                        <div key={author} className="tcard">
                          <div className="tcard__stars" aria-label="5 stars">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} viewBox="0 0 20 20" fill="currentColor" width="18" height="18" aria-hidden="true">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                              </svg>
                            ))}
                          </div>
                          <blockquote className="tcard__quote">"{quote}"</blockquote>
                          <div className="tcard__footer">
                            <div className="tcard__avatar" aria-hidden="true">{initials}</div>
                            <div>
                              <p className="tcard__author">{author}</p>
                              <p className="tcard__role">{role} — {city}</p>
                            </div>
                          </div>
                          <div className="tcard__project">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                              strokeLinecap="round" strokeLinejoin="round" width="12" height="12" aria-hidden="true">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                            </svg>
                            {project}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button className="tcarousel__arrow tcarousel__arrow--prev" onClick={prev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button className="tcarousel__arrow tcarousel__arrow--next" onClick={next} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <polyline points="9 6 15 12 9 18"/>
              </svg>
            </button>

            {/* Dots — one per page */}
            <div className="tcarousel__dots">
              {pages.map((_, i) => (
                <button key={i} className={`tcarousel__dot${i === slide ? ' active' : ''}`}
                  onClick={() => setSlide(i)} aria-label={`Page ${i + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Start a Conversation</p>
          <h2>Tell Us About<br /><em>Your Project</em></h2>
          <p>We work across residential, commercial, hospitality, retail, institutional, and public realm projects. Send us a brief — or just a rough idea — and we'll take it from there.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Your Project
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
            <Link to="/projects" className="btn btn-white btn-lg">View Projects</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
