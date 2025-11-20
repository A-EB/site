// src/components/ContactSection.jsx
import { useState } from 'react';
import { useLanguage } from '../i18n.jsx';

function ContactSection() {
  const { t, lang } = useLanguage();
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xwpyogrw', {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const renderStatusMessage = () => {
    if (status === 'success') {
      return (
        <p className="contact-status contact-status--success" aria-live="polite">
          {lang === 'fr'
            ? 'Message envoyé avec succès.'
            : 'Message sent successfully.'}
        </p>
      );
    }
    if (status === 'error') {
      return (
        <p className="contact-status contact-status--error" aria-live="polite">
          {lang === 'fr'
            ? 'Une erreur est survenue. Vous pouvez aussi me contacter par email.'
            : 'Something went wrong. You can also contact me by email.'}
        </p>
      );
    }
    return null;
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="section-title">{t('contact.title')}</h2>
        <p className="section-intro">{t('contact.intro')}</p>

        <div className="contact-grid">
          {/* Left: static info */}
          <div>
            <p className="contact-label">{t('contact.emailLabel')}</p>
            <a href="mailto:your.email@example.com" className="link">
              alielboukili75@gmail.com
            </a>

            <p className="contact-label" style={{ marginTop: '1.25rem' }}>
              {t('contact.linksLabel')}
            </p>
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
                  href="#"
                  className="link"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('contact.other')}
                </a>
              </li>
            </ul>
          </div>

          {/* Right: form, handled via fetch, no redirect */}
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
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

              <button
                type="submit"
                className="btn primary contact-submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting'
                  ? lang === 'fr'
                    ? 'Envoi...'
                    : 'Sending...'
                  : t('contact.form.submit')}
              </button>

              {renderStatusMessage()}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
