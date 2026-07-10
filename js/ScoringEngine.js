// ============================================================
// ScoringEngine — turns a character's five factor values (grades
// and/or cost & value tiers) into a single weighted score, and
// that score into a final tier letter. The numeric score itself
// is never displayed in the UI; it only decides sort order and
// tier placement.
// ============================================================
class ScoringEngine {
  constructor(factorDefinitions, factorWeights, typeConverters){
    this.factorDefinitions = factorDefinitions;
    this.factorWeights = factorWeights;
    this.typeConverters = typeConverters;
  }

  getScore(character){
    let weightedSum = 0;
    let totalWeight = 0;
    for (const factor of this.factorDefinitions){
      const weight = this.factorWeights[factor.key] ?? 1;
      const convertToNumber = this.typeConverters[factor.type];
      weightedSum += convertToNumber(character[factor.key]) * weight;
      totalWeight += weight;
    }
    return totalWeight > 0 ? weightedSum / totalWeight : 3;
  }

  getTierForScore(score){
    if (score >= 4.5) return 'S';
    if (score >= 3.5) return 'A';
    if (score >= 2.5) return 'B';
    if (score >= 1.5) return 'C';
    return 'D';
  }

  getTierForCharacter(character){
    return this.getTierForScore(this.getScore(character));
  }
}
