import createDebug from 'debug';
import { AnimeVillain } from '../entities/animeVillain.js';
import { HttpError } from '../types/http.error.js';
import { VillainModel } from './anime.villains.mongo.model.js';
import { Repository } from './repository.js';

const debug = createDebug('anime:villainsRepo');
export class AnimeVillainsMongoRepository implements Repository<AnimeVillain> {
  constructor() {
    debug('Instantiated');
  }

  async getAll(): Promise<AnimeVillain[]> {
    const data = await VillainModel.find().exec();
    return data;
  }

  async getById(id: string): Promise<AnimeVillain> {
    const data = await VillainModel.findById(id).exec();
    if (!data)
      throw new HttpError(
        404,
        'Not Found',
        'Villain not found in file system',
        {
          cause: 'Trying getById',
        }
      );
    return data;
  }

  async create(newData: Omit<AnimeVillain, 'id'>): Promise<AnimeVillain> {
    const data = await VillainModel.create(newData);
    return data;
  }

  async update(
    id: string,
    newData: Partial<AnimeVillain>
  ): Promise<AnimeVillain> {
    const data = await VillainModel.findByIdAndUpdate(id, newData, {
      new: true,
    }).exec();
    if (!data)
      throw new HttpError(
        404,
        'Not Found',
        'Villain not found in file system',
        {
          cause: 'Trying update',
        }
      );
    return data;
  }

  async delete(id: string): Promise<void> {
    const result = await VillainModel.findByIdAndDelete(id).exec();
    if (!result)
      throw new HttpError(
        404,
        'Not Found',
        'Villain not found in file system',
        {
          cause: 'Trying delete',
        }
      );
  }
}
