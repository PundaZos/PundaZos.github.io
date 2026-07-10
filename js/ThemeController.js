// ============================================================
// ThemeController — day/night mode toggle. Defaults to the
// visitor's system preference, then can be flipped manually.
// ============================================================
class ThemeController {
  constructor(toggleButtonElement, labelElement){
    this.toggleButtonElement = toggleButtonElement;
    this.labelElement = labelElement;
    this.htmlElement = document.documentElement;

    const systemPrefersLight = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches;
    this.currentTheme = systemPrefersLight ? 'light' : 'dark';

    this.toggleButtonElement.addEventListener('click', () => this.toggle());
  }

  apply(){
    if (this.currentTheme === 'light'){
      this.htmlElement.setAttribute('data-theme', 'light');
      this.labelElement.textContent = 'Day';
    } else {
      this.htmlElement.removeAttribute('data-theme');
      this.labelElement.textContent = 'Night';
    }
  }

  toggle(){
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.apply();
  }
}
