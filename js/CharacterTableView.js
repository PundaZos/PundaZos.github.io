// ============================================================
// CharacterTableView — renders the searchable, sortable Characters
// table. Columns, sorting fields, and expanded-detail content all
// depend on which rating system (mode) is currently active.
// ============================================================
class CharacterTableView {
  constructor(theadElement, tbodyElement, searchInputElement, characterRepository, imageResolver){
    this.theadElement = theadElement;
    this.tbodyElement = tbodyElement;
    this.searchInputElement = searchInputElement;
    this.characterRepository = characterRepository;
    this.imageResolver = imageResolver;
    this.mode = 'a0';
    this.expandedCharacterNames = new Set();
    this.sortState = { key: null, direction: 'asc' };

    this.theadElement.addEventListener('click', event => this.handleHeaderClick(event));
    this.tbodyElement.addEventListener('click', event => this.handleRowClick(event));
    this.tbodyElement.addEventListener('keydown', event => this.handleRowKeydown(event));
  }

  setMode(mode){
    if (this.mode === mode) return;
    this.mode = mode;
    this.sortState = { key: null, direction: 'asc' };
    this.expandedCharacterNames.clear();
  }

  getColumns(){
    if (this.mode === 'a0'){
      return [
        { key: 'name', labelKey: 'col.character', sortable: true },
        { key: 'role', labelKey: 'col.role', sortable: false },
        { key: 'tier', labelKey: 'col.a0Tier', sortable: true },
        { key: 'content', labelKey: 'col.content', sortable: true },
        { key: 'versatility', labelKey: 'col.versatility', sortable: true },
        { key: 'longevity', labelKey: 'col.longevity', sortable: true }
      ];
    }
    return [
      { key: 'name', labelKey: 'col.character', sortable: true },
      { key: 'awakenLevel', labelKey: 'col.awaken', sortable: true },
      { key: 'role', labelKey: 'col.role', sortable: false },
      { key: 'tier', labelKey: 'col.tier', sortable: true },
      { key: 'damage', labelKey: 'col.damage', sortable: true },
      { key: 'highDifficulty', labelKey: 'col.highDifficulty', sortable: true },
      { key: 'costRecovery', labelKey: 'col.costRecovery', sortable: true },
      { key: 'cardCycling', labelKey: 'col.cardCycling', sortable: true },
      { key: 'costEffectiveness', labelKey: 'col.costEffectiveness', sortable: true }
    ];
  }

  renderHeader(){
    const columns = this.getColumns();
    this.theadElement.innerHTML = `<tr>${columns.map(column => {
      const sortableClass = column.sortable ? ' sortable' : '';
      const caret = column.sortable ? '<span class="sort-caret"></span>' : '';
      return `<th class="${sortableClass.trim()}" data-sort-key="${column.key}">${escapeHtml(t(column.labelKey))}${caret}</th>`;
    }).join('')}</tr>`;
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
    this.theadElement.querySelectorAll('th.sortable').forEach(headerElement => {
      const isActive = headerElement.dataset.sortKey === this.sortState.key;
      headerElement.classList.toggle('sort-active', isActive);
      const caret = headerElement.querySelector('.sort-caret');
      caret.textContent = isActive ? (this.sortState.direction === 'asc' ? '▼' : '▲') : '';
    });
  }

  getSortValue(character, key){
    if (key === 'name') return getDisplayName(character).toLowerCase();
    const data = character[this.mode];
    if (key === 'awakenLevel') return data.awakenLevel;
    if (key === 'tier'){
      const tier = this.mode === 'a0' ? getA0Tier(character) : data.tier;
      return GRADE_SORT_RANK[tier] ?? 99;
    }
    if (key in data && typeof data[key] === 'string' && GRADE_SORT_RANK[data[key]] !== undefined){
      return GRADE_SORT_RANK[data[key]];
    }
    return 99;
  }

