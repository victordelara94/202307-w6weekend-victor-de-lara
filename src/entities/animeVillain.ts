export type WithId = {
  id: string;
};

export type AnimeVillainNoId = {
  anime: string;
  name: string;
  type: string;
  hability: string;
};

export type AnimeVillain = AnimeVillainNoId & WithId;
