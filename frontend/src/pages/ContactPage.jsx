import { useEffect } from 'react';
import { contactChannels, socialLinks, companyInfo } from '../data/links';

const icons = {
  briefcase: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/>
    </svg>
  ),
  tool: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  cpu: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
      <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
      <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
      <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
      <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
    </svg>
  ),
  users: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  handshake: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    </svg>
  ),
  newspaper: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0-1.07 1.76A2 2 0 0 1 4 22z"/>
      <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="12" y2="15"/>
    </svg>
  ),
  star: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  mail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
};

function ContactPage() {
  useEffect(() => {
    document.title = 'Contact | Omio Solutions';
    return () => { document.title = 'Omio Solutions'; };
  }, []);

  return (
    <div className="page-stack">

      {/* ── Hero ──────────────────────────── */}
      <header className="content-hero contact-hero">
        <p className="section-eyebrow">Get in touch</p>
        <h1>Contact Omio Solutions</h1>
        <p className="contact-hero__sub">
          Every message reaches a real person. Choose the channel that fits your need and we will
          respond promptly — usually within one business day.
        </p>
      </header>

      {/* ── Contact cards ─────────────────── */}
      <section className="contact-grid" aria-label="Contact channels">
        {contactChannels.map((channel) => (
          <a
            key={channel.key}
            href={`mailto:${channel.email}`}
            className="contact-card"
            aria-label={`${channel.label} — ${channel.email}`}
          >
            <div className="contact-card__icon" aria-hidden="true">
              {icons[channel.icon]}
            </div>
            <div className="contact-card__body">
              <p className="contact-card__category">{channel.label}</p>
              <h2 className="contact-card__tagline">{channel.tagline}</h2>
              <p className="contact-card__description">{channel.description}</p>
            </div>
            <div className="contact-card__email">
              <span>{channel.email}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
              </svg>
            </div>
          </a>
        ))}
      </section>

      {/* ── Info strip ────────────────────── */}
      <section className="contact-info-strip">
        <div className="contact-info-strip__col">
          <p className="section-eyebrow">Response time</p>
          <h3>Within one business day</h3>
          <p>We read every message and route it to the right person. Sales and support requests get priority handling.</p>
        </div>
        <div className="contact-info-strip__col">
          <p className="section-eyebrow">Headquarters</p>
          <h3>{companyInfo.headquarters}</h3>
          <p>Omio operates as a distributed team. We work with clients across Europe, Asia, and North America.</p>
        </div>
        <div className="contact-info-strip__col">
          <p className="section-eyebrow">Follow along</p>
          <h3>Stay connected</h3>
          <div className="contact-social-links">
            {socialLinks.map((s) => (
              <a key={s.key} href={s.url} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
