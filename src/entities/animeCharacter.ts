export type WithId = {
  id: string;
};

export type AnimeCharacterNoId = {
  anime: string;
  name: string;
  type: string;
  ability: string;
};

export type AnimeCharacter = AnimeCharacterNoId & WithId;
