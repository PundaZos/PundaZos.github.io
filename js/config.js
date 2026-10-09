// ============================================================
// CONFIG — grading scale and the two independent rating systems.
// ============================================================
const GRADE_LETTERS = ['S', 'A', 'B', 'C', 'D'];
const GRADE_SORT_RANK = { S: 0, A: 1, B: 2, C: 3, D: 4 };
const PLACEHOLDER_A0_REVIEW = 'Placeholder — A0 review not yet written.';

// ------------------------------------------------------------
// Provisional A0 tier inference. The site's real design is that
// the final tier is always a manual editorial call — this exists
// only as a *temporary stand-in* for characters that don't have a
// real, human-set verdict yet, so the board isn't just showing an
// arbitrary placeholder letter for everyone. A character's a0.tier
// is only used directly once a0.tierIsManual is true; until then
// this function stands in with the A0 Priority grade itself, since
// that field already directly answers "is this worth pulling at
// A0" — it's not averaged with Content/Versatility, which measure
// different things. Every place that shows this marks it provisional.
//
// Characters who were never part of a ratings import at all (still
// on the original placeholder review text) skip this entirely —
// they fall back to their own a0.tier field instead, which acts as
// a simple interim placement (usually C or D) set directly in the
// roster data until real ratings exist for them.
// ------------------------------------------------------------
function hasRealA0Data(character){
  return character.a0.review !== PLACEHOLDER_A0_REVIEW;
}

function inferProvisionalA0Tier(character){
  if (!hasRealA0Data(character)) return character.a0.tier;
  return character.a0.priority;
}

function getA0Tier(character){
  return character.a0.tierIsManual ? character.a0.tier : inferProvisionalA0Tier(character);
}

function isA0TierProvisional(character){
  return !character.a0.tierIsManual;
}

const GRADE_TO_COLOR_VAR = {
  S: '--s-vivid', A: '--a-vivid', B: '--b-vivid', C: '--c-vivid', D: '--d-vivid'
};
const GRADE_MEANING_KEY = {
  S: 'grade.excellent', A: 'grade.strong', B: 'grade.solid', C: 'grade.situational', D: 'grade.notRecommended'
};

// A0 system: "is this character worth obtaining at their first copy?"
// Note: `priority` is intentionally NOT one of the displayed fields.
// It's still stored per-character (a0.priority) and used internally
// to infer a provisional tier when no manual verdict exists yet —
// but it's not shown as its own column/section, since its only job
// is feeding the Tier List placement.
const A0_RATING_FIELDS = [
  { key: 'content', labelKey: 'field.content', noteKey: 'contentNote', descKey: 'fieldDesc.content' },
  { key: 'versatility', labelKey: 'field.versatility', noteKey: 'versatilityNote', descKey: 'fieldDesc.versatility' },
  { key: 'longevity', labelKey: 'field.longevity', noteKey: 'longevityNote', descKey: 'fieldDesc.longevity' }
];

// High Awaken system: "is this character worth investing more copies into?"
const HIGH_AWAKEN_RATING_FIELDS = [
  { key: 'damage', labelKey: 'field.damage', noteKey: 'damageNote', descKey: 'fieldDesc.damage' },
  { key: 'highDifficulty', labelKey: 'field.highDifficulty', noteKey: 'highDifficultyNote', descKey: 'fieldDesc.highDifficulty' },
  { key: 'costRecovery', labelKey: 'field.costRecovery', noteKey: 'costRecoveryNote', descKey: 'fieldDesc.costRecovery' },
  { key: 'cardCycling', labelKey: 'field.cardCycling', noteKey: 'cardCyclingNote', descKey: 'fieldDesc.cardCycling' },
  { key: 'costEffectiveness', labelKey: 'field.costEffectiveness', noteKey: 'costEffectivenessNote', descKey: 'fieldDesc.costEffectiveness' }
];

// Everything that differs between the two evaluation systems lives here,
// in one place, so views can stay mode-agnostic and just read from this.
const MODE_CONFIG = {
  a0: {
    tierLabelKey: 'shared.tierLabelA0',
    fields: A0_RATING_FIELDS,
    explainerKey: 'explainer.a0'
  },
  highAwaken: {
    tierLabelKey: 'shared.tierLabelHighAwaken',
    fields: HIGH_AWAKEN_RATING_FIELDS,
    explainerKey: 'explainer.highAwaken'
  }
};
