# PROMPT MAÎTRE — Refonte professionnelle du portfolio GitHub Wabtechs/mySite

## CONTEXTE

Tu dois reprendre et faire évoluer professionnellement le dépôt GitHub :

**Repository :** `Wabtechs/mySite`

Le portfolio actuellement publié est :

**Profile Développeur | Ingénieur EMMANUEL MULONDA Johannes**
https://wabtechs.github.io/mySite/

Le dépôt GitHub associé est :

**Wabtechs/mySite**
https://github.com/Wabtechs/mySite

> IMPORTANT : le lien du dépôt mentionné précédemment comme `wabtechs-cloud` correspond en réalité au dépôt `Wabtechs/mySite`. Ne crée donc pas de nouveau dépôt et ne travaille pas sur un autre repository.

---

# 1. OBJECTIF

Transformer complètement `Wabtechs/mySite` en un **portfolio professionnel personnel d'Emmanuel Mulonda Johannes**, tout en conservant une architecture technique volontairement simple.

Le résultat doit être suffisamment professionnel pour être présenté à :

* recruteurs ;
* clients ;
* entreprises ;
* partenaires ;
* organisations ;
* investisseurs ;
* institutions.

Le site doit présenter Emmanuel comme :

> **Ingénieur Informaticien · Software Engineer · Full-Stack Developer · Digital Solutions Builder**

Le site ne doit plus donner l'impression d'être un template générique.

---

# 2. RÈGLE ABSOLUE : ANALYSER AVANT DE MODIFIER

Avant toute modification :

1. analyser entièrement le dépôt ;
2. inspecter tous les fichiers ;
3. inspecter le HTML ;
4. inspecter les CSS existants ;
5. inspecter les JavaScript existants ;
6. inspecter les images/assets ;
7. identifier les bibliothèques utilisées ;
8. identifier les dépendances ;
9. identifier les liens internes ;
10. identifier les liens externes ;
11. identifier les contenus provenant du template ;
12. identifier les fonctionnalités existantes ;
13. identifier les éventuelles erreurs ;
14. vérifier la structure Git actuelle.

Ne supprime rien d'important sans comprendre son rôle.

Le CSS et le JavaScript existants doivent être **réutilisés, nettoyés et améliorés lorsque cela est pertinent**, plutôt que remplacés aveuglément.

---

# 3. TECHNOLOGIES À CONSERVER

Le projet doit rester simple.

Technologies autorisées :

* HTML5
* CSS3
* JavaScript Vanilla
* Bootstrap uniquement si déjà présent et réellement utile
* Font Awesome ou bibliothèque d'icônes légère déjà présente
* Google Fonts si nécessaire

Technologies interdites :

* React
* Next.js
* Vue
* Angular
* Svelte
* TypeScript
* Tailwind obligatoire
* Vite
* Webpack
* SPA complexe
* backend obligatoire
* framework frontend

Le site doit rester compatible avec :

**GitHub Pages**

et doit pouvoir fonctionner comme un site statique.

---

# 4. IDENTITÉ DU PORTFOLIO

Nom :

**Emmanuel Mulonda Johannes**

Titre principal :

**Ingénieur Informaticien · Software Engineer**

Positionnement secondaire :

**Full-Stack Developer · Digital Solutions Builder**

Description principale :

> Je conçois et développe des solutions numériques modernes pour les entreprises, organisations et institutions.

Le contenu doit être professionnel, crédible et factuel.

---

# 5. RÈGLE CRITIQUE — NE JAMAIS INVENTER

Ne jamais inventer :

* diplômes ;
* certifications ;
* entreprises ;
* clients ;
* témoignages ;
* statistiques ;
* années d'expérience ;
* fonctionnalités ;
* technologies utilisées sur un projet ;
* chiffres ;
* réalisations ;
* partenaires ;
* revenus ;
* utilisateurs ;
* projets terminés.

Si une information n'est pas confirmée dans le dépôt ou dans les informations disponibles :

