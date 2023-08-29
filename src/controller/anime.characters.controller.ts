import createDebug from 'debug';
import { NextFunction, Request, Response } from 'express';
import { AnimeCharacter } from '../entities/animeCharacter';
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
      const data = await this.repo.getById(id);
      res.json(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const finalTask = await this.repo.create(req.body);
      res.status(201);
      res.json(finalTask);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const finalTask = await this.repo.update(id, req.body);
      res.json(finalTask);
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await this.repo.delete(id);
      res.status(204);
      res.json({});
    } catch (error) {
      next(error);
    }
  }
}
