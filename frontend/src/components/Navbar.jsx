import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { imagePaths } from '../config/imagePaths';
import { useSite } from '../context/SiteContext';
import { getLocalizedContent } from '../data/localizedContent';

function ThemeIcon({ theme }) {
  if (theme === 'light') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    );
  }
  return (
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
  );
}

function Navbar() {
  const [activeGroup, setActiveGroup] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const { language, setLanguage, theme, toggleTheme } = useSite();
  const { common, navigationGroups, supportedLanguages } = getLocalizedContent(language);
  const location = useLocation();

  useEffect(() => {
    setActiveGroup(null);
    setMenuOpen(false);
    setOpenGroup(null);
  }, [location.pathname]);

  const currentGroup =
    navigationGroups.find((group) => group.key === activeGroup) ?? navigationGroups[0];

  const featuredImage = imagePaths.navFeatured[currentGroup.key];

  return (
    <header className="nav-wrapper" onMouseLeave={() => setActiveGroup(null)}>
      <div className="nav-bar">

        {/* Brand */}
        <Link className="brand-lockup" to="/" aria-label="Omio homepage">
          <img className="brand-logo" src="/logo.svg" alt="Omio logo" />
          <div>
            <div className="brand-name">Omio</div>
            <div className="brand-subtitle">{common.brandSubtitle}</div>
          </div>
        </Link>

        {/* Desktop: center nav links */}
        <nav className="nav-center" aria-label="Primary navigation">
          {navigationGroups.map((group) => (
            <div
              key={group.key}
              className="nav-item"
              onMouseEnter={() => setActiveGroup(group.key)}
            >
              <NavLink to={group.path} onClick={() => setActiveGroup(null)}>
                {group.label}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* Desktop: right actions */}
        <div className="nav-actions">
          <select
            className="language-selector"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label="Language selector"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? common.dark : common.light}
          >
            <ThemeIcon theme={theme} />
          </button>
          <Link className="contact-button" to="/contact">{common.contact}</Link>
        </div>

        {/* Mobile: compact right icons */}
        <div className="nav-actions-mobile">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? common.dark : common.light}
          >
            <ThemeIcon theme={theme} />
          </button>
          <button
            className={`hamburger-btn${menuOpen ? ' hamburger-btn--open' : ''}`}
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
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
          <div className="mega-links-grid">
            {currentGroup.items.map((item) => (
              <Link key={item.path} className="mega-link" to={item.path} onClick={() => setActiveGroup(null)}>
                <span>{item.title}</span>
                <small>{item.description}</small>
              </Link>
            ))}
          </div>
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

      {/* Mobile drawer menu */}
      <div
        className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav">
          {navigationGroups.map((group) => (
            <div key={group.key} className="mobile-nav-group">
              <button
                className={`mobile-nav-group-btn${openGroup === group.key ? ' mobile-nav-group-btn--open' : ''}`}
                type="button"
                onClick={() => setOpenGroup(openGroup === group.key ? null : group.key)}
              >
                <span>{group.label}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {openGroup === group.key && (
                <div className="mobile-nav-items">
                  {group.items.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="mobile-nav-item"
                      onClick={() => setMenuOpen(false)}
                    >
                      <span>{item.title}</span>
                      <small>{item.description}</small>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <select
            className="language-selector"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            aria-label="Language selector"
          >
            {supportedLanguages.map((lang) => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
          <Link
            className="contact-button"
            to="/contact"
            style={{ justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            {common.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
