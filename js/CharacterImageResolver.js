// ============================================================
// CharacterImageResolver — computes where a character's art lives
// in each of the two art folders, plus a fallback initial letter
// for when an image file isn't available yet.
// ============================================================
class CharacterImageResolver {
  constructor({ halfBodyArtDir, closedUpIconDir, extension }){
    this.halfBodyArtDir = halfBodyArtDir;
    this.closedUpIconDir = closedUpIconDir;
    this.extension = extension;
  }

  getHalfBodyArtSrc(character){
    return `${this.halfBodyArtDir}${character.imageKey}${this.extension}`;
  }

  getClosedUpIconSrc(character){
    return `${this.closedUpIconDir}${character.imageKey}${this.extension}`;
  }

  getInitial(character){
    return character.name.trim().charAt(0).toUpperCase();
  }
}