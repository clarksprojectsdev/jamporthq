/**
 * EmailJS browser public key — loaded separately so index.html does not embed it inline.
 *
 * Important: This key is still sent to the browser (by design for EmailJS). Mitigate abuse via:
 * - EmailJS Dashboard → Account → Security: restrict allowed domains / origins
 * - Optional: enable reCAPTCHA on the EmailJS template
 * - Monitor usage in the EmailJS dashboard
 *
 * To rotate: replace the value below and redeploy.
 */
(function () {
  window.__JAMPORT_EMAILJS_PUBLIC_KEY__ = 'aj9PrXvQiphLsVHNc';
})();
