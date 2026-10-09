// ============================================================
// GachaTierListApp — top-level wiring.
// ============================================================
class GachaTierListApp {
  constructor(){
    this.characterRepository = new CharacterRepository(CHARACTER_ROSTER);
    this.imageResolver = new CharacterImageResolver(CHARACTER_IMAGE_CONFIG);
  }

  init(){
    const tierBoardElement = document.getElementById('tierBoard');
    const charactersTableHeadElement = document.getElementById('charactersTableHead');
    const rosterTableBodyElement = document.getElementById('rosterBody');
    const searchInputElement = document.getElementById('searchInput');

    // ---------- Language (apply before anything else renders) ----------
    applyStaticTranslations();
    this.langSelectElement = document.getElementById('langSelect');
    this.langSelectElement.value = currentLanguage;
    this.langSelectElement.addEventListener('change', () => this.setLanguage(this.langSelectElement.value));

    // ---------- Collab visibility toggle ----------
    // (Future-character toggle removed for now — focusing on current
    // characters only. showFutureCharacters stays false, permanently
    // hiding that group until this is revisited.)
    this.collabToggleElement = document.getElementById('collabToggle');
    this.collabToggleElement.checked = showCollabCharacters;
    this.collabToggleElement.addEventListener('change', () => {
      showCollabCharacters = this.collabToggleElement.checked;
      this.rerenderVisibleData();
    });

    // ---------- Views ----------
    this.charactersLegendView = new LegendView(document.getElementById('charactersLegend'));
    this.tierListLegendView = new LegendView(document.getElementById('tierListLegend'));
    this.tierDefinitionsView = new ModeDefinitionsView(document.getElementById('tierFactorDefinitions'));
    this.charactersDefinitionsView = new ModeDefinitionsView(document.getElementById('charactersFactorDefinitions'));
    this.characterTableView = new CharacterTableView(
      charactersTableHeadElement, rosterTableBodyElement, searchInputElement,
      this.characterRepository, this.imageResolver
    );
    this.tierBoardView = new TierBoardView(tierBoardElement, this.characterRepository, this.imageResolver);
    this.cardTooltipController = new CardTooltipController(
      document.getElementById('chipTooltip'), tierBoardElement, this.characterRepository
    );

    this.charactersLegendView.render();
    this.tierListLegendView.render();

    // ---------- Mode switches ----------
    this.tierListModeSwitch = new ModeSwitchController(
      document.getElementById('tierListModeSwitch'),
      mode => this.setTierListMode(mode)
    );
    this.charactersModeSwitch = new ModeSwitchController(
      document.getElementById('charactersModeSwitch'),
      mode => this.setCharactersMode(mode)
    );

    // ---------- Search ----------
    searchInputElement.addEventListener('input', () => this.characterTableView.render());

    // ---------- Theme ----------
    this.themeController = new ThemeController(
      document.getElementById('themeToggle'), document.getElementById('themeLabel')
    );
    this.themeController.apply();

    // ---------- Tabs ----------
    this.tabController = new TabController(
      Array.from(document.querySelectorAll('.topbar-tab')),
      tabId => writeUrlHash(tabId, this.getModeForTab(tabId))
    );

    // ---------- Characters "what do these mean" toggle ----------
    this.charactersDefinitionsToggle = new CollapsibleSectionController(
      document.getElementById('charactersDefToggle'),
      document.getElementById('charactersFactorDefinitions')
    );

    // ---------- Restore state from the URL, then render ----------
    const initial = parseUrlHash();
    this.tierListModeSwitch.setMode(initial.mode || 'a0', { silent: true });
    this.charactersModeSwitch.setMode(initial.mode || 'a0', { silent: true });
    this.applyTierListMode(this.tierListModeSwitch.mode);
    this.applyCharactersMode(this.charactersModeSwitch.mode);
    this.tabController.showTab(initial.tab, { silent: true });
    writeUrlHash(initial.tab, this.getModeForTab(initial.tab));

    window.addEventListener('hashchange', () => this.applyUrlHash());
  }

  setLanguage(lang){
    currentLanguage = (lang === 'zh') ? 'zh' : 'en';
    applyStaticTranslations();
    this.charactersLegendView.render();
    this.tierListLegendView.render();
    this.applyTierListMode(this.tierListModeSwitch.mode);
    this.applyCharactersMode(this.charactersModeSwitch.mode);
  }

  // Re-renders the two views whose content depends on which
  // characters are currently visible (future/collab filters).
  rerenderVisibleData(){
    this.tierBoardView.render();
    this.characterTableView.render();
  }

  getModeForTab(tabId){
    if (tabId === 'tier-list-section') return this.tierListModeSwitch.mode;
    if (tabId === 'characters-section') return this.charactersModeSwitch.mode;
    return null;
  }

  applyUrlHash(){
    const { tab, mode } = parseUrlHash();
    if (mode){
      if (tab === 'tier-list-section') this.tierListModeSwitch.setMode(mode);
      if (tab === 'characters-section') this.charactersModeSwitch.setMode(mode);
    }
    this.tabController.showTab(tab, { silent: true });
    writeUrlHash(tab, this.getModeForTab(tab));
  }

  setTierListMode(mode){
    this.applyTierListMode(mode);
    writeUrlHash(this.tabController.activeTabId, this.getModeForTab(this.tabController.activeTabId));
  }

  setUpcoming(sectionId, on){
    const section = document.getElementById(sectionId);
    section.classList.toggle('is-upcoming', on);
    section.querySelector('[data-upcoming]').hidden = !on;
  }

  applyTierListMode(mode){
    const config = MODE_CONFIG[mode];
    this.setUpcoming('tier-list-section', mode === 'highAwaken');
    document.getElementById('tierListModeExplainer').textContent = t(config.explainerKey);
    this.tierDefinitionsView.setMode(mode);
    this.tierDefinitionsView.render();
    this.tierBoardView.setMode(mode);
    this.tierBoardView.render();
    this.cardTooltipController.setMode(mode);
  }

  setCharactersMode(mode){
    this.applyCharactersMode(mode);
    writeUrlHash(this.tabController.activeTabId, this.getModeForTab(this.tabController.activeTabId));
  }

  applyCharactersMode(mode){
    const config = MODE_CONFIG[mode];
    this.setUpcoming('characters-section', mode === 'highAwaken');
    document.getElementById('charactersModeExplainer').textContent = t(config.explainerKey);
    this.charactersDefinitionsView.setMode(mode);
    this.charactersDefinitionsView.render();
    this.characterTableView.setMode(mode);
    this.characterTableView.render();
  }
}

new GachaTierListApp().init();
