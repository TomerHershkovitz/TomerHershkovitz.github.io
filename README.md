# Tomer Hershkovitz Portfolio

Premium one-page portfolio built with React, Vite, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

The local dev server will usually run on `http://localhost:5173`.

## Build

```bash
npm run build
```

The production output will be generated inside `dist/`.

## Deploy To Vercel

1. Push the project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Keep the default framework detection for Vite.
4. Deploy.

## Deploy To GitHub Pages

This project is configured for a GitHub user site such as `tomerhershkovitz.github.io`, so `base` is set to `/` in [vite.config.js](/Users/tomerhershkovitz/Documents/CV/vite.config.js).

GitHub Pages deployment is handled by the workflow in [.github/workflows/deploy.yml](/Users/tomerhershkovitz/Documents/CV/.github/workflows/deploy.yml), which builds the Vite app and publishes `dist/`.

If you later deploy it under a repository path like `username.github.io/repo-name`, update `base` in [vite.config.js](/Users/tomerhershkovitz/Documents/CV/vite.config.js) to `"/repo-name/"` before building.

## Resume File

Place the PDF resume at:

`public/Tomer_Hershkovitz_CV.pdf`

The site links to it through `/Tomer_Hershkovitz_CV.pdf`.

## Content Updates

- Update the LinkedIn URL in [src/data/portfolio.js](/Users/tomerhershkovitz/Documents/CV/src/data/portfolio.js).
- Update project, experience, or skill content in the same file to keep everything centralized.
