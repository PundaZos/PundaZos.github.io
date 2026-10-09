// ============================================================
// ModeSwitchController — the [A0] [High Awaken] segmented control.
// One instance per page that needs it (Tier List, Characters).
// ============================================================
class ModeSwitchController {
  constructor(containerElement, onChange){
    this.containerElement = containerElement;
    this.onChange = onChange || function(){};
    this.mode = 'a0';

    this.containerElement.addEventListener('click', event => {
      const buttonElement = event.target.closest('.mode-switch-btn');
      if (!buttonElement) return;
      this.setMode(buttonElement.dataset.mode);
    });
  }

  setMode(mode, options){
    const silent = options && options.silent;
    this.mode = mode;
    this.containerElement.querySelectorAll('.mode-switch-btn').forEach(buttonElement => {
      buttonElement.classList.toggle('active', buttonElement.dataset.mode === mode);
    });
    if (!silent) this.onChange(mode);
  }
}
