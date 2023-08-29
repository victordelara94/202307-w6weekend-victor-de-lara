import { Router as createRouter } from 'express';
import { AnimeController } from '../controller/anime.characters.controller.js';
import { CharacterAnimeRepository } from '../repository/anime.character.repository.js';
const repo = new CharacterAnimeRepository();
const animeCharactersController = new AnimeController(repo);
export const animeCharactersRouter = createRouter();

animeCharactersRouter.get(
  '/',
  animeCharactersController.getAll.bind(animeCharactersController)
);
animeCharactersRouter.get(
  '/:id',
  animeCharactersController.getById.bind(animeCharactersController)
);
animeCharactersRouter.post(
  '/',
  animeCharactersController.create.bind(animeCharactersController)
);
animeCharactersRouter.patch(
  '/:id',
  animeCharactersController.update.bind(animeCharactersController)
);
animeCharactersRouter.delete(
  '/:id',
  animeCharactersController.delete.bind(animeCharactersController)
);
