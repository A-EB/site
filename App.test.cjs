var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/App.jsx
var App_exports = {};
__export(App_exports, {
  default: () => App_default
});
module.exports = __toCommonJS(App_exports);

// src/i18n.jsx
var import_react = require("react");
var LanguageContext = (0, import_react.createContext)();
var translations = {
  fr: {
    // navbar
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "nav.studies": "\xC9tudes",
    "nav.contact": "Contact",
    // hero
    "hero.kicker": "Cybers\xE9curit\xE9 & R\xE9seaux",
    "hero.title": "A. EB \u2014 je construis des outils pratiques pour les r\xE9seaux et la s\xE9curit\xE9.",
    "hero.subtitle": "\xC9tudiant en Master r\xE9seaux et cybers\xE9curit\xE9, je travaille sur des projets concrets allant du bas niveau r\xE9seau \xE0 l'automatisation.",
    "hero.viewProjects": "Voir les projets",
    "hero.contactMe": "Me contacter",
    "hero.currentlyTitle": "Actuellement",
    "hero.currentlyBody": "Master 1 \u2013 R\xE9seaux (RES) \xE0 Sorbonne Universit\xE9, avec un focus sur la s\xE9curit\xE9 des r\xE9seaux et les syst\xE8mes.",
    // projects
    "projects.title": "Projets",
    "projects.intro": "Une s\xE9lection de projets qui illustrent mon travail en r\xE9seaux, automatisation et programmation syst\xE8me.",
    // studies
    "studies.title": "\xC9tudes",
    "studies.intro": "Parcours acad\xE9mique et programmes cl\xE9s qui ont structur\xE9 mes comp\xE9tences.",
    // contact
    "contact.title": "Contact",
    "contact.intro": "Int\xE9ress\xE9 par mon travail, \xE0 la recherche d\u2019un stagiaire, ou envie de discuter r\xE9seaux et s\xE9curit\xE9 ?",
    "contact.emailLabel": "Email",
    "contact.linksLabel": "Liens",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.other": "TryHackMe / autres"
  },
  en: {
    // navbar
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.studies": "Studies",
    "nav.contact": "Contact",
    // hero
    "hero.kicker": "Cybersecurity & Networks",
    "hero.title": "A. EB \u2014 building practical tools for networks and security.",
    "hero.subtitle": "I am a Master student in networks and cybersecurity, working on hands-on projects from low-level networking to automation tools.",
    "hero.viewProjects": "View projects",
    "hero.contactMe": "Contact me",
    "hero.currentlyTitle": "Currently",
    "hero.currentlyBody": "Master 1 \u2013 Networks (RES) at Sorbonne Universit\xE9, focusing on network security and systems.",
    // projects
    "projects.title": "Projects",
    "projects.intro": "A selection of projects that showcase my work in networking, automation, and systems programming.",
    // studies
    "studies.title": "Studies",
    "studies.intro": "Academic background and key programmes that shaped my skills.",
    // contact
    "contact.title": "Contact",
    "contact.intro": "Interested in my work, looking for an intern, or just want to discuss networks and security?",
    "contact.emailLabel": "Email",
    "contact.linksLabel": "Links",
    "contact.github": "GitHub",
    "contact.linkedin": "LinkedIn",
    "contact.other": "TryHackMe / other"
  }
};
function LanguageProvider({ children }) {
  const [lang, setLang] = (0, import_react.useState)("fr");
  const t = (key) => translations[lang][key] ?? key;
  return /* @__PURE__ */ React.createElement(LanguageContext.Provider, { value: { lang, setLang, t } }, children);
}
function useLanguage() {
  return (0, import_react.useContext)(LanguageContext);
}

