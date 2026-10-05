import { FESTIVALS, FEST_UI } from './content.js';

const DAY = 86400000;

function dayStart(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d);
}

// Returns the festival to show today (or null), plus every live festival for the ticker.
// Dates are compared in the visitor's local time, so the banner flips at their midnight.
export function getFestival(lang, now = new Date()) {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const ui = FEST_UI[lang];
  const live = FESTIVALS
    .filter((f) => dayStart(f.showFrom) <= today && today <= dayStart(f.end))
    .sort((a, b) => dayStart(a.start) - dayStart(b.start));

  const describe = (f) => {
    const start = dayStart(f.start);
    const total = Math.round((dayStart(f.end) - start) / DAY) + 1;
    const until = Math.round((start - today) / DAY);
    const status = until > 0
      ? ui.soon(until)
      : total === 1 ? ui.today : ui.day(Math.round((today - start) / DAY) + 1, total);
    return { ...f[lang], status };
  };

  if (!live.length) return null;
  return { kicker: ui.kicker, current: describe(live[0]), ticker: live.map(describe) };
}
