// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — Project Data
// ─────────────────────────────────────────────────────────────────

const G = {
  night1: '/images/abuja-gate-1.png',
  day2:   '/images/abuja-gate-2.png',
  day3:   '/images/abuja-gate-3.png',
  night4: '/images/abuja-gate-4.png',
  day5:   '/images/abuja-gate-5.png',
  day6:   '/images/abuja-gate-6.png',
  r1:     '/images/abuja-gate-r1.jpg',
  r2:     '/images/abuja-gate-r2.jpg',
  r3:     '/images/abuja-gate-r3.jpg',
  r4:     '/images/abuja-gate-r4.jpg',
  r5:     '/images/abuja-gate-r5.jpg',
  r6:     '/images/abuja-gate-r6.jpg',
  r7:     '/images/abuja-gate-r7.jpg',
  r8:     '/images/abuja-gate-r8.jpg',
  r9:     '/images/abuja-gate-r9.jpg',
}

export const PROJECTS = [
  {
    slug: 'asaba-country-home',
    category: 'Residential',
    name: 'Asaba Country Home',
    location: 'Asaba, Delta State',
    coords: [6.1985, 6.7262],
    year: '2024',
    image: '/images/asaba-country-home-1.jpg',
    images: [
      '/images/asaba-country-home-1.jpg',
      '/images/asaba-country-home-2.jpg',
      '/images/asaba-country-home-3.jpg',
      '/images/asaba-country-home-4.jpg'
    ],
    area: '2.2 hectares',
    client: 'Private Residence',
    services: ['Landscape Architecture', 'Waterfront Pool Deck Design', 'Cobblestone Promenade Pathway', 'Riverfront Retaining Walls', 'Tropical Villa Gardens'],
    highlights: ['Riverside infinity pool court overlooking River Niger', 'Interlocking cobblestone garden pathways', 'Lush red coleus, cycads, and tropical palm borders', 'Curved stone retaining wall & custom pool terrace'],
    description: 'A luxurious waterfront country estate in Asaba along the River Niger — combining an infinity pool terrace, cobble promenades, and tropical gardens.',
    detail: 'Arabella was commissioned to design and build the master landscape for a private riverfront estate in Asaba, Delta State. The design takes full advantage of the River Niger waterfront setting, featuring a tiled infinity pool court, stone retaining terraces, fan palms, red coleus borders, and a winding cobblestone promenade that connects the private villa to the riverbank.',
    lighting: {
      dayImage: '/images/asaba-country-home-1.jpg',
      hotspots: [
        {
          id: 'infinity-pool-aquatic',
          x: 46,
          y: 65,
          title: 'Infinity Pool Underwater Glow',
          category: 'Water Feature & Terrace',
          fixture: 'Submersible Micro-Optic (IP68, 12V AC)',
          cct: '2700K Warm White / Subtle Azure',
          beam: '90° Wide Optical Diffuser',
          purpose: 'Illuminates the pool court edge reflecting the river horizon without surface glare.',
          wattage: '12W Low-Voltage LED'
        },
        {
          id: 'retaining-wall-grazers',
          x: 75,
          y: 50,
          title: 'Curved Stone Retaining Wall Grazer',
          category: 'Masonry & Terraces',
          fixture: 'Recessed Linear Low-Profile LED',
          cct: '2700K Ultra-Warm White',
          beam: '15° x 60° Asymmetric Graze',
          purpose: 'Highlights textured natural stone courses and cascading bougainvillea borders.',
          wattage: '10W/meter Linear LED'
        },
        {
          id: 'promenade-bollards',
          x: 25,
          y: 78,
          title: 'Cobblestone Promenade Bollards',
          category: 'Riverfront Circulation',
          fixture: 'Solid Marine Brass Pathway Bollard (IP65)',
          cct: '3000K Warm White',
          beam: '360° Downward Ground Wash',
          purpose: 'Guides evening riverfront strolls along interlocking cobbles; keeps illumination strictly below 400mm.',
          wattage: '5W Solid Brass LED'
        },
        {
          id: 'palm-crown-uplight',
          x: 28,
          y: 35,
          title: 'Royal Palm Canopy Uplights',
          category: 'Botanical Lighting',
          fixture: 'In-Ground Heavy Duty Well Light',
          cct: '2700K Warm White (CRI 94)',
          beam: '18° Spot with Honeycomb Glare Shield',
          purpose: 'Accentuates the towering palm crowns framing the estate river vista.',
          wattage: '15W Cree LED'
        }
      ]
    },
    plants: [
      {
        name: 'Royal Palm',
        scientific: 'Roystonea regia',
        category: 'Palms',
        role: 'Riverfront promenade avenue planting & vertical scale',
        light: 'Full Sun',
        water: 'Medium',
        native: false,
        emoji: '🌴',
        tag: 'Avenue & Framing'
      },
      {
        name: 'Red Copperleaf',
        scientific: 'Acalypha wilkesiana',
        category: 'Shrubs',
        role: 'Vibrant scarlet foliage contrast around pool coping',
        light: 'Full Sun',
        water: 'Low–Medium',
        native: false,
        emoji: '🌿',
        tag: 'Foliage Accent'
      },
      {
        name: 'Sago Cycad',
        scientific: 'Cycas revoluta',
        category: 'Architectural Shrubs',
        role: 'Sculptural terrace focal points against natural stone',
        light: 'Full Sun to Part Shade',
        water: 'Low',
        native: false,
        emoji: '🪴',
        tag: 'Sculptural Specimen'
      },
      {
        name: 'Bougainvillea',
        scientific: 'Bougainvillea spectabilis',
        category: 'Climbers',
        role: 'Cascading floral curtain over tiered retaining walls',
        light: 'Full Sun',
        water: 'Low',
        native: false,
        emoji: '🌸',
        tag: 'Terrace Cascade'
      },
      {
        name: 'Zoysia Lawn',
        scientific: 'Zoysia japonica',
        category: 'Turf',
        role: 'Dense, salt-tolerant barefoot carpet along waterfront deck',
        light: 'Full Sun',
        water: 'Low',
        native: false,
        emoji: '🌱',
        tag: 'Living Carpet'
      }
    ]
  },
  {
    slug: 'gtb-bayo-kuku',
    category: 'Commercial',
    name: 'GTBank HNI Branch',
    location: 'Bayo Kuku, Ikoyi, Lagos',
    coords: [6.4541, 3.4297],
    year: '2024',
    image: '/images/gtb-bayo-kuku-1.jpg',
    images: [
      '/images/gtb-bayo-kuku-1.jpg',
      '/images/gtb-bayo-kuku-2.jpg',
      '/images/gtb-bayo-kuku-3.jpg',
      '/images/gtb-bayo-kuku-4.jpg',
      '/images/gtb-bayo-kuku-5.jpg'
    ],
    area: '1.8 hectares',
    client: 'Guaranty Trust Bank Plc',
    services: ['Landscape Architecture', 'Vertical Living Wall Bio-Facade', 'Terracotta Trellis Engineering', 'Stone Masonry Hardscape', 'Automatic Drip Irrigation'],
    highlights: ['Multi-story steel trellis vertical plant wall', 'Integrated terracotta pot bio-facade matrix', 'Custom granite stone walling & portico court', 'Automated drip & micro-mist irrigation system'],
    description: 'A groundbreaking bio-architectural commercial landscape for GTBank\'s Private Banking HNI branch on Bayo Kuku, Ikoyi — featuring a multi-story living wall facade.',
    detail: 'Arabella engineered, fabricated, and installed Nigeria\'s premier multi-story living wall bio-facade for GTBank\'s flagship Private Banking branch on Bayo Kuku, Ikoyi. The project combines a bespoke steel trellis matrix supporting hundreds of potted tropical species, automated micro-drip irrigation, granite stone walling, and manicured entry grounds designed to lower ambient temperatures and deliver an iconic corporate identity.',
    plants: [
      {
        name: 'Golden Pothos',
        scientific: 'Epipremnum aureum',
        category: 'Vertical Climbers',
        role: 'Dense living wall bio-facade matrix for building shade',
        light: 'Part Shade to Bright',
        water: 'Medium (Drip)',
        native: false,
        emoji: '🌿',
        tag: 'Bio-Facade Matrix'
      },
      {
        name: 'Fiddle Leaf Fig',
        scientific: 'Ficus lyrata',
        category: 'Specimen Trees',
        role: 'Architectural entrance statement plants in granite portico',
        light: 'Bright Filtered',
        water: 'Medium',
        native: true,
        emoji: '🌳',
        tag: 'Entrance Specimen'
      },
      {
        name: 'Snake Plant',
        scientific: 'Dracaena trifasciata',
        category: 'Architectural Succulents',
        role: 'Low-maintenance architectural beds along vehicle concourse',
        light: 'Any Light',
        water: 'Very Low',
        native: true,
        emoji: '🪴',
        tag: 'Drought Buffer'
      },
      {
        name: 'Philodendron Xanadu',
        scientific: 'Thaumatophyllum xanadu',
        category: 'Understory Foliage',
        role: 'Lush tropical texture at pedestrian entry walkways',
        light: 'Part Shade',
        water: 'Medium',
        native: false,
        emoji: '🍃',
        tag: 'Pedestrian Shading'
      }
    ]
  },
  {
    slug: 'muri-okunola-park',
    category: 'Public Space',
    name: 'Muri Okunola Park',
    location: 'Victoria Island, Lagos',
    coords: [6.4301, 3.4178],
    year: '2024',
    image: '/images/muri-okunola-2.jpg',
    images: [
      '/images/muri-okunola-2.jpg',
      '/images/muri-okunola-1.jpg',
      '/images/muri-okunola-3.jpg',
      '/images/muri-okunola-4.jpg',
      '/images/muri-okunola-5.jpg'
    ],
    area: '3.1 hectares',
    client: 'Lagos State Government',
    services: ['Landscape Architecture', 'Civic Park Masterplan', 'Hardscape & Benches', 'Palm & Lawn Installation', 'Maintenance'],
    highlights: ['Central event lawn with city skyline backdrop', 'Structured square palm planter islands', 'Brick paved promenades & timber park benches', 'Shaded pergola pavilion on rolling green mounds'],
    description: 'A landmark public park redesign in the heart of Victoria Island — combining vast central lawns, palm tree courts, brick promenades, and shaded event pavilions.',
    detail: 'Muri Okunola Park is one of Lagos\'s most central and heavily visited civic green spaces. Arabella delivered a comprehensive landscape redesign including elevated date palm planter courts, rolling event lawns overlooking the city skyline, durable brick promenades, timber seating alcoves, and shaded pergola structures built to accommodate major cultural events and daily public recreation.',
    plants: [
      {
        name: 'Flamboyant Tree',
        scientific: 'Delonix regia',
        category: 'Canopy Trees',
        role: 'Broad spreading shade canopy across central recreational lawn',
        light: 'Full Sun',
        water: 'Low',
        native: false,
        emoji: '🌳',
        tag: 'Canopy Shade'
      },
      {
        name: 'Silver Date Palm',
        scientific: 'Phoenix sylvestris',
        category: 'Palms',
        role: 'Raised square architectural planter courts across civic plaza',
        light: 'Full Sun',
        water: 'Low–Medium',
        native: false,
        emoji: '🌴',
        tag: 'Plaza Focal Point'
      },
      {
        name: 'Scarlet Ixora',
        scientific: 'Ixora coccinea',
        category: 'Hedge & Borders',
        role: 'Sheared geometric guide borders along brick promenades',
        light: 'Full Sun to Part Shade',
        water: 'Medium',
        native: false,
        emoji: '🌺',
        tag: 'Promenade Border'
      },
      {
        name: 'African Tulip Tree',
        scientific: 'Spathodea campanulata',
        category: 'Flowering Trees',
        role: 'Year-round scarlet canopy atop rolling park amphitheater',
        light: 'Full Sun',
        water: 'Medium',
        native: true,
        emoji: '🌸',
        tag: 'Native Landmark'
      }
    ]
  },
  {
    slug: 'the-george',
    category: 'Commercial',
    name: 'The George Hotel',
    location: 'Ikoyi, Lagos',
    coords: [6.4520, 3.4350],
    year: '2024',
    image: '/images/the-george-1.jpg',
    images: [
      '/images/the-george-1.jpg',
      '/images/the-george-2.jpg',
      '/images/the-george-5.jpg',
      '/images/the-george-4.jpg',
      '/images/the-george-3.jpg'
    ],
    area: '1.2 hectares',
    client: 'The George Hotel',
    services: ['Landscape Architecture', 'Hospitality Grounds Design', 'Nighttime Illumination', 'Palm Avenue Planting', 'Maintenance Services'],
    highlights: ['Prestige gatehouse entrance & security portal', 'Royal palm tree avenue & block paved driveway', 'Custom bollard & pathway nighttime uplighting', 'Porte-cochère centerpiece tropical planter'],
    description: 'A luxury hospitality landscape for The George Hotel in Ikoyi — combining a regal palm avenue, custom nighttime illumination, and quiet tropical garden alcoves.',
    detail: 'Arabella designed and constructed the grounds for The George Hotel, a luxury boutique hotel in Ikoyi, Lagos. The masterplan centers on an elegant palm avenue arrival drive with herringbone block paving, security gatehouse planting, centerpiece tropical island planters at the main entrance, and an architectural LED illumination scheme that comes alive after dark.',
    plants: [
      {
        name: 'Royal Palm',
        scientific: 'Roystonea regia',
        category: 'Palms',
        role: 'Formal symmetrical avenue planting flanking main hotel approach',
        light: 'Full Sun',
        water: 'Medium',
        native: false,
        emoji: '🌴',
        tag: 'Arrival Avenue'
      },
      {
        name: 'White Frangipani',
        scientific: 'Plumeria rubra',
        category: 'Fragrant Trees',
        role: 'Nocturnal fragrant blooms greeting hotel guests at portico',
        light: 'Full Sun',
        water: 'Low',
        native: false,
        emoji: '🌸',
        tag: 'Aroma Specimen'
      },
      {
        name: 'Bird of Paradise',
        scientific: 'Strelitzia reginae',
        category: 'Architectural Shrubs',
        role: 'Sculptural entrance islands paired with night uplighting',
        light: 'Full Sun to Part Shade',
        water: 'Low–Medium',
        native: false,
        emoji: '🦜',
        tag: 'Porte-Cochère Anchor'
      },
      {
        name: 'Variegated Croton',
        scientific: 'Codiaeum variegatum',
        category: 'Foliage Shrubs',
        role: 'Warm golden & crimson bands lining guest poolside walkways',
        light: 'Full Sun',
        water: 'Medium',
        native: false,
        emoji: '🍂',
        tag: 'Pathway Palette'
      }
    ]
  },
  {
    slug: 'stanbic-ibtc',
    category: 'Commercial',
    name: 'Stanbic IBTC Head Office',
    location: 'Victoria Island, Lagos',
    coords: [6.4281, 3.4219],
    year: '2024',
    image: '/images/stanbic-ibtc-1.jpg',
    images: [
      '/images/stanbic-ibtc-1.jpg',
      '/images/stanbic-ibtc-5.jpg',
      '/images/stanbic-ibtc-3.jpg',
      '/images/stanbic-ibtc-4.jpg',
      '/images/stanbic-ibtc-2.jpg'
    ],
    area: '2.5 hectares',
    client: 'Stanbic IBTC Bank Plc',
    services: ['Landscape Architecture', 'Corporate Hardscaping', 'Automatic Irrigation', 'Terrace & Vertical Planting', 'Grounds Maintenance'],
    highlights: ['Lush arrival drive & portico landscape', 'Automated lawn irrigation system', 'Elevated terrace gardens & sunshades', 'Custom block paved driveways & stone walls'],
    description: "A prestige corporate landscape for Stanbic IBTC Bank's Lagos head office — featuring a lush arrival driveway, automated lawn care, elevated terrace planting, and durable hardscaping.",
    detail: "Arabella was commissioned to design, construct, and maintain the grounds of Stanbic IBTC Bank's head office on Victoria Island. The project includes a formal curved arrival drive lined with manicured lawns, tropical palms, and automated irrigation. Upper building levels feature integrated terrace gardens and green shading canopies, seamlessly blending corporate architecture with vibrant West African flora.",
    plants: [
      {
        name: 'Chinese Fan Palm',
        scientific: 'Livistona chinensis',
        category: 'Palms',
        role: 'Structured architectural perimeter framing bank tower',
        light: 'Full Sun to Part Shade',
        water: 'Medium',
        native: false,
        emoji: '🌴',
        tag: 'Tower Framing'
      },
      {
        name: 'Parrot Heliconia',
        scientific: 'Heliconia psittacorum',
        category: 'Tropical Flowers',
        role: 'High-contrast orange & yellow blooms at corporate entry steps',
        light: 'Full Sun',
        water: 'Medium',
        native: false,
        emoji: '🌺',
        tag: 'Entry Color'
      },
      {
        name: 'Weeping Fig',
        scientific: 'Ficus benjamina',
        category: 'Buffer Trees',
        role: 'Acoustic sound dampening & dust screening along Ozumba Mbadiwe',
        light: 'Full Sun to Part Shade',
        water: 'Low–Medium',
        native: false,
        emoji: '🌳',
        tag: 'Urban Sound Buffer'
      },
      {
        name: 'Paspalum Turf',
        scientific: 'Paspalum vaginatum',
        category: 'Turf',
        role: 'Lagoon-tolerant, deep emerald green arrival roundabout lawn',
        light: 'Full Sun',
        water: 'Medium (Auto-Drip)',
        native: true,
        emoji: '🌱',
        tag: 'Coastal Turf'
      }
    ]
  },
  {
    slug: 'abuja-city-gate',
    category: 'Public Space',
    name: 'Abuja City Gate',
    location: 'Abuja, FCT',
    coords: [9.0765, 7.4879],
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
    lighting: {
      dayImage: G.day3,
      nightImage: G.night4,
      hotspots: [
        {
          id: 'gate-monument-wash',
          x: 49,
          y: 36,
          title: 'Monuments Arch Illumination',
          category: 'Civic Monument',
          fixture: 'Precision Narrow Architectural Flood (IP67)',
          cct: '4000K Neutral White',
          beam: '12° Narrow Punch',
          purpose: 'Highlights the ceremonial Abuja Gate arch structure against the night sky without light trespass into traffic arteries.',
          wattage: '45W High-Output LED'
        },
        {
          id: 'fountain-aquatics',
          x: 48,
          y: 68,
          title: 'Choreographed Fountain Illumination',
          category: 'Interactive Water Feature',
          fixture: 'Submersible DMX-Controlled RGBW LED (IP68)',
          cct: 'Dynamic Aquatic White & Emerald',
          beam: 'Wide 45° Underwater Optic',
          purpose: 'Synchronized water plume uplighting creating kinetic shimmering effects visible from the highway approaches.',
          wattage: '24W Low-Voltage Submersible'
        },
        {
          id: 'palm-avenue-uplights',
          x: 24,
          y: 52,
          title: 'Ceremonial Palm Ring Uplights',
          category: 'Monumental Flora',
          fixture: 'Recessed In-Ground Drive-Over Luminaire',
          cct: '2700K Warm White',
          beam: '24° Fluted Grazing Optic',
          purpose: 'Accentuates the rhythmic towering trunks of Royal Palms framing the concentric ring promenade.',
          wattage: '18W Drive-Over LED'
        },
        {
          id: 'promenade-pathway-markers',
          x: 76,
          y: 78,
          title: 'Concentric Promenade Step Markers',
          category: 'Public Pedestrian Safety',
          fixture: 'Recessed Low-Level Step & Paver Puck',
          cct: '3000K Soft White',
          beam: 'Asymmetric 180° Ground Sweep',
          purpose: 'Provides gentle guidance along perimeter walkways and stone benches for evening pedestrians.',
          wattage: '3W Sealed Paver LED'
        }
      ]
    },
    plants: [
      {
        name: 'Royal Palm',
        scientific: 'Roystonea regia',
        category: 'Monumental Palms',
        role: 'Concentric ceremonial ring avenues radiating from the national gate',
        light: 'Full Sun',
        water: 'Medium',
        native: false,
        emoji: '🌴',
        tag: 'Ceremonial Axis'
      },
      {
        name: 'Yellow Trumpetbush',
        scientific: 'Tecoma stans',
        category: 'Flowering Shrubs',
        role: 'Continuous golden floral display resilient to Harmattan winds',
        light: 'Full Sun',
        water: 'Low',
        native: false,
        emoji: '🌼',
        tag: 'Harmattan Resilient'
      },
      {
        name: 'Black Plum',
        scientific: 'Vitex doniana',
        category: 'Native Trees',
        role: 'Indigenous savanna woodland shade clusters preserving heritage',
        light: 'Full Sun',
        water: 'Very Low',
        native: true,
        emoji: '🌳',
        tag: 'Savanna Heritage'
      },
      {
        name: 'Bougainvillea Cascade',
        scientific: 'Bougainvillea spectabilis',
        category: 'Climbers',
        role: 'Massed magenta slope coverage visible from Airport Expressway',
        light: 'Full Sun',
        water: 'Low',
        native: false,
        emoji: '🌸',
        tag: 'Highway Vista'
      }
    ],
    beforeAfter: {
      before: G.r4,
      after:  G.day3,
      beforeLabel: 'Design Render',
      afterLabel:  'Completed 2024',
    },
  }
]

export function getRelated(slug, count = 3) {
  const current = PROJECTS.find(p => p.slug === slug)
  if (!current) return []
  const same = PROJECTS.filter(p => p.slug !== slug && p.category === current.category)
  const rest = PROJECTS.filter(p => p.slug !== slug && p.category !== current.category)
  return [...same, ...rest].slice(0, count)
}

export const FILTERS = ['All', 'Commercial', 'Public Space']
