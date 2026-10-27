import React from "react"

// TODO: This section is currently focused on Academic Projects.
// It will be updated with professional work experience and industry certifications in the future.
// Keeping this component for architectural continuity.

const Experience = () => {
  const academicExperience = [
    {
      role: "Programmer (Frontend & Backend)",
      project: "MediTrack Health Record Management System",
      period: "April 2026 — Present",
      description: "Developed a secure health record management system for clinic operations, implementing role-based access control and automated OCR verification."
    },
    {
      role: "Lead Developer (Full-Stack)",
      project: "Artisans Learning Management System (LMS)",
      period: "April 2026 — June 2026",
      description: "Architected a hybrid full-stack LMS integrating Next.js with a custom PHP API, focusing on system interoperability and cross-organizational integration."
    },
    {
      role: "Programmer (Team Member)",
      project: "Customer Relationship Management System (CRM)",
      period: "Nov 2025 — Dec 2025",
      description: "Collaborated on a CRM web application featuring real-time database updates and data visualization for customer trends."
    }
  ];

  return (
    <section id="experience" className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
        <span style={{
          display: 'block',
          color: 'var(--color-primary)',
          fontSize: '0.8rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: 'var(--space-xs'
        }}>Experience</span>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)', fontWeight: '800' }}>Academic Projects</h2>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-lg)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {academicExperience.map((exp, index) => (
          <div key={index} style={{
            padding: 'var(--space-md)',
            borderLeft: '4px solid var(--color-primary)',
            backgroundColor: 'var(--color-surface)',
            borderTop: 'var(--border-thin)',
            borderRight: 'var(--border-thin)',
            borderBottom: 'var(--border-thin)',
            borderRadius: '0 var(--radius-md) var(--radius-md) 0'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-xs'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)', fontWeight: '700' }}>{exp.project}</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontWeight: '500' }}>{exp.period}</span>
            </div>

            <p style={{
              fontSize: '0.9rem',
              fontWeight: '600',
              color: 'var(--color-primary)',
              marginBottom: 'var(--space-sm)'
            }}>
              {exp.role}
            </p>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: '1.5' }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
