# 🎬 World Movies Finder 🎬

## Technos utilisées 👨‍💻

ReactJS, Typescript

## Librairies utilisée(s) 👨‍💻

react-select

## C'est quoi ce projet ❓

**World Movies Finder** est une application web que j'ai du faire pour un test. Je vous le partage pour peut être vous inspirer ou vous aider ! J'ai commenté la plupart des fonctions et hook afin de vous aider à mieux comprendre ! Si vous avez des questions n'hésitez pas à me contacter.

## Fonctionnalités 🛠️

- **Pagination** : Parcourez la liste des films avec des options de pagination pour naviguer facilement à travers les pages.
- **Sélection du nombre de films par page** : Choisissez combien de films vous souhaitez afficher par page (4, 8 ou 12 films).
- **Filtrage par catégories** : Filtrez les films en fonction des catégories sélectionnées pour afficher uniquement ceux qui vous intéressent.
- **Interaction avec les films** :
  - **Like/Dislike** : Cliquez pour liker ou disliker un film.
  - **Suppression** : Supprimez des films de la liste.
  - **Affichage des détails** : Affichez un résumé détaillé du film en cliquant sur son image.

## Installation 🔃

### Prérequis

- [Node.js](https://nodejs.org/en/) (version 14 ou plus récente)
- [npm](https://www.npmjs.com/)

### Étapes d'installation

1. Clonez le dépôt :

   ```bash
   gh repo clone Daiiruin/world-movies-finder
   ```

2. Accédez au dossier du projet :

   ```bash
   cd world-movies-finder
   ```

3. Installez les dépendances du projet :

   ```bash
   npm install
   ```

4. Lancez l'application en mode développement :

   ```bash
   npm run dev
   ```

5. Ouvrez votre navigateur et accédez à `http://localhost:5173` pour voir l'application.

## Utilisation 💡

Une fois l'application lancée, vous pouvez interagir avec la liste des films en utilisant les différentes fonctionnalités cités précédemments.

## Structure du projet 🧱

```bash
world-movies-finder/
├── src/
│   ├── components/
│   │   └── BackgroundDecoration/  # Background qu'on retrouve sur le site
│   │   └── MovieCard/  # Composant d'affichage individuel d'un film
│   │   └── WelcomeText/  # Ecran de bienvenu
│   ├── data/
│   │   ├── Etude-de-cas-front-movies-data.js  # Données des films
│   │   └── movies-types.ts  # TypeScript types pour les films
│   ├── icons/  # Dossier contenant les icônes
│   ├── styles/
│   │   └── _variables.scss  # Couleurs du site
│   ├── App.tsx  # Composant principal de l'application
│   ├── index.tsx  # Point d'entrée de l'application
│   └── ...
└── package.json
└── ...
```

## Technologies utilisées 👨‍💻

- **React.js** : Bibliothèque JavaScript pour construire l'interface utilisateur.
- **TypeScript** : Superset JavaScript pour ajouter des types statiques.
- **React Select** : Composant pour créer des menus déroulants personnalisables.
- **SCSS** : Préprocesseur CSS pour des styles modulaire et réutilisables.

## Contribuer 🆘

Les contributions sont les bienvenues ! Si vous avez des idées d'amélioration ou des correctifs, veuillez suivre les étapes suivantes :

1. Forkez le dépôt.
2. Créez une nouvelle branche pour votre fonctionnalité (`git checkout -b feature/ma-nouvelle-fonctionnalité`).
3. Effectuez vos modifications et committez (`git commit -m 'Ajoute ma nouvelle fonctionnalité'`).
4. Poussez vers votre branche (`git push origin feature/ma-nouvelle-fonctionnalité`).
5. Ouvrez une Pull Request sur GitHub.

## Auteur 👦

Daiiruin (Arsène)
