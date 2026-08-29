# mySite — Portfolio d'Emmanuel Mulonda Johannes

Portfolio professionnel personnel d'**Emmanuel Mulonda Johannes**.

> Ingénieur Informaticien · Software Engineer · Full-Stack Developer · Digital Solutions Builder

Site statique, hébergé sur [GitHub Pages](https://wabtechs.github.io/mySite/).

## Objectif

Présenter Emmanuel de manière professionnelle et crédible à destination des recruteurs, clients, entreprises, partenaires, organisations et institutions. Pas de contenu inventé : seules les informations confirmées sont affichées.

## Technologies

- **HTML5**
- **CSS3** (design system via variables CSS)
- **JavaScript Vanilla** (thème clair/sombre, navigation, filtres de projets)
- **Bootstrap** (grille responsive existante)
- **Font Awesome** (icônes)
- **jQuery + petits plugins** conservés du template existant (isotope pour les filtres, wow pour les animations, slick pour les carrousels)

Compatibilité **GitHub Pages** garantie (chemins relatifs, site déployé sous `/mySite/`).

## Architecture

```
mySite/
│
├── index.html              → Accueil (hero, à propos, services, projets, contact)
├── about.html              → À propos (vision, domaines)
├── resume.html             → Parcours (formation, expériences)
├── experience.html         → Expérience professionnelle (timeline)
├── skills.html             → Compétences par catégorie
├── services.html           → Services
├── projects.html           → Projets + filtres
├── project-bilengi.html    → Fiche projet Bilengi Marketplace
├── project-myeduc360.html  → Fiche projet MyEduc360
├── project-faktura.html    → Fiche projet FAKTURA
├── blog.html               → Blog (en préparation)
├── contact.html            → Contact (mailto)
├── 404.html                → Page d'erreur
│
├── assets/
│   ├── css/                → style.css (template), theme.css (design system), libs
│   ├── js/                 → script.js (template), theme.js, navigation.js, libs
│   ├── images/             → photos, projets, logos, icônes
│   └── fonts/              → polices
│
├── README.md
├── sitemap.xml
└── robots.txt
```

## Pages principales

| Page       | Rôle                                            |
|------------|-------------------------------------------------|
| index.html | Comprendre le profil en moins de 30 secondes     |
| projects   | Bilengi, MyEduc360, FAKTURA (statut : en développement) |
| skills     | Frontend, Backend, BDD, DevOps/Infra, Ingénierie |
| services   | Développement, digitalisation, gestion, plateformes, infra, maintenance |

## Fonctionnement

- **Navigation** : barre commune sur toutes les pages, menu mobile, lien actif mis en évidence par `navigation.js`.
- **Thème clair / sombre** : bouton dédié ; le choix est enregistré dans `localStorage` et respecte `prefers-color-scheme`.
- **Filtres de projets** : tri par catégorie via Isotope (Tous, Applications, Business, Education, Marketplace, ERP, Web, Infrastructure).
- **Contact** : site statique — le formulaire ouvre le client mail via `mailto:`. Un backend/service externe pourra être connecté ultérieurement.

## Développement local

Ouvrez simplement les fichiers HTML dans un navigateur, ou lancez un serveur statique :

```bash
# Python
python -m http.server

# Node
npx serve
```

Puis ouvrez `http://localhost:8000` (ou l'URL affichée).

> Note : le thème et la navigation reposent sur JavaScript. À l'ouverture directe en `file://`, la plupart des fonctionnalités fonctionnent, mais un serveur HTTP est recommandé pour une expérience complète.

## Déploiement (GitHub Pages)

Le site est publié depuis la branche de déploiement du dépôt [Wabtechs/mySite](https://github.com/Wabtechs/mySite).

URL publiée : **https://wabtechs.github.io/mySite/**

## Bonnes pratiques appliquées

- Contenu factuel uniquement (aucune donnée inventée)
- HTML sémantique, `alt`, labels, focus visible, navigation clavier
- SEO : titre, meta description/author/viewport par page, `sitemap.xml`, `robots.txt`
- Responsive : vérifié de 320px à 1440px
- Performance : JS/CSS minimisés autant que possible, images locales

## Licence

Ce dépôt est un portfolio personnel. Contenu et design © Emmanuel Mulonda Johannes.
