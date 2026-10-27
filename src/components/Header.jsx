import React, { useState, useEffect } from "react"
import Button from "./Button"
import Logo from "./Logo"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "skills", "about", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      padding: 'var(--space-lg) 0',
      transition: 'all 0.3s ease'
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
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                  paddingBottom: '4px'
                }}
              >
                {link.name}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '25%',
                    right: '25%',
                    height: '2px',
                    backgroundColor: 'var(--color-primary)',
                    borderRadius: '2px 2px 0 0'
                  }} />
                )}
              </a>
            )
          })}
        </nav>
      )}
    </header>
  )
}

export default Header
