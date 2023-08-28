import { Router as createRouter } from 'express';
import { AnimeController } from '../controller/anime.controller.js';
import { CharacterAnimeRepository } from '../repository/anime.character.repository.js';
const repo = new CharacterAnimeRepository();
const animeController = new AnimeController(repo);
export const animeRouter = createRouter();

animeRouter.get('/', animeController.getAll.bind(animeController));
animeRouter.get('/:id', animeController.getById.bind(animeController));
animeRouter.post('/', animeController.create.bind(animeController));
animeRouter.patch('/:id', animeController.update.bind(animeController));
animeRouter.delete('/:id', animeController.delete.bind(animeController));
