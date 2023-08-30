import createDebug from 'debug';
import { User } from '../entities/user.js';
import { HttpError } from '../types/http.error.js';
import { Repository } from './repository.js';
import { UserModel } from './users.mongo.model.js';
const debug = createDebug('anime:Repo:UsersMongoRepo');

export class UsersMongoRepository implements Repository<User> {
  constructor() {
    debug('Instantiated');
  }

  async getAll(): Promise<User[]> {
    const data = await UserModel.find().exec();
    return data;
  }

  async getById(id: string): Promise<User> {
    const data = await UserModel.findById(id).exec();
    if (!data)
      throw new HttpError(404, 'Not Found', 'User not found in file system', {
        cause: 'Trying getById',
      });
    return data;
  }

  async search({
    key,
    value,
  }: {
    key: string;
    value: unknown;
  }): Promise<User[]> {
    const data = await UserModel.find({ [key]: value }).exec();
    return data;
  }

  async create(newData: Omit<User, 'id'>): Promise<User> {
    newData.villainsAdded = [];
    const data = await UserModel.create(newData);
    return data;
  }

  async update(id: string, newData: Partial<User>): Promise<User> {
    const data = await UserModel.findByIdAndUpdate(id, newData, {
      new: true,
    }).exec();
    if (!data)
      throw new HttpError(404, 'Not Found', 'User not found in file system', {
        cause: 'Trying update',
      });
    return data;
  }

  async delete(id: string): Promise<void> {
    const result = await UserModel.findByIdAndDelete(id).exec();
    if (!result)
      throw new HttpError(404, 'Not Found', 'User not found in file system', {
        cause: 'Trying delete',
      });
  }
}
