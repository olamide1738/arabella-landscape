import { useState, useEffect } from 'react'

const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function ResourceModal({ guide, onClose }) {
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (!guide) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [guide, onClose])

  if (!guide) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email, guide: guide.title, _subject: `Guide Download: ${guide.title}` }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(data?.errors?.[0]?.message || 'Something went wrong. Please try again.')
        setStatus('error')
      }
    } catch {
      setErrorMsg('Network error — please check your connection.')
      setStatus('error')
    }
  }

  return (
    <div className="rm-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={`Download ${guide.title}`}>
      <div className="rm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="rm-close" onClick={onClose} aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="rm-success">
            <div className="rm-success__icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Your Guide is Ready</h3>
            <p>Click below to download <strong>{guide.title}</strong>.</p>
            <a
              href={guide.downloadPath}
              download
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Free Guide
            </a>
            <button
              onClick={onClose}
              style={{ display: 'block', margin: '1rem auto 0', fontSize: '13px',
                color: 'var(--on-surface-variant)', background: 'none', border: 'none', cursor: 'pointer' }}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="rm-header" style={{ background: guide.color }}>
              <p className="rm-header__category">{guide.category}</p>
              <h3 className="rm-header__title">{guide.title}</h3>
              <p className="rm-header__subtitle">{guide.subtitle}</p>
            </div>
            <div className="rm-body">
              <p className="rm-desc">{guide.desc}</p>
              <p className="rm-prompt">Enter your details to download instantly — free.</p>
              <form onSubmit={handleSubmit}>
                <div className="rm-field">
                  <label className="rm-label" htmlFor="rm-name">Your Name</label>
                  <input
                    id="rm-name" type="text" required placeholder="Emeka Okonkwo"
                    className="form-input" value={name} onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="rm-field">
                  <label className="rm-label" htmlFor="rm-email">Email Address</label>
                  <input
                    id="rm-email" type="email" required placeholder="you@example.com"
                    className="form-input" value={email} onChange={e => setEmail(e.target.value)}
                  />
                </div>
                {status === 'error' && (
                  <p style={{ color: 'var(--error)', fontSize: '13px', marginBottom: '0.75rem' }}>{errorMsg}</p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center', opacity: status === 'loading' ? 0.7 : 1 }}>
                  {status === 'loading' ? 'Sending…' : 'Get Free Guide'}
                </button>
              </form>
              <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', textAlign: 'center', marginTop: '0.75rem' }}>
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