// src/components/Navbar.jsx
var sections = [
  { id: "home", labelKey: "nav.home" },
  { id: "projects", labelKey: "nav.projects" },
  { id: "studies", labelKey: "nav.studies" },
  { id: "contact", labelKey: "nav.contact" }
];
function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const handleChangeLang = (value) => {
    setLang(value);
  };
  return /* @__PURE__ */ React.createElement("header", { className: "navbar" }, /* @__PURE__ */ React.createElement("div", { className: "navbar-inner" }, /* @__PURE__ */ React.createElement("a", { href: "#home", className: "logo" }, "A EB"), /* @__PURE__ */ React.createElement("nav", { className: "nav-links" }, sections.map((section) => /* @__PURE__ */ React.createElement("a", { key: section.id, href: `#${section.id}`, className: "nav-link" }, t(section.labelKey)))), /* @__PURE__ */ React.createElement("div", { className: "lang-switcher" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: `lang-btn ${lang === "fr" ? "active" : ""}`,
      onClick: () => handleChangeLang("fr")
    },
    "FR"
  ), /* @__PURE__ */ React.createElement("span", { className: "lang-separator" }, "/"), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: `lang-btn ${lang === "en" ? "active" : ""}`,
      onClick: () => handleChangeLang("en")
    },
    "EN"
  ))));
}
var Navbar_default = Navbar;

// src/components/Hero.jsx
function Hero() {
  const { t } = useLanguage();
  return /* @__PURE__ */ React.createElement("section", { id: "home", className: "section hero" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner hero-inner" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "hero-kicker" }, t("hero.kicker")), /* @__PURE__ */ React.createElement("h1", { className: "hero-title" }, t("hero.title")), /* @__PURE__ */ React.createElement("p", { className: "hero-subtitle" }, t("hero.subtitle")), /* @__PURE__ */ React.createElement("div", { className: "hero-actions" }, /* @__PURE__ */ React.createElement("a", { href: "#projects", className: "btn primary" }, t("hero.viewProjects")), /* @__PURE__ */ React.createElement("a", { href: "#contact", className: "btn secondary" }, t("hero.contactMe")))), /* @__PURE__ */ React.createElement("div", { className: "hero-side" }, /* @__PURE__ */ React.createElement("div", { className: "hero-card" }, /* @__PURE__ */ React.createElement("p", { className: "hero-side-title" }, t("hero.currentlyTitle")), /* @__PURE__ */ React.createElement("p", { className: "hero-side-text" }, t("hero.currentlyBody"))))));
}
var Hero_default = Hero;

// src/data/projects.js
var projects = [
  {
    id: "notion-food-tracker",
    title: "Notion Food Tracker Automation",
    period: "2024",
    stack: ["Python", "Notion API", "OpenFoodFacts"],
    description: "Script that syncs nutritional data from OpenFoodFacts into a Notion database to track macros and meals automatically.",
    links: {
      github: "#",
      demo: null
    }
  },
  {
    id: "udp-ping-tool",
    title: "Custom UDP Ping Tool",
    period: "2024",
    stack: ["Python", "Sockets", "Wireshark"],
    description: "Network measurement tool to send UDP probes, log RTT, and analyze packet loss, used for university lab work.",
    links: {
      github: "#",
      demo: null
    }
  },
  {
    id: "cpp-hashmap",
    title: "C++ Concurrent HashMap",
    period: "2023",
    stack: ["C++", "Threads", "Mutex/Atomic"],
    description: "High-performance concurrent HashMap implementation with different synchronization strategies and benchmarking.",
    links: {
      github: "#",
      demo: null
    }
  }
];

// src/components/ProjectsSection.jsx
function ProjectsSection() {
  const { t } = useLanguage();
  return /* @__PURE__ */ React.createElement("section", { id: "projects", className: "section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t("projects.title")), /* @__PURE__ */ React.createElement("p", { className: "section-intro" }, t("projects.intro")), /* @__PURE__ */ React.createElement("div", { className: "projects-grid" }, projects.map((project) => /* @__PURE__ */ React.createElement("article", { key: project.id, className: "project-card" }, /* @__PURE__ */ React.createElement("div", { className: "project-header" }, /* @__PURE__ */ React.createElement("h3", { className: "project-title" }, project.title), /* @__PURE__ */ React.createElement("span", { className: "project-period" }, project.period)), /* @__PURE__ */ React.createElement("p", { className: "project-description" }, project.description), /* @__PURE__ */ React.createElement("div", { className: "project-tags" }, project.stack.map((tag) => /* @__PURE__ */ React.createElement("span", { key: tag, className: "tag" }, tag))), /* @__PURE__ */ React.createElement("div", { className: "project-links" }, project.links.github && /* @__PURE__ */ React.createElement(
    "a",
    {
      href: project.links.github,
      target: "_blank",
      rel: "noreferrer",
      className: "link"
    },
    "GitHub"
  ), project.links.demo && /* @__PURE__ */ React.createElement(
    "a",
    {
      href: project.links.demo,
      target: "_blank",
      rel: "noreferrer",
      className: "link"
    },
    "Demo"
  )))))));
}
var ProjectsSection_default = ProjectsSection;

