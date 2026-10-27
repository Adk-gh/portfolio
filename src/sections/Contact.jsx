import React, { useState } from "react"
import Button from "../components/Button"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    status: 'idle' // idle | sending | success | error
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side Rate Limiting: 1 submission per 24 hours
    const LAST_SUBMISSION_KEY = 'portfolio_contact_last_sent';
    const lastSent = localStorage.getItem(LAST_SUBMISSION_KEY);
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    if (lastSent && (now - parseInt(lastSent)) < oneDay) {
      const remainingHours = Math.ceil((oneDay - (now - parseInt(lastSent))) / (1000 * 60 * 60));
      alert(`To prevent spam, please wait ${remainingHours} hour(s) before sending another message.`);
      return;
    }

    setFormState(prev => ({ ...prev, status: 'sending' }));

    try {
      const response = await fetch("https://formspree.io/f/moeeeonr", {
        method: "POST",
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        // Save timestamp of successful submission
        localStorage.setItem(LAST_SUBMISSION_KEY, now.toString());

        setFormState(prev => ({
          ...prev,
          status: 'success',
          name: '',
          email: '',
          message: ''
        }));
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setFormState(prev => ({ ...prev, status: 'error' }));
    }
  };

  return (
    <section id="contact" className="container section-padding">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 'var(--space-xl)'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <span style={{
            display: 'block',
            color: 'var(--color-primary)',
            fontSize: '0.8rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: 'var(--space-xs)'
          }}>Get In Touch</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-text)', fontWeight: '800', marginBottom: 'var(--space-md)' }}>
            Let's connect
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-muted)',
            marginBottom: 'var(--space-lg)'
          }}>
            I am currently open to internship opportunities and technical collaborations.
            Feel free to reach out via the form below or directly via email.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-xl)',
          width: '100%',
          maxWidth: '1000px'
        }}>
          {/* Left Column: Direct Contact */}
          <div style={{
            padding: 'var(--space-xl)',
            backgroundColor: 'var(--color-surface)',
            border: 'var(--border-thin)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'left',
            gap: 'var(--space-lg)',
            alignItems: 'flex-start'
          }}>
            <div style={{ width: '100%' }}>
              <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', fontWeight: '700', marginBottom: 'var(--space-sm)' }}>
                Direct Contact
              </h3>
              <p style={{ color: 'var(--color-muted)', lineHeight: '1.6' }}>
                The fastest way to reach me is via email. I usually respond within 24-48 hours.
              </p>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=itsmeaderik@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '1rem var(--space-md)',
                backgroundColor: 'var(--color-primary)',
                color: 'white',
                borderRadius: 'var(--//radius-md)',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                width: 'fit-content',
                cursor: 'pointer',
                zIndex: 10
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-primary-hover)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-primary)'}
            >
              itsmeaderik@gmail.com
              <span style={{ marginLeft: '8px' }}>↗</span>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{
            padding: 'var(--space-xl)',
            backgroundColor: 'var(--color-surface)',
            border: 'var(--border-thin)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'left'
          }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text)' }}>Full Name</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  placeholder="John Doe"
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'var(--border-thin)',
                    backgroundColor: 'var(--color-bg)',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text)' }}>Email Address</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  placeholder="john@example.com"
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'var(--border-thin)',
                    backgroundColor: 'var(--color-bg)',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text)' }}>Message</label>
                <textarea
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  placeholder="Tell me about your project or opportunity..."
                  rows="4"
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    border: 'var(--border-thin)',
                    backgroundColor: 'var(--color-bg)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: 'var(--space-sm)', width: '100%' }}
              >
                {formState.status === 'sending' ? 'Sending...' : formState.status === 'success' ? 'Message Sent!' : 'Send Message'}
              </Button>

              {formState.status === 'success' && (
                <p style={{
                  color: 'var(--color-primary)',
                  fontSize: '0.85rem',
                  textAlign: 'center',
                  marginTop: 'var(--space-xs)',
                  fontWeight: '500'
                }}>
                  Thank you! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
