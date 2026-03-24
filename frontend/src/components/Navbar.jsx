import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { imagePaths } from '../config/imagePaths';
import { useSite } from '../context/SiteContext';
import { getLocalizedContent } from '../data/localizedContent';

function Navbar() {
  const [activeGroup, setActiveGroup] = useState(null);
  const { language, setLanguage, theme, toggleTheme } = useSite();
  const { common, navigationGroups, supportedLanguages } = getLocalizedContent(language);

  const currentGroup =
    navigationGroups.find((group) => group.key === activeGroup) ?? navigationGroups[0];

  const featuredImage = imagePaths.navFeatured[currentGroup.key];

  return (
    <header className="nav-wrapper" onMouseLeave={() => setActiveGroup(null)}>
      <div className="nav-bar">
        <Link className="brand-lockup" to="/" aria-label="Omio homepage">
          <img className="brand-logo" src="/logo.svg" alt="Omio logo" />
          <div>
            <div className="brand-name">Omio</div>
            <div className="brand-subtitle">{common.brandSubtitle}</div>
          </div>
        </Link>

        <nav className="nav-center" aria-label="Primary navigation">
          {navigationGroups.map((group) => (
            <div
              key={group.key}
              className="nav-item"
              onMouseEnter={() => setActiveGroup(group.key)}
            >
              <NavLink to={group.path}>{group.label}</NavLink>
            </div>
          ))}
        </nav>

        <div className="nav-actions">
          <select
            className="language-selector"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label="Language selector"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={theme === 'light' ? common.dark : common.light}>
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            )}
          </button>
          <a className="contact-button" href="mailto:hello@omiosolutions.com">
            {common.contact}
          </a>
        </div>
      </div>

      <div
        className={`mega-menu ${activeGroup ? 'mega-menu--visible' : ''}`}
        aria-live="polite"
      >
        <div className="mega-menu-list">
          <div className="mega-menu-intro">
            <p className="section-eyebrow">{currentGroup.label}</p>
            <h3>{currentGroup.featuredTitle}</h3>
            <p>{currentGroup.description}</p>
          </div>
          {currentGroup.items.map((item) => (
            <Link key={item.path} className="mega-link" to={item.path} onClick={() => setActiveGroup(null)}>
              <span>{item.title}</span>
              <small>{item.description}</small>
            </Link>
          ))}
        </div>
        <div className="mega-card">
          <div className="mega-card-visual">
            {featuredImage ? (
              <img src={featuredImage} alt="" />
            ) : (
              <div className="mega-card-placeholder">
                <span>{common.featuredVisualPlaceholder}</span>
                <small>{common.updateImagePaths}</small>
              </div>
            )}
          </div>
          <p className="mega-card-eyebrow">{currentGroup.label}</p>
          <h3>{currentGroup.featuredTitle}</h3>
          <p>{currentGroup.featuredDescription}</p>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
