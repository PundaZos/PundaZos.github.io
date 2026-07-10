// ============================================================
// LegendView — renders the S/A/B/C/D meaning key.
// ============================================================
class LegendView {
  constructor(containerElement){
    this.containerElement = containerElement;
  }

  render(){
    this.containerElement.innerHTML = GRADE_LETTERS.map(grade => `
      <div class="legend-chip">
        <span class="legend-dot" style="background:var(${GRADE_TO_COLOR_VAR[grade]})"></span>
        ${grade} &mdash; ${GRADE_MEANING[grade]}
      </div>
    `).join('');
  }
}
