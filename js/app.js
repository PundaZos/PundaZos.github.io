// ============================================================
// GachaTierListApp — top-level wiring. Builds the shared engine
// and repository, then constructs each view/controller with the
// DOM elements it needs.
// ============================================================
class GachaTierListApp {
  constructor(){
    this.scoringEngine = new ScoringEngine(FACTOR_DEFINITIONS, FACTOR_WEIGHTS, FACTOR_TYPE_TO_CONVERTER);
    this.characterRepository = new CharacterRepository(CHARACTER_ROSTER);
  }

  init(){
    const legendElement = document.getElementById('legend');
    const rosterTableBodyElement = document.getElementById('rosterBody');
    const searchInputElement = document.getElementById('searchInput');
    const tierBoardElement = document.getElementById('tierBoard');

    this.legendView = new LegendView(legendElement);
    this.characterTableView = new CharacterTableView(
      rosterTableBodyElement, searchInputElement, this.characterRepository, this.scoringEngine
    );
    this.tierBoardView = new TierBoardView(tierBoardElement, this.characterRepository, this.scoringEngine);

    this.legendView.render();
    this.characterTableView.render();
    this.tierBoardView.render();

    searchInputElement.addEventListener('input', () => this.characterTableView.render());

    this.themeController = new ThemeController(
      document.getElementById('themeToggle'),
      document.getElementById('themeLabel')
    );
    this.themeController.apply();

    this.tabController = new TabController(Array.from(document.querySelectorAll('.topbar-tab')));
    this.tabController.showTab('home-section');

    this.chipTooltipController = new ChipTooltipController(
      document.getElementById('chipTooltip'),
      tierBoardElement,
      this.characterRepository
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GachaTierListApp().init();
});
