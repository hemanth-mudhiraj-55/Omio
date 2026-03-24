import { Link } from 'react-router-dom';
import { imagePaths } from '../config/imagePaths';
import { useSite } from '../context/SiteContext';
import { getLocalizedContent } from '../data/localizedContent';

function HomePage() {
  const { language } = useSite();
  const {
    common,
    heroContent,
    homeHighlights,
    homePillars,
    homeStats,
    labels,
    navigationGroups,
  } = getLocalizedContent(language);
  const servicesPreview = navigationGroups.find((g) => g.key === 'services')?.items.slice(0, 6) ?? [];
  const insightPreview = navigationGroups.find((g) => g.key === 'insights')?.items ?? [];
  const aboutPreview = navigationGroups.find((g) => g.key === 'about')?.items.slice(0, 3) ?? [];

  return (
    <div className="page-stack">

      <section
        className="hero-section"
        style={imagePaths.heroBackground ? {
          backgroundImage: `url(${imagePaths.heroBackground})`,
        } : undefined}
      >
        <div className="hero-panel">
          <div className="hero-copy">
            <p className="section-eyebrow">{heroContent.eyebrow}</p>
            <h1 className="hero-title">
              {heroContent.titleLines.map((line) => (
                <span key={line.text} className={`hero-line hero-line--${line.tone}`}>
                  {line.text}
                </span>
              ))}
            </h1>
            <p className="hero-description">{heroContent.description}</p>
            <div className="hero-stats">
              {homeStats.map((item) => (
                <div key={item.label} className="hero-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pillar-grid">
        {homePillars.map((pillar) => (
          <article key={pillar.title} className="overview-card pillar-card">
            <p className="section-eyebrow">{pillar.eyebrow}</p>
            <h2>{pillar.title}</h2>
            <p>{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="services-preview">
        <div className="section-intro">
          <p className="section-eyebrow">{labels.servicesHeading}</p>
          <h2>{labels.servicesSubheading}</h2>
        </div>
        <div className="services-grid">
          {servicesPreview.map((service) => (
            <Link key={service.path} className="service-card" to={service.path}>
              <div>
                <p className="service-card-index">{service.title.split(' ')[0]}</p>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="story-section">
        <article className="story-panel story-panel--copy">
          <p className="section-eyebrow">{labels.whyOmio}</p>
          <h2>{labels.whyOmioTitle}</h2>
          <p>{labels.whyOmioBody}</p>
          <div className="story-links">
            <Link className="text-link" to="/insights/case-studies">
              {labels.viewCaseStudies}
            </Link>
            <Link className="text-link" to="/about/who-we-are">
              {labels.aboutOmio}
            </Link>
          </div>
        </article>
        <article className="story-panel story-panel--feature">
          <div className="story-feature-shell">
            <p className="section-eyebrow">{labels.siteReadiness}</p>
            {homeHighlights.map((item) => (
              <div key={item.title} className="story-feature-row">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="insight-section">
        <div className="section-intro">
          <p className="section-eyebrow">{labels.insightsHeading}</p>
          <h2>{labels.insightsTitle}</h2>
        </div>
        <div className="insight-grid">
          {insightPreview.map((item, index) => (
            <Link key={item.path} className="insight-card" to={item.path}>
              <div className="insight-card-top">
                <span className="insight-kicker">0{index + 1}</span>
                <span className="insight-chip">{item.title}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="about-band">
        <div className="section-intro">
          <p className="section-eyebrow">{labels.aboutHeading}</p>
          <h2>{labels.aboutTitle}</h2>
        </div>
        <div className="about-band-links">
          {aboutPreview.map((item) => (
            <Link key={item.path} className="about-band-link" to={item.path}>
              <span>{item.title}</span>
              <small>{item.description}</small>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

export default HomePage;
