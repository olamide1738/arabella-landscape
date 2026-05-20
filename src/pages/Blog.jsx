import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ARTICLES, ARTICLE_CATEGORIES } from '../data/articles'
import ResourceModal from '../components/ResourceModal'
import { FREE_GUIDES } from '../data/resources'

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function ArticleCard({ article, featured = false }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className={`article-card${featured ? ' article-card--featured' : ''} animate-on-scroll`}
    >
      <div className="article-card__image">
        <img src={article.image} alt={article.title} loading="lazy" />
        <span className="article-card__category">{article.category}</span>
      </div>
      <div className="article-card__body">
        <h2 className="article-card__title">{article.title}</h2>
        <p className="article-card__excerpt">{article.excerpt}</p>
        <div className="article-card__meta">
          <span><CalendarIcon /> {formatDate(article.date)}</span>
          <span><ClockIcon /> {article.readTime} read</span>
        </div>
      </div>
    </Link>
  )
}

export default function Blog() {
  const sectionRef = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeGuide, setActiveGuide] = useState(null)

  const filtered = activeCategory === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  const featured = ARTICLES.find(a => a.featured)
  const rest = filtered.filter(a => !a.featured || activeCategory !== 'All')

  return (
    <main ref={sectionRef}>
      <ResourceModal guide={activeGuide} onClose={() => setActiveGuide(null)} />
      <Helmet>
        <title>Insights — Arabella Landscape Limited</title>
        <meta name="description" content="Design ideas, plant guides, and behind-the-scenes stories from Nigeria's leading landscape architecture firm." />
        <meta property="og:title" content="Landscape Insights — Arabella Landscape Limited" />
        <meta property="og:description" content="Expert advice on Nigerian plants, landscape design, and sustainable outdoor spaces from the Arabella team." />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Ideas & Expertise</p>
          <h1>Landscape Insights</h1>
          <p>Plant guides, design ideas, and behind-the-scenes stories from the Arabella team.</p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && activeCategory === 'All' && (
        <section className="section" style={{ background: 'var(--warm-cream)', paddingBottom: '2rem' }}>
          <div className="container">
            <p className="section-label animate-on-scroll">Featured Article</p>
            <ArticleCard article={featured} featured />
          </div>
        </section>
      )}

      {/* ── Free Guides ── */}
      <section className="section" style={{ background: 'var(--forest-depth)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
            <div>
              <p className="section-label section-label--light animate-on-scroll">Free Downloads</p>
              <h2 className="headline-lg animate-on-scroll" style={{ color: 'var(--pure-white)' }}>
                Expert Guides,<br /><em>Yours Free</em>
              </h2>
            </div>
          </div>
          <div className="guides-grid stagger-children">
            {FREE_GUIDES.map(guide => (
              <button
                key={guide.id}
                className="guide-card animate-on-scroll"
                onClick={() => setActiveGuide(guide)}
                style={{ background: guide.color }}
              >
                <p className="guide-card__category">{guide.category}</p>
                <h3 className="guide-card__title">{guide.title}</h3>
                <p className="guide-card__subtitle">{guide.subtitle}</p>
                <p className="guide-card__desc">{guide.desc}</p>
                <span className="guide-card__cta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Free
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section" style={{ background: 'var(--surface)', paddingTop: activeCategory === 'All' ? '2rem' : undefined }}>
        <div className="container">

          {/* Category Filter */}
          <div className="filter-tabs" style={{ marginBottom: '2.5rem' }}>
            {ARTICLE_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-tab${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="filter-tab__count">
                  {cat === 'All' ? ARTICLES.length : ARTICLES.filter(a => a.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="articles-grid stagger-children">
            {rest.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {rest.length === 0 && (
            <p style={{ textAlign: 'center', color: 'var(--on-surface-variant)', padding: '4rem 0' }}>
              No articles in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Stay Updated</p>
          <h2>Get Ideas Delivered<br /><em>to Your Inbox</em></h2>
          <p>Join 2,000+ landscape enthusiasts who receive our monthly plant guides and design stories.</p>
          <div className="blog-newsletter">
            <input
              type="email"
              placeholder="Your email address"
              className="blog-newsletter__input"
              aria-label="Email address for newsletter"
            />
            <button className="btn btn-white">Subscribe Free</button>
          </div>
        </div>
      </section>
    </main>
  )
}
