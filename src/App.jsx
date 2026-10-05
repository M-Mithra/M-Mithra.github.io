import { useEffect, useMemo, useState } from 'react';
import { SHLOKAS, T } from './content.js';
import { getFestival } from './festival.js';
import Header from './sections/Header.jsx';
import { FestivalBanner, Ticker } from './sections/Festival.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import { Current, Learning } from './sections/Learning.jsx';
import Temple from './sections/Temple.jsx';
import Pujas from './sections/Pujas.jsx';
import Gallery from './sections/Gallery.jsx';
import Contact from './sections/Contact.jsx';

const LANG_KEY = 'lang';

// Storage can be blocked (private mode, strict settings); the site must still work.
function readLang() {
  try {
    const saved = window.localStorage.getItem(LANG_KEY);
    return saved && T[saved] ? saved : 'en';
  } catch {
    return 'en';
  }
}

export default function App() {
  const [lang, setLang] = useState(readLang);
  const t = T[lang];
  const shlokas = SHLOKAS[lang];
  const fest = useMemo(() => getFestival(lang), [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(LANG_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  return (
    <div className="page" lang={lang}>
      <a href="#main" className="skip">{t.skip}</a>
      {fest && <Ticker fest={fest} />}
      <Header t={t} lang={lang} setLang={setLang} />
      {fest && <FestivalBanner fest={fest} t={t} />}
      <main id="main">
        <Hero t={t} shlokas={shlokas} />
        <About t={t} />
        <Learning t={t} />
        <Current t={t} />
        <Temple t={t} shlokas={shlokas} />
        <Pujas t={t} />
        <Gallery t={t} />
        <Contact t={t} />
      </main>
      <footer className="site-footer">{t.footer}</footer>
    </div>
  );
}
