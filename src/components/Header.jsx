import React, { useState } from "react"
import Button from "./Button"
import Logo from "./Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'transparent',
      borderBottom: 'none',
      padding: 'var(--space-lg) 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 var(--space-md)'
      }}>
        <a href="/" style={{ textDecoration: 'none' }}>
          <Logo variant="full" />
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            gap: 'var(--space-md)',
            listStyle: 'none',
            alignItems: 'center'
          }}>
            {navLinks.map(link => (
              <li key={link.name}>
                <a href={link.href} style={{ fontSize: '0.9rem', fontWeight: '500' }}>{link.name}</a>
              </li>
            ))}
            <li>
              <Button variant="primary" style={{ padding: 'var(--space-xs) var(--space-sm)', fontSize: '0.8rem' }}>
                Résumé
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: 'var(--color-text)',
            cursor: 'pointer'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: 'var(--color-bg)',
          borderBottom: 'var(--border-thin)',
          padding: 'var(--space-md) 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-md)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
        }}>
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={{ fontSize: '1rem', fontWeight: '500' }}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary">Résumé</Button>
        </nav>
      )}
    </header>
  )
}

export default Header
