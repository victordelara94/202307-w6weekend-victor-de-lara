import { readFile, writeFile } from 'fs/promises';

import { Request, Response } from 'express';

export class AnimeController {
  async getAll(req: Request, res: Response) {
    try {
      const data = JSON.parse(
        await readFile('data.json', { encoding: 'utf-8' })
      );
      res.json(data);
    } catch (error) {
      console.error('Error getting characters', error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: any[] = JSON.parse(
        await readFile('data.json', { encoding: 'utf-8' })
      );
      const item = data.find((item) => item.id === id);
      res.json(item);
    } catch (error) {
      console.error('Error getting characters', error);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const newData = req.body;
      newData.id = crypto.randomUUID();
      const data: any[] = JSON.parse(
        await readFile('data.json', { encoding: 'utf-8' })
      );
      data.push(newData);

      await writeFile('data.json', JSON.stringify(data), { encoding: 'utf-8' });

      res.json(newData);
    } catch (error) {
      console.error('Error getting characters', error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: any[] = JSON.parse(
        await readFile('data.json', { encoding: 'utf-8' })
      );
      const newData = data.map((item) => (item.id === id ? req.body : item));
      await writeFile('data.json', JSON.stringify(newData));
      res.send(`Patch character id: ${id}`);
    } catch (error) {
      console.error('Error getting characters', error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: any[] = JSON.parse(
        await readFile('data.json', { encoding: 'utf-8' })
      );
      const newData = data.filter((item) => item.id !== id);
      await writeFile('data.json', JSON.stringify(newData), {
        encoding: 'utf-8',
      });
      res.send(`Delete character id: ${id}`);
    } catch (error) {
      console.error('Error getting characters', error);
    }
  }
}
