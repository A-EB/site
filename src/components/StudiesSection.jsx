import { studies } from '../data/studies';
import { useLanguage } from '../i18n.jsx';

function StudiesSection() {
  const { t } = useLanguage();

  return (
    <section id="studies" className="section alt">
      <div className="section-inner">
        <h2 className="section-title">{t('studies.title')}</h2>
        <p className="section-intro">{t('studies.intro')}</p>
        <div className="timeline">
          {studies.map((item) => (
            <article key={item.id} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-meta">
                  {item.institution} • {item.period}
                </p>
                <ul className="timeline-details">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudiesSection;
