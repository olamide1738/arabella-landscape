// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — Project Data
// All images are from the Abuja City Gate public space commission,
// Arabella's landmark FCT project delivered 2023–2024.
// ─────────────────────────────────────────────────────────────────

const G = {
  // Completed project — real drone photography
  night1: '/images/abuja-gate-1.png',   // aerial night (original wide)
  day2:   '/images/abuja-gate-2.png',   // aerial day
  day3:   '/images/abuja-gate-3.png',   // aerial day wide
  night4: '/images/abuja-gate-4.png',   // aerial blue-hour
  day5:   '/images/abuja-gate-5.png',   // aerial day close
  day6:   '/images/abuja-gate-6.png',   // aerial day medium
  // Design renderings
  r1:     '/images/abuja-gate-r1.jpg',  // front view — people-level
  r2:     '/images/abuja-gate-r2.jpg',  // front elevation full
  r3:     '/images/abuja-gate-r3.jpg',  // gate close-up ground
  r4:     '/images/abuja-gate-r4.jpg',  // aerial side angle
  r5:     '/images/abuja-gate-r5.jpg',  // top-down plan view
  r6:     '/images/abuja-gate-r6.jpg',  // aerial — far angle
  r7:     '/images/abuja-gate-r7.jpg',  // aerial — near angle
  r8:     '/images/abuja-gate-r8.jpg',  // aerial — opposite side
  r9:     '/images/abuja-gate-r9.jpg',  // aerial — close
}

