import { useEffect, useRef, useState } from 'react';

const HOVER_INTERVAL_MS = 1260;
const SWIPE_THRESHOLD_PX = 40;

// Photos change only while the pointer is over the frame (every 1.26 s),
// or on arrow tap / swipe. Nothing moves on its own.
export function useCarousel(count) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);
  const touchX = useRef(null);
  const multi = count > 1;

  const go = (delta) => setIdx((i) => (((i + delta) % count) + count) % count);

  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  useEffect(() => stop, []);

  return {
    idx,
    multi,
    prev: () => go(-1),
    next: () => go(1),
    frameProps: {
      onMouseEnter: () => {
        if (!multi) return;
        stop();
        timer.current = setInterval(() => go(1), HOVER_INTERVAL_MS);
      },
      onMouseLeave: stop,
      onTouchStart: (e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      },
      onTouchEnd: (e) => {
        const start = touchX.current;
        touchX.current = null;
        const end = e.changedTouches[0]?.clientX;
        if (!multi || start == null || end == null) return;
        const dx = end - start;
        if (Math.abs(dx) > SWIPE_THRESHOLD_PX) go(dx < 0 ? 1 : -1);
      }
    },
    trackStyle: { transform: `translateX(-${idx * 100}%)` }
  };
}
