import React from "react"

const SectionHeading = ({ children, subtitle, className = "" }) => {
  return (
    <div className={`section-heading ${className}`} style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
      {subtitle && <span style={{
        display: 'block',
        color: 'var(--color-primary)',
        fontSize: '0.8rem',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginBottom: 'var(--space-xs'
      }}>{subtitle}</span>}
      <h2 style={{
        fontSize: '2rem',
        color: 'var(--color-text)',
        fontWeight: '700',
        lineHeight: '1.2'
      }}>{children}</h2>
    </div>
  )
}

export default SectionHeading
