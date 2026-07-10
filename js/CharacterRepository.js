// ============================================================
// CharacterRepository — read-only access to the roster, plus
// simple name search/lookup.
// ============================================================
class CharacterRepository {
  constructor(characters){
    this.characters = characters;
  }

  getAll(){
    return this.characters;
  }

  findByName(name){
    return this.characters.find(character => character.name === name) || null;
  }

  searchByName(query){
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return this.characters;
    return this.characters.filter(character =>
      character.name.toLowerCase().includes(normalizedQuery)
    );
  }
}