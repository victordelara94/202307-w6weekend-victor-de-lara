import createDebug from 'debug';
import { AnimeVillain } from '../entities/animeVillain';
import { Repository } from '../repository/repository';
import { Controller } from './controller';
const debug = createDebug('anime:controller:animeVillainController');
export class AnimeVillainsController extends Controller<AnimeVillain> {
  constructor(protected repo: Repository<AnimeVillain>) {
    super(repo);
    debug('Instantiated');
  }
}
