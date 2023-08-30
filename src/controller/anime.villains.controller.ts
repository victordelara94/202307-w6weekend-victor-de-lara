import createDebug from 'debug';
import { NextFunction, Request, Response } from 'express';
import { AnimeVillain } from '../entities/animeVillain.js';
import { Repository } from '../repository/repository.js';
import { UsersMongoRepository } from '../repository/users.mongo.repository.js';
import { Controller } from './controller.js';
const debug = createDebug('anime:controller:animeVillainController');
export class AnimeVillainsController extends Controller<AnimeVillain> {
  constructor(protected repo: Repository<AnimeVillain>) {
    super(repo);
    debug('Instantiated');
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userId } = req.params;
      const userRepo = new UsersMongoRepository();
      const user = await userRepo.getById(userId);
      req.body.creator = user.id;
      const finalData = await this.repo.create(req.body);
      user.villainsAdded.push(finalData);
      userRepo.update(user.id, user);
      res.status(201);
      res.send(finalData);
    } catch (error) {
      next(error);
    }
  }
}