export const PROJECTS = [
  {
    slug: 'abuja-city-gate',
    category: 'Public Space',
    name: 'Abuja City Gate',
    location: 'Abuja, FCT',
    year: '2024',
    image: G.night4,
    images: [G.night4, G.night1, G.day3, G.day6, G.day2, G.day5,
             G.r1, G.r2, G.r3, G.r4, G.r5, G.r6, G.r7, G.r8, G.r9],
    area: '4.2 hectares',
    client: 'Federal Capital Territory Administration',
    services: ['Landscape Architecture', 'Public Space Design', 'Site Development', 'Irrigation & Lighting'],
    highlights: ['Interactive choreographed fountain', 'Palm avenue & native planting', 'LED feature illumination'],
    description: 'A landmark public space transformation at the ceremonial entrance to Nigeria\'s capital — integrating formal gardens, a choreographed fountain, sculptural planting, and illuminated pathways around the iconic Abuja City Gate monument.',
    detail: 'Commissioned by the FCTA, this project repositioned the Abuja City Gate roundabout as a world-class civic landscape worthy of a national monument. Arabella\'s masterplan introduced a structured system of concentric promenades, fountain courts, and richly planted slopes — drawing on Nigeria\'s native flora while meeting the highest standards of urban design. The scheme includes a central interactive water fountain, massed seasonal colour planting, palm avenues, feature lighting, accessible pathways, and a perimeter living retaining wall system. The project was completed on programme and has since become one of Abuja\'s most photographed landmarks.',
    beforeAfter: {
      before: G.r4,   // design rendering — aerial side angle
      after:  G.day3, // completed drone photo — aerial day wide
      beforeLabel: 'Design Render',
      afterLabel:  'Completed 2024',
    },
  },
  {
    slug: 'meridian-corporate-campus',
    category: 'Commercial',
    name: 'Meridian Corporate Campus',
    location: 'Abuja',
    year: '2024',
    image: G.r1,
    images: [G.r1, G.day3, G.r2],
    area: '4 hectares',
    client: 'Meridian Holdings',
    services: ['Landscape Architecture', 'Exterior Landscaping', 'Irrigation Systems'],
    highlights: ['Productive kitchen garden', 'Shaded collaboration zones', 'Weekly all-hands event lawn'],
    description: 'A 4-hectare corporate landscape integrating formal gardens, productive planting, and outdoor meeting spaces for a Fortune 500 headquarters.',
    detail: 'Working closely with the client\'s facilities team and their lead architect, Arabella developed a comprehensive landscape masterplan that weaves together formal arrival gardens, a productive kitchen garden for the staff canteen, shaded outdoor collaboration zones, and a perimeter planting scheme that provides natural screening. The design prioritises staff wellbeing, with quiet garden rooms and a central events lawn used weekly for all-hands gatherings.',
  },
  {
    slug: 'maitama-garden-estate',
    category: 'Residential',
    name: 'Maitama Garden Estate',
    location: 'Abuja',
    year: '2024',
    image: G.night1,
    images: [G.night1, G.r3, G.day2],
    area: '1.8 hectares',
    client: 'Private Developer',
    services: ['Landscape Architecture', 'Exterior Landscaping', 'Lighting Design', 'Irrigation'],
    highlights: ['12 bespoke plot treatments', 'Infinity pool surrounds', 'Nighttime uplighting scheme'],
    description: 'Luxury residential landscape for a 12-plot estate, featuring sculptural planting, infinity pool surrounds, and illuminated pathways.',
    detail: 'Each plot within this gated estate received a bespoke landscape treatment, unified by a consistent palette of materials and planting species. Arabella designed the shared streetscape, estate entrance, and communal gardens, as well as coordinating individual plot landscape packages. Nighttime illumination was a central brief — the estate glows beautifully after dark through carefully positioned uplighting and path lanterns.',
  },
  {
    slug: 'lekki-coastal-park',
    category: 'Recreational',
    name: 'Lekki Coastal Park',
    location: 'Lagos',
    year: '2023',
    image: G.day2,
    images: [G.day2, G.r4, G.day5],
    area: '8 hectares',
    client: 'Lagos State Government',
    services: ['Landscape Architecture', 'Recreational Planning', 'Coastal Planting'],
    highlights: ['Children\'s adventure playground', 'Mangrove boardwalk', 'Storm-resilient native planting'],
    description: 'A landmark public park stretching 2km along the Lekki coastline, with play zones, fitness trails, and native coastal planting.',
    detail: 'Responding to Lagos\'s urgent need for quality public green space, this coastal park provides a continuous leisure corridor with distinct zones — a children\'s adventure playground, adult fitness trail, amphitheatre lawn, picnic terraces, and a boardwalk over the mangrove edge. All planting species are native or naturalised coastal varieties chosen for storm resilience and low maintenance.',
  },
  {
    slug: 'gra-boulevard-revamp',
    category: 'Public Space',
    name: 'GRA Boulevard Revamp',
    location: 'Port Harcourt',
    year: '2023',
    image: G.day3,
    images: [G.day3, G.r6, G.night4],
    area: '2.1 km boulevard',
    client: 'Rivers State Ministry of Urban Development',
    services: ['Landscape Architecture', 'Avenue Tree Planting', 'Public Realm Design'],
    highlights: ['Double Araucaria avenue', 'Commissioned public art', 'Formal seasonal median gardens'],
    description: "Comprehensive redesign of the Government Residential Area's main boulevard with avenue tree planting, formal gardens, and public art.",
    detail: 'The GRA Boulevard is the ceremonial spine of Port Harcourt\'s most prestigious residential district. Arabella\'s redesign introduced a double avenue of Araucaria trees, formal median gardens with seasonal colour, and a series of pause points — stone-paved plazas with seating and public art installations commissioned from Rivers State artists. The project has dramatically improved the character and walkability of the boulevard.',
  },
  {
    slug: 'banana-island-retreat',
    category: 'Residential',
    name: 'Banana Island Retreat',
    location: 'Lagos',
    year: '2023',
    image: G.day5,
    images: [G.day5, G.r5, G.r3],
    area: '0.6 hectares',
    client: 'Private Residence',
    services: ['Garden Design', 'Water Features', 'Exterior Landscaping'],
    highlights: ['Cascading water rill', 'Naturalistic koi pond', 'Handmade terracotta hardscape'],
    description: 'A secluded tropical retreat on Banana Island with cascading water features, a koi pond, and lush jungle planting.',
    detail: 'This private commission on one of Lagos\'s most exclusive addresses called for a landscape that felt lush and immersive — a genuine escape from the city within one\'s own property. Arabella designed a sequence of garden rooms around a cascading water rill that feeds into a large naturalistic koi pond. Layered tropical planting creates a canopy effect, while curated hardscape — handmade terracotta tiles, weathered granite edging — grounds the space in tactile quality.',
  },
  {
    slug: 'transcorp-hotel-gardens',
    category: 'Commercial',
    name: 'Transcorp Hotel Gardens',
    location: 'Abuja',
    year: '2022',
    image: G.r2,
    images: [G.r2, G.day6, G.r7],
    area: '3.5 hectares',
    client: 'Transcorp Hotels Plc',
    services: ['Hotel Landscape', 'Pool Garden', 'Roof Terrace Design'],
    highlights: ['Bronze sculpture forecourt', 'Resort-style pool garden', 'Panoramic rooftop terrace'],
    description: 'Complete landscaping of hotel grounds including arrival court, pool garden, and roof terrace for a 5-star property.',
    detail: 'The brief for Transcorp\'s flagship hotel demanded landscapes that matched the interior quality of this 5-star property. Arabella delivered a formal arrival court with clipped hedging and bronze sculpture, a resort-style pool garden with cabana planting, and a rooftop terrace garden with panoramic views across Abuja. All materials were sourced to international hospitality standards, with the planting schemes designed for year-round lushness.',
  },
  {
    slug: 'ikeja-sports-complex',
    category: 'Recreational',
    name: 'Ikeja Sports Complex',
    location: 'Lagos',
    year: '2022',
    image: G.r4,
    images: [G.r4, G.day3, G.r8],
    area: '6 hectares',
    client: 'Lagos State Sports Commission',
    services: ['Recreational Planning', 'Synthetic Turf', 'Spectator Landscaping'],
    highlights: ['Four synthetic turf pitches', '400m running track', 'Stormwater perimeter planting'],
    description: 'Multi-sport recreational facility with synthetic turf pitches, running tracks, and spectator landscaping for a community sports hub.',
    detail: 'Arabella was appointed as landscape architect for this major community sports investment in Ikeja. The scheme provides four synthetic turf pitches, a 400m running track, basketball courts, and an outdoor gym — all wrapped in spectator seating landscaping, avenue tree planting, and perimeter planting that manages stormwater runoff and provides shade along approach routes.',
  },
  {
    slug: 'national-arts-theatre-forecourt',
    category: 'Public Space',
    name: 'National Arts Theatre Forecourt',
    location: 'Lagos',
    year: '2022',
    image: G.r3,
    images: [G.r3, G.r1, G.night1],
    area: '1.4 hectares',
    client: 'Federal Ministry of Culture',
    services: ['Public Realm Design', 'Heritage Planting', 'Event Hardscape'],
    highlights: ['Heritage-sensitive stone paving', 'Mature canopy tree framework', 'Flexible performance hardscape'],
    description: 'Revitalisation of the iconic National Arts Theatre forecourt with heritage-sensitive planting and event-ready hardscape.',
    detail: 'The National Arts Theatre is one of Nigeria\'s most recognisable buildings, and its forecourt demanded a landscape of equal gravitas. Arabella\'s approach was restrained and heritage-sensitive: a calm palette of stone paving, formal lawn panels, and a curated canopy of mature trees that frame the building\'s facade. The hardscape is designed to flex between its everyday role as a public promenade and its event role as a performance and festival ground.',
  },
  {
    slug: 'ikoyi-penthouse-terrace',
    category: 'Residential',
    name: 'Ikoyi Penthouse Terrace',
    location: 'Lagos',
    year: '2021',
    image: G.r5,
    images: [G.r5, G.r3, G.night4],
    area: '320 m²',
    client: 'Private Residence',
    services: ['Roof Garden Design', 'Container Planting', 'Pergola Structures'],
    highlights: ['22nd-floor wind-engineered design', 'Custom lightweight steel pergola', 'Curated herb garden'],
    description: 'Elevated roof terrace with container planting, pergola structures, and a miniature herb garden for a city-centre penthouse.',
    detail: 'On the 22nd floor of an Ikoyi tower, this penthouse terrace had spectacular views in every direction — but arrived as a bare concrete deck. Arabella transformed it into a planted retreat with custom lightweight planters, a powder-coated steel pergola supporting climbing plants, a curated herb garden, and built-in seating. Weight loading and wind exposure at height were key engineering considerations, resolved through careful plant selection and anchored structural design.',
  },
  {
    slug: 'eko-atlantic-business-hub',
    category: 'Commercial',
    name: 'Eko Atlantic Business Hub',
    location: 'Lagos',
    year: '2021',
    image: G.day6,
    images: [G.day6, G.r2, G.day3],
    area: '7 hectares',
    client: 'South Energyx Nigeria Ltd',
    services: ['Landscape Masterplan', 'Urban Hardscape', 'Storm-Resilient Planting'],
    highlights: ['Atlantic coastal-adapted planting', 'Grand arrival plazas', 'Rooftop garden terraces'],
    description: "Landscape masterplan for Eko Atlantic's premier commercial district, combining storm-resilient planting with high-spec urban hardscape.",
    detail: 'Eko Atlantic\'s commercial district demanded an urban landscape capable of withstanding the Atlantic coastal environment while projecting the ambition of one of Africa\'s most significant new city developments. Arabella\'s masterplan introduced a hierarchy of public realm — grand arrival plazas, landscaped streets, pocket parks, and rooftop garden terraces — unified by a storm-resilient planting palette of coastal-adapted species.',
  },
  {
    slug: 'asokoro-ridge-gardens',
    category: 'Residential',
    name: 'Asokoro Ridge Gardens',
    location: 'Abuja',
    year: '2020',
    image: G.r6,
    images: [G.r6, G.day5, G.r9],
    area: '0.9 hectares',
    client: 'Private Diplomatic Residence',
    services: ['Garden Design', 'Retaining Walls', 'Water Feature'],
    highlights: ['Locally quarried Abuja granite', 'Fragrant aromatic herb borders', 'Lower reflecting pool'],
    description: 'Terraced hillside garden for a diplomatic residence, with native stone retaining walls, aromatic borders, and a reflecting pool.',
    detail: 'Set on a steeply sloping plot in Abuja\'s most prestigious diplomatic quarter, this garden was designed in terraces that step down the hillside, each level with its own character — an entry parterre, a fragrant border of aromatic herbs and roses, a shaded dining terrace, and a lower reflecting pool framed by native stone walls. The retaining structures are built from locally quarried Abuja granite, giving the garden a deeply rooted sense of place.',
  },
  {
    slug: 'phc-waterfront-promenade',
    category: 'Recreational',
    name: 'PHC Waterfront Promenade',
    location: 'Port Harcourt',
    year: '2020',
    image: G.r7,
    images: [G.r7, G.day3, G.r4],
    area: '1.2 km corridor',
    client: 'Rivers State Government',
    services: ['Waterfront Design', 'Shade Pavilions', 'Riparian Planting'],
    highlights: ['Children\'s water play zone', 'Fishing platforms', 'Riparian erosion management'],
    description: 'A 1.2km waterfront leisure corridor along the Bonny River, with shade pavilions, exercise stations, and riparian planting.',
    detail: 'This waterfront promenade reclaims a previously neglected riverfront edge for public use. Arabella designed a continuous paved promenade with a series of programme moments — exercise stations, shaded pavilions, children\'s water play, fishing platforms, and a market square. Riparian planting along the river edge manages erosion, provides habitat, and filters stormwater before it enters the river.',
  },
  {
    slug: 'heritage-place-office-gardens',
    category: 'Commercial',
    name: 'Heritage Place Office Gardens',
    location: 'Lagos',
    year: '2020',
    image: G.r8,
    images: [G.r8, G.r1, G.day2],
    area: '1.1 hectares',
    client: 'Heritage Bank / RMB Westport',
    services: ['Courtyard Garden', 'Arrival Landscape', 'Rooftop Planting'],
    highlights: ['Ethiopian basalt paving', 'Laser-cut Corten steel planters', 'Tenant rooftop terraces'],
    description: "Sculptural courtyard garden and arrival sequence for Victoria Island's premium mixed-use development.",
    detail: 'Heritage Place is one of Victoria Island\'s most prestigious business addresses, and its external landscape needed to match the quality of its interior fitout. Arabella designed a sequence of arrival gardens — a formal porte-cochère with clipped planting and water feature, an internal courtyard garden visible from the offices above, and rooftop planting terraces accessible to tenants. Materials throughout are premium: Ethiopian basalt paving, laser-cut Corten steel planters, and a curated mix of specimen trees.',
  },
  {
    slug: 'unilag-campus-landscape',
    category: 'Public Space',
    name: 'UNILAG Campus Landscape',
    location: 'Lagos',
    year: '2019',
    image: G.r9,
    images: [G.r9, G.day6, G.r6],
    area: '12 hectares',
    client: 'University of Lagos',
    services: ['Campus Masterplan', 'Pedestrian Connectivity', 'Shade Planting'],
    highlights: ['Lakeside amenity belt', 'Faculty garden courts', 'Shaded pedestrian network'],
    description: 'Campus-wide landscape masterplan for the University of Lagos, improving pedestrian connectivity, shade planting, and social gathering spaces.',
    detail: 'The University of Lagos appointed Arabella to develop a campus landscape masterplan addressing decades of piecemeal development. The masterplan identified a hierarchy of green spaces — a formal central lawn, faculty garden courts, informal student lawns, and a lakeside amenity belt — connected by a comprehensive network of shaded pedestrian routes. Phase one works delivered new tree planting, improved paths, student social spaces, and a central event lawn already in heavy use.',
  },
]

// Helper: get related projects (same category, excluding current)
export function getRelated(slug, count = 3) {
  const current = PROJECTS.find(p => p.slug === slug)
  if (!current) return []
  const same = PROJECTS.filter(p => p.slug !== slug && p.category === current.category)
  const rest = PROJECTS.filter(p => p.slug !== slug && p.category !== current.category)
  return [...same, ...rest].slice(0, count)
}

export const FILTERS = ['All', 'Residential', 'Commercial', 'Recreational', 'Public Space']
