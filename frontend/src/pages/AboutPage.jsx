import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/links';

const values = [
  {
    title: 'Craft over shortcuts',
    description:
      'We treat software as a discipline. Every decision — from naming conventions to deployment strategy — is made with long-term quality in mind.',
  },
  {
    title: 'Honest communication',
    description:
      'We share progress, risks, and trade-offs openly. Clients never have to guess where a project stands or why a recommendation was made.',
  },
  {
    title: 'Outcome-driven delivery',
    description:
      'Beautiful code means nothing if it does not solve the business problem. We measure success by the results our work enables, not the hours logged.',
  },
  {
    title: 'Continuous learning',
    description:
      'Technology evolves quickly. The team invests deliberately in research, experimentation, and knowledge sharing to stay ahead of what matters.',
  },
  {
    title: 'Respectful collaboration',
    description:
      'Great work happens when people feel safe to challenge ideas, ask questions, and contribute across disciplines without hierarchy getting in the way.',
  },
  {
    title: 'Sustainable pace',
    description:
      'We build for the long term — both in code and in how we work. Burnout does not produce great software, and we do not pretend otherwise.',
  },
];

const stats = [
  { number: '50+', label: 'Projects delivered' },
  { number: '9', label: 'Service verticals' },
  { number: '5', label: 'Countries served' },
  { number: '24/7', label: 'Delivery mindset' },
];

function AboutPage() {
  useEffect(() => {
    document.title = 'Who We Are | Omio Solutions';
    return () => { document.title = 'Omio Solutions'; };
  }, []);

  return (
    <div className="page-stack">

      {/* ── Hero ──────────────────────────── */}
      <header className="about-hero">
        <p className="section-eyebrow">About Omio</p>
        <h1>Software built with intention</h1>
        <p className="about-hero__sub">
          Omio Solutions is a technology services company focused on product engineering,
          enterprise AI, and operational delivery. We work with organisations that value
          precision, transparency, and long-term thinking over quick fixes.
        </p>
      </header>

      {/* ── Stats ─────────────────────────── */}
      <div className="about-stats">
        {stats.map((stat) => (
          <div key={stat.label} className="about-stat">
            <span className="about-stat__number">{stat.number}</span>
            <span className="about-stat__label">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* ── Mission ───────────────────────── */}
      <section className="about-section">
        <p className="section-eyebrow">Our mission</p>
        <h2>Help ambitious teams ship reliable, intelligent systems</h2>
        <p>
          We exist to close the gap between technical ambition and operational reality.
          Whether a team needs a modern web platform, an AI agent evaluation framework,
          or a staffing partner that understands delivery culture — Omio provides the
          engineering depth and execution discipline to make it happen.
        </p>
        <p>
          Founded in {companyInfo.founded}, Omio started as a small engineering practice
          with a clear belief: the best technology work comes from teams that care about
          craft and communicate honestly. That belief still drives everything we do.
        </p>
      </section>

      {/* ── Values ────────────────────────── */}
      <section className="about-section">
        <p className="section-eyebrow">What we stand for</p>
        <h2>Values that shape every engagement</h2>
        <div className="about-values-grid">
          {values.map((v) => (
            <article key={v.title} className="about-value-card">
              <h3>{v.title}</h3>
              <p>{v.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── How we work ───────────────────── */}
      <section className="about-section">
        <p className="section-eyebrow">How we work</p>
        <h2>Distributed, deliberate, and dependable</h2>
        <p>
          Omio operates as a remote-first company with team members across Europe, Asia,
          and North America. We structure work around asynchronous communication, clear
          ownership, and short feedback loops — so timezone differences become an advantage,
          not a bottleneck.
        </p>
        <p>
          Every engagement begins with a discovery phase where we align on goals, constraints,
          and success criteria. From there, we work in focused delivery cycles with regular
          check-ins, transparent progress updates, and a shared commitment to shipping on time.
        </p>
      </section>

      {/* ── Expertise ─────────────────────── */}
      <section className="about-section">
        <p className="section-eyebrow">Areas of expertise</p>
        <h2>Deep capability where it counts</h2>
        <div className="about-values-grid">
          <article className="about-value-card">
            <h3>Product Engineering</h3>
            <p>
              Full-stack web and mobile development with a focus on architecture, performance,
              and design systems that scale without accumulating technical debt.
            </p>
          </article>
          <article className="about-value-card">
            <h3>Enterprise AI</h3>
            <p>
              From AI agent design and evaluation to supervised fine-tuning and RLHF — we help
              teams bring intelligent systems into production with measurement and control.
            </p>
          </article>
          <article className="about-value-card">
            <h3>Cloud & DevOps</h3>
            <p>
              Infrastructure automation, CI/CD pipeline design, and custom integrations that
              reduce friction between development, testing, and deployment environments.
            </p>
          </article>
          <article className="about-value-card">
            <h3>Quality & Monitoring</h3>
            <p>
              Continuous regression testing, observability dashboards, and production health
              checks that keep complex systems trustworthy after launch.
            </p>
          </article>
        </div>
      </section>

      {/* ── CTA ───────────────────────────── */}
      <section className="about-section" style={{ textAlign: 'center', paddingBottom: 48 }}>
        <h2>Ready to build something meaningful?</h2>
        <p style={{ maxWidth: 520, margin: '0 auto 24px' }}>
          Every conversation starts with understanding your goals. Reach out and let us
          explore how Omio can help.
        </p>
        <Link className="contact-button" to="/contact">
          Get in touch
        </Link>
      </section>

    </div>
  );
}

export default AboutPage;
