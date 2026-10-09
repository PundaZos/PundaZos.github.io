// ============================================================
// CardTooltipController — floating tooltip that follows the
// cursor (or keyboard focus) over a tier-board chip. Content is
// mode-aware: shows the active system's tier and rating breakdown.
// ============================================================
class CardTooltipController {
  constructor(tooltipElement, boardElement, characterRepository){
    this.tooltipElement = tooltipElement;
    this.boardElement = boardElement;
    this.characterRepository = characterRepository;
    this.mode = 'a0';
    this.edgePadding = 16;

    boardElement.addEventListener('mouseover', event => this.handlePointerEnter(event));
    boardElement.addEventListener('mousemove', event => this.handlePointerMove(event));
    boardElement.addEventListener('mouseout', event => this.handlePointerLeave(event));
    boardElement.addEventListener('focusin', event => this.handleFocusEnter(event));
    boardElement.addEventListener('focusout', event => this.handleFocusLeave(event));
  }

  setMode(mode){
    this.mode = mode;
  }

  findCard(eventTarget){
    return eventTarget.closest ? eventTarget.closest('.tier-card') : null;
  }

  buildContent(cardElement){
    const character = this.characterRepository.findByName(cardElement.dataset.character);
    if (!character) return;
    const data = character[this.mode];
    const config = MODE_CONFIG[this.mode];

    const displayedTier = this.mode === 'a0' ? getA0Tier(character) : data.tier;
    const provisionalSuffix = (this.mode === 'a0' && isA0TierProvisional(character)) ? t('shared.provisionalSuffix') : '';

    const tierLabel = this.mode === 'highAwaken'
      ? `${t(config.tierLabelKey)} (A${escapeHtml(String(data.awakenLevel))})`
      : `${t(config.tierLabelKey)}${provisionalSuffix}`;

    const headlineRow = `
      <div class="tt-row tt-row-overall">
        <span>${escapeHtml(tierLabel)}</span>
        <span class="tt-badge" data-grade="${displayedTier}">${displayedTier}</span>
      </div>`;
    const roleRow = `
      <div class="tt-row">
        <span>${escapeHtml(t('col.role'))}</span>
        <span class="tt-badge tt-badge-level">${escapeHtml(getLocalizedField(data, 'role'))}</span>
      </div>`;
    const statRows = config.fields.map(field => `
      <div class="tt-row">
        <span>${escapeHtml(t(field.labelKey))}</span>
        <span class="tt-badge" data-grade="${data[field.key]}">${data[field.key]}</span>
      </div>`).join('');

    this.tooltipElement.innerHTML = `<div class="tt-name">${escapeHtml(getDisplayName(character))}</div>${headlineRow}${roleRow}${statRows}`;
  }

  show(cardElement){
    this.buildContent(cardElement);
    this.tooltipElement.style.display = 'block';
  }

  hide(){
    this.tooltipElement.style.display = 'none';
  }

  isVisible(){
    return this.tooltipElement.style.display === 'block';
  }

  positionAt(x, y){
    const pad = this.edgePadding;
    const tooltipRect = this.tooltipElement.getBoundingClientRect();
    let left = x + pad;
    let top = y + pad;
    if (left + tooltipRect.width > window.innerWidth - 8) left = x - tooltipRect.width - pad;
    if (top + tooltipRect.height > window.innerHeight - 8) top = y - tooltipRect.height - pad;
    this.tooltipElement.style.left = left + 'px';
    this.tooltipElement.style.top = top + 'px';
  }

  handlePointerEnter(event){
    const cardElement = this.findCard(event.target);
    if (!cardElement) return;
    this.show(cardElement);
    this.positionAt(event.clientX, event.clientY);
  }

  handlePointerMove(event){
    if (this.isVisible()) this.positionAt(event.clientX, event.clientY);
  }

  handlePointerLeave(event){
    const cardElement = this.findCard(event.target);
    if (cardElement && !cardElement.contains(event.relatedTarget)) this.hide();
  }

  handleFocusEnter(event){
    const cardElement = this.findCard(event.target);
    if (!cardElement) return;
    this.show(cardElement);
    const cardRect = cardElement.getBoundingClientRect();
    this.positionAt(cardRect.left, cardRect.bottom);
  }

  handleFocusLeave(event){
    const cardElement = this.findCard(event.target);
    if (cardElement) this.hide();
  }
}
