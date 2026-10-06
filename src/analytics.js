const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const GA_ID_PATTERN = /^G-[A-Z0-9]+$/i;

let configuredMeasurementId;

const CATEGORY_EVENTS = {
  email: 'email_click',
  phone: 'phone_click',
  whatsapp: 'whatsapp_click',
  internal: 'internal_link_click',
  external: 'external_link_click'
};

function getLinkDetails(anchor) {
  const url = new URL(anchor.href, window.location.href);

  if (url.protocol === 'mailto:') return { type: 'email' };
  if (url.protocol === 'tel:') return { type: 'phone' };
  if (url.hostname === 'wa.me' || url.hostname.endsWith('.whatsapp.com') || url.hostname === 'whatsapp.com') {
    return { type: 'whatsapp' };
  }
  if (url.origin === window.location.origin) {
    return { type: 'internal', target: url.hash || url.pathname };
  }
  if (url.protocol === 'http:' || url.protocol === 'https:') {
    return { type: 'external', target: url.hostname };
  }
  return { type: 'other' };
}

function trackLinkClick(event) {
  const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
  if (!anchor) return;

  const { type, target } = getLinkDetails(anchor);
  const details = {
    link_type: type,
    ...(target ? { link_target: target } : {}),
    transport_type: 'beacon'
  };

  window.gtag('event', 'link_click', details);

  const categoryEvent = CATEGORY_EVENTS[type];
  if (categoryEvent) window.gtag('event', categoryEvent, details);
}

export function startAnalytics() {
  if (!measurementId) return;
  if (!GA_ID_PATTERN.test(measurementId)) {
    console.error('VITE_GA_MEASUREMENT_ID must be a valid Google Analytics 4 measurement ID (G-...).');
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  if (!document.getElementById('google-analytics')) {
    const script = document.createElement('script');
    script.id = 'google-analytics';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);
  }

  if (configuredMeasurementId !== measurementId) {
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { send_page_view: true });
    configuredMeasurementId = measurementId;
  }

  document.addEventListener('click', trackLinkClick, true);
  return () => document.removeEventListener('click', trackLinkClick, true);
}
