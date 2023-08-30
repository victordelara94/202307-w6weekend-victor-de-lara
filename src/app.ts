import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { animeCharactersRouter } from './router/characters.router.js';
import { animeVillainsRouter } from './router/villains.router.js';

export const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use('/characters', animeCharactersRouter);
app.use('/villains', animeVillainsRouter);
app.use('/users', animeVillainsRouter);
app.use(errorMiddleware);
