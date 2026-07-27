// ============================================================
// CharacterTableView — renders the searchable Characters table.
// Clicking a row expands it to show Investment Cost / Awaken Value
// reasoning and a Brief Review. Clicking a column header sorts by it.
// ============================================================
class CharacterTableView {
  constructor(tableBodyElement, searchInputElement, characterRepository, imageResolver){
    this.tableBodyElement = tableBodyElement;
    this.searchInputElement = searchInputElement;
    this.characterRepository = characterRepository;
    this.imageResolver = imageResolver;
    this.expandedCharacterNames = new Set();
    this.sortState = { key: 'name', direction: 'asc' };

    this.tableHeadElement = tableBodyElement.closest('table').querySelector('thead');
    this.tableHeadElement.addEventListener('click', event => this.handleHeaderClick(event));

    this.tableBodyElement.addEventListener('click', event => this.handleRowClick(event));
    this.tableBodyElement.addEventListener('keydown', event => this.handleRowKeydown(event));
  }

  handleHeaderClick(event){
    const headerElement = event.target.closest('th.sortable');
    if (!headerElement) return;
    const key = headerElement.dataset.sortKey;
    if (this.sortState.key === key){
      this.sortState.direction = this.sortState.direction === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortState.key = key;
      this.sortState.direction = 'asc';
    }
    this.render();
  }

  updateSortIndicators(){
    this.tableHeadElement.querySelectorAll('th.sortable').forEach(headerElement => {
      const isActive = headerElement.dataset.sortKey === this.sortState.key;
      headerElement.classList.toggle('sort-active', isActive);
      const caret = headerElement.querySelector('.sort-caret');
      if (!isActive){
        caret.textContent = '';
      } else {
        caret.textContent = this.sortState.direction === 'asc' ? '▲' : '▼';
      }
    });
  }

  getSortValue(character, key){
    if (key === 'name') return character.name.toLowerCase();
    if (key === 'starterGame' || key === 'calculation' || key === 'bossMaxxing'){
      return GRADE_SORT_RANK[character[key]] ?? 99;
    }
    if (key === 'investmentCost') return INVESTMENT_COST_SORT_RANK[character.investmentCost.tier] ?? 99;
    if (key === 'awakenValue') return AWAKEN_VALUE_SORT_RANK[character.awakenValue] ?? 99;
    return 0;
  }

  sortCharacters(characters){
    const { key, direction } = this.sortState;
    const sorted = [...characters].sort((a, b) => {
      const valueA = this.getSortValue(a, key);
      const valueB = this.getSortValue(b, key);
      let comparison = typeof valueA === 'string'
        ? valueA.localeCompare(valueB)
        : valueA - valueB;
      if (comparison === 0 && key !== 'name'){
        comparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      }
      return direction === 'asc' ? comparison : -comparison;
    });
    return sorted;
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
      return `<td><div class="level-badge">${escapeHtml(rawValue.tier)}</div></td>`;
    }

    // type === 'value'
    return `<td><div class="level-badge">${escapeHtml(rawValue)}</div></td>`;
  }

  renderDetailRow(character){
    const requirement = character.investmentCost.requirement;
    const requirementTagHtml = requirement
      ? `<span class="detail-tag">${escapeHtml(requirement)}</span>`
      : '';

    return `
    <tr class="char-detail-row">
      <td colspan="7">
        <div class="char-detail">
          <div class="char-detail-block">
            <h4>Investment Cost</h4>
            ${requirementTagHtml}
            <p>${escapeHtml(character.investmentCostNote)}</p>
          </div>
          <div class="char-detail-block">
            <h4>Awaken Value</h4>
            <p>${escapeHtml(character.awakenValueNote)}</p>
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
    const tier = character.overallGrade;
    const isExpanded = this.expandedCharacterNames.has(character.name);
    const factorCells = FACTOR_DEFINITIONS
      .map(factor => this.renderFactorCell(character, factor))
      .join('');

    const avatarSrc = this.imageResolver.getClosedUpIconSrc(character);
    const initial = this.imageResolver.getInitial(character);

    const mainRow = `
    <tr class="char-row${isExpanded ? ' expanded' : ''}" data-character="${escapeHtml(character.name)}" tabindex="0">
      <td><div class="char-name">
        <img class="char-avatar" src="${escapeHtml(avatarSrc)}" alt="" data-initial="${escapeHtml(initial)}">
        <span class="char-chevron"><svg viewBox="0 0 8 12" width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>${escapeHtml(character.name)}
      </div></td>
      ${factorCells}
      <td><div class="overall-badge" data-grade="${tier}">${tier}</div></td>
    </tr>`;

    return isExpanded ? mainRow + this.renderDetailRow(character) : mainRow;
  }

  renderEmptyState(message){
    this.tableBodyElement.innerHTML =
      `<tr><td colspan="7" style="text-align:center; color:var(--ink-faint); padding:22px;">${message}</td></tr>`;
  }

  // If a character's image file isn't available yet, swap it for a
  // small initial-letter badge instead of showing a broken image icon.
  attachAvatarFallbacks(){
    this.tableBodyElement.querySelectorAll('img.char-avatar').forEach(imageElement => {
      imageElement.addEventListener('error', () => {
        const fallback = document.createElement('span');
        fallback.className = 'char-avatar char-avatar-fallback';
        fallback.textContent = imageElement.dataset.initial;
        imageElement.replaceWith(fallback);
      }, { once: true });
    });
  }

  render(){
    const allCharacters = this.characterRepository.getAll();
    if (allCharacters.length === 0){
      this.renderEmptyState('No characters yet.');
      this.updateSortIndicators();
      return;
    }

    const query = this.searchInputElement.value || '';
    const visibleCharacters = this.sortCharacters(this.characterRepository.searchByName(query));
    if (visibleCharacters.length === 0){
      this.renderEmptyState(`No characters match "${escapeHtml(query.trim())}".`);
      this.updateSortIndicators();
      return;
    }

    this.tableBodyElement.innerHTML = visibleCharacters.map(character => this.renderRow(character)).join('');
    this.attachAvatarFallbacks();
    this.updateSortIndicators();
  }
}
