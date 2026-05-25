// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — Service Data
// Each service has a slug used for routing: /services/:slug
// ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    slug: 'design',
    id: 'design',
    label: 'Landscape Architecture',
    title: 'Design',
    tagline: 'Every great outdoor space begins with a great drawing. We listen, survey, and think before we put pen to paper.',
    image: '/assets/images/service-architecture.png',
    heroImage: '/images/abuja-gate-r1.jpg',
    color: 'linear-gradient(135deg, #002d1a 0%, #004E30 60%, #006038 100%)',

    overview: [
      'Our design service covers everything from early-stage concept sketches to full construction drawing packages. We work with private clients, developers, architects, and public agencies — at any scale, from a private residential garden to a multi-hectare civic masterplan.',
      'The process begins with a proper understanding of the site and the people who will use it. Soil, drainage, sun orientation, existing planting, and how you want to live in the space — all of this feeds the design before anything is drawn. The result is a landscape that feels genuinely tailored rather than applied.',
    ],

    features: [
      { icon: 'grid',   label: 'Concept Design & Masterplanning',    text: 'Spatial concepts, mood boards, and masterplans that establish the vision before any detail is committed.' },
      { icon: 'sun',    label: '3D Visualisation & Rendering',        text: 'Photorealistic renders and walk-through animations so you can see exactly what you are approving.' },
      { icon: 'leaf',   label: 'Planting Design',                     text: 'Detailed planting schedules using the right species for your site, climate, and maintenance budget.' },
      { icon: 'tools',  label: 'Construction Drawing Package',        text: 'Full working drawings, material specifications, and schedules ready for contractor tender and build.' },
      { icon: 'pipe',   label: 'Irrigation & Drainage Design',        text: 'Water-sensitive design integrating smart irrigation, SuDS, and stormwater management from the outset.' },
      { icon: 'home',   label: 'Site Survey & Analysis',              text: 'Topographic surveys, soil testing, microclimate analysis, and constraint mapping before design begins.' },
      { icon: 'wall',   label: 'Planning Submission Support',         text: 'Landscape and Visual Impact Assessments, design statements, and drawings for planning applications.' },
      { icon: 'tree',   label: 'Architect & Engineer Coordination',   text: 'Embedded collaboration with the wider design team so landscape is never an afterthought on the project.' },
    ],

    process: [
      { n: '01', title: 'Brief & Site Visit',            text: 'We visit the site, ask the right questions, and establish a clear brief — before any designing starts.' },
      { n: '02', title: 'Concept Design',                text: 'Alternative spatial ideas are sketched, tested, and refined into a preferred concept for your approval.' },
      { n: '03', title: 'Developed Design',              text: 'The approved concept is developed into detailed plans with materials, planting, grading, and drainage.' },
      { n: '04', title: 'Construction Documentation',    text: 'A full drawing and specification package is produced, ready to go to tender or straight to our own construction team.' },
      { n: '05', title: 'Construction Support',          text: 'We remain involved on site during build — answering questions, checking quality, and protecting the design intent.' },
    ],

    whoFor: [
      { title: 'Private Homeowners',         text: 'Residential gardens of all sizes, from a compact Lagos courtyard to a sprawling Abuja estate.' },
      { title: 'Property Developers',        text: 'Landscape design packages for residential and mixed-use developments, show gardens, and communal grounds.' },
      { title: 'Corporate & Hospitality',    text: 'Corporate headquarters, hotel grounds, and hospitality properties where first impressions matter.' },
      { title: 'Government & Public Bodies', text: 'Civic spaces, parks, and public realm projects requiring rigorous design and planning expertise.' },
    ],

    faq: [
      { q: 'Do you only design, or do you also build?',
        a: 'We do both — and we are at our most effective when we do both together. Our design-to-build model means the same team that draws the landscape also builds it, which eliminates the gaps that appear when design and construction are separated.' },
      { q: 'How long does the design process take?',
        a: 'A residential garden concept typically takes 3–5 weeks. A full construction drawing package takes 8–16 weeks. Large masterplanning commissions can take 4–6 months. We always agree a programme at the start and manage it closely.' },
      { q: 'Can I just commission the design and use my own contractor?',
        a: 'Yes, absolutely. We will produce a complete construction drawing and specification package that any competent contractor can build from. We can also provide construction support visits if you want us involved without taking on the full build.' },
    ],

    highlightProjects: ['abuja-city-gate', 'maitama-garden-estate', 'gra-boulevard-revamp'],
  },

  {
    slug: 'construction',
    id: 'construction',
    label: 'Site Works & Installation',
    title: 'Construction',
    tagline: 'We build what we design — and we build it to last. Precision groundworks, planting, and finishing, executed without shortcuts.',
    image: '/assets/images/service-designbuild.png',
    heroImage: '/images/abuja-gate-1.png',
    color: 'linear-gradient(135deg, #003520 0%, #005030 100%)',

    overview: [
      "Arabella's construction team handles every stage of landscape installation — from the first earthwork cut to the final lighting commission. Our crews are experienced in civil groundworks, hard landscaping, planting, irrigation, drainage, timber and steel structures, and outdoor lighting. We work on projects of all scales and can mobilise across Nigeria.",
      'We operate both as an integrated design-build team (where we designed the project too) and as a specialist landscape contractor working alongside architects, main contractors, and developers. Either way, the standard of work is the same: built to the drawing, on programme, and without excuses.',
    ],

    features: [
      { icon: 'wall',   label: 'Earthworks & Grading',              text: 'Cut and fill, terracing, landform sculpting, and precision grading to establish the right topography.' },
      { icon: 'drop',   label: 'Drainage & Stormwater',             text: 'Surface water drainage networks, French drains, soakaways, attenuation, and SuDS installation.' },
      { icon: 'stone',  label: 'Paving & Hard Landscaping',         text: 'Natural stone, concrete, brick, and block paving installed to structural specifications for any loading.' },
      { icon: 'leaf',   label: 'Planting & Turf Installation',      text: 'Soil preparation, planting of trees, shrubs and groundcover, lawn seeding and turf laying.' },
      { icon: 'pipe',   label: 'Irrigation Systems',                text: 'Smart drip and spray irrigation systems installed for water efficiency and ease of ongoing management.' },
      { icon: 'sun',    label: 'Outdoor Lighting',                  text: 'Feature uplighting, pathway lighting, and LED landscape schemes installed and commissioned.' },
      { icon: 'tools',  label: 'Pergolas & Structures',             text: 'Timber and steel pergolas, gazebos, shade structures, and bespoke feature elements fabricated and installed.' },
      { icon: 'home',   label: 'Retaining Walls',                   text: 'Engineered retaining walls in concrete, masonry, Gabion, and natural stone — from garden terraces to major civil structures.' },
    ],

    process: [
      { n: '01', title: 'Site Set-Up & Mobilisation',    text: 'Programme agreed, site established, materials ordered and delivery scheduled before the first crew arrives.' },
      { n: '02', title: 'Groundworks & Civil Phase',     text: 'Earthworks, drainage, underground utilities, and sub-base construction completed before any surface works begin.' },
      { n: '03', title: 'Hard Landscaping',              text: 'Paving, edging, walls, structures, and all hardscape elements built to drawing and inspected against specification.' },
      { n: '04', title: 'Planting & Soft Works',         text: 'Soil preparation, tree and shrub planting, turf laying, irrigation commissioning, and lighting installation.' },
      { n: '05', title: 'Snagging & Handover',           text: 'Full site inspection against the drawing package, snagging resolved, and handover documentation provided.' },
    ],

    whoFor: [
      { title: 'Private Clients',          text: "Residential and estate landscape construction from start to finish — or as a contractor working to your own designer's drawings." },
      { title: 'Property Developers',      text: 'Landscape packages for residential, commercial, and mixed-use developments with fixed-price contracts and reliable programmes.' },
      { title: 'Main Contractors',         text: 'Specialist landscape subcontract works within a larger construction programme — coordinated, reliable, and properly resourced.' },
      { title: 'Hotels & Institutions',    text: 'Large-scale grounds construction for hospitality, corporate, and public-sector clients requiring multi-discipline expertise.' },
    ],

    faq: [
      { q: "Can you build from another architect's drawings?",
        a: 'Yes. We regularly work as a specialist landscape contractor building to drawings produced by other designers. Provide us with a drawing and specification package and we will price it and build it.' },
      { q: 'How long does construction take?',
        a: 'A residential garden typically takes 4–12 weeks on site. A large commercial or public project may take 6–18 months. We always produce a detailed programme before starting and update it weekly during the works.' },
      { q: 'Do you offer a defects liability period?',
        a: 'Yes. A standard 12-month defects period follows every project handover. Any plant failures, settlement issues, or installation defects that appear within that period are rectified at no cost.' },
    ],

    highlightProjects: ['stanbic-ibtc-head-office', 'muri-okunola-park', 'southern-sun-hotel-ikoyi'],
  },

  {
    slug: 'maintenance',
    id: 'maintenance',
    label: 'Grounds Management',
    title: 'Maintenance',
    tagline: 'A landscape is only as good as the care it receives after handover. We keep yours at its best, year-round.',
    image: '/assets/images/service-exterior.png',
    heroImage: '/images/abuja-gate-3.png',
    color: 'linear-gradient(135deg, #1a4a2e 0%, #006038 100%)',

    overview: [
      "Arabella's maintenance service — delivered through Arabella Grounds Management — provides ongoing care programmes for residential estates, corporate grounds, hotels, public parks, and any landscape that deserves to be kept properly. We are not a cut-and-go service. We know the plants, understand the design intent, and manage your landscape the way it was meant to be managed.",
      'Our programmes range from periodic visits — monthly or quarterly inspections with seasonal interventions — to fully managed contracts with a dedicated grounds team on site every week. Every contract is bespoke to the specific landscape we are maintaining, not a generic schedule applied regardless of what is planted or how the site is used.',
    ],

    features: [
      { icon: 'leaf',   label: 'Lawn Mowing & Edging',              text: 'Regular cutting, edging, scarifying, aeration, and seasonal feed programmes for all lawn types.' },
      { icon: 'tree',   label: 'Shrub & Hedge Pruning',             text: 'Formative and maintenance pruning, topiary, and hedge cutting to the correct schedule for each species.' },
      { icon: 'drop',   label: 'Irrigation Servicing',              text: 'Regular inspection, adjustment, and repair of irrigation systems to maintain water efficiency.' },
      { icon: 'sun',    label: 'Seasonal Planting',                 text: 'Rotating bedding and seasonal colour planting to keep flower beds vibrant throughout the year.' },
      { icon: 'tools',  label: 'Tree Surgery & Inspection',         text: 'Crown management, deadwooding, storm damage response, and annual tree safety inspections.' },
      { icon: 'pipe',   label: 'Fertilisation & Soil Care',         text: 'Soil testing, targeted fertilisation programmes, mulching, and soil amendment to keep plants thriving.' },
      { icon: 'wall',   label: 'Water Feature Servicing',           text: 'Regular cleaning, pump inspection, algae management, and water chemistry for ponds and fountains.' },
      { icon: 'grid',   label: 'Site Inspection Reports',           text: 'Written condition reports after every visit — what was done, what was noted, and what is recommended next.' },
    ],

    process: [
      { n: '01', title: 'Site Assessment',              text: 'We walk the site, assess the planting and infrastructure, and agree a maintenance specification tailored to what is actually there.' },
      { n: '02', title: 'Programme Agreement',          text: 'A bespoke maintenance schedule and contract are agreed — frequency, scope, and response times all documented clearly.' },
      { n: '03', title: 'Scheduled Visits',             text: 'Our trained grounds teams visit on the agreed schedule, carrying out all programme works with care and skill.' },
      { n: '04', title: 'Condition Reporting',          text: 'After every visit, you receive a written report on what was done and any issues observed, with photographs.' },
      { n: '05', title: 'Annual Review',                text: 'Once a year we review the programme with you — what is working, what the landscape needs next, and any enhancement works worth considering.' },
    ],

    whoFor: [
      { title: 'Residential Estates',        text: 'Communal grounds and private estate gardens where consistent, professional care is expected as standard.' },
      { title: 'Corporate Headquarters',     text: 'Office grounds and corporate campuses where the landscape is part of how the business presents itself.' },
      { title: 'Hotels & Hospitality',       text: 'Hotel gardens, resort grounds, and pool landscapes that need to look immaculate every day, not just after a visit.' },
      { title: 'Public Parks & Institutions', text: 'Public park management, school grounds care, and institutional landscape maintenance programmes.' },
    ],

    faq: [
      { q: 'What is included in a maintenance contract?',
        a: 'Every contract is bespoke — we scope it to your specific landscape. Typical inclusions are: lawn mowing and edging, shrub and hedge pruning, seasonal planting, irrigation servicing, water feature maintenance, tree inspections, fertilisation, and written site reports. We do not apply a standard package regardless of what is planted.' },
      { q: 'How often will you visit?',
        a: 'Visit frequency is agreed as part of the contract. Most corporate and hotel grounds require weekly visits. Residential estates typically need fortnightly or monthly attendance. We will recommend the right frequency based on the site and the planting.' },
      { q: 'Can you maintain a landscape you did not design or build?',
        a: 'Yes, and we do it regularly. We will assess the existing landscape, understand how it was intended to perform, and maintain it accordingly. Sometimes we identify improvements — we will always let you know, but there is no obligation to act.' },
    ],

    highlightProjects: ['gtbank-hni-ikoyi', 'southern-sun-hotel-ikoyi', 'muri-okunola-park'],
  },

  {
    slug: 'farm',
    id: 'farm',
    label: 'Plant Nursery',
    title: 'Farm',
    tagline: 'We grow what we plant. Our nursery produces the trees, shrubs, and specimens that go into every Arabella project.',
    image: '/assets/images/service-recreational.png',
    heroImage: '/images/abuja-gate-r3.jpg',
    color: 'linear-gradient(135deg, #2d5016 0%, #487a26 100%)',

    overview: [
      'Arabella operates its own plant nursery and growing farm — an asset that gives us direct control over the quality, availability, and provenance of the plants that go into our projects. Rather than relying solely on the open market, we propagate and grow the trees, shrubs, groundcover, and seasonal plants we need, to the specification our designs require.',
      'The farm focuses primarily on Nigerian native and tropical species that are suited to the climate and often harder to source commercially at the right quality. This gives our clients planting that is genuinely fit for purpose — not whatever was available at the nearest nursery on the day. Surplus stock is available for direct sale to clients, landscape contractors, and the public.',
    ],

    features: [
      { icon: 'leaf',   label: 'Native Species Propagation',        text: 'Propagation and growing of Nigerian native trees and shrubs not widely available through commercial nurseries.' },
      { icon: 'tree',   label: 'Specimen Tree Growing',             text: 'Mature specimen trees grown to the sizes our projects require — not sourced at the last minute from the open market.' },
      { icon: 'grid',   label: 'Tropical Shrubs & Groundcover',     text: 'A rotating stock of tropical shrubs, groundcover, climbers, and seasonal colour plants ready for project use.' },
      { icon: 'drop',   label: 'Controlled Growing Conditions',     text: 'Structured growing beds, shade houses, and irrigation ensure healthy, well-rooted stock before it reaches site.' },
      { icon: 'sun',    label: 'Plant Quality Assurance',           text: 'Every plant leaving the farm is inspected for root health, form, and freedom from disease before delivery.' },
      { icon: 'tools',  label: 'Direct Project Supply',             text: 'Plants grown to the specification of specific Arabella projects — the right species, the right size, at the right time.' },
      { icon: 'home',   label: 'Third-Party Sales',                 text: 'Surplus nursery stock available for purchase by landscape contractors, architects, and the general public.' },
      { icon: 'pipe',   label: 'Horticultural Advice',              text: 'Our horticulturalists can advise on species selection, establishment care, and long-term management for any project.' },
    ],

    process: [
      { n: '01', title: 'Project Planting Schedule',     text: 'When a project is confirmed, the planting schedule is shared with the farm team so growing programmes can be planned ahead of time.' },
      { n: '02', title: 'Propagation & Sourcing',        text: 'Seed, cutting, or bare-root stock is sourced from trusted suppliers and propagated on-farm or grown on from young stock.' },
      { n: '03', title: 'Grow-On Programme',             text: 'Plants are grown in controlled conditions — correct substrate, irrigation, nutrition, and light — until they reach the required specification.' },
      { n: '04', title: 'Inspection & Hardening',        text: 'Before delivery, stock is inspected for quality, hardened off for site conditions, and prepared for transportation.' },
      { n: '05', title: 'Site Delivery & Planting',      text: 'Plants are delivered directly to site and handed over to the construction team for installation — no unnecessary handling or holding time.' },
    ],

    whoFor: [
      { title: 'Arabella Project Clients',      text: 'Plants grown specifically for your project — the right species, correctly specified, ready when your construction programme needs them.' },
      { title: 'Landscape Contractors',         text: 'Reliable supply of quality-assured tropical and native planting stock for landscape projects across Nigeria.' },
      { title: 'Architects & Developers',       text: 'Specialist advice on planting selection and direct supply of specimen trees and statement planting for development projects.' },
      { title: 'The General Public',            text: 'Surplus nursery stock available for sale direct from the farm — healthy, well-grown plants at fair prices.' },
    ],

    faq: [
      { q: 'Can I buy plants directly from the farm?',
        a: 'Yes. We sell surplus nursery stock directly to the public, landscape contractors, and developers. Contact us with what you are looking for and we will let you know what we have available and at what price.' },
      { q: 'What species do you grow?',
        a: 'Our focus is on Nigerian native and tropical species suited to the local climate — including trees, shrubs, groundcover, climbers, and seasonal plants. We also grow some commonly used exotic ornamentals that perform reliably in Nigerian conditions. Contact us for a current availability list.' },
      { q: 'How far in advance do you need to plan plant supply for a project?',
        a: "For standard shrubs and groundcover, 4–8 weeks is usually sufficient. For specimen trees or unusual species, 3–6 months' lead time allows us to grow to the right specification. The earlier we know about a project, the better we can plan the growing programme." },
    ],

    highlightProjects: ['banana-island-retreat', 'maitama-garden-estate', 'asokoro-ridge-gardens'],
  },
]

// Helper: get a service by slug
export function getService(slug) {
  return SERVICES.find(s => s.slug === slug) ?? null
}
