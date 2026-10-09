// ============================================================
// TabController — swaps which single top-level panel (Home,
// Tier List, Characters) is visible.
// ============================================================
class TabController {
  constructor(tabButtonElements, onChange){
    this.tabButtonElements = tabButtonElements;
    this.onChange = onChange || function(){};
    this.panelElements = tabButtonElements
      .map(tabButton => document.getElementById(tabButton.dataset.target))
      .filter(Boolean);
    this.activeTabId = null;

    this.tabButtonElements.forEach(tabButton => {
      tabButton.addEventListener('click', event => {
        event.preventDefault();
        this.showTab(tabButton.dataset.target);
      });
    });
  }

  showTab(targetPanelId, options){
    const silent = options && options.silent;
    this.activeTabId = targetPanelId;
    this.tabButtonElements.forEach(tabButton =>
      tabButton.classList.toggle('active', tabButton.dataset.target === targetPanelId)
    );
    this.panelElements.forEach(panelElement =>
      panelElement.classList.toggle('active', panelElement.id === targetPanelId)
    );
    if (!silent) this.onChange(targetPanelId);
  }
}
