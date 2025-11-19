import { useLanguage } from '../i18n.jsx';

function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-intro">{t('contact.intro')}</p>
        <div className="contact-grid">
          <div>
            <p className="contact-label">{t('contact.emailLabel')}</p>
            <a href="mailto:alielboukili75@gmail.com" className="link">
              alielboukili75@gmail.com
            </a>
          </div>
          <div>
            <p className="contact-label">{t('contact.linksLabel')}</p>
            <ul className="contact-links">
              <li>
                <a
                  href="https://github.com/A-EB"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('contact.github')}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aeb-"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('contact.linkedin')}
                </a>
              </li>
              <li>
                <a
                  href="https://tryhackme.com/p/AEB"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('contact.other')}
                </a>
              </li>
            </ul>
            </div>

          {/* Right: form */}
          <div>
            <form
              className="contact-form"
              action="https://formspree.io/f/xwpyogrw"
              method="POST"
            >
              <div className="field">
                <label htmlFor="name" className="field-label">
                  {t('contact.form.name')}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="field-input"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>

              <div className="field">
                <label htmlFor="email" className="field-label">
                  {t('contact.form.email')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="field-input"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>

              <div className="field">
                <label htmlFor="message" className="field-label">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="field-textarea"
                  placeholder={t('contact.form.messagePlaceholder')}
                />
              </div>

              <button type="submit" className="btn primary contact-submit">
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
