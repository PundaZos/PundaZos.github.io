// ============================================================
// ModeDefinitionsView — renders "what does this rating mean" for
// whichever system (A0 or High Awaken) is currently active.
// ============================================================
class ModeDefinitionsView {
  constructor(containerElement){
    this.containerElement = containerElement;
    this.mode = 'a0';
  }

  setMode(mode){
    this.mode = mode;
  }

  render(){
    const fields = MODE_CONFIG[this.mode].fields;
    this.containerElement.innerHTML = fields.map(field => `
      <div class="factor-definition">
        <dt>${escapeHtml(t(field.labelKey))}</dt>
        <dd>${escapeHtml(t(field.descKey))}</dd>
      </div>
    `).join('');
  }
}
