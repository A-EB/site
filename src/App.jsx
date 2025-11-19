// src/App.jsx

import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import StudiesSection from './components/StudiesSection';
import ContactSection from './components/ContactSection';
import CertificationsSection from './components/CertificationsSection';
import { LanguageProvider } from './i18n.jsx';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <ProjectsSection />
          <StudiesSection />
          <CertificationsSection />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
