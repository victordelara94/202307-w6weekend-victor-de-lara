import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { animeRouter } from './router/anime.router.js';

export const app = express();

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.static('public'));

app.use('/anime', animeRouter);
