import { Link } from 'react-router-dom'

/* ── Bespoke Architectural SVG Icons (Zero Emojis) ── */
function CompassIcon({ size = 18, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function QuoteGlyph({ size = 38, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

function RulerIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21.3 15.3l-6.6 6.6c-.4.4-1 .4-1.4 0l-11-11c-.4-.4-.4-1 0-1.4l6.6-6.6c.4-.4 1-.4 1.4 0l11 11c.4.4.4 1 0 1.4z" />
      <path d="M14.5 4.5l2 2" />
      <path d="M11.5 7.5l3 3" />
      <path d="M8.5 10.5l2 2" />
      <path d="M5.5 13.5l3 3" />
    </svg>
  )
}

function ClimateIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </svg>
  )
}

function SunPathIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
    </svg>
  )
}

function NotebookIcon({ size = 16, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  )
}

function ArrowUpRightIcon({ size = 14, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}

/* ── Stylized Architect Signature Vector ── */
function ArchitectSignature({ className = '' }) {
  return (
    <svg viewBox="0 0 180 50" width="160" height="42" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M 12 36 C 24 14, 30 6, 36 28 C 40 40, 48 38, 54 22 C 60 8, 64 26, 72 32 C 80 38, 88 18, 98 24 C 104 28, 108 36, 118 20 C 124 10, 130 14, 136 30 C 142 42, 154 36, 168 18" opacity="0.85" />
      <path d="M 8 40 C 45 42, 110 38, 172 34" strokeWidth="1.2" opacity="0.4" />
    </svg>
  )
}

export default function ArchitectFieldNote({ project }) {
  // Default fallback if a dynamic Insforge project does not provide custom fieldNote
  const defaultNote = {
    architect: 'Tunde Arabella',
    title: 'Principal Landscape Architect',
    date: `Field Note • ${project.year} Design Narrative`,
    quote: project.detail || `Every landscape is an ongoing dialogue between architectural structure and living nature. For ${project.name}, our objective was to synthesize local topography, climate, and botanical geometry into an enduring spatial sanctuary.`,
    climate: 'Tropical West African Climate • Indigenous Vegetation Zone',
    orientation: 'Custom Microclimate & Sun Exposure Alignment',
    principle: 'Seamless integration of architectural scale and organic ecology',
    observation: 'Engineered drainage and site grading ensure longevity across all seasonal weather patterns.'
  }

  const note = project.fieldNote || defaultNote

  return (
    <section className="section pd-field-note" id="architect-narrative">
      <div className="container">
        <div className="pd-field-note__card animate-on-scroll">
          {/* Top Architectural Dossier Tag */}
          <div className="pd-field-note__top-bar">
            <div className="pd-field-note__badge">
              <CompassIcon size={14} />
              <span>Atelier Field Monograph • Ref. {project.slug.toUpperCase()}</span>
            </div>
            <span className="pd-field-note__meta-date">{note.date}</span>
          </div>

          <div className="pd-field-note__grid">
            {/* Left Column: Editorial Quote & Philosophy */}
            <div className="pd-field-note__narrative">
              <div className="pd-field-note__quote-icon-wrap" aria-hidden="true">
                <QuoteGlyph size={36} />
              </div>

              <p className="pd-field-note__subhead">Design Intent &amp; Spatial Philosophy</p>
              
              <blockquote className="pd-field-note__quote">
                &ldquo;{note.quote}&rdquo;
              </blockquote>

              {/* Architect Credentials & Signature */}
              <div className="pd-field-note__signature-block">
                <div className="pd-field-note__signature-art">
                  <ArchitectSignature className="pd-field-note__sig-svg" />
                </div>
                <div className="pd-field-note__author">
                  <strong className="pd-field-note__author-name">{note.architect}</strong>
                  <span className="pd-field-note__author-title">{note.title}</span>
                  <span className="pd-field-note__author-atelier">Arabella Landscape Atelier &bull; Lagos &amp; Abuja</span>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Field Dossier */}
            <div className="pd-field-note__sidebar">
              <div className="pd-field-note__dossier-box">
                <div className="pd-field-note__dossier-header">
                  <NotebookIcon size={16} />
                  <h4>Site Intelligence &amp; Field Audit</h4>
                </div>

                <ul className="pd-field-note__facts-list">
                  <li className="pd-field-note__fact-item">
                    <div className="pd-field-note__fact-icon" aria-hidden="true">
                      <ClimateIcon size={15} />
                    </div>
                    <div className="pd-field-note__fact-content">
                      <span className="pd-field-note__fact-label">Microclimate &amp; Geology</span>
                      <strong className="pd-field-note__fact-value">{note.climate}</strong>
                    </div>
                  </li>

                  <li className="pd-field-note__fact-item">
                    <div className="pd-field-note__fact-icon" aria-hidden="true">
                      <SunPathIcon size={15} />
                    </div>
                    <div className="pd-field-note__fact-content">
                      <span className="pd-field-note__fact-label">Orientation &amp; Sunlight</span>
                      <strong className="pd-field-note__fact-value">{note.orientation}</strong>
                    </div>
                  </li>

                  <li className="pd-field-note__fact-item">
                    <div className="pd-field-note__fact-icon" aria-hidden="true">
                      <RulerIcon size={15} />
                    </div>
                    <div className="pd-field-note__fact-content">
                      <span className="pd-field-note__fact-label">Governing Principle</span>
                      <strong className="pd-field-note__fact-value">{note.principle}</strong>
                    </div>
                  </li>
                </ul>

                {/* Construction Field Log Observation */}
                {note.observation && (
                  <div className="pd-field-note__observation">
                    <span className="pd-field-note__observation-tag">Field Log Notation</span>
                    <p className="pd-field-note__observation-text">{note.observation}</p>
                  </div>
                )}

                {/* Inquiry Link */}
                <div className="pd-field-note__action">
                  <Link to="/contact" className="pd-field-note__link">
                    <span>Inquire About Similar Commission</span>
                    <ArrowUpRightIcon size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
