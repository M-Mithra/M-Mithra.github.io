import { GUEST_PHOTOS, MEMORY_PHOTOS } from '../photos.js';
import { useCarousel } from '../components/useCarousel.js';
import CarouselControls, { ContainSlide } from '../components/CarouselControls.jsx';

function Memory({ mem, photos }) {
  const c = useCarousel(photos.length);
  return (
    <figure className="figure">
      <div className="frame frame-4x3" {...c.frameProps}>
        <div className="track" style={c.trackStyle}>
          {photos.map((p, k) => <ContainSlide key={k} src={p.src} alt={`${mem.title}, ${p.year}`} />)}
        </div>
        <p className="year-pill">{photos[c.idx].year}</p>
        <CarouselControls carousel={c} count={photos.length} />
      </div>
      <figcaption className="memory-caption">
        <strong>{mem.title}</strong>
        <span>{mem.role}</span>
      </figcaption>
    </figure>
  );
}

function Guest({ guest, photos }) {
  const c = useCarousel(photos.length);
  return (
    <figure className="figure">
      <div className="frame frame-4x3 guest-frame" {...c.frameProps}>
        <div className="track" style={c.trackStyle}>
          {photos.map((src, k) => <ContainSlide key={k} src={src} alt={guest.name} />)}
        </div>
        <CarouselControls carousel={c} count={photos.length} dotsBottom={12} />
      </div>
      <figcaption className="guest-caption">
        <strong>{guest.name}</strong>
        <span>{guest.when}</span>
      </figcaption>
    </figure>
  );
}

export default function Gallery({ t }) {
  return (
    <section id="gallery" className="gallery-band">
      <div className="container gallery">
        <div className="center">
          <h2 className="section-title">{t.galleryTitle}</h2>
        </div>
        <div className="memory-grid">
          {t.memories.map((mem, i) => <Memory key={i} mem={mem} photos={MEMORY_PHOTOS[i]} />)}
        </div>
        <h3 className="guests-title">{t.guestsTitle}</h3>
        <div className="guest-grid">
          {t.guests.map((g, i) => <Guest key={i} guest={g} photos={GUEST_PHOTOS[i]} />)}
        </div>
      </div>
    </section>
  );
}
