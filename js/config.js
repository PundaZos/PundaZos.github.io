// ============================================================
// CONFIG — grading scale, factor definitions, and fixed weights.
// ============================================================
const GRADE_LETTERS = ['S', 'A', 'B', 'C', 'D'];

const GRADE_TO_NUMBER = { S: 5, A: 4, B: 3, C: 2, D: 1 };

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
  D: 'Skip'
};

// Investment Cost and Gacha Value don't use the S–D scale — they use
// their own three-tier scale instead. Numeric values below are only
// used internally for sorting into the tier board; never displayed.
// Low cost is good (cheap to build); high Gacha Value is good (worth pulling).
const COST_TIER_TO_NUMBER = { Low: 5, Medium: 3, High: 1 };
const VALUE_TIER_TO_NUMBER = { High: 5, Medium: 3, Low: 1 };

// Converts a character's raw stored value for a factor into a number,
// depending on which scale that factor uses.
const FACTOR_TYPE_TO_CONVERTER = {
  grade: rawGrade => GRADE_TO_NUMBER[rawGrade],
  cost: rawCost => COST_TIER_TO_NUMBER[rawCost.tier],
  value: rawValue => VALUE_TIER_TO_NUMBER[rawValue]
};

// The five factors that make up a character's overall recommendation.
// `key` matches a property on each character object in CHARACTER_ROSTER.
// `type` selects which scale (and which converter/renderer) applies:
//   'grade' -> S/A/B/C/D, 'cost' -> { tier, requirement }, 'value' -> Low/Medium/High
const FACTOR_DEFINITIONS = [
  { key: 'starterGame',    label: 'Starter Game',    type: 'grade' },
  { key: 'calculation',    label: 'Calculation',     type: 'grade' },
  { key: 'bossMaxxing',    label: 'Boss Maxxing',    type: 'grade' },
  { key: 'investmentCost', label: 'Investment Cost', type: 'cost' },
  { key: 'gachaValue',     label: 'Gacha Value',     type: 'value' }
];

// Fixed, equal weighting across all five factors (not adjustable in the UI).
const FACTOR_WEIGHTS = {
  starterGame: 1,
  calculation: 1,
  bossMaxxing: 1,
  investmentCost: 1,
  gachaValue: 1
};