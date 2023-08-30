import { WithId } from '../types/id';

export type AnimeCharacterNoId = {
  anime: string;
  name: string;
  type: string;
  ability: string;
};

export type AnimeCharacter = AnimeCharacterNoId & WithId;
