# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast
  Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked`
  or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and
  add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Configs App

1. Create vite app

   - yarn create vite ./name_app
   - yarn install

2. Install eslint

   - npm init @eslint/config
   - npm install eslint-plugin-react --save-dev
   - add include: ["src", "vite.config.ts"] (file tsconfig.json)
   - add options into settings, parserOptions, rules (file .eslintrc.cjs)

3. Install prettier

   - npm install prettier eslint-config-prettier eslint-plugin-prettier --save-dev
   - add options into extends: 'plugin:react/recommended', 'plugin:prettier/recommended' and plugins: ['prettier']

4. Install husky

   - npx husky-init && npm install

5. Install lint-staged
   - npm i add lint-staged
