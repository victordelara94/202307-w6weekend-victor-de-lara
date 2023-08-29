import { NextFunction, Request, Response } from 'express';
import { AnimeVillain } from '../entities/animeVillain';
import { AnimeVillainsMongoRepository } from '../repository/anime.villains.mongo.repository';
import { Repository } from '../repository/repository';
import { AnimeVillainsController } from './anime.villains.controller';

describe('Given the class AnimeVillainsController', () => {
  describe('When we instantiate it', () => {
    const mockRepo: Repository<AnimeVillain> = {
      getAll: jest.fn(),
      getById: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    } as unknown as AnimeVillainsMongoRepository;

    const animeVillainsController = new AnimeVillainsController(mockRepo);
    test('Then method getAll should have been called', async () => {
      const mockData = [{ id: '01' }];

      (mockRepo.getAll as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = {} as Request;
      const mockResponse = { json: jest.fn() } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.getAll(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getAll).toHaveBeenCalledWith();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
    test('Then method getAll should return an error', async () => {
      (mockRepo.getAll as jest.Mock).mockRejectedValue(
        new Error('Get All error')
      );

      const mockRequest = {} as Request;
      const mockResponse = { json: jest.fn() } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.getAll(mockRequest, mockResponse, mockNext);
      expect(mockRepo.getAll).toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(new Error('Get All error'));
    });
    test('Then, method getById should have been called', async () => {
      const mockData = { id: '01' };

      (mockRepo.getById as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = { params: { id: '01' } } as unknown as Request;
      const mockResponse = { json: jest.fn() } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.getById(
        mockRequest,
        mockResponse,
        mockNext
      );
      expect(mockRepo.getById).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
    test('Then, method getById should send an error', async () => {
      (mockRepo.getById as jest.Mock).mockRejectedValue(new Error('error'));

      const mockRequest = { params: { id: '01' } } as unknown as Request;
      const mockResponse = { json: jest.fn() } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.getById(
        mockRequest,
        mockResponse,
        mockNext
      );
      expect(mockRepo.getById).toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(new Error('error'));
    });
    test('Then, method create should be called', async () => {
      const mockData = { id: '01' };
      (mockRepo.create as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = { body: { id: '01' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
        status: Number,
      } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.create(mockRequest, mockResponse, mockNext);
      expect(mockRepo.create).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
    test('Then, method create should send an error', async () => {
      (mockRepo.create as jest.Mock).mockRejectedValue(new Error('error'));

      const mockRequest = { body: { id: '01' } } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
        status: Number,
      } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.create(mockRequest, mockResponse, mockNext);
      expect(mockRepo.create).toHaveBeenCalled();
      expect(mockNext).toHaveBeenCalledWith(new Error('error'));
    });
    test('Then, method update should be called', async () => {
      const mockData = { id: '1' };
      (mockRepo.update as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = {
        params: { id: '1' },
        body: {},
      } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.update(mockRequest, mockResponse, mockNext);
      expect(mockRepo.update).toHaveBeenCalledWith('1', {});
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
    test('Then, method update should send an error', async () => {
      (mockRepo.update as jest.Mock).mockRejectedValue(new Error('error'));

      const mockRequest = {
        params: { id: '1' },
        body: {},
      } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
      } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.update(mockRequest, mockResponse, mockNext);
      expect(mockRepo.update).toHaveBeenCalledWith('1', {});
      expect(mockNext).toHaveBeenCalledWith(new Error('error'));
    });
    test('Then, method delete should be called', async () => {
      const mockData = {};
      (mockRepo.delete as jest.Mock).mockResolvedValue(mockData);

      const mockRequest = {
        params: { id: '1' },
      } as unknown as Request;
      const mockResponse = {
        json: jest.fn(),
        status: Number,
      } as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.delete(mockRequest, mockResponse, mockNext);
      expect(mockRepo.delete).toHaveBeenCalledWith('1');
      expect(mockResponse.json).toHaveBeenCalledWith(mockData);
    });
    test('Then, method delete should send and error', async () => {
      (mockRepo.delete as jest.Mock).mockRejectedValue(new Error('error'));

      const mockRequest = {
        params: { id: '1' },
      } as unknown as Request;
      const mockResponse = {} as unknown as Response;
      const mockNext = jest.fn() as NextFunction;

      await animeVillainsController.delete(mockRequest, mockResponse, mockNext);
      expect(mockRepo.delete).toHaveBeenCalledWith('1');
      expect(mockNext).toHaveBeenCalledWith(new Error('error'));
    });
  });
});
