// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — Service Areas
// Cities and regions where Arabella operates.
// ─────────────────────────────────────────────────────────────────

export const SERVICE_AREAS = [
  {
    slug: 'lagos',
    city: 'Lagos',
    state: 'Lagos State',
    tagline: "Nigeria's commercial capital — our largest operating city.",
    heroLine: 'From Victoria Island to Ibeju-Lekki',
    image: '/images/abuja-gate-3.png',
    projectCount: '120+',
    sinceYear: '2010',
    description: "Lagos is Arabella's home base and the city where we've delivered more projects than anywhere else. Our Lagos portfolio spans the full spectrum — from intimate Ikoyi courtyard gardens to large-scale master-planned estates in Lekki and Epe. We know Lagos soils, Lagos microclimates, and the Lagos approval process inside out.",
    districts: [
      'Victoria Island & Eko Atlantic',
      'Ikoyi & Banana Island',
      'Lekki Phases I, II & Free Trade Zone',
      'Ajah & Sangotedo',
      'Ikeja & the Mainland',
      'Epe & Ibeju-Lekki Corridor',
    ],
    highlights: [
      '120+ completed projects',
      'Full design-build-maintain capability',
      'Same-day site assessment available',
      'Local horticulture nursery in Lekki',
    ],
    phone: '+234 800 123 4567',
    email: 'lagos@arabellalandscape.com',
  },
  {
    slug: 'abuja',
    city: 'Abuja',
    state: 'Federal Capital Territory',
    tagline: "The capital — home to our landmark public realm projects.",
    heroLine: 'CBD to the Satellite Towns',
    image: '/images/abuja-gate-1.png',
    projectCount: '55+',
    sinceYear: '2014',
    description: "Abuja is home to Arabella's most significant public realm commissions, including the Abuja City Gate — now recognised as one of Nigeria's finest examples of urban landscape design. We hold a standing framework agreement with the FCTA and maintain strong relationships with the key government and corporate clients who define landscape quality in the capital.",
    districts: [
      'Central Business District',
      'Maitama & Asokoro',
      'Garki & Wuse',
      'Guzape & Katampe',
      'Jabi & Utako',
      'Satellite Towns: Kuje, Gwagwalada, Bwari',
    ],
    highlights: [
      '55+ projects including major public realm',
      'FCTA-approved landscape contractor',
      'Resident site team based in CBD',
      'Specialist in civic & institutional projects',
    ],
    phone: '+234 800 123 4568',
    email: 'abuja@arabellalandscape.com',
  },
  {
    slug: 'port-harcourt',
    city: 'Port Harcourt',
    state: "Rivers State",
    tagline: 'The Garden City — we keep it that way.',
    heroLine: 'GRA to Trans-Amadi',
    image: '/images/abuja-gate-4.png',
    projectCount: '18+',
    sinceYear: '2018',
    description: "Port Harcourt's title as the Garden City of Nigeria is one we take seriously. Our Rivers State projects include corporate campuses for the energy sector, residential estates in the GRA, and commercial retail landscape in the Trans-Amadi corridor. The coastal humidity and high rainfall of the Niger Delta require specialist plant knowledge — our horticulturalists are trained specifically for this climate.",
    districts: [
      'GRA Phase I, II & III',
      'Old GRA & New GRA',
      'Trans-Amadi Industrial Layout',
      'Rumuola & Rumuibekwe',
      'Eleme & Obio-Akpor',
      'Bonny Island (marine access)',
    ],
    highlights: [
      '18+ projects across commercial & residential',
      'Specialist Niger Delta horticulture knowledge',
      'Energy sector corporate campus experience',
      'Marine/island site capability',
    ],
    phone: '+234 800 123 4569',
    email: 'portharcourt@arabellalandscape.com',
  },
  {
    slug: 'ibadan',
    city: 'Ibadan',
    state: 'Oyo State',
    tagline: "Nigeria's largest city by area — growing fast.",
    heroLine: 'Ring Road to Bodija & Beyond',
    image: '/images/abuja-gate-2.png',
    projectCount: '9+',
    sinceYear: '2021',
    description: "Ibadan's rapid growth — particularly along the Lagos-Ibadan Expressway corridor and in Bodija — has created strong demand for quality landscape on new residential and commercial developments. Arabella has been active in the city since 2021, delivering residential estate landscapes and corporate office campuses, with a growing pipeline in the Oluyole and Agodi areas.",
    districts: [
      'Bodija & New Bodija',
      'Jericho & Agodi',
      'Ring Road & Dugbe',
      'Oluyole Industrial Estate',
      'Lagos-Ibadan Expressway Corridor',
      'Ojoo & Apata',
    ],
    highlights: [
      '9+ projects and growing pipeline',
      'New residential estate specialists',
      'Express Expressway corridor coverage',
      'Full Lagos-Ibadan project coordination',
    ],
    phone: '+234 800 123 4570',
    email: 'ibadan@arabellalandscape.com',
  },
]

export function getServiceArea(slug) {
  return SERVICE_AREAS.find(a => a.slug === slug) || null
}
