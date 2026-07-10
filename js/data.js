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
    gachaValueNote: "She needs A2 (Awaken 2) to really come online, and she isn't a versatile pick outside of Electric DPS.",
    briefReview: "Her stats are strong and her kit is solid once built, but the sheer cost required to get her there is steep."
  },
  {
    name: 'Caroline',
    imageKey: 'Caroline',
    starterGame: 'D', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'Low'},
    gachaValue: 'High',
    investmentCostNote: 'Caroline is a pure support, no need to invest too much.',
    gachaValueNote: "Her A1 (Awaken 1) makes her versatile, can be a great support for many teams.",
    briefReview: "A Cost Regen support for Electric teams, strong Draw support at A1."
  }
];
