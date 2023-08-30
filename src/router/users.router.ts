import { Router as createRouter } from 'express';
import { UsersController } from '../controller/users.controller.js';

import createDebug from 'debug';
import { UsersMongoRepository } from '../repository/users.mongo.repository.js';
const debug = createDebug('anime:Router:UsersRouter');

debug('Loaded');
const repo = new UsersMongoRepository();
const userController = new UsersController(repo);
export const usersRouter = createRouter();

usersRouter.patch('/login', userController.login.bind(userController));
usersRouter.post('/register', userController.create.bind(userController));

usersRouter.get('/', userController.getAll.bind(userController));
usersRouter.get('/:id', userController.getById.bind(userController));
usersRouter.patch('/:id', userController.update.bind(userController));
usersRouter.delete('/:id', userController.delete.bind(userController));
