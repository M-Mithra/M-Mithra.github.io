import { PORTRAIT } from '../photos.js';
import { Briefcase, GraduationCap } from '../components/Icons.jsx';

export default function About({ t }) {
  return (
    <section id="about" className="band">
      <div className="container about">
        <img
          className="portrait"
          src={PORTRAIT.src}
          alt={t.portraitAlt}
          width={PORTRAIT.width}
          height={PORTRAIT.height}
          loading="lazy"
          decoding="async"
        />
        <div className="about-text">
          <h2 className="section-title">{t.aboutTitle}</h2>
          <p>{t.aboutP1}</p>
          <div className="cred-grid">
            <div className="cred">
              <p className="cred-label"><GraduationCap />{t.eduLabel}</p>
              <h3 className="card-title">{t.eduOrg}</h3>
              {t.eduLines.map((line) => <p key={line} className="cred-line">{line}</p>)}
              <p className="cred-meta">{t.eduMeta}</p>
            </div>
            <div className="cred">
              <p className="cred-label"><Briefcase />{t.expLabel}</p>
              <h3 className="card-title">{t.expOrg}</h3>
              <p className="cred-line">{t.expRole}</p>
              <p className="cred-meta">{t.expMeta}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
