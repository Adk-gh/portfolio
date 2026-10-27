import React from "react"

const Skills = () => {
  const skillGroups = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: "advanced" },
        { name: "Next.js", level: "intermediate" },
        { name: "Tailwind CSS", level: "advanced" },
        { name: "HTML5/CSS3", level: "advanced" },
        { name: "JavaScript", level: "advanced" }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "intermediate" },
        { name: "Express.js", level: "intermediate" },
        { name: "PHP", level: "intermediate" },
        { name: "Python/Flask", level: "intermediate" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", level: "intermediate" },
        { name: "Supabase", level: "advanced" },
        { name: "Firebase", level: "advanced" },
        { name: "MySQL", level: "intermediate" }
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: "advanced" },
        { name: "Electron", level: "intermediate" },
        { name: "Capacitor", level: "intermediate" },
        { name: "Zod", level: "intermediate" },
        { name: "XAMPP", level: "advanced" }
      ]
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'advanced': return 'var(--color-primary)';
      case 'intermediate': return 'var(--color-muted)';
      default: return 'var(--color-border)';
    }
  }

  return (
    <section id="skills" className="container section-padding">
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
        <span className="mono" style={{
          display: 'block',
          color: 'var(--color-primary)',
          fontSize: '0.75rem',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: 'var(--space-xs'
        }}>Technical Proficiency</span>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)', fontWeight: '800', letterSpacing: '-0.02em' }}>Skills & Technologies</h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'var(--space-xl)',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {skillGroups.map(group => (
          <div key={group.category} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: 'var(--space-sm)'
            }}>
              <span className="mono" style={{
                fontSize: '0.9rem',
                fontWeight: '700',
                color: 'var(--color-primary)',
                textTransform: 'uppercase'
              }}>
                {group.category}
              </span>
              <div style={{
                flex: 1,
                height: '1px',
                backgroundColor: 'var(--color-border)'
              }} />
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px 12px'
            }}>
              {group.skills.map(skill => (
                <div key={skill.name} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 0',
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: getLevelColor(skill.level)
                  }} />
                  <span style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text)',
                    fontWeight: '500',
                    opacity: skill.level === 'advanced' ? 1 : 0.8
                  }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
