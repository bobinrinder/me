# Robin Binder - Portfolio

I always struggled building my own portfolio, so if you want to use this as a base or even just pieces of it, go ahead. A mention with a backlink somewhere would be nice though. And maybe remove my copy and assets.

## 🚀 Quick start

1.  **Pre-Conditions.**

    The contact form is setup to use [Netlify Forms](https://www.netlify.com/products/forms/).

    For optimal performance this setup uses [Cloudinary](https://cloudinary.com/) for image delivery.

1.  **Setup.**

    Clone the repo and install the libraries.

    ```shell
    git clone git@github.com:bobinrinder/me.git
    cd me/
    yarn
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    yarn dev
    ```

1.  **Open the source code and start editing!**

    Your site is now running at the displayed URL.

    Open the directory in your code editor of choice and edit `src/App.tsx`. Save your changes and the browser will update in real time!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