  sortCharacters(characters){
    const { key, direction } = this.sortState;
    if (key === null) return characters;
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

  renderCell(character, column){
    const data = character[this.mode];

    if (column.key === 'name'){
      const avatarSrc = this.imageResolver.getClosedUpIconSrc(character);
      const initial = this.imageResolver.getInitial(character);
      const collabIcon = character.isCollab
        ? `<span class="char-name-collab" title="${escapeHtml(t('shared.collabBadge'))}">${COLLAB_ICON_SVG}</span>`
        : '';
      return `<td><div class="char-name">
        <img class="char-avatar" src="${escapeHtml(avatarSrc)}" alt="" data-initial="${escapeHtml(initial)}">
        <span class="char-chevron">${CHEVRON_SVG}</span>${escapeHtml(getDisplayName(character))}${collabIcon}
      </div></td>`;
    }
    if (column.key === 'role'){
      return `<td><span class="level-badge">${escapeHtml(getLocalizedField(data, 'role'))}</span></td>`;
    }
    if (column.key === 'awakenLevel'){
      return `<td><span class="level-badge">A${escapeHtml(String(data.awakenLevel))}</span></td>`;
    }
    if (column.key === 'tier'){
      if (this.mode === 'a0'){
        const tier = getA0Tier(character);
        if (isA0TierProvisional(character)){
          return `<td><div class="overall-badge is-provisional" data-grade="${tier}" title="${escapeHtml(t('shared.provisionalTitle'))}">${tier}</div><div class="level-note">${escapeHtml(t('shared.provisionalShort'))}</div></td>`;
        }
        return `<td><div class="overall-badge" data-grade="${tier}">${tier}</div></td>`;
      }
      return `<td><div class="overall-badge" data-grade="${data.tier}">${data.tier}</div></td>`;
    }
    const grade = data[column.key];
    return `<td><span class="grade-badge" data-grade="${grade}">${grade}</span></td>`;
  }

  renderDetailRow(character){
    const data = character[this.mode];
    const fields = MODE_CONFIG[this.mode].fields;
    const reviewText = getLocalizedField(data, 'review');
    // A field only gets its own block when it actually says something
    // different from the review — otherwise it's just the same brief
    // summary repeated under a different heading, which isn't a real
    // per-field explanation.
    const fieldBlocks = fields
      .filter(field => getLocalizedField(data, field.noteKey) !== reviewText)
      .map(field => `
      <div class="char-detail-block">
        <h4>${escapeHtml(t(field.labelKey))}</h4>
        <p>${escapeHtml(getLocalizedField(data, field.noteKey))}</p>
      </div>`).join('');
    const reviewBlock = `
      <div class="char-detail-block">
        <h4>${escapeHtml(t('shared.review'))}</h4>
        <p>${escapeHtml(reviewText)}</p>
      </div>`;
    const columnCount = this.getColumns().length;
    return `
    <tr class="char-detail-row">
      <td colspan="${columnCount}">
        <div class="char-detail">${fieldBlocks}${reviewBlock}</div>
      </td>
    </tr>`;
  }

  renderRow(character){
    const isExpanded = this.expandedCharacterNames.has(character.name);
    const columns = this.getColumns();
    const cells = columns.map(column => this.renderCell(character, column)).join('');
    const mainRow = `
    <tr class="char-row${isExpanded ? ' expanded' : ''}" data-character="${escapeHtml(character.name)}" tabindex="0">
      ${cells}
    </tr>`;
    return isExpanded ? mainRow + this.renderDetailRow(character) : mainRow;
  }

  renderEmptyState(message){
    const columnCount = this.getColumns().length;
    this.tbodyElement.innerHTML =
      `<tr><td colspan="${columnCount}" style="text-align:center; color:var(--ink-faint); padding:22px;">${message}</td></tr>`;
  }

  attachAvatarFallbacks(){
    this.tbodyElement.querySelectorAll('img.char-avatar').forEach(imageElement => {
      imageElement.addEventListener('error', () => {
        const fallback = document.createElement('span');
        fallback.className = 'char-avatar char-avatar-fallback';
        fallback.textContent = imageElement.dataset.initial;
        imageElement.replaceWith(fallback);
      }, { once: true });
    });
  }

  render(){
    this.renderHeader();

    const allCharacters = this.characterRepository.getAllForMode(this.mode);
    if (allCharacters.length === 0){
      this.renderEmptyState(t('shared.noCharactersYet'));
      this.updateSortIndicators();
      return;
    }

    const query = this.searchInputElement.value || '';
    const visibleCharacters = this.sortCharacters(this.characterRepository.searchForMode(this.mode, query));
    if (visibleCharacters.length === 0){
      this.renderEmptyState(`${t('shared.noMatches')} "${escapeHtml(query.trim())}"`);
      this.updateSortIndicators();
      return;
    }

    this.tbodyElement.innerHTML = visibleCharacters.map(character => this.renderRow(character)).join('');
    this.attachAvatarFallbacks();
    this.updateSortIndicators();
  }
}
