// ============================================================
// TierBoardView — renders the S-D tier board of character chips.
// ============================================================
class TierBoardView {
  constructor(boardElement, characterRepository, scoringEngine){
    this.boardElement = boardElement;
    this.characterRepository = characterRepository;
    this.scoringEngine = scoringEngine;
  }

  groupCharactersByTier(){
    const buckets = { S: [], A: [], B: [], C: [], D: [] };
    for (const character of this.characterRepository.getAll()){
      const score = this.scoringEngine.getScore(character);
      const tier = this.scoringEngine.getTierForScore(score);
      buckets[tier].push({ character, score });
    }
    GRADE_LETTERS.forEach(grade => buckets[grade].sort((a, b) => b.score - a.score));
    return buckets;
  }

  renderChip(entry, grade){
    const character = entry.character;
    return `
      <div class="chip" tabindex="0" data-character="${escapeHtml(character.name)}">
        <span class="chip-dot" style="background:var(${GRADE_TO_COLOR_VAR[grade]})"></span>
        ${escapeHtml(character.name)}
      </div>`;
  }

  renderTierRow(grade, entries){
    const chipsHtml = entries.length === 0
      ? `<span class="tier-empty">— none —</span>`
      : entries.map(entry => this.renderChip(entry, grade)).join('');

    return `
    <div class="tier-row" data-tier="${grade}">
      <div class="tier-plaque">${grade}<small>TIER</small></div>
      <div class="tier-chips">${chipsHtml}</div>
    </div>`;
  }

  render(){
    const buckets = this.groupCharactersByTier();
    this.boardElement.innerHTML = GRADE_LETTERS
      .map(grade => this.renderTierRow(grade, buckets[grade]))
      .join('');
  }
}
