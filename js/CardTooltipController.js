// ============================================================
// CardTooltipController — floating tooltip that follows the
// cursor (or keyboard focus) over a tier-board chip and shows
// that character's five stats.
// ============================================================
class CardTooltipController {
  constructor(tooltipElement, boardElement, characterRepository){
    this.tooltipElement = tooltipElement;
    this.boardElement = boardElement;
    this.characterRepository = characterRepository;
    this.edgePadding = 16;

    boardElement.addEventListener('mouseover', event => this.handlePointerEnter(event));
    boardElement.addEventListener('mousemove', event => this.handlePointerMove(event));
    boardElement.addEventListener('mouseout', event => this.handlePointerLeave(event));
    boardElement.addEventListener('focusin', event => this.handleFocusEnter(event));
    boardElement.addEventListener('focusout', event => this.handleFocusLeave(event));
  }

  findCard(eventTarget){
    return eventTarget.closest ? eventTarget.closest('.tier-card') : null;
  }

  renderStatRow(character, factor){
    if (factor.type === 'grade'){
      const grade = character[factor.key];
      return `
        <div class="tt-row">
          <span>${factor.label}</span>
          <span class="tt-badge" data-grade="${grade}">${grade}</span>
        </div>`;
    }

    if (factor.type === 'cost'){
      const costInfo = character[factor.key];
      const labelSuffix = costInfo.requirement ? ` (${escapeHtml(costInfo.requirement)})` : '';
      return `
        <div class="tt-row">
          <span>${factor.label}${labelSuffix}</span>
          <span class="tt-badge tt-badge-level">${escapeHtml(costInfo.tier)}</span>
        </div>`;
    }

    // type === 'value'
    const value = character[factor.key];
    return `
      <div class="tt-row">
        <span>${factor.label}</span>
        <span class="tt-badge tt-badge-level">${escapeHtml(value)}</span>
      </div>`;
  }

  buildContent(cardElement){
    const character = this.characterRepository.findByName(cardElement.dataset.character);
    if (!character) return;
    const statRows = FACTOR_DEFINITIONS.map(factor => this.renderStatRow(character, factor)).join('');
    const gachaValueRow = `
      <div class="tt-row tt-row-overall">
        <span>Gacha Value</span>
        <span class="tt-badge" data-grade="${character.overallGrade}">${character.overallGrade}</span>
      </div>`;
    this.tooltipElement.innerHTML = `<div class="tt-name">${escapeHtml(character.name)}</div>${gachaValueRow}${statRows}`;
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
