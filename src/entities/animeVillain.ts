export type WithId = {
  id: string;
};

export type AnimeVillainNoId = {
  anime: string;
  name: string;
  type: string;
  ability: string;
};

export type AnimeVillain = AnimeVillainNoId & WithId;
