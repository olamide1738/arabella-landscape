// ─────────────────────────────────────────────────────────────────
// Arabella Landscape — Market Sector Data
// Each market has a slug used for routing: /markets/:slug
// ─────────────────────────────────────────────────────────────────

export const MARKETS = [
  {
    slug: 'residential',
    name: 'Residential',
    label: 'Homes & Estates',
    tagline: 'Your home deserves a landscape as considered as its architecture.',
    heroLine: 'Private gardens and luxury estates that extend your home into every season.',
    image: '/images/abuja-gate-r3.jpg',
    outcome: 'Increased property value. An outdoor life worth living.',
    description: 'From the intimate Lagos courtyard to expansive Abuja estates, Arabella creates residential landscapes that are both breathtaking and deeply personal. We listen first — understanding how you and your family live, entertain, and relax — then design accordingly.',
    subsectors: [
      { name: 'Private Homes & Gardens', text: 'Bespoke garden design and planting for individual homes, from compact urban plots to generous suburban properties. Every design is unique to your site, lifestyle, and taste.' },
      { name: 'Luxury Estates & Compounds', text: 'Full-scale landscape masterplanning for large residential properties — integrating gardens, pools, tennis courts, and outdoor entertaining pavilions into a coherent, beautiful whole.' },
      { name: 'Gated Community Landscapes', text: 'Common areas, entrances, streetscapes, and amenity gardens for residential estates that attract and retain residents and command premium valuations.' },
    ],
    services: ['exterior-landscaping', 'landscape-architecture', 'design-build', 'recreational-planning'],
    stats: [
      { n: '120+', label: 'Residential Projects' },
      { n: '15+',  label: 'Years Experience'      },
      { n: '98%',  label: 'Client Satisfaction'   },
    ],
    projects: [
      { slug: 'banana-island-retreat',    name: 'Banana Island Retreat',    category: 'Residential', image: '/images/abuja-gate-r3.jpg' },
      { slug: 'meridian-corporate-campus',name: 'Victoria Island Garden',   category: 'Residential', image: '/images/abuja-gate-r1.jpg' },
    ],
    testimonial: {
      quote: "Arabella didn't just design our garden — they created an experience that feels completely at one with our home. Every guest asks who did it.",
      author: 'Emeka & Chidinma Eze',
      role:   'Residential Clients — Ikoyi, Lagos',
    },
  },
  {
    slug: 'corporate-commercial',
    name: 'Corporate & Commercial',
    label: 'Offices & Campuses',
    tagline: 'Turn your campus into a talent attraction and retention asset.',
    heroLine: 'Landscape environments that motivate employees, impress clients, and signal corporate ambition.',
    image: '/images/abuja-gate-r1.jpg',
    outcome: 'Attract tenants. Motivate teams. Reduce liability.',
    description: 'A well-designed corporate landscape does more than look impressive — it shapes how people feel about where they work. Arabella creates campus environments that improve wellbeing, reflect brand values, and give organisations a competitive edge in attracting and retaining talent.',
    subsectors: [
      { name: 'Corporate Campuses', text: 'Landscape masterplanning for large office campuses — creating destinations that employees are proud to come to every day, with gardens, walking routes, and outdoor breakout spaces.' },
      { name: 'Commercial Offices & Business Parks', text: 'Professional forecourts, entrance landscapes, and shared amenity areas that create the right first impression for clients, partners, and staff.' },
      { name: 'Industrial & Logistics Facilities', text: 'Perimeter softening, staff amenity areas, and managed green corridors that improve the workplace environment and meet planning requirements.' },
    ],
    services: ['exterior-landscaping', 'landscape-architecture', 'design-build', 'site-development', 'interior-landscaping'],
    stats: [
      { n: '60+', label: 'Commercial Projects' },
      { n: '10+', label: 'Corporate Clients'   },
      { n: '40k+',label: 'sqm Managed'         },
    ],
    projects: [
      { slug: 'meridian-corporate-campus', name: 'Meridian Corporate Campus', category: 'Commercial',    image: '/images/abuja-gate-r1.jpg' },
      { slug: 'abuja-city-gate',           name: 'Abuja City Gate',           category: 'Public Space',  image: '/images/abuja-gate-4.png'  },
    ],
    testimonial: {
      quote: "Arabella transformed our corporate campus into a living, breathing retreat. Every employee comments on how the green spaces have lifted morale and productivity.",
      author: 'Adaeze Okonkwo',
      role:   'CEO, Meridian Holdings — Abuja',
    },
  },
  {
    slug: 'hospitality-retail',
    name: 'Hospitality & Retail',
    label: 'Hotels, Resorts & Retail',
    tagline: 'First impressions are landscaped.',
    heroLine: 'Landscape design that increases dwell time, drives footfall, and builds brand equity.',
    image: '/images/abuja-gate-3.png',
    outcome: 'More footfall. Longer dwell time. Stronger brand equity.',
    description: 'In hospitality and retail, landscape is not decoration — it is part of the product. Arabella works with hotels, resorts, restaurants, and shopping destinations to create outdoor environments that guests and shoppers choose, remember, and return to.',
    subsectors: [
      { name: 'Hotels & Resorts', text: 'Pool decks, roof gardens, entrance courts, spa gardens, and resort-wide masterplanning that creates the sense of total escape guests are paying for.' },
      { name: 'Shopping Centres & Retail Parks', text: 'Landscaped car parks, entrance plazas, internal atrium planting, and seasonal displays that improve footfall and the overall shopping experience.' },
      { name: 'Restaurants & Entertainment Venues', text: 'Terrace planting, outdoor dining environments, living walls, and planted feature walls that create intimate, memorable atmospheres.' },
    ],
    services: ['exterior-landscaping', 'interior-landscaping', 'landscape-architecture', 'design-build'],
    stats: [
      { n: '35+',    label: 'Hospitality Projects' },
      { n: '5-star', label: 'Hotel Partners'        },
      { n: '100%',   label: 'On-Time Delivery'      },
    ],
    projects: [
      { slug: 'lekki-coastal-park',    name: 'Lekki Coastal Park',    category: 'Recreational', image: '/images/abuja-gate-3.png' },
      { slug: 'gra-boulevard-revamp',  name: 'GRA Boulevard Revamp',  category: 'Public Space',  image: '/images/abuja-gate-2.png' },
    ],
    testimonial: {
      quote: "Our guests constantly comment on the garden. It has become the most photographed and talked-about feature of the entire resort.",
      author: 'Kolade Adeyemi',
      role:   'General Manager, The Palms Resort — Lagos',
    },
  },
  {
    slug: 'public-government',
    name: 'Public & Government',
    label: 'Parks, Civic & Infrastructure',
    tagline: 'Public spaces that communities are proud to call their own.',
    heroLine: 'Civic landscapes that foster wellbeing, attract investment, and define a city\'s identity.',
    image: '/images/abuja-gate-4.png',
    outcome: "Healthier communities. Lasting civic pride.",
    description: "Arabella has been trusted by federal, state, and local government bodies to design and build some of Nigeria's most significant public landscapes. We understand the complexity of public sector projects — the procurement processes, multiple stakeholders, the need for durability, and the obligation to create spaces that genuinely serve communities.",
    subsectors: [
      { name: 'Urban Parks & Recreational Grounds', text: 'Destination parks that draw communities together — with play areas, walking trails, sports facilities, performance spaces, and naturalistic planted areas designed for long-term resilience.' },
      { name: 'Road Corridors & Urban Streetscapes', text: "Avenue planting, median landscaping, roundabout treatments, and boulevard schemes that transform the character of a city's public realm." },
      { name: 'Government & Institutional Facilities', text: 'Grounds maintenance, masterplanning, and landscape upgrade programmes for state and federal facilities — ministries, hospitals, universities, and cultural institutions.' },
    ],
    services: ['landscape-architecture', 'site-development', 'design-build', 'recreational-planning', 'exterior-landscaping'],
    stats: [
      { n: '25+',  label: 'Public Projects'        },
      { n: '6',    label: 'State Government Partners'},
      { n: '500k+',label: 'sqm Public Space Created'},
    ],
    projects: [
      { slug: 'abuja-city-gate',    name: 'Abuja City Gate',    category: 'Public Space',  image: '/images/abuja-gate-4.png' },
      { slug: 'lekki-coastal-park', name: 'Lekki Coastal Park', category: 'Recreational',  image: '/images/abuja-gate-3.png' },
    ],
    testimonial: {
      quote: "From concept to completion, Arabella delivered beyond our expectations. Our new public park has become the centrepiece of the entire neighbourhood.",
      author: 'Arc. Babatunde Fashola',
      role:   'Director of Urban Planning — Rivers State',
    },
  },
  {
    slug: 'real-estate-developers',
    name: 'Developers',
    label: 'Real Estate & Mixed-Use',
    tagline: 'Landscapes that sell units and lift valuations.',
    heroLine: 'Differentiate your development, command premium pricing, and accelerate sales with landscape that buyers choose.',
    image: '/images/abuja-gate-2.png',
    outcome: 'Faster sales. Premium pricing. Differentiated schemes.',
    description: 'For property developers, landscape is one of the highest-return investments on site. A well-conceived landscape strategy differentiates a development, drives faster sales at higher price points, and creates the kind of community identity that generates referrals and repeat buyers. Arabella works with developers at every stage — from masterplan to handover.',
    subsectors: [
      { name: 'Residential Housing Schemes', text: "Show gardens, estate entrances, streetscapes, play areas, and communal garden courts designed to sell a lifestyle, not just a house." },
      { name: 'Mixed-Use & Commercial Developments', text: 'Public-realm strategies, podium gardens, ground-floor activation planting, and roof terraces that make mixed-use schemes more liveable and leasable.' },
      { name: 'Masterplanning & Infrastructure', text: 'Landscape infrastructure planning from day one — integrating drainage, planting corridors, active frontages, and green infrastructure into the development framework.' },
    ],
    services: ['landscape-architecture', 'site-development', 'design-build', 'exterior-landscaping', 'recreational-planning'],
    stats: [
      { n: '30+', label: 'Developer Projects'       },
      { n: '₦2B+',label: 'Project Value Delivered'   },
      { n: '15+', label: 'Developer Partnerships'    },
    ],
    projects: [
      { slug: 'gra-boulevard-revamp',      name: 'GRA Boulevard Revamp',      category: 'Public Space', image: '/images/abuja-gate-2.png'  },
      { slug: 'meridian-corporate-campus', name: 'Meridian Corporate Campus',  category: 'Commercial',   image: '/images/abuja-gate-r1.jpg' },
    ],
    testimonial: {
      quote: "Our sales team credits the landscaping with a meaningful uplift in enquiry rates and significantly faster sales compared to our previous schemes.",
      author: 'Yetunde Bakare',
      role:   'Development Director, Pinnacle Properties — Lagos',
    },
  },
]

export function getMarket(slug) {
  return MARKETS.find(m => m.slug === slug)
}
