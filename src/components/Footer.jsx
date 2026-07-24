import { Link } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'

const SERVICES = [
  { label: 'Design',       slug: 'design'       },
  { label: 'Construction', slug: 'construction' },
  { label: 'Maintenance',  slug: 'maintenance'  },
  { label: 'Farm',         slug: 'farm'         },
]

const COMPANY = [
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/before-after', label: 'Before & After' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/blog', label: 'Insights' },
  { to: '/plants', label: 'Plant Palette' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
  { to: '/admin', label: 'Admin Portal' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__brand-logo" aria-label="Arabella Landscape Limited — Home">
              <img src={logoFull} alt="Arabella Landscape Limited" className="footer__logo-img" />
            </Link>
            <p>
              Shaping spaces and transforming lives through premium landscape architecture and site development services across Nigeria.
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Instagram" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter / X" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <p className="footer__heading">Services</p>
            {SERVICES.map(({ label, slug }) => (
              <Link key={slug} to={`/services/${slug}`} className="footer__link">{label}</Link>
            ))}
          </div>

          <div>
            <p className="footer__heading">Markets</p>
            <Link to="/markets/residential"           className="footer__link">Residential</Link>
            <Link to="/markets/corporate-commercial"  className="footer__link">Corporate & Commercial</Link>
            <Link to="/markets/hospitality-retail"    className="footer__link">Hospitality & Retail</Link>
            <Link to="/markets/public-government"     className="footer__link">Public & Government</Link>
            <Link to="/markets/real-estate-developers"className="footer__link">Developers</Link>
          </div>

          <div>
            <p className="footer__heading">Company</p>
            {COMPANY.map(({ to, label }) => (
              <Link key={to} to={to} className="footer__link">{label}</Link>
            ))}
          </div>

          <div>
            <p className="footer__heading">Contact</p>
            <a href="tel:+2348001234567" className="footer__link">+234 800 123 4567</a>
            <a href="mailto:hello@arabellalandscape.com" className="footer__link">hello@arabellalandscape.com</a>
            <p className="footer__link" style={{ cursor: 'default' }}>
              55, Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos
            </p>
            <div className="footer__cta-group" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
              <Link to="/contact" className="btn btn-consultation btn-sm">
                Get a Consultation
              </Link>
              <a
                href="/Arabella-Landscape-Brochure.pdf"
                download="Arabella-Landscape-Brochure.pdf"
                className="footer__brochure-link"
                style={{ marginTop: 0 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

        <div className="footer__bottom">
          <p>&copy; {year} Arabella Landscape Limited. All rights reserved.</p>
          <p>Shaping Spaces. Transforming Lives.</p>
        </div>
      </div>
    </footer>
  )
}
