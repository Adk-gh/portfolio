import React from "react"

const Footer = () => {
  return (
    <footer style={{
      padding: 'var(--space-xl) 0',
      borderTop: 'none',
      backgroundColor: 'transparent',
      marginTop: 'var(--space-xl)',
      textAlign: 'center'
    }}>
      <div className="container">
        <p style={{ fontWeight: '700', color: 'var(--color-text)', marginBottom: 'var(--space-sm)' }}>
          Aderik "Adi" Bermas
        </p>
        <p className="text-muted" style={{ fontSize: '0.85rem', marginBottom: 'var(--space-md)' }}>
          Software Developer & BSIT Student
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-lg)',
          listStyle: 'none',
          fontSize: '0.9rem'
        }}>
          <a href="https://github.com/Adk-gh" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=itsmeaderik@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
        </div>
        <p className="text-muted" style={{
          fontSize: '0.75rem',
          marginTop: 'var(--space-lg)',
          opacity: 0.7
        }}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
