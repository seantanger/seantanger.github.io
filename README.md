# Sean's personal website

Vite + React. Content lives in `src/data.js`; styles in `src/index.css`.

```
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

Deploy: push to `main` on GitHub and enable Pages (Settings > Pages > Source: GitHub Actions).
The workflow is in `.github/workflows/deploy.yml`. For a project repo (not `username.github.io`),
set `base: '/repo-name/'` in `vite.config.js`.
