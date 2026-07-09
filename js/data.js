// ============================================================
// ROSTER DATA — this is the "backend". Add, edit, or remove
// characters here directly.
//   starterGame / calculation / bossMaxxing : 'S' | 'A' | 'B' | 'C' | 'D'
//   investmentCost : { tier: 'Low' | 'Medium' | 'High', requirement: string | null }
//   gachaValue      : 'Low' | 'Medium' | 'High'
//   investmentCostNote / gachaValueNote / briefReview : shown when a
//   character's row is expanded on the Characters tab.
// The website only reads this list; it has no editing UI at all.
// ============================================================
const CHARACTER_ROSTER = [
  {
    name: 'Seraphine Dawnbreak',
    starterGame: 'S', calculation: 'A', bossMaxxing: 'B',
    investmentCost: { tier: 'Low', requirement: null },
    gachaValue: 'High',
    investmentCostNote: 'Seraphine performs well even at base copies, needing only light material investment to unlock her core rotation.',
    gachaValueNote: 'A dependable early pull who stays useful well into the midgame, making her a safe first copy for new accounts.',
    briefReview: 'One of the most account-friendly pulls in the game: cheap to build, strong out of the gate, and flexible enough to stay relevant as your roster grows.'
  },
  {
    name: 'Kaelith Voss',
    starterGame: 'C', calculation: 'S', bossMaxxing: 'S',
    investmentCost: { tier: 'High', requirement: 'Survivability Needed' },
    gachaValue: 'Medium',
    investmentCostNote: 'Kaelith needs significant investment in survivability gear before his damage output becomes safe to use in harder content.',
    gachaValueNote: 'Best suited to players who already have a stable support core — skippable for brand-new accounts still building their foundation.',
    briefReview: 'A ceiling-defining Calculation and Boss Maxxing specialist, but his fragility means he asks a lot before he gives much back.'
  },
  {
    name: 'Old Man Rook',
    starterGame: 'B', calculation: 'B', bossMaxxing: 'C',
    investmentCost: { tier: 'Low', requirement: null },
    gachaValue: 'Medium',
    investmentCostNote: 'Rook is nearly ready to use at base copies, requiring minimal extra investment to perform his support role.',
    gachaValueNote: 'A solid utility pull for F2P players, though his ceiling is lower than premier support units.',
    briefReview: "Won't carry a team on his own, but he's cheap, easy to slot in, and rarely a wasted pull."
  },
  {
    name: 'Nyx-9 Prototype',
    starterGame: 'D', calculation: 'C', bossMaxxing: 'A',
    investmentCost: { tier: 'Medium', requirement: 'Survivability Needed' },
    gachaValue: 'Low',
    investmentCostNote: 'Nyx-9 needs moderate investment in survivability support to stay alive long enough to use her Boss Maxxing kit.',
    gachaValueNote: 'Her narrow niche and slow early game make her a lower priority pull for most players.',
    briefReview: 'Rewards a very specific boss-focused build but struggles everywhere else, making her a speciality pull rather than a roster staple.'
  }
];
