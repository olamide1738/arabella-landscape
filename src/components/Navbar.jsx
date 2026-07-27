import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'
import SiteSearch from './SiteSearch'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/markets', label: 'Markets' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const showScrolled = !isHome || scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* ── Desktop / top bar ── */}
      <nav className={`navbar${showScrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="navbar__inner">
          <Link to="/" className="navbar__logo" onClick={closeMenu}>
            <img src={logoFull} alt="Arabella Landscape Limited" className="navbar__logo-img" />
          </Link>

          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `navbar__link${isActive ? ' active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop-only: search + CTA right next to each other */}
          <div className="navbar__actions" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <SiteSearch />
            <Link to="/contact" className="btn btn-consultation btn-sm navbar__cta" onClick={closeMenu}>
              Get a Consultation
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`mobile-nav${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        aria-label="Mobile navigation"
      >
        {/* Top row: logo only — hamburger in navbar handles close */}
        <div className="mobile-nav__header">
          <img src={logoFull} alt="Arabella" className="mobile-nav__logo" />
        </div>

        {/* Nav links */}
        <nav className="mobile-nav__links" aria-label="Mobile links">
          {NAV_LINKS.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`
              }
              onClick={closeMenu}
              style={{ '--i': i }}
            >
              {label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="mobile-nav__arrow">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </NavLink>
          ))}
        </nav>

        {/* Bottom actions */}
        <div className="mobile-nav__footer">
          <Link to="/contact" className="btn btn-consultation" onClick={closeMenu}
            style={{ width: '100%', justifyContent: 'center' }}>
            Get a Consultation
          </Link>
          <p className="mobile-nav__tagline">Shaping Spaces. Transforming Lives.</p>
        </div>
      </div>
    </>
  )
}
