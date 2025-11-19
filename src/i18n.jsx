// src/i18n.jsx

import { createContext, useContext, useEffect, useState } from 'react';

const translations = {
  fr: {
    // navbar
    'nav.home': 'Accueil',
    'nav.projects': 'Projets',
    'nav.certifications': 'Certifications',
    'nav.studies': 'Études',
    'nav.contact': 'Contact',

    // hero
    'hero.kicker': 'Cybersécurité & Réseaux',
    'hero.title': 'A EB - Bienvenue sur mon site portfolio !',
    'hero.subtitle':
      "Étudiant en Master réseaux et cybersécurité, je travaille sur des projets concrets allant du bas niveau réseau à l'automatisation.",
    'hero.viewProjects': 'Voir les projets',
    'hero.contactMe': 'Me contacter',
    'hero.downloadCv': 'Télécharger mon CV',
    'hero.currentlyTitle': 'Actuellement',
    'hero.currentlyBody':
      'Master 1 – Réseaux (RES) à Sorbonne Université, avec un focus sur la sécurité des réseaux et les systèmes.',

    // projects
    'projects.title': 'Projets',
    'projects.intro':
      'Une sélection de projets qui illustrent mon travail en réseaux, automatisation et programmation système.',

    // certifications
    'certs.title': 'Certifications',
    'certs.intro':
      'Certifications et parcours pratiques en cybersécurité, notamment TryHackMe, ainsi que mes futurs certificats.',
    'certs.view': 'Voir le certificat / profil',

    // studies
    'studies.title': 'Études',
    'studies.intro':
      'Parcours académique et programmes clés qui ont structuré mes compétences.',

    // contact
    'contact.title': 'Contact',
    'contact.intro':
      'Intéressé par mon travail, à la recherche d’un stagiaire, ou envie de discuter réseaux et sécurité ?',
    'contact.emailLabel': 'Email',
    'contact.linksLabel': 'Liens',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.other': 'TryHackMe / autres',

    // contact form
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Votre nom',
    'contact.form.emailPlaceholder': 'votre.email@example.com',
    'contact.form.messagePlaceholder': 'Écrivez votre message ici…',
    'contact.form.submit': 'Envoyer',
  },
  en: {
    // navbar
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.certifications': 'Certifications',
    'nav.studies': 'Studies',
    'nav.contact': 'Contact',

    // hero
    'hero.kicker': 'Cybersecurity & Networks',
    'hero.title': 'A EB - Welcome to my portfolio website!',
    'hero.subtitle':
      'I am a Master student in networks and cybersecurity, working on hands-on projects from low-level networking to automation tools.',
    'hero.viewProjects': 'View projects',
    'hero.contactMe': 'Contact me',
    'hero.downloadCv': 'Download my CV',
    'hero.currentlyTitle': 'Currently',
    'hero.currentlyBody':
      'Master 1 – Networks (RES) at Sorbonne Université, focusing on network security and systems.',

    // projects
    'projects.title': 'Projects',
    'projects.intro':
      'A selection of projects that showcase my work in networking, automation, and systems programming.',

    // certifications
    'certs.title': 'Certifications',
    'certs.intro':
      'Cybersecurity certifications and hands-on paths such as TryHackMe, plus any future security certificates.',
    'certs.view': 'View certificate / profile',

    // studies
    'studies.title': 'Studies',
    'studies.intro':
      'Academic background and key programmes that shaped my skills.',

    // contact
    'contact.title': 'Contact',
    'contact.intro':
      'Interested in my work, looking for an intern, or just want to discuss networks and security?',
    'contact.emailLabel': 'Email',
    'contact.linksLabel': 'Links',
    'contact.github': 'GitHub',
    'contact.linkedin': 'LinkedIn',
    'contact.other': 'TryHackMe / other',

    // contact form
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your.email@example.com',
    'contact.form.messagePlaceholder': 'Write your message here…',
    'contact.form.submit': 'Send',
  },
};

const defaultLang = 'fr';
const storageKey = 'aeb-lang';

const getStoredLang = () => {
  if (typeof window === 'undefined') {
    return defaultLang;
  }
  const stored = window.localStorage.getItem(storageKey);
  return translations[stored] ? stored : defaultLang;
};

const LanguageContext = createContext({
  lang: defaultLang,
  setLang: () => {},
  t: (key) => translations[defaultLang][key] ?? key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getStoredLang);

  useEffect(() => {
    window.localStorage.setItem(storageKey, lang);
  }, [lang]);

  const t = (key) => translations[lang][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
