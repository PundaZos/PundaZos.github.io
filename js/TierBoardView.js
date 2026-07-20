// ============================================================
// TierBoardView — renders the S-D tier board of character chips.
// ============================================================
class TierBoardView {
  constructor(boardElement, characterRepository, imageResolver){
    this.boardElement = boardElement;
    this.characterRepository = characterRepository;
    this.imageResolver = imageResolver;
  }

  groupCharactersByTier(){
    const buckets = { S: [], A: [], B: [], C: [], D: [] };
    for (const character of this.characterRepository.getAll()){
      buckets[character.overallGrade].push(character);
    }
    GRADE_LETTERS.forEach(grade => buckets[grade].sort((a, b) => a.name.localeCompare(b.name)));
    return buckets;
  }

  renderChip(character, grade){
    const artSrc = this.imageResolver.getHalfBodyArtSrc(character);
    const initial = this.imageResolver.getInitial(character);
    return `
      <div class="tier-card" tabindex="0" data-character="${escapeHtml(character.name)}">
        <img class="tier-card-img" src="${escapeHtml(artSrc)}" alt="" data-initial="${escapeHtml(initial)}">
        <span class="tier-card-grade" style="background:var(${GRADE_TO_COLOR_VAR[grade]})"></span>
        <div class="tier-card-scrim"></div>
        <div class="tier-card-name">${escapeHtml(character.name)}</div>
      </div>`;
  }

  renderTierRow(grade, entries){
    const chipsHtml = entries.length === 0
      ? `<span class="tier-empty">— none —</span>`
      : entries.map(character => this.renderChip(character, grade)).join('');

    return `
    <div class="tier-row" data-tier="${grade}">
      <div class="tier-plaque">${grade}<small>TIER</small></div>
      <div class="tier-chips">${chipsHtml}</div>
    </div>`;
  }

  // If a character's half-body art isn't available yet, swap it for a
  // large initial-letter placeholder instead of showing a broken image icon.
  attachAvatarFallbacks(){
    this.boardElement.querySelectorAll('img.tier-card-img').forEach(imageElement => {
      imageElement.addEventListener('error', () => {
        const fallback = document.createElement('div');
        fallback.className = 'tier-card-fallback';
        fallback.textContent = imageElement.dataset.initial;
        imageElement.replaceWith(fallback);
      }, { once: true });
    });
  }

  render(){
    const buckets = this.groupCharactersByTier();
    this.boardElement.innerHTML = GRADE_LETTERS
      .map(grade => this.renderTierRow(grade, buckets[grade]))
      .join('');
    this.attachAvatarFallbacks();
  }
}
