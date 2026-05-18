import { Link } from 'react-router-dom'
import logoFull from '../assets/logo-full.png'

const SERVICES = [
  { label: 'Exterior Landscaping',   slug: 'exterior-landscaping'   },
  { label: 'Interior Landscaping',   slug: 'interior-landscaping'   },
  { label: 'Landscape Architecture', slug: 'landscape-architecture' },
  { label: 'Recreational Planning',  slug: 'recreational-planning'  },
  { label: 'Design-Build Services',  slug: 'design-build'           },
  { label: 'Site Development',       slug: 'site-development'       },
]

const COMPANY = [
  { to: '/about', label: 'About Us' },
  { to: '/projects', label: 'Projects' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
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
            <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: '1.25rem' }}>
              Get a Quote
            </Link>
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
