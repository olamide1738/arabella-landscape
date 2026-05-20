import { useState, useRef, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { PROJECTS } from '../data/projects'
import { SERVICES } from '../data/services'
import { ARTICLES } from '../data/articles'

function buildIndex() {
  const items = []
  PROJECTS.forEach(p => items.push({
    type: 'Project', title: p.name,
    sub: p.location, href: `/projects/${p.slug}`,
    keywords: `${p.name} ${p.location} ${p.category}`.toLowerCase(),
  }))
  SERVICES.forEach(s => items.push({
    type: 'Service', title: s.title,
    sub: s.label, href: `/services/${s.slug}`,
    keywords: `${s.title} ${s.tagline} ${s.label}`.toLowerCase(),
  }))
  ARTICLES.forEach(a => items.push({
    type: 'Insight', title: a.title,
    sub: a.category, href: `/blog/${a.slug}`,
    keywords: `${a.title} ${a.excerpt} ${a.category}`.toLowerCase(),
  }))
  return items
}

const INDEX = buildIndex()

function search(q) {
  if (!q || q.trim().length < 2) return []
  const terms = q.toLowerCase().trim().split(/\s+/)
  return INDEX.filter(item => terms.every(t => item.keywords.includes(t))).slice(0, 8)
}

const TYPE_COLOURS = {
  Project: 'var(--vivid-growth)',
  Service: 'var(--forest-depth)',
  Insight: '#b08010',
}

export default function SiteSearch() {
  const [open, setOpen]       = useState(false)
  const [query, setQuery]     = useState('')
  const [results, setResults] = useState([])
  const [active, setActive]   = useState(-1)
  const inputRef  = useRef(null)
  const navigate  = useNavigate()

  const openSearch  = () => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50) }
  const closeSearch = useCallback(() => { setOpen(false); setQuery(''); setResults([]); setActive(-1) }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); open ? closeSearch() : openSearch() }
      if (e.key === 'Escape') closeSearch()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, closeSearch])

  const handleInput = (e) => {
    const q = e.target.value
    setQuery(q)
    setResults(search(q))
    setActive(-1)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, results.length - 1)) }
    if (e.key === 'ArrowUp')   { e.preventDefault(); setActive(a => Math.max(a - 1, -1)) }
    if (e.key === 'Enter' && active >= 0) { navigate(results[active].href); closeSearch() }
  }

  const goto = (href) => { navigate(href); closeSearch() }

  return (
    <>
      {/* Trigger button in Navbar */}
      <button
        className="navbar__search-btn"
        onClick={openSearch}
        aria-label="Search site (Ctrl+K)"
        title="Search (Ctrl+K)"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      {/* Full-screen overlay */}
      {open && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-box" onClick={e => e.stopPropagation()}>
            <div className="search-box__input-row">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="search-box__icon">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Search projects, services, insights…"
                className="search-box__input"
                aria-label="Search"
                autoComplete="off"
              />
              <button className="search-box__close" onClick={closeSearch} aria-label="Close search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {results.length > 0 ? (
              <ul className="search-results" role="listbox">
                {results.map((r, i) => (
                  <li
                    key={r.href}
                    className={`search-result${i === active ? ' search-result--active' : ''}`}
                    onClick={() => goto(r.href)}
                    role="option"
                    aria-selected={i === active}
                  >
                    <span className="search-result__type" style={{ color: TYPE_COLOURS[r.type] }}>
                      {r.type}
                    </span>
                    <span className="search-result__title">{r.title}</span>
                    <span className="search-result__sub">{r.sub}</span>
                  </li>
                ))}
              </ul>
            ) : query.length >= 2 ? (
              <p className="search-empty">No results for <strong>"{query}"</strong></p>
            ) : (
              <p className="search-hint">
                Search across projects, services, and insights. Press <kbd>↑↓</kbd> to navigate, <kbd>Enter</kbd> to go.
              </p>
            )}
          </div>
        </div>
      )}
    </>
  )
}
