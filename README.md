# MiaBelle

Handmade crochet & clay-bead jewelry by Mia in Logan, Utah.

**Live site: https://littlemissmiabelle.com/**

## What's in here

- `index.html` – the whole page (built in Hyperagent; styles and scripts are inline)
- `assets/` – photos, logos and icons
- `robots.txt`, `sitemap.xml`, `404.html` – housekeeping files for search engines and broken links

There is no build step. Any change pushed to `main` is published automatically by
GitHub Actions (`.github/workflows/deploy-pages.yml`) to GitHub Pages, which serves the custom domain.

## Notes

- **Reviews** – the Hyperagent export only had sample reviews, so that section is left out.
  When there are real customer quotes, restore the section from git history and swap them in.
- **Hero video** – the export pointed at a login-only Hyperagent link, so the hero uses its
  floral background. To bring the video back, add `assets/hero.mp4` and restore the `<video>` tag.
- **Earlier 18-design draft** – kept on the `v18-draft` branch. It needs 17 photos and the video
  that only exist inside the Hyperagent account.

## Local preview

```bash
python3 -m http.server 4173
```

Open http://localhost:4173

## Links on the page

- Etsy shop: https://www.etsy.com/shop/MissMiaBelle
- Instagram: https://www.instagram.com/littlemissmiabelle/
