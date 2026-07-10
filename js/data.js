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
  },
  {
    name: 'Tennie',
    imageKey: 'Tennie',
    starterGame: 'B', calculation: 'A', bossMaxxing: 'C',
    investmentCost: { tier: 'Low'},
    gachaValue: 'Average',
    investmentCostNote: 'Tennie is a pure support, no need to invest too much.',
    gachaValueNote: "Average, can be teammate with Conner. Can be substitute by other supports.",
    briefReview: "Can be Conner's teammate, very good in Nayuta-Aoba shuffle, can in in Electric team, Perma-Freeze has no DMG, not a must-pull."
  },
  {
    name: 'Pelota',
    imageKey: 'Pelota',
    starterGame: 'D', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: 'Invest as Sub-DPS'},
    gachaValue: 'Very Low',
    investmentCostNote: 'Pelota needs to be invested as a Sub-DPS to perform well.',
    gachaValueNote: "Very Low, Pure Electric Team Support, if sub in other team its only for fun, A1 provide Final DMG reduction, but not a must-pull.",
    briefReview: "Pelota can give Nicola a huge survival advantage, and right now Nicola is pretty much the only one who can proc her kits properly."
  },
  {
    name: 'Stella',
    imageKey: 'Stella',
    starterGame: 'S', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: 'Need Survivability.'},
    gachaValue: 'Must',
    investmentCostNote: 'Stella needs survivability investment.',
    gachaValueNote: "Stella is a must-pull, its a win for losing 50/50 before her A5.",
    briefReview: "Stella is Stella."
  },
  {
    name: 'Anfiya',
    imageKey: 'Anfiya',
    starterGame: 'B', calculation: 'S', bossMaxxing: 'A',
    investmentCost: { tier: 'Low'},
    gachaValue: 'High',
    investmentCostNote: 'Anfiya is a versatile support who can be built with a low investment.',
    gachaValueNote: "Versatile CC Support, A5 for Basic-Attack Team, consider the price before you gacha.",
    briefReview: "Anfiya is the end of CC support, can play Perma-Coffin when she is support."
  }
];
