export type WithId = {
  id: string;
};

export type AnimeCharacterNoId = {
  anime: string;
  name: string;
  type: string;
  hability: string;
};

export type AnimeCharacter = AnimeCharacterNoId & WithId;
