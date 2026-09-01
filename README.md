# MiaBelle

Handmade crochet & clay-bead jewelry by Mia in Logan, Utah.

Single self-contained page: `index.html` + `assets/` (images + video). No build step.

## Live site

**https://systemsscaleai-gif.github.io/miabelle-website/**

Deploys automatically from `main` via GitHub Actions (`.github/workflows/deploy.yml`).
On the first run the workflow vendors the image/video assets into `assets/` and commits them;
after that the repo is fully self-contained.

## Local preview

```bash
python3 -m http.server 4173
```

Open http://localhost:4173

## Links on the page

- Etsy shop: https://www.etsy.com/shop/MissMiaBelle
- Instagram: https://www.instagram.com/littlemissmiabelle/
