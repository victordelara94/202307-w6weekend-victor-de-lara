import createDebug from 'debug';
import { NextFunction, Request, Response } from 'express';
import { writeFile } from 'fs/promises';
import { AnimeCharacter } from '../entities/animeCharacters';
import { Repository } from '../repository/repository';
const debug = createDebug('W6E:Controller:AnimeController');

export class AnimeController {
  // eslint-disable-next-line no-unused-vars
  constructor(private repo: Repository<AnimeCharacter>) {
    debug('Instantiated');
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.repo.getAll();
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await this.repo.getAll();
      const item = data.find((item) => item.id === id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const newData = req.body;
      const data = await this.repo.getAll();
      newData.id = data[data.length - 1].id + 1;
      data.push(newData);

      await writeFile('data.json', JSON.stringify(data), { encoding: 'utf-8' });

      res.json(newData);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await this.repo.getAll();
      const newData = data.map((item) => (item.id === id ? req.body : item));
      await writeFile('data.json', JSON.stringify(newData));
      res.send(`Patch character id: ${id}`);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const data = await this.repo.getAll();
      const newData = data.filter((item) => item.id !== id);
      await writeFile('data.json', JSON.stringify(newData), {
        encoding: 'utf-8',
      });
      res.send(`Delete character id: ${id}`);
    } catch (error) {
      next(error);
    }
  }
}