```text
Projet en développement
```

ou :

```text
Informations détaillées à venir
```

Utiliser une formulation neutre plutôt que d'inventer.

---

# 6. ARCHITECTURE DU SITE

Transformer progressivement le site en architecture multi-pages.

Structure cible :

```text
mySite/
│
├── index.html
├── about.html
├── resume.html
├── skills.html
├── services.html
├── projects.html
├── project-bilengi.html
├── project-myeduc360.html
├── project-faktura.html
├── experience.html
├── blog.html
├── contact.html
│
├── components/
│   ├── header.html
│   └── footer.html
│
├── assets/
│   ├── css/
│   │   ├── style.css
│   │   ├── responsive.css
│   │   └── components.css
│   │
│   ├── js/
│   │   ├── main.js
│   │   ├── navigation.js
│   │   ├── theme.js
│   │   ├── projects.js
│   │   └── animations.js
│   │
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── logos/
│   │   └── general/
│   │
│   └── fonts/
│
├── blog/
│   ├── article-1.html
│   └── ...
│
├── favicon/
├── README.md
├── sitemap.xml
└── robots.txt
```

Tu peux adapter cette structure si l'analyse du dépôt montre qu'une autre organisation est plus propre.

Ne crée pas inutilement des fichiers.

---

# 7. PAGE D'ACCUEIL

La page `index.html` doit permettre de comprendre le profil en moins de 30 secondes.

Hero :

```text
Emmanuel Mulonda Johannes

Ingénieur Informaticien · Software Engineer
```

Description :

> Je conçois et développe des solutions numériques modernes pour les entreprises, organisations et institutions.

CTA :

```text
Voir mes projets
Télécharger mon CV
Me contacter
```

Le hero peut contenir :

* photo professionnelle si disponible ;
* présentation visuelle ;
* technologies ;
* aperçu de projets ;
* éléments graphiques sobres.

Éviter les animations excessives.

---

# 8. SECTION PROFIL

Ajouter une section courte :

## À propos

Présenter Emmanuel comme un ingénieur informaticien et développeur de solutions numériques.

Le discours doit mettre en avant :

* développement logiciel ;
* applications web ;
* systèmes de gestion ;
* digitalisation ;
* automatisation ;
* plateformes ;
* solutions business ;
* architecture ;
* intégration ;
* infrastructure.

CTA :

```text
Découvrir mon parcours
```

vers :

```text
about.html
```

---

# 9. PROJETS

Les projets doivent devenir une partie centrale du portfolio.

Créer :

```text
projects.html
```

Filtres JavaScript :

```text
Tous
Applications
Business
Education
Marketplace
ERP
Web
Infrastructure
```

Chaque projet doit présenter :

* image ;
* nom ;
* catégorie ;
* description ;
* technologies réellement utilisées ;
* statut ;
* lien vers la fiche détaillée.

---

# 10. BILENGI

Créer :

```text
project-bilengi.html
```

Titre :

**Bilengi Marketplace**

Catégorie :

**Marketplace / E-commerce**

Statut :

**En développement**

Description :

> Plateforme numérique destinée à connecter vendeurs et acheteurs autour de produits et services.

Présenter uniquement les fonctionnalités réellement confirmées dans le projet.

Exemples possibles uniquement lorsqu'ils sont confirmés :

* produits ;
* catalogue ;
* comptes utilisateurs ;
* vendeurs ;
* recherche ;
* commandes ;
* interface responsive.

Ne jamais transformer une fonctionnalité prévue en fonctionnalité terminée.

---

# 11. MYEDUC360

Créer :

```text
project-myeduc360.html
```

Titre :

**MyEduc360**

Catégorie :

**Education Management System**

Description :

> Solution numérique destinée à accompagner la gestion et la digitalisation des établissements scolaires.

Présenter les fonctionnalités réellement disponibles ou clairement prévues.

Domaines possibles :

* gestion des élèves ;
* gestion des enseignants ;
* gestion pédagogique ;
* documents pédagogiques ;
* administration scolaire ;
* suivi des activités.

