## Test technique

### Rappel des consignes

```
Développer une interface capable de lister des messages. Elle permettra également de remplir un message pour le poster.

Un message est composé d’un texte et d’un champ précisant s’il est privé ou public.

L’approche doit être API centrique, mais il n’est pas nécessaire de développer les API pour le test. Des données statiques seront suffisantes pour peupler les pages.

Votre développement doit pouvoir être repris facilement par un autre membre de l’équipe, il doit disposer de tous les éléments pour comprendre votre travail facilement.

Vous devez prendre les meilleures dispositions pour garantir la qualité et le fonctionnement de votre livrable.

Merci de nous déposer le code sur un repository de votre choix qui soit accessible afin que nous puissions le regarder.
```

### Commentaires

Le projet à été créé en utilisant `create-react-app` (readme officiel à la suite).
J'utilise la convention de `Prettier` pour le formatage de mon code (non présent dans un git action, donc à ajouter dans votre éditeur).

Le projet est composé de deux composants simple `MessagesList` et `MessageInput`, le premier servant à afficher les messages, le deuxieme à en poster un nouveau. Chaque composant contient des tests de regression basique dans leurs fichiers de test associé `Composant.test.js`.

Le HOC `App` sert d'interface de control de donnée afin de faire appel à l'API. J'ai fait le choix de garder les composants sans logique afin de maximiser leurs réutilisabilité.
L'usage des Hook `useReducer` et `useContext`, m'a paru de trop pour l'exercice demandé, et dans le cas présent `useState` remplis les fonctions attendu en gardant un code simple.

### Readme de create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
