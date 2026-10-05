import { CONTACT } from '../content.js';

export default function Contact({ t }) {
  return (
    <section id="contact" className="container contact">
      <p className="contact-kicker">{t.cta}</p>
      <h2 className="section-title">{t.summaryTitle}</h2>
      <p className="summary-body">{t.summaryBody}</p>
      <div className="chips" style={{ justifyContent: 'center' }}>
        {t.summaryTopics.map((topic) => <p key={topic} className="topic">{topic}</p>)}
      </div>
      <p className="contact-body">{t.contactBody}</p>
      <div className="hero-ctas" style={{ justifyContent: 'center' }}>
        <a href={`mailto:${CONTACT.email}`} className="btn btn-solid">{t.email}</a>
        <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline">{t.whatsapp}</a>
      </div>
      <p className="contact-line">
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        {' · '}
        <a href={CONTACT.phoneHref} className="nowrap">{CONTACT.phoneLabel}</a>
      </p>
    </section>
  );
}
