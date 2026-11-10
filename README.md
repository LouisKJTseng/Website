# Kuan-Ju (Louis) Tseng — GitHub Pages website

Publish at https://louiskjtseng.github.io/Website/.

## Upload instructions
Upload **the contents of this folder** to the `main` branch at the repository root (not into a nested folder). Replace the existing root `README.md`. Keep the existing four PDF files intact.

GitHub Pages: Settings → Pages → Deploy from a branch → `main` → `/(root)`.

Website structure:
- `index.html`: Home, biography, portrait and CV link
- `research/index.html`: Research
- `contact/index.html`: Contact
- `assets/profile.jpg`: original portrait
- `styles.css`, `script.js`: styling and mobile menu
- `analytics.js`: Google Analytics (configure the existing GA4 Measurement ID)
- `sitemap.xml`, `robots.txt`: search-engine discovery

The old `kuanju-github-website/` directory can be deleted from the repository after deployment is confirmed, since the website is now rooted at `/`.

Use your original GA4 web data stream's measurement ID in `analytics.js` to keep reports under your existing property. Your published Google Sites website should retain a link to the new URL while Google indexes the new site.
