// Where character art lives. Both folders hold a same-named file per
// character (matched by `imageKey`, not the display `name`, since names
// can contain spaces/punctuation that aren't great for filenames).
const CHARACTER_IMAGE_CONFIG = {
  halfBodyArtDir: 'db/characters/HalfBodyArt/',
  closedUpIconDir: 'db/characters/ClosedUpIcon/',
  extension: '.png'
};

// ============================================================
// ROSTER DATA — this is the "backend". Add, edit, or remove
// characters here directly.
//   imageKey        : filename (no extension) shared by both art folders
//   starterGame / calculation / bossMaxxing : 'S' | 'A' | 'B' | 'C' | 'D'
//   investmentCost : { tier: 'Low' | 'Medium' | 'High', requirement: string | null }
//   gachaValue      : 'Low' | 'Medium' | 'High'
//   investmentCostNote / gachaValueNote / briefReview : shown when a
//   character's row is expanded on the Characters tab.
// The website only reads this list; it has no editing UI at all.
// ============================================================
const CHARACTER_ROSTER = [
  {
    name: 'Nicola',
    imageKey: 'Nicola',
    starterGame: 'C', calculation: 'A', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: 'Heavy Gear, Affix & Resonance Investment' },
    gachaValue: 'Low',
    investmentCostNote: 'Nicola demands heavy investment across Gears, Affixes, and Resonance Level before she performs at her best.',
    gachaValueNote: "She needs Awakening 2 (A2) to really come online, and she isn't a versatile pick outside of that specialized role.",
    briefReview: "Her stats are strong and her kit feels complete once built, but the sheer cost required to get her there is steep."
  }
];