---

# 12. FAKTURA

Créer :

```text
project-faktura.html
```

Titre :

**FAKTURA**

Catégorie :

**Invoicing / Business Management**

Description :

> Solution numérique de gestion destinée à simplifier la facturation et certaines opérations commerciales.

Ne présenter que les fonctionnalités réellement confirmées.

---

# 13. AUTRES PROJETS

Préparer une architecture extensible pour intégrer notamment, lorsqu'ils sont confirmés :

* VIRAZA ;
* Bilengi ;
* MyEduc360 ;
* FAKTURA ;
* Church Timer Pro ;
* MedInsight / MedInshart ;
* autres projets.

Ne pas fabriquer de contenu pour les projets dont les informations sont insuffisantes.

---

# 14. ABOUT

Créer :

```text
about.html
```

Sections :

### Qui suis-je ?

Présentation professionnelle.

### Mon parcours

Présenter le parcours connu sans inventer de dates.

### Ma vision

Présenter la volonté de créer des solutions numériques adaptées aux besoins des organisations et aux réalités locales.

### Ce que je construis

```text
Business
Education
Marketplace
Finance
Organisation
Digitalisation
Software
Infrastructure
```

---

# 15. RESUME

Créer :

```text
resume.html
```

Utiliser une timeline professionnelle.

Structure :

```text
Formation
    ↓
Premières expériences
    ↓
Développement logiciel
    ↓
Conception de solutions numériques
    ↓
Produits et plateformes
```

Ajouter le téléchargement du CV PDF si un vrai fichier CV existe.

Ne pas créer un faux CV.

---

# 16. SKILLS

Créer :

```text
skills.html
```

Catégories :

### Frontend

* HTML5
* CSS3
* JavaScript
* React
* Next.js

### Backend

* PHP
* Laravel
* Node.js
* REST API

### Databases

* MySQL
* MariaDB
* PostgreSQL

### DevOps / Infrastructure

* Linux
* Docker
* Nginx
* VPS
* Git
* GitHub

### Engineering

* Architecture logicielle
* API
* Sécurité
* Bases de données
* Déploiement
* Maintenance

IMPORTANT :

Ne pas utiliser de faux pourcentages :

```text
JavaScript 95%
React 92%
```

Préférer :

* technologies ;
* contexte d'utilisation ;
* niveau qualitatif lorsqu'il est justifié.

---

# 17. SERVICES

Créer :

```text
services.html
```

Présenter uniquement des services cohérents avec le profil :

### Développement logiciel

Applications web et solutions métier.

### Digitalisation

Transformation de processus manuels en solutions numériques.

### Applications de gestion

ERP, facturation, gestion scolaire et gestion commerciale.

### Développement de plateformes

Marketplace, plateformes web et portails.

### Infrastructure

Déploiement, Linux, Docker, Nginx et environnement serveur.

### Maintenance & évolution

Correction, amélioration et évolution de solutions existantes.

---

# 18. EXPERIENCE

Créer :

```text
experience.html
```

Présenter l'expérience sous forme de timeline.

Utiliser des descriptions factuelles.

Ne pas inventer d'employeurs ou de dates.

---

# 19. BLOG

Créer :

```text
blog.html
```

Catégories :

* Développement ;
* Technologie ;
* Infrastructure ;
* Digitalisation ;
* Entrepreneuriat numérique ;
* Réflexions.

Préparer une structure permettant d'ajouter des articles HTML ultérieurement.

---

# 20. CONTACT

Créer :

```text
contact.html
```

Afficher les coordonnées réellement disponibles.

Prévoir :

* email ;
* téléphone si confirmé ;
* localisation générale ;
* GitHub ;
* LinkedIn ;
* autres réseaux professionnels.

Créer un formulaire esthétique.

Comme le site est statique :

* utiliser `mailto:` si pertinent ;
* ou indiquer clairement qu'un backend/service externe devra être connecté.

