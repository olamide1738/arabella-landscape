import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FAQ_DATA = [
  {
    category: 'General',
    items: [
      {
        q: 'Where does Arabella Landscape operate?',
        a: "Our studio is based at 55, Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos. We take on projects across all Nigerian states, with a strong track record in Lagos, Abuja, and Port Harcourt. For large-scale commissions, we can mobilise to any location.",
      },
      {
        q: 'What types of projects does Arabella work on?',
        a: "We work across all scales and sectors: residential gardens and estates, corporate campuses and headquarters, hospitality properties and resorts, public parks and civic spaces, recreational facilities, and large-scale site development and earthworks. No project is too small or too large.",
      },
      {
        q: 'How many projects has Arabella completed?',
        a: "Since 1990 we have completed over 200 projects, ranging from intimate residential courtyards to landmark public spaces like the Abuja City Gate. Our portfolio spans more than 35 years and covers all major Nigerian cities.",
      },
      {
        q: 'Is Arabella a registered firm?',
        a: "Yes. Arabella Landscape Limited is a fully registered Nigerian company (RC number available on request) and our principal landscape architects hold professional registration with the Nigerian Institute of Architects (NIA) and the Landscape Architects Registration Council of Nigeria.",
      },
    ],
  },
  {
    category: 'Services & Process',
    items: [
      {
        q: 'How do I get started with Arabella?',
        a: "Simply contact us via our website contact form, phone, email, or WhatsApp. We'll arrange a free 30-minute initial consultation — by call, video, or in person at our Yaba studio — to discuss your project. There's no obligation and no fee for this first conversation.",
      },
      {
        q: 'What is your typical project timeline?',
        a: "It varies significantly by project type and scale. A residential garden typically takes 4–6 weeks to design and 8–16 weeks to construct. A corporate or public-realm project can take 3–6 months to design and 6–18 months to build. We'll give you an honest programme at the outset based on your specific brief.",
      },
      {
        q: 'Do you manage construction as well as design?',
        a: "Yes. We offer fully integrated design-build services where our team manages the entire process from concept through to handover. This is our preferred model as it ensures design intent is maintained throughout construction. We can also work alongside your own main contractor if preferred.",
      },
      {
        q: 'Do you offer a maintenance service after project completion?',
        a: "Yes. We offer aftercare and maintenance contracts through Arabella Grounds Management, our sister company. These range from periodic visits (monthly or quarterly inspections and seasonal interventions) to fully managed ongoing maintenance programmes with a dedicated grounds team.",
      },
      {
        q: 'Can you work with an existing garden rather than starting from scratch?',
        a: "Absolutely. Renovation and enhancement projects — where we remodel an existing landscape rather than starting from a blank site — make up a significant part of our portfolio. We're skilled at identifying what to retain, what to reinvigorate, and what to replace.",
      },
    ],
  },
  {
    category: 'Pricing & Budget',
    items: [
      {
        q: 'How do you charge for your services?',
        a: "Our design fees are charged as a fixed percentage of the project construction value, typically 8–15% depending on project complexity and scope. For construction work, we provide a detailed fixed-price contract based on a competitive tender. There are no hidden charges.",
      },
      {
        q: 'What is the minimum project budget you accept?',
        a: "We don't publish a fixed minimum, as it varies by project type. As a guide, residential garden commissions typically start from ₦5 million total (design + build). For commercial and public-realm projects, budgets are usually substantially higher. Contact us and we'll give you an honest assessment.",
      },
      {
        q: 'Do you provide a free quote?',
        a: "Our initial 30-minute consultation is free. Following that, we'll issue a fee proposal for our design services. The proposal is detailed and transparent — it explains exactly what work is included at each stage. Construction quotations are provided at tender stage once the design is finalised.",
      },
    ],
  },
  {
    category: 'Plants & Materials',
    items: [
      {
        q: 'Do you use Nigerian native plants?',
        a: "Yes, and we actively champion native species wherever appropriate. Nigerian and West African natives such as Vitex doniana, Parkia biglobosa, Daniellia oliveri, and Spathodea campanulata are ecologically sound, drought-tolerant, and deeply connected to the local landscape character. We balance natives with carefully selected introduced species to achieve the design goals.",
      },
      {
        q: 'Where do your plants come from?',
        a: "We source from a network of nurseries across Lagos, Abuja, Ibadan, and Enugu. For unusual or specimen plants not available locally, we import from certified suppliers in South Africa, the Netherlands, and the UAE — always through NAQS-approved channels. We grow some specialty plants in our own nursery in Yaba.",
      },
      {
        q: 'What materials do you specify for hard landscaping?',
        a: "We work with the full range of materials available in Nigeria — from locally quarried granite and laterite to imported travertine, porcelain pavers, and composite decking. Our material selection is always guided by durability in the local climate, availability of replacement materials for future repairs, aesthetic fit with the design, and budget.",
      },
    ],
  },
]

function ChevronIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      style={{
        width: 20, height: 20, flexShrink: 0,
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
        color: 'var(--vivid-growth)',
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-item__q" onClick={() => setOpen(o => !o)} aria-expanded={open}>
        <span>{q}</span>
        <ChevronIcon open={open} />
      </button>
      <div className="faq-item__body" style={{ maxHeight: open ? '600px' : '0' }}>
        <p className="faq-item__a">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const sectionRef = useScrollAnimation()
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...FAQ_DATA.map(g => g.category)]
  const visibleGroups = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter(g => g.category === activeCategory)

  const totalQuestions = FAQ_DATA.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <main ref={sectionRef}>
      <Helmet>
        <title>FAQ — Arabella Landscape Limited</title>
        <meta name="description" content="Answers to the most common questions about Arabella Landscape's services, process, pricing, and plant palette." />
        <meta property="og:title" content="Frequently Asked Questions — Arabella Landscape" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>Help Centre</p>
          <h1>Frequently Asked Questions</h1>
          <p>{totalQuestions} answers to the questions we hear most often.</p>
        </div>
      </section>

      {/* FAQ Body */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="faq-layout">

            {/* Sidebar */}
            <aside className="faq-sidebar animate-on-scroll animate-left">
              <p className="faq-sidebar__heading">Categories</p>
              <ul className="faq-sidebar__list">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      className={`faq-sidebar__btn${activeCategory === cat ? ' active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
                    >
                      {cat}
                      <span className="faq-sidebar__count">
                        {cat === 'All'
                          ? totalQuestions
                          : FAQ_DATA.find(g => g.category === cat)?.items.length ?? 0}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="faq-sidebar__cta">
                <p>Can't find what you're looking for?</p>
                <Link to="/contact" className="btn btn-primary btn-sm" style={{ marginTop: '1rem', display: 'inline-flex' }}>
                  Contact Us
                </Link>
              </div>
            </aside>

            {/* Questions */}
            <div className="faq-content animate-on-scroll animate-right">
              {visibleGroups.map(group => (
                <div key={group.category} className="faq-group">
                  <h2 className="faq-group__title">{group.category}</h2>
                  <div className="faq-list">
                    {group.items.map(({ q, a }) => (
                      <FAQItem key={q} q={q} a={a} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>
            Still have questions?
          </p>
          <h2>Talk to Our Team</h2>
          <p>Our landscape architects are happy to answer any questions specific to your project or site.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-white btn-lg">Get in Touch</Link>
            <a href="https://wa.me/2348001234567?text=Hello%2C+I+have+a+question+about+a+landscape+project"
              className="btn btn-secondary btn-lg" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
