// ============================================================
// TabController — swaps which single panel is visible; only one
// panel is shown at a time (no scrolling between sections).
// ============================================================
class TabController {
  constructor(tabButtonElements){
    this.tabButtonElements = tabButtonElements;
    this.panelElements = tabButtonElements
      .map(tabButton => document.getElementById(tabButton.dataset.target))
      .filter(Boolean);

    this.tabButtonElements.forEach(tabButton => {
      tabButton.addEventListener('click', event => {
        event.preventDefault();
        this.showTab(tabButton.dataset.target);
      });
    });
  }

  showTab(targetPanelId){
    this.tabButtonElements.forEach(tabButton =>
      tabButton.classList.toggle('active', tabButton.dataset.target === targetPanelId)
    );
    this.panelElements.forEach(panelElement =>
      panelElement.classList.toggle('active', panelElement.id === targetPanelId)
    );
  }
}