import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import BrochureModal from '../components/BrochureModal'
import OfficeMap from '../components/OfficeMap'

// ─────────────────────────────────────────────────────────────────
// Sign up free at https://formspree.io and replace the ID below.
// Your form submissions will arrive directly in your inbox.
// ─────────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORM_ID'

const SERVICES = [
  'Exterior Landscaping',
  'Interior Landscaping',
  'Landscape Architecture',
  'Recreational Planning',
  'Design-Build Services',
  'Site Development',
  'Not Sure / Other',
]

const BUDGETS = [
  'Under ₦5 million',
  '₦5m – ₦20m',
  '₦20m – ₦100m',
  '₦100m+',
  'Prefer not to say',
]

const EMPTY_FORM = {
  firstName: '', lastName: '', email: '', phone: '', company: '',
  service: '', budget: '', message: '', timeline: '',
}

// status: 'idle' | 'loading' | 'success' | 'error'
export default function Contact() {
  const sectionRef = useScrollAnimation()
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [form, setForm] = useState(EMPTY_FORM)
  const [brochureOpen, setBrochureOpen] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`.trim(),
          ...form,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(EMPTY_FORM)
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error — please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <main ref={sectionRef}>
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <Helmet>
        <title>Contact Us — Arabella Landscape Limited</title>
        <meta name="description" content="Get in touch with Arabella Landscape. Free 30-minute consultation with a senior landscape architect. Visit us at 55, Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos." />
        <meta property="og:title" content="Contact Arabella Landscape Limited" />
        <meta property="og:description" content="Tell us about your project — we'll respond within one business day and offer a free initial consultation." />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      <section className="page-hero page-hero--contact">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Get in Touch</p>
          <h1>Contact Us</h1>
          <p>Tell us about your project and we'll get back to you within one business day.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.75rem' }}>
            <button
              className="btn btn-secondary"
              onClick={() => setBrochureOpen(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Our Brochure
            </button>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--ivory)' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Info side */}
            <div className="contact-info animate-on-scroll animate-left">
              <p className="section-label">Reach Out</p>
              <h2>We'd Love to Hear From You</h2>
              <p>
                Whether you have a clear brief or just the seed of an idea, our team is ready to help bring your landscape vision to life.
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.72A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14h-.08z" />
                    </svg>
                  </div>
                  <span className="contact-detail__label">Phone</span>
                  <a href="tel:+2348001234567" className="contact-detail__value">+234 800 123 4567</a>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="contact-detail__label">Email</span>
                  <a href="mailto:hello@arabellalandscape.com" className="contact-detail__value">hello@arabellalandscape.com</a>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span className="contact-detail__label">Address</span>
                  <p className="contact-detail__value">55, Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos, Nigeria</p>
                </div>

                <div className="contact-detail">
                  <div className="contact-detail__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <span className="contact-detail__label">Hours</span>
                  <p className="contact-detail__value">Mon – Fri, 8am – 6pm WAT</p>
                </div>
              </div>

              <div style={{
                marginTop: '2.5rem',
                padding: '1.75rem 2rem',
                background: '#F7F5F0',
                borderRadius: '12px',
                border: '1px solid #94AD99',
                borderLeft: '4px solid #00722C'
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '19px',
                  fontWeight: 700,
                  color: '#004016',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3
                }}>
                  Free Initial Consultation
                </h4>
                <p style={{
                  fontSize: '14.5px',
                  color: '#14140F',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  All enquiries receive a free 30-minute consultation with one of our senior landscape architects — no obligation, no pressure.
                </p>
              </div>
            </div>

            {/* Form side */}
            <div className="contact-form-card animate-on-scroll animate-right">
              {status === 'success' ? (
                <div className="form-success">
                  <div className="form-success__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4>Message Received!</h4>
                  <p>
                    Thank you for reaching out. One of our team members will be in touch within one business day.
                  </p>
                  <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3>Send Us a Message</h3>
                  <p className="subtitle">Fill in the form and we'll respond within 24 hours.</p>

                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="firstName">First Name *</label>
                        <input
                          id="firstName" name="firstName" type="text" required
                          className="form-input" placeholder="Adaeze"
                          value={form.firstName} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="lastName">Last Name *</label>
                        <input
                          id="lastName" name="lastName" type="text" required
                          className="form-input" placeholder="Okonkwo"
                          value={form.lastName} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="email">Email Address *</label>
                        <input
                          id="email" name="email" type="email" required
                          className="form-input" placeholder="you@example.com"
                          value={form.email} onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="phone">Phone Number</label>
                        <input
                          id="phone" name="phone" type="tel"
                          className="form-input" placeholder="+234 800 000 0000"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="company">Company / Organisation</label>
                      <input
                        id="company" name="company" type="text"
                        className="form-input" placeholder="Your company name (optional)"
                        value={form.company} onChange={handleChange}
                      />
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label" htmlFor="service">Service Interested In *</label>
                        <select
                          id="service" name="service" required
                          className="form-select"
                          value={form.service} onChange={handleChange}
                        >
                          <option value="">Select a service…</option>
                          {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label" htmlFor="budget">Approximate Budget</label>
                        <select
                          id="budget" name="budget"
                          className="form-select"
                          value={form.budget} onChange={handleChange}
                        >
                          <option value="">Select a range…</option>
                          {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="timeline">Project Timeline</label>
                      <input
                        id="timeline" name="timeline" type="text"
                        className="form-input" placeholder="e.g. Q3 2025, ASAP, Flexible…"
                        value={form.timeline} onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Tell Us About Your Project *</label>
                      <textarea
                        id="message" name="message" required
                        className="form-textarea"
                        placeholder="Describe your project, site, and any specific requirements…"
                        value={form.message} onChange={handleChange}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="form-error-msg">{errorMsg}</p>
                    )}

                    <div className="form-submit-row">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        disabled={status === 'loading'}
                        style={{ opacity: status === 'loading' ? 0.7 : 1 }}
                      >
                        {status === 'loading' ? 'Sending…' : 'Send Message'}
                        {status !== 'loading' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* ── Office Map ── */}
          <div className="map-wrapper animate-on-scroll">
            <OfficeMap />
          </div>
        </div>
      </section>
    </main>
  )
}
