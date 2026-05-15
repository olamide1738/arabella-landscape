import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import heroImg from '../assets/hero.png'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Exterior Landscaping',
    text: 'Breathtaking outdoor environments crafted with precision — from residential gardens to large-scale commercial estates.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Interior Landscaping',
    text: 'Living walls, indoor planters, and biophilic installations that bring nature indoors and elevate your space.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Landscape Architecture',
    text: 'Holistic design solutions that harmonise aesthetic beauty with ecological responsibility and long-term sustainability.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Recreational Planning',
    text: 'Parks, playgrounds, sports courts, and leisure facilities designed for communities to thrive and connect.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Design-Build Services',
    text: 'End-to-end project delivery from concept and planning through full construction and installation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Site Development',
    text: 'Comprehensive earthworks, drainage, civil preparation, and infrastructure for new or existing sites.',
  },
]

const TESTIMONIALS = [
  {
    quote: "Arabella transformed our corporate campus into a living, breathing retreat. Every employee comments on how much the green spaces have lifted morale and productivity.",
    author: "Adaeze Okonkwo",
    role: "CEO, Meridian Holdings — Abuja",
  },
  {
    quote: "The team's attention to detail is extraordinary. They didn't just design a garden — they created an experience that feels completely at one with our home.",
    author: "Emeka & Chidinma Eze",
    role: "Residential Clients — Lagos",
  },
  {

    quote: "From concept to completion, Arabella delivered beyond our expectations. Our new public park has become the centrepiece of the entire neighbourhood.",
    author: "Arc. Babatunde Fashola",
    role: "Director of Urban Planning — Rivers State",
  },
]

