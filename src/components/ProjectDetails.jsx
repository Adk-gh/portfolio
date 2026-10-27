import React from "react"
import { projects } from "../data/projects"
import Button from "../components/Button"
import meditrackImage from '../assets/projects/Meditrack.png';
import crmImage from '../assets/projects/crm.png';
import lmsImage from '../assets/projects/lms.png';

const projectImages = {
  meditrack: meditrackImage,
  crm: crmImage,
  'artisans-lms': lmsImage,
};

const ProjectDetails = ({ projectSlug, onBack }) => {
  const project = projects.find(p => p.slug === projectSlug)
  const image = projectImages[project?.slug];

  if (!project) {
    return (
      <div className="container section-padding" style={{ textAlign: 'center' }}>
        <h2>Project not found</h2>
        <Button onClick={onBack}>Back to Projects</Button>
      </div>
    )
  }

  const { caseStudy } = project

  return (
    <div className="container section-padding" style={{ maxWidth: '800px', marginInline: 'auto' }}>
      <Button
        variant="text"
        onClick={onBack}
        style={{ marginBottom: 'var(--space-md)' }}
      >
        ← Back to Projects
      </Button>
...

      <header style={{ marginBottom: 'var(--space-xl)' }}>
        <span style={{
          display: 'block',
          color: 'var(--color-primary)',
          fontSize: '0.8rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: 'var(--space-xs'
        }}>{project.category}</span>
        <h1 style={{ fontSize: '3rem', color: 'var(--color-text)', fontWeight: '800', marginBottom: 'var(--space-sm)' }}>
          {project.title}
        </h1>
        <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
          <span><strong>Role:</strong> {project.role}</span>
          <span>•</span>
          <span><strong>Status:</strong> {project.status}</span>
        </div>
      </header>

      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: 'var(--color-soft-green)',
        borderRadius: 'var(--radius-md)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-muted)',
        border: 'var(--border-thin)',
        marginBottom: 'var(--space-xl)',
        overflow: 'hidden'
      }}>
        {image ? (
          <img
            src={image}
            alt={`${project.title} hero`}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          'Project Hero Image / Diagram Placeholder'
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
        <section>
          <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>Overview</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text)', opacity: 0.9 }}>
            {project.longDescription}
          </p>
        </section>

        <section style={{ padding: 'var(--space-md)', backgroundColor: 'var(--color-surface)', borderLeft: '4px solid var(--color-primary)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-sm)' }}>The Problem</h3>
          <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>{caseStudy.problem}</p>
        </section>

        <section>
          <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--space-md)' }}>Technical Implementation</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            {caseStudy.features.map((feature, idx) => (
              <div key={idx} style={{ marginBottom: 'var(--space-md)' }}>
                <h4 style={{ fontSize: '1.2rem', marginBottom: 'var(--space-xs)' }}>{feature.title}</h4>
                <p style={{ color: 'var(--color-muted)', marginBottom: 'var(--space-sm)', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                  {feature.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.7rem',
                      padding: '2px 6px',
                      backgroundColor: 'var(--color-soft-green)',
                      color: 'var(--color-primary)',
                      borderRadius: 'var(--radius-sm)'
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--space-sm)' }}>Challenges & Learnings</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: 'var(--color-text)', opacity: 0.9 }}>
            {caseStudy.challenges}
          </p>
        </section>

        <footer style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 'var(--space-xl)',
          borderTop: 'var(--border-thin)'
        }}>
          <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
            {project.githubUrl && (
              <Button variant="secondary" onClick={() => window.open(project.githubUrl, '_blank')}>
                View Source
              </Button>
            )}
            {project.demoUrl && (
              <Button variant="primary" onClick={() => window.open(project.demoUrl, '_blank')}>
                Live Demo
              </Button>
            )}
          </div>
        </footer>
      </div>
    </div>
  )
}

export default ProjectDetails
