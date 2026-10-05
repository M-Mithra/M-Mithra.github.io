import { HERO } from '../photos.js';

export default function Hero({ t, shlokas }) {
  return (
    <section id="top" className="container hero">
      <div className="hero-text">
        <p className="shloka-hero">
          {shlokas.s1.line1}
          <span style={{ display: 'block' }}>{shlokas.s1.line2}</span>
        </p>
        <div className="rule" />
        <h1 className="hero-name">
          {t.name1}
          <span style={{ display: 'block' }}>{t.name2}</span>
        </h1>
        <p className="hero-line">{t.heroLine}</p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-solid">{t.cta}</a>
          <a href="#gallery" className="btn btn-outline">{t.ctaSecondary}</a>
        </div>
      </div>
      <div className="hero-photo">
        <img src={HERO.src} alt={t.heroAlt} width={HERO.width} height={HERO.height} fetchPriority="high" />
      </div>
    </section>
  );
}
