import { useState, useRef } from 'react'
import aboutStoryImg from '../assets/about-us-start-compressed.jpg'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation'


const TEAM = [
  { name: 'Adaeze Nwosu',      role: 'Founder & CEO',                    color: '#004016', photo: '/assets/images/team-1.png', bio: 'Registered landscape architect with over 35 years in the profession. Established Arabella in Lagos in 1990 with a conviction that well-designed green spaces have the power to change how people live.' },
  { name: 'Chukwuemeka Obi',   role: 'Head of Landscape Architecture',   color: '#00722C', photo: '/assets/images/team-2.png', bio: "Leads Arabella's masterplanning and design team. Specialises in large-scale public realm and urban regeneration across West Africa." },
  { name: 'Ngozi Adeyemi',     role: 'Lead Horticulturalist',            color: '#004016', photo: '/assets/images/team-3.png', bio: 'Expert in Nigerian native flora and tropical planting design. Oversees all planting specifications and horticultural quality on every project.' },
  { name: 'Babajide Salawu',   role: 'Director of Construction',         color: '#00722C', photo: '/assets/images/team-4.png', bio: 'Civil engineer turned landscape construction director. Ensures every project is built to last, on programme, and to exacting quality standards.' },
  { name: 'Folake Adesanya',   role: 'Senior Landscape Designer',        color: '#004016', photo: null, bio: 'Award-winning designer with a focus on residential and hospitality landscapes. Known for her tactile material palettes and water feature detailing.' },
  { name: 'Tunde Okafor',      role: 'Head of Site Development',         color: '#00722C', photo: null, bio: "Civil and geotechnical specialist overseeing earthworks, drainage, and infrastructure across Arabella's commercial and public projects." },
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
      background: 'linear-gradient(160deg, #004016 0%, #00722C 100%)',
      position: 'relative', overflow: 'hidden', ...style,
    }}>
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

