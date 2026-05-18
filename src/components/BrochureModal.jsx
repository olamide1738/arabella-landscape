import { useState, useEffect, useRef } from 'react'

const FORMSPREE_ID = 'YOUR_FORM_ID'   // replace with a real Formspree form ID

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 18, height: 18 }}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function BrochureModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')  // idle | loading | success | error
  const inputRef = useRef(null)

  // Lock body scroll and focus input when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('loading')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, _subject: 'Brochure Download Request — Arabella Landscape' }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="brochure-modal__backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="brochure-modal-title"
    >
      <div className="brochure-modal">
        <button className="brochure-modal__close" onClick={onClose} aria-label="Close">
          <CloseIcon />
        </button>

        {status === 'success' ? (
          <div className="brochure-modal__success">
            <div className="brochure-modal__success-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 32, height: 32 }}>
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="brochure-modal__title">Download Ready</h2>
            <p className="brochure-modal__subtitle">
              Thank you! Your brochure link has been sent to <strong>{email}</strong>.
              Click below to download immediately.
            </p>
            <a
              href="/assets/arabella-landscape-brochure.pdf"
              download
              className="btn btn-primary btn-lg"
              style={{ marginTop: '1.5rem' }}
              onClick={onClose}
            >
              <DownloadIcon />
              Download Brochure (PDF)
            </a>
            <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', marginTop: '1rem' }}>
              Check your inbox too — we've emailed you a copy.
            </p>
          </div>
        ) : (
          <>
            <div className="brochure-modal__icon">
              <DownloadIcon />
            </div>
            <h2 className="brochure-modal__title" id="brochure-modal-title">
              Download Our Portfolio Brochure
            </h2>
            <p className="brochure-modal__subtitle">
              Get a beautifully designed PDF showcasing our best projects, services, and process.
              Enter your email and we'll send you a copy instantly.
            </p>

            <ul className="brochure-modal__features">
              <li>20+ completed projects in full detail</li>
              <li>Full service descriptions &amp; process guide</li>
              <li>Plant palette &amp; materials reference</li>
              <li>Team profiles &amp; company credentials</li>
            </ul>

            <form onSubmit={handleSubmit} className="brochure-modal__form">
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="form-input"
                required
                aria-label="Email address"
              />
              {status === 'error' && (
                <p className="form-error-msg">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending…' : (
                  <>
                    <DownloadIcon />
                    Get Free Brochure
                  </>
                )}
              </button>
            </form>

            <p className="brochure-modal__disclaimer">
              No spam. Unsubscribe any time. We take your privacy seriously.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
