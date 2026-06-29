// Simple active nav marker and smooth scroll polyfill fallback
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav__links a');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
