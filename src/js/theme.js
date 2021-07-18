// storing theme preferences:
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// refs:
const toggleRef = document.querySelector('#theme-switch-toggle');
toggleRef.addEventListener('change', onThemeChange);

// checking theme on page load:
function themeCheck() {
  if (localStorage.theme === 'dark-theme') {
    document.body.classList.add(Theme.DARK);
    toggleRef.checked = true;
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}
themeCheck();

// toggling theme callback-function:
function onThemeChange(event) {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);

  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
