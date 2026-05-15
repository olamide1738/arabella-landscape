import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'

const TEAM = [
  { name: 'Adaeze Nwosu',      role: 'Founder & CEO',                    color: '#003d22', bio: 'Registered landscape architect with over 20 years of practice. Founded Arabella in Lagos in 2010 with a belief that great green spaces transform lives.' },
  { name: 'Chukwuemeka Obi',   role: 'Head of Landscape Architecture',   color: '#005535', bio: "Leads Arabella's masterplanning and design team. Specialises in large-scale public realm and urban regeneration across West Africa." },
  { name: 'Ngozi Adeyemi',     role: 'Lead Horticulturalist',            color: '#1a5c2e', bio: 'Expert in Nigerian native flora and tropical planting design. Oversees all planting specifications and horticultural quality on every project.' },
  { name: 'Babajide Salawu',   role: 'Director of Construction',         color: '#2d5016', bio: 'Civil engineer turned landscape construction director. Ensures every project is built to last, on programme, and to exacting quality standards.' },
  { name: 'Folake Adesanya',   role: 'Senior Landscape Designer',        color: '#004830', bio: 'Award-winning designer with a focus on residential and hospitality landscapes. Known for her tactile material palettes and water feature detailing.' },
  { name: 'Tunde Okafor',      role: 'Head of Site Development',         color: '#1e6b3a', bio: "Civil and geotechnical specialist overseeing earthworks, drainage, and infrastructure across Arabella's commercial and public projects." },
]

const VALUES = [
  { title: 'Ecological Stewardship', text: 'We choose native plants, permeable surfaces, and water-sensitive design to protect Nigeria\'s biodiversity and natural water cycles.' },
  { title: 'Design Excellence', text: 'Every project, regardless of scale, receives the same level of creative rigour. We believe beauty and function are inseparable.' },
  { title: 'Client Partnership', text: 'We listen before we design. The best landscapes emerge from genuine collaboration between our team and the people who will live in them.' },
  { title: 'Technical Precision', text: 'Our construction and engineering teams execute to exacting standards, ensuring every element is built to last for decades.' },
  { title: 'Community Impact', text: 'We prioritise working with local suppliers, training young landscape professionals, and contributing positively to every community we enter.' },
  { title: 'Innovation', text: 'From 3D visualisation tools to smart irrigation technology, we embrace innovation that improves outcomes for our clients and the environment.' },
]

function StatNumber({ value }) {
  const ref = useCountUp(value)
  return <span ref={ref}>0</span>
}

/* Geometric green placeholder, no emojis */
function GreenPlaceholder({ style }) {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #002d1a 0%, #004E30 45%, #006038 100%)',
      position: 'relative', overflow: 'hidden', ...style,
    }}>
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

/* Team monogram card */
function TeamCard({ name, role, color, bio }) {
  const initials = name.split(' ').map(n => n[0]).join('')
  return (
    <div className="team-card">
      <div className="team-card__avatar" style={{ background: color }}>
        <span className="team-card__initials">{initials}</span>
      </div>
      <div className="team-card__body">
        <p className="team-card__name">{name}</p>
        <p className="team-card__role">{role}</p>
        {bio && <p className="team-card__bio">{bio}</p>}
      </div>
    </div>
  )
}

