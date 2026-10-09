// ============================================================
// CharacterImageResolver — computes where a character's art lives,
// plus a fallback initial letter for when an image isn't available.
// ============================================================
class CharacterImageResolver {
  constructor({ halfBodyArtDir, closedUpIconDir, extension }){
    this.halfBodyArtDir = halfBodyArtDir;
    this.closedUpIconDir = closedUpIconDir;
    this.extension = extension;
  }

  getHalfBodyArtSrc(character){
    return `${this.halfBodyArtDir}${encodeURIComponent(character.imageKey)}${this.extension}`;
  }

  getClosedUpIconSrc(character){
    return `${this.closedUpIconDir}${encodeURIComponent(character.imageKey)}${this.extension}`;
  }

  getInitial(character){
    return character.name.trim().charAt(0).toUpperCase();
  }
}
