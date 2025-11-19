import { useLanguage } from '../i18n.jsx';

const sections = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'studies', labelKey: 'nav.studies' },
  { id: 'contact', labelKey: 'nav.contact' },
];

function Navbar() {
  const { lang, setLang, t } = useLanguage();

  const handleChangeLang = (value) => {
    setLang(value);
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          A EB
        </a>

        <nav className="nav-links">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`} className="nav-link">
              {t(section.labelKey)}
            </a>
          ))}
        </nav>

        <div className="lang-switcher">
          <button
            type="button"
            className={`lang-btn ${lang === 'fr' ? 'active' : ''}`}
            onClick={() => handleChangeLang('fr')}
          >
            FR
          </button>
          <span className="lang-separator">/</span>
          <button
            type="button"
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => handleChangeLang('en')}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
