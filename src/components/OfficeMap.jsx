import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// 55 Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos
const OFFICE_COORDS = [6.5052, 3.3765]

function makeOfficeIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 48" width="38" height="48">
    <defs>
      <filter id="pin-shadow" x="-20%" y="-10%" width="140%" height="130%">
        <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#002E11" flood-opacity="0.35"/>
      </filter>
      <linearGradient id="pin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#005A20" />
        <stop offset="100%" stop-color="#002E11" />
      </linearGradient>
    </defs>
    <path d="M19 0C8.507 0 0 8.507 0 19c0 13.25 19 29 19 29s19-15.75 19-29C38 8.507 29.493 0 19 0z"
      fill="url(#pin-grad)" stroke="#DFDB00" stroke-width="2" filter="url(#pin-shadow)" />
    <circle cx="19" cy="18" r="10" fill="#FFFFFF" />
    <path d="M19 11c-3.86 0-7 3.14-7 7 0 2.5 1.31 4.69 3.28 5.88L19 25l3.72-1.12C24.69 22.69 26 20.5 26 18c0-3.86-3.14-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
      fill="#00722C" />
  </svg>`

  return L.divIcon({
    html: svg,
    className: 'office-map-pin',
    iconSize: [38, 48],
    iconAnchor: [19, 48],
    popupAnchor: [0, -50],
  })
}

export default function OfficeMap() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    try {
      const map = L.map(containerRef.current, {
        center: OFFICE_COORDS,
        zoom: 15,
        zoomControl: true,
        scrollWheelZoom: false,
      })
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map)

      const marker = L.marker(OFFICE_COORDS, { icon: makeOfficeIcon() }).addTo(map)

      const popupContent = `
        <div class="office-popup">
          <div class="office-popup__badge">Studio Headquarters</div>
          <h4 class="office-popup__title">Arabella Landscape Limited</h4>
          <p class="office-popup__addr">55, Moleye Street, Off Herbert Macaulay Way, Yaba, Lagos, Nigeria</p>
          <a class="office-popup__btn" href="https://www.google.com/maps/dir/?api=1&destination=55+Moleye+Street,+Off+Herbert+Macaulay+Way,+Yaba,+Lagos" target="_blank" rel="noopener noreferrer">
            Get Directions ↗
          </a>
        </div>
      `
      marker.bindPopup(popupContent, { maxWidth: 280, className: 'office-map-popup' }).openPopup()

      // Handle resize invalidation
      const timer = setTimeout(() => {
        map.invalidateSize()
      }, 100)

      return () => {
        clearTimeout(timer)
        map.remove()
        mapRef.current = null
      }
    } catch (err) {
      console.error('Failed to initialize Leaflet map:', err)
      setMapError(true)
    }
  }, [])

  return (
    <div className="office-map-container">
      {!mapError ? (
        <div ref={containerRef} className="office-map-canvas" />
      ) : (
        <iframe
          title="Arabella Landscape — Yaba, Lagos Office"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.3662%2C6.4980%2C3.3862%2C6.5120&layer=mapnik&marker=6.5052%2C3.3765"
          className="office-map-canvas"
          allowFullScreen
          loading="lazy"
        />
      )}

      {/* Floating Info Overlay Card */}
      <div className="office-map-card">
        <div className="office-map-card__header">
          <span className="office-map-card__badge">📍 Studio &amp; Head Office</span>
          <h3 className="office-map-card__title">Arabella Landscape</h3>
        </div>
        <p className="office-map-card__address">
          55, Moleye Street, Off Herbert Macaulay Way,<br />
          Yaba, Lagos State, Nigeria
        </p>
        <div className="office-map-card__hours">
          <span>🕒 Mon – Fri: 8:00 AM – 6:00 PM</span>
        </div>
        <div className="office-map-card__actions">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=55+Moleye+Street,+Off+Herbert+Macaulay+Way,+Yaba,+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Get Directions ↗
          </a>
          <a
            href="tel:+2348001234567"
            className="btn btn-secondary btn-sm"
          >
            Call Studio
          </a>
        </div>
      </div>
    </div>
  )
}
