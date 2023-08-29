import createDebug from 'debug';
import { AnimeVillain } from '../entities/animeVillain.js';
import { Repository } from '../repository/repository.js';
import { Controller } from './controller.js';
const debug = createDebug('anime:controller:animeVillainController');
export class AnimeVillainsController extends Controller<AnimeVillain> {
  constructor(protected repo: Repository<AnimeVillain>) {
    super(repo);
    debug('Instantiated');
  }
}
