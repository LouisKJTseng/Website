# Kuan-Ju (Louis) Tseng — GitHub Pages Website

A static, mobile-responsive recreation of the three published pages on
https://sites.google.com/view/kuanjutseng, prepared for GitHub Pages.

## Files

- `index.html` — Home (biography, photo, CV link)
- `research/index.html` — Research (three working papers and work in progress)
- `contact/index.html` — Contact
- `styles.css` — layout, typography, sidebar, colors
- `script.js` — mobile menu and portrait fallback
- `analytics.js` — Google Analytics configuration
- `.nojekyll` — keeps GitHub Pages from processing the site with Jekyll

## Publish to your existing GitHub Pages repository

Your CV is already linked at
`https://louiskjtseng.github.io/Website/KuanJuTseng_CV.pdf`,
so you can publish this site to the **Website** repository.

1. Open the `Website` repository at GitHub.
2. Upload the **contents** of this folder into the repository root (not a nested
   `kuanju-github-website/` folder). Keep your existing `KuanJuTseng_CV.pdf` file.
3. In repository **Settings → Pages**, choose **Deploy from a branch**,
   branch **main**, folder **/(root)**; then Save.
4. Your homepage should appear at `https://louiskjtseng.github.io/Website/`,
   with Research and Contact at `/Website/research/` and `/Website/contact/`.

If you instead publish from a repository called `louiskjtseng.github.io`,
the homepage is `https://louiskjtseng.github.io/`; relative navigation also works there.

## Two important finishing steps

**Photo:** Place the original homepage photo in `assets/profile.jpg`.
Until then the template tries the public Google Sites image, which Google may block
outside of Google Sites. The fallback is an initials placeholder. No replacement
portrait of a different person has been used.

**Google Analytics:** In `analytics.js`, set `GA_MEASUREMENT_ID` to the
`G-XXXXXXXXXX` Measurement ID of the **existing** GA4 web data stream.
Using the existing stream (not creating a new property) preserves historical data
in that property. Verify traffic using GA4 Realtime after deployment.

## Search-engine migration

- Add the new GitHub Pages URL as a property in Google Search Console and
  request indexing for its homepage, research, and contact pages.
- On the old Google Sites website, add a prominent link to the new address.
  (Google Sites does not provide a typical HTTP 301 redirect for this move.)
- After you settle on the permanent GitHub URL, you can add a `sitemap.xml` and
  canonical URLs to every page and submit the sitemap to Search Console.
- Do not delete the Google Sites site immediately: existing search traffic may
  continue to land there during transition.

## Styling

Edit the CSS custom properties at the top of `styles.css` for exact sidebar
color and accent colors. The visual layout is reconstructed from the public
page content and earlier layout preferences, not from a pixel-perfect
Google Sites CSS export, which is not available.
