import { Submission } from '../entities/submission.postgres.entity';

export interface IGetSubmissionsService {
  findAll(): Promise<Submission[]>;
}

export const IGetSubmissionsService = Symbol('IGetSubmissionsService');
