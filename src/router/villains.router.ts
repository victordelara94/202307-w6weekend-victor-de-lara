import createDebug from 'debug';
import { Router as createRouter } from 'express';
import { AnimeVillainsController } from '../controller/anime.villains.controller.js';
import { AnimeVillainsMongoRepository } from '../repository/anime.villains.mongo.repository.js';
const debug = createDebug('anime:Router:VillainsRouter');

debug('Loaded');
const repo = new AnimeVillainsMongoRepository();
const animeVillainsController = new AnimeVillainsController(repo);
export const animeVillainsRouter = createRouter();

animeVillainsRouter.get(
  '/',
  animeVillainsController.getAll.bind(animeVillainsController)
);
animeVillainsRouter.get(
  '/:id',
  animeVillainsController.getById.bind(animeVillainsController)
);
animeVillainsRouter.post(
  '/',
  animeVillainsController.create.bind(animeVillainsController)
);
animeVillainsRouter.patch(
  '/:id',
  animeVillainsController.update.bind(animeVillainsController)
);
animeVillainsRouter.delete(
  '/:id',
  animeVillainsController.delete.bind(animeVillainsController)
);
