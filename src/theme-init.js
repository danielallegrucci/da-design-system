/**
 * Inline script for <html data-theme="light"> — run before first paint to avoid flash.
 * Dark mode is default (:root tokens). Light mode uses [data-theme="light"] overrides.
 */
export const THEME_INIT_SCRIPT = `
  (function() {
    try {
      var stored = localStorage.getItem('theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var useLight = stored === 'light' || (!stored && !prefersDark);
      if (useLight) {
        document.documentElement.setAttribute('data-theme', 'light');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
    } catch (e) {
      document.documentElement.removeAttribute('data-theme');
    }
  })();
`;
