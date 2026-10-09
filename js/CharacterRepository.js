// ============================================================
// CharacterRepository — read-only access to the roster. Every
// lookup is mode-aware: a character only counts for a given system
// if that system's `visible` flag is true.
// ============================================================
class CharacterRepository {
  constructor(characters){
    this.characters = [...characters].sort((a, b) => a.name.localeCompare(b.name));
  }

  getAllForMode(mode){
    return this.characters.filter(character => {
      if (!character[mode] || !character[mode].visible) return false;
      if (character.isFutureCharacter && !showFutureCharacters) return false;
      if (character.isCollab && !showCollabCharacters) return false;
      return true;
    });
  }

  findByName(name){
    return this.characters.find(character => character.name === name) || null;
  }

  searchForMode(mode, query){
    const normalizedQuery = query.trim().toLowerCase();
    const all = this.getAllForMode(mode);
    if (!normalizedQuery) return all;
    return all.filter(character =>
      character.name.toLowerCase().includes(normalizedQuery) ||
      (character.nameZh && character.nameZh.includes(query.trim()))
    );
  }
}
