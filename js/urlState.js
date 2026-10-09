// ============================================================
// URL <-> app-state helpers. Keeps the current tab and, where
// relevant, the current mode in the URL hash so links can be
// shared directly to a specific page + evaluation system.
// ============================================================
const TAB_TO_SLUG = { 'home-section': 'home', 'tier-list-section': 'tier-list', 'characters-section': 'characters' };
const SLUG_TO_TAB = { home: 'home-section', 'tier-list': 'tier-list-section', characters: 'characters-section' };

function parseUrlHash(){
  const raw = location.hash.replace(/^#\/?/, '');
  if (!raw) return { tab: 'home-section', mode: null };
  const [slug, mode] = raw.split('/');
  const tab = SLUG_TO_TAB[slug] || 'home-section';
  return { tab, mode: (mode === 'a0' || mode === 'highAwaken') ? mode : null };
}

function writeUrlHash(tabId, mode){
  const slug = TAB_TO_SLUG[tabId] || 'home';
  const hash = mode ? `#${slug}/${mode}` : `#${slug}`;
  // Some sandboxed embed contexts (e.g. a srcdoc iframe with an opaque
  // origin, like Claude's artifact preview) block the History API
  // entirely and throw a SecurityError here. URL bookmarking is a nice
  // extra, not core functionality, so failing silently is correct —
  // the rest of the app (tabs, modes, everything) must keep working
  // even where this isn't allowed.
  try {
    history.replaceState(null, '', hash);
  } catch (error) {
    // no-op: URL state just won't persist in this environment
  }
}
