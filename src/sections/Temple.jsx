import { TEMPLE_PHOTOS } from '../photos.js';
import { useCarousel } from '../components/useCarousel.js';
import CarouselControls from '../components/CarouselControls.jsx';

export default function Temple({ t, shlokas }) {
  const c = useCarousel(TEMPLE_PHOTOS.length);

  return (
    <section id="temple" className="temple-band">
      <div className="container temple">
        <div className="temple-text">
          <p className="kicker">{t.templeKicker}</p>
          <h2 className="temple-name">
            {t.templeName}
            <span className="temple-sub">{t.templeSub}</span>
          </h2>
          <div className="chips">
            {[t.badge1, t.badge2, t.badge3].map((b) => <p key={b} className="badge-gold">{b}</p>)}
          </div>
          <p>{t.templeBody}</p>
        </div>

        <figure className="temple-figure">
          <div className="arch" {...c.frameProps}>
            <div className="track" style={c.trackStyle}>
              {TEMPLE_PHOTOS.map((p, k) => (
                <img
                  key={p.src}
                  src={p.src}
                  alt={t.templeLabels[k]}
                  loading="lazy"
                  decoding="async"
                  style={{ objectFit: p.fit, objectPosition: p.pos }}
                />
              ))}
            </div>
            <CarouselControls carousel={c} count={TEMPLE_PHOTOS.length} />
          </div>
          <figcaption className="temple-caption">{t.templeLabels[c.idx]}</figcaption>
        </figure>

        <div className="shloka-row">
          {[[t.templeLabels[1], shlokas.s2], [t.templeLabels[2], shlokas.s3]].map(([label, s]) => (
            <div key={label} className="shloka-block">
              <p className="shloka-label">{label}</p>
              <p className="shloka-text">
                {s.line1}
                <span style={{ display: 'block' }}>{s.line2}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