Ne jamais prétendre que le formulaire est connecté à un backend inexistant.

---

# 21. HEADER

Créer une navigation commune :

```text
Home
About
Resume
Skills
Services
Projects
Blog
Contact
```

Fonctionnalités :

* responsive ;
* menu mobile ;
* page active ;
* CTA ;
* navigation accessible.

---

# 22. FOOTER

Créer un footer professionnel :

```text
Emmanuel Mulonda Johannes

Ingénieur Informaticien
Software Engineer & Digital Solutions Builder

Navigation
Projects
Services
About
Contact

GitHub
LinkedIn
Email

© 2026 Emmanuel Mulonda Johannes
```

Ne jamais ajouter de faux liens.

---

# 23. CSS — TRAVAIL DE DÉVELOPPEUR PROFESSIONNEL

IMPORTANT :

Le CSS existant du projet doit être **analysé puis amélioré sérieusement**.

Ne pas simplement créer un nouveau CSS par-dessus l'ancien.

Objectifs :

* supprimer les doublons ;
* supprimer les styles inutilisés ;
* améliorer la nomenclature ;
* centraliser les variables ;
* améliorer les composants ;
* améliorer le responsive ;
* améliorer les états hover/focus ;
* améliorer les espacements ;
* améliorer la typographie ;
* améliorer les cartes ;
* améliorer les boutons ;
* améliorer les formulaires ;
* améliorer les transitions ;
* conserver une architecture compréhensible.

Créer si nécessaire :

```text
style.css
components.css
responsive.css
```

Design system centralisé :

```css
:root {
    --primary: ...;
    --secondary: ...;
    --background: ...;
    --surface: ...;
    --text: ...;
    --muted: ...;
    --border: ...;
    --radius: 14px;
    --shadow: ...;
}
```

Éviter les couleurs dispersées dans tout le projet.

---

# 24. JAVASCRIPT — VANILLA JS PROFESSIONNEL

Le JavaScript doit rester simple.

Créer ou améliorer :

```text
main.js
navigation.js
theme.js
projects.js
animations.js
```

Fonctionnalités :

* menu mobile ;
* navigation ;
* thème ;
* filtres projets ;
* animations ;
* interactions ;
* validation frontend ;
* éventuelles modales.

Éviter les dépendances inutiles.

Le JavaScript doit être :

* lisible ;
* modulaire ;
* robuste ;
* commenté uniquement lorsque nécessaire ;
* sans code mort ;
* sans duplication inutile.

---

# 25. DARK MODE

Implémenter :

```text
Light
Dark
```

avec CSS variables + Vanilla JS.

Utiliser :

```javascript
localStorage
```

Le choix doit être conservé après rechargement.

Prévoir également une bonne gestion de :

```css
prefers-color-scheme
```

si cela améliore l'expérience.

---

# 26. RESPONSIVE

Tester au minimum :

```text
320px
375px
425px
768px
1024px
1440px
```

Vérifier :

* navigation ;
* hero ;
* images ;
* cartes ;
* textes ;
* boutons ;
* footer ;
* formulaires ;
* grilles.

Aucun débordement horizontal.

---

# 27. ACCESSIBILITÉ

Respecter autant que possible :

* HTML sémantique ;
* `alt` ;
* labels ;
* contraste ;
* navigation clavier ;
* focus visible ;
* boutons accessibles ;
* `aria-label` lorsque nécessaire ;
* structure correcte des headings.

---

# 28. SEO

Chaque page doit avoir :

```html
<title>
<meta name="description">
<meta name="author">
<meta name="viewport">
```

Exemple :

```text
Emmanuel Mulonda Johannes | Ingénieur Informaticien & Software Engineer
```

Projet :

```text
Bilengi Marketplace | Emmanuel Mulonda Johannes
```

Créer :

```text
sitemap.xml
robots.txt
```

Utiliser les bonnes URLs GitHub Pages.

---

# 29. PERFORMANCE

Optimiser :

