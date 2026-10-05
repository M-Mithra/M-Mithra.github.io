import { Globe } from '../components/Icons.jsx';

export default function Pujas({ t }) {
  return (
    <section id="pujas" className="container pujas">
      <div className="center">
        <h2 className="section-title">{t.pujasTitle}</h2>
      </div>
      <div className="puja-grid">
        {t.pujas.map((item) => (
          <div key={item.title} className="puja-card">
            <h3 className="card-title">{item.title}</h3>
            <p className="small-soft">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="online">
        <Globe />
        <div className="online-text">
          <h3 className="card-title">{t.onlineTitle}</h3>
          <p className="small-soft">{t.onlineBody}</p>
        </div>
        <a href="#contact" className="btn btn-outline">{t.cta}</a>
      </div>
    </section>
  );
}
