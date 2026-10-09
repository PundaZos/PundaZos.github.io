// ============================================================
// Utilities
// ============================================================
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

const CHEVRON_SVG = '<svg viewBox="0 0 8 12" width="8" height="12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Two overlapping rings — a simple, recognizable "crossover" mark
// used to flag collaboration characters wherever their name appears.
const COLLAB_ICON_SVG = '<svg viewBox="0 0 20 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="7" cy="6" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="13" cy="6" r="5" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>';