/* Team card — photo if available, monogram initials as fallback */
function TeamCard({ name, role, color, bio, photo }) {
  const initials = name.split(' ').map(n => n[0]).join('')
  return (
    <div className="team-card">
      <div className="team-card__avatar" style={{ background: photo ? 'transparent' : color }}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="team-card__photo"
          />
        ) : (
          <span className="team-card__initials">{initials}</span>
        )}
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
      <Helmet>
        <title>About Us — Arabella Landscape Limited</title>
        <meta name="description" content="Meet the team behind Nigeria's leading landscape architecture firm. Over 35 years, 200+ projects, and a passion for transforming spaces across Lagos, Abuja, and Port Harcourt." />
        <meta property="og:title" content="About Arabella Landscape Limited" />
        <meta property="og:description" content="Landscape architects, horticulturalists, and construction specialists united by a love of great outdoor spaces." />
        <meta property="og:image" content="/assets/images/about-hero.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="page-hero page-hero--about">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Who We Are</p>
          <h1>About Arabella</h1>
          <p>
            Nigeria's leading landscape architecture and site development firm, with over 35 years of transforming spaces across the country since 1990.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="animate-on-scroll animate-left">
              <img
                src={aboutStoryImg}
                alt="Arabella Landscape site entry and paved drive"
                style={{ width: '100%', aspectRatio: '4/5', borderRadius: 'var(--rounded-lg)', objectFit: 'cover', objectPosition: 'center top' }}
              />
            </div>
            <div className="animate-on-scroll animate-right">
              <p className="section-label">Our Story</p>
              <h2 className="headline-lg" style={{ color: 'var(--on-surface)', marginBottom: '1.25rem' }}>
                Rooted in a<br /><em>Love of Nature</em>
              </h2>
              <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginBottom: '1.25rem' }}>
                Arabella Landscape Limited was established in Lagos in 1990 with a straightforward conviction: that well-designed green spaces have the power to change how people live, work, and relate to each other. More than 35 years later, that conviction still drives every project we take on.
              </p>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.75', marginBottom: '1.25rem' }}>
                What began as a focused residential practice has grown into a multidisciplinary team of over 50 specialists — landscape architects, horticulturalists, civil engineers, and master craftspeople — delivering some of Nigeria's most recognised outdoor environments. We are registered members of the British Association of Landscape Industries (BALI) and hold full professional accreditation in Nigeria.
              </p>
              <p style={{ color: 'var(--on-surface-variant)', lineHeight: '1.75' }}>
                Today, Arabella operates from its studio at 55, Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos, with active projects spanning residential estates, corporate headquarters, hospitality properties, public parks, and large-scale site development schemes across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Values */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <p className="section-label" style={{ justifyContent: 'center' }}>What Drives Us</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>Our <em>Values</em></h2>
          </div>
          <div className="values-grid stagger-children">
            {VALUES.map(({ title, text }, i) => (
              <div key={title} className="value-card animate-on-scroll">
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
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <p className="section-label animate-on-scroll">The People Behind the Work</p>
              <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>Meet Our <em>Leadership</em></h2>
            </div>
            <Link to="/contact" className="btn btn-secondary btn-sm animate-on-scroll">Work With Us</Link>
          </div>
          <TeamCarousel />
        </div>
      </section>

      {/* Awards & Accreditations */}
      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div style={{ textAlign: 'left', marginBottom: '3rem' }}>
            <p className="section-label animate-on-scroll">Industry Recognition</p>
            <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--on-surface)' }}>
              Awards &amp; Accreditations
            </h2>
          </div>

          {/* Awards Grid */}
          <div className="awards-grid">
            {[
              {
                year: '2024',
                title: 'Best Landscape Architecture Firm',
                org: 'Nigerian Construction Awards',
                desc: 'Honored for landmark public realm developments & luxury residential estate master planning across Nigeria.'
              },
              {
                year: '2023',
                title: 'Green City Design Award',
                org: 'Urban Futures Summit',
                desc: 'Recognized for pioneering sustainable urban heat island cooling & native plant micro-ecosystems.'
              },
              {
                year: '2022',
                title: 'Excellence in Public Space',
                org: 'NIALA Architectural Awards',
                desc: 'Awarded for civic plaza redesigns, pedestrian waterfront corridors, and public safety integration.'
              },
              {
                year: '2021',
                title: 'Sustainable Landscape of the Year',
                org: 'EcoDesign Africa',
                desc: 'Pioneering zero-waste drip irrigation engineering & drought-tolerant native flora specification.'
              }
            ].map(({ year, title, org, desc }) => (
              <div key={title} className="award-card animate-on-scroll">
                <div>
                  <div className="award-card__header">
                    <span className="award-card__year">{year}</span>
                    <div className="award-card__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="6" />
                        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                      </svg>
                    </div>
                  </div>
                  <div className="award-card__body">
                    <span className="award-card__org">{org}</span>
                    <h3>{title}</h3>
                    <p className="award-card__desc">{desc}</p>
                  </div>
                </div>
                <div className="award-card__footer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>Verified Distinction</span>
                </div>
              </div>
            ))}
          </div>

          {/* Accreditations & Affiliations Row */}
          <div className="accreditations-container animate-on-scroll">
            <div className="accreditations-header">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Professional Affiliations &amp; Certifications</span>
            </div>
            <div className="accreditations-grid">
              {[
                { code: 'IFLA', name: 'International Federation of Landscape Architects', role: 'Corporate Member' },
                { code: 'NIALA', name: 'Nigerian Institute of Landscape Architects', role: 'Chartered Practice' },
                { code: 'LASPARK', name: 'Lagos State Parks & Gardens Agency', role: 'Certified Partner' },
                { code: 'LEED AP', name: 'Leadership in Energy & Environmental Design', role: 'Accredited Specialist' }
              ].map(({ code, name, role }) => (
                <div key={code} className="accreditation-pill">
                  <span className="accreditation-code">{code}</span>
                  <div className="accreditation-info">
                    <span className="accreditation-name">{name}</span>
                    <span className="accreditation-role">{role}</span>
                  </div>
                </div>
              ))}
            </div>
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
            <a
              href="/Arabella-Landscape-Brochure.pdf"
              download="Arabella-Landscape-Brochure.pdf"
              className="btn btn-white btn-lg"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                style={{ width: 18, height: 18, flexShrink: 0 }}>
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="12" y1="18" x2="12" y2="12" />
                <polyline points="9 15 12 18 15 15" />
              </svg>
              Download Brochure
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
