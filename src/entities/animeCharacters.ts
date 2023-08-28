export type WithId = {
  id: string;
};

export type AnimeCharactersNoId = {
  anime: string;
  name: string;
  type: string;
  hability: string;
};

export type AnimeCharacter = AnimeCharactersNoId & WithId;
