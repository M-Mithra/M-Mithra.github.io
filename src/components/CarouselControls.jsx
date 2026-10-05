import { CaretLeft, CaretRight } from './Icons.jsx';

export default function CarouselControls({ carousel, count, dotsBottom = 14 }) {
  if (!carousel.multi) return null;
  return (
    <>
      <button type="button" className="arrow arrow-left" aria-label="Previous photo" onClick={carousel.prev}>
        <CaretLeft />
      </button>
      <button type="button" className="arrow arrow-right" aria-label="Next photo" onClick={carousel.next}>
        <CaretRight />
      </button>
      <div className="dots" style={{ bottom: dotsBottom }}>
        {Array.from({ length: count }, (_, k) => (
          <span key={k} className={k === carousel.idx ? 'dot dot-active' : 'dot'} />
        ))}
      </div>
    </>
  );
}

// A slide that never crops: a blurred copy fills the frame, the real photo sits on top with contain.
export function ContainSlide({ src, alt }) {
  return (
    <div className="slide">
      <img className="slide-backdrop" src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <img className="slide-photo" src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}
