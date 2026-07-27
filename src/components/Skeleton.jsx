import { useState } from 'react'

/**
 * Base shimmer element for custom skeleton shapes.
 */
export function SkeletonBase({ className = '', style = {}, dark = false }) {
  return (
    <div
      className={`${dark ? 'skeleton-shimmer--dark' : 'skeleton-shimmer'} ${className}`}
      style={{
        borderRadius: '6px',
        ...style,
      }}
      aria-hidden="true"
    />
  )
}

/**
 * Skeleton placeholder for a single Project Card (matching Projects.jsx grid).
 */
export function ProjectCardSkeleton({ dark = false }) {
  return (
    <div
      style={{
        borderRadius: 'var(--rounded-lg, 12px)',
        overflow: 'hidden',
        background: dark ? '#003312' : '#E8E4D8',
        border: '1px solid var(--outline-variant, #94AD99)',
        display: 'flex',
        flexDirection: 'column',
        height: '340px',
        position: 'relative',
      }}
      aria-busy="true"
      aria-label="Loading project..."
    >
      {/* Thumbnail bone */}
      <div style={{ position: 'relative', width: '100%', height: '220px' }}>
        <SkeletonBase dark={dark} style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        {/* Year tag skeleton */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 2 }}>
          <SkeletonBase dark={dark} style={{ width: '48px', height: '22px', borderRadius: '12px' }} />
        </div>
        {/* Category tag skeleton */}
        <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }}>
          <SkeletonBase dark={dark} style={{ width: '70px', height: '22px', borderRadius: '12px' }} />
        </div>
      </div>

      {/* Card body bones */}
      <div style={{ padding: '1.25rem 1.35rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1, justifyContent: 'center' }}>
        <SkeletonBase dark={dark} style={{ width: '75%', height: '20px', borderRadius: '4px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <SkeletonBase dark={dark} style={{ width: '14px', height: '14px', borderRadius: '50%' }} />
          <SkeletonBase dark={dark} style={{ width: '50%', height: '14px', borderRadius: '4px' }} />
        </div>
      </div>
    </div>
  )
}

/**
 * Grid of 6 Project Card Skeletons (used during initial mount or filter transitions).
 */
export function ProjectsGridSkeleton({ count = 6, dark = false }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
        gap: '1.5rem',
        width: '100%',
      }}
      aria-busy="true"
      aria-label="Loading projects..."
    >
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} dark={dark} />
      ))}
    </div>
  )
}

/**
 * Skeleton placeholder for Blog / Insights Article Cards.
 */
export function ArticleCardSkeleton() {
  return (
    <div
      style={{
        borderRadius: 'var(--rounded-lg, 12px)',
        overflow: 'hidden',
        background: '#E8E4D8',
        border: '1px solid var(--outline-variant, #94AD99)',
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
      }}
      aria-busy="true"
      aria-label="Loading article..."
    >
      {/* Image header */}
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <SkeletonBase style={{ width: '100%', height: '100%', borderRadius: 0 }} />
        <div style={{ position: 'absolute', bottom: '12px', left: '16px', zIndex: 2 }}>
          <SkeletonBase style={{ width: '80px', height: '20px', borderRadius: '10px' }} />
        </div>
      </div>

      {/* Body content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
        <SkeletonBase style={{ width: '90%', height: '24px', borderRadius: '4px' }} />
        <SkeletonBase style={{ width: '100%', height: '14px', borderRadius: '4px' }} />
        <SkeletonBase style={{ width: '65%', height: '14px', borderRadius: '4px' }} />
        <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
          <SkeletonBase style={{ width: '80px', height: '12px', borderRadius: '4px' }} />
          <SkeletonBase style={{ width: '60px', height: '12px', borderRadius: '4px' }} />
        </div>
      </div>
    </div>
  )
}

/**
 * Grid of 6 Article Card Skeletons.
 */
export function BlogGridSkeleton({ count = 6 }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(320px, 100%), 1fr))',
        gap: '1.75rem',
        width: '100%',
      }}
      aria-busy="true"
      aria-label="Loading insights..."
    >
      {Array.from({ length: count }).map((_, i) => (
        <ArticleCardSkeleton key={i} />
      ))}
    </div>
  )
}

/**
 * Skeleton placeholder for Service Cards.
 */
export function ServiceCardSkeleton() {
  return (
    <div
      style={{
        borderRadius: 'var(--rounded-lg, 12px)',
        overflow: 'hidden',
        background: '#E8E4D8',
        border: '1px solid var(--outline-variant, #94AD99)',
        padding: '2.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        minHeight: '280px',
      }}
      aria-busy="true"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <SkeletonBase style={{ width: '44px', height: '44px', borderRadius: '10px' }} />
        <SkeletonBase style={{ width: '60px', height: '40px', borderRadius: '6px' }} />
      </div>
      <SkeletonBase style={{ width: '50%', height: '26px', borderRadius: '4px' }} />
      <SkeletonBase style={{ width: '100%', height: '16px', borderRadius: '4px' }} />
      <SkeletonBase style={{ width: '85%', height: '16px', borderRadius: '4px' }} />
    </div>
  )
}

/**
 * Skeleton placeholder for the Interactive Map fallback in Projects.jsx.
 */
export function ProjectsMapSkeleton() {
  return (
    <div
      style={{
        width: '100%',
        height: '520px',
        borderRadius: 'var(--rounded-xl, 16px)',
        overflow: 'hidden',
        border: '1px solid var(--outline-variant, #94AD99)',
        background: '#004016',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-busy="true"
      aria-label="Loading interactive map engine..."
    >
      <SkeletonBase dark style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 0 }} />
      <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 3 }}>
        <SkeletonBase dark style={{ width: '36px', height: '36px', borderRadius: '6px' }} />
        <SkeletonBase dark style={{ width: '36px', height: '36px', borderRadius: '6px' }} />
      </div>
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <SkeletonBase dark style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
        <SkeletonBase dark style={{ width: '220px', height: '18px', borderRadius: '4px' }} />
      </div>
    </div>
  )
}

/**
 * Smart image wrapper that displays a shimmer skeleton placeholder until the image finishes downloading over the network.
 */
export function ImageWithSkeleton({
  src,
  alt,
  style = {},
  className = '',
  aspectRatio,
  dark = false,
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div
      className={`skeleton-img-wrap ${className}`}
      style={{
        width: '100%',
        height: '100%',
        aspectRatio,
        background: dark ? '#003312' : '#E8E4D8',
        borderRadius: style.borderRadius || 'inherit',
        ...style,
      }}
    >
      {!loaded && !error && (
        <div className="skeleton-img-placeholder">
          <SkeletonBase
            dark={dark}
            style={{ width: '100%', height: '100%', borderRadius: 'inherit' }}
          />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={loaded ? 'is-loaded' : 'is-loading'}
        style={{
          width: '100%',
          height: '100%',
          objectFit: style.objectFit || 'cover',
          display: 'block',
          ...style,
        }}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        {...props}
      />
    </div>
  )
}
