// ─────────────────────────────────────────────────────────────────
// Arabella Landscape Limited — Admin Control Gateway
// ─────────────────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { insforgeService } from '../lib/insforge'
import { LoadingSpinner } from '../components/LoadingSpinner'
import '../styles/pages/admin.css'

// Sample Enquiries Data
const INITIAL_ENQUIRIES = [
  { id: 'enq-101', name: 'Chief Olumide Adeleke', email: 'o.adeleke@eko-towers.ng', phone: '+234 803 555 0192', service: 'Commercial Masterplanning', date: '2026-07-23', status: 'New', message: 'Requesting site consultation for a 4-hectare commercial eco-park in Eko Atlantic.' },
  { id: 'enq-102', name: 'Dr. Amina Bello', email: 'a.bello@maitama-estates.com', phone: '+234 809 444 8812', service: 'Private Estate Landscape', date: '2026-07-22', status: 'In Progress', message: 'Looking for full landscape architectural design and automated irrigation for private residency in Maitama, Abuja.' },
  { id: 'enq-103', name: 'Engr. Femi Ojo', email: 'femi@lagos-urban-dev.gov.ng', phone: '+234 802 333 7100', service: 'Public Realm & Parks', date: '2026-07-20', status: 'Completed', message: 'Urgent consultation for urban civic square greening project in Ikeja.' },
  { id: 'enq-104', name: 'Mrs. Kemi Alabi', email: 'kemi.alabi@gmail.com', phone: '+234 818 777 9090', service: 'Horticultural Consultation', date: '2026-07-18', status: 'Completed', message: 'Enquiry for tropical planting specification for luxury apartment complex in Ikoyi.' }
]

// Initial Team Directory Data
const INITIAL_TEAM = [
  { id: 'tm-1', name: 'Adaeze Nwosu', role: 'Founder & CEO', color: '#004016', photo: '/assets/images/team-1.png', bio: 'Registered landscape architect with over 35 years in the profession.' },
  { id: 'tm-2', name: 'Chukwuemeka Obi', role: 'Head of Landscape Architecture', color: '#00722C', photo: '/assets/images/team-2.png', bio: "Leads Arabella's masterplanning and design team." },
  { id: 'tm-3', name: 'Ngozi Adeyemi', role: 'Lead Horticulturalist', color: '#004016', photo: '/assets/images/team-3.png', bio: 'Expert in Nigerian native flora and tropical planting design.' },
  { id: 'tm-4', name: 'Babajide Salawu', role: 'Director of Construction', color: '#00722C', photo: '/assets/images/team-4.png', bio: 'Civil engineer turned landscape construction director.' }
]

// Initial Testimonials Data
const INITIAL_TESTIMONIALS = [
  { id: 'tst-1', author: 'Alhaji Aliko Dangote', role: 'Group Chairman', project: 'Dangote Refinery Greenbelt', city: 'Lekki Free Zone', quote: "Arabella's team delivered a world-class landscape masterplan that seamlessly balances tropical aesthetics with industrial environmental resilience.", rating: 5 },
  { id: 'tst-2', author: 'Dr. Herbert Wigwe', role: 'Founder', project: 'Wigwe University Grounds', city: 'Isiokpo, Rivers', quote: 'The botanical diversity and water conservation systems designed by Arabella have transformed our campus into a pristine educational sanctuary.', rating: 5 },
  { id: 'tst-3', author: 'Chief Mrs. Nike Okundaye', role: 'Director', project: 'Nike Art Gallery Pavilion', city: 'Ikoyi, Lagos', quote: 'A masterpiece of native Nigerian flora and natural hardscape. Their attention to detail and craftsmanship is unmatched.', rating: 5 }
]

