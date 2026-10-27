import React from "react"
import Button from "../components/Button"

const Hero = () => {
  // Reusable inline SVG for Baybayin "AB" (ᜀᜊ)
const BaybayinAB = ({ size = "1rem", color = "currentColor" }) => (
  <span
    style={{
      fontFamily: "'Noto Sans Tagalog', sans-serif",
      fontSize: size,
      color: color,
      lineHeight: 1,
      userSelect: 'none',
    }}
  >
    ᜀᜊ᜔
  </span>
)

  return (
    <section id="home" className="container section-padding" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '75vh'
    }}>
      {/* Technical Pill Badge */}
      <div
        className="mono"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          padding: '6px 14px',
          backgroundColor: 'var(--color-soft-green)',
          color: 'var(--color-primary)',
          borderRadius: '999px',
          fontSize: '0.75rem',
          fontWeight: '700',
          marginBottom: 'var(--space-md)',
        }}
      >
        <span
          style={{
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            animation: 'statusPulse 2.5s infinite ease-in-out',
          }}
        />
        <span>01 // FULL-STACK DEVELOPER</span>
        <span style={{ opacity: 0.35 }}>|</span>
        <span
          title="Baybayin: AB (Aderik Bermas)"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: 'var(--color-focus)',
          }}
        >
          <BaybayinAB size={18} color="var(--color-focus)" />
        </span>
      </div>

      <h1
        style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          lineHeight: '1',
          color: 'var(--color-text)',
          marginBottom: 'var(--space-sm)',
          fontWeight: '800',
          letterSpacing: '-0.05em',
          marginTop: 'var(--space-xs)',
        }}
      >
        Aderik <span style={{ color: 'var(--color-primary)' }}>"Adi"</span> Bermas
      </h1>

      <h2
        style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          fontWeight: '500',
          color: 'var(--color-muted)',
          marginBottom: 'var(--space-lg)',
          lineHeight: '1.4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          flexWrap: 'wrap',
        }}
      >
        <span>Software Developer</span>
        <span style={{ color: 'var(--color-focus)', fontSize: '0.9rem' }}>✦</span>
        <span>BSIT Student</span>
      </h2>

      <p
        style={{
          fontSize: '1.25rem',
          marginBottom: 'var(--space-xl)',
          maxWidth: '700px',
          color: 'var(--color-muted)',
          lineHeight: '1.7',
          marginInline: 'auto'
        }}
      >
        Specializing in <strong style={{ color: 'var(--color-primary)', fontWeight: '600' }}>full-stack architecture</strong>.
        I build reliable, database-driven systems and automated workflows that
        bridge the gap between complex logic and intuitive user experiences.
      </p>

      <div
        style={{
          display: 'flex',
          gap: 'var(--space-md)',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button
          variant="primary"
          onClick={() =>
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          View Projects
        </Button>
        <Button
          variant="secondary"
          onClick={() =>
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }
          style={{
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            borderRadius: 'var(--radius-md)',
          }}
        >
          Get in Touch
        </Button>
      </div>
    </section>
  )
}

export default Hero
