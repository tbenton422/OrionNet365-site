
// OrionNet365 static site helper
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
