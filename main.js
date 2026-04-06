
document.querySelectorAll('[data-menu-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const panel = document.querySelector('[data-nav-panel]');
    if (panel) panel.classList.toggle('open');
  });
});

document.querySelectorAll('form[data-mailto-form]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const fields = Object.fromEntries(data.entries());
    const subject = encodeURIComponent(`BitNyxt website inquiry: ${fields.service || 'General inquiry'}`);
    const body = encodeURIComponent([
      `Name: ${fields.name || ''}`,
      `Email: ${fields.email || ''}`,
      `Phone: ${fields.phone || ''}`,
      `Service: ${fields.service || ''}`,
      '',
      'Project details:',
      `${fields.message || ''}`
    ].join('\n'));
    window.location.href = `mailto:admin@bitnyxt.com?subject=${subject}&body=${body}`;
  });
});
