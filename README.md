# Site Portfolio

Un site portfolio moderne et responsive développé avec **React** et **Vite**.  
Il présente mes projets, mes compétences, mon expérience, et inclut des éléments visuels interactifs inspirés du réseau et de la cybersécurité.

## Fonctionnalités

- Chargement très rapide (Vite)
- Design entièrement responsive
- Animations fluides et transitions propres
- Liste de projets avec liens GitHub intégrés
- Composants interactifs personnalisés (thème réseau/cybersécurité)
- Formulaire de contact via Formspree (sans backend)
- Facile à modifier et étendre

## Technologies

- React  
- Vite  
- JavaScript (ES6+)  
- CSS  
- Formspree (formulaire de contact)

## Installation

Cloner le dépôt puis installer les dépendances :

```bash
git clone https://github.com/A-EB/portfolio-site.git
cd portfolio-site
npm install
npm run dev
```

Build

npm run build

Déploiement

Le site peut être déployé sur :

    Vercel

    Netlify

    GitHub Pages

    Cloudflare Pages

Exemple (GitHub Pages) :

npm run build

Puis pousser le dossier dist/ vers la branche gh-pages ou utiliser une GitHub Action dédiée.
Structure du projet

src/
  components/
  sections/
  assets/
  constants/
  styles/
  App.jsx
  main.jsx

public/

Personnalisation

    Modifier les projets dans src/constants/projects.js

    Mettre à jour les liens sociaux dans src/constants/index.js

    Adapter le style dans src/styles/

    Ajouter vos propres animations ou composants dans src/components/

Licence

Projet distribué sous licence MIT.
