import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'

const SERVICES = [
  { label: 'Landscape Design', slug: 'design' },
  { label: 'Construction & Build', slug: 'construction' },
  { label: 'Maintenance & Care', slug: 'maintenance' },
  { label: 'Commercial Farm', slug: 'farm' },
]

const MARKETS = [
  { label: 'Residential Estates', to: '/markets/residential' },
  { label: 'Corporate & Commercial', to: '/markets/corporate-commercial' },
  { label: 'Hospitality & Retail', to: '/markets/hospitality-retail' },
  { label: 'Public & Government', to: '/markets/public-government' },
  { label: 'Property Developers', to: '/markets/real-estate-developers' },
]

const COMPANY = [
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects Gallery' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/before-after', label: 'Before & After' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/blog', label: 'Insights & Journal' },
  { to: '/plants', label: 'Plant Palette' },
  { to: '/faq', label: 'FAQ' },
  { to: '/admin', label: 'Admin Portal' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const year = new Date().getFullYear()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  return (
    <footer className="footer">
      {/* Top Ambient Glow Decorative Line */}
      <div className="footer__glow-line" aria-hidden="true" />

      <div className="container">
        {/* ── Newsletter / Newsletter Banner ── */}
        <div className="footer__newsletter">
          <div className="footer__newsletter-content">
            <div className="footer__newsletter-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              STAY INSPIRED
            </div>
            <h3 className="footer__newsletter-title">Transform Your Outdoor Sanctuary</h3>
            <p className="footer__newsletter-desc">Subscribe to receive landscape insights, seasonal plant guides, and architectural inspiration.</p>
          </div>

          <form onSubmit={handleSubscribe} className="footer__newsletter-form">
            <div className="footer__newsletter-input-wrap">
              <input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="footer__newsletter-input"
              />
              <button type="submit" className="footer__newsletter-btn">
                {subscribed ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Subscribed!
                  </span>
                ) : (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    Join Journal
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ── Main 5-Column Grid ── */}
        <div className="footer__grid">
          {/* Column 1: Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__brand-logo" aria-label="Arabella Landscape Limited — Home">
              <img src={logoFull} alt="Arabella Landscape Limited" className="footer__logo-img" />
            </Link>
            <p className="footer__brand-text">
              Shaping spaces and transforming lives through premium landscape architecture and master site development across Nigeria.
            </p>

            <div className="footer__locations">
              <span className="footer__location-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Lagos
              </span>
              <span className="footer__location-pill">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Abuja
              </span>
            </div>

            <div className="footer__social">
              <a href="#" aria-label="Instagram" rel="noopener noreferrer" className="footer__social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" rel="noopener noreferrer" className="footer__social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer" className="footer__social-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X" rel="noopener noreferrer" className="footer__social-btn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <p className="footer__heading">Services</p>
            {SERVICES.map(({ label, slug }) => (
              <Link key={slug} to={`/services/${slug}`} className="footer__link">
                <span className="footer__link-bullet">›</span> {label}
              </Link>
            ))}
          </div>

          {/* Column 3: Markets */}
          <div>
            <p className="footer__heading">Markets</p>
            {MARKETS.map(({ label, to }) => (
              <Link key={to} to={to} className="footer__link">
                <span className="footer__link-bullet">›</span> {label}
              </Link>
            ))}
          </div>

          {/* Column 4: Company */}
          <div>
            <p className="footer__heading">Company</p>
            {COMPANY.map(({ to, label }) => (
              <Link key={to} to={to} className="footer__link">
                <span className="footer__link-bullet">›</span> {label}
              </Link>
            ))}
          </div>

          {/* Column 5: Direct Connect & Contact */}
          <div>
            <p className="footer__heading">Direct Connect</p>
            <div className="footer__contact-info">
              <a href="tel:+2348001234567" className="footer__contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +234 800 123 4567
              </a>
              <a href="mailto:hello@arabellalandscape.com" className="footer__contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                hello@arabellalandscape.com
              </a>
              <p className="footer__contact-item footer__contact-item--static">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                55, Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos
              </p>
            </div>

            <div className="footer__cta-stack">
              <Link to="/contact" className="btn btn-consultation btn-sm" style={{ width: '100%', justifyContent: 'center' }}>
                Get a Consultation
              </Link>
              <a
                href="/Arabella-Landscape-Brochure.pdf"
                download="Arabella-Landscape-Brochure.pdf"
                className="footer__brochure-link"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <polyline points="9 15 12 18 15 15" />
                </svg>
                Download Brochure (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* ── Footer Bottom Bar ── */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} Arabella Landscape Limited. All rights reserved.
          </p>
          <div className="footer__bottom-motto">
            <span>Shaping Spaces. Transforming Lives.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
