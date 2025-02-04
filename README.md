# POC for importing packages from esm.sh

- Imports all dependencies from [esm.sh](https://esm.sh/)
- Aliases React to Preact via
  [`preact/compat` and import maps](https://preactjs.com/guide/v10/getting-started#aliasing-with-import-maps)
- Adds an example accordion component using
  [`radix-ui`](https://www.radix-ui.com/primitives/docs/components/accordion)
  and [`@radix-ui/react-icons`](https://www.radix-ui.com/icons):
  - Also imported from esm.sh
  - Both are React components, but are properly rendered by Preact thanks to the
    aliases

## Relevant details

1. The import map is added in
   [`index.html`](https://github.com/balintbrews/poc-import-from-esm-sh/blob/main/index.html).
2. All items of the import map are
   [externalized](https://rollupjs.org/configuration-options/#external) in the
   [`vite.config.js`](https://github.com/balintbrews/poc-import-from-esm-sh/blob/main/vite.config.js)
   file.
3. By default, esm.sh rewrites import specifiers based on the package
   dependencies, transforming them into references to packages served by esm.sh.
   We need to avoid this with `react` and `react-dom` as our import map already
   handles them. (Not only we would end up with multiple versions of React, but
   also the aliasing to Preact would not work.) Appending
   `?external=react,react-dom` to the esm.sh URL tells esm.sh to
   [keep those import specifiers intact](https://esm.sh/#using-import-maps).

## How to run

```bash
npm install
npm run build
npm run preview
```

Note: Vite's dev server (normally available as `npm run dev`) will not work.
[vitejs/vite#6582](https://github.com/vitejs/vite/issues/6582) has solutions,
but it was not relevant to this POC.
