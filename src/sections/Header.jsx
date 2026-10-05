import { useState } from 'react';
import { LANGS } from '../content.js';
import { List } from '../components/Icons.jsx';

const NAV = [
  ['#about', 'navAbout'],
  ['#learning', 'navLearning'],
  ['#temple', 'navTemple'],
  ['#pujas', 'navPujas'],
  ['#gallery', 'navGallery']
];

export default function Header({ t, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="container nav">
        <a href="#top" className="brand">{t.brand}</a>
        <div className="nav-right">
          <div className="nav-links">
            {NAV.map(([href, key]) => <a key={href} href={href}>{t[key]}</a>)}
          </div>
          <div role="group" aria-label="Language" className="lang-group">
            {LANGS.map((o) => (
              <button
                key={o.code}
                type="button"
                className="lang-btn"
                aria-label={o.ariaLabel}
                aria-pressed={o.code === lang}
                onClick={() => setLang(o.code)}
              >
                {o.label}
              </button>
            ))}
          </div>
          <a href="#contact" className="btn btn-solid nav-cta">{t.cta}</a>
          <button
            type="button"
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <List />
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" className="container mobile-menu">
          {NAV.map(([href, key]) => <a key={href} href={href} onClick={close}>{t[key]}</a>)}
          <a href="#contact" className="btn btn-solid" onClick={close}>{t.cta}</a>
        </div>
      )}
    </header>
  );
}