* images ;
* dimensions ;
* lazy loading ;
* CSS ;
* JavaScript ;
* fonts ;
* ressources inutilisées.

Éviter les bibliothèques inutiles.

Le site doit rester performant sur une connexion Internet moyenne.

---

# 30. HEADER / FOOTER PARTAGÉS

Tu peux utiliser :

```html
<div id="site-header"></div>
<div id="site-footer"></div>
```

avec JavaScript.

Mais attention :

`fetch()` peut ne pas fonctionner correctement lorsque les fichiers sont ouverts directement via :

```text
file://
```

La priorité est donc :

**GitHub Pages**

Si une architecture avec composants externes rend le site fragile, utiliser une autre stratégie simple et fiable.

Ne pas sacrifier la compatibilité GitHub Pages pour éviter quelques lignes de duplication.

---

# 31. NETTOYAGE DU TEMPLATE

Inspecter l'ancien portfolio et supprimer/remplacer :

* textes génériques ;
* faux témoignages ;
* faux clients ;
* faux projets ;
* fausses statistiques ;
* logos inutiles ;
* images de démonstration ;
* liens morts ;
* liens vers des sites sans rapport ;
* contenus de démonstration ;
* informations inventées.

Tout contenu non lié à Emmanuel doit être supprimé ou remplacé.

---

# 32. VÉRIFICATION DES LIENS

Tester systématiquement :

```text
index.html
    ↓
about.html
resume.html
skills.html
services.html
projects.html
blog.html
contact.html
```

Tester également :

```text
projects.html
    ↓
project-bilengi.html
project-myeduc360.html
project-faktura.html
```

Aucun lien inutile ne doit pointer vers :

```text
#
javascript:void(0)
```

sauf lorsqu'il s'agit réellement d'une interaction JavaScript.

---

# 33. README

Réécrire complètement le :

```text
README.md
```

Il doit expliquer :

* le projet ;
* son objectif ;
* le propriétaire ;
* les technologies ;
* l'architecture ;
* les pages ;
* le fonctionnement ;
* GitHub Pages ;
* la structure des dossiers ;
* le développement local ;
* les règles de contribution éventuelles.

Le README doit être professionnel et cohérent avec le portfolio réel.

Ne pas décrire des fonctionnalités qui n'existent pas.

---

# 34. VÉRIFICATION TECHNIQUE

Avant de considérer le projet comme terminé :

### HTML

Vérifier :

* balises ;
* structure ;
* chemins ;
* liens ;
* images ;
* attributs alt.

### CSS

Vérifier :

* erreurs ;
* doublons ;
* responsive ;
* variables ;
* styles inutilisés.

### JavaScript

Vérifier :

* erreurs console ;
* sélecteurs ;
* événements ;
* localStorage ;
* navigation ;
* filtres.

### Assets

Vérifier :

* images manquantes ;
* fichiers inutilisés ;
* chemins incorrects ;
* tailles excessives.

---

# 35. TEST GITHUB PAGES

Le site doit être testé comme un véritable site GitHub Pages.

URL cible :

```text
https://wabtechs.github.io/mySite/
```

Vérifier notamment :

* page d'accueil ;
* navigation ;
* CSS ;
* JavaScript ;
* images ;
* pages secondaires ;
* liens ;
* assets ;
* responsive ;
* dark mode.

Attention aux chemins relatifs.

Le site doit fonctionner sous :

```text
/mySite/
```

et non uniquement à la racine `/`.

---

# 36. GIT — TRAVAIL PROPRE

IMPORTANT :

Ne pousse jamais directement des modifications non vérifiées.

Procédure :

```text
1. Inspecter
2. Modifier
3. Tester
4. Vérifier git diff
5. Vérifier git status
6. Corriger
7. Tester encore
8. Commit
9. Push
10. Vérifier le dépôt distant
```

Avant le commit :

```bash
git status
git diff
```

Le commit doit être propre et descriptif.

Exemple :

```text
feat(portfolio): redesign personal developer portfolio
```

