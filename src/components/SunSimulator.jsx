import { useState, useEffect } from 'react'

const TIME_PRESETS = [
  { label: 'Morning Sun', time: 9, mode: 'Part Sun', icon: '🌅', desc: 'Gentle early light (3-5 hrs)' },
  { label: 'Midday Peak Sun', time: 12, mode: 'Full Sun', icon: '☀️', desc: 'Direct intense solar exposure (6+ hrs)' },
  { label: 'Filtered Afternoon', time: 15, mode: 'Part Shade', icon: '⛅', desc: 'Partial shade & dappled light' },
  { label: 'Deep Canopy / Indoor', time: 18, mode: 'Shade', icon: '🌿', desc: 'Low indirect ambient light' },
]

export default function SunSimulator({ onSunModeChange, activeSunMode }) {
  const [time, setTime] = useState(12) // 6 to 18 (hours)

  // Map hour to sun exposure category
  const getExposureMode = (hour) => {
    if (hour >= 11 && hour <= 13) return 'Full Sun'
    if (hour >= 8 && hour < 11) return 'Part Sun'
    if (hour > 13 && hour <= 16) return 'Part Shade'
    return 'Shade'
  }

  const currentMode = getExposureMode(time)

  useEffect(() => {
    if (onSunModeChange) {
      onSunModeChange(currentMode)
    }
  }, [time, currentMode])

  // Sun position calculation on arc (6am = 0%, 12pm = 50%, 6pm = 100%)
  const progress = ((time - 6) / 12) * 100
  const sunX = Math.max(5, Math.min(95, progress))
  // Sine curve for sun altitude height
  const sunY = 90 - Math.sin((progress / 100) * Math.PI) * 70

  // Shadow length calculation (longest at 6am/6pm, 0 at 12pm)
  const shadowX = (12 - time) * 7 // positive = right, negative = left
  const shadowOpacity = Math.max(0.15, Math.sin((progress / 100) * Math.PI) * 0.5)

  // Dynamic sky background gradient based on time
  const getSkyStyle = () => {
    if (time >= 6 && time < 9) {
      return 'linear-gradient(135deg, #FF9E80 0%, #FF6D00 40%, #004016 100%)'
    } else if (time >= 9 && time <= 15) {
      return 'linear-gradient(135deg, #004016 0%, #006E2A 50%, #1B5E20 100%)'
    } else if (time > 15 && time <= 17) {
      return 'linear-gradient(135deg, #F57C00 0%, #BF360C 60%, #002E11 100%)'
    } else {
      return 'linear-gradient(135deg, #1A237E 0%, #002E11 100%)'
    }
  }

  const formatHour = (h) => {
    const period = h >= 12 ? 'PM' : 'AM'
    const displayHour = h > 12 ? h - 12 : h === 0 ? 12 : h
    return `${displayHour.toString().padStart(2, '0')}:00 ${period}`
  }

  return (
    <div className="sun-simulator">
      {/* Simulator Header */}
      <div className="sun-simulator__header">
        <div>
          <div className="sun-simulator__badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
            </svg>
            INTERACTIVE SOLAR SIMULATOR
          </div>
          <h3 className="sun-simulator__title">Sun &amp; Shade Exposure Simulator</h3>
          <p className="sun-simulator__subtitle">
            Simulate Nigeria's solar trajectory across your landscape to find plants optimized for your garden's sunlight exposure.
          </p>
        </div>

        {activeSunMode && (
          <button
            className="sun-simulator__reset-btn"
            onClick={() => {
              setTime(12)
              if (onSunModeChange) onSunModeChange(null)
            }}
          >
            Reset Simulator
          </button>
        )}
      </div>

      {/* Solar Arc & Landscape Visualizer Canvas */}
      <div className="sun-simulator__canvas" style={{ background: getSkyStyle() }}>
        {/* Sun Element */}
        <div
          className="sun-simulator__sun"
          style={{
            left: `${sunX}%`,
            top: `${sunY}%`,
            boxShadow: time >= 11 && time <= 13 ? '0 0 35px #FFD700, 0 0 70px #FF9000' : '0 0 20px #FFA726',
          }}
        />

        {/* Solar Path Arc Line */}
        <svg className="sun-simulator__arc" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 5,90 Q 50,15 95,90"
            fill="none"
            stroke="rgba(255, 255, 255, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Architectural Tree & Dynamic Shadow */}
        <div className="sun-simulator__landscape">
          {/* Shadow */}
          <div
            className="sun-simulator__shadow"
            style={{
              transform: `scaleX(${1 + Math.abs(shadowX) / 25}) skewX(${shadowX}deg)`,
              opacity: shadowOpacity,
            }}
          />
          {/* Tree Silhouette */}
          <svg width="60" height="75" viewBox="0 0 60 75" className="sun-simulator__tree">
            {/* Trunk */}
            <path d="M 28,75 L 32,75 L 31,45 L 29,45 Z" fill="#2E1C0C" />
            {/* Canopy */}
            <circle cx="30" cy="30" r="24" fill="#0A3A16" />
            <circle cx="20" cy="25" r="16" fill="#145222" />
            <circle cx="40" cy="25" r="16" fill="#1B662D" />
          </svg>
        </div>

        {/* Time Badge Overlay */}
        <div className="sun-simulator__time-display">
          <span className="sun-simulator__time-clock">{formatHour(time)}</span>
          <span className="sun-simulator__mode-tag">{currentMode} Mode</span>
        </div>
      </div>

      {/* Time Range Slider */}
      <div className="sun-simulator__controls">
        <div className="sun-simulator__slider-header">
          <span>06:00 AM (Dawn)</span>
          <span className="sun-simulator__slider-current">{formatHour(time)}</span>
          <span>06:00 PM (Dusk)</span>
        </div>
        <input
          type="range"
          min="6"
          max="18"
          step="1"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="sun-simulator__slider"
          aria-label="Solar time simulator"
        />

        {/* Presets Grid */}
        <div className="sun-simulator__presets">
          {TIME_PRESETS.map((p) => (
            <button
              key={p.label}
              className={`sun-simulator__preset-btn${time === p.time ? ' active' : ''}`}
              onClick={() => setTime(p.time)}
            >
              <span className="sun-simulator__preset-icon">{p.icon}</span>
              <div>
                <strong>{p.label}</strong>
                <p>{p.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