/* Carousel arrows */
function ChevronBtn({ dir, onClick, disabled }) {
  return (
    <button className="team-carousel__arrow" onClick={onClick} disabled={disabled}
      aria-label={dir === 'prev' ? 'Previous' : 'Next'}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
        {dir === 'prev'
          ? <polyline points="15 18 9 12 15 6" />
          : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  )
}

/* Team carousel */
function TeamCarousel() {
  const [active, setActive] = useState(0)
  const trackRef = useRef(null)

  const goTo = (i) => {
    const clamped = Math.max(0, Math.min(i, TEAM.length - 1))
    setActive(clamped)
    const track = trackRef.current
    if (!track) return
    const card = track.children[clamped]
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: 'smooth' })
  }

  const handleScroll = () => {
    const track = trackRef.current
    if (!track) return
    const sl = track.scrollLeft
    let nearest = 0, minD = Infinity
    ;[...track.children].forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - sl)
      if (d < minD) { minD = d; nearest = i }
    })
    setActive(nearest)
  }

  return (
    <div className="team-carousel">
      <div className="team-carousel__track" ref={trackRef} onScroll={handleScroll}>
        {TEAM.map(member => (
          <div key={member.name} className="team-card-wrap">
            <TeamCard {...member} />
          </div>
        ))}
      </div>

      <div className="team-carousel__footer">
        <ChevronBtn dir="prev" onClick={() => goTo(active - 1)} disabled={active === 0} />
        <div className="team-carousel__dots" role="tablist" aria-label="Team member">
          {TEAM.map((m, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={m.name}
              className={`team-carousel__dot${i === active ? ' active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <ChevronBtn dir="next" onClick={() => goTo(active + 1)} disabled={active === TEAM.length - 1} />
      </div>
    </div>
  )
}

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <main ref={sectionRef}>
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Who We Are</p>
          <h1>About Arabella</h1>
          <p>Nigeria's leading landscape architecture and site development firm, with over 15 years of transforming spaces across the country.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="animate-on-scroll animate-left">
              <img
                src="/assets/images/about-story.png"
                alt="Beautiful garden designed by Arabella Landscape"
                style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--rounded-lg)', objectFit: 'cover' }}
              />
            </div>
            <div className="animate-on-scroll animate-right">
              <p className="section-label">Our Story</p>
              <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: '1.25rem' }}>
                Rooted in a<br /><em>Love of Nature</em>
              </h2>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                Arabella Landscape Limited was founded in Lagos in 2010 by landscape architect Adaeze Nwosu, with a single belief: that well-designed green spaces have the power to transform how people live, work, and relate to each other.
              </p>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                What began as a boutique residential practice has grown into a multidisciplinary firm of over 50 specialists — landscape architects, horticulturalists, civil engineers, and master craftspeople — delivering some of Nigeria's most celebrated outdoor environments.
              </p>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.75' }}>
                Today, Arabella operates from studios in Lagos, Abuja, and Port Harcourt, with projects spanning residential estates, commercial developments, hospitality properties, public parks, and urban regeneration schemes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            {[
              { value: 200, suffix: '+', label: 'Projects Delivered' },
              { value: 15, suffix: '+', label: 'Years in Business' },
              { value: 50, suffix: '+', label: 'Team Members' },
              { value: 12, suffix: '', label: 'Industry Awards' },
            ].map(({ value, suffix, label }) => (
              <div key={label} className="stat animate-on-scroll">
                <div className="stat__number"><StatNumber value={value} />{suffix}</div>
                <div className="stat__label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>What Drives Us</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>Our Values</h2>
          </div>
          <div className="values-grid stagger-children">
            {VALUES.map(({ title, text }, i) => (
              <div key={title} className="value-card animate-on-scroll">
                {/* Thin numbered accent — no emoji */}
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '42px', fontWeight: 700, fontStyle: 'italic',
                  color: 'var(--lime-energy)', lineHeight: 1,
                  marginBottom: '1rem', opacity: 0.85,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
            <div>
              <p className="section-label animate-on-scroll">The People Behind the Work</p>
              <h2 className="animate-on-scroll" style={{ color: 'var(--on-surface)' }}>Meet Our Leadership</h2>
            </div>
            <p className="animate-on-scroll" style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>
              {TEAM.length} team members
            </p>
          </div>
          <TeamCarousel />
        </div>
      </section>

      {/* Awards */}
      <section className="section" style={{ background: 'var(--surface-container-low)' }}>
        <div className="container">
          <p className="section-label">Recognition</p>
          <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)', marginBottom: '2.5rem' }}>
            Awards &amp; Accreditations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { year: '2024', award: 'Best Landscape Firm — Nigerian Construction Awards' },
              { year: '2023', award: 'Green City Design Award — Urban Futures Summit' },
              { year: '2022', award: 'Excellence in Public Space — NIALA Awards' },
              { year: '2021', award: 'Sustainable Landscape of the Year — EcoDesign Africa' },
            ].map(({ year, award }) => (
              <div key={award} className="value-card animate-on-scroll" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', padding: '1.75rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, fontStyle: 'italic', color: 'var(--vivid-growth)', lineHeight: 1, minWidth: '64px' }}>{year}</div>
                <p style={{ fontSize: '15px', color: 'var(--on-surface)', fontWeight: 500, lineHeight: 1.5 }}>{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Work With Us</p>
          <h2>Ready to Transform<br /><em>Your Space?</em></h2>
          <p>Join over 200 satisfied clients who trusted Arabella with their landscape.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Start a Project</Link>
            <Link to="/projects" className="btn btn-white btn-lg">View Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
