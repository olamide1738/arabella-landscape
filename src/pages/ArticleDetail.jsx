import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { getArticle, ARTICLES } from '../data/articles'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  )
}

export default function ArticleDetail() {
  const { slug } = useParams()
  const sectionRef = useScrollAnimation()
  const article = getArticle(slug)

  if (!article) return <Navigate to="/blog" replace />

  // Related articles (same category, excluding current)
  const related = ARTICLES
    .filter(a => a.category === article.category && a.slug !== slug)
    .slice(0, 2)

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>{article.title} — Arabella Landscape Insights</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} — Arabella Landscape`} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Hero */}
      <section className="article-hero">
        <img src={article.image} alt={article.title} className="article-hero__image" />
        <div className="article-hero__overlay" />
        <div className="container">
          <div className="article-hero__content">
            <nav className="pd-breadcrumb" aria-label="Breadcrumb">
              <Link to="/blog">Insights</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{article.category}</span>
            </nav>
            <h1 className="article-hero__title">{article.title}</h1>
            <div className="article-hero__meta">
              <span className="article-hero__category">{article.category}</span>
              <span>{formatDate(article.date)}</span>
              <span>{article.readTime} read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="article-layout">

            {/* Content */}
            <article className="article-body animate-on-scroll">
              <p className="article-lead">{article.excerpt}</p>
              {article.body.map((block, i) => {
                if (block.type === 'h2') return <h2 key={i} className="article-h2">{block.text}</h2>
                if (block.type === 'p')  return <p  key={i} className="article-p">{block.text}</p>
                return null
              })}

              {/* Back link */}
              <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--outline-variant)' }}>
                <Link to="/blog" className="article-back">
                  <ArrowIcon /> Back to Insights
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="article-sidebar animate-on-scroll animate-right">
              {/* About the firm */}
              <div className="article-sidebar__card">
                <p className="article-sidebar__label">Written by</p>
                <p className="article-sidebar__author">The Arabella Team</p>
                <p className="article-sidebar__bio">
                  Arabella Landscape Limited is Nigeria's leading landscape architecture and site development firm, based in Yaba, Lagos.
                </p>
                <Link to="/about" className="btn btn-secondary btn-sm" style={{ marginTop: '1.25rem', display: 'inline-flex' }}>
                  About Us
                </Link>
              </div>

              {/* CTA */}
              <div className="article-sidebar__card article-sidebar__card--green">
                <p className="article-sidebar__cta-label">Have a project in mind?</p>
                <p className="article-sidebar__cta-text">
                  Our landscape architects offer a free 30-minute initial consultation.
                </p>
                <Link to="/contact" className="btn btn-white btn-sm" style={{ marginTop: '1.25rem', display: 'inline-flex' }}>
                  Get a Free Quote
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section" style={{ background: 'var(--warm-cream)' }}>
          <div className="container">
            <p className="section-label animate-on-scroll">More from {article.category}</p>
            <div className="articles-grid articles-grid--two animate-on-scroll">
              {related.map(a => (
                <Link key={a.slug} to={`/blog/${a.slug}`} className="article-card">
                  <div className="article-card__image">
                    <img src={a.image} alt={a.title} loading="lazy" />
                    <span className="article-card__category">{a.category}</span>
                  </div>
                  <div className="article-card__body">
                    <h3 className="article-card__title" style={{ fontSize: '20px' }}>{a.title}</h3>
                    <p className="article-card__excerpt">{a.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
