import { Schema, model } from 'mongoose';
import { AnimeVillain } from '../entities/animeVillain.js';

const villainSchema = new Schema<AnimeVillain>({
  anime: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ability: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});
villainSchema.set('toJSON', {
  transform(_document, returnedObject) {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwd;
  },
});

export const VillainModel = model('AnimeVillain', villainSchema, 'villains');
