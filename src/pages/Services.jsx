import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const SERVICES = [
  {
    id: 'exterior',
    label: 'Residential & Commercial',
    title: 'Exterior Landscaping',
    color: 'linear-gradient(135deg, #002d1a 0%, #004E30 60%, #006038 100%)',
    image: '/images/abuja-gate-r1.jpg',
    description: `Our exterior landscaping service encompasses the full spectrum of outdoor design and installation. From sweeping lawns and sculptural planting schemes to water features, boundary treatments, and bespoke lighting, we craft exterior environments that perform beautifully across all seasons.`,
    extra: `Whether you're looking to transform a domestic garden, the grounds of a hotel or corporate headquarters, or a multi-acre estate, our horticultural experts and landscape architects collaborate to deliver a cohesive vision that reflects your identity and enhances the value of your property.`,
    features: ['Garden design & planting', 'Lawn establishment & turf', 'Water features & ponds', 'Boundary walls & fencing', 'Outdoor lighting', 'Irrigation systems'],
  },
  {
    id: 'interior',
    label: 'Biophilic Design',
    title: 'Interior Landscaping',
    color: 'linear-gradient(135deg, #1a4a2e 0%, #006038 100%)',
    image: '/images/abuja-gate-r3.jpg',
    description: `Bring the energy and calm of nature into your interior spaces. Our interior landscaping specialists design and install living walls, moss panels, curated indoor plant displays, and bespoke planting arrangements that transform lobbies, offices, retail environments, and homes.`,
    extra: `Beyond aesthetics, our biophilic installations actively improve air quality, reduce stress, and enhance the wellbeing of everyone who inhabits the space. We also offer comprehensive maintenance contracts to keep your interiors looking pristine year-round.`,
    features: ['Living walls & green panels', 'Indoor plant curation', 'Moss art installations', 'Potted tree placement', 'Maintenance contracts', 'Air-purifying plant selection'],
  },
  {
    id: 'architecture',
    label: 'Master Planning',
    title: 'Landscape Architecture',
    color: 'linear-gradient(135deg, #0f3d1f 0%, #005535 100%)',
    image: '/images/abuja-gate-r5.jpg',
    description: `Our landscape architecture practice combines environmental science, spatial planning, and creative design to produce masterplans and detailed design packages for complex sites. We work closely with architects, engineers, and planners to ensure landscapes integrate seamlessly with built form.`,
    extra: `From large-scale urban regeneration schemes to sensitive ecological sites requiring careful restoration, our registered landscape architects bring both rigour and imagination to every commission.`,
    features: ['Master planning & site analysis', '3D visualisation & rendering', 'Planting design', 'Environmental impact assessment', 'Coordination with architects', 'Planning submission support'],
  },
  {
    id: 'recreational',
    label: 'Community & Leisure',
    title: 'Recreational Planning',
    color: 'linear-gradient(135deg, #1e6b3a 0%, #00904d 100%)',
    image: '/images/abuja-gate-3.png',
    description: `Great communities are built around great shared spaces. Our recreational planning team designs parks, playgrounds, sports facilities, and leisure zones that bring people together, encourage physical activity, and strengthen community bonds.`,
    extra: `We specialise in inclusive design — creating spaces that are accessible and welcoming to everyone, from young children to older adults. Each project is informed by consultation with stakeholders and future users.`,
    features: ["Children's playgrounds", 'Sports courts & pitches', 'Jogging & cycling trails', 'Park furniture & shelters', 'Outdoor fitness equipment', 'Community seating areas'],
  },
  {
    id: 'design-build',
    label: 'Turnkey Delivery',
    title: 'Design-Build Services',
    color: 'linear-gradient(135deg, #003520 0%, #005030 100%)',
    image: '/images/abuja-gate-1.png',
    description: `Our design-build model streamlines project delivery by placing design and construction under a single contract. This integrated approach reduces risk, compresses programme, and ensures perfect alignment between design intent and built outcome.`,
    extra: `You benefit from a single point of accountability throughout the entire project lifecycle — from initial concept sketches all the way through to handover of the completed landscape.`,
    features: ['Concept through construction', 'Single contract & accountability', 'Value engineering', 'Programme management', 'Quality control', 'Defects liability period'],
  },
  {
    id: 'site-development',
    label: 'Civil Works',
    title: 'Site Development',
    color: 'linear-gradient(135deg, #2d5016 0%, #487a26 100%)',
    image: '/images/abuja-gate-r4.jpg',
    description: `Successful landscapes begin with a well-prepared site. Our civil and site development team handles all the groundwork — earthworks and grading, drainage engineering, retaining structures, hardscape construction, and utility connections.`,
    extra: `We work on new-build sites, brownfield regeneration, and the redevelopment of existing landscapes. Our teams operate across Lagos, Abuja, Port Harcourt, and increasingly across West Africa.`,
    features: ['Earthworks & grading', 'Drainage & stormwater', 'Retaining walls', 'Paving & hardscape', 'Utility coordination', 'Site clearance'],
  },
]

/* Real image component */
function ServiceImage({ image, title }) {
  return (
    <div className="service-detail__image-placeholder" style={{ position: 'relative', overflow: 'hidden' }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--rounded-lg)' }}
      />
    </div>
  )
}

export default function Services() {
  const sectionRef = useScrollAnimation()

  return (
    <main ref={sectionRef}>
      <section className="page-hero">
        <div className="container">
          <p className="section-label" style={{ justifyContent: 'center' }}>What We Offer</p>
          <h1>Our Services</h1>
          <p>End-to-end landscape solutions — from visionary design through meticulous construction and ongoing care.</p>
        </div>
      </section>

      {SERVICES.map(({ id, label, title, color, image, description, extra, features }, i) => (
        <section key={id} className="section"
          style={{ background: i % 2 === 0 ? 'var(--surface)' : 'var(--surface-container-low)' }}>
          <div className="container">
            <div className={`services-detail-grid${i % 2 !== 0 ? ' reverse' : ''}`}>
              <div className="animate-on-scroll animate-left">
                <p className="service-detail__label">{label}</p>
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{extra}</p>
                <ul>
                  {features.map(f => <li key={f}>{f}</li>)}
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                  Request a Quote
                </Link>
              </div>

              <div className="animate-on-scroll animate-right">
                <ServiceImage image={image} title={title} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="cta-section">
        <div className="container">
          <p className="section-label section-label--light" style={{ justifyContent: 'center' }}>Ready to Begin?</p>
          <h2>Let's Discuss<br /><em>Your Project</em></h2>
          <p>Every great landscape starts with a conversation. Tell us about your vision.</p>
          <div className="btn-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
            <Link to="/projects" className="btn btn-white btn-lg">See Our Work</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
