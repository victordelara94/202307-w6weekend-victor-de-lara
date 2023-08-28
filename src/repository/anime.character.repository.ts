import createDebug from 'debug';
import { readFile, writeFile } from 'fs/promises';
import {
  AnimeCharacter,
  AnimeCharactersNoId,
} from '../entities/animeCharacters.js';
import { HttpError } from '../types/http.error.js';
import { Repository } from './repository';
const debug = createDebug('W6E:Repo:AnimeCharacterRepository');

export class CharacterAnimeRepository implements Repository<AnimeCharacter> {
  private file: string;
  constructor() {
    this.file = 'data.json';
    debug('Instantiated');
  }

  async getAll(): Promise<AnimeCharacter[]> {
    const data: AnimeCharacter[] = JSON.parse(
      await readFile(this.file, { encoding: 'utf-8' })
    );
    return data;
  }

  async getById(id: AnimeCharacter['id']): Promise<AnimeCharacter> {
    const data: AnimeCharacter[] = await this.getAll();
    const item = data.find((item) => item.id === id);
    if (!item)
      throw new HttpError(
        404,
        'Not Found',
        'AnimeCharacters not found in file system',
        {
          cause: 'Trying getById',
        }
      );
    return item;
  }

  async create(newData: AnimeCharactersNoId): Promise<AnimeCharacter> {
    const data: AnimeCharacter[] = await this.getAll();
    const newAnimeCharacters: AnimeCharacter = {
      ...newData,
      id: (data[data.length - 1].id + 1).toString(),
    };
    data.push(newAnimeCharacters);
    await this.saveOnFile(data);
    return newAnimeCharacters;
  }

  async update(
    id: AnimeCharacter['id'],
    item: Partial<AnimeCharacter>
  ): Promise<AnimeCharacter> {
    const data: AnimeCharacter[] = await this.getAll();
    const index = data.findIndex((item) => item.id === id);
    if (index < 0)
      throw new HttpError(
        404,
        'Not Found',
        'AnimeCharacter not found in file system',
        {
          cause: 'Trying update',
        }
      );
    data[index] = { ...data[index], ...item };
    await this.saveOnFile(data);
    return data[index];
  }

  async delete(id: AnimeCharacter['id']): Promise<void> {
    const data: AnimeCharacter[] = await this.getAll();
    const index = data.findIndex((item) => item.id === id);
    if (index < 0)
      throw new HttpError(
        404,
        'Not Found',
        'AnimeCharacter not found in file system',
        {
          cause: 'Trying delete',
        }
      );
    data.splice(index, 1);
    await this.saveOnFile(data);
  }

  private async saveOnFile(data: AnimeCharacter[]) {
    await writeFile(this.file, JSON.stringify(data), {
      encoding: 'utf-8',
    });
  }
}
