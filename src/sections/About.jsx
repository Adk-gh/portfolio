import React from "react"

const About = () => {
  return (
    <section id="about" className="container section-padding" style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-xl)',
      flexWrap: 'wrap'
    }}>
      <div style={{
        flex: '1',
        minWidth: '300px',
        padding: 'var(--space-md)',
        backgroundColor: 'var(--color-surface)',
        border: 'var(--border-thin)',
        borderRadius: 'var(--radius-md)'
      }}>
        <h3 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-primary)' }}>My Approach</h3>
        <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>
          I believe in building software that is reliable, accessible, and serves a clear purpose.
          As a BSIT student, I focus on bridging the gap between complex backend logic and
          intuitive user interfaces.
        </p>
      </div>

      <div style={{
        flex: '2',
        minWidth: '300px'
      }}>
        <span style={{
          display: 'block',
          color: 'var(--color-primary)',
          fontSize: '0.8rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: 'var(--space-xs)'
        }}>About Me</span>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)', fontWeight: '800', marginBottom: 'var(--space-md)' }}>
          Developing a technical foundation
        </h2>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', opacity: 0.9, marginBottom: 'var(--space-md)' }}>
          I am currently pursuing a Bachelor of Science in Information Technology at Dalubhasaan ng Lunsod ng San Pablo.
          My journey in software development is driven by a curiosity for how complex systems work and a passion
          for solving real-world problems through code.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', opacity: 0.9 }}>
          From automating student ID verification with AI and architecting hybrid LMS integration systems,
          to building real-time CRM dashboards, I enjoy the challenge of full-stack development—balancing the structure of
          relational databases with the fluidity of modern frontend frameworks.
        </p>
      </div>
    </section>
  )
}

export default About
