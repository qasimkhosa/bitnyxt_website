const menuToggle = document.querySelector('[data-menu-toggle]');
const navPanel = document.querySelector('[data-nav-panel]');
if (menuToggle && navPanel) {
  menuToggle.addEventListener('click', () => {
    navPanel.classList.toggle('open');
    document.body.classList.toggle('menu-open', navPanel.classList.contains('open'));
  });
  navPanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navPanel.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
