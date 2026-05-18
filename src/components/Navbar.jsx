import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'

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
  // On inner pages the hero is cream, so always show the scrolled (cream) style
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

          <Link to="/contact" className="btn btn-primary btn-sm navbar__cta" onClick={closeMenu}>
            Get a Quote
          </Link>

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

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className="mobile-nav__link"
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
          Get a Quote
        </Link>
      </div>
    </>
  )
}
