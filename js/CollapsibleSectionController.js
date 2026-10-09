// ============================================================
// CollapsibleSectionController — a button that shows/hides a
// separate content block (used for the Characters tab's
// "What do these mean?" toggle).
// ============================================================
class CollapsibleSectionController {
  constructor(toggleButtonElement, contentElement){
    this.toggleButtonElement = toggleButtonElement;
    this.contentElement = contentElement;
    this.toggleButtonElement.addEventListener('click', () => this.toggle());
  }

  toggle(){
    const isOpen = !this.contentElement.hasAttribute('hidden');
    if (isOpen){
      this.contentElement.setAttribute('hidden', '');
    } else {
      this.contentElement.removeAttribute('hidden');
    }
    this.toggleButtonElement.classList.toggle('open', !isOpen);
  }
}
