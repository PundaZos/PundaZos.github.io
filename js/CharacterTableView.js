// ============================================================
// CharacterTableView — renders the searchable Characters table.
// Clicking a row expands it to show Investment Cost / Gacha Value
// reasoning and a Brief Review.
// ============================================================
class CharacterTableView {
  constructor(tableBodyElement, searchInputElement, characterRepository, scoringEngine){
    this.tableBodyElement = tableBodyElement;
    this.searchInputElement = searchInputElement;
    this.characterRepository = characterRepository;
    this.scoringEngine = scoringEngine;
    this.expandedCharacterNames = new Set();

    this.tableBodyElement.addEventListener('click', event => this.handleRowClick(event));
    this.tableBodyElement.addEventListener('keydown', event => this.handleRowKeydown(event));
  }

  toggleCharacter(characterName){
    if (this.expandedCharacterNames.has(characterName)){
      this.expandedCharacterNames.delete(characterName);
    } else {
      this.expandedCharacterNames.add(characterName);
    }
    this.render();
  }

  handleRowClick(event){
    const rowElement = event.target.closest('.char-row');
    if (!rowElement) return;
    this.toggleCharacter(rowElement.dataset.character);
  }

  handleRowKeydown(event){
    if (event.key !== 'Enter' && event.key !== ' ') return;
    const rowElement = event.target.closest('.char-row');
    if (!rowElement) return;
    event.preventDefault();
    this.toggleCharacter(rowElement.dataset.character);
  }

  renderFactorCell(character, factor){
    const rawValue = character[factor.key];

    if (factor.type === 'grade'){
      return `<td><span class="grade-badge" data-grade="${rawValue}">${rawValue}</span></td>`;
    }

    if (factor.type === 'cost'){
      const noteHtml = rawValue.requirement
        ? `<div class="level-note">${escapeHtml(rawValue.requirement)}</div>`
        : '';
      return `<td><div class="cost-cell"><div class="level-badge">${escapeHtml(rawValue.tier)}</div>${noteHtml}</div></td>`;
    }

    // type === 'value'
    return `<td><div class="level-badge">${escapeHtml(rawValue)}</div></td>`;
  }

  renderDetailRow(character){
    return `
    <tr class="char-detail-row">
      <td colspan="7">
        <div class="char-detail">
          <div class="char-detail-block">
            <h4>Investment Cost</h4>
            <p>${escapeHtml(character.investmentCostNote)}</p>
          </div>
          <div class="char-detail-block">
            <h4>Gacha Value</h4>
            <p>${escapeHtml(character.gachaValueNote)}</p>
          </div>
          <div class="char-detail-block">
            <h4>Brief Review</h4>
            <p>${escapeHtml(character.briefReview)}</p>
          </div>
        </div>
      </td>
    </tr>`;
  }

  renderRow(character){
    const tier = this.scoringEngine.getTierForCharacter(character);
    const isExpanded = this.expandedCharacterNames.has(character.name);
    const factorCells = FACTOR_DEFINITIONS
      .map(factor => this.renderFactorCell(character, factor))
      .join('');

    const mainRow = `
    <tr class="char-row${isExpanded ? ' expanded' : ''}" data-character="${escapeHtml(character.name)}" tabindex="0">
      <td><div class="char-name"><span class="char-chevron"><svg viewBox="0 0 8 12" width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>${escapeHtml(character.name)}</div></td>
      ${factorCells}
      <td><div class="overall-badge" data-grade="${tier}">${tier}</div></td>
    </tr>`;

    return isExpanded ? mainRow + this.renderDetailRow(character) : mainRow;
  }

  renderEmptyState(message){
    this.tableBodyElement.innerHTML =
      `<tr><td colspan="7" style="text-align:center; color:var(--ink-faint); padding:22px;">${message}</td></tr>`;
  }

  render(){
    const allCharacters = this.characterRepository.getAll();
    if (allCharacters.length === 0){
      this.renderEmptyState('No characters yet.');
      return;
    }

    const query = this.searchInputElement.value || '';
    const visibleCharacters = this.characterRepository.searchByName(query);
    if (visibleCharacters.length === 0){
      this.renderEmptyState(`No characters match "${escapeHtml(query.trim())}".`);
      return;
    }

    this.tableBodyElement.innerHTML = visibleCharacters.map(character => this.renderRow(character)).join('');
  }
}
