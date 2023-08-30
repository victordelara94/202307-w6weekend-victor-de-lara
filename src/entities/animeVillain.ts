import { WithId } from '../types/id';
import { User } from './user';

export type AnimeVillainNoId = {
  anime: string;
  name: string;
  type: string;
  ability: string;
  creator: User;
};

export type AnimeVillain = AnimeVillainNoId & WithId;
