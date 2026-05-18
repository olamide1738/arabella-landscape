// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — Service Data
// Each service has a slug used for routing: /services/:slug
// ─────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    slug: 'exterior-landscaping',
    id: 'exterior',
    label: 'Residential & Commercial',
    title: 'Exterior Landscaping',
    tagline: 'Extraordinary outdoor environments crafted for every scale — from the intimate family garden to the grand corporate estate.',
    image: '/assets/images/service-exterior.png',
    heroImage: '/images/abuja-gate-r1.jpg',
    color: 'linear-gradient(135deg, #002d1a 0%, #004E30 60%, #006038 100%)',

    overview: [
      'Our exterior landscaping service is the full expression of what Arabella does best — combining horticultural expertise, creative design, and skilled construction to transform raw outdoor spaces into living, breathing environments. We work across all scales and typologies, from the smallest urban courtyard to sprawling multi-hectare estates.',
      'Every project begins with a deep understanding of the site — its soil, microclimate, drainage, existing planting, and the way its owners move through and use it. From there, our designers develop planting schemes, material palettes, and spatial compositions that are both beautiful and functional. Our construction teams then execute with precision, using the best available plants, materials, and craftsmanship.',
    ],

    features: [
      { icon: 'leaf',    label: 'Garden Design & Planting',        text: 'Bespoke planting schemes using native and exotic species suited to the Nigerian climate.' },
      { icon: 'grid',    label: 'Lawn Establishment & Turf',       text: 'Natural and synthetic lawn installation, soil preparation, and irrigation-ready base systems.' },
      { icon: 'drop',    label: 'Water Features & Ponds',          text: 'Fountains, cascades, koi ponds, and naturalistic water bodies designed for year-round beauty.' },
      { icon: 'sun',     label: 'Outdoor Lighting',                text: 'Feature uplighting, pathway illumination, and LED landscape schemes for after-dark impact.' },
      { icon: 'pipe',    label: 'Irrigation Systems',              text: 'Smart drip and spray irrigation designed for water efficiency and ease of maintenance.' },
      { icon: 'wall',    label: 'Boundary Walls & Fencing',        text: 'Rendered walls, living hedges, timber screens, and ornamental metalwork for privacy and definition.' },
      { icon: 'stone',   label: 'Paving & Hardscape',             text: 'Natural stone, concrete setts, timber decking, and bespoke paving laid to exacting standards.' },
      { icon: 'home',    label: 'Pool & Terrace Surrounds',        text: 'Seamless integration of landscape with swimming pools, terraces, and outdoor entertainment areas.' },
      { icon: 'tree',    label: 'Specimen Tree Planting',          text: 'Sourcing and planting of mature specimen trees for immediate impact and long-term canopy.' },
      { icon: 'wrench',  label: 'Timber & Steel Structures',       text: 'Pergolas, gazebos, timber shade structures, and bespoke steel feature elements.' },
      { icon: 'leaf2',   label: 'Seasonal Colour Planting',        text: 'Rotating bedding schemes that keep the garden vivid and interesting throughout the year.' },
      { icon: 'tools',   label: 'Maintenance Programmes',          text: 'Regular aftercare contracts ensuring your landscape stays healthy, pristine, and evolving.' },
    ],

    process: [
      { n: '01', title: 'Site Survey & Analysis',       text: 'We visit the site, assess conditions — soil, drainage, sun exposure, existing planting, and how you use the space — and listen carefully to your brief.' },
      { n: '02', title: 'Concept Design',               text: 'Our designers produce concept drawings, mood boards, and planting palettes that capture your vision and the character of the site.' },
      { n: '03', title: 'Detailed Design & Costing',    text: 'Concept is refined into detailed plans with material specifications, planting schedules, and a full costed proposal for your approval.' },
      { n: '04', title: 'Construction & Installation',  text: 'Our skilled site teams execute the works — earthworks, hard landscaping, planting, structures, lighting, and irrigation — in the agreed programme.' },
      { n: '05', title: 'Handover & Aftercare',         text: 'We walk you through your new landscape, provide a care guide, and offer maintenance packages to keep it thriving for years to come.' },
    ],

    whoFor: [
      { title: 'Homeowners',            text: 'Private residences of any size — from terraced gardens and courtyard makeovers to luxury estate landscapes.' },
      { title: 'Property Developers',   text: 'Landscape packages for residential developments, show gardens, and communal estate grounds.' },
      { title: 'Hotels & Hospitality',  text: 'Arrival courts, pool gardens, event lawns, and rooftop terraces for hospitality properties demanding resort quality.' },
      { title: 'Corporate Clients',     text: 'Corporate HQ grounds, staff gardens, outdoor meeting spaces, and entrance landscapes for office developments.' },
    ],

    faq: [
      { q: 'How long does a typical garden installation take?',
        a: 'For a standard residential garden, construction usually takes 2–6 weeks depending on size and complexity. Large estates or commercial projects can run for 3–6 months. We always agree a programme upfront and keep you informed throughout.' },
      { q: 'Do you offer maintenance after the installation is complete?',
        a: 'Yes. We offer flexible maintenance contracts tailored to the size and complexity of your landscape — from monthly visits to weekly programmes. Our teams handle pruning, lawn care, irrigation checks, seasonal replanting, and water feature servicing.' },
      { q: 'Can you redesign an existing garden rather than starting from scratch?',
        a: 'Absolutely. Many of our projects involve refreshing, restructuring, or extending existing gardens. We assess what is worth retaining and integrate it into the new design wherever possible.' },
      { q: 'Which plants do you use — can I request specific species?',
        a: 'We work extensively with Nigerian native species as well as proven tropical and subtropical plants that thrive in our climate. We are always happy to accommodate specific requests and will advise honestly if a species is unsuitable for your site.' },
    ],

    highlightProjects: ['banana-island-retreat', 'maitama-garden-estate', 'asokoro-ridge-gardens'],
  },

  {
    slug: 'interior-landscaping',
    id: 'interior',
    label: 'Biophilic Design',
    title: 'Interior Landscaping',
    tagline: 'Living installations that bring nature indoors — and transform how people feel in a space.',
    image: '/assets/images/service-interior.png',
    heroImage: '/images/abuja-gate-r3.jpg',
    color: 'linear-gradient(135deg, #1a4a2e 0%, #006038 100%)',

    overview: [
      'Biophilic design — the integration of nature into built interior environments — is one of the most powerful tools available for improving the wellbeing, productivity, and atmosphere of a space. Arabella\'s interior landscaping team designs and installs living walls, moss panels, curated indoor plant displays, and architectural planting arrangements that transform lobbies, offices, retail floors, restaurants, and homes.',
      'Beyond aesthetics, our installations actively improve indoor air quality, reduce ambient noise, regulate humidity, and lower measurable stress levels in the people who occupy the space. We take a rigorous approach to plant selection — choosing species proven to perform in specific interior conditions — and we back every installation with comprehensive maintenance programmes to keep your interiors looking precisely as designed.',
    ],

    features: [
      { icon: 'leaf',   label: 'Living Walls & Green Panels',     text: 'Floor-to-ceiling planted walls using modular systems with integrated irrigation and drainage.' },
      { icon: 'grid',   label: 'Moss Art Installations',          text: 'Preserved and live moss panels, bespoke art pieces, and acoustic moss walls.' },
      { icon: 'tree',   label: 'Indoor Plant Curation',           text: 'Carefully selected plant arrangements for desks, shelves, partitions, and feature spaces.' },
      { icon: 'drop',   label: 'Potted Tree Placement',           text: 'Large-format indoor trees (Ficus, Dracaena, Ravenala) for dramatic spatial impact.' },
      { icon: 'home',   label: 'Atrium & Lobby Planting',        text: 'Multi-storey interior planting schemes for atria, hotel lobbies, and retail environments.' },
      { icon: 'leaf2',  label: 'Air-Purifying Plant Selection',   text: 'Scientifically selected species proven to remove VOCs and improve indoor air quality.' },
      { icon: 'sun',    label: 'Grow Lighting Integration',       text: 'Horticultural LED grow lights specified and installed for spaces without adequate natural light.' },
      { icon: 'tools',  label: 'Maintenance Contracts',           text: 'Regular care visits — watering, pruning, feeding, replacing — keeping interiors looking impeccable.' },
    ],

    process: [
      { n: '01', title: 'Space Assessment',           text: 'We assess light levels, humidity, airflow, temperature, and structural constraints to determine which plants and systems will thrive in your specific environment.' },
      { n: '02', title: 'Biophilic Design Concept',  text: 'Our designers produce concept visuals showing how living walls, specimen plants, and moss panels will be positioned and how they integrate with your interior design.' },
      { n: '03', title: 'Plant & Material Curation', text: 'Every species is selected on the basis of interior performance, not just appearance. We source from specialist nurseries and specify appropriate substrates and irrigation.' },
      { n: '04', title: 'Installation',              text: 'Our interior installation teams work cleanly and efficiently within operational environments — we regularly install in live offices and hotels with minimal disruption.' },
      { n: '05', title: 'Maintenance Programme',     text: 'A bespoke maintenance schedule is agreed at handover. Our technicians visit regularly to water, feed, prune, and replace any plants that are not performing.' },
    ],

    whoFor: [
      { title: 'Corporate Offices',       text: 'Reception areas, boardrooms, breakout zones, and open-plan floors that benefit from proven productivity-boosting greenery.' },
      { title: 'Hotels & Restaurants',    text: 'Statement lobby installations, restaurant feature walls, and spa environments where atmosphere is everything.' },
      { title: 'Retail Environments',     text: 'Living feature walls and plant displays that enhance brand identity and dwell time in retail and showroom spaces.' },
      { title: 'Private Residences',      text: 'Bespoke living walls and curated plant collections for high-end homes where the interior extends the landscape.' },
    ],

    faq: [
      { q: 'Do interior plants need special lighting?',
        a: 'It depends on the species and your space. Many robust interior plants perform well in typical office or residential lighting. For spaces with low natural light, we specify and install horticultural LED grow lights — integrated discreetly into the installation.' },
      { q: 'How often does maintenance happen?',
        a: 'Most of our interior maintenance contracts involve fortnightly or monthly visits. The frequency depends on the size and complexity of the installation and the species used. We agree a schedule that works for your operations.' },
      { q: 'Will the plants work in an air-conditioned environment?',
        a: 'Yes. We specialise in selecting species that are proven performers in air-conditioned Nigerian interiors — a very specific combination of cool, dry, and often low-light. We never specify plants that won\'t thrive in your conditions.' },
      { q: 'What if a plant dies — is it replaced?',
        a: 'Under a maintenance contract, any plant that fails to perform is replaced at no additional cost as part of your agreement. This is a standard part of our service.' },
    ],

    highlightProjects: ['ikoyi-penthouse-terrace', 'transcorp-hotel-gardens', 'heritage-place-office-gardens'],
  },

  {
    slug: 'landscape-architecture',
    id: 'architecture',
    label: 'Master Planning',
    title: 'Landscape Architecture',
    tagline: 'Holistic design practice that unifies ecological responsibility, spatial rigour, and enduring beauty.',
    image: '/assets/images/service-architecture.png',
    heroImage: '/images/abuja-gate-r5.jpg',
    color: 'linear-gradient(135deg, #0f3d1f 0%, #005535 100%)',

    overview: [
      'Arabella\'s landscape architecture practice operates at the intersection of environmental science, spatial planning, and creative design. Our registered landscape architects produce masterplans and detailed design packages for complex sites — from new urban developments and civic public spaces to sensitive ecological sites requiring careful ecological restoration and heritage-sensitive intervention.',
      'We work closely with architects, structural engineers, civil engineers, and planners throughout the design process — contributing spatial expertise, planting knowledge, and an understanding of how people inhabit and move through outdoor space. Our drawings, visualisations, and specifications provide the technical backbone for projects of any scale, ensuring that the landscape is never an afterthought but an integral driver of the overall design.',
    ],

    features: [
      { icon: 'grid',   label: 'Masterplanning & Site Analysis',          text: 'Comprehensive site surveys, opportunity and constraint analysis, and spatial masterplanning for complex or large sites.' },
      { icon: 'sun',    label: '3D Visualisation & Rendering',            text: 'Photorealistic 3D renders and fly-through animations that communicate the design with clarity and impact.' },
      { icon: 'leaf',   label: 'Planting Design',                         text: 'Detailed planting specifications covering species, density, establishment care, and long-term management.' },
      { icon: 'tools',  label: 'Technical Drawing Package',               text: 'Full working drawing sets for contractor tender and construction, including grading, drainage, and material layouts.' },
      { icon: 'home',   label: 'Environmental Impact Assessment',         text: 'Assessment of ecological impact, biodiversity net gain, and environmental mitigation for regulated sites.' },
      { icon: 'tree',   label: 'Heritage-Sensitive Design',               text: 'Sensitive interventions within listed buildings, conservation areas, and nationally significant landscapes.' },
      { icon: 'pipe',   label: 'Architect & Engineer Coordination',       text: 'Embedded collaboration with the project design team, resolving interfaces between building and landscape.' },
      { icon: 'wall',   label: 'Planning Submission Support',             text: 'Landscape and Visual Impact Assessments, design and access statements, and drawings for planning applications.' },
    ],

    process: [
      { n: '01', title: 'Brief & Site Analysis',        text: 'We review the project brief, commission site surveys, and analyse all available ecological, topographic, and planning data to establish the full context.' },
      { n: '02', title: 'Concept Masterplan',           text: 'Alternative spatial concepts are developed and tested against the brief. The preferred option is refined into a coherent masterplan with clear design intent.' },
      { n: '03', title: 'Detailed Design',              text: 'The approved concept is developed into full detailed design — with material palettes, grading proposals, drainage strategy, and planting design.' },
      { n: '04', title: 'Technical Documentation',      text: 'A complete construction drawing package is produced, ready for contractor tender, procurement, and build — including specifications and schedules.' },
      { n: '05', title: 'Construction Support',         text: 'Our architects visit site during construction to review progress, answer contractor queries, and ensure the design intent is realised accurately.' },
    ],

    whoFor: [
      { title: 'Government & Public Agencies',   text: 'FCTA, state ministries, and local authorities commissioning civic spaces, parks, and public realm improvements.' },
      { title: 'Architects & Developers',        text: 'Design teams requiring a specialist landscape architect embedded in a multi-disciplinary design team.' },
      { title: 'Educational Institutions',       text: 'Universities, schools, and research campuses seeking comprehensive masterplans for their outdoor environments.' },
      { title: 'Private Landowners',             text: 'Large estate and development owners needing a strategic vision and masterplan for significant land holdings.' },
    ],

    faq: [
      { q: 'What is the difference between a landscape architect and a garden designer?',
        a: 'Landscape architects are professionally registered practitioners qualified to work on complex, large-scale, and technically demanding projects — including public spaces, ecological sites, and projects requiring planning submissions. Garden designers typically focus on smaller-scale residential projects. Arabella operates across both scales.' },
      { q: 'Are Arabella\'s landscape architects registered?',
        a: 'Yes. Our senior landscape architects hold professional registration with the Nigerian Institute of Architects for Landscape Practice (NIALA) and have equivalent international qualifications. All design work is produced under the supervision of a registered practitioner.' },
      { q: 'How long does the design process take?',
        a: 'A typical landscape architecture commission takes 8–24 weeks depending on the size and complexity of the site, the number of design stages required, and the speed of client approvals. We agree a programme at the outset and manage it closely.' },
      { q: 'Can you help with planning permission for landscape works?',
        a: 'Yes. We regularly produce Landscape and Visual Impact Assessments (LVIAs), design and access statement chapters, and landscaping conditions packages required as part of planning applications. We can liaise with planning authorities on your behalf.' },
    ],

    highlightProjects: ['abuja-city-gate', 'gra-boulevard-revamp', 'unilag-campus-landscape'],
  },

  {
    slug: 'recreational-planning',
    id: 'recreational',
    label: 'Community & Leisure',
    title: 'Recreational Planning',
    tagline: 'Spaces where communities come alive — designed for play, fitness, connection, and civic pride.',
    image: '/assets/images/service-recreational.png',
    heroImage: '/images/abuja-gate-3.png',
    color: 'linear-gradient(135deg, #1e6b3a 0%, #00904d 100%)',

    overview: [
      'Well-designed recreational spaces are among the most powerful investments a community can make. They improve physical and mental health, create shared identity, strengthen social bonds, and activate underused land into valued civic assets. Arabella\'s recreational planning team has delivered parks, playgrounds, sports facilities, and leisure corridors across Nigeria — from intimate neighbourhood gardens to regional coastal parks serving tens of thousands of users.',
      'Our approach begins with understanding who will use the space and how. Community consultation, user observation, and stakeholder engagement are embedded in our process. We then translate that understanding into designs that are inclusive, safe, durable, and genuinely loved by the communities they serve — with a particular emphasis on climate-resilient planting, stormwater management, and low-maintenance materials suited to heavy public use.',
    ],

    features: [
      { icon: 'grid',   label: "Children's Playgrounds",          text: 'Age-appropriate, inclusive play equipment and soft surfacing designed to ASTM and BS EN safety standards.' },
      { icon: 'sun',    label: 'Sports Courts & Pitches',         text: 'Multi-use game areas, basketball courts, football pitches, and synthetic turf installations.' },
      { icon: 'leaf',   label: 'Jogging & Cycling Trails',        text: 'Surfaced trail networks with wayfinding, rest points, and exercise stations for all abilities.' },
      { icon: 'home',   label: 'Park Furniture & Shelters',       text: 'Benches, shade structures, pavilions, and shelter installations suited to the tropical climate.' },
      { icon: 'tools',  label: 'Outdoor Fitness Equipment',       text: 'Robust gym-grade outdoor fitness zones accessible to all ages and abilities.' },
      { icon: 'drop',   label: 'Water Play Features',             text: 'Interactive water play zones, spray pads, and splash areas for children and families.' },
      { icon: 'wall',   label: 'Amphitheatres & Event Spaces',    text: 'Flexible outdoor performance spaces, graded lawns, and community gathering areas.' },
      { icon: 'pipe',   label: 'Accessible & Inclusive Design',   text: 'Universal access routes, sensory gardens, and inclusive play provision for all users.' },
    ],

    process: [
      { n: '01', title: 'Community Consultation',         text: 'We engage directly with future users — residents, school groups, older adults, people with disabilities — to understand how the space needs to work.' },
      { n: '02', title: 'Needs Assessment & Brief',       text: 'User insights are translated into a clear brief, identifying the mix of programme (play, sport, fitness, rest, event) and accessibility requirements.' },
      { n: '03', title: 'Concept Design',                 text: 'A spatial concept is developed that organises the site into coherent zones with clear routes, legible hierarchy, and strong landscape character.' },
      { n: '04', title: 'Safety & Accessibility Review',  text: 'All designs are reviewed against ASTM, BS EN, and local safety standards. Accessibility compliance and inclusive design are checked at this stage.' },
      { n: '05', title: 'Construction & Commissioning',   text: 'Our construction teams build the scheme, commission all equipment, and carry out safety inspections before handover to the client or operator.' },
    ],

    whoFor: [
      { title: 'State & Local Government',         text: 'Public parks, neighbourhood gardens, waterfronts, and community recreation facilities serving the public good.' },
      { title: 'Residential Developers',           text: 'Estate amenity areas, communal gardens, children\'s play zones, and fitness facilities that add value and desirability.' },
      { title: 'Community Organisations & NGOs',   text: 'Community-driven green space projects, urban farms, and therapeutic gardens with a direct social impact mission.' },
      { title: 'Educational Institutions',         text: 'School playgrounds, university sports grounds, and campus recreational spaces for students and staff.' },
    ],

    faq: [
      { q: 'How do you ensure the design is inclusive?',
        a: 'Inclusive design is a core requirement on every recreational project. We design to the relevant BS EN and ASTM accessibility standards, consult with disability groups during design, and ensure that all primary routes, facilities, and play equipment meet the needs of wheelchair users, visually impaired visitors, and people with cognitive disabilities.' },
      { q: 'What safety standards do playgrounds comply with?',
        a: 'All playground equipment we specify and install complies with BS EN 1176 (play equipment) and BS EN 1177 (impact-absorbing surfacing). We carry out pre-handover safety inspections and provide a maintenance guide and inspection log.' },
      { q: 'Who maintains the space after completion?',
        a: 'We offer maintenance contracts for all types of recreational spaces — covering landscape maintenance, equipment inspection, turf care, and repairs. Alternatively, we can provide a comprehensive operations and maintenance manual to enable the client\'s own team to manage the space.' },
      { q: 'Do you handle community consultation?',
        a: 'Yes. We have an experienced engagement team that runs public consultation events, online surveys, focus groups with targeted user groups, and stakeholder meetings. Community consultation is built into our standard process for public realm and recreational projects.' },
    ],

    highlightProjects: ['lekki-coastal-park', 'ikeja-sports-complex', 'phc-waterfront-promenade'],
  },

  {
    slug: 'design-build',
    id: 'design-build',
    label: 'Turnkey Delivery',
    title: 'Design-Build Services',
    tagline: 'One team. One contract. Complete accountability from first sketch to final handover.',
    image: '/assets/images/service-designbuild.png',
    heroImage: '/images/abuja-gate-1.png',
    color: 'linear-gradient(135deg, #003520 0%, #005030 100%)',

    overview: [
      'Our design-build model integrates the design and construction phases of a landscape project under a single contract and a single team. For clients who want simplicity — one point of contact, one contract, and certainty of outcome — it is the most efficient and lowest-risk route to delivering a landscape. The design and construction teams work together from day one, so the brief evolves with full awareness of programme, cost, and buildability at every stage.',
      'Design-build also creates stronger value engineering opportunities. Because our designers and construction managers sit in the same room, cost can be interrogated during design rather than after tender — often achieving the same or better design outcome at a more competitive cost. Our track record on design-build projects is strong: we consistently deliver on programme, within budget, and to the quality our clients expect.',
    ],

    features: [
      { icon: 'grid',   label: 'Integrated Design & Build',       text: 'A single team covering concept design, detailed design, specification, procurement, and construction.' },
      { icon: 'home',   label: 'Single Contract',                 text: 'One contract, one invoice, one point of accountability — dramatically reducing the client\'s management burden.' },
      { icon: 'sun',    label: 'Cost Certainty',                  text: 'Fixed-price or GMP (Guaranteed Maximum Price) contracts providing budget certainty from the outset.' },
      { icon: 'tools',  label: 'Value Engineering',               text: 'Continuous review of specification and programme to achieve the best possible outcome for the agreed budget.' },
      { icon: 'pipe',   label: 'Programme Management',            text: 'A fully resourced construction programme, managed week by week, with regular client reporting.' },
      { icon: 'wall',   label: 'Quality Control',                 text: 'In-house quality inspections at key project milestones, with snag resolution before handover.' },
      { icon: 'leaf',   label: 'Procurement & Supply Chain',      text: 'Direct relationships with plant nurseries, stone suppliers, and specialist subcontractors for best pricing and availability.' },
      { icon: 'drop',   label: 'Defects Liability Period',        text: 'A standard 12-month defects period after handover during which any failures are rectified at no cost.' },
    ],

    process: [
      { n: '01', title: 'Brief & Feasibility',         text: 'We take a detailed brief, review the site, and produce an initial feasibility assessment with indicative cost ranges so you can make an informed go/no-go decision.' },
      { n: '02', title: 'Design Development',          text: 'Design and construction specialists develop the scheme together — testing buildability and cost at every stage before committing to detailed specification.' },
      { n: '03', title: 'Contract & Pricing',          text: 'A fixed-price contract is agreed on the basis of the approved design. No hidden extras, no re-tendering.' },
      { n: '04', title: 'Construction',                text: 'Our site teams execute the works according to the agreed programme. Weekly site meetings and reporting keep you informed throughout.' },
      { n: '05', title: 'Handover & Defects Liability', text: 'The completed landscape is handed over with a full documentation pack. We remain responsible for any defects for 12 months post-completion.' },
    ],

    whoFor: [
      { title: 'Private Clients',          text: 'Homeowners and private estate owners who want simplicity and a single trusted partner from start to finish.' },
      { title: 'Property Developers',      text: 'Developers with fixed completion dates and budgets who cannot afford the risk of separating design and build.' },
      { title: 'Corporate Clients',        text: 'Companies commissioning staff grounds or facility landscapes who need project certainty alongside business operations.' },
      { title: 'Repeat Clients',           text: 'Clients who have worked with Arabella before and want the continuity of a trusted team on their next project.' },
    ],

    faq: [
      { q: 'How is design-build different from appointing a separate designer and contractor?',
        a: 'With traditional procurement, the client manages two separate contracts and must resolve any disputes between designer and contractor. Design-build gives you one contract, one team, and one point of accountability. Risk is transferred to us — design failures, buildability problems, and specification gaps are our problem to resolve, not yours.' },
      { q: 'Do I still get a say in the design?',
        a: 'Absolutely. The design is developed collaboratively with you, and no design decisions are finalised without your approval. The difference is that our construction team is present in those conversations from the start — so the designs we agree are always buildable and costed.' },
      { q: 'Is design-build always cheaper?',
        a: 'Not necessarily — but it usually delivers better cost certainty and better value. Savings come from eliminating design-build interface risk, reducing tender price inflation, and identifying value engineering opportunities during design. We are transparent about costs at every stage.' },
      { q: 'What happens if something goes wrong during construction?',
        a: 'It is our responsibility to resolve it — at our cost. That is the fundamental benefit of a single-contract approach. We carry full professional indemnity, public liability, and contractor\'s all-risk insurance on every project.' },
    ],

    highlightProjects: ['meridian-corporate-campus', 'transcorp-hotel-gardens', 'eko-atlantic-business-hub'],
  },

  {
    slug: 'site-development',
    id: 'site-development',
    label: 'Civil Works',
    title: 'Site Development',
    tagline: 'The engineering foundations that make great landscapes possible — precision groundwork built to last.',
    image: '/assets/images/service-sitedevelopment.png',
    heroImage: '/images/abuja-gate-r4.jpg',
    color: 'linear-gradient(135deg, #2d5016 0%, #487a26 100%)',

    overview: [
      'The most beautiful landscape design is only as good as the site preparation and engineering beneath it. Arabella\'s site development team handles all of the civil and earthworks disciplines that are the invisible foundation of every outstanding landscape — from initial clearance and grading through drainage engineering, retaining structures, hardscape construction, and utility coordination.',
      'We operate on new-build sites, brownfield redevelopments, and the restructuring of existing landscapes. Our civil engineers and site managers bring rigour and precision to the technical work, while remaining focused on the landscape outcomes they are enabling. We work closely with the design team throughout, ensuring that every technical decision serves the overall landscape vision rather than working against it.',
    ],

    features: [
      { icon: 'wall',   label: 'Earthworks & Grading',            text: 'Cut and fill operations, level platforms, terracing, and landform sculpting to create the desired topography.' },
      { icon: 'drop',   label: 'Drainage & Stormwater Management', text: 'Surface water drainage networks, soakaways, attenuation tanks, French drains, and sustainable drainage systems (SuDS).' },
      { icon: 'stone',  label: 'Retaining Walls & Structures',    text: 'Engineered retaining walls in concrete, masonry, Gabion, and natural stone — from garden terracing to major civil structures.' },
      { icon: 'pipe',   label: 'Paving & Hardscape',              text: 'Concrete, asphalt, natural stone, brick, and block paving installed to structural specifications for vehicle or pedestrian loading.' },
      { icon: 'grid',   label: 'Utility Coordination',            text: 'Coordination of water, electricity, irrigation, and telecoms with utility providers and on-site routing for landscape infrastructure.' },
      { icon: 'tools',  label: 'Site Clearance',                  text: 'Vegetation clearance, demolition of existing structures, spoil removal, and site preparation for new landscape works.' },
      { icon: 'sun',    label: 'Geotechnical Assessment',         text: 'Coordination of ground investigation, soil testing, and bearing capacity assessment for structures and hardstanding.' },
      { icon: 'leaf',   label: 'Brownfield Remediation',          text: 'Contaminated land assessment and remediation strategies enabling landscape development on brownfield sites.' },
    ],

    process: [
      { n: '01', title: 'Site Investigation & Survey',     text: 'We commission topographic surveys, utility searches, and ground investigations to fully understand the site before any works begin.' },
      { n: '02', title: 'Engineering Design',              text: 'Our civil engineers produce drainage calculations, retaining wall designs, and paving specifications — all coordinated with the landscape architecture drawings.' },
      { n: '03', title: 'Earthworks & Grading',           text: 'Bulk earthworks are carried out first — establishing the landform, removing spoil, and creating the engineered platform on which the landscape will sit.' },
      { n: '04', title: 'Drainage & Infrastructure',      text: 'Underground drainage, irrigation mains, electrical ducting, and utility connections are installed before the upper layers of construction begin.' },
      { n: '05', title: 'Paving, Hardscape & Handover',   text: 'Surface paving and hardscape are laid to specification and gradient. As-built drawings are produced and provided at handover with a full technical documentation pack.' },
    ],

    whoFor: [
      { title: 'Property Developers',     text: 'New-build residential, mixed-use, and commercial developments requiring civil works as part of a comprehensive landscape package.' },
      { title: 'Main Contractors',        text: 'Principal contractors looking for a specialist landscape civil subcontractor with engineering expertise and a reliable track record.' },
      { title: 'Architects & Engineers',  text: 'Design professionals requiring a civil and landscape contractor who can translate complex technical drawings into precise built works.' },
      { title: 'Government & Public Bodies', text: 'Public realm and infrastructure projects requiring technically robust site development works with full compliance documentation.' },
    ],

    faq: [
      { q: 'What civil works does this service cover?',
        a: 'Our site development service covers the full range of civil and groundworks disciplines needed for landscape projects: earthworks, drainage, retaining structures, paving, utility coordination, and site clearance. We also coordinate geotechnical assessment and manage brownfield remediation.' },
      { q: 'Do you work alongside other contractors on site?',
        a: 'Yes. We regularly operate as a landscape civil subcontractor within a larger construction programme — working alongside main contractors, structural engineers, and M&E teams. We are experienced at coordinating our works within a shared site environment.' },
      { q: 'Can you work on brownfield or contaminated sites?',
        a: 'Yes. We have experience of brownfield site development and can coordinate contaminated land assessment, remediation strategy, and validation works alongside our civil construction activities.' },
      { q: 'How long do site development works take?',
        a: 'This varies enormously by scale. Earthworks and drainage for a residential garden might take 1–2 weeks; a large public park or commercial development might involve 3–6 months of civil works. We always produce a detailed programme before starting and manage it closely.' },
    ],

    highlightProjects: ['gra-boulevard-revamp', 'national-arts-theatre-forecourt', 'unilag-campus-landscape'],
  },
]

// Helper: get a service by slug
export function getService(slug) {
  return SERVICES.find(s => s.slug === slug) ?? null
}