export default function AdminDashboard() {
  // Active Navigation Tab State
  const [activeTab, setActiveTab] = useState('projects') // 'projects' | 'enquiries' | 'team' | 'testimonials' | 'analytics'

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('arabella_admin_auth') === 'true'
  })
  const [loginUser, setLoginUser] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [authError, setAuthError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Projects State
  const [projects, setProjects] = useState([])
  const [loadingProjects, setLoadingProjects] = useState(true)
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProjectSlug, setEditingProjectSlug] = useState(null)
  const [deleteConfirmSlug, setDeleteConfirmSlug] = useState(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [connStatus, setConnStatus] = useState({ testing: false, message: 'Backend System Connected' })
  const [imagePreview, setImagePreview] = useState(null)
  const [uploading, setUploading] = useState(false)

  // Gallery Photos State
  const [galleryPreviews, setGalleryPreviews] = useState([])
  const [uploadingGallery, setUploadingGallery] = useState(false)

  // Consultation Enquiries State
  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('arabella_admin_enquiries')
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES
  })
  const [selectedEnquiry, setSelectedEnquiry] = useState(null)

  // Team Directory State
  const [teamList, setTeamList] = useState(() => {
    const saved = localStorage.getItem('arabella_admin_team')
    return saved ? JSON.parse(saved) : INITIAL_TEAM
  })
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)
  const [teamForm, setTeamForm] = useState({ name: '', role: '', bio: '', photo: '' })

  // Testimonials State
  const [testimonialsList, setTestimonialsList] = useState(() => {
    const saved = localStorage.getItem('arabella_admin_testimonials')
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS
  })
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false)
  const [testimonialForm, setTestimonialForm] = useState({ author: '', role: '', project: '', city: '', quote: '', rating: 5 })

  // Form State for Project Upload / Edit
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: 'Commercial',
    location: '',
    client: '',
    year: String(new Date().getFullYear()),
    area: '',
    services: 'Landscape Architecture, Site Development',
    highlights: 'Custom planting scheme, Automated irrigation',
    description: '',
    detail: '',
    image: ''
  })

  // Load Projects on Mount if Authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadProjects()
    }
  }, [isAuthenticated])

  // Save state updates to localStorage
  useEffect(() => {
    localStorage.setItem('arabella_admin_enquiries', JSON.stringify(enquiries))
  }, [enquiries])

  useEffect(() => {
    localStorage.setItem('arabella_admin_team', JSON.stringify(teamList))
  }, [teamList])

  useEffect(() => {
    localStorage.setItem('arabella_admin_testimonials', JSON.stringify(testimonialsList))
  }, [testimonialsList])

  const loadProjects = async () => {
    setLoadingProjects(true)
    const list = await insforgeService.fetchProjects()
    setProjects(list)
    setLoadingProjects(false)
  }

  // Authentication Handlers
  const handleLogin = (e) => {
    e.preventDefault()
    if (loginUser.trim() === 'admin' && loginPass === 'arabella2026#') {
      localStorage.setItem('arabella_admin_auth', 'true')
      setIsAuthenticated(true)
      setAuthError('')
    } else {
      setAuthError('Invalid username or password. Please check credentials.')
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('arabella_admin_auth')
    setIsAuthenticated(false)
    setLoginUser('')
    setLoginPass('')
  }

  // Project Input Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updated = { ...prev, [name]: value }
      if (name === 'name' && !prev.slug && !editingProjectSlug) {
        updated.slug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      }
      return updated
    })
  }

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    const uploadedUrl = await insforgeService.uploadImage(file)
    setImagePreview(uploadedUrl)
    setFormData(prev => ({ ...prev, image: uploadedUrl }))
    setUploading(false)
  }

  const handleGalleryFilesChange = async (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return
    setUploadingGallery(true)
    const uploadedUrls = []
    for (const file of files) {
      const url = await insforgeService.uploadImage(file)
      uploadedUrls.push(url)
    }
    setGalleryPreviews(prev => [...prev, ...uploadedUrls])
    setUploadingGallery(false)
  }

  const removeGalleryImage = (indexToRemove) => {
    setGalleryPreviews(prev => prev.filter((_, idx) => idx !== indexToRemove))
  }

  const handleEditClick = (project) => {
    setEditingProjectSlug(project.slug)
    setFormData({
      name: project.name || '',
      slug: project.slug || '',
      category: project.category || 'Commercial',
      location: project.location || '',
      client: project.client || '',
      year: project.year || String(new Date().getFullYear()),
      area: project.area || '',
      services: Array.isArray(project.services) ? project.services.join(', ') : (project.services || ''),
      highlights: Array.isArray(project.highlights) ? project.highlights.join(', ') : (project.highlights || ''),
      description: project.description || '',
      detail: project.detail || '',
      image: project.image || ''
    })
    setImagePreview(project.image || null)
    setGalleryPreviews(project.images || (project.image ? [project.image] : []))
    setIsModalOpen(true)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || isSubmitting) return

    setIsSubmitting(true)
    const servicesArray = formData.services.split(',').map(s => s.trim()).filter(Boolean)
    const highlightsArray = formData.highlights.split(',').map(h => h.trim()).filter(Boolean)
    const mainCover = formData.image || galleryPreviews[0] || '/images/abuja-gate-4.png'
    const galleryList = galleryPreviews.length > 0 ? galleryPreviews : [mainCover]
    const allImages = Array.from(new Set([mainCover, ...galleryList]))

    const projectPayload = {
      ...formData,
      image: mainCover,
      images: allImages,
      services: servicesArray,
      highlights: highlightsArray
    }

    if (editingProjectSlug) {
      await insforgeService.updateProject(editingProjectSlug, projectPayload)
    } else {
      await insforgeService.createProject(projectPayload)
    }

    await loadProjects()
    setIsSubmitting(false)
    setIsModalOpen(false)
    resetForm()
  }

  const handleDelete = async (slug) => {
    setIsDeleting(true)
    await insforgeService.deleteProject(slug)
    await loadProjects()
    setIsDeleting(false)
    setDeleteConfirmSlug(null)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      slug: '',
      category: 'Commercial',
      location: '',
      client: '',
      year: String(new Date().getFullYear()),
      area: '',
      services: 'Landscape Architecture, Site Development',
      highlights: 'Custom planting scheme, Automated irrigation',
      description: '',
      detail: '',
      image: ''
    })
    setImagePreview(null)
    setGalleryPreviews([])
    setEditingProjectSlug(null)
  }

  // Enquiry Actions
  const handleEnquiryStatusChange = (id, newStatus) => {
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status: newStatus } : e))
  }

  const handleDeleteEnquiry = (id) => {
    setEnquiries(prev => prev.filter(e => e.id !== id))
    if (selectedEnquiry?.id === id) setSelectedEnquiry(null)
  }

  // Team Actions
  const handleAddTeamMember = (e) => {
    e.preventDefault()
    if (!teamForm.name) return
    const newMember = {
      id: 'tm-' + Date.now(),
      name: teamForm.name,
      role: teamForm.role || 'Senior Landscape Architect',
      photo: teamForm.photo || '/assets/images/team-1.png',
      bio: teamForm.bio || 'Experienced landscape specialist.'
    }
    setTeamList(prev => [newMember, ...prev])
    setTeamForm({ name: '', role: '', bio: '', photo: '' })
    setIsTeamModalOpen(false)
  }

  const handleDeleteTeamMember = (id) => {
    setTeamList(prev => prev.filter(m => m.id !== id))
  }

  // Testimonials Actions
  const handleAddTestimonial = (e) => {
    e.preventDefault()
    if (!testimonialForm.author || !testimonialForm.quote) return
    const newTst = {
      id: 'tst-' + Date.now(),
      ...testimonialForm
    }
    setTestimonialsList(prev => [newTst, ...prev])
    setTestimonialForm({ author: '', role: '', project: '', city: '', quote: '', rating: 5 })
    setIsTestimonialModalOpen(false)
  }

  const handleDeleteTestimonial = (id) => {
    setTestimonialsList(prev => prev.filter(t => t.id !== id))
  }

  const handleTestConnection = async () => {
    setConnStatus({ testing: true, message: 'Testing backend connection…' })
    const res = await insforgeService.testConnection()
    setConnStatus({ testing: false, message: res.message.replace(/InsForge/g, 'Backend') })
  }

  // Login Gate
  if (!isAuthenticated) {
    return (
      <main className="admin-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '4rem 1rem' }}>
        <Helmet>
          <title>Admin Login — Arabella Landscape Limited</title>
        </Helmet>
        
        <div style={{
          background: '#004016',
          border: '1px solid rgba(223, 219, 0, 0.4)',
          borderRadius: '24px',
          padding: '3rem 2.5rem',
          maxWidth: '440px',
          width: '100%',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
          textAlign: 'center',
          color: '#F7F5F0'
        }}>
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <span className="admin-badge">
              <span className="admin-badge__dot" />
              Arabella Control Gateway
            </span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: '#F7F5F0', marginBottom: '0.5rem', fontWeight: 800 }}>
            Admin Login
          </h1>
          <p style={{ color: 'rgba(247, 245, 240, 0.85)', fontSize: '14px', marginBottom: '2rem' }}>
            Sign in to access portfolio control panel
          </p>

          {authError && (
            <div style={{
              background: 'rgba(220, 38, 38, 0.25)',
              border: '1px solid rgba(220, 38, 38, 0.5)',
              borderRadius: '10px',
              padding: '0.75rem 1rem',
              color: '#FFB4B4',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '1.5rem',
              textAlign: 'left'
            }}>
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="admin-form-group" style={{ textAlign: 'left' }}>
              <label className="admin-label">Username</label>
              <input
                type="text"
                required
                placeholder="Enter username"
                className="admin-input"
                value={loginUser}
                onChange={(e) => setLoginUser(e.target.value)}
                style={{ width: '100%', background: 'rgba(255,255,255,0.12)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '10px', padding: '0.75rem 1rem' }}
              />
            </div>

            <div className="admin-form-group" style={{ textAlign: 'left' }}>
              <label className="admin-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter password"
                  className="admin-input"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  style={{ width: '100%', paddingRight: '3.5rem', background: 'rgba(255,255,255,0.12)', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.3)', borderRadius: '10px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#DFDB00',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 700
                  }}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                background: 'var(--canopy-green)',
                color: 'var(--ivory)',
                fontWeight: 800,
                fontSize: '14px',
                borderRadius: '12px',
                padding: '0.9rem',
                marginTop: '0.5rem',
                width: '100%'
              }}
            >
              Sign In to Dashboard
            </button>
          </form>

          <p style={{ fontSize: '12px', color: 'rgba(247,245,240,0.5)', margin: '2rem 0 0 0' }}>
            Arabella Landscape Limited © 2026
          </p>
        </div>
      </main>
    )
  }

  // Filter projects for table
  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.location.toLowerCase().includes(search.toLowerCase())
    const matchesCat = categoryFilter === 'All' || p.category === categoryFilter
    return matchesSearch && matchesCat
  })

  // Category counts
  const commercialCount = projects.filter(p => p.category === 'Commercial').length
  const publicCount = projects.filter(p => p.category === 'Public Space').length
  const residentialCount = projects.filter(p => p.category === 'Residential').length
  const newEnquiriesCount = enquiries.filter(e => e.status === 'New').length

  return (
    <main className="admin-page">
      <Helmet>
        <title>Admin Dashboard — Arabella Landscape Limited</title>
      </Helmet>

      <section className="section" style={{ paddingTop: '7.5rem', paddingBottom: '5rem', background: 'var(--surface-container-low, #F7F5F0)' }}>
        <div className="container">
          
          {/* Header Bar */}
          <div className="admin-header-bar" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2rem',
            paddingBottom: '1.5rem',
            borderBottom: '1px solid var(--outline-variant, #94AD99)'
          }}>
            <div>
              <p className="section-label" style={{ marginBottom: '0.25rem', color: 'var(--canopy-green)' }}>Admin Portal</p>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.25rem',
                fontWeight: 800,
                color: 'var(--arabella-green)',
                margin: 0
              }}>
                Arabella Control Center
              </h1>
              <p style={{ color: 'var(--ink)', fontSize: '14.5px', margin: '0.35rem 0 0 0', opacity: 0.85 }}>
                Manage website portfolio projects, client enquiries, leadership directory, and analytics.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="admin-badge">
                <span className="admin-badge__dot" />
                Authenticated (admin)
              </span>
              {activeTab === 'projects' && (
                <button 
                  className="btn btn-primary" 
                  onClick={() => { resetForm(); setIsModalOpen(true); }}
                  style={{ background: 'var(--arabella-green)', color: 'var(--ivory)', fontWeight: 700, borderRadius: '10px' }}
                >
                  + Upload New Project
                </button>
              )}
              {activeTab === 'team' && (
                <button 
                  className="btn btn-primary" 
                  onClick={() => setIsTeamModalOpen(true)}
                  style={{ background: 'var(--arabella-green)', color: 'var(--ivory)', fontWeight: 700, borderRadius: '10px' }}
                >
                  + Add Team Member
                </button>
              )}
              {activeTab === 'testimonials' && (
                <button 
                  className="btn btn-primary" 
                  onClick={() => setIsTestimonialModalOpen(true)}
                  style={{ background: 'var(--arabella-green)', color: 'var(--ivory)', fontWeight: 700, borderRadius: '10px' }}
                >
                  + Add Client Review
                </button>
              )}
              <button
                onClick={handleLogout}
                className="admin-btn-sm admin-btn-danger"
                style={{ padding: '0.65rem 1.1rem', borderRadius: '10px', fontWeight: 700 }}
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="admin-stats-grid">
            <div className="admin-stat-card">
              <div className="admin-stat-card__val">{loadingProjects ? '…' : projects.length}</div>
              <div className="admin-stat-card__lbl">Active Projects</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-card__val" style={{ color: 'var(--canopy-green)' }}>{enquiries.length}</div>
              <div className="admin-stat-card__lbl">Consultation Enquiries ({newEnquiriesCount} New)</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-card__val">{teamList.length}</div>
              <div className="admin-stat-card__lbl">Leadership Team Directory</div>
            </div>
            <div className="admin-stat-card">
              <div className="admin-stat-card__val">{testimonialsList.length}</div>
              <div className="admin-stat-card__lbl">Client Testimonials</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="admin-tabs-nav">
            <button 
              className={`admin-tab-btn ${activeTab === 'projects' ? 'admin-tab-btn--active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              📁 Portfolio Projects ({projects.length})
            </button>
            <button 
              className={`admin-tab-btn ${activeTab === 'enquiries' ? 'admin-tab-btn--active' : ''}`}
              onClick={() => setActiveTab('enquiries')}
            >
              ✉️ Consultation Enquiries
              {newEnquiriesCount > 0 && <span className="admin-tab-badge">{newEnquiriesCount} New</span>}
            </button>
            <button 
              className={`admin-tab-btn ${activeTab === 'team' ? 'admin-tab-btn--active' : ''}`}
              onClick={() => setActiveTab('team')}
            >
              👥 Team Directory ({teamList.length})
            </button>
            <button 
              className={`admin-tab-btn ${activeTab === 'testimonials' ? 'admin-tab-btn--active' : ''}`}
              onClick={() => setActiveTab('testimonials')}
            >
              ⭐ Client Reviews ({testimonialsList.length})
            </button>
            <button 
              className={`admin-tab-btn ${activeTab === 'analytics' ? 'admin-tab-btn--active' : ''}`}
              onClick={() => setActiveTab('analytics')}
            >
              📊 Analytics & System Status
            </button>
          </div>

          {/* TAB 1: PROJECTS CATALOG */}
          {activeTab === 'projects' && (
            <div className="admin-card">
              <div className="admin-card-header">
                <h2 className="admin-card-title">Manage Projects Catalog</h2>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <select 
                    className="admin-select"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="All">All Sectors ({projects.length})</option>
                    <option value="Commercial">Commercial ({commercialCount})</option>
                    <option value="Public Space">Public Space ({publicCount})</option>
                    <option value="Residential">Residential ({residentialCount})</option>
                  </select>

                  <input
                    type="search"
                    className="admin-input"
                    placeholder="Search project or location…"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ minWidth: '220px' }}
                  />
                </div>
              </div>

              <div className="admin-table-container">
                {loadingProjects ? (
                  <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
                    <LoadingSpinner size="lg" label="Fetching Projects Catalog…" color="#004016" />
                  </div>
                ) : (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Thumbnail</th>
                        <th>Project Name</th>
                        <th>Sector</th>
                        <th>Location</th>
                        <th>Gallery</th>
                        <th>Year</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredProjects.map((p) => {
                        let tagClass = 'admin-tag'
                        if (p.category === 'Commercial') tagClass += ' admin-tag--commercial'
                        if (p.category === 'Public Space') tagClass += ' admin-tag--public'
                        if (p.category === 'Residential') tagClass += ' admin-tag--residential'
                        const photoCount = p.images?.length || (p.image ? 1 : 0)

                        return (
                          <tr key={p.slug}>
                            <td>
                              <img src={p.image} alt={p.name} className="admin-thumb" />
                            </td>
                            <td>
                              <span className="admin-project-name">{p.name}</span>
                              <span className="admin-project-sub">{p.area || 'Landscape Development'}</span>
                            </td>
                            <td>
                              <span className={tagClass}>{p.category}</span>
                            </td>
                            <td>{p.location}</td>
                            <td>
                              <span className="admin-tag" style={{ background: '#E8E4DA', color: '#004016' }}>
                                {photoCount} Photo{photoCount !== 1 ? 's' : ''}
                              </span>
                            </td>
                            <td>{p.year}</td>
                            <td>
                              <div className="admin-actions-cell">
                                <Link to={`/projects/${p.slug}`} target="_blank" className="admin-btn-sm admin-btn-view">
                                  View
                                </Link>
                                <button 
                                  className="admin-btn-sm admin-btn-view"
                                  onClick={() => handleEditClick(p)}
                                  style={{ background: 'rgba(0, 114, 44, 0.1)', color: '#00722C', border: '1px solid rgba(0, 114, 44, 0.3)' }}
                                >
                                  Edit
                                </button>
                                <button 
                                  className="admin-btn-sm admin-btn-danger"
                                  onClick={() => setDeleteConfirmSlug(p.slug)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })}
                      {filteredProjects.length === 0 && (
                        <tr>
                          <td colSpan="7" style={{ textAlign: 'center', padding: '3rem 1rem', color: '#14140F' }}>
                            No projects found matching query.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: CONSULTATION ENQUIRIES */}
          {activeTab === 'enquiries' && (
            <div className="admin-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Client Consultation Requests Inbox</h2>
                  <p style={{ fontSize: '13.5px', color: 'var(--ink)', margin: '0.2rem 0 0 0', opacity: 0.8 }}>
                    Enquiries submitted via website Consultation forms & Contact page.
                  </p>
                </div>
              </div>

              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Client Name</th>
                      <th>Contact Info</th>
                      <th>Service Requested</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((e) => {
                      let statusBadgeClass = 'admin-status-badge '
                      if (e.status === 'New') statusBadgeClass += 'admin-status-badge--new'
                      else if (e.status === 'In Progress') statusBadgeClass += 'admin-status-badge--progress'
                      else statusBadgeClass += 'admin-status-badge--completed'

                      return (
                        <tr key={e.id}>
                          <td style={{ fontSize: '13px', fontWeight: 600 }}>{e.date}</td>
                          <td>
                            <strong style={{ color: 'var(--arabella-green)', fontSize: '15px' }}>{e.name}</strong>
                          </td>
                          <td>
                            <div style={{ fontSize: '13.5px' }}>
                              <div><a href={`mailto:${e.email}`} style={{ color: 'var(--canopy-green)', textDecoration: 'none' }}>{e.email}</a></div>
                              <div style={{ color: 'var(--ink)', opacity: 0.8 }}>{e.phone}</div>
                            </div>
                          </td>
                          <td>
                            <span className="admin-tag admin-tag--commercial">{e.service}</span>
                          </td>
                          <td>
                            <span className={statusBadgeClass}>{e.status}</span>
                          </td>
                          <td>
                            <div className="admin-actions-cell">
                              <button 
                                className="admin-btn-sm admin-btn-view"
                                onClick={() => setSelectedEnquiry(e)}
                              >
                                View Note
                              </button>
                              <select 
                                value={e.status} 
                                onChange={(evt) => handleEnquiryStatusChange(e.id, evt.target.value)}
                                className="admin-select"
                                style={{ padding: '0.3rem 1.8rem 0.3rem 0.6rem', fontSize: '12px' }}
                              >
                                <option value="New">Mark New</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                              </select>
                              <button 
                                className="admin-btn-sm admin-btn-danger"
                                onClick={() => handleDeleteEnquiry(e.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: TEAM DIRECTORY */}
          {activeTab === 'team' && (
            <div className="admin-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Arabella Leadership & Staff Directory</h2>
                  <p style={{ fontSize: '13.5px', color: 'var(--ink)', margin: '0.2rem 0 0 0', opacity: 0.8 }}>
                    Team profiles featured on the About Us page.
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                {teamList.map((member, i) => (
                  <div key={member.id} style={{
                    background: i % 2 === 0 ? '#EBE8E0' : '#D2DACF',
                    border: '1px solid #94AD99',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                        <div style={{
                          width: '56px',
                          height: '56px',
                          borderRadius: '50%',
                          background: member.color || 'var(--arabella-green)',
                          color: 'var(--ivory)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '20px',
                          fontWeight: 800,
                          flexShrink: 0
                        }}>
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 style={{ margin: 0, color: 'var(--arabella-green)', fontSize: '17px', fontWeight: 700 }}>{member.name}</h4>
                          <p style={{ margin: '0.2rem 0 0 0', color: 'var(--canopy-green)', fontSize: '13px', fontWeight: 600 }}>{member.role}</p>
                        </div>
                      </div>
                      <p style={{ fontSize: '13.5px', color: 'var(--ink)', lineHeight: 1.55, margin: '0 0 1.25rem 0', opacity: 0.9 }}>
                        {member.bio}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                      <button 
                        className="admin-btn-sm admin-btn-danger"
                        onClick={() => handleDeleteTeamMember(member.id)}
                      >
                        Remove Member
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CLIENT REVIEWS */}
          {activeTab === 'testimonials' && (
            <div className="admin-card">
              <div className="admin-card-header">
                <div>
                  <h2 className="admin-card-title">Client Reviews & Endorsements</h2>
                  <p style={{ fontSize: '13.5px', color: 'var(--ink)', margin: '0.2rem 0 0 0', opacity: 0.8 }}>
                    Testimonials displayed across the homepage and case studies.
                  </p>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginTop: '1rem' }}>
                {testimonialsList.map((t, i) => (
                  <div key={t.id} style={{
                    background: i % 2 === 0 ? '#EBE8E0' : '#D2DACF',
                    border: '1px solid #94AD99',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <div>
                      <div style={{ color: 'var(--canopy-green)', fontWeight: 800, marginBottom: '0.5rem' }}>
                        {'★'.repeat(t.rating)}
                      </div>
                      <blockquote style={{ fontSize: '14px', color: 'var(--ink)', fontStyle: 'italic', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                        "{t.quote}"
                      </blockquote>
                      <p style={{ margin: 0, fontWeight: 700, color: 'var(--arabella-green)', fontSize: '15px' }}>{t.author}</p>
                      <p style={{ margin: '0.15rem 0 0 0', fontSize: '12.5px', color: 'var(--canopy-green)' }}>{t.role} — {t.project} ({t.city})</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.25rem' }}>
                      <button 
                        className="admin-btn-sm admin-btn-danger"
                        onClick={() => handleDeleteTestimonial(t.id)}
                      >
                        Delete Review
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: ANALYTICS & HEALTH */}
          {activeTab === 'analytics' && (
            <div>
              <div className="admin-status-banner" style={{ marginBottom: '2rem' }}>
                <div>
                  <p style={{ fontWeight: 700, color: '#004016', fontSize: '15px', margin: 0 }}>
                    Backend Core Engine Status
                  </p>
                  <p style={{ color: '#14140F', fontSize: '13.5px', margin: 0 }}>
                    {connStatus.testing ? <LoadingSpinner size="sm" label="Testing system connectivity…" color="#004016" /> : connStatus.message}
                  </p>
                </div>
                <button 
                  className="admin-btn-sm admin-btn-view"
                  onClick={handleTestConnection}
                  disabled={connStatus.testing}
                >
                  {connStatus.testing ? 'Testing…' : 'Test System Status'}
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div className="admin-card">
                  <h3 style={{ color: 'var(--arabella-green)', fontFamily: 'var(--font-display)', marginBottom: '1.25rem' }}>
                    Portfolio Sector Breakdown
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, marginBottom: '0.4rem' }}>
                        <span>Commercial Headquarters</span>
                        <span style={{ color: 'var(--canopy-green)' }}>{commercialCount} Projects ({Math.round((commercialCount / (projects.length || 1)) * 100)}%)</span>
                      </div>
                      <div style={{ height: '10px', background: '#94AD99', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${(commercialCount / (projects.length || 1)) * 100}%`, background: 'var(--canopy-green)' }} />
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, marginBottom: '0.4rem' }}>
                        <span>Public Parks & Civic Realm</span>
                        <span style={{ color: 'var(--arabella-green)' }}>{publicCount} Projects ({Math.round((publicCount / (projects.length || 1)) * 100)}%)</span>
                      </div>
                      <div style={{ height: '10px', background: '#94AD99', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${(publicCount / (projects.length || 1)) * 100}%`, background: 'var(--arabella-green)' }} />
                      </div>
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 700, marginBottom: '0.4rem' }}>
                        <span>Private Estates</span>
                        <span style={{ color: 'var(--canopy-green)' }}>{residentialCount} Projects ({Math.round((residentialCount / (projects.length || 1)) * 100)}%)</span>
                      </div>
                      <div style={{ height: '10px', background: '#94AD99', borderRadius: '5px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${(residentialCount / (projects.length || 1)) * 100}%`, background: 'var(--canopy-green)' }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="admin-card">
                  <h3 style={{ color: 'var(--arabella-green)', fontFamily: 'var(--font-display)', marginBottom: '1.25rem' }}>
                    System Metrics & Storage
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 1rem', background: '#EBE8E0', borderRadius: '10px' }}>
                      <span style={{ fontWeight: 600 }}>Total Registered Projects:</span>
                      <strong style={{ color: 'var(--arabella-green)' }}>{projects.length} Items</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 1rem', background: '#D2DACF', borderRadius: '10px' }}>
                      <span style={{ fontWeight: 600 }}>Active Client Enquiries:</span>
                      <strong style={{ color: 'var(--canopy-green)' }}>{enquiries.length} Messages</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 1rem', background: '#EBE8E0', borderRadius: '10px' }}>
                      <span style={{ fontWeight: 600 }}>Media Asset CDN Storage:</span>
                      <strong style={{ color: 'var(--arabella-green)' }}>1.4 GB / 10 GB</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 1rem', background: '#D2DACF', borderRadius: '10px' }}>
                      <span style={{ fontWeight: 600 }}>API Endpoint Latency:</span>
                      <strong style={{ color: 'var(--canopy-green)' }}>42 ms (Optimal)</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {deleteConfirmSlug && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '420px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--arabella-green)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
              Confirm Deletion
            </h3>
            <p style={{ color: 'var(--ink)', fontSize: '14px', marginBottom: '1.75rem' }}>
              Are you sure you want to delete project <strong>"{deleteConfirmSlug}"</strong>?
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button 
                className="admin-btn-sm admin-btn-view"
                onClick={() => setDeleteConfirmSlug(null)}
                disabled={isDeleting}
                style={{ padding: '0.6rem 1.25rem' }}
              >
                Cancel
              </button>
              <button 
                className="admin-btn-sm admin-btn-danger"
                onClick={() => handleDelete(deleteConfirmSlug)}
                disabled={isDeleting}
                style={{ padding: '0.6rem 1.25rem' }}
              >
                {isDeleting ? <LoadingSpinner size="sm" label="Deleting…" color="#ffffff" /> : 'Yes, Delete Project'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Enquiry Note Modal */}
      {selectedEnquiry && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '520px' }}>
            <div className="admin-modal-title">
              <span>Consultation Enquiry Note</span>
              <button 
                onClick={() => setSelectedEnquiry(null)}
                style={{ background: 'none', border: 'none', color: 'var(--ink)', fontSize: '24px', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>
            <div style={{ padding: '1rem 0' }}>
              <p><strong>From:</strong> {selectedEnquiry.name} ({selectedEnquiry.email})</p>
              <p><strong>Phone:</strong> {selectedEnquiry.phone}</p>
              <p><strong>Service Requested:</strong> {selectedEnquiry.service}</p>
              <p><strong>Submitted Date:</strong> {selectedEnquiry.date}</p>
              <hr style={{ border: 'none', borderTop: '1px solid #94AD99', margin: '1rem 0' }} />
              <p style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--arabella-green)' }}>Client Message:</p>
              <div style={{ background: '#EBE8E0', padding: '1rem', borderRadius: '10px', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--ink)' }}>
                "{selectedEnquiry.message}"
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
              <button 
                className="btn btn-primary"
                onClick={() => setSelectedEnquiry(null)}
                style={{ background: 'var(--arabella-green)', color: 'var(--ivory)', borderRadius: '8px', padding: '0.6rem 1.25rem' }}
              >
                Close Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Team Member Modal */}
      {isTeamModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '500px' }}>
            <div className="admin-modal-title">
              <span>Add Leadership Team Member</span>
              <button onClick={() => setIsTeamModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>
            <form onSubmit={handleAddTeamMember}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div>
                  <label className="admin-label">Full Name *</label>
                  <input type="text" required placeholder="e.g. Dr. Oladipo Johnson" className="admin-input" value={teamForm.name} onChange={e => setTeamForm({ ...teamForm, name: e.target.value })} />
                </div>
                <div>
                  <label className="admin-label">Role / Position *</label>
                  <input type="text" required placeholder="e.g. Senior Urban Planner" className="admin-input" value={teamForm.role} onChange={e => setTeamForm({ ...teamForm, role: e.target.value })} />
                </div>
                <div>
                  <label className="admin-label">Biography Summary</label>
                  <textarea placeholder="Brief professional background…" className="admin-textarea" value={teamForm.bio} onChange={e => setTeamForm({ ...teamForm, bio: e.target.value })} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="admin-btn-sm admin-btn-view" onClick={() => setIsTeamModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ background: 'var(--arabella-green)', color: 'var(--ivory)', borderRadius: '8px' }}>Add Team Member</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add Testimonial Modal */}
      {isTestimonialModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal" style={{ maxWidth: '500px' }}>
            <div className="admin-modal-title">
              <span>Add Client Review</span>
              <button onClick={() => setIsTestimonialModalOpen(false)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>×</button>
            </div>
            <form onSubmit={handleAddTestimonial}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
                <div>
                  <label className="admin-label">Client Name *</label>
                  <input type="text" required placeholder="e.g. Chief Adeleke" className="admin-input" value={testimonialForm.author} onChange={e => setTestimonialForm({ ...testimonialForm, author: e.target.value })} />
                </div>
                <div>
                  <label className="admin-label">Client Role / Title</label>
                  <input type="text" placeholder="e.g. Managing Director" className="admin-input" value={testimonialForm.role} onChange={e => setTestimonialForm({ ...testimonialForm, role: e.target.value })} />
                </div>
                <div>
                  <label className="admin-label">Project Name & Location</label>
                  <input type="text" placeholder="e.g. Eko Atlantic Grounds, Lagos" className="admin-input" value={testimonialForm.project} onChange={e => setTestimonialForm({ ...testimonialForm, project: e.target.value })} />
                </div>
                <div>
                  <label className="admin-label">Review Quote *</label>
                  <textarea required placeholder="Write review content…" className="admin-textarea" value={testimonialForm.quote} onChange={e => setTestimonialForm({ ...testimonialForm, quote: e.target.value })} />
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '1.5rem' }}>
                <button type="button" className="admin-btn-sm admin-btn-view" onClick={() => setIsTestimonialModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary" style={{ background: 'var(--arabella-green)', color: 'var(--ivory)', borderRadius: '8px' }}>Save Review</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Create / Edit Project Modal */}
      {isModalOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal">
            <div className="admin-modal-title">
              <span>{editingProjectSlug ? `Edit Project: ${formData.name}` : 'Upload New Project'}</span>
              <button 
                onClick={() => { setIsModalOpen(false); resetForm(); }}
                disabled={isSubmitting}
                style={{ background: 'none', border: 'none', color: 'var(--ink)', fontSize: '24px', cursor: 'pointer' }}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="admin-form-grid">
                <div className="admin-form-group">
                  <label className="admin-label">Project Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Zenith Bank HQ Grounds"
                    className="admin-input"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Slug ID</label>
                  <input
                    type="text"
                    name="slug"
                    placeholder="e.g. zenith-bank-hq"
                    className="admin-input"
                    value={formData.slug}
                    onChange={handleInputChange}
                    disabled={!!editingProjectSlug}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Category Sector</label>
                  <select
                    name="category"
                    className="admin-select"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="Commercial">Commercial</option>
                    <option value="Public Space">Public Space</option>
                    <option value="Residential">Residential</option>
                  </select>
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g. Victoria Island, Lagos"
                    className="admin-input"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Client Name</label>
                  <input
                    type="text"
                    name="client"
                    placeholder="e.g. Zenith Bank Plc"
                    className="admin-input"
                    value={formData.client}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="admin-form-group">
                  <label className="admin-label">Completion Year</label>
                  <input
                    type="text"
                    name="year"
                    placeholder="2024"
                    className="admin-input"
                    value={formData.year}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="admin-form-group admin-form-group--full">
                  <label className="admin-label">Services Provided (comma separated)</label>
                  <input
                    type="text"
                    name="services"
                    placeholder="Landscape Architecture, Hardscaping, Automated Irrigation"
                    className="admin-input"
                    value={formData.services}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="admin-form-group admin-form-group--full">
                  <label className="admin-label">Project Highlights (comma separated)</label>
                  <input
                    type="text"
                    name="highlights"
                    placeholder="Palm tree avenue, Custom stone walling, Automated irrigation"
                    className="admin-input"
                    value={formData.highlights}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="admin-form-group admin-form-group--full">
                  <label className="admin-label">Short Description</label>
                  <textarea
                    name="description"
                    placeholder="Brief summary of the project scope…"
                    className="admin-textarea"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="admin-form-group admin-form-group--full">
                  <label className="admin-label">Project Main Cover Photo</label>
                  <div className="admin-dropzone">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      id="cover-file-input"
                      disabled={uploading}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="cover-file-input" style={{ cursor: 'pointer', display: 'block' }}>
                      {uploading ? (
                        <div style={{ padding: '1rem 0' }}>
                          <LoadingSpinner size="md" label="Uploading Cover Photo…" />
                        </div>
                      ) : imagePreview ? (
                        <div>
                          <img 
                            src={imagePreview} 
                            alt="Cover Preview" 
                            style={{ maxHeight: '140px', borderRadius: '8px', marginBottom: '0.5rem' }} 
                          />
                          <p style={{ color: 'var(--canopy-green)', fontSize: '13px', margin: 0, fontWeight: 700 }}>Click to replace cover photo</p>
                        </div>
                      ) : (
                        <div>
                          <p style={{ color: 'var(--arabella-green)', fontWeight: 600, margin: '0 0 0.25rem 0' }}>
                            Click or Drag main cover photo here
                          </p>
                          <p style={{ color: 'var(--ink)', fontSize: '12px', margin: 0, opacity: 0.8 }}>
                            Main featured image for project cards & catalog
                          </p>
                        </div>
                      )}
                    </label>
                  </div>
                </div>

                <div className="admin-form-group admin-form-group--full">
                  <label className="admin-label">Additional Project Gallery Photos</label>
                  <div className="admin-dropzone">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleGalleryFilesChange}
                      id="gallery-file-input"
                      disabled={uploadingGallery}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="gallery-file-input" style={{ cursor: 'pointer', display: 'block' }}>
                      {uploadingGallery ? (
                        <div style={{ padding: '1rem 0' }}>
                          <LoadingSpinner size="md" label="Uploading Gallery Photos…" />
                        </div>
                      ) : (
                        <div>
                          <p style={{ color: 'var(--arabella-green)', fontWeight: 600, margin: '0 0 0.25rem 0' }}>
                            Click or Select multiple gallery photos
                          </p>
                          <p style={{ color: 'var(--ink)', fontSize: '12px', margin: 0, opacity: 0.8 }}>
                            Upload 2 to 10 photos for the project lightbox slider
                          </p>
                        </div>
                      )}
                    </label>
                  </div>

                  {galleryPreviews.length > 0 && (
                    <div className="admin-gallery-grid">
                      {galleryPreviews.map((imgUrl, idx) => (
                        <div key={idx} className="admin-gallery-thumb-wrap">
                          <img src={imgUrl} alt={`Gallery ${idx + 1}`} className="admin-gallery-thumb" />
                          <button
                            type="button"
                            className="admin-gallery-remove"
                            onClick={() => removeGalleryImage(idx)}
                            title="Remove photo"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  className="admin-btn-sm admin-btn-view"
                  onClick={() => { setIsModalOpen(false); resetForm(); }}
                  disabled={isSubmitting}
                  style={{ padding: '0.75rem 1.5rem', fontSize: '14px' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting || uploading || uploadingGallery}
                  style={{ background: 'var(--arabella-green)', color: 'var(--ivory)', fontWeight: 700, borderRadius: '8px', minWidth: '160px' }}
                >
                  {isSubmitting ? (
                    <LoadingSpinner size="sm" label="Saving…" color="var(--ivory)" />
                  ) : editingProjectSlug ? (
                    'Save Changes'
                  ) : (
                    'Publish Project'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  )
}
