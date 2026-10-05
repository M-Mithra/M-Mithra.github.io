export function Learning({ t }) {
  return (
    <section id="learning" className="container learning">
      <div className="center">
        <h2 className="section-title">{t.learnTitle}</h2>
        <div className="badges">
          {t.vedaBadges.map((b) => <p key={b} className="badge-outline">{b}</p>)}
        </div>
      </div>
      <div className="teacher-grid">
        {t.teachers.map((item) => (
          <div key={item.title} className="panel">
            <p className="tag">{item.tag}</p>
            <h3 className="card-title">{item.title}</h3>
            <p className="teacher-name">{item.name}</p>
            <p className="body-soft">{item.body}</p>
          </div>
        ))}
      </div>
      <div className="panel panel-lg">
        <p className="tag">{t.scholars.tag}</p>
        <h3 className="card-title">{t.scholars.title}</h3>
        <p className="body-soft">{t.scholars.body}</p>
        <div className="chips">
          {t.scholars.items.map((s) => <p key={s} className="chip">{s}</p>)}
        </div>
      </div>
    </section>
  );
}

export function Current({ t }) {
  return (
    <section id="current" className="band">
      <div className="container current">
        <div className="current-head">
          <h2 className="section-title">{t.currentTitle}</h2>
        </div>
        <div className="current-grid">
          {t.currentItems.map((item) => (
            <div key={item.title} className="current-card">
              <h3 className="card-title">{item.title}</h3>
              <p className="small-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
