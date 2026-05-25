import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const CATEGORY_COLORS = {
  'Residential':  '#4caf7d',
  'Commercial':   '#2196f3',
  'Recreational': '#ff9800',
  'Public Space': '#9c27b0',
}

function makeIcon(color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 40" width="32" height="40">
    <path d="M16 0C9.373 0 4 5.373 4 12c0 9 12 28 12 28S28 21 28 12C28 5.373 22.627 0 16 0z"
      fill="${color}" stroke="white" stroke-width="2"/>
    <circle cx="16" cy="12" r="5" fill="white" opacity="0.9"/>
  </svg>`
  return L.divIcon({
    html: svg,
    className: '',
    iconSize:   [32, 40],
    iconAnchor: [16, 40],
    popupAnchor:[0, -42],
  })
}

export default function ProjectsMap({ projects }) {
  const containerRef = useRef(null)
  const mapRef       = useRef(null)
  const navigate     = useNavigate()

  useEffect(() => {
    if (!containerRef.current) return

    const map = L.map(containerRef.current, {
      center: [7.5, 4.8],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: false,
    })
    mapRef.current = map

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map)

    projects.forEach(project => {
      if (!project.coords) return
      const color = CATEGORY_COLORS[project.category] || '#2d6a4f'
      const marker = L.marker(project.coords, { icon: makeIcon(color) }).addTo(map)

      const popup = L.popup({ maxWidth: 220, className: 'projects-map-popup' }).setContent(`
        <div class="pmap-popup">
          <img src="${project.image}" alt="${project.name}" class="pmap-popup__img" />
          <div class="pmap-popup__body">
            <span class="pmap-popup__tag" style="background:${color}">${project.category}</span>
            <p class="pmap-popup__name">${project.name}</p>
            <p class="pmap-popup__loc">${project.location} · ${project.year}</p>
            <a class="pmap-popup__link" href="/projects/${project.slug}">View project →</a>
          </div>
        </div>
      `)
      marker.bindPopup(popup)

      // Navigate on link click via event delegation on the popup
      marker.on('popupopen', () => {
        const el = document.querySelector(`.pmap-popup__link[href="/projects/${project.slug}"]`)
        if (el) {
          el.addEventListener('click', (e) => {
            e.preventDefault()
            navigate(`/projects/${project.slug}`)
          })
        }
      })
    })

    // Fit to project bounds if any
    const valid = projects.filter(p => p.coords)
    if (valid.length > 0) {
      const bounds = L.latLngBounds(valid.map(p => p.coords))
      map.fitBounds(bounds, { padding: [48, 48] })
    }

    return () => {
      map.remove()
      mapRef.current = null
    }
  }, [projects, navigate])

  // Invalidate size when container becomes visible
  useEffect(() => {
    const timer = setTimeout(() => {
      mapRef.current?.invalidateSize()
    }, 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="projects-map-wrap">
      <div ref={containerRef} className="projects-map" />
      <div className="projects-map-legend">
        {Object.entries(CATEGORY_COLORS).map(([cat, color]) => (
          <span key={cat} className="projects-map-legend__item">
            <span className="projects-map-legend__dot" style={{ background: color }} />
            {cat}
          </span>
        ))}
      </div>
    </div>
  )
}
