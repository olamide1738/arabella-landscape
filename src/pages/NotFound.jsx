import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

function CompassIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 48, height: 48, color: 'var(--lime-energy, #DFDB00)' }}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="rgba(223, 219, 0, 0.15)" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

export default function NotFound() {
  const sectionRef = useScrollAnimation()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/projects?search=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <main
      ref={sectionRef}
      style={{
        background: 'var(--forest-depth, #004016)',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 1.5rem 8rem 1.5rem',
      }}
    >
      <Helmet>
        <title>404 — Page Not Found | Arabella Landscape Limited</title>
        <meta name="description" content="The page you are looking for could not be found. Return to Arabella Landscape Limited home page." />
      </Helmet>

      {/* Decorative leaf background circles */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '550px', height: '550px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0, 114, 44, 0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(223, 219, 0, 0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Centered Icon */}
        <div style={{ display: 'inline-flex', padding: '1.1rem', background: 'rgba(255,255,255,0.06)', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', marginBottom: '1.25rem' }}>
          <CompassIcon />
        </div>

        {/* Error Badge */}
        <div style={{ display: 'inline-block', padding: '0.35rem 1.1rem', background: 'rgba(223, 219, 0, 0.12)', border: '1px solid rgba(223, 219, 0, 0.3)', borderRadius: '9999px', color: 'var(--lime-energy, #DFDB00)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
          Error 404
        </div>

        {/* Main Title */}
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: '1.25rem', color: '#FFFFFF' }}>
          Off the Beaten <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--lime-energy, #DFDB00)' }}>Path</em>
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, maxWidth: '560px', margin: '0 auto 2.5rem' }}>
          The page you are looking for might have been pruned, renamed, or moved. Let's guide you back to familiar ground.
        </p>

        {/* Quick Search */}
        <form onSubmit={handleSearch} style={{ width: '100%', maxWidth: '480px', margin: '0 auto 3rem', display: 'flex', gap: '0.5rem', background: 'rgba(255,255,255,0.08)', padding: '0.4rem 0.4rem 0.4rem 1.1rem', borderRadius: 'var(--rounded-full, 9999px)', border: '1px solid rgba(255,255,255,0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.6)' }}>
            <SearchIcon />
          </div>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects or services..."
            style={{ background: 'transparent', border: 'none', outline: 'none', color: '#FFFFFF', fontSize: '14.5px', flex: 1 }}
            aria-label="Search site"
          />
          <button type="submit" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', borderRadius: 'var(--rounded-full, 9999px)', fontSize: '13.5px', fontWeight: 700 }}>
            Search
          </button>
        </form>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
          <Link to="/" className="btn btn-primary btn-lg" style={{ minWidth: '180px' }}>
            Return to Homepage
          </Link>
          <Link to="/projects" className="btn btn-secondary btn-lg" style={{ minWidth: '180px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            View Our Work <ArrowRightIcon />
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-lg" style={{ minWidth: '180px' }}>
            Get in Touch
          </Link>
        </div>

        {/* Popular destinations shortcuts */}
        <div style={{ marginTop: '4rem', paddingTop: '2.25rem', borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', fontSize: '13.5px', color: 'rgba(255,255,255,0.7)', width: '100%' }}>
          <span style={{ color: 'rgba(255,255,255,0.5)' }}>Popular destinations:</span>
          <Link to="/services" style={{ color: 'var(--lime-energy, #DFDB00)', textDecoration: 'underline' }}>Services</Link>
          <Link to="/about" style={{ color: 'var(--lime-energy, #DFDB00)', textDecoration: 'underline' }}>About Us</Link>
          <Link to="/blog" style={{ color: 'var(--lime-energy, #DFDB00)', textDecoration: 'underline' }}>Insights</Link>
          <Link to="/faq" style={{ color: 'var(--lime-energy, #DFDB00)', textDecoration: 'underline' }}>FAQ</Link>
        </div>
      </div>
    </main>
  )
}
