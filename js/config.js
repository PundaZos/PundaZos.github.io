// ============================================================
// CONFIG — grading scale and factor definitions.
// ============================================================
const GRADE_LETTERS = ['S', 'A', 'B', 'C', 'D'];

// CSS custom-property name holding each grade's fixed, theme-stable color.
const GRADE_TO_COLOR_VAR = {
  S: '--s-vivid',
  A: '--a-vivid',
  B: '--b-vivid',
  C: '--c-vivid',
  D: '--d-vivid'
};

const GRADE_MEANING = {
  S: 'Excellent',
  A: 'Strong',
  B: 'Solid',
  C: 'Situational',
  D: 'Not Recommended'
};

// The four factors that describe a character. `key` matches a property
// on each character object in CHARACTER_ROSTER. `type` selects which
// scale (and which renderer) applies:
//   'grade' -> S/A/B/C/D, 'cost' -> { tier, requirement }, 'value' -> Must/High/Average/Low/Very Low
//
// Note: the final Gacha Value verdict (shown in the Overall column and
// used to place characters on the Tier List board) is NOT calculated
// from these four factors. It's set directly per character via
// `overallGrade` in CHARACTER_ROSTER — these four are just the
// breakdown/reasoning shown alongside it.
const FACTOR_DEFINITIONS = [
  {
    key: 'starterGame', label: 'Starter Game', type: 'grade',
    description: 'How the character performs with minimal investment — can the team come together easily in the early game, and is it comfortable to use through early-to-mid game story content?'
  },
  {
    key: 'calculation', label: 'Calculation', type: 'grade',
    description: 'Real combat power in Calculation and Deep Calculation content, and how well the character fits into a Deep Calculation team. The game is shifting toward Boss Maxxing, so this factor is currently weighted lower.'
  },
  {
    key: 'bossMaxxing', label: 'Boss Maxxing', type: 'grade',
    description: 'A combined look at damage output and cost-efficiency, with some adjustment for characters that need heavy manual play. The game is shifting toward Boss Maxxing, so this factor is currently weighted higher.'
  },
  {
    key: 'investmentCost', label: 'Investment Cost', type: 'cost',
    description: 'Whether the character can run on generic gear with no specific affixes, whether they need a specific weapon, armor, or accessory to work well, and how much extra investment — Resonance Level, Skill Level, and similar — actually helps.'
  },
  {
    key: 'awakenValue', label: 'Awaken Value', type: 'value',
    description: 'Performance at low Awakens, whether higher Awakens unlock a genuinely powerful payoff, and how broadly applicable the character is across content.'
  }
];
