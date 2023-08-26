import { Router as createRouter } from 'express';
import { AnimeController } from '../controller/anime.controller.js';

const animeController = new AnimeController();
export const animeRouter = createRouter();

animeRouter.get('/', animeController.getAll.bind(animeController));
animeRouter.get('/:id', animeController.getById.bind(animeController));
animeRouter.post('/', animeController.create.bind(animeController));
animeRouter.patch('/:id', animeController.update.bind(animeController));
animeRouter.delete('/:id', animeController.delete.bind(animeController));
