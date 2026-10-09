// ============================================================
// LegendView — renders the S/A/B/C/D meaning key. Same meanings
// regardless of which rating system is active.
// ============================================================
class LegendView {
  constructor(containerElement){
    this.containerElement = containerElement;
  }

  render(){
    this.containerElement.innerHTML = GRADE_LETTERS.map(grade => `
      <div class="legend-chip">
        <span class="legend-dot" style="background:var(${GRADE_TO_COLOR_VAR[grade]})"></span>
        ${grade} &mdash; ${escapeHtml(t(GRADE_MEANING_KEY[grade]))}
      </div>
    `).join('');
  }
}