Ne pas utiliser un message vague comme :

```text
update
changes
fix
test
```

---

# 37. GITHUB — ATTENTION À LA SÉCURITÉ

Avant `push` :

Vérifier qu'aucune donnée sensible n'est présente :

```text
.env
.env.local
API keys
tokens
passwords
private credentials
secret keys
```

Ne jamais pousser de secrets.

Vérifier également :

```bash
git status
git diff --cached
```

avant le commit.

---

# 38. COMMIT ET PUSH

Une fois que :

* le code est stable ;
* les pages fonctionnent ;
* le responsive est correct ;
* les liens sont vérifiés ;
* les erreurs console sont corrigées ;
* les assets fonctionnent ;
* le README est mis à jour ;
* aucune donnée sensible n'est présente ;

alors seulement :

```bash
git add .
git commit -m "feat(portfolio): redesign personal developer portfolio"
git push
```

Respecter la branche existante du dépôt.

Ne pas créer une nouvelle branche inutilement si la branche de travail actuelle est clairement la branche de déploiement.

---

# 39. VÉRIFICATION POST-PUSH

Après le push :

1. vérifier le commit distant ;
2. vérifier GitHub Pages ;
3. vérifier que le site se charge ;
4. vérifier les chemins ;
5. vérifier les images ;
6. vérifier CSS ;
7. vérifier JavaScript ;
8. vérifier navigation ;
9. vérifier mobile ;
10. vérifier dark mode.

Si GitHub Pages nécessite quelques instants pour se redéployer, attendre puis vérifier à nouveau.

---

# 40. CRITÈRE FINAL DE QUALITÉ

Le portfolio final doit communiquer clairement :

```text
Emmanuel Mulonda Johannes
        ↓
Ingénieur Informaticien
        ↓
Software Engineer
        ↓
Full-Stack Developer
        ↓
Digital Solutions Builder
        ↓
Solutions numériques
        ├── Business
        ├── Education
        ├── Marketplace
        ├── Finance
        ├── Digitalisation
        ├── Software
        └── Infrastructure
```

En moins de 30 secondes, le visiteur doit comprendre :

1. qui est Emmanuel ;
2. ce qu'il fait ;
3. ce qu'il construit ;
4. ses principaux projets ;
5. ses technologies ;
6. comment le contacter.

---

# 41. PHILOSOPHIE DU PROJET

Le principe directeur est :

> **Simple dans la technologie, professionnel dans le résultat.**

Ne transforme pas ce portfolio en framework.

Ne crée pas une architecture inutilement complexe.

Utilise au maximum les fondations existantes du projet lorsque celles-ci sont bonnes.

**Améliore le CSS et le JavaScript existants comme le ferait un développeur professionnel : refactorisation, nettoyage, composants réutilisables, responsive, accessibilité, performance et maintenabilité.**

Le résultat doit être :

* moderne ;
* élégant ;
* crédible ;
* rapide ;
* responsive ;
* accessible ;
* SEO-friendly ;
* maintenable ;
* fidèle à Emmanuel ;
* compatible GitHub Pages.

---

# 42. INSTRUCTION FINALE

Commence par **inspecter entièrement `Wabtechs/mySite`**.

Ne fais aucune modification avant cette analyse.

Ensuite, exécute la refonte progressivement.

À chaque étape, privilégie :

**qualité > quantité**

**simplicité > complexité**

**réalité > marketing**

**maintenabilité > effets visuels**

Une fois la refonte terminée, effectue une vérification complète.

Puis :

```text
git status
git diff
tests
git add
git commit
git push
```

Enfin, vérifie que le portfolio publié fonctionne réellement sur :

**https://wabtechs.github.io/mySite/**

et que le dépôt distant :

**https://github.com/Wabtechs/mySite**

contient bien la version finale stable.

Ne déclare jamais le travail terminé si le site contient encore des erreurs évidentes, des liens cassés, du contenu fictif ou des éléments provenant du template original.
