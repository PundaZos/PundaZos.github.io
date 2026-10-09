// ============================================================
// TierBoardView — renders the S-D tier board for whichever system
// is active. High Awaken chips additionally show the evaluated
// breakpoint (e.g. "A2") so visitors never confuse the two systems.
// ============================================================
class TierBoardView {
  constructor(boardElement, characterRepository, imageResolver){
    this.boardElement = boardElement;
    this.characterRepository = characterRepository;
    this.imageResolver = imageResolver;
    this.mode = 'a0';
  }

  setMode(mode){
    this.mode = mode;
  }

  groupCharactersByTier(){
    const buckets = { S: [], A: [], B: [], C: [], D: [] };
    for (const character of this.characterRepository.getAllForMode(this.mode)){
      const tier = this.mode === 'a0' ? getA0Tier(character) : character.highAwaken.tier;
      buckets[tier].push(character);
    }
    GRADE_LETTERS.forEach(grade => buckets[grade].sort((a, b) => a.name.localeCompare(b.name)));
    return buckets;
  }

  renderChip(character, grade){
    const artSrc = this.imageResolver.getHalfBodyArtSrc(character);
    const initial = this.imageResolver.getInitial(character);
    const breakpointBadge = this.mode === 'highAwaken'
      ? `<span class="tier-card-breakpoint">A${escapeHtml(String(character.highAwaken.awakenLevel))}</span>`
      : '';
    const isProvisional = this.mode === 'a0' && isA0TierProvisional(character);
    const provisionalClass = isProvisional ? ' is-provisional' : '';
    const provisionalBadge = isProvisional
      ? `<span class="tier-card-provisional" title="${escapeHtml(t('shared.provisionalTitle'))}">${escapeHtml(t('shared.provisionalShort'))}</span>`
      : '';
    const collabIcon = character.isCollab
      ? `<span class="tier-card-collab" title="${escapeHtml(t('shared.collabBadge'))}">${COLLAB_ICON_SVG}</span>`
      : '';
    return `
      <div class="tier-card${provisionalClass}" tabindex="0" data-character="${escapeHtml(character.name)}">
        <img class="tier-card-img" src="${escapeHtml(artSrc)}" alt="" data-initial="${escapeHtml(initial)}">
        <span class="tier-card-grade" style="background:var(${GRADE_TO_COLOR_VAR[grade]})"></span>
        ${breakpointBadge}
        ${provisionalBadge}
        ${collabIcon}
        <div class="tier-card-scrim"></div>
        <div class="tier-card-name">${escapeHtml(getDisplayName(character))}</div>
      </div>`;
  }

  renderTierRow(grade, entries){
    const chipsHtml = entries.length === 0
      ? `<span class="tier-empty">${escapeHtml(t('shared.none'))}</span>`
      : entries.map(character => this.renderChip(character, grade)).join('');
    return `
    <div class="tier-row" data-tier="${grade}">
      <div class="tier-plaque">${grade}<small>${escapeHtml(t('shared.tier'))}</small></div>
      <div class="tier-chips">${chipsHtml}</div>
    </div>`;
  }

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
