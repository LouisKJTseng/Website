// Add the Measurement ID (G-XXXXXXXXXX) of your EXISTING Google Analytics 4
// web data stream here. Using the same stream keeps your analytics history together.
const GA_MEASUREMENT_ID = '';
if (/^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID)) {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
  const ga = document.createElement('script');
  ga.async = true;
  ga.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
  document.head.appendChild(ga);
}
