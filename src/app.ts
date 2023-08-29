import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { animeRouter } from './router/anime.router.js';

export const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use('', animeRouter);
app.use(errorMiddleware);
