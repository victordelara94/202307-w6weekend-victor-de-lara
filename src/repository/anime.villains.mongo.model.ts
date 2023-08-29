import { Schema, model } from 'mongoose';
import { AnimeVillain } from '../entities/animeVillain';

const villainSchema = new Schema<AnimeVillain>({
  anime: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  hability: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
export const VillainModel = model('Note', villainSchema, 'villains');
