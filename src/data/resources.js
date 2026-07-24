// ─────────────────────────────────────────────────────────────────
// Free downloadable guides — shown on the Blog/Insights page.
// Each triggers an email-gate modal; on form submit the user
// receives the download link.
//
// TODO: Add the actual PDF files to /public/assets/guides/
//       before going live, then replace FORMSPREE_ID in ResourceModal.
// ─────────────────────────────────────────────────────────────────

export const FREE_GUIDES = [
  {
    id: 'lagos-garden-guide',
    title: 'The Complete Lagos Garden Design Guide',
    subtitle: '28-page illustrated guide',
    desc: 'Plant palettes, soil prep, irrigation tips, and design principles for Lagos gardens — from coastal Ikoyi to inland Ikeja.',
    category: 'Design',
    downloadPath: '/assets/guides/arabella-lagos-garden-guide.pdf',
    accentColor: 'var(--arabella-green)',
  },
  {
    id: 'corporate-roi-guide',
    title: 'Corporate Landscape ROI Guide',
    subtitle: '16-page business case',
    desc: 'The financial and talent-attraction case for investing in corporate campus landscape — with Nigerian market data and benchmarks.',
    category: 'Corporate',
    downloadPath: '/assets/guides/arabella-corporate-roi-guide.pdf',
    accentColor: 'var(--canopy-green)',
  },
  {
    id: 'nigeria-plant-guide',
    title: "Best Plants for Nigeria's Climate Zones",
    subtitle: '40-page illustrated plant guide',
    desc: 'Species-by-species guide to the best performing trees, shrubs, and ground covers for Lagos, Abuja, and Port Harcourt.',
    category: 'Horticulture',
    downloadPath: '/assets/guides/arabella-nigeria-plant-guide.pdf',
    accentColor: 'var(--arabella-green)',
  },
  {
    id: 'developer-guide',
    title: 'Landscape Strategy for Property Developers',
    subtitle: '20-page developer playbook',
    desc: 'How to use landscape to differentiate your scheme, accelerate sales, and command premium pricing — from masterplan to handover.',
    category: 'Developers',
    downloadPath: '/assets/guides/arabella-developer-guide.pdf',
    accentColor: 'var(--canopy-green)',
  },
]
