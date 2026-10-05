import { CONTACT } from '../content.js';
import { Diya } from '../components/Icons.jsx';

export function Ticker({ fest }) {
  // Four copies so the strip is always wider than the screen; the animation scrolls by half.
  const items = [...fest.ticker, ...fest.ticker, ...fest.ticker, ...fest.ticker];
  return (
    <a href="#festival" className="ticker" aria-label={fest.current.title}>
      <span className="ticker-track" aria-hidden="true">
        {items.map((tk, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-accent">✦</span>
            <strong>{tk.title}</strong>
            <span>{tk.dates}</span>
            <span className="ticker-accent">{tk.status}</span>
          </span>
        ))}
      </span>
    </a>
  );
}

export function FestivalBanner({ fest, t }) {
  const f = fest.current;
  return (
    <section id="festival" aria-label={fest.kicker} className="container festival">
      <div className="fest-card">
        <Diya className="fest-icon" />
        <div className="fest-text">
          <div className="fest-head">
            <h2 className="fest-title">{f.title}</h2>
            <p className="fest-status">{f.status}</p>
            <p className="fest-dates">{f.dates}</p>
          </div>
          <p className="fest-message">{f.message}</p>
        </div>
        <div className="fest-actions">
          <a href="#contact" className="btn fest-btn fest-btn-solid">{t.festCta}</a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn fest-btn fest-btn-outline">{t.whatsapp}</a>
        </div>
      </div>
    </section>
  );
}