// src/data/studies.js
var studies = [
  {
    id: "m1-res",
    title: "Master 1 \u2013 R\xE9seaux : Internet, Cybers\xE9curit\xE9, Cloud et Automatisation (RES)",
    institution: "Sorbonne Universit\xE9",
    period: "2024\u20132025",
    details: [
      "Core modules: networks, security, systems, programming, cloud.",
      "Projects in network programming, distributed systems, and cybersecurity."
    ]
  },
  {
    id: "licence-info",
    title: "Licence Informatique",
    institution: "Sorbonne Universit\xE9",
    period: "2021\u20132024",
    details: [
      "Strong foundations in algorithms, systems, and software engineering.",
      "Multiple programming projects in C++, Python, and web technologies."
    ]
  }
];

// src/components/StudiesSection.jsx
function StudiesSection() {
  const { t } = useLanguage();
  return /* @__PURE__ */ React.createElement("section", { id: "studies", className: "section alt" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t("studies.title")), /* @__PURE__ */ React.createElement("p", { className: "section-intro" }, t("studies.intro")), /* @__PURE__ */ React.createElement("div", { className: "timeline" }, studies.map((item) => /* @__PURE__ */ React.createElement("article", { key: item.id, className: "timeline-item" }, /* @__PURE__ */ React.createElement("div", { className: "timeline-dot" }), /* @__PURE__ */ React.createElement("div", { className: "timeline-content" }, /* @__PURE__ */ React.createElement("h3", { className: "timeline-title" }, item.title), /* @__PURE__ */ React.createElement("p", { className: "timeline-meta" }, item.institution, " \u2022 ", item.period), /* @__PURE__ */ React.createElement("ul", { className: "timeline-details" }, item.details.map((detail, idx) => /* @__PURE__ */ React.createElement("li", { key: idx }, detail)))))))));
}
var StudiesSection_default = StudiesSection;

// src/components/ContactSection.jsx
function ContactSection() {
  const { t } = useLanguage();
  return /* @__PURE__ */ React.createElement("section", { id: "contact", className: "section" }, /* @__PURE__ */ React.createElement("div", { className: "section-inner" }, /* @__PURE__ */ React.createElement("h2", { className: "section-title" }, t("contact.title")), /* @__PURE__ */ React.createElement("p", { className: "section-intro" }, t("contact.intro")), /* @__PURE__ */ React.createElement("div", { className: "contact-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "contact-label" }, t("contact.emailLabel")), /* @__PURE__ */ React.createElement("a", { href: "mailto:your.email@example.com", className: "link" }, "your.email@example.com")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "contact-label" }, t("contact.linksLabel")), /* @__PURE__ */ React.createElement("ul", { className: "contact-links" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "link", target: "_blank", rel: "noreferrer" }, t("contact.github"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "link", target: "_blank", rel: "noreferrer" }, t("contact.linkedin"))), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("a", { href: "#", className: "link", target: "_blank", rel: "noreferrer" }, t("contact.other"))))))));
}
var ContactSection_default = ContactSection;

// src/App.jsx
function App() {
  return /* @__PURE__ */ React.createElement(LanguageProvider, null, /* @__PURE__ */ React.createElement("div", { className: "app" }, /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Hero_default, null), /* @__PURE__ */ React.createElement(ProjectsSection_default, null), /* @__PURE__ */ React.createElement(StudiesSection_default, null), /* @__PURE__ */ React.createElement(ContactSection_default, null))));
}
var App_default = App;
