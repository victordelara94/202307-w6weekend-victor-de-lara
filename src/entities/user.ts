import { WithId } from '../types/id.js';
import { AnimeVillain } from './animeVillain.js';

export type LoginData = {
  userName: string;
  password: string;
  email: string;
};

export type UserNoId = LoginData & {
  firstName: string;
  surname: string;
  role: 'admin' | 'pro' | 'user';
  isAlive: boolean;
  villainsAdded: AnimeVillain[];
};

export type User = WithId & UserNoId;
