// ============================================================
// FactorDefinitionsView — renders "what does this factor mean"
// for all five factors into a given container. Reused on both the
// Tier List tab and the Characters tab so the wording only lives
// in one place (FACTOR_DEFINITIONS) and can't drift between them.
// ============================================================
class FactorDefinitionsView {
  constructor(containerElement){
    this.containerElement = containerElement;
  }

  render(){
    this.containerElement.innerHTML = FACTOR_DEFINITIONS.map(factor => `
      <div class="factor-definition">
        <dt>${escapeHtml(factor.label)}</dt>
        <dd>${escapeHtml(factor.description)}</dd>
      </div>
    `).join('');
  }
}
