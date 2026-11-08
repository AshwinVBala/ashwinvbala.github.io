(() => {
  const root = document.documentElement;
  const picker = document.querySelector('.theme-picker');
  const choices = [...document.querySelectorAll('input[name="theme"]')];
  const deviceAppearance = window.matchMedia('(prefers-color-scheme: dark)');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const allowedThemes = new Set(['light', 'dark', 'device']);

  function applyTheme(theme, save = false) {
    if (!allowedThemes.has(theme)) theme = 'device';
    root.dataset.theme = theme;
    choices.forEach((choice) => { choice.checked = choice.value === theme; });
    themeColor.setAttribute('content', getComputedStyle(root).getPropertyValue('--background').trim());
    if (save) {
      try { localStorage.setItem('portfolio-theme', theme); } catch {}
    }
  }

  applyTheme(root.dataset.theme);
  picker.hidden = false;
  picker.addEventListener('change', (event) => {
    if (event.target.matches('input[name="theme"]')) applyTheme(event.target.value, true);
  });
  deviceAppearance.addEventListener('change', () => {
    if (root.dataset.theme === 'device') applyTheme('device');
  });
  window.addEventListener('storage', (event) => {
    if (event.key === 'portfolio-theme' || event.key === null) applyTheme(event.newValue);
  });
})();
