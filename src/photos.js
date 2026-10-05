import hero from './assets/photos/hero.jpg';
import portrait from './assets/photos/portrait.jpg';
import temple from './assets/photos/temple.jpg';
import bheemeswara from './assets/photos/bheemeswara.jpg';
import manikyamba from './assets/photos/manikyamba.jpg';
import vc2024 from './assets/photos/vc2024.jpg';
import vc2025a from './assets/photos/vc2025a.jpg';
import vc2025b from './assets/photos/vc2025b.jpg';
import d2015 from './assets/photos/d2015.jpg';
import d2021 from './assets/photos/d2021.jpg';
import garikipati1 from './assets/photos/garikipati1.jpg';
import garikipati2 from './assets/photos/garikipati2.jpg';
import garikipati3 from './assets/photos/garikipati3.jpg';
import samavedam1 from './assets/photos/samavedam1.jpg';
import samavedam2 from './assets/photos/samavedam2.jpg';
import jeeyar1 from './assets/photos/jeeyar1.jpg';
import jeeyar2 from './assets/photos/jeeyar2.jpg';
import jeeyar3 from './assets/photos/jeeyar3.jpg';

export const HERO = { src: hero, width: 1307, height: 1203 };
export const PORTRAIT = { src: portrait, width: 1200, height: 1600 };

// Same order as T[lang].templeLabels.
export const TEMPLE_PHOTOS = [
  { src: temple, fit: 'cover', pos: '85% center' },
  { src: bheemeswara, fit: 'contain', pos: 'center' },
  { src: manikyamba, fit: 'contain', pos: 'center' }
];

// Same order as T[lang].memories.
export const MEMORY_PHOTOS = [
  [
    { src: vc2024, year: '2024' },
    { src: vc2025a, year: '2025' },
    { src: vc2025b, year: '2025' }
  ],
  [
    { src: d2015, year: '2015' },
    { src: d2021, year: '2021' }
  ]
];

// Same order as T[lang].guests.
export const GUEST_PHOTOS = [
  [garikipati1, garikipati2, garikipati3],
  [samavedam1, samavedam2],
  [jeeyar1, jeeyar2, jeeyar3]
];