const PORTFOLIO_ITEMS = [
  { slug: 'abuja-city-gate', category: 'Public Space', name: 'Abuja City Gate', image: '/images/abuja-gate-4.png' },
  { slug: 'meridian-corporate-campus', category: 'Commercial', name: 'Meridian Corporate Campus', image: '/images/abuja-gate-r1.jpg' },
  { slug: 'lekki-coastal-park', category: 'Recreational', name: 'Lekki Coastal Park', image: '/images/abuja-gate-3.png' },
  { slug: 'gra-boulevard-revamp', category: 'Public Space', name: 'GRA Boulevard Revamp', image: '/images/abuja-gate-2.png' },
  { slug: 'banana-island-retreat', category: 'Residential', name: 'Banana Island Retreat', image: '/images/abuja-gate-r3.jpg' },
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
        background: 'radial-gradient(ellipse at 70% 30%, rgba(215,223,54,0.08) 0%, transparent 60%)'
      }} />
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06 }}
        viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
        <circle cx="200" cy="200" r="160" fill="none" stroke="#D7DF36" strokeWidth="1" />
        <circle cx="200" cy="200" r="110" fill="none" stroke="#D7DF36" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="60" fill="none" stroke="#D7DF36" strokeWidth="0.5" />
        <line x1="40" y1="200" x2="360" y2="200" stroke="#D7DF36" strokeWidth="0.5" />
        <line x1="200" y1="40" x2="200" y2="360" stroke="#D7DF36" strokeWidth="0.5" />
      </svg>
      <div style={{
        position: 'absolute', bottom: '2rem', left: '2rem',
        fontFamily: 'var(--font-display)',
        fontSize: '12px', fontStyle: 'italic',
        letterSpacing: '0.12em', color: 'rgba(215,223,54,0.5)',
        textTransform: 'uppercase',
      }}>
        Est. 2010
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
  const heroRef = useRef(null)

  useEffect(() => {
    if (heroRef.current) heroRef.current.classList.add('hero-animate')
  }, [])

  const prevSlide = () => setSlide(s => (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const nextSlide = () => setSlide(s => (s + 1) % TESTIMONIALS.length)

  return (
    <main ref={sectionRef}>
      {/* ── Hero ── */}
      <section className="hero-section">
        <div className="hero-section__bg" style={{ backgroundImage: `url(${heroImg})` }} aria-hidden="true" />
        <div className="hero-section__overlay" aria-hidden="true" />
        <div className="hero__deco" aria-hidden="true" />

        <div className="container" ref={heroRef}>
          <div className="hero-section__content hero-animate">
            <p className="hero__label">Premium Landscape Architecture</p>
            <h1 className="hero__title">
              Shaping Spaces.<br />
              <span>Transforming Lives.</span>
            </h1>
            <p className="hero__subtitle">
              Arabella Landscape Limited crafts extraordinary outdoor and indoor environments that inspire, connect, and endure — across Nigeria and beyond.
            </p>
            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary btn-lg">
                View Our Work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__scroll-indicator" aria-hidden="true">Scroll</div>
      </section>

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
            {SERVICES.map(({ icon, title, text }, i) => (
              <div key={title} className="service-card animate-on-scroll"
                data-num={String(i + 1).padStart(2, '0')}>
                <div className="service-card__icon">{icon}</div>
                <h3 className="service-card__title">{title}</h3>
                <p className="service-card__text">{text}</p>
                <div className="service-card__divider" aria-hidden="true" />
                <Link to="/services" className="service-card__link">
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

      {/* ── About ── */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrap animate-on-scroll animate-left">
              <img
                src="/assets/images/about-story.png"
                alt="Lush residential garden designed by Arabella Landscape"
                style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--rounded-lg)', objectFit: 'cover' }}
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
                Founded in Lagos over a decade ago, Arabella Landscape Limited has grown into Nigeria's leading landscape architecture and site development firm. We believe great spaces shape great lives.
              </p>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                From intimate residential gardens to landmark public parks, our multidisciplinary team brings together horticultural science, environmental design, and construction expertise to deliver spaces that endure.
              </p>

              <div className="about-features">
                {[
                  { title: 'Expert Team', text: '50+ landscape architects, designers, and engineers' },
                  { title: 'Sustainable Design', text: 'Eco-conscious materials and native plant palettes' },
                  { title: 'Award-Winning', text: 'Recognised by the NIALA and Green City Awards' },
                  { title: 'Full-Service', text: 'From concept through construction and maintenance' },
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
              { value: 15, suffix: '+', label: 'Years of Experience' },
              { value: 50, suffix: '+', label: 'Expert Team Members' },
              { value: 98, suffix: '%', label: 'Client Satisfaction' },
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
            {PORTFOLIO_ITEMS.map((item, i) => (
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
          <div style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>How We Work</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Our Design Process
            </h2>
          </div>
          <div className="process-steps stagger-children">
            {[
              { n: '01', title: 'Discover', text: 'We listen deeply to understand your vision, site conditions, and project goals.' },
              { n: '02', title: 'Design', text: 'Our architects craft detailed concept plans, 3D renderings, and material specifications.' },
              { n: '03', title: 'Build', text: 'Our skilled construction teams execute with precision, quality, and care.' },
              { n: '04', title: 'Nurture', text: 'Ongoing maintenance programmes keep your landscape thriving season after season.' },
            ].map(({ n, title, text }) => (
              <div key={n} className="process-step animate-on-scroll">
                <div className="process-step__number">{n}</div>
                <h3 className="process-step__title">{title}</h3>
                <p className="process-step__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>Client Stories</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="testimonial-carousel">
            <div className="testimonial-carousel__track" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {TESTIMONIALS.map(({ quote, author, role }) => (
                <div key={author} className="testimonial-carousel__slide">
                  <div className="testimonial">
                    <p className="testimonial__quote">{quote}</p>
                    <p className="testimonial__author">{author}</p>
                    <p className="testimonial__role">{role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-carousel__dots">
              {TESTIMONIALS.map((_, i) => (
                <button key={i} className={`testimonial-carousel__dot${i === slide ? ' active' : ''}`}
                  onClick={() => setSlide(i)} aria-label={`Testimonial ${i + 1}`} />
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '1.5rem' }}>
              <button className="btn btn-secondary btn-sm" onClick={prevSlide} aria-label="Previous">←</button>
              <button className="btn btn-secondary btn-sm" onClick={nextSlide} aria-label="Next">→</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Ready to Begin?</p>
          <h2>Let's Create Something<br /><em>Beautiful</em></h2>
          <p>Tell us about your project and we'll put together a tailored proposal — completely free of charge.</p>
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
